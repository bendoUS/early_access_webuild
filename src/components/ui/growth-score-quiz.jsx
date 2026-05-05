import { useState } from "react"
import { ChevronLeft, ChevronRight, Trophy, TrendingUp, Target, Repeat2, BarChart3 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogBody,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const PILLARS = [
  { id: "acquisition", label: "Acquisition", Icon: TrendingUp },
  { id: "conversion",  label: "Conversion",  Icon: Target },
  { id: "retention",   label: "Retention",   Icon: Repeat2 },
  { id: "structure",   label: "Structure & Data", Icon: BarChart3 },
]

const QUESTIONS = [
  // ── Acquisition ──────────────────────────────
  {
    id: 1, pillar: "acquisition",
    question: "Do you have a stable primary traffic source?",
    options: [
      { label: "No", points: 0 },
      { label: "Yes, but irregular", points: 5 },
      { label: "Yes, predictable", points: 10 },
    ],
  },
  {
    id: 2, pillar: "acquisition",
    question: "Do you know your CAC (Customer Acquisition Cost)?",
    options: [
      { label: "No", points: 0 },
      { label: "Roughly", points: 5 },
      { label: "Yes, precisely", points: 10 },
    ],
  },
  {
    id: 3, pillar: "acquisition",
    question: "Is your ROAS profitable?",
    options: [
      { label: "Not profitable", points: 0 },
      { label: "Break-even", points: 5 },
      { label: "Stably profitable", points: 10 },
    ],
  },
  {
    id: 4, pillar: "acquisition",
    question: "Do you have multiple traffic sources?",
    options: [
      { label: "Only 1 source", points: 0 },
      { label: "2 sources", points: 5 },
      { label: "3+ sources", points: 10 },
    ],
  },
  {
    id: 5, pillar: "acquisition",
    question: "Do you have an organic strategy (SEO, content, social)?",
    options: [
      { label: "No", points: 0 },
      { label: "Testing", points: 5 },
      { label: "Structured & running", points: 10 },
    ],
  },
  // ── Conversion ───────────────────────────────
  {
    id: 6, pillar: "conversion",
    question: "Do you know your conversion rate?",
    options: [
      { label: "No", points: 0 },
      { label: "Estimated", points: 5 },
      { label: "Tracked precisely", points: 10 },
    ],
  },
  {
    id: 7, pillar: "conversion",
    question: "Do you have visible social proof?",
    options: [
      { label: "No", points: 0 },
      { label: "A few reviews", points: 5 },
      { label: "Many, well highlighted", points: 10 },
    ],
  },
  {
    id: 8, pillar: "conversion",
    question: "Do you have upsells / cross-sells?",
    options: [
      { label: "None", points: 0 },
      { label: "Basic", points: 5 },
      { label: "Optimized", points: 10 },
    ],
  },
  {
    id: 9, pillar: "conversion",
    question: "Does your product page have a clear value proposition?",
    options: [
      { label: "Vague", points: 0 },
      { label: "Average", points: 5 },
      { label: "Very clear & differentiating", points: 10 },
    ],
  },
  {
    id: 10, pillar: "conversion",
    question: "Is your average order value increasing each quarter?",
    options: [
      { label: "No", points: 0 },
      { label: "Stable", points: 5 },
      { label: "Yes, growing", points: 10 },
    ],
  },
  // ── Retention ────────────────────────────────
  {
    id: 11, pillar: "retention",
    question: "Do you have an automated email sequence?",
    options: [
      { label: "No", points: 0 },
      { label: "Basic", points: 5 },
      { label: "Optimized", points: 10 },
    ],
  },
  {
    id: 12, pillar: "retention",
    question: "Do you use SMS marketing?",
    options: [
      { label: "No", points: 0 },
      { label: "Occasionally", points: 5 },
      { label: "Structured", points: 10 },
    ],
  },
  {
    id: 13, pillar: "retention",
    question: "Do you have a loyalty program?",
    options: [
      { label: "No", points: 0 },
      { label: "Simple", points: 5 },
      { label: "Strategic", points: 10 },
    ],
  },
  {
    id: 14, pillar: "retention",
    question: "Do you know your LTV (Lifetime Value)?",
    options: [
      { label: "No", points: 0 },
      { label: "Estimate", points: 5 },
      { label: "Precise calculation", points: 10 },
    ],
  },
  {
    id: 15, pillar: "retention",
    question: "Do your customers come back and repurchase?",
    options: [
      { label: "Rarely", points: 0 },
      { label: "Sometimes", points: 5 },
      { label: "Often", points: 10 },
    ],
  },
  // ── Structure & Data ─────────────────────────
  {
    id: 16, pillar: "structure",
    question: "Do you know your real net margin?",
    options: [
      { label: "No", points: 0 },
      { label: "Approximate", points: 5 },
      { label: "Yes, precisely", points: 10 },
    ],
  },
  {
    id: 17, pillar: "structure",
    question: "Do you have a KPI dashboard?",
    options: [
      { label: "No", points: 0 },
      { label: "Basic", points: 5 },
      { label: "Structured", points: 10 },
    ],
  },
  {
    id: 18, pillar: "structure",
    question: "Do you make decisions based on data?",
    options: [
      { label: "Pure intuition", points: 0 },
      { label: "Mix of both", points: 5 },
      { label: "Data-driven", points: 10 },
    ],
  },
  {
    id: 19, pillar: "structure",
    question: "Have you tested at least 5 different offers?",
    options: [
      { label: "No", points: 0 },
      { label: "2–3 offers", points: 5 },
      { label: "5+ offers", points: 10 },
    ],
  },
  {
    id: 20, pillar: "structure",
    question: "Does your business rely on a single product?",
    options: [
      { label: "Yes, one product", points: 0 },
      { label: "2 products", points: 5 },
      { label: "No, wide catalog", points: 10 },
    ],
  },
]

// ─────────────────────────────────────────────
// SCORING HELPERS
// ─────────────────────────────────────────────

const PILLAR_STYLES = {
  acquisition: {
    bar: "bg-blue-500",
    text: "text-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  conversion: {
    bar: "bg-emerald-500",
    text: "text-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  retention: {
    bar: "bg-purple-500",
    text: "text-purple-600",
    light: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
  },
  structure: {
    bar: "bg-amber-500",
    text: "text-amber-600",
    light: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
}

const SEGMENT_STYLES = {
  "Advanced Operator": {
    emoji: "🔵",
    bg: "bg-blue-50",
    border: "border-blue-300",
    score: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
  },
  "Scaling Ready": {
    emoji: "🟢",
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    score: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-700",
  },
  "Growth Potential": {
    emoji: "🟠",
    bg: "bg-orange-50",
    border: "border-orange-300",
    score: "text-orange-700",
    badge: "bg-orange-100 text-orange-700",
  },
  "High Risk": {
    emoji: "🔴",
    bg: "bg-red-50",
    border: "border-red-300",
    score: "text-red-700",
    badge: "bg-red-100 text-red-700",
  },
}

function getSegment(score) {
  if (score >= 85) return "Advanced Operator"
  if (score >= 70) return "Scaling Ready"
  if (score >= 40) return "Growth Potential"
  return "High Risk"
}

function getPillarScore(pillarId, answers) {
  const qs = QUESTIONS.filter((q) => q.pillar === pillarId)
  const total = qs.reduce((sum, q) => {
    const idx = answers[q.id - 1]
    return sum + (idx !== null ? q.options[idx].points : 0)
  }, 0)
  return { total, percent: Math.round((total / 50) * 100) }
}

function getPersonalizedMessage(score, weakestPillars) {
  const names = weakestPillars.map((p) => p.label).join(", ")
  if (score >= 85)
    return `You're operating at an advanced level. Your main leverage now is marginal optimization. Focus on ${names} to push past your current ceiling.`
  if (score >= 70)
    return `Your business is ready to scale. You're likely leaving 10–20% revenue on the table due to gaps in ${names}. Fix those first before increasing ad spend.`
  if (score >= 40)
    return `Your business has clear growth potential, but you're probably losing 15–30% of revenue due to weak ${names}. Fixing this before scaling will dramatically change your trajectory.`
  return `Your business has real foundational gaps in ${names}. Before scaling any channel, focus on building these fundamentals. It will determine if your next growth phase sticks or crashes.`
}

// ─────────────────────────────────────────────
// RESULTS SCREEN
// ─────────────────────────────────────────────

function ResultsScreen({ answers, onReset }) {
  const totalPoints = answers.reduce(
    (sum, idx, i) => sum + (idx !== null ? QUESTIONS[i].options[idx].points : 0),
    0
  )
  const globalScore = Math.round((totalPoints / 200) * 100)
  const segmentLabel = getSegment(globalScore)
  const seg = SEGMENT_STYLES[segmentLabel]

  const pillarScores = PILLARS.map((p) => ({
    ...p,
    ...getPillarScore(p.id, answers),
  })).sort((a, b) => a.percent - b.percent)

  const weakest3 = pillarScores.slice(0, 3)
  const message = getPersonalizedMessage(globalScore, weakest3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-start justify-center p-6 pt-12">
      <div className="w-full max-w-2xl space-y-5 pb-16">

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
              <Trophy className="w-7 h-7 text-background" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Your Growth Score™</h1>
          <p className="text-sm text-muted-foreground">
            Based on 20 answers across 4 growth pillars
          </p>
        </div>

        {/* Global score */}
        <div className={`rounded-xl border-2 ${seg.border} ${seg.bg} p-8 text-center`}>
          <div className={`text-8xl font-bold ${seg.score} tabular-nums mb-1`}>{globalScore}</div>
          <div className="text-sm text-muted-foreground mb-4">out of 100</div>
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${seg.badge}`}>
            {seg.emoji} {segmentLabel}
          </span>
        </div>

        {/* Message personnalisé */}
        <div className="rounded-xl border border-border bg-background p-5">
          <p className="text-sm text-foreground leading-relaxed italic">
            &ldquo;{message}&rdquo;
          </p>
        </div>

        {/* Scores par pilier */}
        <div className="rounded-xl border border-border bg-background p-5 space-y-5">
          <h2 className="font-semibold text-foreground text-sm uppercase tracking-wide text-muted-foreground">
            Score by pillar
          </h2>
          {pillarScores.map((p) => {
            const styles = PILLAR_STYLES[p.id]
            return (
              <div key={p.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${styles.text}`}>{p.label}</span>
                  <span className="text-sm font-bold text-foreground tabular-nums">{p.percent}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${styles.bar} transition-all duration-700`}
                    style={{ width: `${p.percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* 3 priorités */}
        <div className="rounded-xl border border-border bg-background p-5 space-y-3">
          <h2 className="font-semibold text-foreground text-sm uppercase tracking-wide text-muted-foreground">
            Your 3 priorities
          </h2>
          {weakest3.map((p, i) => {
            const styles = PILLAR_STYLES[p.id]
            return (
              <div
                key={p.id}
                className={`flex items-center gap-3 p-3.5 rounded-lg border ${styles.border} ${styles.light}`}
              >
                <span className="w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className={`text-sm font-semibold ${styles.text}`}>{p.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {p.percent}%. Focus here before scaling anything else.
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Retake */}
        <div className="text-center pt-2">
          <button
            onClick={onReset}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// QUIZ SCREEN
// ─────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function GrowthScoreQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null))
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailError, setEmailError] = useState("")

  const selectedAnswer = answers[currentQuestion]
  const question = QUESTIONS[currentQuestion]
  const currentPillar = PILLARS.find((p) => p.id === question.pillar)
  const styles = PILLAR_STYLES[question.pillar]
  const answeredCount = answers.filter((a) => a !== null).length
  const progress = ((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / QUESTIONS.length) * 100

  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers(Array(QUESTIONS.length).fill(null))
    setQuizCompleted(false)
    setEmail("")
    setEmailSubmitted(false)
    setEmailError("")
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!value) {
      setEmailError("Please enter your email address.")
      return
    }
    if (!EMAIL_REGEX.test(value)) {
      setEmailError("Please enter a valid email address.")
      return
    }
    setEmailError("")
    setEmailSubmitted(true)
  }

  const showEmailModal = quizCompleted && !emailSubmitted

  if (quizCompleted && emailSubmitted) {
    return <ResultsScreen answers={answers} onReset={handleReset} />
  }

  return (
    <>
      <Dialog open={showEmailModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
          <DialogHeader hideCloseButton>
            <DialogTitle>Get your Growth Score™</DialogTitle>
            <DialogDescription>
              Enter your email to unlock your results and see your personalized recommendations.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit}>
            <DialogBody className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="growth-score-email">Email</Label>
                <Input
                  id="growth-score-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError("")
                  }}
                  className={emailError ? "border-destructive" : ""}
                  autoComplete="email"
                />
                {emailError && (
                  <p className="text-sm text-destructive">{emailError}</p>
                )}
              </div>
            </DialogBody>
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto">
                See my results
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-start justify-center p-6 pt-12">
      <div className="w-full max-w-2xl">

        {/* Progress header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles.badge}`}
            >
              {currentPillar?.label}
            </span>
            <span className="text-sm text-muted-foreground tabular-nums">
              {currentQuestion + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-1.5 rounded-full bg-foreground transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-xl border border-border bg-background p-6 md:p-8 mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={[
                    "w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-200 font-medium text-sm cursor-pointer",
                    isSelected
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground hover:bg-muted/30 text-foreground",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={[
                        "w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200",
                        isSelected ? "border-background bg-background/20" : "border-current opacity-50",
                      ].join(" ")}
                    >
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-background block" />
                      )}
                    </span>
                    {option.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <span className="text-xs text-muted-foreground tabular-nums">
            {answeredCount} answered
          </span>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-80 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {currentQuestion === QUESTIONS.length - 1 ? "Get my score" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
    </>
  )
}
