"use strict";
n.r(t);
var r = n("735250"),
  s = n("470079"),
  o = n("442837"),
  i = n("215569"),
  a = n("481060"),
  l = n("852860"),
  u = n("864293"),
  d = n("153124"),
  c = n("944163"),
  h = n("266395"),
  f = n("200305"),
  m = n("592286"),
  E = n("689938"),
  p = n("815431");
let _ = () => (0, r.jsx)(l.default, {
  submitting: !1,
  message: E.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, h.setShowWarning)(!1)
  },
  onResetText: E.default.Messages.CANCEL,
  onSave: () => {
    (0, h.setShowWarning)(!1), (0, a.closeModal)(m.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: E.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: a.ButtonColors.RED
});
t.default = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: l,
    onComplete: m,
    isPreview: E = !1
  } = e, T = (0, h.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), x = (0, o.useStateFromStores)([c.default], () => c.default.get(t)), N = (0, d.useUID)();
  return (s.useEffect(() => {
    x === c.NO_MEMBER_VERIFICATION_FORM && l()
  }, [l, x]), x === c.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalRoot, {
      size: a.ModalSize.MEDIUM,
      className: p.container,
      transitionState: n,
      "aria-labelledby": N,
      children: [(0, r.jsx)(a.ModalCloseButton, {
        onClick: () => l(!1),
        className: p.closeButton
      }), (0, r.jsx)(f.default, {
        headerId: N,
        guildId: t,
        onClose: l,
        onComplete: m,
        isPreview: E
      })]
    }), (0, r.jsx)(i.TransitionGroup, {
      children: !0 === T && (0, r.jsx)(u.default, {
        className: p.notice,
        children: (0, r.jsx)(_, {})
      })
    })]
  })
}