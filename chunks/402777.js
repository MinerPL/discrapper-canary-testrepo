n.d(t, {
  Z: function() {
return j;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(597312),
  l = n(481060),
  r = n(727637),
  o = n(410030),
  c = n(100527),
  u = n(906732),
  d = n(680295),
  h = n(785717),
  p = n(318661),
  m = n(78675),
  _ = n(113557),
  f = n(169979),
  E = n(215105),
  g = n(502762),
  C = n(256059),
  I = n(437758),
  x = n(544989),
  T = n(481932),
  N = n(272510),
  v = n(171368),
  S = n(926150),
  Z = n(308829),
  A = n(940885),
  M = n(625015),
  b = n(228168),
  R = n(642402);

function j(e) {
  let {
user: t,
currentUser: n,
channel: j
  } = e, L = __OVERLAY__, {
analyticsLocations: P
  } = (0, u.ZP)(c.Z.PROFILE_PANEL), O = (0, p.ZP)(t.id), y = (0, o.ZP)(), D = a.useRef(null), k = (0, r.Z)(D), [U, w] = a.useState(), [B, H] = a.useState(), G = (e, t) => {
w(e), H(t);
  }, V = e => {
(0, v.openUserProfileModal)({
  sourceAnalyticsLocations: P,
  userId: t.id,
  channelId: j.id,
  ...e
});
  };
  return (0, i.jsx)(u.Gt, {
value: P,
children: (0, i.jsx)(h.Mt, {
  layout: 'SIMPLIFIED_DM_PANEL',
  userId: t.id,
  channelId: j.id,
  children: (0, i.jsxs)(g.Z, {
    ref: D,
    user: t,
    displayProfile: O,
    profileType: b.y0.PANEL,
    themeOverride: y,
    className: R.container,
    children: [
      (0, i.jsxs)(s.u2, {
        children: [
          (0, i.jsxs)(x.Z, {
            profileType: b.y0.PANEL,
            children: [
              (0, i.jsx)(T.Z, {
                user: t,
                profileType: b.y0.PANEL
              }),
              t.bot ? (0, i.jsx)(I.Z, {
                user: t
              }) : (0, i.jsx)(N.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsx)(l.Popout, {
            renderPopout: e => {
              let {
                setPopoutRef: n
              } = e;
              return null == U ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(E.Z, {
                user: t,
                channelId: j.id,
                profileType: b.y0.PANEL,
                sourceDetails: B,
                sourceType: U,
                setPopoutRef: n,
                onReply: G
              });
            },
            animationPosition: 'top',
            position: 'bottom',
            align: 'center',
            shouldShow: null != U,
            children: () => (0, i.jsxs)('header', {
              className: R.header,
              children: [
                (0, i.jsx)(m.Z, {
                  user: t,
                  displayProfile: O,
                  profileType: b.y0.PANEL,
                  animateOnHover: !k
                }),
                (0, i.jsx)(_.Z, {
                  location: 'SimplifiedProfilePanel',
                  user: t,
                  displayProfile: O,
                  channelId: j.id,
                  profileType: b.y0.PANEL,
                  onOpenProfile: L ? void 0 : V,
                  onReply: G
                }),
                (0, i.jsx)(f.Z, {
                  location: 'SimplifiedProfilePanel',
                  user: t,
                  channelId: j.id,
                  profileType: b.y0.PANEL,
                  onReply: G
                }),
                (0, i.jsx)(C.Z, {
                  user: t
                })
              ]
            })
          }),
          (0, i.jsx)(S.Z, {
            user: t,
            currentUser: n,
            displayProfile: O,
            channel: j,
            isHovering: k,
            onOpenProfile: L ? void 0 : V
          }),
          (0, i.jsx)(A.Z, {
            user: t,
            channelId: j.id
          }),
          (0, i.jsx)(M.Z, {
            user: t,
            displayProfile: O
          })
        ]
      }),
      (0, i.jsx)(Z.Z, {
        user: t,
        channelId: j.id
      }),
      (null == O ? void 0 : O.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == O ? void 0 : O.profileEffectId,
        isHovering: k
      })
    ]
  })
})
  });
}