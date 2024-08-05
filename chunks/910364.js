i.d(s, {
  Z: function() {
return O;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(410575),
  r = i(727637),
  d = i(58540),
  c = i(420660),
  u = i(100527),
  I = i(906732),
  _ = i(580552),
  f = i(680295),
  m = i(199902),
  E = i(314897),
  v = i(158776),
  S = i(594174),
  x = i(785717),
  Z = i(621853),
  h = i(318661),
  p = i(726059),
  T = i(162267),
  g = i(502762),
  N = i(62154),
  j = i(293259),
  C = i(725954),
  A = i(228168),
  R = i(981631),
  M = i(689938),
  U = i(376234);

function L(e) {
  var s, i;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([Z.Z], () => {
var e, s;
return (null === (s = Z.Z.getUserProfile(l.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null;
  }), I = null === (s = (0, p.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === s ? void 0 : s.length, f = null === (i = (0, T.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
  return (0, n.jsx)('div', {
className: U.tabBarContainer,
children: (0, n.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: U.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, _.Z)(l.id) ? (0, n.jsx)(o.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.USER_INFO,
      children: M.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, n.jsx)(o.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.ACTIVITY,
      children: M.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, n.jsx)(o.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.MUTUAL_FRIENDS,
      children: null == I ? M.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : M.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(I)
      })
    }),
    a || l.isClyde() || (0, _.Z)(l.id) ? null : (0, n.jsx)(o.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.MUTUAL_GUILDS,
      children: null == f ? M.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : M.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, n.jsx)(o.TabBar.Item, {
      className: U.tabBarItem,
      id: A.oh.BOT_DATA_ACCESS,
      children: M.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function O(e) {
  var s, i;
  let {
user: Z,
guildId: p,
channelId: T,
messageId: O,
roleId: P,
friendToken: b,
initialSection: y = A.oh.USER_INFO,
initialSubsection: D,
transitionState: F,
sourceAnalyticsLocations: B = [],
onClose: G
  } = e, w = null !== (s = (0, t.e7)([S.default], () => S.default.getUser(Z.id))) && void 0 !== s ? s : Z, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {
analyticsLocations: Y
  } = (0, I.ZP)([
...B,
u.Z.PROFILE_MODAL
  ]), V = (0, x.Q1)({
layout: 'MODAL',
userId: w.id,
showGuildProfile: !1,
guildId: p,
channelId: T,
messageId: O,
roleId: P
  });
  (0, d.$)({
[p]: [w.id]
  });
  let H = (0, t.e7)([m.Z], () => null != m.Z.getAnyStreamForUser(w.id)),
W = (0, t.e7)([v.Z], () => v.Z.findActivity(w.id, e => e.type !== R.IIU.CUSTOM_STATUS)),
[z, K] = l.useState(!1),
[q, J] = l.useState(!w.isNonUserBot() || w.isClyde() || (0, _.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS),
Q = (0, t.e7)([E.default], () => E.default.getId() === w.id),
X = null != W || H,
$ = !Q || X,
ee = l.createRef(),
es = (0, r.Z)(ee);
  !X && q === A.oh.ACTIVITY && J(A.oh.USER_INFO);
  let ei = l.useCallback(e => {
  V({
    action: 'PRESS_SECTION',
    analyticsLocations: Y
  }), K(!0), J(e);
}, [
  V,
  Y
]),
en = null == k ? void 0 : k.profileEffectId;
  return (0, n.jsx)(I.Gt, {
value: Y,
children: (0, n.jsx)(x.Mt, {
  layout: 'MODAL',
  userId: w.id,
  guildId: p,
  channelId: T,
  messageId: O,
  roleId: P,
  showGuildProfile: !1,
  children: (0, n.jsx)(a.Z, {
    section: R.jXE.PROFILE_MODAL,
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: F,
      className: U.root,
      hideShadow: !0,
      'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, n.jsxs)(g.Z, {
          user: w,
          displayProfile: k,
          profileType: A.y0.MODAL,
          ref: ee,
          children: [
            (0, n.jsx)(j.Z, {
              className: U.topSection,
              displayProfile: k,
              user: w,
              friendToken: b,
              onClose: G,
              isStreaming: (0, c.Z)(W),
              guildId: p,
              channelId: T,
              hasProfileEffect: null != en
            }),
            (0, n.jsx)(g.Z.Overlay, {
              className: U.overlay,
              children: (0, n.jsxs)('div', {
                className: U.body,
                children: [
                  (0, n.jsx)(C.Z, {
                    user: w,
                    displayProfile: k
                  }),
                  $ ? (0, n.jsx)(L, {
                    user: w,
                    section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                    setSection: ei,
                    hasActivity: X,
                    isCurrentUser: Q
                  }) : (0, n.jsx)('div', {
                    className: U.divider
                  }),
                  (0, n.jsx)(N.Z, {
                    displayProfile: k,
                    user: w,
                    autoFocusNote: D === A.Tb.NOTE && !z,
                    selectedSection: q,
                    onClose: G
                  })
                ]
              })
            })
          ]
        }),
        null != en && (0, n.jsx)(f.Z, {
          profileEffectId: en,
          bannerAdjustment: 0,
          isHovering: es
        })
      ]
    })
  })
})
  });
}