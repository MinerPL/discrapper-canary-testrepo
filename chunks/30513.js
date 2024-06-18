"use strict";
n.d(t, {
  VF: function() {
    return k
  },
  WW: function() {
    return b
  },
  XO: function() {
    return y
  },
  Yp: function() {
    return P
  },
  hC: function() {
    return w
  },
  o9: function() {
    return G
  },
  zC: function() {
    return U
  }
});
var i = n(692547),
  r = n(15385),
  s = n(193277),
  o = n(709586),
  a = n(115102),
  l = n(241820),
  u = n(536952),
  _ = n(645284),
  d = n(898140),
  c = n(68736),
  E = n(123245),
  I = n(981631);
n(474936);
var T = n(689938);
let h = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: u.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
  }),
  S = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
    return {
      color: e,
      icon: a.Z,
      description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
    }
  },
  f = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: u.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
  }),
  N = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: a.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
  }),
  A = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
    icon: l.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
  }),
  m = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return {
      color: e,
      icon: c.Z,
      description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
    }
  },
  O = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
      n = 0,
      r = 0;
    switch (e) {
      case I.Eu4.TIER_1:
        n = 15, r = 100;
        break;
      case I.Eu4.TIER_2:
        n = 30, r = 150;
        break;
      case I.Eu4.TIER_3:
        n = 60, r = 250
    }
    return {
      color: t,
      icon: c.Z,
      description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
        numStickers: n,
        numEmojis: r
      })
    }
  },
  R = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
    icon: d.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
  }),
  C = () => ({
    icon: r.Z,
    description: T.Z.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
  }),
  p = () => ({
    icon: o.Z,
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
    description: T.Z.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
  }),
  g = () => ({
    icon: l.Z,
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
    description: T.Z.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
  }),
  L = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
    icon: s.Z,
    description: T.Z.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
  }),
  v = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
    return {
      color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
      icon: s.Z,
      description: e
    }
  },
  D = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
    icon: E.Z,
    description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
  }),
  M = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
    return {
      color: e,
      icon: _.Z,
      description: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
    }
  };

function P() {
  return [A(), f(), m(), v()]
}

function y() {
  return [A(), O(I.Eu4.TIER_2), M(), v()]
}

function U() {
  return [O(I.Eu4.TIER_3, i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), D(), R(), v()]
}

function b() {
  return [R(), N(), O(I.Eu4.TIER_3), v()]
}

function G() {
  return [h(), m(), S(), v()]
}

function w() {
  return [m(), v()]
}

function k() {
  return [p(), g(), C(), L()]
}