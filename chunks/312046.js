"use strict";
n.d(t, {
  Q: function() {
    return s
  }
});
var i = n(418793),
  r = n(460597);
let s = e => ({
  id: e.id,
  configVersion: 2,
  startsAt: e.starts_at,
  expiresAt: e.expires_at,
  features: e.features,
  experiments: {
    rollout: e.experiments.rollout,
    targeting: e.experiments.targeting,
    preview: e.experiments.preview
  },
  application: {
    id: e.application.id,
    name: e.application.name,
    link: e.application.link
  },
  assets: {
    hero: e.assets.hero,
    questBarHero: e.assets.quest_bar_hero,
    gameTile: e.assets.game_tile,
    logotype: e.assets.logotype
  },
  colors: {
    primary: e.colors.primary,
    secondary: e.colors.secondary
  },
  messages: {
    questName: e.messages.quest_name,
    gameTitle: e.messages.game_title,
    gamePublisher: e.messages.game_publisher
  },
  taskConfig: (0, r.f)(e.task_config),
  rewardsConfig: (0, i.v)(e.rewards_config)
})