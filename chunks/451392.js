t.d(s, {
  Z: function() {
return C;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(498607),
  o = t.n(r),
  l = t(692547),
  c = t(481060),
  d = t(220082),
  _ = t(318661),
  E = t(721987),
  u = t(74538),
  I = t(193528),
  T = t(993413),
  S = t(689938),
  N = t(798721);

function C(e) {
  let {
user: s,
pendingAvatar: t,
pendingColors: a,
onThemeColorsChange: r,
preventDisabled: C,
guildId: m,
className: A,
showPremiumIcon: g = !0,
showResetThemeButton: O = !1,
forcedDivider: h
  } = e, p = (0, _.ZP)(s.id, m), {
primaryColor: R,
secondaryColor: x
  } = (0, E.Z)({
user: s,
displayProfile: p,
pendingThemeColors: a,
isPreview: !0
  }), M = u.ZP.canUsePremiumProfileCustomization(s), f = null != t ? t : s.getAvatarURL(m, 80), D = (0, c.useToken)(l.Z.unsafe_rawColors.PRIMARY_530).hex(), P = (0, d.Cf)(f, D, !1);
  if (null == R || null == x)
return null;
  let L = e => {
r(o()(e, null == p ? void 0 : p.themeColors) ? void 0 : e);
  };
  return (0, n.jsx)(T.Z, {
title: S.Z.Messages.USER_SETTINGS_PROFILE_THEME,
disabled: !M && !C,
className: i()(N.__invalid_profileThemesSection, A),
showPremiumIcon: g,
forcedDivider: h,
children: (0, n.jsxs)('div', {
  className: N.sectionContainer,
  children: [
    (0, n.jsx)('div', {
      className: N.sparkleContainer,
      children: (0, n.jsx)(I.Z, {
        onChange: e => L([
          e,
          x
        ]),
        color: R,
        suggestedColors: P,
        showEyeDropper: !0,
        label: (0, n.jsx)(c.Text, {
          className: N.colorSwatchLabel,
          color: 'header-secondary',
          variant: 'text-xs/normal',
          'aria-hidden': !0,
          children: S.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        })
      })
    }),
    (0, n.jsx)('div', {
      className: N.sparkleContainer,
      children: (0, n.jsx)(I.Z, {
        onChange: e => L([
          R,
          e
        ]),
        color: x,
        suggestedColors: P,
        showEyeDropper: !0,
        label: (0, n.jsx)(c.Text, {
          className: N.colorSwatchLabel,
          color: 'header-secondary',
          variant: 'text-xs/normal',
          'aria-hidden': !0,
          children: S.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        })
      })
    }),
    O && null != m && (0, n.jsx)(c.Button, {
      className: N.resetButton,
      color: c.Button.Colors.PRIMARY,
      look: c.Button.Looks.LINK,
      size: c.Button.Sizes.SMALL,
      onClick: () => L([
        null,
        null
      ]),
      children: S.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
    })
  ]
})
  });
}