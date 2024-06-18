"use strict";
t.d(s, {
  $: function() {
    return N
  },
  Z: function() {
    return m
  }
});
var n = t(735250);
t(470079);
var i = t(392711),
  l = t(442837),
  a = t(481060),
  r = t(241559),
  o = t(527379),
  c = t(313364),
  d = t(441957),
  u = t(434404),
  E = t(999382),
  _ = t(981631),
  I = t(689938),
  T = t(126197);

function N() {
  var e;
  let s = (0, l.e7)([E.Z], () => E.Z.getProps().guild, []),
    t = null !== (e = null == s ? void 0 : s.isCommunity()) && void 0 !== e && e;
  return (0, n.jsxs)(a.Clickable, {
    onClick: e => {
      if (null != s) t ? (e.preventDefault(), u.Z.close(), (0, o._X)(s.id)) : u.Z.open(s.id, _.pNK.MEMBERS)
    },
    className: T.rowContainer,
    children: [(0, n.jsx)("div", {
      children: I.Z.Messages.MEMBERS
    }), t && (0, n.jsx)(d.Z, {
      className: T.linkIcon,
      width: 16,
      height: 16
    })]
  })
}

function m() {
  var e;
  let {
    guild: s
  } = (0, l.e7)([E.Z], () => E.Z.getProps(), [], i.isEqual), t = null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : _.lds;
  return (0, r.n2)(t) ? (0, n.jsx)(c.Z, {
    guildId: t
  }) : null
}