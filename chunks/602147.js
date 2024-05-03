"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("212093"),
  i = n("703656"),
  r = n("104259"),
  o = n("603592"),
  u = n("981631"),
  d = n("731455"),
  c = n("689938"),
  f = n("434884");

function h() {
  window.location.pathname.startsWith(u.Routes.GUILD_DISCOVERY) && ((0, s.clearSearch)(), (0, s.selectCategory)(d.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let e = (0, i.getHistory)().location.search;
  (0, i.transitionTo)(u.Routes.GUILD_DISCOVERY, {
    search: e
  })
}
let p = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    consistentIconStyle: s = !1
  } = e;
  return (0, l.jsx)(o.default, {
    id: "guild-discover-button",
    ref: t,
    onClick: h,
    selected: n,
    tooltip: null != a ? a : c.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    className: s ? f.icon : void 0,
    icon: r.default
  })
});
t.default = p