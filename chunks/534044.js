"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("735250");
a("470079");
var s = a("803997"),
  n = a.n(s),
  i = a("481060"),
  o = a("285952"),
  d = a("548647"),
  r = a("696375"),
  c = a("800530"),
  u = a("689938"),
  E = a("747744"),
  _ = a("134247"),
  A = a("160557");

function S(e) {
  let {
    className: t,
    onNext: a,
    onClose: s
  } = e, S = (0, d.useEmitAppealIngestionEvent)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: _.header,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: E.iconContainer,
        children: (0, l.jsx)("img", {
          src: A,
          alt: "",
          className: E.icon
        })
      }), (0, l.jsx)(i.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
      }), (0, l.jsx)(i.Heading, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
      }), null != s && (0, l.jsx)(i.ModalCloseButton, {
        className: _.closeButton,
        onClick: s
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: n()(E.modalContent, t),
      paddingFix: !1,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: E.actionsHeader,
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
      }), (0, l.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
        url: c.SafetyHubLinks.COMMUNITY_GUIDELINES,
        onClick: () => S(c.SafetyHubAnalyticsActions.ClickCommunityGuidelinesLink)
      }), (0, l.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
        url: c.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => S(c.SafetyHubAnalyticsActions.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        onClick: a,
        color: i.Button.Colors.BRAND,
        children: u.default.Messages.DONE
      })
    })]
  })
}