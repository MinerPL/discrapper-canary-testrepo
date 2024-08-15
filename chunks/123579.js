n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(410030),
  u = n(100527),
  d = n(906732),
  h = n(574176),
  m = n(769654),
  p = n(199902),
  _ = n(314897),
  f = n(592125),
  E = n(496675),
  g = n(158776),
  C = n(246946),
  I = n(979651),
  x = n(5192),
  T = n(51144),
  N = n(785717),
  v = n(221292),
  S = n(318661),
  Z = n(57048),
  A = n(726059),
  M = n(162267),
  b = n(502762),
  R = n(171368),
  j = n(944546),
  L = n(470900),
  P = n(421486),
  O = n(240328),
  y = n(436478),
  D = n(138394),
  k = n(248345),
  U = n(19836),
  w = n(538564),
  B = n(319300),
  H = n(591600),
  G = n(584045),
  V = n(664202),
  F = n(772056),
  W = n(747711),
  z = n(228168),
  Y = n(981631),
  K = n(689938),
  q = n(849570);
t.Z = e => {
  var t;
  let {
user: n,
channel: s
  } = e, [X, Q] = a.useState(!1), J = a.useRef(0), {
analyticsLocations: $
  } = (0, d.ZP)(u.Z.PROFILE_PANEL), ee = (0, N.ZB)({
layout: 'DM_PANEL',
userId: n.id,
channelId: s.id
  }), et = null == n ? void 0 : n.isNonUserBot(), en = (0, S.ZP)(n.id), ei = (0, r.e7)([
I.Z,
f.Z
  ], () => {
var e;
return null != n ? f.Z.getChannel(null === (e = I.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null;
  }), {
enableHangStatus: ea
  } = h.n.useExperiment({
guildId: null == ei ? void 0 : ei.guild_id,
location: 'ActivityStatus'
  }, {
autoTrackExposure: !1
  }), {
activity: es,
customStatusActivity: el,
isApplicationStreaming: er,
isMobile: eo,
status: ec,
hangStatusActivity: eu
  } = (0, r.cj)([
p.Z,
g.Z,
E.Z
  ], () => {
let e = null != p.Z.getAnyStreamForUser(n.id);
return {
  activity: g.Z.findActivity(n.id, t => {
    let {
      type: n
    } = t;
    return e ? n === Y.IIU.PLAYING : n !== Y.IIU.CUSTOM_STATUS && n !== Y.IIU.HANG_STATUS;
  }),
  customStatusActivity: g.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === Y.IIU.CUSTOM_STATUS;
  }),
  isApplicationStreaming: e,
  isMobile: g.Z.isMobileOnline(n.id),
  status: et ? null : g.Z.getStatus(n.id),
  hangStatusActivity: ea && null != ei && E.Z.can(Y.Plq.CONNECT, ei) ? g.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === Y.IIU.HANG_STATUS;
  }) : null
};
  }), ed = null != es || null != eu || er, eh = null !== (t = x.ZP.getNickname(null, s.id, n)) && void 0 !== t ? t : T.ZP.getName(n), em = (0, r.e7)([C.Z], () => C.Z.hidePersonalInformation), {
mutualFriends: ep,
isFetching: e_
  } = (0, A.Z)(n.id, !n.bot), {
mutualGuilds: ef,
isFetching: eE
  } = (0, M.Z)(n.id, !n.bot), eg = !n.bot && null != ep && ep.length > 0, eC = !n.bot && null != ef && ef.length > 0, eI = (0, V.J)({
popoutUser: n,
source: y.m.PROFILE_PANEL
  }), ex = (0, c.ZP)();
  a.useEffect(() => {
J.current = Date.now();
  }, []), a.useEffect(() => {
null != en && (0, Z.U)({
  displayProfile: en,
  isMobile: eo,
  loadDurationMs: Date.now() - J.current,
  activity: es,
  customStatusActivity: el,
  status: ec
});
  }, [
en,
eo,
es,
el,
ec
  ]);
  let eT = null == ef ? void 0 : ef.map(e => {
  let {
    guild: t,
    nick: a
  } = e;
  return (0, i.jsx)(L.D, {
    user: n,
    guild: t,
    nick: a,
    theme: ex,
    onSelect: () => (0, m.X)(t.id)
  }, t.id);
}),
eN = null == ep ? void 0 : ep.map(e => {
  let {
    key: t,
    user: n,
    status: a
  } = e;
  return (0, i.jsx)(j.T, {
    user: n,
    status: a,
    onSelect: () => {
      (0, R.openUserProfileModal)({
        sourceAnalyticsLocations: $,
        analyticsLocation: {
          section: Y.jXE.DM_PROFILE
        },
        ...ee
      });
    }
  }, t);
}),
ev = a.useCallback(() => Q(!0), []),
eS = a.useCallback(() => Q(!1), []),
eZ = (0, r.e7)([_.default], () => _.default.getId()),
eA = n.id === eZ,
eM = n.bot || eA;
  return (0, i.jsx)(d.Gt, {
value: $,
children: (0, i.jsx)(N.Mt, {
  value: ee,
  children: (0, i.jsx)('aside', {
    className: q.profilePanel,
    onMouseEnter: ev,
    onMouseLeave: eS,
    children: (0, i.jsxs)(b.Z, {
      user: n,
      displayProfile: en,
      profileType: z.y0.PANEL,
      themeOverride: ex,
      children: [
        eI.shouldShow && (0, i.jsx)(O.ZP, {
          user: n,
          upsellSource: y.m.PROFILE_PANEL,
          displayProfile: en,
          isInSidebar: !0,
          ...eI
        }, n.id),
        (0, i.jsxs)(o.ScrollerNone, {
          children: [
            (0, i.jsx)(W.Z, {
              user: n,
              displayProfile: en,
              channel: s,
              animateAssets: X,
              forceShowPremiumBadge: X
            }),
            (0, i.jsxs)(b.Z.Overlay, {
              className: q.overlay,
              children: [
                (0, i.jsx)(G.Z, {
                  user: n,
                  nickname: eh,
                  pronouns: null == en ? void 0 : en.pronouns
                }),
                (0, i.jsx)(w.Z, {
                  customStatusActivity: el,
                  animate: X
                }),
                (0, i.jsx)(D.Z, {}),
                (0, i.jsx)(U.Z, {
                  bio: null == en ? void 0 : en.bio,
                  hidePersonalInformation: em,
                  animateOnHover: !0,
                  isHovering: X,
                  userId: n.id
                }),
                !eM && (0, i.jsx)(P.ZP, {
                  className: q.profileMutuals,
                  user: n
                }),
                !n.isSystemUser() && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(B.Z, {
                      userId: n.id
                    }),
                    (0, i.jsx)(D.Z, {})
                  ]
                }),
                !n.isSystemUser() && (0, i.jsx)(H.Z, {
                  user: n,
                  setNote: !1
                })
              ]
            }),
            ed ? (0, i.jsx)(b.Z.Overlay, {
              className: q.overlay,
              children: (0, i.jsx)(k.Z, {
                activity: null != es || er ? es : eu,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: Y.ZY5.USER_PROFILE,
                    section: Y.jXE.DM_PROFILE
                  }
                }
              })
            }) : null,
            (eC || eg) && (0, i.jsxs)(b.Z.Overlay, {
              className: q.profilePanelConnections,
              children: [
                eC ? (0, i.jsx)(F.Z, {
                  className: q.mutualGuildsList,
                  header: K.Z.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: ef.length
                  }),
                  isLoadingHeader: eE,
                  loadingContentsCount: ef.length,
                  itemType: F.R.MutualGuildList,
                  onExpand: () => {
                    (0, v.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_GUILDS',
                      analyticsLocations: $,
                      ...ee
                    });
                  },
                  children: eT
                }) : null,
                eg ? (0, i.jsx)(F.Z, {
                  className: l()(q.mutualFriendsList, {
                    [q.mutualFriendsDivider]: eC
                  }),
                  header: K.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: ep.length
                  }),
                  isLoadingHeader: e_,
                  loadingContentsCount: ep.length,
                  itemType: F.R.MutualFriendsList,
                  onExpand: () => {
                    (0, v.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_FRIENDS',
                      analyticsLocations: $,
                      ...ee
                    });
                  },
                  children: eN
                }) : null
              ]
            })
          ]
        })
      ]
    })
  })
})
  });
};