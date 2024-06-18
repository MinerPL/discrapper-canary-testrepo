"use strict";
n.d(t, {
  A3: function() {
    return f
  },
  FZ: function() {
    return S
  },
  Je: function() {
    return m
  },
  KK: function() {
    return x
  },
  Qi: function() {
    return k
  },
  Ro: function() {
    return i
  },
  U2: function() {
    return A
  },
  Vx: function() {
    return y
  },
  _k: function() {
    return U
  },
  _p: function() {
    return p
  },
  aq: function() {
    return P
  },
  cP: function() {
    return O
  },
  e9: function() {
    return C
  },
  f2: function() {
    return D
  },
  gZ: function() {
    return w
  },
  ge: function() {
    return g
  },
  ig: function() {
    return N
  },
  nW: function() {
    return R
  },
  rF: function() {
    return L
  },
  tb: function() {
    return v
  },
  tl: function() {
    return V
  },
  vn: function() {
    return b
  },
  vx: function() {
    return M
  },
  yw: function() {
    return B
  }
}), n(411104), n(47120), n(724458);
var i, r, s = n(392711),
  o = n.n(s);
n(913527);
var a = n(314884),
  l = n(78839),
  u = n(424218),
  _ = n(823379),
  d = n(63063),
  c = n(74538),
  E = n(981631),
  I = n(474936),
  T = n(689938);
Object.freeze({
  1: 1,
  2: 2,
  3: 3,
  4: 6,
  5: 9,
  6: 12,
  7: 15,
  8: 18,
  9: 24
});
(r = i || (i = {}))[r.EMOJI = 1] = "EMOJI", r[r.AUDIO = 2] = "AUDIO", r[r.ANIMATED = 3] = "ANIMATED", r[r.CUSTOMIZATION = 4] = "CUSTOMIZATION", r[r.UPLOAD = 5] = "UPLOAD", r[r.VANITY = 6] = "VANITY", r[r.STREAM = 7] = "STREAM", r[r.STICKER = 8] = "STICKER", r[r.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", r[r.STAGE_VIDEO = 12] = "STAGE_VIDEO", r[r.SOUNDBOARD = 13] = "SOUNDBOARD";
let h = [E.Eu4.NONE, E.Eu4.TIER_1, E.Eu4.TIER_2, E.Eu4.TIER_3],
  S = (e, t) => {
    var n;
    return e === E.Eu4.NONE ? E.Eu4.TIER_1 : null === (n = G(t).find(t => t.tier === e)) || void 0 === n ? void 0 : n.nextTier
  },
  f = e => I.$8[e],
  N = e => I.pH[e],
  A = (e, t) => null != t && t.hasFeature(E.oNc.MORE_SOUNDBOARD) ? 96 : I._k[e],
  m = e => {
    if (e === E.Eu4.NONE) return I._k[e];
    let t = h[h.indexOf(e) - 1];
    return I._k[e] - I._k[t]
  },
  O = e => [{
    tier: E.Eu4.TIER_1,
    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
    perks: [{
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: I.HO[E.Eu4.TIER_1].limits.emoji - I.HO[E.Eu4.NONE].limits.emoji,
        total: I.HO[E.Eu4.TIER_1].limits.emoji
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
      icon: 1
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: N(E.Eu4.TIER_1),
        total: f(E.Eu4.TIER_1)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
      icon: 8
    }, {
      title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: m(E.Eu4.TIER_1),
        totalSoundCount: A(E.Eu4.TIER_1)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
      icon: 13
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: I.HO[E.Eu4.TIER_1].limits.bitrate / 1e3
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
      icon: 2
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
      icon: 3
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
      icon: 4
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
      icon: 7
    }].filter(_.lm)
  }, {
    tier: E.Eu4.TIER_2,
    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
    perks: [{
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: I.HO[E.Eu4.TIER_2].limits.emoji - I.HO[E.Eu4.TIER_1].limits.emoji,
        total: I.HO[E.Eu4.TIER_2].limits.emoji
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
      icon: 1
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: N(E.Eu4.TIER_2),
        total: f(E.Eu4.TIER_2)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
      icon: 8
    }, {
      title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: m(E.Eu4.TIER_2),
        totalSoundCount: A(E.Eu4.TIER_2)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
      icon: 13
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: I.HO[E.Eu4.TIER_2].limits.bitrate / 1e3
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
      icon: 2
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
      icon: 4
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
        fileSize: (0, u.BU)(I.HO[E.Eu4.TIER_2].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
      icon: 5
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
      icon: 7
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
      icon: 11
    }, e ? {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: E.eez
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: E.eez
      }),
      icon: 12
    } : null].filter(_.lm)
  }, {
    tier: E.Eu4.TIER_3,
    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
    perks: [{
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: I.HO[E.Eu4.TIER_3].limits.emoji - I.HO[E.Eu4.TIER_2].limits.emoji,
        total: I.HO[E.Eu4.TIER_3].limits.emoji
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
      icon: 1
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: N(E.Eu4.TIER_3),
        total: f(E.Eu4.TIER_3)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
      icon: 8
    }, {
      title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: m(E.Eu4.TIER_3),
        totalSoundCount: A(E.Eu4.TIER_3)
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
      icon: 13
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: I.HO[E.Eu4.TIER_3].limits.bitrate / 1e3
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
      icon: 2
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
        helpdeskArticle: d.Z.getArticleURL(E.BhN.GUILD_VANITY_URL)
      }),
      icon: 6
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
        fileSize: (0, u.BU)(I.HO[E.Eu4.TIER_3].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
      icon: 5
    }, {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
      icon: 3
    }, e ? {
      title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: E.RcX
      }),
      description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: E.RcX
      }),
      icon: 12
    } : null].filter(_.lm)
  }];

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      useLevels: n = !0
    } = t;
  switch (e) {
    case E.Eu4.NONE:
      return n ? T.Z.Messages.PREMIUM_GUILD_TIER_0 : T.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
    case E.Eu4.TIER_1:
      return T.Z.Messages.PREMIUM_GUILD_TIER_1;
    case E.Eu4.TIER_2:
      return T.Z.Messages.PREMIUM_GUILD_TIER_2;
    case E.Eu4.TIER_3:
      return T.Z.Messages.PREMIUM_GUILD_TIER_3;
    default:
      throw Error("Not a valid tier type")
  }
}

function C(e) {
  switch (e) {
    case E.Eu4.NONE:
      return T.Z.Messages.PREMIUM_GUILD_TIER_0;
    case E.Eu4.TIER_1:
      return T.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
    case E.Eu4.TIER_2:
      return T.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
    case E.Eu4.TIER_3:
      return T.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
    default:
      throw Error("Not a valid tier type")
  }
}
let p = o().memoize(e => I.HO[E.Eu4.TIER_1].features.includes(e) ? E.Eu4.TIER_1 : I.HO[E.Eu4.TIER_2].features.includes(e) ? E.Eu4.TIER_2 : I.HO[E.Eu4.TIER_3].features.includes(e) ? E.Eu4.TIER_3 : null),
  g = e => {
    if (e === E.Eu4.NONE) return E.Qqv.NONE;
    if (e === E.Eu4.TIER_1) return E.Qqv.TIER_1;
    if (e === E.Eu4.TIER_2) return E.Qqv.TIER_2;
    else if (e === E.Eu4.TIER_3) return E.Qqv.TIER_3;
    return null
  };

function L(e, t) {
  for (let n of G(t))
    if (e >= n.amount) return n.tier;
  return E.Eu4.NONE
}

function v(e, t) {
  return null == t || null != e && e >= t
}

function D(e, t) {
  return v(e.premiumTier, t)
}

function M(e) {
  return o().values(e).filter(e => e.isAvailable())
}

function P() {
  let e = l.ZP.getPremiumTypeSubscription();
  if (null == e ? void 0 : e.isPausedOrPausePending) return T.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
  let {
    numAvailableGuildBoostSlots: t,
    numCanceledGuildBoostSlots: n
  } = Object.values(a.Z.boostSlots).reduce((e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
    numAvailableGuildBoostSlots: 0,
    numCanceledGuildBoostSlots: 0
  });
  if (null == e || t > 0) return null;
  if (e.status === E.O0b.PAST_DUE) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
  if (e.status === E.O0b.ACCOUNT_HOLD) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
  if (n > 0) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
  if (null == e.renewalMutations) return null;
  let i = c.uV(e.renewalMutations.additionalPlans);
  return c.uV(e.additionalPlans) > i ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
}

function y(e, t) {
  return U(e, t) > 0
}

function U(e, t) {
  let n = L(e.length, t),
    i = b(t)[n],
    r = e.filter(e => null != e.endsAt);
  return i - (e.length - r.length)
}

function b(e) {
  return E.oCV
}

function G(e) {
  let t = b(e);
  return [{
    tier: E.Eu4.TIER_3,
    amount: t[E.Eu4.TIER_3],
    nextTier: null
  }, {
    tier: E.Eu4.TIER_2,
    amount: t[E.Eu4.TIER_2],
    nextTier: E.Eu4.TIER_3
  }, {
    tier: E.Eu4.TIER_1,
    amount: t[E.Eu4.TIER_1],
    nextTier: E.Eu4.TIER_2
  }]
}

function w(e, t) {
  let n = U(e, t);
  if (n > 0) {
    let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt);
    return t[t.length - n].endsAt
  }
  return null
}

function k(e, t) {
  let n = N(t),
    i = h.indexOf(t);
  if (-1 === i) return 0;
  let r = h[i - 1],
    s = null != r ? f(r) : 0,
    o = f(t);
  return Math.max(0, n - e.slice(s, o).length)
}

function B(e, t, n) {
  return -1 === h.indexOf(n) ? 0 : Math.max(0, A(n, e) - t.length)
}

function x(e, t) {
  let n = e.premiumSubscriberCount;
  return Math.max(0, b(e.id)[t] - n)
}

function V(e) {
  var t;
  return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === E.O0b.CANCELED || e.canceled
}