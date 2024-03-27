"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("800751"),
  o = s("685665"),
  d = s("260518"),
  u = s("929423"),
  c = s("424562"),
  S = s("376402"),
  E = s("506885"),
  T = s("621200"),
  f = s("790618"),
  _ = s("697218"),
  m = s("659500"),
  g = s("565500"),
  h = s("543306"),
  N = s("49111"),
  I = s("397336"),
  p = s("782340"),
  C = s("395734");

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
    } = (0, h.default)(),
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
              m.ComponentDispatch.dispatch(N.ComponentActions.SHAKE_APP, {
                duration: 300,
                intensity: r.SHAKE_INTENSITY_DEFAULT
              }), m.ComponentDispatch.dispatch(N.ComponentActions.EMPHASIZE_NOTICE);
              return
            }
            t === I.ProfileCustomizationSubsection.GUILD && null == e && null != A && (0, u.initGuildIdentitySettings)(A, M), R(t)
          }
        },
        children: [(0, a.jsx)(i.TabBar.Item, {
          className: C.tabBarItem,
          id: I.ProfileCustomizationSubsection.USER_PROFILE,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
        }, I.ProfileCustomizationSubsection.USER_PROFILE), (0, a.jsx)(i.TabBar.Item, {
          className: C.tabBarItem,
          id: I.ProfileCustomizationSubsection.GUILD,
          children: p.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
        }, I.ProfileCustomizationSubsection.GUILD)]
      }), x === I.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
        selectedGuild: A
      }) : (0, a.jsx)(T.default, {})]
    })
  })
}