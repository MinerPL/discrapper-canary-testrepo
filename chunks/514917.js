"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
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
  C = n("501768"),
  _ = n("373469"),
  I = n("271938"),
  T = n("42203"),
  v = n("957255"),
  x = n("824563"),
  N = n("102985"),
  A = n("697218"),
  M = n("800762"),
  R = n("387111"),
  j = n("158998"),
  L = n("337487"),
  y = n("756507"),
  O = n("713135"),
  P = n("765698"),
  D = n("506885"),
  b = n("217513"),
  U = n("893980"),
  w = n("58351"),
  F = n("430312"),
  V = n("840211"),
  k = n("789321"),
  H = n("627601"),
  B = n("10532"),
  G = n("915712"),
  W = n("369869"),
  Y = n("802279"),
  z = n("465215"),
  K = n("301998"),
  Z = n("491250"),
  X = n("453649"),
  Q = n("849674"),
  q = n("817080"),
  J = n("390413"),
  $ = n("104649"),
  ee = n("80615"),
  et = n("80531"),
  en = n("590456"),
  ea = n("49111"),
  el = n("646718"),
  es = n("782340"),
  ei = n("620310"),
  er = e => {
    var t;
    let {
      channel: n,
      showCall: s
    } = e, r = n.recipients[0], [er, eu] = l.useState(!1), eo = l.useRef(0), ed = (0, w.default)();
    (0, C.default)();
    let ec = (0, o.useStateFromStores)([A.default], () => A.default.getUser(r)),
      ef = null == ec ? void 0 : ec.isNonUserBot();
    u(null != ec, "Profile Panel: user cannot be undefined");
    let eh = (0, b.default)(ec.id),
      {
        installedIntegrations: em,
        fetched: ep,
        appsInGDMEnabled: eE,
        availableApplications: eg
      } = (0, g.usePrivateChannelIntegrationState)({
        channelId: n.id
      }),
      eS = !ed && !s,
      {
        UserProfileAnalyticsProvider: eC,
        trackUserProfileAction: e_
      } = (0, y.useUserProfileAnalyticsProvider)({
        layout: "DM_PANEL",
        newAnalyticsLocations: [h.default.PROFILE_PANEL],
        userId: ec.id,
        channelId: n.id
      }, eS),
      eI = (0, o.useStateFromStores)([M.default, T.default], () => {
        var e;
        return null != ec ? T.default.getChannel(null === (e = M.default.getVoiceStateForUser(ec.id)) || void 0 === e ? void 0 : e.channelId) : null
      }),
      {
        enableHangStatus: eT
      } = m.HangStatusExperiment.useExperiment({
        guildId: null == eI ? void 0 : eI.guild_id,
        location: "ActivityStatus"
      }, {
        autoTrackExposure: !1
      }),
      {
        activity: ev,
        customStatusActivity: ex,
        isApplicationStreaming: eN,
        isMobile: eA,
        status: eM,
        hangStatusActivity: eR,
        isHangStatusPrimaryActivity: ej
      } = (0, o.useStateFromStoresObject)([_.default, x.default, v.default], () => {
        var e;
        let t = null != _.default.getAnyStreamForUser(ec.id);
        return {
          activity: x.default.findActivity(ec.id, e => {
            let {
              type: n
            } = e;
            return t ? n === ea.ActivityTypes.PLAYING : n !== ea.ActivityTypes.CUSTOM_STATUS && n !== ea.ActivityTypes.HANG_STATUS
          }),
          customStatusActivity: x.default.findActivity(ec.id, e => {
            let {
              type: t
            } = e;
            return t === ea.ActivityTypes.CUSTOM_STATUS
          }),
          isApplicationStreaming: t,
          isMobile: x.default.isMobileOnline(ec.id),
          status: ef ? null : x.default.getStatus(ec.id),
          isHangStatusPrimaryActivity: (null === (e = x.default.findActivity(ec.id, e => {
            let {
              type: n
            } = e;
            return t ? n === ea.ActivityTypes.PLAYING : n !== ea.ActivityTypes.CUSTOM_STATUS
          })) || void 0 === e ? void 0 : e.type) === ea.ActivityTypes.HANG_STATUS,
          hangStatusActivity: eT && null != eI && v.default.can(ea.Permissions.CONNECT, eI) ? x.default.findActivity(ec.id, e => {
            let {
              type: t
            } = e;
            return t === ea.ActivityTypes.HANG_STATUS
          }) : null
        }
      }),
      eL = null != ev || null != eR || eN,
      ey = null !== (t = R.default.getNickname(null, n.id, ec)) && void 0 !== t ? t : j.default.getName(ec),
      eO = (0, o.useStateFromStores)([N.default], () => N.default.hidePersonalInformation),
      [eP, eD, eb, eU, ew] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.getMutualFriendsCount(ec.id), O.default.getMutualFriends(ec.id), O.default.getMutualGuilds(ec.id), O.default.isFetchingProfile(ec.id), O.default.isFetchingFriends(ec.id)]),
      eF = (0, X.useGetVoiceChannelInfoForVoiceActivitySection)(ec.id),
      eV = null != eF && !eN && !ej,
      {
        showVoiceActivityInProfile: ek
      } = P.VoiceActivityProfileExperiment.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eV && eS
      }),
      {
        enabled: eH
      } = p.default.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eS
      }),
      eB = !ec.bot && null != eb && eb.length > 0,
      eG = !ec.bot && null != eP && eP > 0,
      eW = (0, Q.useShouldShowUserPopoutCollectiblesUpsell)({
        popoutUser: ec,
        source: H.UserPopoutUpsellSource.PROFILE_PANEL
      }),
      eY = (0, f.default)();
    l.useEffect(() => {
      eo.current = Date.now()
    }, []), l.useEffect(() => {
      (0, D.default)(ec.id, ec.getAvatarURL(void 0, 80), {
        withMutualGuilds: !ec.bot,
        withMutualFriendsCount: !ec.bot
      })
    }, [ec]), l.useEffect(() => {
      null != eh && eS && (0, U.trackProfilePanelViewed)({
        displayProfile: eh,
        isMobile: eA,
        loadDurationMs: Date.now() - eo.current,
        activity: ev,
        customStatusActivity: ex,
        status: eM
      })
    }, [eh, eA, ev, ex, eM, eS]);
    let ez = null == eb ? void 0 : eb.map(e => (0, a.jsx)(ee.default, {
        connection: e,
        user: ec,
        theme: eY
      }, e.guild.id)),
      eK = null == eD ? void 0 : eD.map(e => (0, a.jsx)($.default, {
        connection: e,
        channelId: n.id
      }, e.key)),
      eZ = em.map(e => (0, a.jsx)(q.default, {
        channel: n,
        integration: e
      }, e.application.id)),
      eX = l.useCallback(() => {
        !ec.bot && !ew && null == eK && (0, c.fetchMutualFriends)(ec.id)
      }, [ew, eK, ec.id, ec.bot]),
      eQ = l.useCallback(() => eu(!0), []),
      eq = l.useCallback(() => eu(!1), []),
      eJ = (0, o.useStateFromStores)([I.default], () => I.default.getId()),
      e$ = ec.id === eJ,
      e0 = ec.bot || e$,
      {
        enabled: e1
      } = (0, L.useProfileMutualsExperiment)({
        autoTrackExposure: !0,
        location: h.default.PROFILE,
        disable: e0
      });
    return eS ? (0, a.jsx)(eC, {
      children: (0, a.jsx)("aside", {
        className: ei.profilePanel,
        onMouseEnter: eQ,
        onMouseLeave: eq,
        children: (0, a.jsxs)(F.default, {
          user: ec,
          profileType: en.UserProfileTypes.PANEL,
          useDefaultClientTheme: !0,
          children: [eW.shouldShow && (0, a.jsx)(k.default, {
            user: ec,
            upsellSource: H.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: eh,
            isInSidebar: !0,
            ...eW
          }, ec.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(et.default, {
              user: ec,
              displayProfile: eh,
              channel: n,
              animateAssets: er,
              forceShowPremiumBadge: er
            }), (0, a.jsxs)(F.default.Inner, {
              children: [(0, a.jsx)(Z.default, {
                user: ec,
                nickname: ey,
                pronouns: null == eh ? void 0 : eh.pronouns
              }), (0, a.jsx)(Y.default, {
                customStatusActivity: ex,
                animate: er
              }), (0, a.jsx)(B.default, {}), (0, a.jsx)(W.default, {
                bio: null == eh ? void 0 : eh.bio,
                hidePersonalInformation: eO,
                animateOnHover: !0,
                isHovering: er
              }), e1 && (0, a.jsx)(V.default, {
                className: ei.profileMutuals,
                user: ec
              }), !ec.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(z.default, {
                  userId: r
                }), (0, a.jsx)(B.default, {})]
              }), (0, a.jsx)(K.default, {
                user: ec,
                setNote: !1
              })]
            }), ek && eV ? (0, a.jsx)(F.default.Inner, {
              children: (0, a.jsx)(X.default, {
                voiceGuild: eF.voiceGuild,
                voiceChannel: eF.voiceChannel,
                color: ei.appButtonColor
              })
            }) : null, eL ? (0, a.jsx)(F.default.Inner, {
              children: (0, a.jsx)(G.default, {
                activity: null != ev ? ev : eR,
                user: ec,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: ea.AnalyticsPages.USER_PROFILE,
                    section: ea.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (eB || eG) && (0, a.jsxs)(F.default.Inner, {
              className: ei.profilePanelConnections,
              children: [eB ? (0, a.jsx)(J.default, {
                className: ei.mutualGuildsList,
                header: es.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == eb ? void 0 : eb.length
                }),
                isLoadingHeader: eU,
                onExpand: () => {
                  e_({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS"
                  })
                },
                children: ez
              }) : null, eG ? (0, a.jsx)(J.default, {
                className: i(ei.mutualFriendsList, {
                  [ei.mutualFriendsDivider]: eB
                }),
                header: es.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eP
                }),
                isLoadingHeader: eU,
                isLoadingContents: ew,
                loadingContentsCount: eP,
                onFocus: eX,
                onHover: eX,
                itemType: J.ListType.MutualFriendsList,
                onExpand: () => {
                  e_({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS"
                  })
                },
                children: eK
              }) : null]
            }), eE && (0, a.jsx)(F.default.Inner, {
              className: i(ei.profilePanelConnections, ei.appListThemedContainer),
              children: (0, a.jsxs)(J.default, {
                header: eZ.length > 0 ? es.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eZ.length
                }) : es.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !ep,
                isLoadingHeader: !1,
                itemType: J.ListType.AppsList,
                children: [eZ, eg.length > 0 && (0, a.jsxs)("div", {
                  className: ei.appButtonContainer,
                  children: [0 === em.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: es.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(S.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: ei.appButtonColor,
                    className: ei.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: es.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            }), eH && (0, a.jsx)("div", {
              className: ei.giftButtonContainer,
              children: (0, a.jsx)(E.default, {
                className: ei.giftButton,
                look: d.Button.Looks.FILLED,
                buttonText: es.default.Messages.GIFT_NITRO,
                buttonTextClassName: ei.giftButtonCTA,
                color: d.Button.Colors.CUSTOM,
                giftRecipient: ec,
                subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
                premiumModalAnalyticsLocation: {
                  section: ea.AnalyticsSections.DM_PROFILE
                },
                onClick: () => e_({
                  action: "GIFT_PREMIUM"
                })
              })
            })]
          })]
        })
      })
    }) : null
  }