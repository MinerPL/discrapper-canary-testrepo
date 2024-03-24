"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("446674"),
  i = a("77078"),
  o = a("913144"),
  d = a("145131"),
  r = a("781324"),
  c = a("646356"),
  u = a("736393"),
  E = a("698609"),
  _ = a("49111"),
  A = a("782340"),
  S = a("803779"),
  N = a("221389");

function I(e) {
  let {
    className: t,
    onClose: a,
    onNext: I,
    onBack: x
  } = e, f = (0, n.useStateFromStores)([c.default], () => c.default.getAppealClassificationId()), {
    classification: T
  } = (0, E.useSafetyHubClassification)(null != f ? f : _.EMPTY_STRING_SNOWFLAKE_ID), g = (0, u.capitalizeText)(null == T ? void 0 : T.description), p = (0, n.useStateFromStores)([c.default], () => c.default.getIsSubmitting()), m = (0, n.useStateFromStores)([c.default], () => c.default.getAppealSignal()), C = (0, n.useStateFromStores)([c.default], () => c.default.getFreeTextAppealReason()), [L, h] = s.useState(!1), [M, O] = s.useState(""), j = s.useCallback(e => {
    o.default.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), P = s.useCallback(async () => {
    if (null !== f) try {
      O(""), await r.requestReview(f, m, C), null == I || I()
    } catch (t) {
      var e;
      O((0, u.getRequestReviewErrorFromCode)(null === (e = t.body) || void 0 === e ? void 0 : e.code))
    }
  }, [f, m, C, I]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: N.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: N.title,
        variant: "heading-xl/semibold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: N.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != a && (0, l.jsx)(i.ModalCloseButton, {
        className: N.closeButton,
        onClick: a
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: t,
      paddingFix: !1,
      children: [(0, l.jsx)("ul", {
        className: S.listContainer,
        children: [(0, u.getAppealSignalDisplayText)(m), C].filter(e => e.length > 0).map((e, t) => (0, l.jsx)("li", {
          className: S.listItem,
          children: (0, l.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, t))
      }), (0, l.jsx)("div", {
        className: S.anchorContainer,
        children: (0, l.jsx)(i.Anchor, {
          onClick: () => h(e => !e),
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: C.length > 0 ? A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), L && (0, l.jsx)("div", {
        className: S.inputContainer,
        children: (0, l.jsx)(i.TextArea, {
          value: C,
          onChange: j
        })
      }), (0, l.jsx)("div", {
        className: N.policyContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: g
        })
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: S.footerText,
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
      })]
    }), (0, l.jsxs)(i.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: ["" !== M && (0, l.jsx)(i.Text, {
        className: S.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: M
      }), (0, l.jsxs)("div", {
        className: S.buttonContainer,
        children: [(0, l.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: x,
          disabled: p,
          children: A.default.Messages.BACK
        }), (0, l.jsx)(i.Button, {
          onClick: P,
          color: i.Button.Colors.RED,
          submitting: p,
          children: A.default.Messages.SUBMIT
        })]
      })]
    })]
  })
}