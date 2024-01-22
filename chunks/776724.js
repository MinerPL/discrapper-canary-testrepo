"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  i = a.n(n),
  o = a("446674"),
  d = a("77078"),
  r = a("913144"),
  c = a("145131"),
  u = a("781324"),
  E = a("646356"),
  A = a("736393"),
  _ = a("698609"),
  S = a("782340"),
  N = a("199586"),
  I = a("434848");

function x(e) {
  let {
    className: t,
    onClose: a,
    onNext: n,
    onBack: x
  } = e, f = (0, o.useStateFromStores)([E.default], () => E.default.getAppealClassificationId()), {
    classification: T
  } = (0, _.useSafetyHubClassification)(null != f ? f : ""), g = (0, A.capitalizeText)(null == T ? void 0 : T.description), p = (0, o.useStateFromStores)([E.default], () => E.default.getIsSubmitting()), C = (0, o.useStateFromStores)([E.default], () => E.default.getAppealSignal()), m = (0, o.useStateFromStores)([E.default], () => E.default.getFreeTextAppealReason()), [h, L] = s.useState(m), [M, j] = s.useState(!1), O = s.useCallback(async () => {
    null !== f && (await u.requestReview(f, C, m), null == n || n())
  }, [f, C, m, n]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: I.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        className: I.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(d.Text, {
        className: I.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != a && (0, l.jsx)(d.ModalCloseButton, {
        className: I.closeButton,
        onClick: a
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: i(I.templatesList, t),
      paddingFix: !1,
      children: [(0, l.jsx)("ul", {
        className: N.listContainer,
        children: [(0, A.getAppealSignalDisplayText)(C), m].filter(e => e.length > 0).map((e, t) => (0, l.jsx)("li", {
          className: N.listItem,
          children: (0, l.jsx)(d.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, t))
      }), (0, l.jsx)("div", {
        className: N.anchorContainer,
        children: (0, l.jsx)(d.Anchor, {
          onClick: () => j(e => !e),
          children: (0, l.jsx)(d.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: m.length > 0 ? S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), (0, l.jsx)("div", {
        className: I.policyContainer,
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: g
        })
      }), M && (0, l.jsxs)("div", {
        className: N.inputContainer,
        children: [(0, l.jsx)(d.TextArea, {
          value: h,
          onChange: e => L(e)
        }), (0, l.jsx)(d.Button, {
          onClick: () => {
            r.default.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: h
            }), j(!1)
          },
          color: d.Button.Colors.BRAND,
          submitting: p,
          className: N.saveButton,
          children: S.default.Messages.SAVE
        })]
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        onClick: O,
        color: d.Button.Colors.RED,
        submitting: p,
        children: S.default.Messages.SUBMIT
      }), (0, l.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        onClick: x,
        disabled: p,
        children: S.default.Messages.BACK
      })]
    })]
  })
}