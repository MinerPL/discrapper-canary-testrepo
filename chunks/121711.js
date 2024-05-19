"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("948789"),
  i = n("844099"),
  r = n("442837"),
  o = n("481060"),
  u = n("150063"),
  d = n("100527"),
  c = n("252618"),
  f = n("984370"),
  E = n("108427"),
  h = n("210887"),
  _ = n("792125"),
  C = n("709158"),
  m = n("678935"),
  S = n("981631"),
  p = n("689938"),
  g = n("233269");
t.default = function(e) {
  let {} = e, t = (0, r.useStateFromStores)([h.default], () => h.default.theme), n = (0, C.default)(d.default.QUEST_HOME_PAGE);
  return (s.useEffect(() => {
    !n && (0, l.transitionTo)(S.Routes.FRIENDS)
  }, [n]), s.useEffect(() => {
    u.setHomeLink(S.Routes.QUEST_HOME), (0, E.trackAppUIViewed)("quest-home")
  }, []), (0, c.usePageTitle)({
    location: p.default.Messages.QUESTS
  }), n) ? (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsxs)(f.default, {
      className: (0, _.getThemeClass)(t),
      toolbar: !0,
      transparent: !0,
      children: [(0, a.jsx)(f.default.Icon, {
        icon: i.QuestsIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(f.default.Title, {
        children: p.default.Messages.QUESTS
      }), (0, a.jsx)(f.default.Divider, {})]
    }), (0, a.jsx)(o.Scroller, {
      className: g.scroller,
      children: (0, a.jsx)(m.default, {})
    })]
  }) : null
}