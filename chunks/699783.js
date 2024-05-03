"use strict";
o.r(t), o.d(t, {
  default: function() {
    return N
  }
});
var s = o("735250"),
  a = o("470079"),
  l = o("399606"),
  n = o("481060"),
  r = o("194359"),
  i = o("726521"),
  d = o("594174"),
  u = o("51144"),
  C = o("941362"),
  O = o("134612"),
  c = o("981631"),
  _ = o("689938"),
  R = o("279365");

function N(e) {
  let {
    userId: t,
    channelId: o,
    transitionState: N,
    onBlock: T,
    onBlockAndReport: I,
    onClose: A,
    onCancel: B
  } = e, M = (0, C.useLastChannelMessage)(o), E = a.useCallback(() => {
    r.default.addRelationship({
      userId: t,
      context: {
        location: O.LOCATION_CONTEXT_WEB
      },
      type: c.RelationshipTypes.BLOCKED
    }), (0, n.showToast)((0, n.createToast)(_.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, n.ToastType.SUCCESS))
  }, [t]), h = a.useCallback(() => {
    E(), T(), A()
  }, [E, T, A]), L = a.useCallback(() => {
    E(), (0, i.showReportModalForInappropriateConversationSafetyAlert)(M), I(), A()
  }, [M, E, I, A]), p = (0, l.useStateFromStores)([d.default], () => d.default.getUser(t)), S = u.default.useName(p);
  return (0, s.jsx)(n.ModalRoot, {
    transitionState: N,
    children: (0, s.jsx)(n.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: (0, s.jsxs)(n.ModalContent, {
        className: R.modalContent,
        children: [(0, s.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: _.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
            name: S
          })
        }), (0, s.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          className: R.modalDescription,
          children: _.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_DESCRIPTION
        }), (0, s.jsx)(n.Button, {
          onClick: h,
          color: n.ButtonColors.BRAND,
          size: n.ButtonSizes.MEDIUM,
          children: _.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_BUTTON
        }), (0, s.jsx)(n.Button, {
          onClick: L,
          color: n.ButtonColors.PRIMARY,
          size: n.ButtonSizes.MEDIUM,
          children: _.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_BLOCK_AND_REPORT_BUTTON
        }), (0, s.jsx)(n.Button, {
          onClick: B,
          color: n.ButtonColors.PRIMARY,
          look: n.ButtonLooks.OUTLINED,
          size: n.ButtonSizes.MEDIUM,
          children: _.default.Messages.INAPPROPRIATE_CONVERSATION_BLOCK_MODAL_CANCEL_BUTTON
        })]
      })
    })
  })
}