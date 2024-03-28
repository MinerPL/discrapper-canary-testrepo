"use strict";
n.r(t), n.d(t, {
  SafetyWarningBanner: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("286379"),
  i = n("481060"),
  r = n("797614"),
  o = n("465670"),
  u = n("473092"),
  d = n("689938"),
  c = n("739968"),
  f = n("560580");

function h(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: h,
    warningType: m,
    header: p,
    description: E,
    onDismiss: C,
    buttons: g
  } = e;
  l.useEffect(() => {
    r.default.increment({
      name: s.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, []);
  let S = l.useCallback(() => {
    null == C || C(), (0, u.trackCtaEvent)({
      channelId: t,
      warningId: n,
      senderId: h,
      warningType: m,
      cta: u.CtaEventTypes.USER_BANNER_DISMISS
    })
  }, [C, t, n, h, m]);
  return (0, a.jsxs)("div", {
    className: c.strangerDangerBanner,
    children: [(0, a.jsxs)("div", {
      className: c.shieldAndHeading,
      children: [(0, a.jsx)("img", {
        className: c.safetyShieldIcon,
        src: f,
        alt: ""
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: E
        })]
      })]
    }), (0, a.jsx)("div", {
      className: c.buttons,
      children: null == g ? void 0 : g.map((e, t) => (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: e.color,
        "aria-label": e.text,
        onClick: e.onclick,
        className: c.ctaButton,
        children: e.text
      }, t))
    }), (0, a.jsx)(i.Clickable, {
      className: c.closeButton,
      onClick: S,
      role: "button",
      "aria-label": d.default.Messages.DISMISS,
      children: (0, a.jsx)(o.default, {
        width: 24,
        height: 24,
        className: c.closeButton
      })
    })]
  })
}