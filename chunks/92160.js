"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(263704),
  o = t(185403),
  c = t(689938),
  d = t(348621);

function u(e) {
  let {
    className: s,
    enabled: t,
    previewCTA: i,
    onPreview: u,
    onToggle: E,
    animateStatus: _,
    firstLine: I,
    secondLine: T,
    disabled: N
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(s, d.enableContainer),
    children: [t ? (0, n.jsx)(r.Z, {
      width: 24,
      height: 24,
      className: l()(d.activeCircle, {
        [d.animate]: _
      })
    }) : (0, n.jsx)(o.Z, {
      width: 24,
      height: 24,
      className: l()(d.editCircle, {
        [d.animate]: _
      })
    }), (0, n.jsxs)("div", {
      className: d.enableDescription,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: I
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: T
      })]
    }), (0, n.jsxs)("div", {
      className: d.buttonContainer,
      children: [null == u ? null : (0, n.jsx)(a.Button, {
        className: d.previewButton,
        look: a.Button.Looks.LINK,
        size: a.Button.Sizes.SMALL,
        onClick: u,
        disabled: N,
        color: a.Button.Colors.PRIMARY,
        children: null != i ? i : c.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PREVIEW
      }), (0, n.jsx)(a.Button, {
        disabled: null == E || N,
        size: a.Button.Sizes.SMALL,
        color: t ? a.Button.Colors.RED : a.Button.Colors.BRAND,
        onClick: E,
        children: t ? c.Z.Messages.DISABLE : c.Z.Messages.ENABLE
      })]
    })]
  })
}