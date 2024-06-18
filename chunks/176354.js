"use strict";
n.d(t, {
  B6: function() {
    return O
  },
  qc: function() {
    return R
  },
  sp: function() {
    return m
  }
}), n(47120), n(757143), n(653041);
var i = n(738774),
  r = n(906411),
  s = n(889564),
  o = n(131704),
  a = n(496675),
  l = n(594174),
  u = n(768581),
  _ = n(563114),
  d = n(956664),
  c = n(74538),
  E = n(981631),
  I = n(185923);
let T = new Set([I.Z5.PREMIUM_LOCKED, I.Z5.ROLE_SUBSCRIPTION_LOCKED]),
  h = new Set([I.Z5.PREMIUM_LOCKED, I.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, I.Z5.ROLE_SUBSCRIPTION_LOCKED, I.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
  S = new Set([I.Z5.DISALLOW_EXTERNAL, I.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, I.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);

function f(e) {
  if (e.type === r.B.GUILD) return !0;
  return null != e.guildId
}

function N(e, t) {
  return null != e && null != t && (!f(e) || t === e.guildId)
}

function A(e) {
  let {
    emoji: t,
    channel: n,
    guildId: r = null == n ? void 0 : n.getGuildId(),
    intention: u,
    forceIncludeExternalGuilds: _
  } = e;
  if (!f(t)) return null;
  let d = null != n && (0, o.zi)(n.type),
    T = null != n && (0, o.bw)(n.type),
    h = N(t, r),
    S = a.Z.can(E.Plq.USE_EXTERNAL_EMOJIS, n);
  if (u === I.Hz.COMMUNITY_CONTENT) return h && null != t.guildId && t.available ? null : I.Z5.DISALLOW_EXTERNAL;
  if (!(0, I.Gt)(u) && !N(t, r) && !_ || (d || T) && !h && !S) return I.Z5.DISALLOW_EXTERNAL;
  if (null != t.id && !t.available) return I.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
  let A = l.default.getCurrentUser();
  if (!c.ZP.canUseEmojisEverywhere(A) && !h) {
    if (u === I.Hz.STATUS) return I.Z5.PREMIUM_LOCKED;
    if (!t.managed) return I.Z5.PREMIUM_LOCKED
  }
  if ((0, s.Fv)(t, null != r ? r : void 0)) return (0, i.Ol)(t.guildId) ? I.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : I.Z5.ROLE_SUBSCRIPTION_LOCKED;
  return !t.animated || c.ZP.canUseAnimatedEmojis(A) || (0, s.yH)(t) ? null : I.Z5.PREMIUM_LOCKED
}

function m(e, t) {
  let n = 0,
    i = 0,
    s = 0,
    o = 0,
    a = 0,
    l = 0;
  return e.forEach(e => {
    null != e.id ? (e.type === r.B.GUILD && (e.guildId === t ? e.managed ? o++ : i++ : e.managed ? a++ : s++), e.animated && l++) : n++
  }), {
    unicode: n,
    custom: i,
    customExternal: s,
    managed: o,
    managedExternal: a,
    animated: l
  }
}
async function O(e) {
  return await _.Z.getEmojiColors(e)
}

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    {
      id: n,
      name: i,
      animated: r
    } = e;
  return null != n ? u.ZP.getEmojiURL({
    id: n,
    size: t,
    animated: null != r && r
  }) : _.Z.getURL(i)
}
t.ZP = {
  sanitizeEmojiName(e) {
    for (e = e.replace(I.sW, "").slice(0, I.Yc); e.length < 2;) e += "_";
    return e
  },
  filterUnsupportedEmojis: _.Z.filterUnsupportedEmojis,
  getURL: _.Z.getURL,
  isInternalEmojiForGuildId: N,
  getEmojiUnavailableReason: A,
  isCustomEmoji: f,
  getEmojiUnavailableReasons(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: i,
      intention: r,
      computeUnfiltered: s = !1
    } = e, o = new Set, a = 0, l = s ? [] : void 0, u = 0, _ = !1;
    for (let e of t) {
      let t = A({
        emoji: e,
        channel: n,
        guildId: i,
        intention: r
      });
      null != t ? (S.has(t) ? a++ : s && (null == l || l.push(e)), T.has(t) && (!_ && t === I.Z5.PREMIUM_LOCKED && (_ = !0), null != e.id && o.add(e.id), u++)) : s && (null == l || l.push(e))
    }
    return {
      emojisDisabled: o,
      emojisUnfiltered: l,
      emojisFilteredCount: a,
      emojisPremiumLockedCount: u,
      emojiNitroLocked: _
    }
  },
  isEmojiFiltered(e) {
    let t = A(e);
    return S.has(t)
  },
  isEmojiPremiumLocked(e) {
    let t = A(e);
    return T.has(t)
  },
  isEmojiCategoryNitroLocked(e) {
    let {
      categoryEmojis: t,
      channel: n,
      guildId: i,
      intention: r
    } = e, s = !1, o = 0;
    for (let e of t) {
      let t = A({
        emoji: e,
        channel: n,
        intention: r,
        guildId: i
      });
      t === I.Z5.PREMIUM_LOCKED ? (s = !0, o++) : t === I.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++
    }
    return s && o === t.length
  },
  isEmojiFilteredOrLocked(e) {
    return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e)
  },
  isEmojiDisabled(e) {
    let t = A(e);
    return h.has(t)
  },
  isFileTooBig: e => e.size > 2097152,
  isDataTooBig: e => (0, d.QB)(e) > I.h_
}