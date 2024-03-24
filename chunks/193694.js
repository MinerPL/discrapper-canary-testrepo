"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("446674"),
  u = s("862337"),
  c = s("763377"),
  S = s("77078"),
  E = s("206230"),
  T = s("976028"),
  f = s("782340"),
  _ = s("904620");
(n = a || (a = {}))[n.ODDS_FIRST = 0] = "ODDS_FIRST", n[n.ODDS_2 = 1] = "ODDS_2", n[n.ODDS_3 = 2] = "ODDS_3", n[n.ODDS_4 = 3] = "ODDS_4", n[n.ODDS_5 = 4] = "ODDS_5", n[n.ODDS_6 = 5] = "ODDS_6", n[n.ODDS_LAST = 6] = "ODDS_LAST";

function m(e) {
  let {
    className: t
  } = e, s = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), [a, n] = i.useState(!1), [r, m] = i.useState(0), [g, h] = i.useState(""), [N] = i.useState(new u.Timeout), [I, p] = i.useState((0, T.randomBetween)(5, 95)), C = function(e, t) {
    switch (e) {
      case 0:
        return f.default.Messages.PACKAGES_HELP_1;
      case 1:
        return f.default.Messages.PACKAGES_HELP_2;
      case 2:
        return f.default.Messages.PACKAGES_HELP_3;
      case 3:
        return f.default.Messages.PACKAGES_HELP_4;
      case 4:
        return f.default.Messages.PACKAGES_HELP_5.format({
          percent: t
        });
      case 5:
        return f.default.Messages.PACKAGES_HELP_6;
      case 6:
        return f.default.Messages.PACKAGES_HELP_7
    }
  }(r, I), A = g.length === C.length, O = () => {
    r < 6 ? m(r + 1) : m(0), p((0, T.randomBetween)(5, 95))
  };
  return i.useEffect(() => {
    if (g.length === C.length || !a || s) {
      N.stop();
      return
    }
    N.start((0, T.randomBetween)(20, 100), () => {
      h(C.substring(0, g.length + 1))
    })
  }, [a, r, g.length, N, C, s]), i.useEffect(() => {
    h(C.substring(0, 1))
  }, [r, C]), i.useEffect(() => () => N.stop(), [N]), (0, l.jsx)(S.Tooltip, {
    text: s ? C : g,
    "aria-label": C,
    onTooltipShow: () => n(!0),
    onTooltipHide: () => n(!1),
    children: e => (0, l.jsx)(S.Clickable, {
      ...e,
      onClick: s || A ? O : void 0,
      className: o(t, _.clickable),
      children: (0, l.jsx)(c.CircleQuestionIcon, {
        className: _.icon
      })
    })
  })
}