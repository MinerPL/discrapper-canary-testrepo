"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("969176"),
  r = s.n(i),
  o = s("669491"),
  d = s("77078"),
  u = s("462274"),
  c = s("217513"),
  S = s("528438"),
  E = s("719923"),
  T = s("409214"),
  f = s("570697"),
  _ = s("782340"),
  m = s("440682");

function g(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: i,
    preventDisabled: g,
    guildId: h,
    className: N,
    showPremiumIcon: I = !0,
    showResetThemeButton: p = !1,
    forcedDivider: C
  } = e, A = (0, c.default)(t.id, h), [O, x] = (0, S.default)(t, A, {
    pendingThemeColors: n,
    isPreview: !0
  }), R = E.default.canUsePremiumProfileCustomization(t), M = null != s ? s : t.getAvatarURL(h, 80), D = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), v = (0, u.useAvatarColors)(M, D, !1);
  if (null == O || null == x) return null;
  let L = e => {
    let t = r(e, null == A ? void 0 : A.themeColors);
    i(t ? void 0 : e)
  };
  return (0, a.jsx)(f.default, {
    title: _.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !R && !g,
    className: l(m.profileThemesSection, N),
    showPremiumIcon: I,
    forcedDivider: C,
    children: (0, a.jsxs)("div", {
      className: m.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: m.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => L([e, x]),
          color: O,
          suggestedColors: v,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: m.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: _.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, a.jsx)("div", {
        className: m.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => L([O, e]),
          color: x,
          suggestedColors: v,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: m.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: _.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), p && null != h && (0, a.jsx)(d.Button, {
        className: m.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => L([null, null]),
        children: _.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}