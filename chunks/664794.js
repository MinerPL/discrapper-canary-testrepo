"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("100527"),
  o = n("906732"),
  l = n("299206"),
  u = n("389052"),
  d = n("622724"),
  _ = n("314897"),
  c = n("808268"),
  E = n("785717"),
  I = n("537387"),
  T = n("228168"),
  f = n("689938");

function S(e) {
  let {
    user: t,
    profileType: n,
    guildId: S,
    viewProfileItem: h
  } = e, A = (0, r.useStateFromStores)([_.default], () => _.default.getId() === t.id), {
    trackUserProfileAction: m
  } = (0, E.useUserProfileAnalyticsContext)(), {
    analyticsLocations: N,
    newestAnalyticsLocation: p
  } = (0, o.default)(s.default.USER_PROFILE_OVERFLOW_MENU), O = (0, u.default)({
    user: t,
    color: "danger",
    location: p,
    onBlock: () => m({
      action: "BLOCK",
      analyticsLocations: N
    }),
    onUnblock: () => m({
      action: "UNBLOCK",
      analyticsLocations: N
    })
  }), C = (0, d.default)({
    user: t,
    guildId: S,
    color: "danger",
    location: p,
    onAction: () => m({
      action: "REPORT",
      analyticsLocations: N
    })
  }), R = (0, l.default)({
    id: t.id,
    label: f.default.Messages.COPY_ID_USER
  });
  if (A && n !== T.UserProfileTypes.FULL_SIZE) return null;
  let g = () => A ? null : (0, i.jsxs)(a.MenuGroup, {
      children: [O, C]
    }),
    L = () => null == R ? null : (0, i.jsx)(a.MenuGroup, {
      children: R
    });
  return (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: N,
    children: (0, i.jsx)(a.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsxs)(a.Menu, {
          navId: "user-profile-overflow-menu",
          onSelect: void 0,
          onClose: t,
          "aria-label": f.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: [(0, i.jsx)(a.MenuGroup, {
            children: h
          }), g(), L()]
        })
      },
      children: e => (0, i.jsx)(I.default, {
        text: f.default.Messages.MORE,
        icon: c.default,
        ...e
      })
    })
  })
}