# ALX Rick and Morty App

Objective
---------
Kickstart the Rick and Morty application using Next.js with TypeScript, Apollo Client and Tailwind CSS. This project contains the minimal files required by the exercise: Apollo client, GraphQL queries and the Next.js App wrapper.

Required files (present in this folder)
--------------------------------------
- `graphql/apolloClient.ts` — exports the Apollo Client configured to use the Rick and Morty GraphQL API.
- `graphql/queries.ts` — contains `GET_EPISODES` gql query used to fetch episodes.
- `pages/_app.tsx` — Next.js App component which wraps pages with `ApolloProvider`.

File contents (important snippets)
---------------------------------
`graphql/apolloClient.ts`:

```ts
import { ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache: new InMemoryCache()
})

export default client;
```

`graphql/queries.ts`:

```ts
import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
```

`pages/_app.tsx`:

```tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
```

Quick setup & run (local)
-------------------------
1. Install dependencies (already installed in this workspace) or run locally:

```powershell
cd alx-rick-and-morty-app
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open the app in your browser:

http://localhost:3000

Notes
-----
- Do not commit `node_modules/` or `.next/` to the repository. They are added to `.gitignore` in this project.
- If you need Tailwind CSS fully wired, run `npx tailwindcss init -p` and add Tailwind directives to `styles/globals.css`.

If anything else is required by the checker (for example a specific `tsconfig.json` or lint rules), tell me and I will add those files/configs exactly as needed.
