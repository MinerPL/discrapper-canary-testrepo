"use strict";
n.d(t, {
  Gj: function() {
    return a
  },
  Hk: function() {
    return T
  },
  L3: function() {
    return f
  },
  U: function() {
    return h
  },
  U2: function() {
    return N
  },
  Vb: function() {
    return I
  },
  b0: function() {
    return R
  },
  dU: function() {
    return O
  },
  dc: function() {
    return E
  },
  fW: function() {
    return _
  },
  jb: function() {
    return m
  },
  lA: function() {
    return S
  },
  md: function() {
    return C
  },
  o3: function() {
    return c
  },
  zo: function() {
    return p
  }
});
var i, r, s, o, a, l, u, _, d = n(689938);
let c = 0,
  E = 13,
  I = !0,
  T = -1,
  h = -2;
(i = a || (a = {}))[i.Quests = -4] = "Quests", i[i.Clans = -3] = "Clans", i[i.Hub = h] = "Hub", i[i.Communities = T] = "Communities", i[i.Activity = 1] = "Activity", i[i.Music = 2] = "Music", i[i.Television = 3] = "Television", i[i.Science = 5] = "Science", i[i.Education = 6] = "Education";
let S = 1e3,
  f = [1, 2, 3, 5, 6];
(r = l || (l = {}))[r.GENERAL_CHATTING = 14] = "GENERAL_CHATTING", r[r.GAMING = 1] = "GAMING", r[r.MUSIC = 2] = "MUSIC", r[r.ENTERTAINMENT = 3] = "ENTERTAINMENT", r[r.CREATIVE_ARTS = 4] = "CREATIVE_ARTS", r[r.SCIENCE_AND_TECH = 5] = "SCIENCE_AND_TECH", r[r.EDUCATION = 6] = "EDUCATION", r[r.SPORTS = 7] = "SPORTS", r[r.FASHION_AND_BEAUTY = 8] = "FASHION_AND_BEAUTY", r[r.RELATIONSHIPS_AND_IDENTITY = 9] = "RELATIONSHIPS_AND_IDENTITY", r[r.TRAVEL_AND_FOOD = 10] = "TRAVEL_AND_FOOD", r[r.FITNESS_AND_HEALTH = 11] = "FITNESS_AND_HEALTH", r[r.FINANCE = 12] = "FINANCE", r[r.OTHER = 13] = "OTHER", r[r.EMOJI = 43] = "EMOJI", r[r.BOTS = 49] = "BOTS";
let N = {
    14: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY],
    1: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM],
    2: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL],
    3: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT],
    4: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY],
    5: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX],
    6: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE],
    7: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL],
    8: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE],
    9: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY],
    10: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD],
    11: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS],
    12: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX],
    13: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
    43: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
    49: [() => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN, () => d.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES]
  },
  A = ["en-GB"];

function m() {
  return d.Z.getAvailableLocales().map(e => {
    let t;
    let {
      value: i,
      name: r
    } = e;
    try {
      t = n(621287)("./".concat(e.value, ".png"))
    } catch (e) {
      t = n(1474)
    }
    return "en-US" === i ? {
      value: i,
      label: d.Z.Messages.ENGLISH_LANGUAGE,
      image: t
    } : {
      value: i,
      label: r,
      image: t
    }
  }).filter(e => !A.includes(e.value))
}
m();
let O = d.Z.getLanguages().filter(e => !A.includes(e.code)).map(e => "en-US" === e.code ? {
    ...e,
    name: d.Z.Messages.en
  } : e),
  R = 40,
  C = 20;
(s = u || (u = {})).GAME_RECOMMENDATIONS = "Game Recommendations", s.SERVER_RECOMMENDATIONS = "Server Recommendations", (o = _ || (_ = {}))[o.Activity = 0] = "Activity", o[o.Discover = 1] = "Discover", o[o.Education = 2] = "Education", o[o.Music = 3] = "Music", o[o.Science = 4] = "Science", o[o.Stage = 5] = "Stage", o[o.Television = 6] = "Television", o[o.Server = 7] = "Server", o[o.Quest = 8] = "Quest";
let p = {
  facebook: {
    presentation: "Facebook",
    baseUrl: "https://facebook.com"
  },
  instagram: {
    presentation: "Instagram",
    baseUrl: "https://instagram.com"
  },
  twitter: {
    presentation: "Twitter",
    baseUrl: "https://twitter.com"
  },
  tiktok: {
    presentation: "TikTok",
    baseUrl: "https://tiktok.com"
  },
  twitch: {
    presentation: "Twitch",
    baseUrl: "https://twitch.tv"
  },
  patreon: {
    presentation: "Patreon",
    baseUrl: "https://patreon.com"
  },
  reddit: {
    presentation: "Reddit",
    baseUrl: "https://reddit.com/r/"
  },
  youtube: {
    presentation: "YouTube",
    baseUrl: "https://youtube.com"
  },
  steamcommunity: {
    presentation: "Steam",
    baseUrl: "https://steamcommunity.com"
  },
  soundcloud: {
    presentation: "SoundCloud",
    baseUrl: "https://soundcloud.com"
  },
  bandcamp: {
    presentation: "Bandcamp",
    baseUrl: "https://bandcamp.com"
  },
  github: {
    presentation: "GitHub",
    baseUrl: "https://github.com"
  },
  etsy: {
    presentation: "Etsy",
    baseUrl: "https://etsy.com"
  }
}