"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(653041);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(100527),
  a = n(906732),
  l = n(299206),
  u = n(389052),
  _ = n(622724),
  d = n(314897),
  c = n(808268),
  E = n(785717),
  I = n(993409),
  T = n(228168),
  h = n(689938);

function S(e) {
  let {
    user: t,
    profileType: n,
    guildId: S,
    viewProfileItem: f
  } = e, N = (0, r.e7)([d.default], () => d.default.getId() === t.id), {
    trackUserProfileAction: A
  } = (0, E.KZ)(), {
    analyticsLocations: m,
    newestAnalyticsLocation: O
  } = (0, a.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU), R = (0, u.Z)({
    user: t,
    color: "danger",
    location: O,
    onBlock: () => A({
      action: "BLOCK",
      analyticsLocations: m
    }),
    onUnblock: () => A({
      action: "UNBLOCK",
      analyticsLocations: m
    })
  }), C = (0, _.Z)({
    user: t,
    guildId: S,
    color: "danger",
    location: O,
    onAction: () => A({
      action: "REPORT",
      analyticsLocations: m
    })
  }), p = (0, l.Z)({
    id: t.id,
    label: h.Z.Messages.COPY_ID_USER,
    onSuccess: () => A({
      action: "COPY_USER_ID",
      analyticsLocations: m
    })
  });
  if (N && n !== T.y0.FULL_SIZE) return null;
  let g = [];
  return (null != f && g.push([f]), !N && (null != R || null != C) && g.push([R, C]), null != p && g.push([p]), 0 === g.length) ? null : (0, i.jsx)(a.Gt, {
    value: m,
    children: (0, i.jsx)(s.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(s.Menu, {
          navId: "user-profile-overflow-menu",
          onSelect: void 0,
          onClose: t,
          "aria-label": h.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: g.map((e, t) => (0, i.jsx)(s.MenuGroup, {
            children: e.map(e => e)
          }, t))
        })
      },
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, i.jsx)(I.Z, {
          variant: "banner",
          text: h.Z.Messages.MORE,
          icon: c.Z,
          onClick: e => {
            A({
              action: "PRESS_OPTIONS"
            }), t(e)
          },
          ...n
        })
      }
    })
  })
}