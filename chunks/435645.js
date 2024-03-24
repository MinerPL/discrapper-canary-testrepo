"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eR
  }
});
var a = s("37983");
s("884691");
var n = s("759843"),
  l = s("151426"),
  i = s("669491"),
  r = s("77078"),
  o = s("913144"),
  d = s("437822"),
  u = s("152584"),
  c = s("79112"),
  S = s("534291"),
  E = s("545158"),
  T = s("788434"),
  f = s("311207"),
  _ = s("824357"),
  m = s("20606"),
  g = s("192845"),
  h = s("929423"),
  N = s("424562"),
  I = s("447845"),
  p = s("724001"),
  C = s("880731"),
  A = s("317654"),
  O = s("580758"),
  x = s("763417"),
  R = s("470022"),
  M = s("610109"),
  D = s("368694"),
  v = s("42887"),
  L = s("790618"),
  P = s("860957"),
  j = s("893011"),
  b = s("423487"),
  U = s("956089"),
  y = s("599110"),
  B = s("128259"),
  F = s("773336"),
  G = s("546605"),
  k = s("733051"),
  H = s("474775"),
  w = s("413622"),
  V = s("479290"),
  Y = s("825958"),
  K = s("20604"),
  W = s("836833"),
  z = s("625393"),
  Q = s("152891"),
  X = s("921600"),
  q = s("250972"),
  Z = s("89563"),
  J = s("41525"),
  $ = s("59574"),
  ee = s("602806"),
  et = s("462506"),
  es = s("500517"),
  ea = s("814953"),
  en = s("409862"),
  el = s("175077"),
  ei = s("688413"),
  er = s("477596"),
  eo = s("9047"),
  ed = s("656395"),
  eu = s("960261"),
  ec = s("699501"),
  eS = s("436112"),
  eE = s("194200"),
  eT = s("974926"),
  ef = s("905818"),
  e_ = s("819638"),
  em = s("114582"),
  eg = s("995350"),
  eh = s("409462"),
  eN = s("799458"),
  eI = s("227473"),
  ep = s("21811"),
  eC = s("49111"),
  eA = s("782340"),
  eO = s("528174");
let ex = eN.default;

function eR(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eR,
    impressionSource: eM,
    numOfPendingFamilyRequests: eD,
    isClipsBetaTagShowing: ev = !1
  } = e, eL = [{
    section: S.SectionTypes.HEADER,
    label: eA.default.Messages.USER_SETTINGS
  }, {
    section: eC.UserSettingsSections.ACCOUNT,
    label: eA.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eA.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: q.default
  }, {
    section: eC.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eA.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eA.default.Messages.USER_SETTINGS_PROFILES,
    element: R.default,
    newIndicator: (0, a.jsx)(U.PremiumBadge, {
      text: eA.default.Messages.NEW
    }),
    notice: {
      stores: [L.default, N.default],
      element: x.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eC.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eC.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eA.default.Messages.PRIVACY_AND_SAFETY,
    element: ef.default
  }, {
    section: eC.UserSettingsSections.FAMILY_CENTER,
    label: eA.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eA.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: en.default,
    badgeCount: eD,
    newIndicator: (0, a.jsx)(U.TextBadge, {
      text: eA.default.Messages.NEW,
      color: m.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eC.UserSettingsSections.AUTHORIZED_APPS,
    label: eA.default.Messages.AUTHORIZED_APPS,
    element: ee.default
  }, {
    section: eC.UserSettingsSections.SESSIONS,
    label: eA.default.Messages.AUTH_SESSIONS,
    ariaLabel: eA.default.Messages.AUTH_SESSIONS,
    element: e_.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => G.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eC.UserSettingsSections.CONNECTIONS,
    label: eA.default.Messages.CONNECTIONS,
    ariaLabel: eA.default.Messages.CONNECTIONS,
    element: es.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eM
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eC.UserSettingsSections.CLIPS,
    label: eA.default.Messages.CLIPS,
    ariaLabel: eA.default.Messages.CLIPS,
    icon: ev ? (0, a.jsx)(f.default, {}) : void 0,
    element: _.default
  }, {
    section: eC.UserSettingsSections.LOOTBOXES,
    label: eA.default.Messages.PACKAGES,
    ariaLabel: eA.default.Messages.PACKAGES,
    element: ec.default,
    icon: (0, a.jsx)(p.default, {
      width: 16,
      height: 16,
      color: "currentColor"
    }),
    predicate: () => I.default.getCurrentConfig({
      location: "user_settings"
    }, {
      autoTrackExposure: !1
    }).showMainEntrypoints
  }, {
    section: eC.UserSettingsSections.FRIEND_REQUESTS,
    label: eA.default.Messages.FRIEND_REQUESTS,
    element: el.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eA.default.Messages.BILLING_SETTINGS
  }, {
    section: eC.UserSettingsSections.PREMIUM,
    ariaLabel: eA.default.Messages.PREMIUM,
    label: eA.default.Messages.PREMIUM,
    element: Y.default,
    className: eO.premiumTab
  }, {
    section: eC.UserSettingsSections.GUILD_BOOSTING,
    label: eA.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eT.default
  }, {
    section: eC.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eA.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eA.default.Messages.SUBSCRIPTIONS_TITLE,
    element: O.default,
    icon: eR ? (0, a.jsx)(b.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eC.UserSettingsSections.INVENTORY,
    label: eA.default.Messages.GIFT_INVENTORY,
    element: eo.default,
    ariaLabel: eA.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eC.UserSettingsSections.BILLING,
    label: eA.default.Messages.BILLING,
    element: et.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eA.default.Messages.APP_SETTINGS
  }, {
    section: eC.UserSettingsSections.APPEARANCE,
    label: eA.default.Messages.APPEARANCE,
    ariaLabel: eA.default.Messages.APPEARANCE,
    element: $.default,
    newIndicator: (0, a.jsx)(U.PremiumBadge, {
      text: eA.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eC.UserSettingsSections.ACCESSIBILITY,
    label: eA.default.Messages.ACCESSIBILITY,
    element: X.default
  }, {
    section: eC.UserSettingsSections.VOICE,
    label: eA.default.Messages.VOICE_AND_VIDEO,
    element: ep.default,
    predicate: () => v.default.isSupported()
  }, {
    section: eC.UserSettingsSections.POGGERMODE,
    label: eA.default.Messages.POGGERMODE,
    ariaLabel: eA.default.Messages.POGGERMODE,
    element: A.default,
    predicate: () => C.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("226992"),
      className: eO.poggermodeIcon
    })
  }, {
    section: eC.UserSettingsSections.TEXT,
    label: eA.default.Messages.CHAT,
    element: eg.default
  }, {
    section: eC.UserSettingsSections.NOTIFICATIONS,
    label: eA.default.Messages.NOTIFICATIONS,
    element: eS.default
  }, {
    section: eC.UserSettingsSections.KEYBINDS,
    label: eA.default.Messages.KEYBINDS,
    element: ed.default
  }, {
    section: eC.UserSettingsSections.LOCALE,
    label: eA.default.Messages.LANGUAGE,
    element: eu.default
  }, {
    section: eC.UserSettingsSections.WINDOWS,
    label: eA.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eN.default,
    predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
  }, {
    section: eC.UserSettingsSections.LINUX,
    label: eA.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: ex,
    predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
  }, {
    section: eC.UserSettingsSections.STREAMER_MODE,
    label: eA.default.Messages.STREAMER_MODE,
    element: em.default
  }, {
    section: eC.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: W.default,
    predicate: () => M.default.isSupported() && k.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eC.UserSettingsSections.ADVANCED,
    label: eA.default.Messages.SETTINGS_ADVANCED,
    element: J.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eA.default.Messages.ACTIVITY_SETTINGS
  }, {
    section: eC.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eA.default.Messages.ACTIVITY_PRIVACY,
    element: Z.default
  }, {
    section: eC.UserSettingsSections.REGISTERED_GAMES,
    label: eA.default.Messages.REGISTERED_GAMES,
    element: ei.default,
    predicate: () => F.isPlatformEmbedded
  }, {
    section: eC.UserSettingsSections.OVERLAY,
    label: eA.default.Messages.OVERLAY,
    element: eE.default,
    predicate: () => P.default.isSupported() || !1
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eA.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      y.default.track(eC.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, B.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          y.default.track(eC.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eA.default.Messages.MERCHANDISE,
    ariaLabel: eA.default.Messages.MERCHANDISE
  }, {
    section: eC.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eA.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: er.default
  }, {
    section: eC.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eI.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: ea.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: w.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: V.default,
    predicate: () => D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: eh.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || D.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: z.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || D.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eA.default.Messages.LOGOUT,
        confirmText: eA.default.Messages.LOGOUT,
        cancelText: eA.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eA.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eA.default.Messages.LOGOUT,
    ariaLabel: eA.default.Messages.LOGOUT,
    icon: (0, a.jsx)(j.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: K.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: H.default
  }];
  return eL
}