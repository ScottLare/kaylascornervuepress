export const data = {
  "key": "v-12cef88a",
  "path": "/chainofyouth/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "pageClass": "full-width",
    "sidebar": false,
    "layout": "MainLayout"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "chainofyouth/README.md",
  "git": {
    "contributors": [
      {
        "name": "Scott Lare",
        "email": "scott.lare@gmail.com",
        "commits": 3
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
