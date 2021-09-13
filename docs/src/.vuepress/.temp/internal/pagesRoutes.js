import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-3e5e7caf","/artist/","",["/artist/index.html","/artist/README.md"]],
  ["v-31654411","/astudypublicschool/","",["/astudypublicschool/index.html","/astudypublicschool/README.md"]],
  ["v-44d7a970","/atleastnotorangejumpsuit/","",["/atleastnotorangejumpsuit/index.html","/atleastnotorangejumpsuit/README.md"]],
  ["v-f1e7bb06","/balancebeam/","",["/balancebeam/index.html","/balancebeam/README.md"]],
  ["v-76f7d9e6","/blaze/","",["/blaze/index.html","/blaze/README.md"]],
  ["v-484f54e8","/bathsheba/","",["/bathsheba/index.html","/bathsheba/README.md"]],
  ["v-12cef88a","/chainofyouth/","",["/chainofyouth/index.html","/chainofyouth/README.md"]],
  ["v-087e7c36","/chalkboardpoetry/","",["/chalkboardpoetry/index.html","/chalkboardpoetry/README.md"]],
  ["v-b37ca1fc","/chasingthesun/","",["/chasingthesun/index.html","/chasingthesun/README.md"]],
  ["v-16fce732","/groomed/","",["/groomed/index.html","/groomed/README.md"]],
  ["v-154af310","/meltdownlivingroom/","",["/meltdownlivingroom/index.html","/meltdownlivingroom/README.md"]],
  ["v-45a896b2","/penelope/","",["/penelope/index.html","/penelope/README.md"]],
  ["v-e1f0c908","/poems/","",["/poems/index.html","/poems/README.md"]],
  ["v-1bf82252","/politician/","",["/politician/index.html","/politician/README.md"]],
  ["v-5ccf6d7b","/redeemed/","",["/redeemed/index.html","/redeemed/README.md"]],
  ["v-55486dd8","/short_stories/","",["/short_stories/index.html","/short_stories/README.md"]],
  ["v-c29073ac","/thegreatchange/","",["/thegreatchange/index.html","/thegreatchange/README.md"]],
  ["v-1556e2d9","/tick/","",["/tick/index.html","/tick/README.md"]],
  ["v-669c33c2","/titanic/","",["/titanic/index.html","/titanic/README.md"]],
  ["v-b9d29c10","/winterstrolls/","",["/winterstrolls/index.html","/winterstrolls/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
