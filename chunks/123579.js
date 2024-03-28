"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("232567"),
  f = n("410030"),
  h = n("100527"),
  m = n("574176"),
  p = n("556084"),
  E = n("422677"),
  C = n("996678"),
  g = n("201819"),
  S = n("199902"),
  _ = n("314897"),
  T = n("592125"),
  I = n("496675"),
  A = n("158776"),
  v = n("246946"),
  N = n("594174"),
  x = n("979651"),
  M = n("5192"),
  R = n("51144"),
  L = n("342656"),
  y = n("785717"),
  O = n("621853"),
  j = n("895618"),
  P = n("484459"),
  D = n("318661"),
  b = n("57048"),
  U = n("87728"),
  F = n("747074"),
  w = n("421486"),
  k = n("347949"),
  H = n("240328"),
  B = n("436478"),
  G = n("138394"),
  V = n("248345"),
  W = n("19836"),
  Y = n("538564"),
  z = n("319300"),
  Z = n("591600"),
  K = n("584045"),
  X = n("58307"),
  q = n("664202"),
  Q = n("520858"),
  J = n("772056"),
  $ = n("281172"),
  ee = n("50333"),
  et = n("747711"),
  en = n("228168"),
  ea = n("981631"),
  el = n("689938"),
  es = n("859138");
t.default = e => {
  var t;
  let {
    channel: n,
    showCall: s
  } = e, r = n.recipients[0], [ei, er] = l.useState(!1), eo = l.useRef(0), eu = (0, U.default)();
  (0, C.default)();
  let ed = (0, u.useStateFromStores)([N.default], () => N.default.getUser(r)),
    ec = null == ed ? void 0 : ed.isNonUserBot();
  o()(null != ed, "Profile Panel: user cannot be undefined");
  let ef = (0, D.default)(ed.id),
    {
      installedIntegrations: eh,
      fetched: em,
      appsInGDMEnabled: ep,
      availableApplications: eE
    } = (0, p.usePrivateChannelIntegrationState)({
      channelId: n.id
    }),
    eC = !eu && !s,
    {
      UserProfileAnalyticsProvider: eg,
      trackUserProfileAction: eS
    } = (0, y.useUserProfileAnalyticsProvider)({
      layout: "DM_PANEL",
      newAnalyticsLocations: [h.default.PROFILE_PANEL],
      userId: ed.id,
      channelId: n.id
    }, eC),
    e_ = (0, u.useStateFromStores)([x.default, T.default], () => {
      var e;
      return null != ed ? T.default.getChannel(null === (e = x.default.getVoiceStateForUser(ed.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: eT
    } = m.HangStatusExperiment.useExperiment({
      guildId: null == e_ ? void 0 : e_.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: eI,
      customStatusActivity: eA,
      isApplicationStreaming: ev,
      isMobile: eN,
      status: ex,
      hangStatusActivity: eM,
      isHangStatusPrimaryActivity: eR
    } = (0, u.useStateFromStoresObject)([S.default, A.default, I.default], () => {
      var e;
      let t = null != S.default.getAnyStreamForUser(ed.id);
      return {
        activity: A.default.findActivity(ed.id, e => {
          let {
            type: n
          } = e;
          return t ? n === ea.ActivityTypes.PLAYING : n !== ea.ActivityTypes.CUSTOM_STATUS && n !== ea.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: A.default.findActivity(ed.id, e => {
          let {
            type: t
          } = e;
          return t === ea.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: t,
        isMobile: A.default.isMobileOnline(ed.id),
        status: ec ? null : A.default.getStatus(ed.id),
        isHangStatusPrimaryActivity: (null === (e = A.default.findActivity(ed.id, e => {
          let {
            type: n
          } = e;
          return t ? n === ea.ActivityTypes.PLAYING : n !== ea.ActivityTypes.CUSTOM_STATUS
        })) || void 0 === e ? void 0 : e.type) === ea.ActivityTypes.HANG_STATUS,
        hangStatusActivity: eT && null != e_ && I.default.can(ea.Permissions.CONNECT, e_) ? A.default.findActivity(ed.id, e => {
          let {
            type: t
          } = e;
          return t === ea.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    eL = null != eI || null != eM || ev,
    ey = null !== (t = M.default.getNickname(null, n.id, ed)) && void 0 !== t ? t : R.default.getName(ed),
    eO = (0, u.useStateFromStores)([v.default], () => v.default.hidePersonalInformation),
    [ej, eP, eD, eb, eU] = (0, u.useStateFromStoresArray)([O.default], () => [O.default.getMutualFriendsCount(ed.id), O.default.getMutualFriends(ed.id), O.default.getMutualGuilds(ed.id), O.default.isFetchingProfile(ed.id), O.default.isFetchingFriends(ed.id)]),
    eF = (0, X.useGetVoiceChannelInfoForVoiceActivitySection)(ed.id),
    ew = null != eF && !ev && !eR,
    {
      showVoiceActivityInProfile: ek
    } = j.VoiceActivityProfileExperiment.useExperiment({
      location: "user DM panel"
    }, {
      autoTrackExposure: ew && eC
    }),
    eH = !ed.bot && null != eD && eD.length > 0,
    eB = !ed.bot && null != ej && ej > 0,
    eG = (0, q.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: ed,
      source: B.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    eV = (0, f.default)();
  l.useEffect(() => {
    eo.current = Date.now()
  }, []), l.useEffect(() => {
    (0, P.default)(ed.id, ed.getAvatarURL(void 0, 80), {
      withMutualGuilds: !ed.bot,
      withMutualFriendsCount: !ed.bot
    })
  }, [ed]), l.useEffect(() => {
    null != ef && eC && (0, b.trackProfilePanelViewed)({
      displayProfile: ef,
      isMobile: eN,
      loadDurationMs: Date.now() - eo.current,
      activity: eI,
      customStatusActivity: eA,
      status: ex
    })
  }, [ef, eN, eI, eA, ex, eC]);
  let eW = null == eD ? void 0 : eD.map(e => (0, a.jsx)(ee.default, {
      connection: e,
      user: ed,
      theme: eV
    }, e.guild.id)),
    eY = null == eP ? void 0 : eP.map(e => (0, a.jsx)($.default, {
      connection: e,
      channelId: n.id
    }, e.key)),
    ez = eh.map(e => (0, a.jsx)(Q.default, {
      channel: n,
      integration: e
    }, e.application.id)),
    eZ = l.useCallback(() => {
      !ed.bot && !eU && null == eY && (0, c.fetchMutualFriends)(ed.id)
    }, [eU, eY, ed.id, ed.bot]),
    eK = l.useCallback(() => er(!0), []),
    eX = l.useCallback(() => er(!1), []),
    eq = (0, u.useStateFromStores)([_.default], () => _.default.getId()),
    eQ = ed.id === eq,
    eJ = ed.bot || eQ,
    {
      enabled: e$
    } = (0, L.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: h.default.PROFILE,
      disable: eJ
    }),
    e0 = (0, g.useIsUserRecentGamesFetchEnabled)({
      userId: ed.id,
      location: "28tk0bf_5"
    });
  return eC ? (0, a.jsx)(eg, {
    children: (0, a.jsx)("aside", {
      className: es.profilePanel,
      onMouseEnter: eK,
      onMouseLeave: eX,
      children: (0, a.jsxs)(F.default, {
        user: ed,
        profileType: en.UserProfileTypes.PANEL,
        useDefaultClientTheme: !0,
        children: [eG.shouldShow && (0, a.jsx)(H.default, {
          user: ed,
          upsellSource: B.UserPopoutUpsellSource.PROFILE_PANEL,
          displayProfile: ef,
          isInSidebar: !0,
          ...eG
        }, ed.id), (0, a.jsxs)(d.ScrollerNone, {
          children: [(0, a.jsx)(et.default, {
            user: ed,
            displayProfile: ef,
            channel: n,
            animateAssets: ei,
            forceShowPremiumBadge: ei
          }), (0, a.jsxs)(F.default.Inner, {
            children: [(0, a.jsx)(K.default, {
              user: ed,
              nickname: ey,
              pronouns: null == ef ? void 0 : ef.pronouns
            }), (0, a.jsx)(Y.default, {
              customStatusActivity: eA,
              animate: ei
            }), (0, a.jsx)(G.default, {}), (0, a.jsx)(W.default, {
              bio: null == ef ? void 0 : ef.bio,
              hidePersonalInformation: eO,
              animateOnHover: !0,
              isHovering: ei
            }), e$ && (0, a.jsx)(w.default, {
              className: es.profileMutuals,
              user: ed
            }), !ed.isSystemUser() && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(z.default, {
                userId: r
              }), (0, a.jsx)(G.default, {})]
            }), (0, a.jsx)(Z.default, {
              user: ed,
              setNote: !1
            })]
          }), e0 && (0, a.jsx)(k.UserProfileRecentGamesThemedSection, {
            userId: r
          }), ek && ew ? (0, a.jsx)(F.default.Inner, {
            children: (0, a.jsx)(X.default, {
              voiceGuild: eF.voiceGuild,
              voiceChannel: eF.voiceChannel,
              color: es.appButtonColor
            })
          }) : null, eL ? (0, a.jsx)(F.default.Inner, {
            children: (0, a.jsx)(V.default, {
              activity: null != eI ? eI : eM,
              user: ed,
              channelId: n.id,
              analyticsParams: {
                location: {
                  page: ea.AnalyticsPages.USER_PROFILE,
                  section: ea.AnalyticsSections.DM_PROFILE
                }
              }
            })
          }) : null, (eH || eB) && (0, a.jsxs)(F.default.Inner, {
            className: es.profilePanelConnections,
            children: [eH ? (0, a.jsx)(J.default, {
              className: es.mutualGuildsList,
              header: el.default.Messages.MUTUAL_GUILDS_COUNT.format({
                count: null == eD ? void 0 : eD.length
              }),
              isLoadingHeader: eb,
              onExpand: () => {
                eS({
                  action: "PRESS_SECTION",
                  section: "MUTUAL_GUILDS"
                })
              },
              children: eW
            }) : null, eB ? (0, a.jsx)(J.default, {
              className: i()(es.mutualFriendsList, {
                [es.mutualFriendsDivider]: eH
              }),
              header: el.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                count: ej
              }),
              isLoadingHeader: eb,
              isLoadingContents: eU,
              loadingContentsCount: ej,
              onFocus: eZ,
              onHover: eZ,
              itemType: J.ListType.MutualFriendsList,
              onExpand: () => {
                eS({
                  action: "PRESS_SECTION",
                  section: "MUTUAL_FRIENDS"
                })
              },
              children: eY
            }) : null]
          }), ep && (0, a.jsx)(F.default.Inner, {
            className: i()(es.profilePanelConnections, es.appListThemedContainer),
            children: (0, a.jsxs)(J.default, {
              header: ez.length > 0 ? el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                count: ez.length
              }) : el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
              isLoadingContents: !em,
              isLoadingHeader: !1,
              itemType: J.ListType.AppsList,
              children: [ez, eE.length > 0 && (0, a.jsxs)("div", {
                className: es.appButtonContainer,
                children: [0 === eh.length && (0, a.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: el.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                }), (0, a.jsx)(d.Button, {
                  onClick: () => {
                    (0, d.openModal)(e => (0, a.jsx)(E.default, {
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
  }) : null
}