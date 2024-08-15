l.d(n, {
  Z: function() {
return B;
  }
}), l(47120);
var a = l(735250),
  r = l(470079),
  i = l(120356),
  t = l.n(i),
  s = l(399606),
  d = l(481060),
  o = l(749210),
  c = l(131388),
  u = l(367907),
  h = l(644080),
  m = l(984370),
  g = l(6025),
  C = l(433355),
  x = l(626135),
  f = l(526120),
  I = l(563534),
  Z = l(846121),
  _ = l(460347),
  v = l(404488),
  p = l(605276),
  N = l(869764),
  j = l(919318),
  b = l(150512),
  E = l(981631),
  M = l(176505),
  A = l(689938),
  S = l(523460),
  T = l(625032);
let R = v.q + 300 + 64,
  P = r.memo(function(e) {
let {
  guild: n
} = e;
return (0, a.jsxs)(m.Z, {
  channelId: M.oC.GUILD_HOME,
  guildId: n.id,
  className: t()(S.title, S.background),
  innerClassname: S.headerBarInner,
  children: [
    (0, a.jsx)(m.Z.Icon, {
      icon: d.SignPostIcon,
      'aria-hidden': !0
    }),
    (0, a.jsxs)(m.Z.Title, {
      children: [
        (0, a.jsx)(d.HiddenVisually, {
          children: n.name
        }),
        A.Z.Messages.SERVER_GUIDE
      ]
    })
  ]
});
  });

function B(e) {
  var n, l;
  let {
guild: i,
width: m
  } = e, A = (0, s.e7)([C.ZP], () => C.ZP.getSection(M.oC.GUILD_HOME)), [B, y] = r.useState(!1), [H, k] = r.useState(E.$Y6), L = A === E.ULH.SIDEBAR_CHAT, w = (0, d.useFocusJumpSection)(), D = (0, s.e7)([I.Z], () => I.Z.getSettings(i.id)), O = null == D ? void 0 : D.welcomeMessage, U = (0, _.Z)(i.id), G = !U && (null !== (l = null == D ? void 0 : null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0) === 0, W = (0, c.Z)('(max-width: 1300px)'), z = m - E.PrS - H, F = L && z < R || W || G;
  return (r.useEffect(() => {
if (D === I.P)
  (0, f.cP)(i.id);
else if (null != D) {
  var e, n, l, a, r;
  x.default.track(E.rMx.SERVER_GUIDE_VIEWED, {
    ...(0, u.hH)(i.id),
    num_member_actions: null !== (l = null === (e = D.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== l ? l : 0,
    num_member_actions_completed: Object.keys(null !== (a = Z.Z.getCompletedActions(i.id)) && void 0 !== a ? a : {}).length,
    num_resource_channels: null !== (r = null === (n = D.resourceChannels) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0
  });
}
  }, [
i.id,
D
  ]), r.useEffect(() => () => {
g.Z.closeChannelSidebar(M.oC.GUILD_HOME);
  }, []), r.useEffect(() => {
G && D !== I.P && o.Z.escapeToDefaultChannel(i.id);
  }, [
i.id,
G,
D
  ]), G) ? null : (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    className: t()(T.chat, S.background, {
      [T.threadSidebarOpen]: L,
      [T.threadSidebarFloating]: L && B
    }),
    children: [
      (0, a.jsx)(P, {
        guild: i
      }),
      (0, a.jsx)(d.AdvancedScrollerAuto, {
        ...w,
        children: (0, a.jsxs)('div', {
          className: t()(S.homeContainer, {
            [S.homeContainerCollapsed]: F
          }),
          children: [
            (0, a.jsx)('div', {
              className: S.maxWidthWrapper,
              children: (0, a.jsx)(h.Z, {
                guild: i,
                titleClassName: W ? S.emptyHeaderTitle : void 0
              })
            }),
            (0, a.jsxs)('div', {
              className: t()(S.homeContent, S.maxWidthWrapper),
              children: [
                (0, a.jsxs)('div', {
                  className: S.mainContent,
                  children: [
                    U && (0, a.jsx)(b.Z, {
                      guildId: i.id,
                      welcomeMessage: O
                    }),
                    U && (0, a.jsx)(N.Z, {
                      guildId: i.id
                    }),
                    !U || F ? (0, a.jsx)(j.ZP, {
                      guild: i,
                      isNewMember: U
                    }) : null
                  ]
                }),
                F ? null : (0, a.jsx)(p.Z, {
                  guild: i,
                  isNewMember: U
                })
              ]
            })
          ]
        })
      })
    ]
  }),
  L ? (0, a.jsx)(v.Z, {
    pageWidth: m,
    onSidebarResize: (e, n) => {
      y(n), k(e);
    }
  }) : null
]
  });
}