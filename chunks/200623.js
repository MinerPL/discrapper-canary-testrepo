"use strict";
t.r(s), t.d(s, {
  default: function() {
    return p
  }
});
var a = t("735250"),
  r = t("470079"),
  l = t("442837"),
  n = t("481060"),
  d = t("277390"),
  i = t("639351"),
  o = t("63063"),
  c = t("258609"),
  u = t("259408"),
  f = t("893387"),
  m = t("927923"),
  x = t("981631"),
  h = t("689938"),
  N = t("304570");

function _(e) {
  let {
    step: s,
    instructions: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.cardRow,
    children: [(0, a.jsx)("div", {
      className: N.stepNumberContainer,
      children: (0, a.jsx)(n.Text, {
        variant: "text-sm/semibold",
        className: N.stepNumber,
        children: s
      })
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: N.instructions,
      children: t
    })]
  })
}

function p(e) {
  let {
    channel: s,
    transitionState: t,
    onClose: p
  } = e, g = (0, l.useStateFromStores)([c.default], () => null != c.default.getRemoteSessionId()), C = (0, u.default)(s, {
    forQRCode: !0
  });
  return r.useEffect(() => {
    g && p()
  }, [g, p]), r.useEffect(() => {
    (0, f.default)(s.id, m.GameConsoleTypes.XBOX)
  }, [s.id]), (0, a.jsxs)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    className: N.modalRoot,
    transitionState: t,
    children: [(0, a.jsxs)(n.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, a.jsx)(n.Heading, {
        className: N.modalHeader,
        variant: "heading-xl/extrabold",
        children: h.default.Messages.TRANSFER_VOICE_TO_XBOX
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.default.Messages.XBOX_APP_REQUIRED_SUBHEADER
      })]
    }), (0, a.jsx)(n.ModalContent, {
      className: N.content,
      children: (0, a.jsxs)("div", {
        className: N.card,
        children: [(0, a.jsxs)("div", {
          className: N.cardText,
          children: [(0, a.jsxs)(n.Text, {
            variant: "text-lg/semibold",
            color: "header-primary",
            className: N.cardRow,
            children: [(0, a.jsx)(i.default, {
              className: N.cardHeaderIcon
            }), h.default.Messages.XBOX_APP_FOR_MOBILE]
          }), (0, a.jsx)(_, {
            step: 1,
            instructions: h.default.Messages.XBOX_APP_STEP_ONE
          }), (0, a.jsx)(_, {
            step: 2,
            instructions: h.default.Messages.XBOX_APP_STEP_TWO
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/medium",
            children: (0, a.jsx)(n.Anchor, {
              className: N.learnMore,
              href: o.default.getArticleURL(x.HelpdeskArticles.XBOX_CONNECTION),
              children: h.default.Messages.LEARN_MORE
            })
          })]
        }), (0, a.jsx)(d.default, {
          className: N.qrCode,
          size: 120,
          text: C
        })]
      })
    }), (0, a.jsx)(n.ModalCloseButton, {
      className: N.closeButton,
      onClick: p
    })]
  })
}