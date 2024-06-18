"use strict";
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var i = n(470079),
  r = n(120356),
  s = n.n(r),
  o = n(866442),
  a = n(442837),
  l = n(780384),
  u = n(607070),
  _ = n(629935),
  d = n(168551),
  c = n(792125),
  E = n(168631);
let I = Object.freeze({
  "--profile-gradient-primary-color": "var(--background-secondary-alt)",
  "--profile-gradient-secondary-color": "var(--background-secondary-alt)",
  "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
  "--profile-gradient-button-color": "var(--button-secondary-background)",
  "--profile-avatar-border-color": "var(--background-secondary-alt)",
  "--profile-body-background-color": "var(--background-floating)",
  "--profile-body-background-hover": "var(--background-modifier-hover)",
  "--profile-body-divider-color": "var(--background-modifier-accent)",
  "--profile-body-border-color": "var(--border-faint)",
  "--profile-message-input-border-color": "var(--background-modifier-accent)",
  "--profile-note-background-color": "var(--background-tertiary)",
  "--profile-role-pill-background-color": "var(--background-secondary-alt)",
  "--profile-role-pill-border-color": "var(--interactive-normal)"
});

function T(e) {
  let {
    theme: t,
    primaryColor: n,
    secondaryColor: r
  } = e, [T, h] = (0, a.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.syncProfileThemeWithUserTheme]), S = (0, E.fq)(t), f = (0, E.wu)(t, n, h), N = (0, E.lM)(t, n), A = (0, E.e4)(t, r), m = h ? null == S ? void 0 : S.overlaySyncedWithUserTheme : null == S ? void 0 : S.overlay;
  return {
    profileThemeStyle: (0, i.useMemo)(() => {
      if (null == n || null == r || null == S || null == f || null == N || null == A || null == m) return I;
      let e = (e, t) => (0, o.ho)(e, T, null, t);
      return {
        "--profile-gradient-primary-color": e(n),
        "--profile-gradient-secondary-color": e(r),
        "--profile-gradient-overlay-color": m,
        "--profile-gradient-button-color": e((0, E.ZB)(n)),
        "--profile-avatar-border-color": e(f),
        "--profile-body-background-color": S.sectionBox,
        "--profile-body-background-hover": S.profileBodyBackgroundHover,
        "--profile-body-divider-color": e(N, S.dividerOpacity),
        "--profile-body-border-color": e(N, .12),
        "--profile-message-input-border-color": e(A),
        "--profile-note-background-color": S.noteBackgroundColor,
        "--profile-role-pill-background-color": S.rolePillBackgroundColor,
        "--profile-role-pill-border-color": S.rolePillBorderColor,
        ...(0, _.W4)({
          enabled: !0,
          primaryColor: n,
          secondaryColor: r,
          isDarkTheme: (0, l.wj)(t),
          textMixAmount: 25
        })
      }
    }, [n, r, S, f, N, A, m, t, T]),
    profileThemeClassName: s()((0, c.Q)(t), {
      [d.e3]: null != n,
      "custom-profile-theme": null != n
    })
  }
}