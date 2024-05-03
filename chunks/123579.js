"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("232567"),
  f = n("410030"),
  h = n("100527"),
  m = n("906732"),
  p = n("574176"),
  E = n("556084"),
  C = n("422677"),
  g = n("911367"),
  S = n("761174"),
  _ = n("199902"),
  T = n("314897"),
  I = n("592125"),
  A = n("496675"),
  N = n("158776"),
  v = n("246946"),
  x = n("594174"),
  M = n("979651"),
  R = n("5192"),
  L = n("51144"),
  y = n("342656"),
  O = n("785717"),
  j = n("221292"),
  P = n("621853"),
  D = n("484459"),
  b = n("318661"),
  U = n("57048"),
  F = n("87728"),
  w = n("502762"),
  k = n("421486"),
  H = n("347949"),
  B = n("240328"),
  G = n("436478"),
  V = n("138394"),
  W = n("248345"),
  Y = n("19836"),
  z = n("538564"),
  K = n("319300"),
  Z = n("591600"),
  q = n("584045"),
  X = n("664202"),
  Q = n("520858"),
  J = n("772056"),
  $ = n("281172"),
  ee = n("50333"),
  et = n("747711"),
  en = n("228168"),
  ea = n("981631"),
  el = n("689938"),
  es = n("112723");
t.default = e => {
  var t;
  let {
    channel: n,
    showCall: s
  } = e, r = n.recipients[0], [ei, er] = l.useState(!1), eo = l.useRef(0), eu = (0, F.default)(), {
    analyticsLocations: ed
  } = (0, m.default)(h.default.PROFILE_PANEL);
  (0, g.useFetchProfileEffects)();
  let ec = (0, u.useStateFromStores)([x.default], () => x.default.getUser(r)),
    ef = null == ec ? void 0 : ec.isNonUserBot();
  o()(null != ec, "Profile Panel: user cannot be undefined");
  let eh = (0, b.default)(ec.id),
    {
      installedIntegrations: em,
      fetched: ep,
      appsInGDMEnabled: eE,
      availableApplications: eC
    } = (0, E.usePrivateChannelIntegrationState)({
      channelId: n.id
    }),
    eg = !eu && !s,
    eS = (0, u.useStateFromStores)([M.default, I.default], () => {
      var e;
      return null != ec ? I.default.getChannel(null === (e = M.default.getVoiceStateForUser(ec.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: e_
    } = p.HangStatusExperiment.useExperiment({
      guildId: null == eS ? void 0 : eS.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: eT,
      customStatusActivity: eI,
      isApplicationStreaming: eA,
      isMobile: eN,
      status: ev,
      hangStatusActivity: ex
    } = (0, u.useStateFromStoresObject)([_.default, N.default, A.default], () => {
      let e = null != _.default.getAnyStreamForUser(ec.id);
      return {
        activity: N.default.findActivity(ec.id, t => {
          let {
            type: n
          } = t;
          return e ? n === ea.ActivityTypes.PLAYING : n !== ea.ActivityTypes.CUSTOM_STATUS && n !== ea.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: N.default.findActivity(ec.id, e => {
          let {
            type: t
          } = e;
          return t === ea.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: e,
        isMobile: N.default.isMobileOnline(ec.id),
        status: ef ? null : N.default.getStatus(ec.id),
        hangStatusActivity: e_ && null != eS && A.default.can(ea.Permissions.CONNECT, eS) ? N.default.findActivity(ec.id, e => {
          let {
            type: t
          } = e;
          return t === ea.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    eM = null != eT || null != ex || eA,
    eR = null !== (t = R.default.getNickname(null, n.id, ec)) && void 0 !== t ? t : L.default.getName(ec),
    eL = (0, u.useStateFromStores)([v.default], () => v.default.hidePersonalInformation),
    [ey, eO, ej, eP, eD] = (0, u.useStateFromStoresArray)([P.default], () => [P.default.getMutualFriendsCount(ec.id), P.default.getMutualFriends(ec.id), P.default.getMutualGuilds(ec.id), P.default.isFetchingProfile(ec.id), P.default.isFetchingFriends(ec.id)]),
    eb = !ec.bot && null != ej && ej.length > 0,
    eU = !ec.bot && null != ey && ey > 0,
    eF = (0, X.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: ec,
      source: G.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    ew = (0, f.default)();
  l.useEffect(() => {
    eo.current = Date.now()
  }, []), l.useEffect(() => {
    (0, D.maybeFetchUserProfileForPopout)(ec, {
      withMutualGuilds: !ec.bot,
      withMutualFriendsCount: !ec.bot
    })
  }, [ec]), l.useEffect(() => {
    null != eh && eg && (0, U.trackProfilePanelViewed)({
      displayProfile: eh,
      isMobile: eN,
      loadDurationMs: Date.now() - eo.current,
      activity: eT,
      customStatusActivity: eI,
      status: ev
    })
  }, [eh, eN, eT, eI, ev, eg]);
  let ek = null == ej ? void 0 : ej.map(e => (0, a.jsx)(ee.default, {
      connection: e,
      user: ec,
      theme: ew
    }, e.guild.id)),
    eH = null == eO ? void 0 : eO.map(e => (0, a.jsx)($.default, {
      connection: e,
      channelId: n.id
    }, e.key)),
    eB = em.map(e => (0, a.jsx)(Q.default, {
      channel: n,
      integration: e
    }, e.application.id)),
    eG = l.useCallback(() => {
      !ec.bot && !eD && null == eH && (0, c.fetchMutualFriends)(ec.id)
    }, [eD, eH, ec.id, ec.bot]),
    eV = l.useCallback(() => er(!0), []),
    eW = l.useCallback(() => er(!1), []),
    eY = (0, u.useStateFromStores)([T.default], () => T.default.getId()),
    ez = ec.id === eY,
    eK = ec.bot || ez,
    {
      enabled: eZ
    } = (0, y.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: h.default.PROFILE,
      disable: eK
    }),
    eq = (0, S.useIsUserRecentGamesEnabled)({
      userId: ec.id,
      location: "28tk0bf_2"
    });
  return eg ? (0, a.jsx)(m.AnalyticsLocationProvider, {
    value: ed,
    children: (0, a.jsx)(O.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: ec.id,
      channelId: n.id,
      children: (0, a.jsx)("aside", {
        className: es.profilePanel,
        onMouseEnter: eV,
        onMouseLeave: eW,
        children: (0, a.jsxs)(w.default, {
          user: ec,
          displayProfile: eh,
          profileType: en.UserProfileTypes.PANEL,
          themeOverride: ew,
          children: [eF.shouldShow && (0, a.jsx)(B.default, {
            user: ec,
            upsellSource: G.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: eh,
            isInSidebar: !0,
            ...eF
          }, ec.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(et.default, {
              user: ec,
              displayProfile: eh,
              channel: n,
              animateAssets: ei,
              forceShowPremiumBadge: ei
            }), (0, a.jsxs)(w.default.Overlay, {
              children: [(0, a.jsx)(q.default, {
                user: ec,
                nickname: eR,
                pronouns: null == eh ? void 0 : eh.pronouns
              }), (0, a.jsx)(z.default, {
                customStatusActivity: eI,
                animate: ei
              }), (0, a.jsx)(V.default, {}), (0, a.jsx)(Y.default, {
                bio: null == eh ? void 0 : eh.bio,
                hidePersonalInformation: eL,
                animateOnHover: !0,
                isHovering: ei
              }), eZ && (0, a.jsx)(k.default, {
                className: es.profileMutuals,
                user: ec
              }), !ec.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(K.default, {
                  userId: r
                }), (0, a.jsx)(V.default, {})]
              }), (0, a.jsx)(Z.default, {
                user: ec,
                setNote: !1
              })]
            }), eM ? (0, a.jsx)(w.default.Overlay, {
              children: (0, a.jsx)(W.default, {
                activity: null != eT || eA ? eT : ex,
                user: ec,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: ea.AnalyticsPages.USER_PROFILE,
                    section: ea.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, eq && (0, a.jsx)(H.UserProfileRecentGamesThemedSection, {
              userId: r
            }), (eb || eU) && (0, a.jsxs)(w.default.Overlay, {
              className: es.profilePanelConnections,
              children: [eb ? (0, a.jsx)(J.default, {
                className: es.mutualGuildsList,
                header: el.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == ej ? void 0 : ej.length
                }),
                isLoadingHeader: eP,
                onExpand: () => {
                  (0, j.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: ec.id,
                    channelId: n.id,
                    analyticsLocations: ed
                  })
                },
                children: ek
              }) : null, eU ? (0, a.jsx)(J.default, {
                className: i()(es.mutualFriendsList, {
                  [es.mutualFriendsDivider]: eb
                }),
                header: el.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: ey
                }),
                isLoadingHeader: eP,
                isLoadingContents: eD,
                loadingContentsCount: ey,
                onFocus: eG,
                onHover: eG,
                itemType: J.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, j.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: ec.id,
                    channelId: n.id,
                    analyticsLocations: ed
                  })
                },
                children: eH
              }) : null]
            }), eE && (0, a.jsx)(w.default.Overlay, {
              className: i()(es.profilePanelConnections, es.appListThemedContainer),
              children: (0, a.jsxs)(J.default, {
                header: eB.length > 0 ? el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eB.length
                }) : el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !ep,
                isLoadingHeader: !1,
                itemType: J.ListType.AppsList,
                children: [eB, eC.length > 0 && (0, a.jsxs)("div", {
                  className: es.appButtonContainer,
                  children: [0 === em.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: el.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(C.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: es.appButtonColor,
                    className: es.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: el.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            })]
          })]
        })
      })
    })
  }) : null
}