t.r(n);
var o = t(735250),
  r = t(470079),
  i = t(442837),
  a = t(215569),
  s = t(481060),
  l = t(852860),
  c = t(153124),
  u = t(944163),
  d = t(266395),
  m = t(200305),
  f = t(592286),
  _ = t(689938),
  b = t(920691);
let h = () => (0, o.jsx)(l.Z, {
  submitting: !1,
  message: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
(0, d.PE)(!1);
  },
  onResetText: _.Z.Messages.CANCEL,
  onSave: () => {
(0, d.PE)(!1), (0, s.closeModal)(f.Pn);
  },
  onSaveText: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: s.ButtonColors.RED
});
n.default = e => {
  let {
guildId: n,
transitionState: t,
onClose: l,
onComplete: f,
isPreview: _ = !1
  } = e, p = (0, d.rb)(e => e.shouldShowWarning), E = (0, i.e7)([u.Z], () => u.Z.get(n)), C = (0, c.Dt)();
  return (r.useEffect(() => {
E === u.t && l();
  }, [
l,
E
  ]), E === u.t) ? null : (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    className: b.container,
    transitionState: t,
    'aria-labelledby': C,
    children: [
      (0, o.jsx)(s.ModalCloseButton, {
        onClick: () => l(!1),
        className: b.closeButton
      }),
      (0, o.jsx)(m.Z, {
        headerId: C,
        guildId: n,
        onClose: l,
        onComplete: f,
        isPreview: _
      })
    ]
  }),
  (0, o.jsx)(a.W, {
    children: !0 === p && (0, o.jsx)(s.SlideIn, {
      className: b.notice,
      children: (0, o.jsx)(h, {})
    })
  })
]
  });
};