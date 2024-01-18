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
  i = l("269096"),
  o = l("77078"),
  d = l("145131"),
  r = l("795010"),
  c = l("170213"),
  u = l("782340"),
  E = l("669223"),
  _ = l("434848");

function N(e) {
  let {
    className: a,
    onNext: l,
    onClose: s
  } = e;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(o.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: _.header,
      separator: !1,
      children: [(0, t.jsx)("div", {
        className: E.iconContainer,
        children: (0, t.jsx)(i.CheckmarkLargeIcon, {
          color: o.tokens.colors.INTERACTIVE_ACTIVE,
          className: E.icon
        })
      }), (0, t.jsx)(o.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
      }), (0, t.jsx)(o.Heading, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
      }), null != s && (0, t.jsx)(o.ModalCloseButton, {
        className: _.closeButton,
        onClick: s
      })]
    }), (0, t.jsxs)(o.ModalContent, {
      className: n(_.templatesList, E.modalContent, a),
      paddingFix: !1,
      children: [(0, t.jsx)(o.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: E.actionsHeader,
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
      }), (0, t.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
        url: c.SafetyHubLinks.COMMUNITY_GUIDELINES
      }), (0, t.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
        url: c.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK
      })]
    }), (0, t.jsx)(o.ModalFooter, {
      children: (0, t.jsx)(o.Button, {
        onClick: l,
        color: o.Button.Colors.BRAND,
        children: u.default.Messages.DONE
      })
    })]
  })
}