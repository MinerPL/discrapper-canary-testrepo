"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("199245"),
  r = n("697218"),
  o = n("153769"),
  u = n("719923"),
  d = n("805199"),
  c = n("513196"),
  f = n("42723"),
  h = n("605475"),
  C = n("903326");

function p() {
  let [e, t, n] = (0, a.useStateFromStoresArray)([r.default, d.default], () => [d.default.getCurrentDesktopIcon(), d.default.isEditorOpen, u.default.isPremium(r.default.getCurrentUser())]), p = h.ICONS_BY_ID[e], m = e !== c.FreemiumAppIconIds.DEFAULT && (n || t), E = (0, s.useRedesignIconContext)().enabled, g = (0, l.jsx)(o.default, {
    width: 30,
    height: E ? 30 : 22
  }), {
    enabled: I
  } = i.default.useExperiment({
    location: "hi Kevin"
  }, {
    autoTrackExposure: !1
  });
  return I ? (0, l.jsx)("img", {
    src: C,
    width: 30,
    alt: "Hi Kevin!",
    draggable: !1
  }) : null != p && m ? (0, l.jsx)(f.default, {
    id: e,
    width: 48
  }) : g
}