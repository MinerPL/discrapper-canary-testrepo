"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("924826"),
  l = n("442837"),
  i = n("215569"),
  r = n("481060"),
  o = n("607070"),
  u = n("981631"),
  d = n("488324");
t.default = function(e) {
  let {
    statusSections: t,
    renderRow: n,
    searchQuery: c,
    sectionFilter: f,
    useReducedMotion: E
  } = e, h = (0, l.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), _ = (0, s.default)({
    id: "people",
    isEnabled: h,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), C = f !== u.FriendsSections.ONLINE && f !== u.FriendsSections.ALL, m = E || "" !== c || C, S = t.map((e, t) => m ? (0, a.jsx)("div", {
    children: e.map(n)
  }, t) : (0, a.jsx)(i.TransitionGroup, {
    transitionAppear: !1,
    component: "div",
    children: e.map(n)
  }, t));
  return (0, a.jsx)(s.ListNavigatorProvider, {
    navigator: _,
    children: (0, a.jsx)(s.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, a.jsx)(r.ScrollerAuto, {
          ref: t,
          className: d.peopleList,
          ...n,
          children: S
        })
      }
    })
  })
}