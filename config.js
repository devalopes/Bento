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
  name: '',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  greetingNight: 'Go to sleep!',

  // Weather
  weatherKey: '8f39fad6fa289adb07fd7eecf61e66f1',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '40.320',
  defaultLongitude: '-74.594',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '3',
      name: 'Spotify',
      icon: 'music',
      link: 'https://spotify.com/',
    },
    {
      id: '4',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '5',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://twitch.com/',
    },
    {
      id: '6',
      name: 'Amazon',
      icon: 'shopping-cart',
      link: 'https://amazon.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'coffee',
  secondListIcon: 'sidebar',

  // Links
  lists: {
    firstList: [
      {
        name: 'HackerNews',
        link: 'https://news.ycombinator.com',
      },
      {
        name: 'Hackaday',
        link: 'https://hackaday.io/myFeed',
      },
      {
        name: 'ArsTechnica',
        link: 'https://arstechnica.com',
      },
      {
        name: 'IEEE',
        link: 'https://spectrum.ieee.org/',
      },
    ],
    secondList: [
      {
        name: 'Neovim',
        link: 'https://reddit.com/r/neovim',
      },
      {
        name: 'Unixporn',
        link: 'https://reddit.com/r/unixporn',
      },
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'Prime',
        link: 'https://www.amazon.com/Prime-Video',
      },
    ],
  },
};
