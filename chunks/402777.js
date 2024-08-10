n.d(t, {
  Z: function() {
return L;
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
  p = n(221292),
  m = n(318661),
  _ = n(78675),
  f = n(113557),
  E = n(169979),
  g = n(215105),
  C = n(502762),
  I = n(256059),
  x = n(437758),
  T = n(544989),
  N = n(481932),
  v = n(272510),
  S = n(171368),
  Z = n(926150),
  A = n(940885),
  M = n(625015),
  b = n(228168),
  R = n(689938),
  j = n(642402);

function L(e) {
  let {
user: t,
currentUser: n,
channel: L
  } = e, P = __OVERLAY__, O = (0, m.ZP)(t.id), y = (0, o.ZP)(), {
analyticsLocations: D
  } = (0, u.ZP)(c.Z.PROFILE_PANEL), k = (0, h.ZB)({
layout: 'SIMPLIFIED_DM_PANEL',
userId: t.id,
channelId: L.id
  }), U = a.useRef(null), w = (0, r.Z)(U), [B, H] = a.useState(), [G, V] = a.useState(), F = (e, t) => {
H(e), V(t);
  }, W = e => {
(0, S.openUserProfileModal)({
  sourceAnalyticsLocations: D,
  ...k,
  ...e
});
  };
  return (0, i.jsx)(u.Gt, {
value: D,
children: (0, i.jsx)(h.Mt, {
  value: k,
  children: (0, i.jsxs)(C.Z, {
    ref: U,
    user: t,
    displayProfile: O,
    profileType: b.y0.PANEL,
    themeOverride: y,
    className: j.container,
    children: [
      null != B && (0, i.jsx)('div', {
        className: j.backdrop
      }),
      (0, i.jsxs)(s.u2, {
        children: [
          (0, i.jsxs)(T.Z, {
            profileType: b.y0.PANEL,
            children: [
              (0, i.jsx)(N.Z, {
                user: t,
                profileType: b.y0.PANEL
              }),
              t.bot ? (0, i.jsx)(x.Z, {
                user: t
              }) : (0, i.jsx)(v.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsx)(l.Popout, {
            renderPopout: e => {
              let {
                setPopoutRef: n
              } = e;
              return null == B ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(g.Z, {
                user: t,
                channelId: L.id,
                profileType: b.y0.PANEL,
                sourceDetails: G,
                sourceType: B,
                setPopoutRef: n,
                onReply: F
              });
            },
            animationPosition: 'top',
            position: 'bottom',
            align: 'center',
            shouldShow: null != B,
            children: () => (0, i.jsxs)('header', {
              className: j.header,
              children: [
                (0, i.jsx)(_.Z, {
                  user: t,
                  displayProfile: O,
                  profileType: b.y0.PANEL,
                  animateOnHover: !w
                }),
                (0, i.jsx)(f.Z, {
                  location: 'SimplifiedProfilePanel',
                  user: t,
                  displayProfile: O,
                  channelId: L.id,
                  profileType: b.y0.PANEL,
                  isReplySource: B === b.N9.AVATAR || B === b.N9.STATUS,
                  onOpenProfile: P ? void 0 : W,
                  onReply: F
                }),
                (0, i.jsx)(E.Z, {
                  location: 'SimplifiedProfilePanel',
                  user: t,
                  channelId: L.id,
                  profileType: b.y0.PANEL,
                  isReplySource: B === b.N9.STATUS,
                  onReply: F
                }),
                (0, i.jsx)(I.Z, {
                  user: t
                })
              ]
            })
          }),
          (0, i.jsx)(Z.Z, {
            user: t,
            currentUser: n,
            displayProfile: O,
            channel: L,
            isHovering: w,
            onOpenProfile: P ? void 0 : W
          }),
          (0, i.jsx)(A.Z, {
            user: t
          }),
          (0, i.jsx)(M.Z, {
            user: t,
            displayProfile: O
          })
        ]
      }),
      !P && (0, i.jsx)('footer', {
        className: j.footer,
        children: (0, i.jsx)(l.Button, {
          fullWidth: !0,
          size: l.Button.Sizes.LARGE,
          look: l.Button.Looks.BLANK,
          color: j.footerButtonColor,
          onClick: () => {
            W(), (0, p.pQ)({
              action: 'PRESS_VIEW_PROFILE',
              analyticsLocations: D,
              ...k
            });
          },
          children: R.Z.Messages.VIEW_FULL_PROFILE
        })
      }),
      (null == O ? void 0 : O.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == O ? void 0 : O.profileEffectId,
        isHovering: w
      })
    ]
  })
})
  });
}