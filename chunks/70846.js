a.r(s);
var r = a(735250);
a(470079);
var t = a(481060),
  o = a(313201),
  l = a(426642),
  c = a(689938),
  n = a(279124);
s.default = e => {
  let {
transitionState: s,
errors: a,
onClose: d
  } = e, i = (0, o.Dt)();
  return (0, r.jsxs)(t.ModalRoot, {
transitionState: s,
'aria-labelledby': i,
children: [
  (0, r.jsx)(t.ModalHeader, {
    separator: !1,
    className: n.modalHeader,
    children: (0, r.jsx)(t.ModalCloseButton, {
      onClick: d,
      className: n.closeButton
    })
  }),
  (0, r.jsxs)(t.ModalContent, {
    className: n.modalContent,
    children: [
      (0, r.jsxs)(t.FormSection, {
        className: n.header,
        children: [
          (0, r.jsx)(t.FormTitle, {
            id: i,
            className: n.title,
            children: c.Z.Messages.UPLOAD_ERROR_TITLE
          }),
          (0, r.jsx)(t.FormText, {
            type: t.FormTextTypes.DESCRIPTION,
            children: c.Z.Messages.UPLOAD_ERROR_DESCRIPTION
          })
        ]
      }),
      (0, r.jsx)('div', {
        className: n.errors,
        children: (0, r.jsx)(t.Scroller, {
          children: a.map(e => (0, r.jsx)(l.Z, {
            error: e
          }, e.filename))
        })
      }),
      (0, r.jsx)(t.Button, {
        onClick: d,
        children: c.Z.Messages.GOT_IT
      })
    ]
  })
]
  });
};