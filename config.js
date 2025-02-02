// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "8f39fad6fa289adb07fd7eecf61e66f1", // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "F", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "40.320",
  defaultLongitude: "-74.594",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com",
    },
    {
      id: "3",
      name: "Spotify",
      icon: "music",
      link: "https://spotify.com/",
    },
    {
      id: "4",
      name: "Mail",
      icon: "mail",
      link: "https://gmail.com/",
    },
    {
      id: "5",
      name: "Twitch",
      icon: "twitch",
      link: "https://twitch.tv/",
    },
    {
      id: "6",
      name: "Amazon",
      icon: "shopping-cart",
      link: "https://amazon.com",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "coffee",
      id: "1",
      links: [
        {
          name: "HackerNews",
          link: "https://news.ycombinator.com",
        },
        {
          name: "Hackaday",
          link: "https://hackaday.io/myFeed",
        },
        {
          name: "ArsTechnica",
          link: "https://arstechnica.com",
        },
        {
          name: "IEEE",
          link: "https://spectrum.ieee.org/",
        },
      ],
    },
    {
      icon: "sidebar",
      id: "2",
      links: [
        {
          name: "Neovim",
          link: "https://reddit.com/r/neovim",
        },
        {
          name: "Wondrium",
          link: "https://www.wondrium.com/home",
        },
        {
          name: "Netflix",
          link: "https://netflix.com",
        },
        {
          name: "Prime",
          link: "https://primevideo.com",
        },
      ],
    },
  ],
};
