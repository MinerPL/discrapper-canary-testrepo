"use strict";
t.r(a), t.d(a, {
  TwoWayLinkLanding: function() {
    return d
  }
});
var l = t("735250");
t("470079");
var n = t("442837"),
  s = t("481060"),
  r = t("553795"),
  o = t("285952"),
  i = t("689938"),
  c = t("837537");

function d(e) {
  let {
    platformType: a,
    onContinue: t,
    onClose: d,
    img: u,
    headerConnect: N,
    headerReconnect: h,
    body: x,
    learnMoreLink: m,
    valueProps: C
  } = e, T = (0, n.useStateFromStores)([r.default], () => {
    let e = r.default.getAccount(null, a);
    return (null == e ? void 0 : e.twoWayLink) === !1
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: c.header,
      separator: !1,
      children: [(0, l.jsxs)("div", {
        className: c.illustration,
        children: [u, " "]
      }), (0, l.jsx)(s.Heading, {
        className: c.title,
        variant: "heading-xl/extrabold",
        children: T && null != h ? h : N
      }), (0, l.jsx)(s.ModalCloseButton, {
        className: c.closeButton,
        onClick: d
      })]
    }), (0, l.jsxs)(s.ModalContent, {
      className: c.body,
      paddingFix: !1,
      children: [(0, l.jsx)(s.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: x
      }), (0, l.jsx)("div", {
        className: c.valueProps,
        children: C
      }), null != m ? (0, l.jsx)(s.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
          helpCenterLink: m
        })
      }) : null]
    }), (0, l.jsx)(s.ModalFooter, {
      className: c.footer,
      children: (0, l.jsx)(s.Button, {
        className: c.footerButton,
        color: s.Button.Colors.BRAND,
        onClick: t,
        children: i.default.Messages.CONTINUE
      })
    })]
  })
}