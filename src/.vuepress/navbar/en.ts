import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "demo", icon: "discover", link: "/en/demo/" },
  {
    text: "blog",
    icon: "edit",
    prefix: "/en/posts/",
    children: [
      {
        text: "apple",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "apple1", icon: "edit", link: "1" },
          { text: "apple2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "banana",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "banana 1",
            icon: "edit",
            link: "1",
          },
          {
            text: "banana 2",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "cherry", icon: "edit", link: "cherry" },
      { text: "dragonfruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 document",
    icon: "note",
    link: "#",
  },
]);
