"use strict";
n.d(t, {
  EJ: function() {
    return h
  },
  SS: function() {
    return I
  },
  Z4: function() {
    return f
  },
  Zp: function() {
    return S
  },
  f6: function() {
    return N
  },
  ky: function() {
    return m
  },
  p0: function() {
    return R
  },
  pY: function() {
    return O
  },
  vh: function() {
    return T
  }
}), n(47120);
var i = n(108131),
  r = n.n(i),
  s = n(442837),
  o = n(607070),
  a = n(715903),
  l = n(271383),
  u = n(594174);
n(963202);
var _ = n(954138),
  d = n(308083),
  c = n(981631),
  E = n(689938);

function I(e, t) {
  let n = Array.from(e);
  return n.sort((e, n) => {
    let i = r().v3("".concat(e).concat(t));
    return i - r().v3("".concat(n).concat(t))
  }), new Set(n)
}

function T(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function h(e) {
  return null != e && e.hasFeature(c.oNc.CLAN)
}

function S(e, t) {
  var n, i;
  return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && ((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (i = e.clan) || void 0 === i ? void 0 : i.tag) !== t.tag || null == t.identityEnabled)
}

function f(e, t) {
  return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
}
let N = (e, t) => {
    if (0 === e.length) return null;
    if (1 === e.length) return e[1];
    if (2 === e.length) return E.Z.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
      item1: e[0],
      item2: e[1]
    });
    if (null != t && e.length > t) {
      let n = e.slice(0, t).join(", "),
        i = E.Z.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
          n: e.length - t
        });
      return E.Z.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: n,
        last: i
      })
    } {
      let t = e.slice(0, -1).join(", "),
        n = e[e.length - 1];
      return E.Z.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: t,
        last: n
      })
    }
  },
  A = {
    [d.NC.SIZE_12]: 16,
    [d.NC.SIZE_16]: 16,
    [d.NC.SIZE_24]: 24,
    [d.NC.SIZE_32]: 32,
    [d.NC.SIZE_36]: 40
  };

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.NC.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  if (null != i) return "".concat(location.protocol, "//").concat(i, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(A[n])
}

function O(e, t) {
  if (null == t) return;
  let {
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  if (null != n) return "".concat(location.protocol, "//").concat(n, "/clan-banners/").concat(e, "/").concat(t, ".png?size=512")
}

function R(e, t) {
  let n = (0, s.e7)([o.Z], () => o.Z.hideTags),
    i = (0, s.e7)([u.default], () => u.default.getUser(e), [e]),
    r = (0, s.e7)([l.ZP], () => {
      if (null == t || null == e) return null;
      let n = l.ZP.getMember(t, e);
      return (0, a.EY)(n)
    }, [t, e]),
    {
      tag: d,
      guildId: c
    } = T(null == i ? void 0 : i.clan),
    E = (0, _.Z)("clan_tag_chiplet");
  return !n && !!E && null != c && null != d && !r && !0
}