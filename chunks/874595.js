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
    title: "Find new people to play Valorant with on Discord",
    subtitle: "Sign up for early access to matchmaking tools that help you find other players based on playstyle and interests.",
    tooltipHeader: "Find new people to play Valorant with on Discord!",
    question: "Which one are you interested in the most?",
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    upsellIconUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Guild_Icon.png",
    options: [{
      key: "clan",
      icon: "compass",
      title: "Clans",
      description: "Find other servers that also play Valorant regularly and shares the same playstyle (ex. Casual -vs- Hardcore).",
      type: "email"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Party up with other players based on what you want to do in-game and interests (ex. Lv100 Raids)",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Tell us what you are looking for, and we’ll match you with people that matches your criteria.",
      type: "email"
    }]
  },
  r = {
    key: "valorant-admin",
    type: "guild",
    title: "Find new people to play Valorant with on Discord",
    subtitle: "Sign up for early access to matchmaking tools that help you find other players based on playstyle and interests.",
    tooltipHeader: "Find new people to play Valorant with on Discord!",
    question: "Which one are you interested in the most?",
    backgroundAssetUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
    upsellIconUrl: "https://cdn.discordapp.com/assets/signups/Valorant_Guild_Icon.png",
    options: [{
      key: "clan",
      icon: "compass",
      title: "Clans",
      description: "Find other servers that also play Valorant regularly and shares the same playstyle (ex. Casual -vs- Hardcore).",
      type: "clan"
    }, {
      key: "missions",
      icon: "gamepad",
      title: "Missions",
      description: "Party up with other players based on what you want to do in-game and interests (ex. Lv100 Raids)",
      type: "email"
    }, {
      key: "gamenight",
      icon: "controller",
      title: "Game Nights",
      description: "Tell us what you are looking for, and we’ll match you with people that matches your criteria.",
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