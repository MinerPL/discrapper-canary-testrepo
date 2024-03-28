"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("803997"),
  o = s.n(r),
  d = s("442837"),
  u = s("846519"),
  c = s("289987"),
  S = s("481060"),
  E = s("607070"),
  T = s("626135"),
  _ = s("641826"),
  f = s("981631"),
  m = s("689938"),
  g = s("297370");
(n = a || (a = {}))[n.ODDS_FIRST = 0] = "ODDS_FIRST", n[n.ODDS_2 = 1] = "ODDS_2", n[n.ODDS_3 = 2] = "ODDS_3", n[n.ODDS_4 = 3] = "ODDS_4", n[n.ODDS_5 = 4] = "ODDS_5", n[n.ODDS_6 = 5] = "ODDS_6", n[n.ODDS_LAST = 6] = "ODDS_LAST";

function h(e) {
  let {
    className: t
  } = e, s = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), [a, n] = i.useState(!1), [r, h] = i.useState(0), [N, I] = i.useState(""), [p] = i.useState(new u.Timeout), [C, A] = i.useState((0, _.randomBetween)(5, 95)), O = function(e, t) {
    switch (e) {
      case 0:
        return m.default.Messages.PACKAGES_HELP_1;
      case 1:
        return m.default.Messages.PACKAGES_HELP_2;
      case 2:
        return m.default.Messages.PACKAGES_HELP_3;
      case 3:
        return m.default.Messages.PACKAGES_HELP_4;
      case 4:
        return m.default.Messages.PACKAGES_HELP_5.format({
          percent: t
        });
      case 5:
        return m.default.Messages.PACKAGES_HELP_6;
      case 6:
        return m.default.Messages.PACKAGES_HELP_7
    }
  }(r, C), x = N.length === O.length, R = () => {
    T.default.track(f.AnalyticEvents.EASTER_EGG_INTERACTED, {
      type: "packages_help_icon_click",
      position: r
    }), r < 6 ? h(r + 1) : h(0), A((0, _.randomBetween)(5, 95))
  };
  return i.useEffect(() => {
    if (N.length === O.length || !a || s) {
      p.stop();
      return
    }
    p.start((0, _.randomBetween)(20, 100), () => {
      I(O.substring(0, N.length + 1))
    })
  }, [a, r, N.length, p, O, s]), i.useEffect(() => {
    I(O.substring(0, 1))
  }, [r, O]), i.useEffect(() => () => p.stop(), [p]), (0, l.jsx)(S.Tooltip, {
    text: s ? O : N,
    "aria-label": O,
    onTooltipShow: () => {
      T.default.track(f.AnalyticEvents.EASTER_EGG_INTERACTED, {
        type: "packages_help_icon_hover",
        position: r
      }), n(!0)
    },
    onTooltipHide: () => n(!1),
    children: e => (0, l.jsx)(S.Clickable, {
      ...e,
      onClick: s || x ? R : void 0,
      className: o()(t, g.clickable),
      children: (0, l.jsx)(c.CircleQuestionIcon, {
        className: g.icon,
        color: "currentColor"
      })
    })
  })
}