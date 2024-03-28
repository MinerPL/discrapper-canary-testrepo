"use strict";
i.r(t);
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("230711"),
  s = i("181211"),
  o = i("188879"),
  c = i("800530"),
  d = i("981631"),
  r = i("689938"),
  u = i("653279"),
  m = i("170143");
t.default = e => {
  let {
    transitionState: t,
    onClose: i,
    classificationId: _,
    source: f
  } = e, A = (0, s.default)(), h = () => {
    i(), l.default.open(d.UserSettingsSections.PRIVACY_AND_SAFETY, c.SafetyHubView.ACCOUNT_STANDING)
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
      children: A ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsx)(o.default, {
        classificationId: _,
        source: f,
        onError: h
      })
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        className: u.__invalid_button,
        type: "button",
        color: n.Button.Colors.BRAND,
        onClick: h,
        children: r.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
      })
    })]
  })
}