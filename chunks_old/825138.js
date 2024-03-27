"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("79112"),
  s = n("792105"),
  r = n("573240"),
  o = n("170213"),
  u = n("49111"),
  c = n("782340"),
  d = n("910300"),
  f = n("49155"),
  E = e => {
    let {
      transitionState: t,
      onClose: n,
      classificationId: E,
      source: _
    } = e, h = (0, s.default)(), S = () => {
      n(), l.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY, o.SafetyHubView.ACCOUNT_STANDING)
    };
    return (0, i.jsxs)(a.ModalRoot, {
      className: d.modalRoot,
      transitionState: t,
      children: [(0, i.jsxs)("div", {
        className: d.modalHeader,
        children: [(0, i.jsx)("img", {
          className: d.image,
          src: f,
          alt: ""
        }), (0, i.jsx)(a.ModalCloseButton, {
          className: d.modalClose,
          onClick: n
        })]
      }), (0, i.jsx)(a.ModalContent, {
        className: d.modalContent,
        children: h ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(r.default, {
          classificationId: E,
          source: _,
          onError: S
        })
      }), (0, i.jsx)(a.ModalFooter, {
        children: (0, i.jsx)(a.Button, {
          className: d.button,
          type: "button",
          color: a.Button.Colors.BRAND,
          onClick: S,
          children: c.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
        })
      })]
    })
  }