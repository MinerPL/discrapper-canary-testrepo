"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eU
  }
}), s("653041");
var a = s("735250");
s("470079");
var n = s("990547"),
  l = s("524437"),
  i = s("692547"),
  r = s("481060"),
  o = s("570140"),
  d = s("893776"),
  u = s("809206"),
  c = s("230711"),
  S = s("493544"),
  E = s("782568"),
  T = s("163379"),
  f = s("703288"),
  _ = s("574755"),
  m = s("425799"),
  g = s("377171"),
  I = s("621628"),
  h = s("18438"),
  N = s("778825"),
  p = s("351780"),
  C = s("231765"),
  A = s("837741"),
  O = s("804545"),
  x = s("813732"),
  R = s("398140"),
  M = s("564344"),
  v = s("977156"),
  L = s("652380"),
  D = s("171156"),
  P = s("906467"),
  j = s("131951"),
  b = s("25990"),
  U = s("87086"),
  y = s("759231"),
  B = s("26290"),
  G = s("626135"),
  F = s("49012"),
  k = s("358085"),
  w = s("392735"),
  H = s("61160"),
  V = s("604227"),
  Y = s("38915"),
  W = s("498639"),
  K = s("748717"),
  z = s("419636"),
  Q = s("35426"),
  q = s("799071"),
  Z = s("601433"),
  X = s("154022"),
  J = s("393681"),
  $ = s("309739"),
  ee = s("64914"),
  et = s("501348"),
  es = s("795594"),
  ea = s("443702"),
  en = s("920914"),
  el = s("956699"),
  ei = s("54942"),
  er = s("15780"),
  eo = s("293389"),
  ed = s("88624"),
  eu = s("387747"),
  ec = s("389650"),
  eS = s("649157"),
  eE = s("593648"),
  eT = s("327885"),
  ef = s("595242"),
  e_ = s("301121"),
  em = s("207874"),
  eg = s("463153"),
  eI = s("36192"),
  eh = s("338345"),
  eN = s("400287"),
  ep = s("554042"),
  eC = s("200645"),
  eA = s("287490"),
  eO = s("168308"),
  ex = s("277329"),
  eR = s("674116"),
  eM = s("726985"),
  ev = s("981631"),
  eL = s("46140"),
  eD = s("689938"),
  eP = s("442691");
let ej = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), O.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eb = eC.default,
  eU = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: O,
      numOfPendingFamilyRequests: eU,
      isOverlaySupported: ey,
      isClipsBetaTagShowing: eB = !1,
      shouldMergeGameSettings: eG,
      isUserSettingsSearchEnabled: eF
    } = e;
    return Object.freeze({
      [eM.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: em.default,
        predicate: () => eF
      },
      [eM.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => eF
      },
      [eM.WebSetting.ACCOUNT]: {
        section: ev.UserSettingsSections.ACCOUNT,
        label: eD.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eD.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eM.WebSetting.GAMES]: {
        section: ev.UserSettingsSections.GAMES,
        label: eD.default.Messages.GAMES,
        ariaLabel: eD.default.Messages.GAMES,
        element: ex.default,
        predicate: () => eG
      },
      [eM.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: ev.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        label: eD.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eD.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eD.default.Messages.NEW
        }),
        notice: {
          stores: [b.default, N.default],
          element: R.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(ev.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eM.WebSetting.PRIVACY_AND_SAFETY]: {
        section: ev.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: eD.default.Messages.PRIVACY_AND_SAFETY,
        element: e_.default
      },
      [eM.WebSetting.FAMILY_CENTER]: {
        section: ev.UserSettingsSections.FAMILY_CENTER,
        label: eD.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eD.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: ei.default,
        badgeCount: eU,
        newIndicator: (0, a.jsx)(B.TextBadge, {
          text: eD.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eM.WebSetting.AUTHORIZED_APPS]: {
        section: ev.UserSettingsSections.AUTHORIZED_APPS,
        label: eD.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eM.WebSetting.SESSIONS]: {
        section: ev.UserSettingsSections.SESSIONS,
        label: eD.default.Messages.AUTH_SESSIONS,
        ariaLabel: eD.default.Messages.AUTH_SESSIONS,
        element: eI.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => w.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eM.WebSetting.CONNECTIONS]: {
        section: ev.UserSettingsSections.CONNECTIONS,
        label: eD.default.Messages.CONNECTIONS,
        ariaLabel: eD.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: O
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eM.WebSetting.CLIPS]: {
        section: ev.UserSettingsSections.CLIPS,
        label: eD.default.Messages.CLIPS,
        ariaLabel: eD.default.Messages.CLIPS,
        icon: eB ? (0, a.jsx)(f.default, {}) : void 0,
        element: _.default,
        predicate: () => !eG
      },
      [eM.WebSetting.FRIEND_REQUESTS]: {
        section: ev.UserSettingsSections.FRIEND_REQUESTS,
        label: eD.default.Messages.FRIEND_REQUESTS,
        element: er.default
      },
      [eM.WebSetting.PREMIUM]: {
        section: ev.UserSettingsSections.PREMIUM,
        ariaLabel: eD.default.Messages.PREMIUM,
        label: eD.default.Messages.PREMIUM,
        element: K.default,
        className: eP.premiumTab
      },
      [eM.WebSetting.GUILD_BOOSTING]: {
        section: ev.UserSettingsSections.GUILD_BOOSTING,
        label: eD.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [eM.WebSetting.SUBSCRIPTIONS]: {
        section: ev.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eD.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eD.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: A ? (0, a.jsx)(y.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eM.WebSetting.GIFT_INVENTORY]: {
        section: ev.UserSettingsSections.INVENTORY,
        label: eD.default.Messages.GIFT_INVENTORY,
        element: eu.default,
        ariaLabel: eD.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eM.WebSetting.BILLING]: {
        section: ev.UserSettingsSections.BILLING,
        label: eD.default.Messages.BILLING,
        element: ea.default
      },
      [eM.WebSetting.APPEARANCE]: {
        section: ev.UserSettingsSections.APPEARANCE,
        label: eD.default.Messages.APPEARANCE,
        ariaLabel: eD.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eD.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [eM.WebSetting.ACCESSIBILITY]: {
        section: ev.UserSettingsSections.ACCESSIBILITY,
        label: eD.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [eM.WebSetting.VOICE_AND_VIDEO]: {
        section: ev.UserSettingsSections.VOICE,
        label: eD.default.Messages.VOICE_AND_VIDEO,
        element: eR.default,
        predicate: () => j.default.isSupported()
      },
      [eM.WebSetting.POGGERMODE]: {
        section: ev.UserSettingsSections.POGGERMODE,
        label: eD.default.Messages.POGGERMODE,
        ariaLabel: eD.default.Messages.POGGERMODE,
        element: C.default,
        predicate: () => p.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eP.poggermodeIcon
        })
      },
      [eM.WebSetting.CHAT]: {
        section: ev.UserSettingsSections.TEXT,
        label: eD.default.Messages.CHAT,
        element: eN.default
      },
      [eM.WebSetting.NOTIFICATIONS]: {
        section: ev.UserSettingsSections.NOTIFICATIONS,
        label: eD.default.Messages.NOTIFICATIONS,
        element: eE.default
      },
      [eM.WebSetting.KEYBINDS]: {
        section: ev.UserSettingsSections.KEYBINDS,
        label: eD.default.Messages.KEYBINDS,
        element: ec.default
      },
      [eM.WebSetting.LANGUAGE]: {
        section: ev.UserSettingsSections.LOCALE,
        label: eD.default.Messages.LANGUAGE,
        element: eS.default
      },
      [eM.WebSetting.WINDOW_SETTINGS]: {
        section: ev.UserSettingsSections.WINDOWS,
        label: eD.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eC.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [eM.WebSetting.LINUX_SETTINGS]: {
        section: ev.UserSettingsSections.LINUX,
        label: eD.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eb,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [eM.WebSetting.STREAMER_MODE]: {
        section: ev.UserSettingsSections.STREAMER_MODE,
        label: eD.default.Messages.STREAMER_MODE,
        element: eh.default
      },
      [eM.WebSetting.SPEED_TEST]: {
        section: ev.UserSettingsSections.SPEED_TEST,
        label: "Speed Test",
        element: Q.default,
        predicate: () => D.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eM.WebSetting.SETTINGS_ADVANCED]: {
        section: ev.UserSettingsSections.ADVANCED,
        label: eD.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eM.WebSetting.ACTIVITY_PRIVACY]: {
        section: ev.UserSettingsSections.ACTIVITY_PRIVACY,
        label: eD.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eG
      },
      [eM.WebSetting.REGISTERED_GAMES]: {
        section: ev.UserSettingsSections.REGISTERED_GAMES,
        label: eD.default.Messages.REGISTERED_GAMES,
        element: eo.default,
        predicate: () => !eG && (0, eO.shouldShowRegisteredGamesSettings)()
      },
      [eM.WebSetting.OVERLAY]: {
        section: ev.UserSettingsSections.OVERLAY,
        label: eD.default.Messages.OVERLAY,
        element: eT.default,
        predicate: () => !eG && ey
      },
      [eM.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        label: eD.default.Messages.WHATS_NEW
      },
      [eM.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          G.default.track(ev.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              G.default.track(ev.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        label: eD.default.Messages.MERCHANDISE,
        ariaLabel: eD.default.Messages.MERCHANDISE
      },
      [eM.WebSetting.HYPESQUAD]: {
        section: ev.UserSettingsSections.HYPESQUAD_ONLINE,
        label: eD.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: ed.default
      },
      [eM.WebSetting.EXPERIMENTS]: {
        section: ev.UserSettingsSections.EXPERIMENTS,
        label: "Experiments",
        element: eA.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.DEVELOPER_OPTIONS]: {
        section: ev.UserSettingsSections.DEVELOPER_OPTIONS,
        label: "Developer Options",
        element: el.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.HOTSPOT_OPTIONS]: {
        section: ev.UserSettingsSections.HOTSPOT_OPTIONS,
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: ev.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: ev.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.TEXT_PLAYGROUND]: {
        section: ev.UserSettingsSections.TEXT_PLAYGROUND,
        label: "Text Playground",
        element: ep.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eM.WebSetting.TEXT_COMPONENTS]: {
        section: ev.UserSettingsSections.TEXT_COMPONENT,
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eM.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: ev.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        label: "Profile Effects Preview Tool",
        element: m.default,
        predicate: () => P.default.isDeveloper
      },
      [eM.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: ev.UserSettingsSections.QUEST_PREVIEW_TOOL,
        label: "Quest Preview Tool",
        element: L.default,
        predicate: () => (0, v.isQuestPreviewToolEnabled)({
          location: eL.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eM.WebSetting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eD.default.Messages.LOGOUT,
            confirmText: eD.default.Messages.LOGOUT,
            cancelText: eD.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eD.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eD.default.Messages.LOGOUT,
        ariaLabel: eD.default.Messages.LOGOUT,
        icon: (0, a.jsx)(U.default, {
          width: 16,
          height: 16
        })
      },
      [eM.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [eM.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: V.default
      }
    })
  }