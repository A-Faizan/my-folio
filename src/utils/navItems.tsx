interface NavItems {
  id: number;
  title: string;
  to: string;
}

export const items: NavItems[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "About",
    to: "about",
  },
  {
    id: 3,
    title: "Portfolio",
    to: "portfolio",
  },
  {
    id: 4,
    title: "Resume",
    to: "resume",
  },
  {
    id: 5,
    title: "Contact",
    to: "contact",
  },
];
