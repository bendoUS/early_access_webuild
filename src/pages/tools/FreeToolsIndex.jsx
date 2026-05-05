import { Link } from "react-router-dom";
import { getToolsByCategory } from "./freeTools.data";

function FreeToolsIndex() {
  const toolsByCategory = getToolsByCategory();

  return (
    <div className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-3">Free tools for operators</h1>
        <p className="text-muted-foreground">
          Sharp, no-fluff tools to help you build, sell and grow faster. Use them free. No signup. No upsell.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(toolsByCategory).map(([category, tools]) => (
          <div key={category} className="rounded-xl border border-border bg-background p-6">
            <h2 className="font-semibold text-foreground mb-4">{category}</h2>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool.slug} className="min-w-0">
                  <Link
                    to={`/tools/${tool.slug}`}
                    className="block hover:underline text-foreground font-medium"
                  >
                    {tool.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeToolsIndex;
