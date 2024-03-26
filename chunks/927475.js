"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  },
  HubEmailConnectionModalView: function() {
    return I
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("759843"),
  i = n("77078"),
  r = n("42963"),
  o = n("353983"),
  c = n("124604"),
  d = n("21873"),
  u = n("149806"),
  _ = n("782340"),
  E = n("353990");

function N(e) {
  let {
    transitionState: t,
    onClose: n,
    isNUXFlow: N
  } = e;
  return s.useEffect(() => {
    o.default.hideHubUpsell(), N && r.default.flowStep(u.FlowType.ORGANIC, u.RegistrationSteps.HUB_CONNECTION)
  }, [N]), (0, a.jsx)(i.ModalRoot, {
    className: E.modalRoot,
    transitionState: t,
    "aria-label": _.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
    impression: {
      impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP
    },
    children: (0, a.jsx)(i.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      paddingFix: !1,
      className: E.modalContent,
      children: (0, a.jsxs)("div", {
        className: E.container,
        children: [(0, a.jsx)("div", {
          className: E.sidebarContainer,
          children: (0, a.jsx)(d.default, {})
        }), (0, a.jsxs)("div", {
          className: E.contentContainer,
          children: [(0, a.jsx)(i.ModalCloseButton, {
            onClick: n,
            className: E.closeButton
          }), (0, a.jsx)(c.default, {
            isNUXFlow: N,
            onClose: n
          })]
        })]
      })
    })
  })
}
let I = e => {
  let {
    invite: t
  } = e;
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.sidebarContainer,
      children: (0, a.jsx)(d.default, {})
    }), (0, a.jsx)("div", {
      className: E.contentContainer,
      children: (0, a.jsx)(c.default, {
        invite: t
      })
    })]
  })
}