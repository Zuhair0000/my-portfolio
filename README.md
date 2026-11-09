# Zuhair Ahmed - portfolio

React 18 + TypeScript + Vite + Tailwind CSS v4 + react-router-dom.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ at http://localhost:4173
npm run lint
```

## Edit content

| What                                         | Where                                                                                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Projects (order, text, results, screenshots) | `src/data/projects.ts`                                                                   |
| Name, links, experience, research, skills    | `src/data/profile.ts`                                                                    |
| Screenshots                                  | `public/projects/<slug>/` - then list them in `projects.ts` with alt text and pixel size |
| Resume                                       | `public/Zuhair_Ahmed_Resume.pdf`                                                         |
| Colours, fonts, spacing                      | `src/index.css` (`:root` tokens + dark mode)                                             |

Optional fields left out of a project (e.g. `results`, `tradeoffs`) hide the
matching case-study section. Search the code for `TODO(Zuhair)` for open items.

## Deploy

Vercel: `vercel.json` rewrites all routes to `index.html` so `/work/<slug>` loads directly.
