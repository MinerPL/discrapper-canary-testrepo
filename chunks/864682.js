"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("731028"),
  r = n("594174"),
  o = n("68972"),
  u = n("74538"),
  d = n("327943"),
  c = n("997945"),
  f = n("630117"),
  h = n("441319"),
  C = n("770799");

function p() {
  let [e, t, n] = (0, a.useStateFromStoresArray)([r.default, d.default], () => [d.default.getCurrentDesktopIcon(), d.default.isEditorOpen, u.default.isPremium(r.default.getCurrentUser())]), p = h.ICONS_BY_ID[e], m = e !== c.FreemiumAppIconIds.DEFAULT && (n || t), g = (0, s.useRedesignIconContext)().enabled, E = (0, l.jsx)(o.default, {
    width: 30,
    height: g ? 30 : 22
  }), {
    enabled: S
  } = i.default.useExperiment({
    location: "hi Kevin"
  }, {
    autoTrackExposure: !1
  });
  return S ? (0, l.jsx)("img", {
    src: C,
    width: 30,
    alt: "Hi Kevin!",
    draggable: !1
  }) : null != p && m ? (0, l.jsx)(f.default, {
    id: e,
    width: 48
  }) : E
}