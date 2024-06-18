"use strict";
var i = n(735250);
n(470079);
var r = n(780384),
  s = n(481060),
  o = n(410030),
  a = n(689938),
  l = n(55386),
  u = n(167969),
  _ = n(557256);
t.Z = function(e) {
  let {
    onClose: t
  } = e, n = (0, o.ZP)(), d = (0, r.wj)(n);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.ModalHeader, {
      separator: !1,
      className: l.header,
      children: [(0, i.jsx)("img", {
        alt: "",
        className: l.headerImage,
        src: d ? u : _
      }), (0, i.jsx)(s.Heading, {
        className: l.title,
        variant: "heading-xl/medium",
        children: a.Z.Messages.STICKER_ASSET_LOAD_ERROR
      }), (0, i.jsx)(s.ModalCloseButton, {
        onClick: t,
        className: l.modalCloseButton
      })]
    }), (0, i.jsx)(s.ModalContent, {
      className: l.content,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: a.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: l.modalFooter,
      children: (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.MEDIUM,
        onClick: t,
        children: a.Z.Messages.CLOSE
      })
    })]
  })
}