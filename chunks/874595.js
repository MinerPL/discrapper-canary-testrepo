"use strict";

function l(e) {
  return "user" === e.type
}

function a(e) {
  return "guild" === e.type
}

function s(e) {
  return JSON.stringify({
    playstyle: e.playstyle,
    acknowledgeCap: e.acknowledgeCap,
    acknowledgeScreen: e.acknowledgeScreen
  })
}
n.r(t), n.d(t, {
  isUserTarget: function() {
    return l
  },
  isGuildTarget: function() {
    return a
  },
  extractMetadata: function() {
    return s
  },
  VALORANT_USER_SIGNUP: function() {
    return i
  },
  VALORANT_GUILD_SIGNUP: function() {
    return r
  },
  getClanOptions: function() {
    return o
  }
});
let i = {
    key: "valorant-user",
    type: "user",
    title: "Preview new features for Valorant players on Discord",
    subtitle: "Get notified about new features we're building to help Valorant players connect and play together on Discord.",
    tooltipHeader: "Want a preview of new features for Valorant players?",
    question: "Which feature are you interested in the most?",
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Small, organized groups with similar vibes, play styles, or skill levels who hang out and play regularly.",
      type: "email"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Party up with players who are trying to achieve the same goal as you, like ranking up.",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Scheduled sessions with other players that match a specific criteria, like play style or skill level.",
      type: "email"
    }]
  },
  r = {
    key: "valorant-admin",
    type: "guild",
    title: "Preview new features for Valorant players on Discord",
    subtitle: "Get notified about new features we're building to help Valorant players connect and play together on Discord.",
    question: "Which feature are you interested in the most?",
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    options: [{
      key: "clan",
      icon: "compass",
      title: "Gaming Guilds",
      description: "Small, organized groups with similar vibes, play styles, or skill levels who hang out and play regularly.",
      type: "clan"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Party up with players who are trying to achieve the same goal as you, like ranking up.",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Scheduled sessions with other players that match a specific criteria, like play style or skill level.",
      type: "email"
    }]
  };

function o(e) {
  return [{
    value: "social",
    title: e.Messages.SIGNUP_CLAN_OPTION_SOCIAL_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_SOCIAL_DESCRIPTION
  }, {
    value: "casual",
    title: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_DESCRIPTION
  }, {
    value: "competitive",
    title: e.Messages.SIGNUP_CLAN_OPTION_COMPETITIVE_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_COMPETITIVE_DESCRIPTION
  }, {
    value: "creative",
    title: e.Messages.SIGNUP_CLAN_OPTION_CREATIVE_TITLE,
    description: e.Messages.SIGNUP_CLAN_OPTION_CREATIVE_DESCRIPTION
  }]
}