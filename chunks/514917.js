"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ei
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
  p = n("795696"),
  E = n("635792"),
  g = n("252063"),
  S = n("724110"),
  C = n("373469"),
  _ = n("271938"),
  I = n("42203"),
  T = n("957255"),
  v = n("824563"),
  x = n("102985"),
  N = n("697218"),
  A = n("800762"),
  M = n("387111"),
  R = n("158998"),
  j = n("337487"),
  L = n("756507"),
  y = n("713135"),
  O = n("765698"),
  P = n("506885"),
  D = n("217513"),
  b = n("893980"),
  U = n("58351"),
  w = n("430312"),
  F = n("840211"),
  V = n("789321"),
  k = n("627601"),
  H = n("10532"),
  B = n("915712"),
  G = n("369869"),
  W = n("802279"),
  Y = n("465215"),
  z = n("301998"),
  K = n("491250"),
  Z = n("453649"),
  X = n("849674"),
  Q = n("817080"),
  q = n("390413"),
  J = n("104649"),
  $ = n("80615"),
  ee = n("80531"),
  et = n("590456"),
  en = n("49111"),
  ea = n("646718"),
  el = n("782340"),
  es = n("620310"),
  ei = e => {
    var t;
    let {
      channel: n,
      showCall: s
    } = e, r = n.recipients[0], [ei, er] = l.useState(!1), eu = l.useRef(0), eo = (0, U.default)(), ed = (0, o.useStateFromStores)([N.default], () => N.default.getUser(r)), ec = null == ed ? void 0 : ed.isNonUserBot();
    u(null != ed, "Profile Panel: user cannot be undefined");
    let ef = (0, D.default)(ed.id),
      {
        installedIntegrations: eh,
        fetched: em,
        appsInGDMEnabled: ep,
        availableApplications: eE
      } = (0, g.usePrivateChannelIntegrationState)({
        channelId: n.id
      }),
      eg = !eo && !s,
      {
        UserProfileAnalyticsProvider: eS,
        trackUserProfileAction: eC
      } = (0, L.useUserProfileAnalyticsProvider)({
        layout: "DM_PANEL",
        newAnalyticsLocations: [h.default.PROFILE_PANEL],
        userId: ed.id,
        channelId: n.id
      }, eg),
      e_ = (0, o.useStateFromStores)([A.default, I.default], () => {
        var e;
        return null != ed ? I.default.getChannel(null === (e = A.default.getVoiceStateForUser(ed.id)) || void 0 === e ? void 0 : e.channelId) : null
      }),
      {
        enableHangStatus: eI
      } = m.HangStatusExperiment.useExperiment({
        guildId: null == e_ ? void 0 : e_.guild_id,
        location: "ActivityStatus"
      }, {
        autoTrackExposure: !1
      }),
      {
        activity: eT,
        customStatusActivity: ev,
        isApplicationStreaming: ex,
        isMobile: eN,
        status: eA,
        hangStatusActivity: eM,
        isHangStatusPrimaryActivity: eR
      } = (0, o.useStateFromStoresObject)([C.default, v.default, T.default], () => {
        var e;
        let t = null != C.default.getAnyStreamForUser(ed.id);
        return {
          activity: v.default.findActivity(ed.id, e => {
            let {
              type: n
            } = e;
            return t ? n === en.ActivityTypes.PLAYING : n !== en.ActivityTypes.CUSTOM_STATUS && n !== en.ActivityTypes.HANG_STATUS
          }),
          customStatusActivity: v.default.findActivity(ed.id, e => {
            let {
              type: t
            } = e;
            return t === en.ActivityTypes.CUSTOM_STATUS
          }),
          isApplicationStreaming: t,
          isMobile: v.default.isMobileOnline(ed.id),
          status: ec ? null : v.default.getStatus(ed.id),
          isHangStatusPrimaryActivity: (null === (e = v.default.findActivity(ed.id, e => {
            let {
              type: n
            } = e;
            return t ? n === en.ActivityTypes.PLAYING : n !== en.ActivityTypes.CUSTOM_STATUS
          })) || void 0 === e ? void 0 : e.type) === en.ActivityTypes.HANG_STATUS,
          hangStatusActivity: eI && null != e_ && T.default.can(en.Permissions.CONNECT, e_) ? v.default.findActivity(ed.id, e => {
            let {
              type: t
            } = e;
            return t === en.ActivityTypes.HANG_STATUS
          }) : null
        }
      }),
      ej = null != eT || null != eM || ex,
      eL = null !== (t = M.default.getNickname(null, n.id, ed)) && void 0 !== t ? t : R.default.getName(ed),
      ey = (0, o.useStateFromStores)([x.default], () => x.default.hidePersonalInformation),
      [eO, eP, eD, eb, eU] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.getMutualFriendsCount(ed.id), y.default.getMutualFriends(ed.id), y.default.getMutualGuilds(ed.id), y.default.isFetchingProfile(ed.id), y.default.isFetchingFriends(ed.id)]),
      ew = (0, Z.useGetVoiceChannelInfoForVoiceActivitySection)(ed.id),
      eF = null != ew && !ex && !eR,
      {
        showVoiceActivityInProfile: eV
      } = O.VoiceActivityProfileExperiment.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eF && eg
      }),
      {
        enabled: ek
      } = p.default.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eg
      }),
      eH = !ed.bot && null != eD && eD.length > 0,
      eB = !ed.bot && null != eO && eO > 0,
      eG = (0, X.useShouldShowUserPopoutCollectiblesUpsell)({
        popoutUser: ed,
        source: k.UserPopoutUpsellSource.PROFILE_PANEL
      }),
      eW = (0, f.default)();
    l.useEffect(() => {
      eu.current = Date.now()
    }, []), l.useEffect(() => {
      (0, P.default)(ed.id, ed.getAvatarURL(void 0, 80), {
        withMutualGuilds: !ed.bot,
        withMutualFriendsCount: !ed.bot
      })
    }, [ed]), l.useEffect(() => {
      null != ef && eg && (0, b.trackProfilePanelViewed)({
        displayProfile: ef,
        isMobile: eN,
        loadDurationMs: Date.now() - eu.current,
        activity: eT,
        customStatusActivity: ev,
        status: eA
      })
    }, [ef, eN, eT, ev, eA, eg]);
    let eY = null == eD ? void 0 : eD.map(e => (0, a.jsx)($.default, {
        connection: e,
        user: ed,
        theme: eW
      }, e.guild.id)),
      ez = null == eP ? void 0 : eP.map(e => (0, a.jsx)(J.default, {
        connection: e,
        channelId: n.id
      }, e.key)),
      eK = eh.map(e => (0, a.jsx)(Q.default, {
        channel: n,
        integration: e
      }, e.application.id)),
      eZ = l.useCallback(() => {
        !ed.bot && !eU && null == ez && (0, c.fetchMutualFriends)(ed.id)
      }, [eU, ez, ed.id, ed.bot]),
      eX = l.useCallback(() => er(!0), []),
      eQ = l.useCallback(() => er(!1), []),
      eq = (0, o.useStateFromStores)([_.default], () => _.default.getId()),
      eJ = ed.id === eq,
      e$ = ed.bot || eJ,
      {
        enabled: e0
      } = (0, j.useProfileMutualsExperiment)({
        autoTrackExposure: !0,
        location: h.default.PROFILE,
        disable: e$
      });
    return eg ? (0, a.jsx)(eS, {
      children: (0, a.jsx)("aside", {
        className: es.profilePanel,
        onMouseEnter: eX,
        onMouseLeave: eQ,
        children: (0, a.jsxs)(w.default, {
          user: ed,
          profileType: et.UserProfileTypes.PANEL,
          useDefaultClientTheme: !0,
          children: [eG.shouldShow && (0, a.jsx)(V.default, {
            user: ed,
            upsellSource: k.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: ef,
            isInSidebar: !0,
            ...eG
          }, ed.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(ee.default, {
              user: ed,
              displayProfile: ef,
              channel: n,
              animateAssets: ei,
              forceShowPremiumBadge: ei
            }), (0, a.jsxs)(w.default.Inner, {
              children: [(0, a.jsx)(K.default, {
                user: ed,
                nickname: eL,
                pronouns: null == ef ? void 0 : ef.pronouns
              }), (0, a.jsx)(W.default, {
                customStatusActivity: ev,
                animate: ei
              }), (0, a.jsx)(H.default, {}), (0, a.jsx)(G.default, {
                bio: null == ef ? void 0 : ef.bio,
                hidePersonalInformation: ey,
                animateOnHover: !0,
                isHovering: ei
              }), e0 && (0, a.jsx)(F.default, {
                className: es.profileMutuals,
                user: ed
              }), !ed.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(Y.default, {
                  userId: r
                }), (0, a.jsx)(H.default, {})]
              }), (0, a.jsx)(z.default, {
                user: ed,
                setNote: !1
              })]
            }), eV && eF ? (0, a.jsx)(w.default.Inner, {
              children: (0, a.jsx)(Z.default, {
                voiceGuild: ew.voiceGuild,
                voiceChannel: ew.voiceChannel,
                color: es.appButtonColor
              })
            }) : null, ej ? (0, a.jsx)(w.default.Inner, {
              children: (0, a.jsx)(B.default, {
                activity: null != eT ? eT : eM,
                user: ed,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: en.AnalyticsPages.USER_PROFILE,
                    section: en.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (eH || eB) && (0, a.jsxs)(w.default.Inner, {
              className: es.profilePanelConnections,
              children: [eH ? (0, a.jsx)(q.default, {
                className: es.mutualGuildsList,
                header: el.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == eD ? void 0 : eD.length
                }),
                isLoadingHeader: eb,
                onExpand: () => {
                  eC({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS"
                  })
                },
                children: eY
              }) : null, eB ? (0, a.jsx)(q.default, {
                className: i(es.mutualFriendsList, {
                  [es.mutualFriendsDivider]: eH
                }),
                header: el.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eO
                }),
                isLoadingHeader: eb,
                isLoadingContents: eU,
                loadingContentsCount: eO,
                onFocus: eZ,
                onHover: eZ,
                itemType: q.ListType.MutualFriendsList,
                onExpand: () => {
                  eC({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS"
                  })
                },
                children: ez
              }) : null]
            }), ep && (0, a.jsx)(w.default.Inner, {
              className: i(es.profilePanelConnections, es.appListThemedContainer),
              children: (0, a.jsxs)(q.default, {
                header: eK.length > 0 ? el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eK.length
                }) : el.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !em,
                isLoadingHeader: !1,
                itemType: q.ListType.AppsList,
                children: [eK, eE.length > 0 && (0, a.jsxs)("div", {
                  className: es.appButtonContainer,
                  children: [0 === eh.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: el.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(S.default, {
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
            }), ek && (0, a.jsx)("div", {
              className: es.giftButtonContainer,
              children: (0, a.jsx)(E.default, {
                className: es.giftButton,
                look: d.Button.Looks.FILLED,
                buttonText: el.default.Messages.GIFT_NITRO,
                buttonTextClassName: es.giftButtonCTA,
                color: d.Button.Colors.CUSTOM,
                giftRecipient: ed,
                subscriptionTier: ea.PremiumSubscriptionSKUs.TIER_2,
                premiumModalAnalyticsLocation: {
                  section: en.AnalyticsSections.DM_PROFILE
                },
                onClick: () => eC({
                  action: "GIFT_PREMIUM"
                })
              })
            })]
          })]
        })
      })
    }) : null
  }