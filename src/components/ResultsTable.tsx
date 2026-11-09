import type { ResultsTable as Table } from "../data/projects";

/** Small, rule-only data table. First column is a label; the rest are figures in mono. */
export function ResultsTable({ table, caption }: { table: Table; caption: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-rule-strong">
            {table.columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`py-2 pr-6 text-xs font-medium text-muted ${i === 0 ? "" : "whitespace-nowrap"}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => {
            const highlighted = r === table.highlightRow;
            return (
              <tr
                key={r}
                className={`border-b border-rule ${highlighted ? "bg-paper-sunk" : ""}`}
              >
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th
                      key={i}
                      scope="row"
                      className={`py-3 pr-6 font-normal ${highlighted ? "border-l-2 border-accent pl-3" : ""}`}
                    >
                      {cell}
                      {highlighted && (
                        <span className="ml-2 text-xs text-accent">chosen</span>
                      )}
                    </th>
                  ) : (
                    <td key={i} className="num whitespace-nowrap py-3 pr-6 text-ink">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
