"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ev
  }
});
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
  m = s("574755"),
  _ = s("425799"),
  g = s("377171"),
  h = s("621628"),
  I = s("18438"),
  N = s("778825"),
  p = s("351780"),
  C = s("231765"),
  A = s("813732"),
  O = s("398140"),
  x = s("564344"),
  R = s("977156"),
  M = s("652380"),
  v = s("171156"),
  D = s("906467"),
  L = s("131951"),
  P = s("25990"),
  j = s("87086"),
  b = s("759231"),
  U = s("26290"),
  y = s("626135"),
  B = s("49012"),
  F = s("358085"),
  G = s("392735"),
  k = s("61160"),
  w = s("604227"),
  H = s("38915"),
  V = s("498639"),
  Y = s("748717"),
  W = s("419636"),
  K = s("35426"),
  z = s("799071"),
  Q = s("601433"),
  q = s("154022"),
  Z = s("393681"),
  X = s("309739"),
  J = s("64914"),
  $ = s("501348"),
  ee = s("795594"),
  et = s("443702"),
  es = s("920914"),
  ea = s("956699"),
  en = s("54942"),
  el = s("15780"),
  ei = s("293389"),
  er = s("88624"),
  eo = s("387747"),
  ed = s("389650"),
  eu = s("649157"),
  ec = s("593648"),
  eS = s("327885"),
  eE = s("595242"),
  eT = s("301121"),
  ef = s("36192"),
  em = s("338345"),
  e_ = s("400287"),
  eg = s("554042"),
  eh = s("200645"),
  eI = s("287490"),
  eN = s("168308"),
  ep = s("277329"),
  eC = s("674116"),
  eA = s("981631"),
  eO = s("46140"),
  ex = s("689938"),
  eR = s("631719");
let eM = eh.default;

function ev(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: ev,
    impressionSource: eD,
    numOfPendingFamilyRequests: eL,
    isOverlaySupported: eP,
    isClipsBetaTagShowing: ej = !1,
    shouldMergeGameSettings: eb
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: ex.default.Messages.USER_SETTINGS
  }, {
    section: eA.UserSettingsSections.ACCOUNT,
    label: ex.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: ex.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Z.default
  }, {
    section: eA.UserSettingsSections.GAMES,
    label: ex.default.Messages.GAMES,
    ariaLabel: ex.default.Messages.GAMES,
    element: ep.default,
    predicate: () => eb
  }, {
    section: eA.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: ex.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: ex.default.Messages.USER_SETTINGS_PROFILES,
    element: x.default,
    newIndicator: (0, a.jsx)(U.PremiumBadge, {
      text: ex.default.Messages.NEW
    }),
    notice: {
      stores: [P.default, N.default],
      element: O.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, I.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eA.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eA.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: ex.default.Messages.PRIVACY_AND_SAFETY,
    element: eT.default
  }, {
    section: eA.UserSettingsSections.FAMILY_CENTER,
    label: ex.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: ex.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: en.default,
    badgeCount: eL,
    newIndicator: (0, a.jsx)(U.TextBadge, {
      text: ex.default.Messages.NEW,
      color: g.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eA.UserSettingsSections.AUTHORIZED_APPS,
    label: ex.default.Messages.AUTHORIZED_APPS,
    element: ee.default
  }, {
    section: eA.UserSettingsSections.SESSIONS,
    label: ex.default.Messages.AUTH_SESSIONS,
    ariaLabel: ex.default.Messages.AUTH_SESSIONS,
    element: ef.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => G.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eA.UserSettingsSections.CONNECTIONS,
    label: ex.default.Messages.CONNECTIONS,
    ariaLabel: ex.default.Messages.CONNECTIONS,
    element: es.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eD
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eA.UserSettingsSections.CLIPS,
    label: ex.default.Messages.CLIPS,
    ariaLabel: ex.default.Messages.CLIPS,
    icon: ej ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default,
    predicate: () => !eb
  }, {
    section: eA.UserSettingsSections.FRIEND_REQUESTS,
    label: ex.default.Messages.FRIEND_REQUESTS,
    element: el.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: ex.default.Messages.BILLING_SETTINGS
  }, {
    section: eA.UserSettingsSections.PREMIUM,
    ariaLabel: ex.default.Messages.PREMIUM,
    label: ex.default.Messages.PREMIUM,
    element: Y.default,
    className: eR.premiumTab
  }, {
    section: eA.UserSettingsSections.GUILD_BOOSTING,
    label: ex.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eE.default
  }, {
    section: eA.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: ex.default.Messages.SUBSCRIPTIONS_TITLE,
    label: ex.default.Messages.SUBSCRIPTIONS_TITLE,
    element: A.default,
    icon: ev ? (0, a.jsx)(b.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eA.UserSettingsSections.INVENTORY,
    label: ex.default.Messages.GIFT_INVENTORY,
    element: eo.default,
    ariaLabel: ex.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eA.UserSettingsSections.BILLING,
    label: ex.default.Messages.BILLING,
    element: et.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: ex.default.Messages.APP_SETTINGS
  }, {
    section: eA.UserSettingsSections.APPEARANCE,
    label: ex.default.Messages.APPEARANCE,
    ariaLabel: ex.default.Messages.APPEARANCE,
    element: $.default,
    newIndicator: (0, a.jsx)(U.PremiumBadge, {
      text: ex.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eA.UserSettingsSections.ACCESSIBILITY,
    label: ex.default.Messages.ACCESSIBILITY,
    element: q.default
  }, {
    section: eA.UserSettingsSections.VOICE,
    label: ex.default.Messages.VOICE_AND_VIDEO,
    element: eC.default,
    predicate: () => L.default.isSupported()
  }, {
    section: eA.UserSettingsSections.POGGERMODE,
    label: ex.default.Messages.POGGERMODE,
    ariaLabel: ex.default.Messages.POGGERMODE,
    element: C.default,
    predicate: () => p.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: eR.poggermodeIcon
    })
  }, {
    section: eA.UserSettingsSections.TEXT,
    label: ex.default.Messages.CHAT,
    element: e_.default
  }, {
    section: eA.UserSettingsSections.NOTIFICATIONS,
    label: ex.default.Messages.NOTIFICATIONS,
    element: ec.default
  }, {
    section: eA.UserSettingsSections.KEYBINDS,
    label: ex.default.Messages.KEYBINDS,
    element: ed.default
  }, {
    section: eA.UserSettingsSections.LOCALE,
    label: ex.default.Messages.LANGUAGE,
    element: eu.default
  }, {
    section: eA.UserSettingsSections.WINDOWS,
    label: ex.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eh.default,
    predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
  }, {
    section: eA.UserSettingsSections.LINUX,
    label: ex.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eM,
    predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
  }, {
    section: eA.UserSettingsSections.STREAMER_MODE,
    label: ex.default.Messages.STREAMER_MODE,
    element: em.default
  }, {
    section: eA.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: K.default,
    predicate: () => v.default.isSupported() && k.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eA.UserSettingsSections.ADVANCED,
    label: ex.default.Messages.SETTINGS_ADVANCED,
    element: J.default
  }, {
    section: S.SectionTypes.DIVIDER,
    predicate: () => !eb
  }, {
    section: S.SectionTypes.HEADER,
    label: ex.default.Messages.ACTIVITY_SETTINGS,
    predicate: () => !eb
  }, {
    section: eA.UserSettingsSections.ACTIVITY_PRIVACY,
    label: ex.default.Messages.ACTIVITY_PRIVACY,
    element: X.default,
    predicate: () => !eb
  }, {
    section: eA.UserSettingsSections.REGISTERED_GAMES,
    label: ex.default.Messages.REGISTERED_GAMES,
    element: ei.default,
    predicate: () => !eb && (0, eN.shouldShowRegisteredGamesSettings)()
  }, {
    section: eA.UserSettingsSections.OVERLAY,
    label: ex.default.Messages.OVERLAY,
    element: eS.default,
    predicate: () => !eb && eP
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: ex.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      y.default.track(eA.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, B.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          y.default.track(eA.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: ex.default.Messages.MERCHANDISE,
    ariaLabel: ex.default.Messages.MERCHANDISE
  }, {
    section: eA.UserSettingsSections.HYPESQUAD_ONLINE,
    label: ex.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: er.default
  }, {
    section: eA.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eI.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: ea.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: H.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: h.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: V.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: eg.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: z.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
    label: "Profile Effects Preview Tool",
    element: _.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eA.UserSettingsSections.QUEST_PREVIEW_TOOL,
    label: "Quest Preview Tool",
    element: M.default,
    predicate: () => (0, R.isQuestPreviewToolEnabled)({
      location: eO.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: ex.default.Messages.LOGOUT,
        confirmText: ex.default.Messages.LOGOUT,
        cancelText: ex.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: ex.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: ex.default.Messages.LOGOUT,
    ariaLabel: ex.default.Messages.LOGOUT,
    icon: (0, a.jsx)(j.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: W.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: w.default
  }]
}