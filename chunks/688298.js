"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  i = n("470079"),
  r = n("481060"),
  s = n("703685"),
  l = n("689938"),
  o = n("109267");

function c(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d
  } = e, u = i.useRef(null);
  return (0, r.useFocusLock)(u), (0, a.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: l.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, a.jsxs)("div", {
      ref: u,
      className: o.colorPickersContainer,
      children: [(0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.primary
          }
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, a.jsx)(s.CustomColorPicker, {
          className: o.colorPicker,
          value: n.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: c
        })]
      }), t && (0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.secondary
          }
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, a.jsx)(s.CustomColorPicker, {
          className: o.colorPicker,
          value: n.secondary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: d
        })]
      })]
    })]
  })
}

function d(e) {
  let {
    shouldShow: t,
    showSecondaryColor: n,
    onRequestClose: i,
    children: s,
    palette: l,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, a.jsx)(r.Popout, {
    renderPopout: () => (0, a.jsx)(c, {
      showSecondaryColor: n,
      palette: l,
      onPrimaryColorChange: o,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: i,
    animation: r.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}