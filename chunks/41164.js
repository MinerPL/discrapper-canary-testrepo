"use strict";
i.r(t);
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("230711"),
  s = i("181211"),
  o = i("188879"),
  r = i("800530"),
  c = i("981631"),
  d = i("689938"),
  u = i("91870"),
  m = i("170143");
t.default = e => {
  let {
    transitionState: t,
    onClose: i,
    classificationId: A,
    source: _
  } = e, h = (0, s.default)(), f = () => {
    i(), l.default.open(c.UserSettingsSections.PRIVACY_AND_SAFETY, r.SafetyHubView.ACCOUNT_STANDING)
  };
  return (0, a.jsxs)(n.ModalRoot, {
    className: u.modalRoot,
    transitionState: t,
    children: [(0, a.jsxs)("div", {
      className: u.modalHeader,
      children: [(0, a.jsx)("img", {
        className: u.image,
        src: m,
        alt: ""
      }), (0, a.jsx)(n.ModalCloseButton, {
        className: u.modalClose,
        onClick: i
      })]
    }), (0, a.jsx)(n.ModalContent, {
      className: u.modalContent,
      children: h ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsx)(o.default, {
        classificationId: A,
        source: _,
        onError: f
      })
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        className: u.__invalid_button,
        type: "button",
        color: n.Button.Colors.BRAND,
        onClick: f,
        children: d.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
      })
    })]
  })
}