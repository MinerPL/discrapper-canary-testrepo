"use strict";
a.r(s);
var l = a("735250");
a("470079");
var r = a("481060"),
  t = a("153124"),
  d = a("426642"),
  o = a("689938"),
  n = a("544427");
s.default = e => {
  let {
    transitionState: s,
    errors: a,
    onClose: c
  } = e, i = (0, t.useUID)();
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: s,
    "aria-labelledby": i,
    children: [(0, l.jsx)(r.ModalHeader, {
      separator: !1,
      className: n.modalHeader,
      children: (0, l.jsx)(r.ModalCloseButton, {
        onClick: c,
        className: n.closeButton
      })
    }), (0, l.jsxs)(r.ModalContent, {
      className: n.modalContent,
      children: [(0, l.jsxs)(r.FormSection, {
        className: n.header,
        children: [(0, l.jsx)(r.FormTitle, {
          id: i,
          className: n.title,
          children: o.default.Messages.UPLOAD_ERROR_TITLE
        }), (0, l.jsx)(r.FormText, {
          type: r.FormTextTypes.DESCRIPTION,
          children: o.default.Messages.UPLOAD_ERROR_DESCRIPTION
        })]
      }), (0, l.jsx)("div", {
        className: n.errors,
        children: (0, l.jsx)(r.Scroller, {
          children: a.map(e => (0, l.jsx)(d.default, {
            error: e
          }, e.filename))
        })
      }), (0, l.jsx)(r.Button, {
        onClick: c,
        children: o.default.Messages.GOT_IT
      })]
    })]
  })
}