import { divide, equals, multiply, nosix, peru, x } from "@/assets/images";
import { NavLink } from "react-router-dom";

export const mainDashboard = [
  {
    key: "/",
    // icon: Icons.Home,
    label: <NavLink to="/"> Home </NavLink>,
  },
  {
    key: "/browse-music",
    // icon: Icons.Home,
    label: <NavLink to="/browse-music"> Browse Music </NavLink>,
  },
  {
    key: "/playlists",
    // icon: Icons.Home,
    label: <NavLink to="/playlists"> Playlists </NavLink>,
  },
  {
    key: "/pricing",
    // icon: Icons.Home,
    label: <NavLink to="/pricing"> Pricing </NavLink>,
  },
  {
    key: "/my-cart",
    // icon: Icons.Home,
    label: <NavLink to="/my-cart"> My Cart </NavLink>,
  },
];

export const artistsList = [
  {
    name: "Falguni Pathak",
    subtitle: "Artist",
    img: "https://i.scdn.co/image/ab67616100005174875b10d00c63ddc499da683e",
  },
  {
    name: "Neha Kakkar",
    subtitle: "Artist",
    img: "https://i.scdn.co/image/ab67616100005174e25321c5710d6d22b066ee11",
  },
  {
    name: "Kishore Kumar",
    subtitle: "Artist",
    img: "https://i.scdn.co/image/ab67616100005174c9ac92d87de28795c1c49730",
  },
  {
    name: "Hassum Harrod",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    name: "Jennifer Jerome",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    name: "LaVonne L. LaRue",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
];

export const playlist = [
  {
    name: "Kal Ki Kahaniyan with Ashtam Neelkanth",
    subtitle: "Ashtam Neelkanth",
    img: "https://i.scdn.co/image/ab67656300005f1f29e0083c5caaecea26fed418",
  },
  {
    name: "Neha Kakkar",
    subtitle: "Artist",
    img: "https://i.scdn.co/image/ab67616100005174e25321c5710d6d22b066ee11",
  },
  {
    name: "Kishore Kumar",
    subtitle: "Artist",
    img: "https://i.scdn.co/image/ab67616100005174c9ac92d87de28795c1c49730",
  },
  {
    name: "Hassum Harrod",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    name: "Jennifer Jerome",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    name: "LaVonne L. LaRue",
    subtitle: "Artist",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
];

export const popularReleases = [
  {
    name: "Divide",
    subtitle: "2017 • Album",
    img: divide,
  },
  {
    name: "X",
    subtitle: "2015 • Album",
    img: x,
  },
  {
    name: "No 6",
    subtitle: "2019 • Album",
    img: nosix,
  },
  {
    name: "Equals",
    subtitle: "2021 • Album",
    img: equals,
  },
  {
    name: "Peru",
    subtitle: "Latest Releases • S..",
    img: peru,
  },
  {
    name: "Multiply",
    subtitle: "2014 • Album",
    img: multiply,
  },
];
