"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  l = n("266491"),
  o = n("77078"),
  a = n("45299"),
  u = n("965397"),
  c = n("476765"),
  d = n("526253"),
  f = n("347977"),
  h = n("267235"),
  E = n("394294"),
  m = n("782340"),
  v = n("874426");
let p = () => (0, r.jsx)(a.default, {
  submitting: !1,
  message: m.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: m.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, o.closeModal)(E.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: m.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: o.ButtonColors.RED
});
var C = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: a,
    onComplete: E,
    isPreview: m = !1
  } = e, C = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), _ = (0, s.useStateFromStores)([d.default], () => d.default.get(t)), T = (0, c.useUID)();
  return (i.useEffect(() => {
    _ === d.NO_MEMBER_VERIFICATION_FORM && a()
  }, [a, _]), _ === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.ModalRoot, {
      size: o.ModalSize.MEDIUM,
      className: v.container,
      transitionState: n,
      "aria-labelledby": T,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: () => a(!1),
        className: v.closeButton
      }), (0, r.jsx)(h.default, {
        headerId: T,
        guildId: t,
        onClose: a,
        onComplete: E,
        isPreview: m
      })]
    }), (0, r.jsx)(l.TransitionGroup, {
      children: !0 === C && (0, r.jsx)(u.default, {
        className: v.notice,
        children: (0, r.jsx)(p, {})
      })
    })]
  })
}