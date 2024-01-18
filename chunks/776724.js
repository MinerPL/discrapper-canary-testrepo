"use strict";
l.r(a), l.d(a, {
  default: function() {
    return I
  }
}), l("222007");
var t = l("37983"),
  s = l("884691"),
  n = l("414456"),
  i = l.n(n),
  o = l("446674"),
  d = l("77078"),
  r = l("913144"),
  c = l("145131"),
  u = l("781324"),
  E = l("646356"),
  _ = l("736393"),
  N = l("698609"),
  S = l("782340"),
  A = l("199586"),
  x = l("434848");

function I(e) {
  let {
    className: a,
    onClose: l,
    onNext: n,
    onBack: I
  } = e, T = (0, o.useStateFromStores)([E.default], () => E.default.getAppealClassificationId()), {
    classification: f
  } = (0, N.useSafetyHubClassification)(null != T ? T : ""), g = (0, _.capitalizeText)(null == f ? void 0 : f.description), h = (0, o.useStateFromStores)([E.default], () => E.default.getIsSubmitting()), p = (0, o.useStateFromStores)([E.default], () => E.default.getAppealSignal()), L = (0, o.useStateFromStores)([E.default], () => E.default.getFreeTextAppealReason()), [m, C] = s.useState(L), [M, j] = s.useState(!1), O = s.useCallback(async () => {
    null !== T && (await u.requestReview(T, p, L), null == n || n())
  }, [T, p, L, n]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, t.jsx)(d.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, t.jsx)(d.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != l && (0, t.jsx)(d.ModalCloseButton, {
        className: x.closeButton,
        onClick: l
      })]
    }), (0, t.jsxs)(d.ModalContent, {
      className: i(x.templatesList, a),
      paddingFix: !1,
      children: [(0, t.jsx)("ul", {
        className: A.listContainer,
        children: [(0, _.getAppealSignalDisplayText)(p), L].filter(e => e.length > 0).map((e, a) => (0, t.jsx)("li", {
          className: A.listItem,
          children: (0, t.jsx)(d.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, a))
      }), (0, t.jsx)("div", {
        className: A.anchorContainer,
        children: (0, t.jsx)(d.Anchor, {
          onClick: () => j(e => !e),
          children: (0, t.jsx)(d.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: L.length > 0 ? S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : S.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), (0, t.jsx)("div", {
        className: x.policyContainer,
        children: (0, t.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: g
        })
      }), M && (0, t.jsxs)("div", {
        className: A.inputContainer,
        children: [(0, t.jsx)(d.TextArea, {
          value: m,
          onChange: e => C(e)
        }), (0, t.jsx)(d.Button, {
          onClick: () => {
            r.default.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: m
            }), j(!1)
          },
          color: d.Button.Colors.BRAND,
          submitting: h,
          className: A.saveButton,
          children: S.default.Messages.SAVE
        })]
      })]
    }), (0, t.jsxs)(d.ModalFooter, {
      children: [(0, t.jsx)(d.Button, {
        onClick: O,
        color: d.Button.Colors.RED,
        submitting: h,
        children: S.default.Messages.SUBMIT
      }), (0, t.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        onClick: I,
        disabled: h,
        children: S.default.Messages.BACK
      })]
    })]
  })
}