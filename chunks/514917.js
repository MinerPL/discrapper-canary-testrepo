"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ea
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
  g = n("373469"),
  S = n("271938"),
  C = n("42203"),
  _ = n("957255"),
  I = n("824563"),
  T = n("102985"),
  v = n("697218"),
  x = n("800762"),
  N = n("387111"),
  A = n("158998"),
  M = n("337487"),
  R = n("756507"),
  j = n("713135"),
  L = n("765698"),
  y = n("506885"),
  O = n("217513"),
  P = n("893980"),
  D = n("58351"),
  b = n("430312"),
  U = n("840211"),
  w = n("789321"),
  F = n("627601"),
  V = n("10532"),
  k = n("915712"),
  H = n("369869"),
  G = n("802279"),
  B = n("465215"),
  W = n("301998"),
  Y = n("491250"),
  z = n("453649"),
  K = n("849674"),
  Z = n("817080"),
  X = n("390413"),
  Q = n("104649"),
  q = n("80615"),
  J = n("80531"),
  $ = n("590456"),
  ee = n("49111"),
  et = n("782340"),
  en = n("620310"),
  ea = e => {
    var t;
    let {
      channel: n,
      showCall: s
    } = e, r = n.recipients[0], [ea, el] = l.useState(!1), es = l.useRef(0), ei = (0, D.default)(), er = (0, o.useStateFromStores)([v.default], () => v.default.getUser(r)), eu = null == er ? void 0 : er.isNonUserBot();
    u(null != er, "Profile Panel: user cannot be undefined");
    let eo = (0, O.default)(er.id),
      {
        installedIntegrations: ed,
        fetched: ec,
        appsInGDMEnabled: ef,
        availableApplications: eh
      } = (0, p.usePrivateChannelIntegrationState)({
        channelId: n.id
      }),
      em = !ei && !s,
      {
        UserProfileAnalyticsProvider: ep,
        trackUserProfileAction: eE
      } = (0, R.useUserProfileAnalyticsProvider)({
        layout: "DM_PANEL",
        newAnalyticsLocations: [h.default.PROFILE_PANEL],
        userId: er.id,
        channelId: n.id
      }, em),
      eg = (0, o.useStateFromStores)([x.default, C.default], () => {
        var e;
        return null != er ? C.default.getChannel(null === (e = x.default.getVoiceStateForUser(er.id)) || void 0 === e ? void 0 : e.channelId) : null
      }),
      {
        enableHangStatus: eS
      } = m.HangStatusExperiment.useExperiment({
        guildId: null == eg ? void 0 : eg.guild_id,
        location: "ActivityStatus"
      }, {
        autoTrackExposure: !1
      }),
      {
        activity: eC,
        customStatusActivity: e_,
        isApplicationStreaming: eI,
        isMobile: eT,
        status: ev,
        hangStatusActivity: ex,
        isHangStatusPrimaryActivity: eN
      } = (0, o.useStateFromStoresObject)([g.default, I.default, _.default], () => {
        var e;
        let t = null != g.default.getAnyStreamForUser(er.id);
        return {
          activity: I.default.findActivity(er.id, e => {
            let {
              type: n
            } = e;
            return t ? n === ee.ActivityTypes.PLAYING : n !== ee.ActivityTypes.CUSTOM_STATUS && n !== ee.ActivityTypes.HANG_STATUS
          }),
          customStatusActivity: I.default.findActivity(er.id, e => {
            let {
              type: t
            } = e;
            return t === ee.ActivityTypes.CUSTOM_STATUS
          }),
          isApplicationStreaming: t,
          isMobile: I.default.isMobileOnline(er.id),
          status: eu ? null : I.default.getStatus(er.id),
          isHangStatusPrimaryActivity: (null === (e = I.default.findActivity(er.id, e => {
            let {
              type: n
            } = e;
            return t ? n === ee.ActivityTypes.PLAYING : n !== ee.ActivityTypes.CUSTOM_STATUS
          })) || void 0 === e ? void 0 : e.type) === ee.ActivityTypes.HANG_STATUS,
          hangStatusActivity: eS && null != eg && _.default.can(ee.Permissions.CONNECT, eg) ? I.default.findActivity(er.id, e => {
            let {
              type: t
            } = e;
            return t === ee.ActivityTypes.HANG_STATUS
          }) : null
        }
      }),
      eA = null != eC || null != ex || eI,
      eM = null !== (t = N.default.getNickname(null, n.id, er)) && void 0 !== t ? t : A.default.getName(er),
      eR = (0, o.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
      [ej, eL, ey, eO, eP] = (0, o.useStateFromStoresArray)([j.default], () => [j.default.getMutualFriendsCount(er.id), j.default.getMutualFriends(er.id), j.default.getMutualGuilds(er.id), j.default.isFetchingProfile(er.id), j.default.isFetchingFriends(er.id)]),
      eD = (0, z.useGetVoiceChannelInfoForVoiceActivitySection)(er.id),
      eb = null != eD && !eI && !eN,
      {
        showVoiceActivityInProfile: eU
      } = L.VoiceActivityProfileExperiment.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eb && em
      }),
      ew = !er.bot && null != ey && ey.length > 0,
      eF = !er.bot && null != ej && ej > 0,
      eV = (0, K.useShouldShowUserPopoutCollectiblesUpsell)({
        popoutUser: er,
        source: F.UserPopoutUpsellSource.PROFILE_PANEL
      }),
      ek = (0, f.default)();
    l.useEffect(() => {
      es.current = Date.now()
    }, []), l.useEffect(() => {
      (0, y.default)(er.id, er.getAvatarURL(void 0, 80), {
        withMutualGuilds: !er.bot,
        withMutualFriendsCount: !er.bot
      })
    }, [er]), l.useEffect(() => {
      null != eo && em && (0, P.trackProfilePanelViewed)({
        displayProfile: eo,
        isMobile: eT,
        loadDurationMs: Date.now() - es.current,
        activity: eC,
        customStatusActivity: e_,
        status: ev
      })
    }, [eo, eT, eC, e_, ev, em]);
    let eH = null == ey ? void 0 : ey.map(e => (0, a.jsx)(q.default, {
        connection: e,
        user: er,
        theme: ek
      }, e.guild.id)),
      eG = null == eL ? void 0 : eL.map(e => (0, a.jsx)(Q.default, {
        connection: e,
        channelId: n.id
      }, e.key)),
      eB = ed.map(e => (0, a.jsx)(Z.default, {
        channel: n,
        integration: e
      }, e.application.id)),
      eW = l.useCallback(() => {
        !er.bot && !eP && null == eG && (0, c.fetchMutualFriends)(er.id)
      }, [eP, eG, er.id, er.bot]),
      eY = l.useCallback(() => el(!0), []),
      ez = l.useCallback(() => el(!1), []),
      eK = (0, o.useStateFromStores)([S.default], () => S.default.getId()),
      eZ = er.id === eK,
      eX = er.bot || eZ,
      {
        enabled: eQ
      } = (0, M.useProfileMutualsExperiment)({
        autoTrackExposure: !0,
        location: h.default.PROFILE,
        disable: eX
      });
    return em ? (0, a.jsx)(ep, {
      children: (0, a.jsx)("aside", {
        className: en.profilePanel,
        onMouseEnter: eY,
        onMouseLeave: ez,
        children: (0, a.jsxs)(b.default, {
          user: er,
          profileType: $.UserProfileTypes.PANEL,
          useDefaultClientTheme: !0,
          children: [eV.shouldShow && (0, a.jsx)(w.default, {
            user: er,
            upsellSource: F.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: eo,
            isInSidebar: !0,
            ...eV
          }, er.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(J.default, {
              user: er,
              displayProfile: eo,
              channel: n,
              animateAssets: ea,
              forceShowPremiumBadge: ea
            }), (0, a.jsxs)(b.default.Inner, {
              children: [(0, a.jsx)(Y.default, {
                user: er,
                nickname: eM,
                pronouns: null == eo ? void 0 : eo.pronouns
              }), (0, a.jsx)(G.default, {
                customStatusActivity: e_,
                animate: ea
              }), (0, a.jsx)(V.default, {}), (0, a.jsx)(H.default, {
                bio: null == eo ? void 0 : eo.bio,
                hidePersonalInformation: eR,
                animateOnHover: !0,
                isHovering: ea
              }), eQ && (0, a.jsx)(U.default, {
                className: en.profileMutuals,
                user: er
              }), !er.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(B.default, {
                  userId: r
                }), (0, a.jsx)(V.default, {})]
              }), (0, a.jsx)(W.default, {
                user: er,
                setNote: !1
              })]
            }), eU && eb ? (0, a.jsx)(b.default.Inner, {
              children: (0, a.jsx)(z.default, {
                voiceGuild: eD.voiceGuild,
                voiceChannel: eD.voiceChannel,
                color: en.appButtonColor
              })
            }) : null, eA ? (0, a.jsx)(b.default.Inner, {
              children: (0, a.jsx)(k.default, {
                activity: null != eC ? eC : ex,
                user: er,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: ee.AnalyticsPages.USER_PROFILE,
                    section: ee.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (ew || eF) && (0, a.jsxs)(b.default.Inner, {
              className: en.profilePanelConnections,
              children: [ew ? (0, a.jsx)(X.default, {
                className: en.mutualGuildsList,
                header: et.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == ey ? void 0 : ey.length
                }),
                isLoadingHeader: eO,
                onExpand: () => {
                  eE({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS"
                  })
                },
                children: eH
              }) : null, eF ? (0, a.jsx)(X.default, {
                className: i(en.mutualFriendsList, {
                  [en.mutualFriendsDivider]: ew
                }),
                header: et.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: ej
                }),
                isLoadingHeader: eO,
                isLoadingContents: eP,
                loadingContentsCount: ej,
                onFocus: eW,
                onHover: eW,
                itemType: X.ListType.MutualFriendsList,
                onExpand: () => {
                  eE({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS"
                  })
                },
                children: eG
              }) : null]
            }), ef && (0, a.jsx)(b.default.Inner, {
              className: i(en.profilePanelConnections, en.appListThemedContainer),
              children: (0, a.jsxs)(X.default, {
                header: eB.length > 0 ? et.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eB.length
                }) : et.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !ec,
                isLoadingHeader: !1,
                itemType: X.ListType.AppsList,
                children: [eB, eh.length > 0 && (0, a.jsxs)("div", {
                  className: en.appButtonContainer,
                  children: [0 === ed.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: et.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(E.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: en.appButtonColor,
                    className: en.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: et.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            })]
          })]
        })
      })
    }) : null
  }