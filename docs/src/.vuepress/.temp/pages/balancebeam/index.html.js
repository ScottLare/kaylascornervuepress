export const data = {
  "key": "v-f1e7bb06",
  "path": "/balancebeam/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "pageClass": "full-width",
    "sidebar": false,
    "layout": "MainLayout"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "balancebeam/README.md",
  "git": {
    "contributors": [
      {
        "name": "Scott Lare",
        "email": "scott.lare@gmail.com",
        "commits": 2
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
