n.d(s, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(410575),
  r = n(727637),
  d = n(58540),
  c = n(420660),
  u = n(100527),
  _ = n(906732),
  I = n(580552),
  f = n(680295),
  E = n(199902),
  m = n(314897),
  x = n(158776),
  S = n(594174),
  v = n(785717),
  Z = n(221292),
  h = n(621853),
  p = n(318661),
  T = n(726059),
  g = n(162267),
  N = n(502762),
  j = n(62154),
  C = n(293259),
  A = n(725954),
  R = n(228168),
  O = n(981631),
  L = n(689938),
  M = n(376234);

function U(e) {
  var s, n;
  let {
user: l,
isCurrentUser: a,
section: r,
setSection: d,
hasActivity: c
  } = e, u = (0, t.e7)([h.Z], () => {
var e, s;
return (null === (s = h.Z.getUserProfile(l.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null;
  }), _ = null === (s = (0, T.Z)(l.id, !l.bot && !a).mutualFriends) || void 0 === s ? void 0 : s.length, f = null === (n = (0, g.Z)(l.id, !l.bot && !a).mutualGuilds) || void 0 === n ? void 0 : n.length;
  return (0, i.jsx)('div', {
className: M.tabBarContainer,
children: (0, i.jsxs)(o.TabBar, {
  selectedItem: r,
  type: 'top',
  onItemSelect: d,
  className: M.tabBar,
  children: [
    !l.isNonUserBot() || l.isClyde() || (0, I.Z)(l.id) ? (0, i.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.USER_INFO,
      children: L.Z.Messages.USER_INFO
    }) : null,
    !l.bot && c ? (0, i.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.ACTIVITY,
      children: L.Z.Messages.USER_PROFILE_ACTIVITY
    }) : null,
    l.bot || a ? null : (0, i.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.MUTUAL_FRIENDS,
      children: null == _ ? L.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : L.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: ''.concat(_)
      })
    }),
    a || l.isClyde() || (0, I.Z)(l.id) ? null : (0, i.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.MUTUAL_GUILDS,
      children: null == f ? L.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : L.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: ''.concat(f)
      })
    }),
    l.bot && u ? (0, i.jsx)(o.TabBar.Item, {
      className: M.tabBarItem,
      id: R.oh.BOT_DATA_ACCESS,
      children: L.Z.Messages.BOTS_DATA_ACCESS_TAB
    }) : null
  ]
})
  });
}

function b(e) {
  var s, n;
  let {
user: h,
guildId: T,
channelId: g,
messageId: b,
roleId: P,
sessionId: y,
friendToken: D,
initialSection: F = R.oh.USER_INFO,
initialSubsection: B,
transitionState: G,
sourceAnalyticsLocations: w = [],
onClose: k
  } = e, V = null !== (s = (0, t.e7)([S.default], () => S.default.getUser(h.id))) && void 0 !== s ? s : h, Y = (0, p.ZP)(null !== (n = V.id) && void 0 !== n ? n : ''), {
analyticsLocations: W
  } = (0, _.ZP)([
...w,
u.Z.PROFILE_MODAL
  ]), H = (0, v.ZB)({
layout: 'MODAL',
userId: V.id,
sourceSessionId: y,
showGuildProfile: !1,
guildId: T,
channelId: g,
messageId: b,
roleId: P
  });
  (0, d.$)({
[T]: [V.id]
  });
  let z = (0, t.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(V.id)),
K = (0, t.e7)([x.Z], () => x.Z.findActivity(V.id, e => e.type !== O.IIU.CUSTOM_STATUS)),
[q, Q] = l.useState(!1),
[J, X] = l.useState(!V.isNonUserBot() || V.isClyde() || (0, I.Z)(V.id) ? F : R.oh.MUTUAL_GUILDS),
$ = (0, t.e7)([m.default], () => m.default.getId() === V.id),
ee = null != K || z,
es = !$ || ee,
en = l.createRef(),
ei = (0, r.Z)(en);
  !ee && J === R.oh.ACTIVITY && X(R.oh.USER_INFO);
  let el = l.useCallback(e => {
  (0, Z.pQ)({
    action: 'PRESS_SECTION',
    analyticsLocations: W,
    ...H
  }), Q(!0), X(e);
}, [
  H,
  W
]),
et = null == Y ? void 0 : Y.profileEffectId;
  return (0, i.jsx)(_.Gt, {
value: W,
children: (0, i.jsx)(v.Mt, {
  value: H,
  children: (0, i.jsx)(a.Z, {
    section: O.jXE.PROFILE_MODAL,
    children: (0, i.jsxs)(o.ModalRoot, {
      transitionState: G,
      className: M.root,
      hideShadow: !0,
      'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
      children: [
        (0, i.jsxs)(N.Z, {
          user: V,
          displayProfile: Y,
          profileType: R.y0.MODAL,
          ref: en,
          children: [
            (0, i.jsx)(C.Z, {
              className: M.topSection,
              displayProfile: Y,
              user: V,
              friendToken: D,
              onClose: k,
              isStreaming: (0, c.Z)(K),
              guildId: T,
              channelId: g,
              hasProfileEffect: null != et
            }),
            (0, i.jsx)(N.Z.Overlay, {
              className: M.overlay,
              children: (0, i.jsxs)('div', {
                className: M.body,
                children: [
                  (0, i.jsx)(A.Z, {
                    user: V,
                    displayProfile: Y
                  }),
                  es ? (0, i.jsx)(U, {
                    user: V,
                    section: J === R.oh.USER_INFO_CONNECTIONS ? R.oh.USER_INFO : J,
                    setSection: el,
                    hasActivity: ee,
                    isCurrentUser: $
                  }) : (0, i.jsx)('div', {
                    className: M.divider
                  }),
                  (0, i.jsx)(j.Z, {
                    displayProfile: Y,
                    user: V,
                    autoFocusNote: B === R.Tb.NOTE && !q,
                    selectedSection: J,
                    onClose: k
                  })
                ]
              })
            })
          ]
        }),
        null != et && (0, i.jsx)(f.Z, {
          profileEffectId: et,
          bannerAdjustment: 0,
          isHovering: ei
        })
      ]
    })
  })
})
  });
}