"use strict";
o.r(t), o.d(t, {
  default: function() {
    return h
  }
});
var s = o("735250"),
  a = o("470079"),
  n = o("481060"),
  d = o("367907"),
  i = o("313889"),
  r = o("177862"),
  l = o("36459"),
  c = o("981631"),
  u = o("689938"),
  _ = o("958138");

function h(e) {
  let {
    automodDecision: t,
    transitionState: o,
    onClose: h
  } = e, A = a.useCallback(() => {
    (0, d.trackWithMetadata)(c.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: r.Feedback.BUG,
      decision_id: t.decisionId,
      message_id: t.messageId,
      content: t.messageContent
    }), (0, l.executeAlertAction)(t.messageId, t.channel, i.AutomodAlertActionType.SUBMIT_FEEDBACK), h()
  }, [t, h]);
  return (0, s.jsxs)(n.ModalRoot, {
    transitionState: o,
    size: n.ModalSize.SMALL,
    children: [(0, s.jsx)(n.ModalHeader, {
      separator: !1,
      children: (0, s.jsx)(n.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: u.default.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_TITLE
      })
    }), (0, s.jsx)(n.ModalContent, {
      children: (0, s.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: u.default.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_SUBTITLE
      })
    }), (0, s.jsxs)(n.ModalFooter, {
      children: [(0, s.jsx)("div", {
        className: _.button,
        children: (0, s.jsx)(n.Button, {
          onClick: A,
          color: n.Button.Colors.BRAND_NEW,
          look: n.Button.Looks.FILLED,
          children: u.default.Messages.YES_TEXT
        })
      }), (0, s.jsx)(n.Button, {
        onClick: h,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}