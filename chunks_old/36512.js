"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("77078"),
  i = n("599110"),
  r = n("186888"),
  o = n("70118"),
  u = n("398953"),
  d = n("7259"),
  c = n("250529"),
  f = n("391950"),
  E = n("49111"),
  h = n("988268"),
  _ = n("782340");

function C(e) {
  let {
    party: t,
    close: n,
    onSelect: C
  } = e, S = (0, u.default)(t), I = (0, f.default)(t), m = (0, c.default)(t), p = (0, d.default)(t), T = (0, r.default)(t), g = (0, o.default)(t);
  return s.useEffect(() => {
    let e = t.currentActivities.filter(e => {
      var t, n;
      return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === h.ApplicationTypes.GAME
    }).map(e => e.game.name);
    i.default.track(E.AnalyticEvents.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }, []), (0, a.jsxs)(l.Menu, {
    navId: "now-playing-menu",
    onClose: n,
    "aria-label": _.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onSelect: C,
    children: [S, (0, a.jsxs)(l.MenuGroup, {
      children: [I, m]
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    }), (0, a.jsx)(l.MenuGroup, {
      children: T
    }), g]
  })
}