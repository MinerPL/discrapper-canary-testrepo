"use strict";
n.r(t), n.d(t, {
  GENSHIN_ADMIN_SIGNUP: function() {
    return d
  },
  GENSHIN_USER_SIGNUP: function() {
    return u
  },
  VALORANT_GUILD_SIGNUP: function() {
    return o
  },
  VALORANT_USER_SIGNUP: function() {
    return r
  },
  extractMetadata: function() {
    return i
  },
  getClanOptions: function() {
    return c
  },
  isGuildTarget: function() {
    return s
  },
  isUserTarget: function() {
    return a
  }
});
var l = n("524437");

function a(e) {
  return "user" === e.type
}

function s(e) {
  return "guild" === e.type
}

function i(e) {
  return JSON.stringify({
    playstyle: e.playstyle,
    acknowledgeCap: e.acknowledgeCap,
    acknowledgeScreen: e.acknowledgeScreen
  })
}
let r = {
    key: "valorant-user",
    type: "user",
    title: "Preview new features for Valorant players on Discord",
    subtitle: "Get notified about new features we're building to help Valorant players connect and play together on Discord.",
    tooltipHeader: "Want a preview of new features for Valorant players?",
    question: "Which feature are you interested in the most?",
    questionMargin: 150,
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    dismissibleContent: l.DismissibleContent.GAME_ONE_USER_SIGNUPS,
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Small, organized servers with similar vibes, play styles, or skill levels who hang out and play regularly.",
      type: "email"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Join one-time groups of players trying to achieve the same goal as you, like ranking up or beating a raid boss.",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Get matched with other players on specific criteria like play style or skill and get invited to a scheduled gaming session.",
      type: "email"
    }]
  },
  o = {
    key: "valorant-admin",
    type: "guild",
    title: "Want to recruit more Valorant players for your server?",
    subtitle: "Your server is exclusively invited to sign up for future Discovery features.",
    noticeHeader: "Want to recruit more people to play Valorant in your server?",
    question: "Interested? Pick one to sign up for updates and early access:",
    questionMargin: 110,
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    dismissibleContent: l.DismissibleContent.GAME_ONE_USER_SIGNUPS,
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Become a Gaming Guild, where players with similar vibes or skill hang out and play regularly. You'll be discoverable among other guilds and approve member applications to join.",
      type: "clan"
    }, {
      key: "voice-hub",
      icon: "microphone",
      title: "Gaming Voice Hub",
      description: "A hub that houses a large selection of voice channels dedicated to gaming, each holding up to 10 people. Join an existing channel or create your own and set the game you're playing, goals, or vibes.",
      type: "email"
    }, {
      key: "hub",
      icon: "controller",
      title: "Game Hub",
      description: "Dedicated discovery pages for popular games. Admins can choose to have their server’s text channel activity displayed in the hubs so users can see the conversations happening across Discord for a specific game.",
      type: "email"
    }]
  },
  u = {
    key: "genshin-user",
    type: "user",
    title: "Preview new features for Genshin Impact players on Discord",
    subtitle: "Get notified about new features we're building to help Genshin Impact players connect on Discord.",
    tooltipHeader: "Want a preview of new features for Genshin Impact players?",
    question: "Which feature are you interested in the most?",
    questionMargin: 150,
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Genshin_Background.png",
    dismissibleContent: l.DismissibleContent.GENSHIN_USER_SIGNUPS,
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Small, organized servers with similar vibes, play styles, or skill levels who chat, hang out, or play together regularly.",
      type: "email"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Join one-time groups of players trying to achieve the same goal as you, like farming or beating a raid boss.",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Get matched with other players on specific criteria like play style or skill and get invited to a scheduled gaming session.",
      type: "email"
    }]
  },
  d = {
    key: "genshin-admin",
    type: "guild",
    title: "Interested in recruiting more Genshin Impact players for your server?",
    subtitle: "Your server is exclusively invited to sign up for future Discovery features.",
    noticeHeader: "Want to recruit more Genshin Impact players for your server?",
    question: "Interested? Pick one to sign up for updates and early access:",
    questionMargin: 80,
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Genshin_Background.png",
    dismissibleContent: l.DismissibleContent.GENSHIN_USER_SIGNUPS,
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Become a Gaming Guild, where players with similar vibes or skill chat, hang out, and play regularly. You’ll be discoverable among other guilds and approve new member applications.",
      type: "clan"
    }, {
      key: "voice-hub",
      icon: "microphone",
      title: "Gaming Voice Hub",
      description: "A hub that houses a large selection of voice channels dedicated to gaming, each holding up to 10 people. Join an existing channel or create your own and set the game you're playing, goals, or vibes.",
      type: "email"
    }, {
      key: "hub",
      icon: "controller",
      title: "Game Hub",
      description: "Dedicated discovery pages for popular games. Admins can choose to have their server’s text channel activity displayed in the hubs so users can see the conversations happening across Discord for a specific game.",
      type: "email"
    }]
  };

function c(e) {
  return [{
    value: "very-casual",
    title: e.Messages.SIGNUP_CLAN_OPTION_VERY_CASUAL_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_VERY_CASUAL_DESCRIPTION
  }, {
    value: "casual",
    title: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_DESCRIPTION
  }, {
    value: "hardcore",
    title: e.Messages.SIGNUP_CLAN_OPTION_HARDCORE_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_HARDCORE_DESCRIPTION
  }, {
    value: "very-hardcore",
    title: e.Messages.SIGNUP_CLAN_OPTION_VERY_HARDCORE_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_VERY_HARDCORE_DESCRIPTION
  }]
}