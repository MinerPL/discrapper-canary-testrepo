"use strict";
l.r(a), l.d(a, {
  FakeActivityCharacter: function() {
    return t
  },
  default: function() {
    return I
  }
}), l("222007");
var t, i, n = l("37983"),
  r = l("884691"),
  s = l("414456"),
  o = l.n(s),
  u = l("146606"),
  d = l("77078"),
  c = l("206230"),
  f = l("777003"),
  m = l("782340"),
  v = l("771216"),
  h = l("125632"),
  p = l("591589");
(i = t || (t = {}))[i.WUMPUS = 0] = "WUMPUS", i[i.PHIBI = 1] = "PHIBI";
let g = {
  0: v.activityCharacterWumpus,
  1: v.activityCharacterPhibi
};
var I = r.memo(function(e) {
  let {
    activityName: a,
    activityCharacter: l = 0,
    showExampleButton: t = !1
  } = e, [i, s] = r.useState(0), [I, S] = (0, u.useSpring)(() => ({
    from: {
      rotate: "0deg"
    },
    config: {
      tension: 1e3,
      friction: 5
    }
  })), x = r.useRef({
    seconds: i,
    jitter: async () => {
      for (;;) {
        var e;
        let a = (e = x.current.seconds, c.default.useReducedMotion ? 0 : Math.min(10, (e -= 5399) / 300 * 10));
        S({
          rotate: "-".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80)), S({
          rotate: "".concat(a, "deg")
        }), await new Promise(e => setTimeout(e, 80))
      }
    }
  });
  return r.useEffect(() => void(x.current.seconds = i)), r.useEffect(() => {
    let e = setInterval(() => {
      s(e => (5399 === e && x.current.jitter(), ++e))
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
        className: o(v.fakeActivityIcon, g[l]),
        children: (0, n.jsx)(u.animated.img, {
          className: v.fakeActivityPencil,
          src: 0 === l ? p : h,
          style: I
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
              let l = i % 60,
                t = (i - l) / 60;
              return (0, n.jsxs)("span", {
                className: v.fakeActivityTimeValues,
                children: [t.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
              }, a)
            }
          })
        })]
      })]
    }), t && (0, n.jsx)(d.Button, {
      className: v.button,
      color: v.buttonColor,
      size: d.Button.Sizes.SMALL,
      fullWidth: !0,
      children: m.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON
    })]
  })
})