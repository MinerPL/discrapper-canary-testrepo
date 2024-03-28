"use strict";
t.r(a), t.d(a, {
  FakeActivityCharacter: function() {
    return l
  }
}), t("47120");
var l, i, n = t("735250"),
  r = t("470079"),
  s = t("803997"),
  o = t.n(s),
  u = t("718017"),
  d = t("481060"),
  c = t("607070"),
  f = t("659101"),
  m = t("689938"),
  v = t("609135"),
  p = t("508840"),
  g = t("576909");
(i = l || (l = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
let h = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
a.default = r.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: t = 0,
    showExampleButton: l = !1
  } = e, [i, s] = r.useState(0), [S, I] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), A = r.useRef({
    seconds: i,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = A.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        I({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), I({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return r.useEffect(() => void(A.current.seconds = i)), r.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && A.current.jitter(), ++e))
    }, 1e3);
    return () => clearInterval(e)
  }, []), (0, n.jsxs)(f.default, {
    lastSection: !0,
    "aria-hidden": !0,
    children: [(0, n.jsx)(d.Heading, {
      className: v.fakeActivityTitle,
      variant: "eyebrow",
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_TITLE
    }), (0, n.jsxs)("div", {
      className: v.fakeActivityLayout,
      children: [(0, n.jsx)("div", {
        className: o()(v.fakeActivityIcon, h[t]),
        children: (0, n.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === t ? g : p,
          style: S
        })
      }), (0, n.jsxs)("div", {
        className: v.fakeActivityContent,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: null != a ? a : m.default.Messages.USER_SETTINGS_USER_PROFILE
        }), (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.PROFILE_CUSTOMIZATION_ACTIVITY_TIME.format({
            renderTimeHook(e, a) {
              let t = i % 60,
                l = (i - t) / 60;
              return (0, n.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [l.toString().padStart(2, "0"), ":", t.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), l && (0, n.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})