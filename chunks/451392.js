"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("498607"),
  r = s.n(i),
  o = s("692547"),
  d = s("481060"),
  u = s("220082"),
  c = s("318661"),
  S = s("721987"),
  E = s("74538"),
  T = s("193528"),
  f = s("993413"),
  m = s("689938"),
  _ = s("389634");

function g(e) {
  let {
    user: t,
    pendingAvatar: s,
    pendingColors: n,
    onThemeColorsChange: i,
    preventDisabled: g,
    guildId: h,
    className: I,
    showPremiumIcon: N = !0,
    showResetThemeButton: p = !1,
    forcedDivider: C
  } = e, A = (0, c.default)(t.id, h), {
    primaryColor: O,
    secondaryColor: x
  } = (0, S.default)({
    user: t,
    displayProfile: A,
    pendingThemeColors: n,
    isPreview: !0
  }), R = E.default.canUsePremiumProfileCustomization(t), M = null != s ? s : t.getAvatarURL(h, 80), v = (0, d.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), D = (0, u.useAvatarColors)(M, v, !1);
  if (null == O || null == x) return null;
  let L = e => {
    i(r()(e, null == A ? void 0 : A.themeColors) ? void 0 : e)
  };
  return (0, a.jsx)(f.default, {
    title: m.default.Messages.USER_SETTINGS_PROFILE_THEME,
    disabled: !R && !g,
    className: l()(_.__invalid_profileThemesSection, I),
    showPremiumIcon: N,
    forcedDivider: C,
    children: (0, a.jsxs)("div", {
      className: _.sectionContainer,
      children: [(0, a.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => L([e, x]),
          color: O,
          suggestedColors: D,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: m.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
          })
        })
      }), (0, a.jsx)("div", {
        className: _.sparkleContainer,
        children: (0, a.jsx)(T.default, {
          onChange: e => L([O, e]),
          color: x,
          suggestedColors: D,
          showEyeDropper: !0,
          label: (0, a.jsx)(d.Text, {
            className: _.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: m.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
          })
        })
      }), p && null != h && (0, a.jsx)(d.Button, {
        className: _.resetButton,
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        size: d.Button.Sizes.SMALL,
        onClick: () => L([null, null]),
        children: m.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
      })]
    })
  })
}