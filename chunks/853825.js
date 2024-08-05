i.d(s, {
  Z: function() {
return R;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(481060),
  o = i(727637),
  a = i(100527),
  r = i(906732),
  d = i(680295),
  c = i(5192),
  u = i(785717),
  I = i(318661),
  _ = i(78675),
  f = i(741308),
  m = i(588822),
  E = i(899007),
  v = i(900927),
  S = i(678738),
  x = i(502762),
  Z = i(530),
  h = i(679332),
  p = i(544989),
  T = i(228168),
  g = i(981631),
  N = i(689938),
  j = i(505451),
  C = i(247321),
  A = i(47460);

function R(e) {
  let {
user: s,
guildId: i,
channelId: R,
messageId: M,
roleId: U,
transitionState: L,
onClose: O,
sourceAnalyticsLocations: P = []
  } = e, {
analyticsLocations: b
  } = (0, r.ZP)([
...P,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), y = i === g.ME ? void 0 : i, D = (0, I.ZP)(s.id, y), F = l.createRef(), B = (0, o.Z)(F);
  return (0, n.jsx)(r.Gt, {
value: b,
children: (0, n.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: y,
  channelId: R,
  messageId: M,
  roleId: U,
  showGuildProfile: !0,
  children: (0, n.jsxs)(t.ModalRoot, {
    transitionState: L,
    className: j.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(x.Z, {
        user: s,
        displayProfile: D,
        profileType: T.y0.FULL_SIZE,
        ref: F,
        children: [
          (0, n.jsx)(p.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, n.jsx)(h.Z, {
              user: s
            })
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(_.Z, {
                user: s,
                displayProfile: D,
                profileType: T.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, n.jsx)('div', {
                className: j.headerInner,
                children: (0, n.jsx)(E.Z, {
                  user: s,
                  displayProfile: D,
                  guildId: y,
                  channelId: R,
                  profileType: T.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: j.body,
            children: [
              (0, n.jsx)(Z.Z, {
                user: s,
                profileType: T.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, R, s),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, n.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  onClose: O
                })
              }),
              (0, n.jsx)(x.Z.Overlay, {
                className: j.overlay,
                children: (0, n.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, n.jsx)(t.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: T.oh.BOT_INFO,
                      onItemSelect: g.dG4,
                      children: (0, n.jsx)(t.TabBar.Item, {
                        className: A.tabBarItem,
                        id: T.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, n.jsx)(t.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, T.oh.BOT_INFO)
                    }),
                    (0, n.jsxs)(t.ScrollerThin, {
                      fade: !0,
                      className: C.scroller,
                      children: [
                        (0, n.jsx)(m.Z, {
                          userId: s.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, n.jsx)(S.Z, {
                          heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, n.jsx)(v.Z, {
                            userId: s.id,
                            guildId: y,
                            tooltipDelay: T.vB
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      (null == D ? void 0 : D.profileEffectId) != null && (0, n.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: B
      })
    ]
  })
})
  });
}