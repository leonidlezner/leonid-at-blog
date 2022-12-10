# Source of Leonid's Blog

Here can you find all the files are used for creating the blog.

## Project structure

Put new blog posts in home or work directory.

```
/
├── public/
├── src/
│   └── posts/
│       └── home
│           └── 0001.md
│           └── 0002.md
│           └── 0003.md
│       └── work
│           └── 0001.md
│           └── 0002.md
│           └── 0003.md
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
