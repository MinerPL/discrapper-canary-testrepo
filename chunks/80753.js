"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
}), i("47120");
var n = i("735250"),
  o = i("470079"),
  l = i("481060"),
  s = i("377171"),
  r = i("31336"),
  a = i("481637"),
  c = i("532810"),
  u = i("915312");

function d() {
  let [e, t] = o.useState(!1), i = (0, u.useUniqueAccessibilityViolations)(), {
    reporting: d
  } = a.default.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: !1
  });
  return (o.useEffect(() => {
    if (d && e && null != i) return i.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(c.VIOLATION_ATTRIBUTE_NAME, "")
      })
    }), () => {
      i.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(c.VIOLATION_ATTRIBUTE_NAME)
        })
      })
    }
  }, [i, d, e]), d && null != i && 0 !== i.length) ? (0, n.jsxs)("div", {
    style: {
      backgroundColor: s.default.INFO_DANGER_BACKGROUND,
      color: s.default.INFO_DANGER_TEXT,
      display: "flex",
      alignItems: "center",
      padding: "8px 12px"
    },
    children: [(0, n.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "info-danger-text",
      children: "Accessibility compliance issue(s) detected, check in-app DevTools"
    }), (0, n.jsxs)("div", {
      style: {
        display: "grid",
        gridAutoFlow: "column",
        gap: 4,
        marginLeft: "auto"
      },
      children: [(0, n.jsx)(l.Button, {
        size: l.Button.Sizes.TINY,
        color: l.Button.Colors.RED,
        style: {
          marginLeft: "auto"
        },
        onClick: r.toggleDisplayDevTools,
        children: "Open DevTools"
      }), (0, n.jsxs)(l.Button, {
        size: l.Button.Sizes.TINY,
        color: l.Button.Colors.RED,
        look: l.Button.Looks.INVERTED,
        style: {
          marginLeft: "auto"
        },
        onClick: () => t(!e),
        children: [e ? "Hide" : "Show", " Overlays"]
      })]
    })]
  }) : null
}