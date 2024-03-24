"use strict";

function l(e) {
  return "user" === e.type
}
n.r(t), n.d(t, {
  isUserTarget: function() {
    return l
  },
  VALORANT_USER_SIGNUP: function() {
    return a
  }
});
let a = {
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
}