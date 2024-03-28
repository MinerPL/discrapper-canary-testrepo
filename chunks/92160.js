"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("481060"),
  r = s("263704"),
  o = s("185403"),
  d = s("689938"),
  u = s("172276");

function c(e) {
  let {
    className: t,
    enabled: s,
    previewCTA: l,
    onPreview: c,
    onToggle: E,
    animateStatus: _,
    firstLine: I,
    secondLine: T,
    disabled: S
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(t, u.enableContainer),
    children: [s ? (0, a.jsx)(r.default, {
      width: 24,
      height: 24,
      className: n()(u.activeCircle, {
        [u.animate]: _
      })
    }) : (0, a.jsx)(o.default, {
      width: 24,
      height: 24,
      className: n()(u.editCircle, {
        [u.animate]: _
      })
    }), (0, a.jsxs)("div", {
      className: u.enableDescription,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: I
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: T
      })]
    }), (0, a.jsxs)("div", {
      className: u.buttonContainer,
      children: [null == c ? null : (0, a.jsx)(i.Button, {
        className: u.previewButton,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.SMALL,
        onClick: c,
        disabled: S,
        color: i.Button.Colors.PRIMARY,
        children: null != l ? l : d.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PREVIEW
      }), (0, a.jsx)(i.Button, {
        disabled: null == E || S,
        size: i.Button.Sizes.SMALL,
        color: s ? i.Button.Colors.RED : i.Button.Colors.BRAND,
        onClick: E,
        children: s ? d.default.Messages.DISABLE : d.default.Messages.ENABLE
      })]
    })]
  })
}