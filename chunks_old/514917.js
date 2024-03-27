"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("446674"),
  d = n("77078"),
  c = n("327037"),
  f = n("841098"),
  h = n("812204"),
  m = n("699209"),
  p = n("252063"),
  E = n("724110"),
  g = n("501768"),
  S = n("373469"),
  C = n("271938"),
  _ = n("42203"),
  I = n("957255"),
  T = n("824563"),
  v = n("102985"),
  x = n("697218"),
  N = n("800762"),
  A = n("387111"),
  M = n("158998"),
  R = n("337487"),
  j = n("756507"),
  L = n("713135"),
  y = n("765698"),
  O = n("506885"),
  P = n("217513"),
  D = n("893980"),
  b = n("58351"),
  U = n("430312"),
  w = n("840211"),
  F = n("789321"),
  V = n("627601"),
  H = n("10532"),
  k = n("915712"),
  B = n("369869"),
  G = n("802279"),
  W = n("465215"),
  Y = n("301998"),
  z = n("491250"),
  K = n("453649"),
  Z = n("849674"),
  X = n("817080"),
  Q = n("390413"),
  q = n("104649"),
  J = n("80615"),
  $ = n("80531"),
  ee = n("590456"),
  et = n("49111"),
  en = n("782340"),
  ea = n("620310"),
  el = e => {
    var t;
    let {
      channel: n,
      showCall: s
    } = e, r = n.recipients[0], [el, es] = l.useState(!1), ei = l.useRef(0), er = (0, b.default)();
    (0, g.default)();
    let eu = (0, o.useStateFromStores)([x.default], () => x.default.getUser(r)),
      eo = null == eu ? void 0 : eu.isNonUserBot();
    u(null != eu, "Profile Panel: user cannot be undefined");
    let ed = (0, P.default)(eu.id),
      {
        installedIntegrations: ec,
        fetched: ef,
        appsInGDMEnabled: eh,
        availableApplications: em
      } = (0, p.usePrivateChannelIntegrationState)({
        channelId: n.id
      }),
      ep = !er && !s,
      {
        UserProfileAnalyticsProvider: eE,
        trackUserProfileAction: eg
      } = (0, j.useUserProfileAnalyticsProvider)({
        layout: "DM_PANEL",
        newAnalyticsLocations: [h.default.PROFILE_PANEL],
        userId: eu.id,
        channelId: n.id
      }, ep),
      eS = (0, o.useStateFromStores)([N.default, _.default], () => {
        var e;
        return null != eu ? _.default.getChannel(null === (e = N.default.getVoiceStateForUser(eu.id)) || void 0 === e ? void 0 : e.channelId) : null
      }),
      {
        enableHangStatus: eC
      } = m.HangStatusExperiment.useExperiment({
        guildId: null == eS ? void 0 : eS.guild_id,
        location: "ActivityStatus"
      }, {
        autoTrackExposure: !1
      }),
      {
        activity: e_,
        customStatusActivity: eI,
        isApplicationStreaming: eT,
        isMobile: ev,
        status: ex,
        hangStatusActivity: eN,
        isHangStatusPrimaryActivity: eA
      } = (0, o.useStateFromStoresObject)([S.default, T.default, I.default], () => {
        var e;
        let t = null != S.default.getAnyStreamForUser(eu.id);
        return {
          activity: T.default.findActivity(eu.id, e => {
            let {
              type: n
            } = e;
            return t ? n === et.ActivityTypes.PLAYING : n !== et.ActivityTypes.CUSTOM_STATUS && n !== et.ActivityTypes.HANG_STATUS
          }),
          customStatusActivity: T.default.findActivity(eu.id, e => {
            let {
              type: t
            } = e;
            return t === et.ActivityTypes.CUSTOM_STATUS
          }),
          isApplicationStreaming: t,
          isMobile: T.default.isMobileOnline(eu.id),
          status: eo ? null : T.default.getStatus(eu.id),
          isHangStatusPrimaryActivity: (null === (e = T.default.findActivity(eu.id, e => {
            let {
              type: n
            } = e;
            return t ? n === et.ActivityTypes.PLAYING : n !== et.ActivityTypes.CUSTOM_STATUS
          })) || void 0 === e ? void 0 : e.type) === et.ActivityTypes.HANG_STATUS,
          hangStatusActivity: eC && null != eS && I.default.can(et.Permissions.CONNECT, eS) ? T.default.findActivity(eu.id, e => {
            let {
              type: t
            } = e;
            return t === et.ActivityTypes.HANG_STATUS
          }) : null
        }
      }),
      eM = null != e_ || null != eN || eT,
      eR = null !== (t = A.default.getNickname(null, n.id, eu)) && void 0 !== t ? t : M.default.getName(eu),
      ej = (0, o.useStateFromStores)([v.default], () => v.default.hidePersonalInformation),
      [eL, ey, eO, eP, eD] = (0, o.useStateFromStoresArray)([L.default], () => [L.default.getMutualFriendsCount(eu.id), L.default.getMutualFriends(eu.id), L.default.getMutualGuilds(eu.id), L.default.isFetchingProfile(eu.id), L.default.isFetchingFriends(eu.id)]),
      eb = (0, K.useGetVoiceChannelInfoForVoiceActivitySection)(eu.id),
      eU = null != eb && !eT && !eA,
      {
        showVoiceActivityInProfile: ew
      } = y.VoiceActivityProfileExperiment.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eU && ep
      }),
      eF = !eu.bot && null != eO && eO.length > 0,
      eV = !eu.bot && null != eL && eL > 0,
      eH = (0, Z.useShouldShowUserPopoutCollectiblesUpsell)({
        popoutUser: eu,
        source: V.UserPopoutUpsellSource.PROFILE_PANEL
      }),
      ek = (0, f.default)();
    l.useEffect(() => {
      ei.current = Date.now()
    }, []), l.useEffect(() => {
      (0, O.default)(eu.id, eu.getAvatarURL(void 0, 80), {
        withMutualGuilds: !eu.bot,
        withMutualFriendsCount: !eu.bot
      })
    }, [eu]), l.useEffect(() => {
      null != ed && ep && (0, D.trackProfilePanelViewed)({
        displayProfile: ed,
        isMobile: ev,
        loadDurationMs: Date.now() - ei.current,
        activity: e_,
        customStatusActivity: eI,
        status: ex
      })
    }, [ed, ev, e_, eI, ex, ep]);
    let eB = null == eO ? void 0 : eO.map(e => (0, a.jsx)(J.default, {
        connection: e,
        user: eu,
        theme: ek
      }, e.guild.id)),
      eG = null == ey ? void 0 : ey.map(e => (0, a.jsx)(q.default, {
        connection: e,
        channelId: n.id
      }, e.key)),
      eW = ec.map(e => (0, a.jsx)(X.default, {
        channel: n,
        integration: e
      }, e.application.id)),
      eY = l.useCallback(() => {
        !eu.bot && !eD && null == eG && (0, c.fetchMutualFriends)(eu.id)
      }, [eD, eG, eu.id, eu.bot]),
      ez = l.useCallback(() => es(!0), []),
      eK = l.useCallback(() => es(!1), []),
      eZ = (0, o.useStateFromStores)([C.default], () => C.default.getId()),
      eX = eu.id === eZ,
      eQ = eu.bot || eX,
      {
        enabled: eq
      } = (0, R.useProfileMutualsExperiment)({
        autoTrackExposure: !0,
        location: h.default.PROFILE,
        disable: eQ
      });
    return ep ? (0, a.jsx)(eE, {
      children: (0, a.jsx)("aside", {
        className: ea.profilePanel,
        onMouseEnter: ez,
        onMouseLeave: eK,
        children: (0, a.jsxs)(U.default, {
          user: eu,
          profileType: ee.UserProfileTypes.PANEL,
          useDefaultClientTheme: !0,
          children: [eH.shouldShow && (0, a.jsx)(F.default, {
            user: eu,
            upsellSource: V.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: ed,
            isInSidebar: !0,
            ...eH
          }, eu.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)($.default, {
              user: eu,
              displayProfile: ed,
              channel: n,
              animateAssets: el,
              forceShowPremiumBadge: el
            }), (0, a.jsxs)(U.default.Inner, {
              children: [(0, a.jsx)(z.default, {
                user: eu,
                nickname: eR,
                pronouns: null == ed ? void 0 : ed.pronouns
              }), (0, a.jsx)(G.default, {
                customStatusActivity: eI,
                animate: el
              }), (0, a.jsx)(H.default, {}), (0, a.jsx)(B.default, {
                bio: null == ed ? void 0 : ed.bio,
                hidePersonalInformation: ej,
                animateOnHover: !0,
                isHovering: el
              }), eq && (0, a.jsx)(w.default, {
                className: ea.profileMutuals,
                user: eu
              }), !eu.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(W.default, {
                  userId: r
                }), (0, a.jsx)(H.default, {})]
              }), (0, a.jsx)(Y.default, {
                user: eu,
                setNote: !1
              })]
            }), ew && eU ? (0, a.jsx)(U.default.Inner, {
              children: (0, a.jsx)(K.default, {
                voiceGuild: eb.voiceGuild,
                voiceChannel: eb.voiceChannel,
                color: ea.appButtonColor
              })
            }) : null, eM ? (0, a.jsx)(U.default.Inner, {
              children: (0, a.jsx)(k.default, {
                activity: null != e_ ? e_ : eN,
                user: eu,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: et.AnalyticsPages.USER_PROFILE,
                    section: et.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (eF || eV) && (0, a.jsxs)(U.default.Inner, {
              className: ea.profilePanelConnections,
              children: [eF ? (0, a.jsx)(Q.default, {
                className: ea.mutualGuildsList,
                header: en.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == eO ? void 0 : eO.length
                }),
                isLoadingHeader: eP,
                onExpand: () => {
                  eg({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS"
                  })
                },
                children: eB
              }) : null, eV ? (0, a.jsx)(Q.default, {
                className: i(ea.mutualFriendsList, {
                  [ea.mutualFriendsDivider]: eF
                }),
                header: en.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eL
                }),
                isLoadingHeader: eP,
                isLoadingContents: eD,
                loadingContentsCount: eL,
                onFocus: eY,
                onHover: eY,
                itemType: Q.ListType.MutualFriendsList,
                onExpand: () => {
                  eg({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS"
                  })
                },
                children: eG
              }) : null]
            }), eh && (0, a.jsx)(U.default.Inner, {
              className: i(ea.profilePanelConnections, ea.appListThemedContainer),
              children: (0, a.jsxs)(Q.default, {
                header: eW.length > 0 ? en.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eW.length
                }) : en.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !ef,
                isLoadingHeader: !1,
                itemType: Q.ListType.AppsList,
                children: [eW, em.length > 0 && (0, a.jsxs)("div", {
                  className: ea.appButtonContainer,
                  children: [0 === ec.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: en.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(E.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: ea.appButtonColor,
                    className: ea.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: en.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            })]
          })]
        })
      })
    }) : null
  }