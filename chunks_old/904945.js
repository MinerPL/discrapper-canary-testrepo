"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("974667"),
  l = n("446674"),
  i = n("266491"),
  r = n("77078"),
  o = n("206230"),
  u = n("49111"),
  d = n("512807"),
  c = function(e) {
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
    }), C = f !== u.FriendsSections.ONLINE && f !== u.FriendsSections.ALL, S = E || "" !== c || C, I = t.map((e, t) => S ? (0, a.jsx)("div", {
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
            children: I
          })
        }
      })
    })
  }