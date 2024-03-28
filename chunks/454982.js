"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("484614"),
  r = s("430492"),
  o = s("153124"),
  d = s("443852"),
  u = s("689938"),
  c = s("486465");
t.default = function(e) {
  let {
    onClose: t,
    onClaim: s,
    code: S,
    outboundPromotion: E,
    transitionState: T
  } = e, [_, f] = n.useState(null), m = (0, o.useUID)();
  return n.useEffect(() => {
    null == S && (0, d.claimOutboundPromotion)(E.id).then(e => s(e)).catch(e => {
      var t;
      return f(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code)
    })
  }, [S, E.id, s]), (0, a.jsx)(l.ModalRoot, {
    transitionState: T,
    "aria-labelledby": m,
    children: null != _ ? (0, a.jsx)(r.DropsModalClaimErrorBody, {
      onClose: t,
      errorCode: _
    }) : null == S ? (0, a.jsx)(l.ModalContent, {
      children: (0, a.jsx)(l.Spinner, {
        className: c.loading
      })
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(l.ModalHeader, {
        separator: !1,
        className: c.headerContainer,
        children: [(0, a.jsx)("div", {
          className: c.art
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          children: u.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
        })]
      }), (0, a.jsxs)(l.ModalContent, {
        children: [(0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          className: c.bodyText,
          children: E.outboundRedemptionModalBody
        }), (0, a.jsx)(l.FormDivider, {
          className: c.formDivider
        }), (0, a.jsxs)(l.FormSection, {
          title: u.default.Messages.REDEMPTION_CODE,
          className: c.formSection,
          children: [(0, a.jsx)(i.default, {
            value: S,
            buttonColor: l.Button.Colors.BRAND,
            buttonLook: l.Button.Looks.FILLED,
            delay: 1e3,
            inputClassName: c.textInput
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: c.confirmationText,
            children: u.default.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
          })]
        })]
      }), (0, a.jsxs)(l.ModalFooter, {
        children: [(0, a.jsx)(l.Button, {
          color: l.Button.Colors.BRAND,
          onClick: () => {
            let e = (0, d.getOutboundPromotionRedemptionUrl)(S, E);
            window.open(e, "_blank")
          },
          children: u.default.Messages.REDEEM
        }), (0, a.jsx)(l.Button, {
          onClick: t,
          look: l.Button.Looks.LINK,
          color: c.maybeLaterButton,
          children: u.default.Messages.MAYBE_LATER
        })]
      })]
    })
  })
}