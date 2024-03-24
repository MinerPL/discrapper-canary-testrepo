"use strict";
n.r(t), n.d(t, {
  SafetyWarningBanner: function() {
    return h
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("155084"),
  o = n("945330"),
  u = n("217736"),
  d = n("782340"),
  c = n("860657"),
  f = n("907765");

function h(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: h,
    warningType: C,
    header: p,
    description: m,
    onDismiss: E,
    buttons: g
  } = e;
  a.useEffect(() => {
    r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, []);
  let S = a.useCallback(() => {
    null == E || E(), (0, u.trackCtaEvent)({
      channelId: t,
      warningId: n,
      senderId: h,
      warningType: C,
      cta: u.CtaEventTypes.USER_BANNER_DISMISS
    })
  }, [E, t, n, h, C]);
  return (0, s.jsxs)("div", {
    className: c.strangerDangerBanner,
    children: [(0, s.jsxs)("div", {
      className: c.shieldAndHeading,
      children: [(0, s.jsx)("img", {
        className: c.safetyShieldIcon,
        src: f,
        alt: ""
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: m
        })]
      })]
    }), (0, s.jsx)("div", {
      className: c.buttons,
      children: null == g ? void 0 : g.map((e, t) => (0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: e.color,
        "aria-label": e.text,
        onClick: e.onclick,
        className: c.ctaButton,
        children: e.text
      }, t))
    }), (0, s.jsx)(i.Clickable, {
      className: c.closeButton,
      onClick: S,
      role: "button",
      "aria-label": d.default.Messages.DISMISS,
      children: (0, s.jsx)(o.default, {
        width: 24,
        height: 24,
        className: c.closeButton
      })
    })]
  })
}