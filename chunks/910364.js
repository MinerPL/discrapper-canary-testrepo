"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("410575"),
  n = s("727637"),
  u = s("58540"),
  c = s("420660"),
  d = s("100527"),
  f = s("680295"),
  S = s("199902"),
  m = s("314897"),
  E = s("158776"),
  T = s("594174"),
  N = s("342656"),
  p = s("785717"),
  _ = s("621853"),
  I = s("895618"),
  A = s("318661"),
  v = s("706327"),
  x = s("484404"),
  U = s("747074"),
  h = s("58307"),
  C = s("62154"),
  y = s("293259"),
  j = s("725954"),
  R = s("228168"),
  M = s("981631"),
  P = s("689938"),
  g = s("775149");

function O(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: r,
    setSection: n,
    hasActivity: u
  } = e, c = (0, i.useStateFromStores)([_.default], () => {
    var e, s;
    return (null === (s = _.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  }), [f, S] = (0, v.useMutualFriends)(t), m = (0, i.useStateFromStores)([_.default], () => _.default.getMutualGuilds(t.id)), E = t.bot || s, {
    enabled: T
  } = (0, N.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: d.default.PROFILE_MODAL,
    disable: E
  }), p = l.useMemo(() => {
    if (T) {
      var e;
      return P.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return P.default.Messages.MUTUAL_FRIENDS
  }, [T, S]), I = l.useMemo(() => {
    if (T) {
      var e;
      return P.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == m ? void 0 : m.length) && void 0 !== e ? e : 0)
      })
    }
    return P.default.Messages.MUTUAL_GUILDS
  }, [T, m]);
  return (0, a.jsx)("div", {
    className: g.tabBarContainer,
    children: (0, a.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: n,
      className: g.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(o.TabBar.Item, {
        className: g.tabBarItem,
        id: R.UserProfileSections.USER_INFO,
        children: P.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(o.TabBar.Item, {
        className: g.tabBarItem,
        id: R.UserProfileSections.ACTIVITY,
        children: P.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, a.jsx)(o.TabBar.Item, {
        className: g.tabBarItem,
        id: R.UserProfileSections.MUTUAL_FRIENDS,
        children: p
      }), s || t.isClyde() ? null : (0, a.jsx)(o.TabBar.Item, {
        className: g.tabBarItem,
        id: R.UserProfileSections.MUTUAL_GUILDS,
        children: I
      }), t.bot && c ? (0, a.jsx)(o.TabBar.Item, {
        className: g.tabBarItem,
        id: R.UserProfileSections.BOT_DATA_ACCESS,
        children: P.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function F(e) {
  var t, s;
  let {
    user: N,
    guildId: _,
    channelId: v,
    messageId: F,
    roleId: D,
    friendToken: B,
    autoFocusNote: L,
    initialSection: b = R.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: w
  } = e, H = null !== (t = (0, i.useStateFromStores)([T.default], () => T.default.getUser(N.id))) && void 0 !== t ? t : N, V = (0, A.default)(null !== (s = null == H ? void 0 : H.id) && void 0 !== s ? s : "");
  (0, u.useSubscribeGuildMembers)({
    [_]: [H.id]
  });
  let Y = (0, i.useStateFromStores)([S.default], () => null != S.default.getAnyStreamForUser(H.id)),
    z = (0, i.useStateFromStores)([E.default], () => E.default.findActivity(H.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    J = (0, h.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, _),
    [K, Q] = l.useState(!1),
    [W, Z] = l.useState(H.isNonUserBot() && !H.isClyde() ? R.UserProfileSections.MUTUAL_GUILDS : b),
    q = (0, i.useStateFromStores)([m.default], () => m.default.getId() === H.id),
    {
      showVoiceActivityInProfile: X
    } = I.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    {
      UserProfileAnalyticsProvider: $,
      trackUserProfileAction: ee
    } = (0, p.useUserProfileAnalyticsProvider)({
      layout: "MODAL",
      newAnalyticsLocations: [...k, d.default.PROFILE_MODAL],
      userId: H.id,
      guildId: _,
      channelId: v,
      messageId: F,
      roleId: D
    }),
    et = null != z || Y || null != J && X,
    es = !q || et,
    ea = l.createRef(),
    el = (0, n.default)(ea);
  !et && W === R.UserProfileSections.ACTIVITY && Z(R.UserProfileSections.USER_INFO);
  let ei = l.useCallback(e => {
      ee({
        action: "PRESS_SECTION",
        section: e
      }), Q(!0), Z(e)
    }, [ee]),
    eo = null == V ? void 0 : V.profileEffectId;
  return (0, a.jsx)($, {
    children: (0, a.jsx)(r.default, {
      section: M.AnalyticsSections.PROFILE_MODAL,
      children: (0, a.jsxs)(o.ModalRoot, {
        transitionState: G,
        className: g.root,
        "aria-label": P.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsx)("div", {
          ref: ea,
          children: (0, a.jsxs)(U.default, {
            user: H,
            profileType: R.UserProfileTypes.MODAL,
            children: [(0, a.jsx)("div", {
              className: g.topSection,
              children: (0, a.jsx)(y.default, {
                displayProfile: V,
                user: H,
                friendToken: B,
                onClose: w,
                isStreaming: (0, c.default)(z),
                guildId: _,
                channelId: v,
                hasProfileEffect: null != eo
              })
            }), (0, a.jsxs)(U.default.Inner, {
              children: [G === o.ModalTransitionState.ENTERED && (0, a.jsx)(x.default, {
                onTooltipClose: w
              }), (0, a.jsxs)("div", {
                className: g.body,
                children: [(0, a.jsx)(j.default, {
                  user: H,
                  displayProfile: V
                }), es ? (0, a.jsx)(O, {
                  user: H,
                  section: W === R.UserProfileSections.USER_INFO_CONNECTIONS ? R.UserProfileSections.USER_INFO : W,
                  setSection: ei,
                  hasActivity: et,
                  isCurrentUser: q
                }) : (0, a.jsx)("div", {
                  className: g.divider
                }), (0, a.jsx)(C.default, {
                  displayProfile: V,
                  user: H,
                  autoFocusNote: L && !K,
                  selectedSection: W,
                  onClose: w
                })]
              })]
            })]
          })
        }), null != eo && (0, a.jsx)(f.default, {
          profileEffectId: eo,
          bannerAdjustment: 0,
          isHovering: el
        })]
      })
    })
  })
}