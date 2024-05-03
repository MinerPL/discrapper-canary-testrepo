"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var o = n("735250"),
  i = n("470079"),
  r = n("481060"),
  a = n("44315"),
  s = n("745510"),
  d = n("981631"),
  u = n("689938"),
  l = n("109180");

function c(e) {
  let {
    onClose: t,
    initialPercent: n,
    numActions: c
  } = e, [C, h] = i.useState(n), {
    createMultipleConfetti: m
  } = i.useContext(s.ConfettiCannonContext);
  return i.useEffect(() => {
    setTimeout(() => h(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      m({
        position: {
          type: "static-random",
          minValue: {
            x: e - 5,
            y: t - 5
          },
          maxValue: {
            x: e + 5,
            y: t + 5
          }
        }
      }, 25)
    }, 700), setTimeout(t, 2e3)
  }, [m, t]), (0, o.jsxs)("div", {
    children: [(0, o.jsx)(r.Heading, {
      className: l.heading,
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: u.default.Messages.MEMBER_ACTION_COMPLETE_MODAL_TEXT_WITH_COUNT.format({
        count: c
      })
    }), (0, o.jsx)(r.Progress, {
      foregroundGradientColor: [(0, a.getColor)(d.Color.GREEN_300), (0, a.getColor)(d.Color.GREEN_230)],
      percent: 100 * C,
      animate: !0
    })]
  })
}