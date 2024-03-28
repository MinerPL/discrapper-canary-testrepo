"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var l = a("735250");
a("470079");
var s = a("803997"),
  n = a.n(s),
  i = a("481060"),
  o = a("285952"),
  d = a("219230"),
  r = a("788080"),
  c = a("548647"),
  u = a("696375"),
  E = a("97568"),
  _ = a("800530"),
  A = a("689938"),
  S = a("134247");

function N(e) {
  var t, a;
  let {
    classification: s,
    isSpam: N = !1,
    isCoppa: I = !1,
    className: x,
    onClose: f,
    onNext: T
  } = e, g = (0, c.useEmitAppealIngestionEvent)(), p = null !== (t = null == s ? void 0 : s.explainer_link) && void 0 !== t ? t : "", m = null != s && null != s.flagged_content && s.flagged_content.length > 0, C = (0, r.capitalizeText)(null == s ? void 0 : s.description), L = !N && !I, h = (0, d.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_evidence"), M = null != s && ((0, r.isGuildClassification)(s) && h || m);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: S.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: S.title,
        variant: "heading-xl/semibold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: S.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != f && (0, l.jsx)(i.ModalCloseButton, {
        className: S.closeButton,
        onClick: f
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: n()(S.modalContent, !M && S.evidenceOffset, x),
      paddingFix: !1,
      children: [M && (0, l.jsx)(E.ClassificationEvidence, {
        flaggedContent: null !== (a = s.flagged_content) && void 0 !== a ? a : [],
        actions: s.actions,
        guildMetadata: s.guild_metadata
      }), (0, l.jsx)(i.Text, {
        className: S.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, l.jsx)("div", {
        className: S.policyContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: C
        })
      }), I && (0, l.jsx)(u.default, {
        url: _.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: A.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
        onClick: () => g(_.SafetyHubAnalyticsActions.ClickAgeVerificationLink)
      }), N && !I && (0, l.jsx)(u.default, {
        url: _.SafetyHubLinks.SPAM_LINK,
        text: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
        onClick: () => g(_.SafetyHubAnalyticsActions.ClickSpamWebformLink)
      }), !I && (0, l.jsx)(u.default, {
        text: A.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: p,
        onClick: () => g(_.SafetyHubAnalyticsActions.ClickLearnMoreLink)
      }), L && (0, l.jsx)(i.Text, {
        className: S.learnMore,
        variant: "text-xs/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), L && (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        onClick: T,
        color: i.Button.Colors.BRAND,
        children: A.default.Messages.NEXT
      })
    })]
  })
}