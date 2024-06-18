"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(454585),
  u = n(572004),
  _ = n(689938),
  d = n(501496);

function c(e) {
  let {
    element: {
      data: {
        title: t,
        body: n,
        sms: s,
        is_localized: c
      }
    }
  } = e, [E, I] = r.useState(!1), T = r.useRef(l.Z.reactParserFor(l.Z.defaultRules));
  return c ? (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(a.Heading, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: d.header,
      children: t
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: d.bodyText,
      children: T.current(n)
    }), (0, i.jsx)("div", {
      className: d.__invalid_smsInfoContainer,
      children: (0, i.jsxs)("div", {
        className: o()(d.smsNumberContainer, {
          [d.copied]: E
        }),
        children: [(0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          selectable: !0,
          className: d.smsNumberText,
          children: s
        }), (0, i.jsx)(a.Button, {
          size: a.Button.Sizes.SMALL,
          className: d.__invalid_trailingButton,
          onClick: () => {
            (0, u.JG)(s) && I(!0)
          },
          color: a.Button.Colors.PRIMARY,
          children: E ? _.Z.Messages.COPIED : _.Z.Messages.COPY
        })]
      })
    })]
  }) : null
}