"use strict";
l.r(a), l.d(a, {
  default: function() {
    return N
  }
});
var t = l("37983");
l("884691");
var s = l("414456"),
  n = l.n(s),
  i = l("77078"),
  o = l("145131"),
  d = l("736393"),
  r = l("795010"),
  c = l("380676"),
  u = l("170213"),
  E = l("782340"),
  _ = l("434848");

function N(e) {
  var a, l;
  let {
    classification: s,
    isSpam: N = !1,
    isCoppa: S = !1,
    className: A,
    onClose: x,
    onNext: I
  } = e, T = null !== (a = null == s ? void 0 : s.explainer_link) && void 0 !== a ? a : "", f = null != s && null != s.flagged_content && s.flagged_content.length > 0, g = (0, d.capitalizeText)(null == s ? void 0 : s.description), h = !N && !S;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: _.header,
      separator: !1,
      children: [(0, t.jsx)(i.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, t.jsx)(i.Text, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != x && (0, t.jsx)(i.ModalCloseButton, {
        className: _.closeButton,
        onClick: x
      })]
    }), (0, t.jsxs)(i.ModalContent, {
      className: n(_.modalContent, A),
      paddingFix: !1,
      children: [f && null == s.guild_metadata && (0, t.jsx)(c.ClassificationEvidence, {
        flaggedContent: null !== (l = s.flagged_content) && void 0 !== l ? l : []
      }), (0, t.jsx)(i.Text, {
        className: _.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, t.jsx)("div", {
        className: _.policyContainer,
        children: (0, t.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: g
        })
      }), S && (0, t.jsx)(r.default, {
        url: u.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: E.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
      }), N && !S && (0, t.jsx)(r.default, {
        url: u.SafetyHubLinks.SPAM_LINK,
        text: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
      }), !S && (0, t.jsx)(r.default, {
        text: E.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: T
      }), h && (0, t.jsx)(i.Text, {
        className: _.learnMore,
        variant: "text-xs/normal",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), h && (0, t.jsx)(i.ModalFooter, {
      children: (0, t.jsx)(i.Button, {
        onClick: I,
        color: i.Button.Colors.BRAND,
        children: E.default.Messages.NEXT
      })
    })]
  })
}