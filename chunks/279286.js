"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  i = s("446674"),
  r = s("77078"),
  o = s("901582"),
  n = s("252744"),
  u = s("750560"),
  d = s("502651"),
  c = s("812204"),
  f = s("685665"),
  S = s("635471"),
  m = s("373469"),
  E = s("271938"),
  T = s("824563"),
  x = s("697218"),
  N = s("713135"),
  p = s("765698"),
  h = s("217513"),
  v = s("641055"),
  A = s("430312"),
  I = s("453649"),
  _ = s("481923"),
  C = s("759210"),
  U = s("347550"),
  j = s("590456"),
  y = s("49111"),
  g = s("782340"),
  M = s("890963");

function R(e) {
  let {
    user: t,
    isCurrentUser: s,
    section: a,
    setSection: o,
    hasActivity: n
  } = e, u = (0, i.useStateFromStores)([N.default], () => {
    var e, s;
    return (null === (s = N.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
  });
  return (0, l.jsx)("div", {
    className: M.tabBarContainer,
    children: (0, l.jsxs)(r.TabBar, {
      selectedItem: a,
      type: "top",
      onItemSelect: o,
      className: M.tabBar,
      children: [!t.isNonUserBot() || t.isClyde() ? (0, l.jsx)(r.TabBar.Item, {
        className: M.tabBarItem,
        id: j.UserProfileSections.USER_INFO,
        children: g.default.Messages.USER_INFO
      }) : null, !t.bot && n ? (0, l.jsx)(r.TabBar.Item, {
        className: M.tabBarItem,
        id: j.UserProfileSections.ACTIVITY,
        children: g.default.Messages.USER_PROFILE_ACTIVITY
      }) : null, s || t.isClyde() ? null : (0, l.jsx)(r.TabBar.Item, {
        className: M.tabBarItem,
        id: j.UserProfileSections.MUTUAL_GUILDS,
        children: g.default.Messages.MUTUAL_GUILDS
      }), t.bot || s ? null : (0, l.jsx)(r.TabBar.Item, {
        className: M.tabBarItem,
        id: j.UserProfileSections.MUTUAL_FRIENDS,
        children: g.default.Messages.MUTUAL_FRIENDS
      }), t.bot && u ? (0, l.jsx)(r.TabBar.Item, {
        className: M.tabBarItem,
        id: j.UserProfileSections.BOT_DATA_ACCESS,
        children: g.default.Messages.BOTS_DATA_ACCESS_TAB
      }) : null]
    })
  })
}

function P(e) {
  var t, s;
  let {
    user: N,
    guildId: P,
    channelId: O,
    friendToken: F,
    autoFocusNote: B,
    initialSection: D = j.UserProfileSections.USER_INFO,
    transitionState: L,
    onClose: b
  } = e, {
    AnalyticsLocationProvider: G
  } = (0, f.default)(c.default.PROFILE_MODAL), k = null !== (t = (0, i.useStateFromStores)([x.default], () => x.default.getUser(N.id))) && void 0 !== t ? t : N, w = (0, h.default)(null !== (s = null == k ? void 0 : k.id) && void 0 !== s ? s : "");
  (0, u.useSubscribeGuildMembers)({
    [P]: [k.id]
  });
  let V = (0, i.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(k.id)),
    H = (0, i.useStateFromStores)([T.default], () => T.default.findActivity(k.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
    z = (0, I.useGetVoiceChannelInfoForVoiceActivitySection)(k.id, P),
    [Y, K] = a.useState(!1),
    [Z, Q] = a.useState(k.isNonUserBot() && !k.isClyde() ? j.UserProfileSections.MUTUAL_GUILDS : D),
    W = (0, i.useStateFromStores)([E.default], () => E.default.getId() === k.id),
    {
      showVoiceActivityInProfile: q
    } = p.VoiceActivityProfileExperiment.useExperiment({
      location: "user profile modal container"
    }, {
      autoTrackExposure: !1
    }),
    J = null != H || V || null != z && q,
    X = !W || J,
    $ = a.createRef(),
    ee = (0, n.default)($);
  !J && Z === j.UserProfileSections.ACTIVITY && Q(j.UserProfileSections.USER_INFO);
  let et = a.useCallback(e => {
      K(!0), Q(e)
    }, []),
    es = null == w ? void 0 : w.profileEffectId;
  return (0, l.jsx)(G, {
    children: (0, l.jsx)(o.default, {
      section: y.AnalyticsSections.PROFILE_MODAL,
      children: (0, l.jsxs)(r.ModalRoot, {
        transitionState: L,
        className: M.root,
        "aria-label": g.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsx)("div", {
          ref: $,
          children: (0, l.jsxs)(A.default, {
            user: k,
            profileType: j.UserProfileTypes.MODAL,
            children: [(0, l.jsx)("div", {
              className: M.topSection,
              children: (0, l.jsx)(C.default, {
                displayProfile: w,
                user: k,
                friendToken: F,
                onClose: b,
                isStreaming: (0, d.default)(H),
                guildId: P,
                channelId: O,
                hasProfileEffect: null != es
              })
            }), (0, l.jsxs)(A.default.Inner, {
              children: [L === r.ModalTransitionState.ENTERED && (0, l.jsx)(v.default, {
                onTooltipClose: b
              }), (0, l.jsxs)("div", {
                className: M.body,
                children: [(0, l.jsx)(U.default, {
                  user: k,
                  displayProfile: w
                }), X ? (0, l.jsx)(R, {
                  user: k,
                  section: Z === j.UserProfileSections.USER_INFO_CONNECTIONS ? j.UserProfileSections.USER_INFO : Z,
                  setSection: et,
                  hasActivity: J,
                  isCurrentUser: W
                }) : (0, l.jsx)("div", {
                  className: M.divider
                }), (0, l.jsx)(_.default, {
                  displayProfile: w,
                  user: k,
                  autoFocusNote: B && !Y,
                  selectedSection: Z,
                  onClose: b
                })]
              })]
            })]
          })
        }), null != es && (0, l.jsx)(S.default, {
          profileEffectId: es,
          bannerAdjustment: 0,
          isHovering: ee
        })]
      })
    })
  })
}