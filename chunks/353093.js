"use strict";
n.r(t), n.d(t, {
  formatSelectionList: function() {
    return E
  },
  getClanBadgeUrl: function() {
    return T
  },
  getClanBadgeUrlFromClan: function() {
    return f
  },
  getClanBannerUrl: function() {
    return S
  },
  getUserClanData: function() {
    return u
  },
  isGuildAClan: function() {
    return d
  },
  isGuildAdoptedUserClanIdentity: function() {
    return c
  },
  isGuildAdoptedUserClanIdentityChanged: function() {
    return _
  },
  stableSortSet: function() {
    return l
  }
}), n("47120");
var i = n("108131"),
  r = n.n(i),
  a = n("308083"),
  s = n("981631"),
  o = n("689938");

function l(e, t) {
  let n = Array.from(e);
  return n.sort((e, n) => {
    let i = r().v3("".concat(e).concat(t));
    return i - r().v3("".concat(n).concat(t))
  }), new Set(n)
}

function u(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function d(e) {
  return null != e && e.hasFeature(s.GuildFeatures.CLAN)
}

function _(e, t) {
  var n, i;
  return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && ((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (i = e.clan) || void 0 === i ? void 0 : i.tag) !== t.tag || null == t.identityEnabled)
}

function c(e, t) {
  return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
}
let E = (e, t) => {
    if (0 === e.length) return null;
    if (1 === e.length) return e[1];
    if (2 === e.length) return o.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
      item1: e[0],
      item2: e[1]
    });
    if (null != t && e.length > t) {
      let n = e.slice(0, t).join(", "),
        i = o.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
          n: e.length - t
        });
      return o.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: n,
        last: i
      })
    } {
      let t = e.slice(0, -1).join(", "),
        n = e[e.length - 1];
      return o.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: t,
        last: n
      })
    }
  },
  I = {
    [a.ClanTagBadgeSize.SIZE_12]: 16,
    [a.ClanTagBadgeSize.SIZE_16]: 16,
    [a.ClanTagBadgeSize.SIZE_24]: 24,
    [a.ClanTagBadgeSize.SIZE_32]: 32,
    [a.ClanTagBadgeSize.SIZE_36]: 40
  };

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ClanTagBadgeSize.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  if (null != i) return "".concat(location.protocol, "//").concat(i, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(I[n])
}

function f(e, t) {
  if (null != e && null != e.identityGuildId) return T(e.identityGuildId, e.badge, t)
}

function S(e, t) {
  if (null == t) return;
  let {
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  if (null != n) return "".concat(location.protocol, "//").concat(n, "/clan-banners/").concat(e, "/").concat(t, ".png?size=512")
}