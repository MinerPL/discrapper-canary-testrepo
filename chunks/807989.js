"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(789020), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(243814),
  a = n(389507),
  l = n(993365),
  u = n(979200),
  _ = n(497309),
  d = n(950463),
  c = n(757698),
  E = n(630641),
  I = n(912527),
  T = n(833571),
  h = n(630388),
  S = n(709054),
  f = n(941532),
  N = n(713938),
  A = n(981631),
  m = n(689938),
  O = n(236099);
let R = e => {
  switch (e) {
    case u.ZC.IP_LOCATION:
      return d.Z;
    case u.ZC.DISPLAYS_ADVERTISEMENTS:
      return a.F;
    default:
      return null
  }
};

function C(e) {
  var t;
  let n, {
      application: r,
      scopes: s,
      redirectUri: a,
      approximateGuildCount: l,
      isEmbeddedFlow: d,
      disclosures: C
    } = e,
    g = new Date(S.default.extractTimestamp(r.id)),
    L = (0, N.W3)(s),
    v = (0, h.yE)(null !== (t = r.flags) && void 0 !== t ? t : 0, A.udG.EMBEDDED);
  if (null != a && !v && !d) try {
    let e = new URL(a);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  } catch (e) {
    n = null
  }
  return (0, i.jsxs)("div", {
    className: O.applicationDetails,
    children: [null != n ? (0, i.jsx)(p, {
      className: O.redirectWarning,
      icon: c.Z,
      text: m.Z.Messages.OAUTH2_DETAILS_REDIRECT.format({
        origin: n
      })
    }) : null, (0, i.jsx)(p, {
      icon: E.Z,
      text: (0, f.i)(r)
    }), (0, i.jsx)(p, {
      icon: _.Z,
      text: m.Z.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
        date: g
      })
    }), s.includes(o.x.BOT) && null != l ? (0, i.jsx)(p, {
      icon: I.Z,
      text: m.Z.Messages.OAUTH2_DETAILS_GUILDS.format({
        guildCount: l
      })
    }) : null, (0, i.jsx)(p, {
      icon: T.Z,
      text: L
    }), null != C ? C.map(e => {
      let t = (0, u.PM)(e),
        n = R(e);
      return null != n && null != t ? (0, i.jsx)(p, {
        icon: n,
        text: t
      }) : null
    }) : null]
  })
}

function p(e) {
  let {
    icon: t,
    text: n,
    className: r
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(O.entry, r),
    children: [(0, i.jsx)(t, {
      className: O.entryIcon
    }), (0, i.jsx)(l.x, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: O.entryInner,
      children: n
    })]
  })
}