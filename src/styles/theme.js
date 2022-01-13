import colors from './colors';

const theme = {

// to do:
  lightTheme: {
    body: 'white',
    textColor: colors.palePink,
    gradient: colors.pinkTwoGradient,
    hoverGradient: colors.pinkThreeGradient,

    h1bg: colors.cream,
    h1selectbg: colors.lightPink,
    h1selectfg: 'white',

    bannerBg: colors.black,
    bannerFg: colors.periwinkle,

    navBg: 'white',
    navFg: colors.black,
    navHg: colors.lightPink,
    navHomeFg: colors.palePink,
    navHomeHg: colors.paleTransparentPink,

    buttonBg: colors.palePink,
    buttonHoverBg: colors.darkPalePink,

    boxColor: colors.lightTransparentPink,
    roundedBoxColor: colors.cream,
    resumeButtonColor: colors.darkPalePink,
    resumeHoverFg: colors.lightPink,

    footerBg: colors.pink,
    footerBorder: colors.darkPink,

    background: '/static/genImages/new/flowy-light-waterfall.png',
    backgroundSm: '/static/genImages/new/flowy-light-waterfall.png',
    profilePic: '/static/genImages/new/lightProfPic.png',
    up: '/static/genImages/scroll-up-arrow-light.svg',
  },

// mostly complete
  darkTheme : {
    body: colors.darkGray,
    textColor: 'white',
    gradient: colors.blueTwoGradient,
    hoverGradient: colors.blueThreeGradient,

    h1bg: colors.transparentSeaBlue,
    h1selectbg: colors.skyBlue,
    h1selectfg: colors.darkGray,

    bannerBg: 'white',
    bannerFg: colors.orange,

    navBg: colors.black,
    navFg: 'white',
    navHg: colors.skyBlue,
    navHomeFg: colors.seaBlue,
    navHomeHg: colors.transparentSeaBlue,

    buttonBg: colors.cerulean,
    buttonHoverBg: colors.darkCerulean,

    boxColor: colors.halfTransparentGray,
    roundedBoxColor: colors.transparentSeaBlue,
    resumeButtonColor: colors.moreSeaBlue,
    resumeHoverFg: colors.seaBlue,

    footerBg: colors.transparentGray,
    footerBorder: colors.lightGray,

    background: '/static/genImages/new/flowy-dark-waterfall.png',
    backgroundSm: '/static/genImages/new/flowy-dark-waterfall.png',
    profilePic: '/static/genImages/new/darkProfPic.png',
    up: '/static/genImages/scroll-up-arrow-dark.svg',
  },

  fonts: {

    Lucida: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    Oswald: "'Oswald', sans-serif",

  },

  fontSizes: {

    sm000: '11px',
    sm00: '12px',
    sm0: '14px',
    sm1: '16px',
    sm2: '17px',
    sm3: '18px',

    med1: '36px',
    med2: '40px',

    lg: '48px'

  },

  hrefs: {

    mail: 'mailto:arede22@berkeley.edu',
    ig: 'https://www.instagram.com/berk_eng_doodler/',
    linkedin: 'https://www.linkedin.com/in/anikarede/',
    github: 'https://github.com/arede22',

    webRepo: 'https://github.com/arede22/theanikarede',
    carRepo: 'https://github.com/arede22/voice-activated-car',
    mlDecalRepo: 'https://github.com/arede22/MLDecal_projects',

    gameVid: 'https://www.youtube.com/watch?v=cdlxhQVUIro'

  },

  iconSrcs: {

    mail: '/static/footer/email',
    ig: '/static/footer/insta',
    linkedin: '/static/footer/linkedin',
    github: '/static/footer/github',
    star: '/static/footer/star.png',
    fork: '/static/footer/fork.png',

  },

  imgSrcs: {

    berk: '/static/genImages/fbcoverpic.jpg',

    rainbow: '/static/genImages/rainbow.jpg',

    tree: '/static/portfolio/tree.png',

    car: '/static/portfolio/car.png',
    map: '/static/portfolio/map.png',
    randRooms: '/static/portfolio/random-room.png',
    boss: '/static/portfolio/boss.png',

  }

};

// export
export default theme;
