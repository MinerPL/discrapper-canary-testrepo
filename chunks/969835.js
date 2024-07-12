n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(727637),
  l = n(100527),
  u = n(906732),
  c = n(680295),
  d = n(271383),
  _ = n(430824),
  E = n(785717),
  f = n(481046),
  h = n(718107),
  p = n(318661),
  m = n(78675),
  I = n(899007),
  T = n(438163),
  g = n(502762),
  S = n(544989),
  A = n(481932),
  N = n(195387),
  v = n(272510),
  O = n(171368),
  R = n(958120),
  C = n(215633),
  y = n(228168),
  D = n(689938),
  L = n(335182);

function b(e) {
  let {
user: t,
currentUser: n,
guildId: b,
channelId: M,
messageId: P,
roleId: U,
closePopout: w,
setPopoutRef: x,
disableUserProfileLink: G = __OVERLAY__,
newAnalyticsLocations: k = []
  } = e, {
analyticsLocations: B
  } = (0, u.ZP)([
...k,
l.Z.BITE_SIZE_PROFILE_POPOUT
  ]), F = (0, E.Q1)({
layout: 'BITE_SIZE_POPOUT',
userId: t.id,
guildId: b,
channelId: M,
messageId: P,
roleId: U
  }), V = (0, a.e7)([_.Z], () => null != b ? _.Z.getGuild(b) : null), H = (0, a.e7)([d.ZP], () => null != b ? d.ZP.getMember(b, t.id) : null), {
profileStatusEditEnabled: Z
  } = (0, f.K)({
location: 'BiteSizeProfilePopout'
  }), {
statusReactReplyEnabled: Y
  } = (0, h.t)({
location: 'BiteSizeProfilePopout'
  }), j = i.useRef(null), W = (0, p.ZP)(t.id, b), K = (0, s.Z)(j);
  i.useEffect(() => {
null == x || x(null == j ? void 0 : j.current);
  }, [
j,
x
  ]);
  let z = e => {
null == w || w(), (0, O.openUserProfileModal)({
  sourceAnalyticsLocations: B,
  userId: t.id,
  guildId: b,
  channelId: M,
  messageId: P,
  roleId: U,
  ...e
});
  };
  return (0, r.jsx)(u.Gt, {
value: B,
children: (0, r.jsx)(E.Mt, {
  layout: 'BITE_SIZE_POPOUT',
  userId: t.id,
  guildId: b,
  channelId: M,
  messageId: P,
  roleId: U,
  shouldTrackViewOnMount: null == H || null != H.fullProfileLoadedTimestamp,
  children: (0, r.jsxs)(o.Dialog, {
    ref: j,
    'aria-label': t.username,
    children: [
      (0, r.jsxs)(g.Z, {
        user: t,
        displayProfile: W,
        profileType: y.y0.BITE_SIZE,
        children: [
          (0, r.jsxs)(S.Z, {
            profileType: y.y0.BITE_SIZE,
            children: [
              (0, r.jsx)(N.Z, {
                user: t,
                guildId: b,
                channelId: M,
                onClose: w
              }),
              (0, r.jsx)(A.Z, {
                profileType: y.y0.BITE_SIZE,
                user: t
              }),
              t.id !== n.id && (0, r.jsx)(v.Z, {
                user: t,
                guildId: b,
                viewProfileItem: G ? null : (0, r.jsx)(o.MenuItem, {
                  id: 'view-profile',
                  label: D.Z.Messages.VIEW_FULL_PROFILE,
                  action: () => {
                    F({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: B
                    }), z();
                  }
                })
              })
            ]
          }),
          (0, r.jsxs)('header', {
            className: L.header,
            children: [
              (0, r.jsx)(m.Z, {
                user: t,
                displayProfile: W,
                guildId: b,
                profileType: y.y0.BITE_SIZE,
                hasProfileEffect: (null == W ? void 0 : W.profileEffectId) != null
              }),
              (0, r.jsx)(I.Z, {
                user: t,
                displayProfile: W,
                guildId: b,
                channelId: M,
                profileType: y.y0.BITE_SIZE,
                onOpenProfile: G ? void 0 : z
              }),
              (0, r.jsx)(T.Z, {
                user: t,
                profileType: y.y0.BITE_SIZE,
                editEnabled: Z,
                reactReplyEnabled: Y,
                onClose: w
              })
            ]
          }),
          (0, r.jsx)(R.Z, {
            user: t,
            currentUser: n,
            displayProfile: W,
            guild: V,
            isHovering: K,
            onOpenProfile: G ? void 0 : z,
            channelId: M,
            onClose: w
          }),
          (0, r.jsx)(C.Z, {
            user: t,
            guildId: b,
            channelId: M,
            onClose: w
          })
        ]
      }),
      (null == W ? void 0 : W.profileEffectId) != null && (0, r.jsx)(c.Z, {
        profileEffectId: null == W ? void 0 : W.profileEffectId,
        isHovering: K
      })
    ]
  })
})
  });
}