n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(410030),
  d = n(100527),
  u = n(906732),
  h = n(574176),
  p = n(769654),
  m = n(199902),
  _ = n(314897),
  f = n(592125),
  E = n(496675),
  C = n(158776),
  g = n(246946),
  I = n(979651),
  x = n(5192),
  T = n(51144),
  v = n(785717),
  N = n(221292),
  S = n(310427),
  Z = n(318661),
  A = n(57048),
  M = n(726059),
  b = n(162267),
  R = n(502762),
  j = n(171368),
  L = n(944546),
  P = n(470900),
  O = n(421486),
  y = n(240328),
  D = n(436478),
  k = n(138394),
  U = n(248345),
  w = n(19836),
  B = n(538564),
  H = n(319300),
  G = n(591600),
  V = n(584045),
  F = n(664202),
  W = n(772056),
  z = n(747711),
  Y = n(228168),
  K = n(981631),
  q = n(689938),
  X = n(251884);
t.Z = e => {
  var t;
  let {
user: n,
channel: l
  } = e, [Q, J] = a.useState(!1), $ = a.useRef(0), {
analyticsLocations: ee
  } = (0, u.ZP)(d.Z.PROFILE_PANEL), et = null == n ? void 0 : n.isNonUserBot(), en = (0, Z.ZP)(n.id), ei = (0, r.e7)([
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
activity: el,
customStatusActivity: es,
isApplicationStreaming: er,
isMobile: eo,
status: ec,
hangStatusActivity: ed
  } = (0, r.cj)([
m.Z,
C.Z,
E.Z
  ], () => {
let e = null != m.Z.getAnyStreamForUser(n.id);
return {
  activity: C.Z.findActivity(n.id, t => {
    let {
      type: n
    } = t;
    return e ? n === K.IIU.PLAYING : n !== K.IIU.CUSTOM_STATUS && n !== K.IIU.HANG_STATUS;
  }),
  customStatusActivity: C.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === K.IIU.CUSTOM_STATUS;
  }),
  isApplicationStreaming: e,
  isMobile: C.Z.isMobileOnline(n.id),
  status: et ? null : C.Z.getStatus(n.id),
  hangStatusActivity: ea && null != ei && E.Z.can(K.Plq.CONNECT, ei) ? C.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === K.IIU.HANG_STATUS;
  }) : null
};
  }), eu = null != el || null != ed || er, eh = null !== (t = x.ZP.getNickname(null, l.id, n)) && void 0 !== t ? t : T.ZP.getName(n), ep = (0, r.e7)([g.Z], () => g.Z.hidePersonalInformation), {
mutualFriends: em,
isFetching: e_
  } = (0, M.Z)(n.id, !n.bot), {
mutualGuilds: ef,
isFetching: eE
  } = (0, b.Z)(n.id, !n.bot), eC = !n.bot && null != em && em.length > 0, eg = !n.bot && null != ef && ef.length > 0, eI = (0, F.J)({
popoutUser: n,
source: D.m.PROFILE_PANEL
  }), ex = (0, c.ZP)();
  a.useEffect(() => {
$.current = Date.now();
  }, []), a.useEffect(() => {
null != en && (0, A.U)({
  displayProfile: en,
  isMobile: eo,
  loadDurationMs: Date.now() - $.current,
  activity: el,
  customStatusActivity: es,
  status: ec
});
  }, [
en,
eo,
el,
es,
ec
  ]);
  let eT = null == ef ? void 0 : ef.map(e => {
  let {
    guild: t,
    nick: a
  } = e;
  return (0, i.jsx)(P.D, {
    user: n,
    guild: t,
    nick: a,
    theme: ex,
    onSelect: () => (0, p.X)(t.id)
  }, t.id);
}),
ev = null == em ? void 0 : em.map(e => {
  let {
    key: t,
    user: n,
    status: a
  } = e;
  return (0, i.jsx)(L.T, {
    user: n,
    status: a,
    onSelect: () => {
      (0, j.openUserProfileModal)({
        userId: n.id,
        channelId: l.id,
        sourceAnalyticsLocations: ee,
        analyticsLocation: {
          section: K.jXE.DM_PROFILE
        }
      });
    }
  }, t);
}),
eN = a.useCallback(() => J(!0), []),
eS = a.useCallback(() => J(!1), []),
eZ = (0, r.e7)([_.default], () => _.default.getId()),
eA = n.id === eZ,
eM = n.bot || eA,
{
  enabled: eb
} = (0, S.qI)({
  autoTrackExposure: !0,
  location: d.Z.PROFILE,
  disable: eM
});
  return (0, i.jsx)(u.Gt, {
value: ee,
children: (0, i.jsx)(v.Mt, {
  layout: 'DM_PANEL',
  userId: n.id,
  channelId: l.id,
  children: (0, i.jsx)('aside', {
    className: X.profilePanel,
    onMouseEnter: eN,
    onMouseLeave: eS,
    children: (0, i.jsxs)(R.Z, {
      user: n,
      displayProfile: en,
      profileType: Y.y0.PANEL,
      themeOverride: ex,
      children: [
        eI.shouldShow && (0, i.jsx)(y.ZP, {
          user: n,
          upsellSource: D.m.PROFILE_PANEL,
          displayProfile: en,
          isInSidebar: !0,
          ...eI
        }, n.id),
        (0, i.jsxs)(o.ScrollerNone, {
          children: [
            (0, i.jsx)(z.Z, {
              user: n,
              displayProfile: en,
              channel: l,
              animateAssets: Q,
              forceShowPremiumBadge: Q
            }),
            (0, i.jsxs)(R.Z.Overlay, {
              className: X.overlay,
              children: [
                (0, i.jsx)(V.Z, {
                  user: n,
                  nickname: eh,
                  pronouns: null == en ? void 0 : en.pronouns
                }),
                (0, i.jsx)(B.Z, {
                  customStatusActivity: es,
                  animate: Q
                }),
                (0, i.jsx)(k.Z, {}),
                (0, i.jsx)(w.Z, {
                  bio: null == en ? void 0 : en.bio,
                  hidePersonalInformation: ep,
                  animateOnHover: !0,
                  isHovering: Q,
                  userId: n.id
                }),
                eb && (0, i.jsx)(O.ZP, {
                  className: X.profileMutuals,
                  user: n
                }),
                !n.isSystemUser() && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(H.Z, {
                      userId: n.id
                    }),
                    (0, i.jsx)(k.Z, {})
                  ]
                }),
                !n.isSystemUser() && (0, i.jsx)(G.Z, {
                  user: n,
                  setNote: !1
                })
              ]
            }),
            eu ? (0, i.jsx)(R.Z.Overlay, {
              className: X.overlay,
              children: (0, i.jsx)(U.Z, {
                activity: null != el || er ? el : ed,
                user: n,
                channelId: l.id,
                analyticsParams: {
                  location: {
                    page: K.ZY5.USER_PROFILE,
                    section: K.jXE.DM_PROFILE
                  }
                }
              })
            }) : null,
            (eg || eC) && (0, i.jsxs)(R.Z.Overlay, {
              className: X.profilePanelConnections,
              children: [
                eg ? (0, i.jsx)(W.Z, {
                  className: X.mutualGuildsList,
                  header: q.Z.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: ef.length
                  }),
                  isLoadingHeader: eE,
                  loadingContentsCount: ef.length,
                  itemType: W.R.MutualGuildList,
                  onExpand: () => {
                    (0, N.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_GUILDS',
                      layout: 'DM_PANEL',
                      userId: n.id,
                      channelId: l.id,
                      analyticsLocations: ee
                    });
                  },
                  children: eT
                }) : null,
                eC ? (0, i.jsx)(W.Z, {
                  className: s()(X.mutualFriendsList, {
                    [X.mutualFriendsDivider]: eg
                  }),
                  header: q.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: em.length
                  }),
                  isLoadingHeader: e_,
                  loadingContentsCount: em.length,
                  itemType: W.R.MutualFriendsList,
                  onExpand: () => {
                    (0, N.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_FRIENDS',
                      layout: 'DM_PANEL',
                      userId: n.id,
                      channelId: l.id,
                      analyticsLocations: ee
                    });
                  },
                  children: ev
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