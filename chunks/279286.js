"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  o = s("77078"),
  r = s("901582"),
  n = s("252744"),
  u = s("750560"),
  c = s("502651"),
  d = s("812204"),
  f = s("635471"),
  S = s("373469"),
  m = s("271938"),
  E = s("824563"),
  T = s("697218"),
  p = s("337487"),
  N = s("756507"),
  _ = s("713135"),
  A = s("765698"),
  I = s("217513"),
  v = s("228424"),
  x = s("641055"),
  U = s("430312"),
  h = s("453649"),
  C = s("481923"),
  y = s("759210"),
  j = s("347550"),
  R = s("590456"),
  M = s("49111"),
  P = s("782340"),
  O = s("593240");

function g(e) {
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
  } = (0, p.useProfileMutualsExperiment)({
    autoTrackExposure: !0,
    location: d.default.PROFILE_MODAL,
    disable: E
  }), N = l.useMemo(() => {
    if (T) {
      var e;
      return P.default.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == S ? void 0 : S.length) && void 0 !== e ? e : 0)
      })
    }
    return P.default.Messages.MUTUAL_FRIENDS
  }, [T, S]), A = l.useMemo(() => {
    if (T) {
      var e;
      return P.default.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({
        count: "".concat(null !== (e = null == m ? void 0 : m.length) && void 0 !== e ? e : 0)
      })
    }
    return P.default.Messages.MUTUAL_GUILDS
  }, [T, m]);
  return (0, a.jsx)("div", {
    className: O.tabBarContainer,
    children: (0, a.jsxs)(o.TabBar, {
      selectedItem: r,
      type: "top",
      onItemSelect: n,
      className: O.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(o.TabBar.Item, {
        className: O.tabBarItem,
        id: R.UserProfileSections.USER_INFO,
        children: P.default.Messages.USER_INFO
      }) : null, !t.bot && u ? (0, a.jsx)(o.TabBar.Item, {
        className: O.tabBarItem,
        id: R.UserProfileSections.ACTIVITY,
        children: P.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, t.bot || s ? null : (0, a.jsx)(o.TabBar.Item, {
        className: O.tabBarItem,
        id: R.UserProfileSections.MUTUAL_FRIENDS,
        children: N
      }), s || t.isClyde() ? null : (0, a.jsx)(o.TabBar.Item, {
        className: O.tabBarItem,
        id: R.UserProfileSections.MUTUAL_GUILDS,
        children: A
      }), t.bot && c ? (0, a.jsx)(o.TabBar.Item, {
        className: O.tabBarItem,
        id: R.UserProfileSections.BOT_DATA_ACCESS,
        children: P.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function F(e) {
  var t, s;
  let {
    user: p,
    guildId: _,
    channelId: v,
    messageId: F,
    roleId: D,
    friendToken: B,
    autoFocusNote: L,
    initialSection: b = R.UserProfileSections.USER_INFO,
    transitionState: G,
    sourceAnalyticsLocations: k = [],
    onClose: V
  } = e, w = null !== (t = (0, i.useStateFromStores)([T.default], () => T.default.getUser(p.id))) && void 0 !== t ? t : p, H = (0, I.default)(null !== (s = null == w ? void 0 : w.id) && void 0 !== s ? s : "");
  (0, u.useSubscribeGuildMembers)({
    [_]: [w.id]
  });
  let Y = (0, i.useStateFromStores)([S.default], () => null != S.default.getAnyStreamForUser(w.id)),
    z = (0, i.useStateFromStores)([E.default], () => E.default.findActivity(w.id, e => e.type !== M.ActivityTypes.CUSTOM_STATUS)),
    J = (0, h.useGetVoiceChannelInfoForVoiceActivitySection)(w.id, _),
    [K, Q] = l.useState(!1),
    [W, Z] = l.useState(w.isNonUserBot() && !w.isClyde() ? R.UserProfileSections.MUTUAL_GUILDS : b),
    q = (0, i.useStateFromStores)([m.default], () => m.default.getId() === w.id),
    {
      showVoiceActivityInProfile: X
    } = A.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    {
      UserProfileAnalyticsProvider: $,
      trackUserProfileAction: ee
    } = (0, N.useUserProfileAnalyticsProvider)({
      layout: "MODAL",
      newAnalyticsLocations: [...k, d.default.PROFILE_MODAL],
      userId: w.id,
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
    eo = null == H ? void 0 : H.profileEffectId;
  return (0, a.jsx)($, {
    children: (0, a.jsx)(r.default, {
      section: M.AnalyticsSections.PROFILE_MODAL,
      children: (0, a.jsxs)(o.ModalRoot, {
        transitionState: G,
        className: O.root,
        "aria-label": P.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsx)("div", {
          ref: ea,
          children: (0, a.jsxs)(U.default, {
            user: w,
            profileType: R.UserProfileTypes.MODAL,
            children: [(0, a.jsx)("div", {
              className: O.topSection,
              children: (0, a.jsx)(y.default, {
                displayProfile: H,
                user: w,
                friendToken: B,
                onClose: V,
                isStreaming: (0, c.default)(z),
                guildId: _,
                channelId: v,
                hasProfileEffect: null != eo
              })
            }), (0, a.jsxs)(U.default.Inner, {
              children: [G === o.ModalTransitionState.ENTERED && (0, a.jsx)(x.default, {
                onTooltipClose: V
              }), (0, a.jsxs)("div", {
                className: O.body,
                children: [(0, a.jsx)(j.default, {
                  user: w,
                  displayProfile: H
                }), es ? (0, a.jsx)(g, {
                  user: w,
                  section: W === R.UserProfileSections.USER_INFO_CONNECTIONS ? R.UserProfileSections.USER_INFO : W,
                  setSection: ei,
                  hasActivity: et,
                  isCurrentUser: q
                }) : (0, a.jsx)("div", {
                  className: O.divider
                }), (0, a.jsx)(C.default, {
                  displayProfile: H,
                  user: w,
                  autoFocusNote: L && !K,
                  selectedSection: W,
                  onClose: V
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