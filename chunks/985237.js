n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(727637),
  l = n(100527),
  u = n(906732),
  c = n(271383),
  d = n(430824),
  _ = n(785717),
  E = n(318661),
  f = n(78675),
  h = n(899007),
  p = n(438163),
  m = n(502762),
  I = n(437758),
  T = n(544989),
  g = n(171368),
  S = n(215633),
  A = n(777887),
  N = n(228168),
  v = n(689938),
  O = n(335182);

function R(e) {
  let {
user: t,
currentUser: n,
guildId: R,
channelId: C,
messageId: y,
roleId: D,
closePopout: L,
setPopoutRef: b,
disableUserProfileLink: M = __OVERLAY__,
newAnalyticsLocations: P = []
  } = e, {
analyticsLocations: U
  } = (0, u.ZP)([
...P,
l.Z.BITE_SIZE_PROFILE_POPOUT
  ]), w = (0, _.Q1)({
layout: 'BITE_SIZE_POPOUT',
userId: t.id,
guildId: R,
channelId: C,
messageId: y,
roleId: D
  }), x = (0, E.ZP)(t.id, R), G = (0, a.e7)([d.Z], () => null != R ? d.Z.getGuild(R) : null), k = (0, a.e7)([c.ZP], () => null != R ? c.ZP.getMember(R, t.id) : null), B = i.useRef(null), F = (0, s.Z)(B);
  i.useEffect(() => {
null == b || b(null == B ? void 0 : B.current);
  }, [
B,
b
  ]);
  let V = e => {
null == L || L(), (0, g.openUserProfileModal)({
  sourceAnalyticsLocations: U,
  userId: t.id,
  guildId: R,
  channelId: C,
  messageId: y,
  roleId: D,
  ...e
});
  };
  return (0, r.jsx)(u.Gt, {
value: U,
children: (0, r.jsx)(_.Mt, {
  layout: 'BITE_SIZE_POPOUT',
  userId: t.id,
  guildId: R,
  channelId: C,
  messageId: y,
  roleId: D,
  shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(o.Dialog, {
    ref: B,
    'aria-label': t.username,
    children: (0, r.jsxs)(m.Z, {
      user: t,
      displayProfile: x,
      profileType: N.y0.BITE_SIZE,
      children: [
        (0, r.jsx)(T.Z, {
          profileType: N.y0.BITE_SIZE,
          children: (0, r.jsx)(I.Z, {
            user: t,
            guildId: R,
            viewProfileItem: M ? null : (0, r.jsx)(o.MenuItem, {
              id: 'view-profile',
              label: v.Z.Messages.VIEW_FULL_PROFILE,
              action: () => {
                w({
                  action: 'PRESS_VIEW_PROFILE',
                  analyticsLocations: U
                }), V();
              }
            })
          })
        }),
        (0, r.jsxs)('header', {
          className: O.header,
          children: [
            (0, r.jsx)(f.Z, {
              user: t,
              displayProfile: x,
              guildId: R,
              profileType: N.y0.BITE_SIZE,
              hasProfileEffect: (null == x ? void 0 : x.profileEffectId) != null
            }),
            (0, r.jsx)(h.Z, {
              user: t,
              displayProfile: x,
              guildId: R,
              channelId: C,
              profileType: N.y0.BITE_SIZE,
              onOpenProfile: M ? void 0 : V
            }),
            (0, r.jsx)(p.Z, {
              user: t,
              profileType: N.y0.BITE_SIZE,
              onClose: L
            })
          ]
        }),
        (0, r.jsx)(A.Z, {
          user: t,
          currentUser: n,
          displayProfile: x,
          guild: G,
          isHovering: F,
          onOpenProfile: M ? void 0 : V,
          channelId: C,
          onClose: L
        }),
        (0, r.jsx)(S.Z, {
          user: t,
          guildId: R,
          channelId: C,
          onClose: L
        })
      ]
    })
  })
})
  });
}