"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("503089"),
  o = s("906732"),
  d = s("254901"),
  u = s("18438"),
  c = s("778825"),
  S = s("66516"),
  E = s("484459"),
  T = s("216045"),
  f = s("25990"),
  _ = s("594174"),
  m = s("585483"),
  g = s("16703"),
  I = s("785145"),
  h = s("981631"),
  N = s("526761"),
  p = s("689938"),
  C = s("347620");

function A() {
  d.default.useExperiment({
    location: "profile_customization_auto"
  });
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
    t = (0, g.default)(),
    s = (0, l.useStateFromStores)([c.default, f.default], () => c.default.showNotice() || f.default.showNotice()),
    A = null != e ? e : t,
    O = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()),
    {
      subsection: x,
      setSubsection: R
    } = (0, I.default)(),
    {
      analyticsLocations: M
    } = (0, o.default)();
  return n.useEffect(() => {
    null != O && (0, E.default)(O.id, O.getAvatarURL(null == A ? void 0 : A.id, 80), {
      guildId: null == A ? void 0 : A.id
    })
  }, [null == A ? void 0 : A.id, O]), (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: M,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: p.default.Messages.USER_SETTINGS_PROFILES
      }),
      children: [(0, a.jsxs)(i.TabBar, {
        className: C.tabBar,
        type: "top",
        look: "brand",
        selectedItem: x,
        onItemSelect: function(t) {
          if (x !== t) {
            if (s) {
              m.ComponentDispatch.dispatch(h.ComponentActions.SHAKE_APP, {
                duration: 300,
                intensity: r.SHAKE_INTENSITY_DEFAULT
              }), m.ComponentDispatch.dispatch(h.ComponentActions.EMPHASIZE_NOTICE);
              return
            }
            t === N.ProfileCustomizationSubsection.GUILD && null == e && null != A && (0, u.initGuildIdentitySettings)(A, M), R(t)
          }
        },
        children: [(0, a.jsx)(i.TabBar.Item, {
          className: C.tabBarItem,
          id: N.ProfileCustomizationSubsection.USER_PROFILE,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, N.ProfileCustomizationSubsection.USER_PROFILE), (0, a.jsx)(i.TabBar.Item, {
          className: C.tabBarItem,
          id: N.ProfileCustomizationSubsection.GUILD,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, N.ProfileCustomizationSubsection.GUILD)]
      }), x === N.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: A
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}