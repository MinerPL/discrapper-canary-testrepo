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
  p = n(769654),
  m = n(199902),
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
channel: s
  } = e, [Q, J] = a.useState(!1), $ = a.useRef(0), {
analyticsLocations: ee
  } = (0, d.ZP)(u.Z.PROFILE_PANEL), et = null == n ? void 0 : n.isNonUserBot(), en = (0, Z.ZP)(n.id), ei = (0, r.e7)([
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
m.Z,
g.Z,
E.Z
  ], () => {
let e = null != m.Z.getAnyStreamForUser(n.id);
return {
  activity: g.Z.findActivity(n.id, t => {
    let {
      type: n
    } = t;
    return e ? n === K.IIU.PLAYING : n !== K.IIU.CUSTOM_STATUS && n !== K.IIU.HANG_STATUS;
  }),
  customStatusActivity: g.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === K.IIU.CUSTOM_STATUS;
  }),
  isApplicationStreaming: e,
  isMobile: g.Z.isMobileOnline(n.id),
  status: et ? null : g.Z.getStatus(n.id),
  hangStatusActivity: ea && null != ei && E.Z.can(K.Plq.CONNECT, ei) ? g.Z.findActivity(n.id, e => {
    let {
      type: t
    } = e;
    return t === K.IIU.HANG_STATUS;
  }) : null
};
  }), ed = null != es || null != eu || er, eh = null !== (t = x.ZP.getNickname(null, s.id, n)) && void 0 !== t ? t : T.ZP.getName(n), ep = (0, r.e7)([C.Z], () => C.Z.hidePersonalInformation), {
mutualFriends: em,
isFetching: e_
  } = (0, M.Z)(n.id, !n.bot), {
mutualGuilds: ef,
isFetching: eE
  } = (0, b.Z)(n.id, !n.bot), eg = !n.bot && null != em && em.length > 0, eC = !n.bot && null != ef && ef.length > 0, eI = (0, F.J)({
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
  return (0, i.jsx)(P.D, {
    user: n,
    guild: t,
    nick: a,
    theme: ex,
    onSelect: () => (0, p.X)(t.id)
  }, t.id);
}),
eN = null == em ? void 0 : em.map(e => {
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
        channelId: s.id,
        sourceAnalyticsLocations: ee,
        analyticsLocation: {
          section: K.jXE.DM_PROFILE
        }
      });
    }
  }, t);
}),
ev = a.useCallback(() => J(!0), []),
eS = a.useCallback(() => J(!1), []),
eZ = (0, r.e7)([_.default], () => _.default.getId()),
eA = n.id === eZ,
eM = n.bot || eA,
{
  enabled: eb
} = (0, S.qI)({
  autoTrackExposure: !0,
  location: u.Z.PROFILE,
  disable: eM
});
  return (0, i.jsx)(d.Gt, {
value: ee,
children: (0, i.jsx)(N.Mt, {
  layout: 'DM_PANEL',
  userId: n.id,
  channelId: s.id,
  children: (0, i.jsx)('aside', {
    className: X.profilePanel,
    onMouseEnter: ev,
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
              channel: s,
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
                  customStatusActivity: el,
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
            ed ? (0, i.jsx)(R.Z.Overlay, {
              className: X.overlay,
              children: (0, i.jsx)(U.Z, {
                activity: null != es || er ? es : eu,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: K.ZY5.USER_PROFILE,
                    section: K.jXE.DM_PROFILE
                  }
                }
              })
            }) : null,
            (eC || eg) && (0, i.jsxs)(R.Z.Overlay, {
              className: X.profilePanelConnections,
              children: [
                eC ? (0, i.jsx)(W.Z, {
                  className: X.mutualGuildsList,
                  header: q.Z.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: ef.length
                  }),
                  isLoadingHeader: eE,
                  loadingContentsCount: ef.length,
                  itemType: W.R.MutualGuildList,
                  onExpand: () => {
                    (0, v.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_GUILDS',
                      layout: 'DM_PANEL',
                      userId: n.id,
                      channelId: s.id,
                      analyticsLocations: ee
                    });
                  },
                  children: eT
                }) : null,
                eg ? (0, i.jsx)(W.Z, {
                  className: l()(X.mutualFriendsList, {
                    [X.mutualFriendsDivider]: eC
                  }),
                  header: q.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: em.length
                  }),
                  isLoadingHeader: e_,
                  loadingContentsCount: em.length,
                  itemType: W.R.MutualFriendsList,
                  onExpand: () => {
                    (0, v.pQ)({
                      action: 'PRESS_SECTION',
                      section: 'MUTUAL_FRIENDS',
                      layout: 'DM_PANEL',
                      userId: n.id,
                      channelId: s.id,
                      analyticsLocations: ee
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