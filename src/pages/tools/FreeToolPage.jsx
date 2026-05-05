import { Link, Navigate, useParams } from "react-router-dom"
import { getToolBySlug } from "./freeTools.data"
import { GrowthScoreQuiz } from "@/components/ui/growth-score-quiz"

const TOOL_COMPONENTS = {
  "growth-score": GrowthScoreQuiz,
}

function ComingSoon({ tool }) {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to free tools
        </Link>
      </div>

      <h1 className="text-3xl font-bold">{tool.title}</h1>
      <p className="text-muted-foreground mt-2">{tool.description}</p>

      <div className="mt-10 rounded-xl border border-border bg-background p-6">
        <div className="text-sm font-medium text-foreground mb-2">Coming soon</div>
        <p className="text-sm text-muted-foreground mb-4">
          Part of the WeBuild operator toolkit. Shipping next with early access.
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Quick inputs: product, audience, tone</li>
          <li>Instant output with multiple variants</li>
          <li>One-click copy to clipboard</li>
        </ul>
      </div>
    </div>
  )
}

function FreeToolPage() {
  const { toolSlug } = useParams()
  const tool = getToolBySlug(toolSlug)

  if (!tool) return <Navigate to="/tools" replace />

  const ToolComponent = TOOL_COMPONENTS[toolSlug]
  if (ToolComponent) return <ToolComponent />

  return <ComingSoon tool={tool} />
}

export default FreeToolPage
