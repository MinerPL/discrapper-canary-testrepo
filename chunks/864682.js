"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("594174"),
  r = n("68972"),
  o = n("74538"),
  u = n("327943"),
  d = n("997945"),
  c = n("630117"),
  f = n("441319");

function h() {
  let [e, t, n] = (0, a.useStateFromStoresArray)([i.default, u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen, o.default.isPremium(i.default.getCurrentUser())]), h = f.ICONS_BY_ID[e], p = e !== d.FreemiumAppIconIds.DEFAULT && (n || t), m = (0, s.useRedesignIconContext)().enabled, C = (0, l.jsx)(r.default, {
    width: 30,
    height: m ? 30 : 22
  });
  return null != h && p ? (0, l.jsx)(c.default, {
    id: e,
    width: 48
  }) : C
}