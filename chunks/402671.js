"use strict";
n.r(t), n.d(t, {
  countEmoji: function() {
    return C
  },
  default: function() {
    return A
  },
  getEmojiColors: function() {
    return y
  },
  getEmojiUrl: function() {
    return N
  }
}), n("222007"), n("781738");
var i = n("736271"),
  s = n("858619"),
  r = n("153043"),
  a = n("166465"),
  o = n("233069"),
  l = n("957255"),
  u = n("697218"),
  d = n("315102"),
  c = n("61069"),
  f = n("103603"),
  _ = n("719923"),
  h = n("49111"),
  g = n("958706");
let m = new Set([g.EmojiDisabledReasons.PREMIUM_LOCKED, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
  E = new Set([g.EmojiDisabledReasons.PREMIUM_LOCKED, g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
  p = new Set([g.EmojiDisabledReasons.DISALLOW_EXTERNAL, g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, g.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

function v(e) {
  switch (e.type) {
    case s.EmojiTypes.GUILD:
    case s.EmojiTypes.PACK:
      return !0;
    default:
      return null != e.guildId || null != e.packId
  }
}

function S(e) {
  let t = e.type === s.EmojiTypes.PACK || e.type === s.EmojiTypes.UNICODE && null != e.packId;
  return t ? e : null
}

function T(e, t) {
  return null != e && null != t && (!v(e) || null == S(e) && t === e.guildId)
}

function I(e) {
  var t;
  let {
    emoji: n,
    channel: s,
    intention: d,
    forceIncludeExternalGuilds: c
  } = e;
  if (d === g.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return g.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
  if (!v(n)) return null;
  let f = null !== (t = e.guildId) && void 0 !== t ? t : null == s ? void 0 : s.getGuildId(),
    m = null != s && (0, o.isGuildTextChannelType)(s.type),
    E = null != s && (0, o.isGuildVocalChannelType)(s.type),
    p = T(n, f),
    I = l.default.can(h.Permissions.USE_EXTERNAL_EMOJIS, s),
    C = function(e, t) {
      var n;
      if (!t || null == e) return !1;
      let i = S(e);
      if (null == i) return !1;
      let s = a.default.getPackByPackId({
        packId: null !== (n = i.packId) && void 0 !== n ? n : ""
      });
      if (null == s) return !1;
      let r = a.default.getSortedPackIds()[0];
      return s.id === r
    }(n, e.canViewAndUsePackEmoji);
  if (d === g.EmojiIntention.COMMUNITY_CONTENT || d === g.EmojiIntention.COMMUNITY_CONTENT_ONLY) return p && n.available ? null : g.EmojiDisabledReasons.DISALLOW_EXTERNAL;
  if (!(0, g.isExternalEmojiAllowedForIntention)(d) && !T(n, f) && !c || (m || E) && !p && !I) return g.EmojiDisabledReasons.DISALLOW_EXTERNAL;
  if (!n.available) return g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
  let A = u.default.getCurrentUser();
  if (!_.default.canUseEmojisEverywhere(A) && !p && !C) {
    if (d === g.EmojiIntention.STATUS) return g.EmojiDisabledReasons.PREMIUM_LOCKED;
    if (!n.managed) return g.EmojiDisabledReasons.PREMIUM_LOCKED
  }
  if ((0, r.isUnusableRoleSubscriptionEmoji)(n, null != f ? f : void 0)) return (0, i.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
  return !n.animated || _.default.canUseAnimatedEmojis(A) || (0, r.isPurchasableRoleSubscriptionEmoji)(n) ? null : g.EmojiDisabledReasons.PREMIUM_LOCKED
}

function C(e, t) {
  let n = 0,
    i = 0,
    r = 0,
    a = 0,
    o = 0,
    l = 0;
  return e.forEach(e => {
    null != e.id ? (e.type === s.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : i++ : e.managed ? o++ : r++), e.animated && l++) : n++
  }), {
    unicode: n,
    custom: i,
    customExternal: r,
    managed: a,
    managedExternal: o,
    animated: l
  }
}
var A = {
  sanitizeEmojiName(e) {
    for (e = e.replace(g.EMOJI_RE, "").slice(0, g.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
    return e
  },
  filterUnsupportedEmojis: c.default.filterUnsupportedEmojis,
  getURL: c.default.getURL,
  isInternalEmojiForGuildId: T,
  getEmojiUnavailableReason: I,
  isCustomEmoji: v,
  isEmojiFiltered(e) {
    let {
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s,
      guildId: r
    } = e, a = I({
      emoji: t,
      channel: n,
      intention: i,
      guildId: r,
      canViewAndUsePackEmoji: s
    });
    return p.has(a)
  },
  isEmojiPremiumLocked(e) {
    let {
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s,
      guildId: r
    } = e, a = I({
      emoji: t,
      channel: n,
      guildId: r,
      intention: i,
      canViewAndUsePackEmoji: s
    });
    return m.has(a)
  },
  isEmojiFilteredOrLocked(e) {
    let {
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s
    } = e;
    return this.isEmojiFiltered({
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s
    }) || this.isEmojiPremiumLocked({
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s
    })
  },
  isEmojiDisabled(e) {
    let {
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s
    } = e, r = I({
      emoji: t,
      channel: n,
      intention: i,
      canViewAndUsePackEmoji: s
    });
    return E.has(r)
  },
  isFileTooBig: e => e.size > 2097152,
  isDataTooBig: e => (0, f.dataUriFileSize)(e) > g.EMOJI_MAX_FILESIZE
};
async function y(e) {
  return await c.default.getEmojiColors(e)
}

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    {
      id: n,
      name: i,
      animated: s
    } = e;
  return null != n ? d.default.getEmojiURL({
    id: n,
    size: t,
    animated: null != s && s
  }) : c.default.getURL(i)
}