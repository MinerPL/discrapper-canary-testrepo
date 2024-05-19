"use strict";
n.r(t), n.d(t, {
  handleDiscoveryButtonClick: function() {
    return h
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("212093"),
  i = n("703656"),
  r = n("683301"),
  o = n("104259"),
  u = n("603592"),
  d = n("981631"),
  c = n("731455"),
  f = n("689938");

function h() {
  let e = window.location.pathname.startsWith(d.Routes.GUILD_DISCOVERY),
    t = r.default.getCurrentCategoryId() === c.CategoryId.Clans;
  e && !t && ((0, s.clearSearch)(), (0, s.selectCategory)(c.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let n = (0, i.getHistory)().location.search;
  (0, i.transitionTo)(d.Routes.GUILD_DISCOVERY, {
    search: n
  })
}
let m = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    className: s,
    onClick: i
  } = e;
  return (0, l.jsx)(u.default, {
    id: "guild-discover-button",
    ref: t,
    className: s,
    onClick: null != i ? i : h,
    selected: n,
    tooltip: null != a ? a : f.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: o.default
  })
});
t.default = m