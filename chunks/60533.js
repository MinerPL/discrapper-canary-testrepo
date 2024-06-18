"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(90815),
  r = t(594174),
  o = t(815198);

function c(e) {
  let {
    guild: s
  } = e, t = (0, i.e7)([r.default], () => {
    let e = r.default.getCurrentUser();
    return null != e && (null == s ? void 0 : s.isOwner(e)) === !0
  }), c = () => {
    (0, a.q)(s.id, {
      demonetized: !0
    })
  };
  return (0, n.jsxs)("div", {
    className: o.container,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: "Monetization Temporarily Disabled"
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
    }), (0, n.jsx)(l.Spacer, {
      size: 24
    }), (0, n.jsx)(l.Tooltip, {
      text: "Only the server owner can accept new terms",
      shouldShow: !t,
      children: e => (0, n.jsx)(l.Button, {
        disabled: !t,
        ...e,
        onClick: c,
        children: "Accept New Terms"
      })
    })]
  })
}