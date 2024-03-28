"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("626135"),
  r = n("144145"),
  o = n("555927"),
  u = n("738762"),
  d = n("244080"),
  c = n("247530"),
  f = n("260889"),
  E = n("981631"),
  h = n("674563"),
  _ = n("689938");

function C(e) {
  let {
    party: t,
    close: n,
    onSelect: C
  } = e, m = (0, u.default)(t), S = (0, f.default)(t), I = (0, c.default)(t), p = (0, d.default)(t), T = (0, r.default)(t), g = (0, o.default)(t);
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
    children: [m, (0, a.jsxs)(l.MenuGroup, {
      children: [S, I]
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    }), (0, a.jsx)(l.MenuGroup, {
      children: T
    }), g]
  })
}