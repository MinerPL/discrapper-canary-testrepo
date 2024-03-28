"use strict";
s.r(a);
var t = s("735250");
s("470079");
var r = s("803997"),
  l = s.n(r),
  n = s("481060"),
  i = s("923928"),
  o = s("285952"),
  c = s("689938"),
  d = s("980385"),
  u = s("337667");
a.default = e => {
  let {
    onClose: a,
    transitionState: s,
    showHideSuppressWarning: r = !1
  } = e;
  return (0, t.jsx)(n.ModalRoot, {
    transitionState: s,
    className: d.container,
    "aria-label": c.default.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
    children: (0, t.jsxs)("form", {
      onSubmit: e => {
        null == e || e.preventDefault(), i.default.clearSuppressWarning(), null == a || a()
      },
      className: d.form,
      children: [(0, t.jsxs)(n.ModalContent, {
        className: d.modalContent,
        children: [(0, t.jsx)("img", {
          src: u,
          alt: "",
          className: d.hero
        }), (0, t.jsx)(n.Text, {
          className: d.title,
          color: "header-primary",
          variant: "text-md/semibold",
          children: c.default.Messages.HUB_STUDY_ROOM_SUPPRESS_TITLE
        }), (0, t.jsx)(n.Text, {
          className: d.description,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: c.default.Messages.HUB_STUDY_ROOM_SUPPRESS_DESCRIPTION
        })]
      }), (0, t.jsxs)(n.ModalFooter, {
        justify: o.default.Justify.BETWEEN,
        wrap: o.default.Wrap.WRAP,
        children: [(0, t.jsx)(n.Button, {
          type: "submit",
          size: n.Button.Sizes.XLARGE,
          className: l()(d.primaryButton, d.gutter),
          autoFocus: !0,
          children: c.default.Messages.GOT_IT
        }), r && (0, t.jsx)(n.Clickable, {
          onClick: () => i.default.clearSuppressWarning(!0),
          className: d.minorContainer,
          children: (0, t.jsx)(n.Text, {
            className: d.minorAction,
            variant: "text-xs/normal",
            children: c.default.Messages.DONT_SHOW_AGAIN
          })
        })]
      })]
    })
  })
}