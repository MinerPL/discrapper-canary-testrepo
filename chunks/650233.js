"use strict";
t.r(s), t.d(s, {
  HubEmailConnectionModalView: function() {
    return E
  },
  default: function() {
    return _
  }
});
var a = t("735250"),
  l = t("470079"),
  n = t("990547"),
  i = t("481060"),
  o = t("390885"),
  r = t("495784"),
  d = t("950012"),
  c = t("161836"),
  u = t("630724"),
  N = t("689938"),
  m = t("825697");

function _(e) {
  let {
    transitionState: s,
    onClose: t,
    isNUXFlow: _
  } = e;
  return l.useEffect(() => {
    r.default.hideHubUpsell(), _ && o.default.flowStep(u.FlowType.ORGANIC, u.RegistrationSteps.HUB_CONNECTION)
  }, [_]), (0, a.jsx)(i.ModalRoot, {
    className: m.modalRoot,
    transitionState: s,
    "aria-label": N.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
    impression: {
      impressionName: n.ImpressionNames.HUB_EMAIL_SIGNUP
    },
    children: (0, a.jsx)(i.ModalContent, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      paddingFix: !1,
      className: m.modalContent,
      children: (0, a.jsxs)("div", {
        className: m.container,
        children: [(0, a.jsx)("div", {
          className: m.sidebarContainer,
          children: (0, a.jsx)(c.default, {})
        }), (0, a.jsxs)("div", {
          className: m.contentContainer,
          children: [(0, a.jsx)(i.ModalCloseButton, {
            onClick: t,
            className: m.closeButton
          }), (0, a.jsx)(d.default, {
            isNUXFlow: _,
            onClose: t
          })]
        })]
      })
    })
  })
}
let E = e => {
  let {
    invite: s
  } = e;
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)("div", {
      className: m.sidebarContainer,
      children: (0, a.jsx)(c.default, {})
    }), (0, a.jsx)("div", {
      className: m.contentContainer,
      children: (0, a.jsx)(d.default, {
        invite: s
      })
    })]
  })
}