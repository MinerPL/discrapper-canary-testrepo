"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eR
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
  _ = s("703288"),
  f = s("574755"),
  m = s("377171"),
  g = s("621628"),
  h = s("18438"),
  N = s("778825"),
  I = s("246208"),
  p = s("266983"),
  C = s("351780"),
  A = s("231765"),
  O = s("813732"),
  x = s("398140"),
  R = s("564344"),
  M = s("171156"),
  v = s("906467"),
  D = s("131951"),
  L = s("25990"),
  P = s("808506"),
  j = s("87086"),
  b = s("759231"),
  U = s("26290"),
  y = s("626135"),
  B = s("49012"),
  F = s("358085"),
  G = s("392735"),
  k = s("61160"),
  H = s("604227"),
  w = s("38915"),
  V = s("498639"),
  Y = s("748717"),
  K = s("419636"),
  W = s("35426"),
  z = s("799071"),
  Q = s("601433"),
  X = s("154022"),
  q = s("393681"),
  Z = s("309739"),
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
  ec = s("533193"),
  eS = s("593648"),
  eE = s("327885"),
  eT = s("595242"),
  e_ = s("301121"),
  ef = s("36192"),
  em = s("338345"),
  eg = s("400287"),
  eh = s("554042"),
  eN = s("200645"),
  eI = s("287490"),
  ep = s("674116"),
  eC = s("981631"),
  eA = s("689938"),
  eO = s("480261");
let ex = eN.default;

function eR(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eR,
    impressionSource: eM,
    numOfPendingFamilyRequests: ev,
    isClipsBetaTagShowing: eD = !1
  } = e;
  return [{
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
    element: e_.default
  }, {
    section: eC.UserSettingsSections.FAMILY_CENTER,
    label: eA.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eA.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: en.default,
    badgeCount: ev,
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
    element: ef.default,
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
    icon: eD ? (0, a.jsx)(_.default, {}) : void 0,
    element: f.default
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
    predicate: () => D.default.isSupported()
  }, {
    section: eC.UserSettingsSections.POGGERMODE,
    label: eA.default.Messages.POGGERMODE,
    ariaLabel: eA.default.Messages.POGGERMODE,
    element: A.default,
    predicate: () => C.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
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
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: ea.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: w.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: V.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: eh.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: z.default,
    predicate: () => (0, Q.shouldShowTextPlayground)() || v.default.isDeveloper
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
  }]
}