t.d(s, {
  i: function() {
return ev;
  }
});
var n = t(735250);
t(470079);
var a = t(990547),
  i = t(704215),
  r = t(692547),
  o = t(481060),
  l = t(570140),
  c = t(893776),
  d = t(809206),
  _ = t(230711),
  E = t(493544),
  u = t(579806),
  I = t(782568),
  T = t(758182),
  S = t(163379),
  N = t(703288),
  C = t(574755),
  m = t(377171),
  A = t(621628),
  g = t(18438),
  O = t(778825),
  h = t(665166),
  p = t(351780),
  R = t(231765),
  x = t(813732),
  M = t(398140),
  f = t(564344),
  D = t(746263),
  P = t(977156),
  L = t(652380),
  b = t(906467),
  Z = t(857192),
  v = t(131951),
  j = t(25990),
  B = t(626135),
  U = t(572004),
  G = t(49012),
  F = t(358085),
  y = t(998502),
  V = t(392735),
  Y = t(604227),
  w = t(38915),
  H = t(498639),
  k = t(748717),
  W = t(419636),
  K = t(799071),
  z = t(601433),
  Q = t(154022),
  X = t(393681),
  q = t(309739),
  J = t(64914),
  $ = t(501348),
  ee = t(795594),
  es = t(443702),
  et = t(920914),
  en = t(177508),
  ea = t(956699),
  ei = t(54942),
  er = t(15780),
  eo = t(293389),
  el = t(88624),
  ec = t(387747),
  ed = t(389650),
  e_ = t(649157),
  eE = t(593648),
  eu = t(327885),
  eI = t(595242),
  eT = t(301121),
  eS = t(463153),
  eN = t(36192),
  eC = t(338345),
  em = t(400287),
  eA = t(554042),
  eg = t(200645),
  eO = t(287490),
  eh = t(168308),
  ep = t(277329),
  eR = t(674116),
  ex = t(726985),
  eM = t(981631),
  ef = t(46140),
  eD = t(65154),
  eP = t(689938),
  eL = t(54048);
let eb = () => [
i.z.CLIENT_THEMES_SETTINGS_BADGE,
i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
  ],
  eZ = eg.Z,
  ev = e => {
let {
  unseenGiftCount: s,
  showPrepaidPaymentPastDueWarning: ev,
  impressionSource: ej,
  numOfPendingFamilyRequests: eB,
  isOverlaySupported: eU,
  isClipsBetaTagShowing: eG = !1,
  shouldMergeGameSettings: eF,
  isUserSettingsSearchEnabled: ey,
  isKeywordFilteringEnabled: eV,
  isStaff: eY,
  isInappropriateConversationWarningEnabled: ew,
  paymentsBlocked: eH,
  isEligibleForQuests: ek,
  showGiftNitro: eW,
  isStricterMessageRequestsEnabled: eK,
  hasLibraryApplication: ez,
  hasTOTPEnabled: eQ,
  canBroadcastActivity: eX,
  developerMode: eq
} = e;
return Object.freeze({
  [ex.s6.SEARCH_NO_RESULTS]: {
    section: E.ID.CUSTOM,
    element: eS.Z,
    predicate: () => ey
  },
  [ex.s6.ACCOUNT]: {
    section: eM.oAB.ACCOUNT,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
    label: eP.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eP.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: X.Z
  },
  [ex.s6.ACCOUNT_PROFILE]: {
    searchableTitles: [eP.Z.Messages.PROFILE],
    parent: ex.s6.ACCOUNT,
    section: eM.oAB.ACCOUNT
  },
  [ex.s6.ACCOUNT_DISPLAY_NAME]: {
    searchableTitles: [eP.Z.Messages.DISPLAY_NAME],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PROFILE
  },
  [ex.s6.ACCOUNT_PHONE_NUMBER]: {
    searchableTitles: [eP.Z.Messages.CHANGE_PHONE_NUMBER],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PROFILE
  },
  [ex.s6.ACCOUNT_USERNAME]: {
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PROFILE
  },
  [ex.s6.ACCOUNT_EMAIL]: {
    searchableTitles: [eP.Z.Messages.CHANGE_EMAIL],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PROFILE
  },
  [ex.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT
  },
  [ex.s6.ACCOUNT_CHANGE_PASSWORD]: {
    searchableTitles: [eP.Z.Messages.CHANGE_PASSWORD],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_CONFIRM_PASSWORD]: {
    searchableTitles: [eP.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
    searchableTitles: [eP.Z.Messages.SETTINGS_TWO_FA],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_ENABLE_2FA]: {
    searchableTitles: [eP.Z.Messages.TWO_FA_ENABLE],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => !eQ
  },
  [ex.s6.ACCOUNT_REMOVE_2FA]: {
    searchableTitles: [eP.Z.Messages.TWO_FA_REMOVE],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => eQ
  },
  [ex.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
    searchableTitles: [eP.Z.Messages.TWO_FA_BACKUP_CODE],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_SMS_BACKUP]: {
    searchableTitles: [eP.Z.Messages.MFA_SMS_AUTH],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_SECURITY_KEYS]: {
    searchableTitles: [eP.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
    section: eM.oAB.ACCOUNT,
    parent: ex.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [ex.s6.ACCOUNT_REMOVAL]: {
    section: eM.oAB.ACCOUNT,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
    parent: ex.s6.ACCOUNT
  },
  [ex.s6.ACCOUNT_DISABLE_ACCOUNT]: {
    section: eM.oAB.ACCOUNT,
    searchableTitles: [eP.Z.Messages.DISABLE_ACCOUNT],
    parent: ex.s6.ACCOUNT_REMOVAL
  },
  [ex.s6.ACCOUNT_DELETE_ACCOUNT]: {
    section: eM.oAB.ACCOUNT,
    searchableTitles: [eP.Z.Messages.DELETE_ACCOUNT],
    parent: ex.s6.ACCOUNT_DISABLE_ACCOUNT
  },
  [ex.s6.GAMES]: {
    section: eM.oAB.GAMES,
    searchableTitles: [eP.Z.Messages.GAMES],
    label: eP.Z.Messages.GAMES,
    ariaLabel: eP.Z.Messages.GAMES,
    element: ep.Z,
    predicate: () => eF
  },
  [ex.s6.GAMES_MY_GAMES]: {
    section: eM.oAB.GAMES,
    searchableTitles: [eP.Z.Messages.MY_GAMES],
    parent: ex.s6.GAMES
  },
  [ex.s6.GAMES_CLIPS]: {
    section: eM.oAB.GAMES,
    searchableTitles: [eP.Z.Messages.CLIPS],
    parent: ex.s6.GAMES
  },
  [ex.s6.GAMES_OVERLAY]: {
    section: eM.oAB.GAMES,
    searchableTitles: [eP.Z.Messages.OVERLAY],
    parent: ex.s6.GAMES
  },
  [ex.s6.GAMES_ACTIVITY_PRIVACY]: {
    section: eM.oAB.GAMES,
    searchableTitles: [eP.Z.Messages.ACTIVITY_PRIVACY],
    parent: ex.s6.GAMES
  },
  [ex.s6.PROFILE_CUSTOMIZATION]: {
    section: eM.oAB.PROFILE_CUSTOMIZATION,
    type: E.bT.WIDE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_PROFILES],
    label: eP.Z.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eP.Z.Messages.USER_SETTINGS_PROFILES,
    element: f.Z,
    newIndicator: (0, n.jsx)(o.PremiumBadge, {
      text: eP.Z.Messages.NEW
    }),
    notice: {
      stores: [
        j.Z,
        O.Z
      ],
      element: M.Z
    },
    onSettingsClose: () => {
      l.Z.wait(() => {
        (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eM.oAB.PROFILE_CUSTOMIZATION);
      });
    }
  },
  [ex.s6.PROFILE_DISPLAY_NAME]: {
    section: eM.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eP.Z.Messages.DISPLAY_NAME],
    parent: ex.s6.PROFILE_CUSTOMIZATION
  },
  [ex.s6.PROFILE_USER_PROFILE]: {
    section: eM.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eP.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
    parent: ex.s6.PROFILE_CUSTOMIZATION
  },
  [ex.s6.PROFILE_SERVER_PROFILES]: {
    section: eM.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eP.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
    parent: ex.s6.PROFILE_CUSTOMIZATION
  },
  [ex.s6.PRIVACY_AND_SAFETY]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    label: eP.Z.Messages.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_AND_SAFETY],
    ariaLabel: eP.Z.Messages.PRIVACY_AND_SAFETY,
    element: eT.Z
  },
  [ex.s6.PRIVACY_USER_SETTINGS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_AND_SAFETY],
    parent: ex.s6.PRIVACY_AND_SAFETY
  },
  [ex.s6.PRIVACY_SENSITIVE_MEDIA]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eP.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
      eP.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER,
      eP.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR,
      eP.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT,
      eP.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT
    ],
    parent: ex.s6.PRIVACY_USER_SETTINGS
  },
  [ex.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eP.Z.Messages.SETTINGS_DM_SPAM_FILTER,
      eP.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES,
      eP.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX
    ],
    parent: ex.s6.PRIVACY_USER_SETTINGS
  },
  [ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eP.Z.Messages.USER_DM_SETTINGS,
      eP.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES,
      eP.Z.Messages.USER_DM_SEARCH_TERM_DM
    ],
    parent: ex.s6.PRIVACY_USER_SETTINGS
  },
  [ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.NEW_GUILDS_DM_ALLOWED],
    parent: ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
    parent: ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
    parent: ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
    predicate: () => !eK
  },
  [ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.NSFW_DM_COMMANDS_HEADER],
    parent: ex.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [ex.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.SERVER_SETTINGS],
    parent: ex.s6.PRIVACY_AND_SAFETY
  },
  [ex.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
    parent: ex.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [ex.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
    parent: ex.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
    predicate: () => !eK
  },
  [ex.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
    parent: ex.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [ex.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
    parent: ex.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [ex.s6.PRIVACY_DATA_PRIVACY]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
    parent: ex.s6.PRIVACY_USER_SETTINGS
  },
  [ex.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
    parent: ex.s6.PRIVACY_DATA_PRIVACY
  },
  [ex.s6.PRIVACY_DATA_PERSONALIZE]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
    parent: ex.s6.PRIVACY_DATA_PRIVACY
  },
  [ex.s6.PRIVACY_DATA_QUESTS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
    parent: ex.s6.PRIVACY_DATA_PRIVACY
  },
  [ex.s6.PRIVACY_DATA_BASIC_SERVICE]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    parent: ex.s6.PRIVACY_DATA_PRIVACY,
    searchableTitles: [ex.CF]
  },
  [ex.s6.PRIVACY_DATA_REQUEST]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
    parent: ex.s6.PRIVACY_DATA_PRIVACY
  },
  [ex.s6.PRIVACY_STAFF_ONLY]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
    parent: ex.s6.PRIVACY_USER_SETTINGS,
    predicate: () => eY
  },
  [ex.s6.PRIVACY_KEYWORD_FILTER]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eP.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
      eP.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD
    ],
    parent: ex.s6.PRIVACY_USER_SETTINGS,
    predicate: () => eV
  },
  [ex.s6.PRIVACY_TERMS_POLICY]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    parent: ex.s6.PRIVACY_USER_SETTINGS,
    searchableTitles: [ex.CF]
  },
  [ex.s6.PRIVACY_SAFETY_ALERTS]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
    parent: ex.s6.PRIVACY_USER_SETTINGS,
    predicate: () => ew
  },
  [ex.s6.PRIVACY_ACCOUNT_STANDING]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
    parent: ex.s6.PRIVACY_AND_SAFETY
  },
  [ex.s6.PRIVACY_ENCRYPTION]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eP.Z.Messages.E2EE_ENCRYPTION,
      eP.Z.Messages.E2EE_END_TO_END_ENCRYPTION
    ],
    parent: ex.s6.PRIVACY_AND_SAFETY
  },
  [ex.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.E2EE_VERIFICATION_CODES],
    parent: ex.s6.PRIVACY_ENCRYPTION
  },
  [ex.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
    section: eM.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eP.Z.Messages.E2EE_VERIFIED_DEVICES],
    parent: ex.s6.PRIVACY_ENCRYPTION
  },
  [ex.s6.PRIVACY_FAMILY_CENTER]: {
    section: eM.oAB.FAMILY_CENTER,
    searchableTitles: [eP.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
    label: eP.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eP.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: ei.Z,
    badgeCount: eB,
    newIndicator: (0, n.jsx)(o.TextBadge, {
      text: eP.Z.Messages.NEW,
      color: m.Z.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
  },
  [ex.s6.AUTHORIZED_APPS]: {
    section: eM.oAB.AUTHORIZED_APPS,
    searchableTitles: [eP.Z.Messages.AUTHORIZED_APPS],
    label: eP.Z.Messages.AUTHORIZED_APPS,
    element: ee.Z
  },
  [ex.s6.SESSIONS]: {
    section: eM.oAB.SESSIONS,
    searchableTitles: [eP.Z.Messages.AUTH_SESSIONS],
    label: eP.Z.Messages.AUTH_SESSIONS,
    ariaLabel: eP.Z.Messages.AUTH_SESSIONS,
    element: eN.Z,
    newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
    predicate: () => V.Z.getCurrentConfig({
      location: '9f7d84_1'
    }, {
      autoTrackExposure: !1
    }).showSettings
  },
  [ex.s6.CONNECTIONS]: {
    section: eM.oAB.CONNECTIONS,
    searchableTitles: [eP.Z.Messages.CONNECTIONS],
    label: eP.Z.Messages.CONNECTIONS,
    ariaLabel: eP.Z.Messages.CONNECTIONS,
    element: et.Z,
    impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: ej
    },
    newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
  },
  [ex.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
    section: eM.oAB.CONNECTIONS,
    searchableTitles: [eP.Z.Messages.CONNECTED_ACCOUNTS],
    parent: ex.s6.CONNECTIONS,
    element: et.Z
  },
  [ex.s6.CLIPS]: {
    section: eM.oAB.CLIPS,
    searchableTitles: [eP.Z.Messages.CLIPS],
    label: eP.Z.Messages.CLIPS,
    ariaLabel: eP.Z.Messages.CLIPS,
    icon: eG ? (0, n.jsx)(N.Z, {}) : void 0,
    element: C.Z,
    predicate: () => !eF
  },
  [ex.s6.FRIEND_REQUESTS]: {
    section: eM.oAB.FRIEND_REQUESTS,
    searchableTitles: [eP.Z.Messages.FRIEND_REQUESTS],
    label: eP.Z.Messages.FRIEND_REQUESTS,
    element: er.Z
  },
  [ex.s6.PREMIUM]: {
    section: eM.oAB.PREMIUM,
    ariaLabel: eP.Z.Messages.PREMIUM,
    searchableTitles: [eP.Z.Messages.PREMIUM],
    label: eP.Z.Messages.PREMIUM,
    element: k.Z,
    className: eL.premiumTab
  },
  [ex.s6.GUILD_BOOSTING]: {
    section: eM.oAB.GUILD_BOOSTING,
    searchableTitles: [eP.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
    label: eP.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eI.Z
  },
  [ex.s6.SUBSCRIPTIONS]: {
    section: eM.oAB.SUBSCRIPTIONS,
    ariaLabel: eP.Z.Messages.SUBSCRIPTIONS_TITLE,
    searchableTitles: [eP.Z.Messages.SUBSCRIPTIONS_TITLE],
    label: eP.Z.Messages.SUBSCRIPTIONS_TITLE,
    element: x.Z,
    icon: ev ? (0, n.jsx)(o.CircleWarningIcon, {
      size: 'xs',
      color: r.Z.unsafe_rawColors.YELLOW_300.css
    }) : null
  },
  [ex.s6.SUBSCRIPTIONS_CREDITS]: {
    section: eM.oAB.SUBSCRIPTIONS,
    searchableTitles: [eP.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
    parent: ex.s6.SUBSCRIPTIONS
  },
  [ex.s6.GIFT_INVENTORY]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.GIFT_INVENTORY],
    label: eP.Z.Messages.GIFT_INVENTORY,
    element: ec.Z,
    ariaLabel: eP.Z.Messages.GIFT_INVENTORY,
    badgeCount: s
  },
  [ex.s6.GIFT_NITRO]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.GIFT_NITRO],
    parent: ex.s6.GIFT_INVENTORY,
    predicate: () => !eH && eW
  },
  [ex.s6.GIFT_CODE_REDEMPTION]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
    parent: ex.s6.GIFT_INVENTORY,
    predicate: () => !eH
  },
  [ex.s6.GIFT_INVENTORY_QUESTS]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.QUESTS],
    parent: ex.s6.GIFT_INVENTORY,
    predicate: () => ek
  },
  [ex.s6.GIFT_INVENTORY_LIST]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
    parent: ex.s6.GIFT_INVENTORY,
    predicate: () => !eH
  },
  [ex.s6.GIFT_BLOCKED_PAYMENTS]: {
    section: eM.oAB.INVENTORY,
    searchableTitles: [eP.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
    parent: ex.s6.GIFT_INVENTORY,
    predicate: () => eH
  },
  [ex.s6.BILLING]: {
    section: eM.oAB.BILLING,
    searchableTitles: [eP.Z.Messages.BILLING],
    label: eP.Z.Messages.BILLING,
    ariaLabel: eP.Z.Messages.BILLING,
    element: es.Z
  },
  [ex.s6.BILLING_PAYMENT_METHODS]: {
    section: eM.oAB.BILLING,
    searchableTitles: [eP.Z.Messages.BILLING_PAYMENT_SOURCES],
    parent: ex.s6.BILLING
  },
  [ex.s6.BILLING_TRANSACTION_HISTORY]: {
    section: eM.oAB.BILLING,
    searchableTitles: [eP.Z.Messages.BILLING_PAYMENT_HISTORY],
    parent: ex.s6.BILLING
  },
  [ex.s6.APPEARANCE]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.APPEARANCE],
    label: eP.Z.Messages.APPEARANCE,
    ariaLabel: eP.Z.Messages.APPEARANCE,
    element: $.Z,
    newIndicator: (0, n.jsx)(o.PremiumBadge, {
      text: eP.Z.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: eb()
  },
  [ex.s6.APPEARANCE_THEME]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.THEME],
    parent: ex.s6.APPEARANCE
  },
  [ex.s6.APPEARANCE_COLOR]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
    parent: ex.s6.APPEARANCE_THEME
  },
  [ex.s6.APPEARANCE_ICON]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
    parent: ex.s6.APPEARANCE_THEME
  },
  [ex.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
    parent: ex.s6.APPEARANCE
  },
  [ex.s6.APPEARANCE_SCALING_SPACING]: {
    section: eM.oAB.APPEARANCE,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
    parent: ex.s6.APPEARANCE
  },
  [ex.s6.ACCESSIBILITY]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY],
    label: eP.Z.Messages.ACCESSIBILITY,
    ariaLabel: eP.Z.Messages.ACCESSIBILITY,
    element: Q.Z
  },
  [ex.s6.ACCESSIBILITY_SATURATION]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_ROLE_STYLE]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_TAGS]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_CONTRAST]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_REDUCED_MOTION]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_STICKERS]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_MESSAGES]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
    section: eM.oAB.ACCESSIBILITY,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_TTS],
    parent: ex.s6.ACCESSIBILITY
  },
  [ex.s6.VOICE_AND_VIDEO]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.VOICE_AND_VIDEO],
    label: eP.Z.Messages.VOICE_AND_VIDEO,
    ariaLabel: eP.Z.Messages.VOICE_AND_VIDEO,
    element: eR.Z,
    predicate: () => v.Z.isSupported()
  },
  [ex.s6.VOICE_AND_VIDEO_DEVICES]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.FORM_LABEL_INPUT_DEVICE,
      eP.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
      eP.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      eP.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      eP.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.FORM_LABEL_INPUT_VOLUME,
      eP.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
      eP.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      eP.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      eP.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_MIC_TEST]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      eP.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.FORM_LABEL_INPUT_MODE,
      eP.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      eP.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_SOUNDS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.SOUNDBOARD],
    parent: ex.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [ex.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: ex.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [ex.s6.VOICE_AND_VIDEO_VIDEO]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.VIDEO_SETTINGS],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
    parent: ex.s6.VOICE_AND_VIDEO_VIDEO,
    predicate: () => v.Z.supports(eD.AN.VIDEO)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.SETTINGS_ADVANCED],
    parent: ex.s6.VOICE_AND_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => v.Z.supports(eD.AN.OPEN_H264)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.EXPERIMENTAL_ENCODERS],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => 'stable' !== y.ZP.releaseChannel && v.Z.isExperimentalEncodersSupported()
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.ECHO_CANCELLATION],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.SIDECHAIN_COMPRESSION],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
    section: eM.oAB.VOICE,
    searchableTitles: [
      eP.Z.Messages.NOISE_SUPPRESSION,
      eP.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP
    ],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => v.Z.isNoiseSuppressionSupported()
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.ADVANCED_VOICE_ACTIVITY],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => v.Z.isAdvancedVoiceActivitySupported()
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.AUTOMATIC_GAIN_CONTROL],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => v.Z.isAutomaticGainControlSupported()
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_QOS],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => v.Z.supports(eD.AN.QOS)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_ATTENUATION],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => v.Z.supports(eD.AN.ATTENUATION)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_SUBSYSTEM],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => v.Z.supports(eD.AN.LEGACY_AUDIO_SUBSYSTEM) || v.Z.supports(eD.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => F.isPlatformEmbedded
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_DEBUG],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => F.isPlatformEmbedded && v.Z.supports(eD.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => v.Z.isAecDumpSupported()
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => ('canary' === y.ZP.releaseChannel || 'development' === y.ZP.releaseChannel) && eY && v.Z.supports(eD.AN.CONNECTION_REPLAY)
  },
  [ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
  },
  [ex.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
    section: eM.oAB.VOICE,
    searchableTitles: [eP.Z.Messages.RESET_VOICE_SETTINGS],
    parent: ex.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [ex.s6.POGGERMODE]: {
    section: eM.oAB.POGGERMODE,
    searchableTitles: [eP.Z.Messages.POGGERMODE],
    label: eP.Z.Messages.POGGERMODE,
    ariaLabel: eP.Z.Messages.POGGERMODE,
    element: R.Z,
    predicate: () => p.Z.settingsVisible,
    icon: (0, n.jsx)('img', {
      alt: '',
      src: t(348621),
      className: eL.poggermodeIcon
    })
  },
  [ex.s6.CHAT]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.CHAT],
    label: eP.Z.Messages.CHAT,
    ariaLabel: eP.Z.Messages.CHAT,
    element: em.Z
  },
  [ex.s6.CHAT_INLINE_MEDIA]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.INLINE_MEDIA_LABEL],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_INLINE_MEDIA_LINKS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.INLINE_EMBED_MEDIA],
    parent: ex.s6.CHAT_INLINE_MEDIA
  },
  [ex.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.INLINE_ATTACHMENT_MEDIA],
    parent: ex.s6.CHAT_INLINE_MEDIA
  },
  [ex.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.IMAGE_DESCRIPTION],
    parent: ex.s6.CHAT_INLINE_MEDIA
  },
  [ex.s6.CHAT_EMBEDS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.RENDER_EMBEDS_LABEL],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.RENDER_EMBEDS],
    parent: ex.s6.CHAT_EMBEDS
  },
  [ex.s6.CHAT_EMOJI]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.EMOJI],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_EMOJI_REACTIONS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.RENDER_REACTIONS],
    parent: ex.s6.CHAT_EMOJI
  },
  [ex.s6.CHAT_EMOJI_EMOTICONS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.CONVERT_EMOTICONS],
    parent: ex.s6.CHAT_EMOJI
  },
  [ex.s6.CHAT_STICKERS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_STICKERS_SUGGESTIONS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.AUTO_SUGGEST_STICKERS],
    parent: ex.s6.CHAT_STICKERS
  },
  [ex.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
    parent: ex.s6.CHAT_STICKERS
  },
  [ex.s6.CHAT_TEXT_BOX]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_TEXT_BOX_PREVIEW]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
    parent: ex.s6.CHAT_TEXT_BOX
  },
  [ex.s6.CHAT_THREADS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.THREADS],
    parent: ex.s6.CHAT
  },
  [ex.s6.CHAT_THREADS_SPLIT_VIEW]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
    parent: ex.s6.CHAT_THREADS
  },
  [ex.s6.CHAT_SPOILERS]: {
    section: eM.oAB.TEXT,
    searchableTitles: [eP.Z.Messages.SHOW_SPOILER_CONTENT],
    parent: ex.s6.CHAT
  },
  [ex.s6.NOTIFICATIONS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.NOTIFICATIONS],
    label: eP.Z.Messages.NOTIFICATIONS,
    ariaLabel: eP.Z.Messages.NOTIFICATIONS,
    element: eE.Z
  },
  [ex.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: ['Mention on all messages'],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
    parent: ex.s6.NOTIFICATIONS,
    predicate: () => (0, F.isWindows)()
  },
  [ex.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_NEW_SETTINGS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
    parent: ex.s6.NOTIFICATIONS,
    predicate: () => !1
  },
  [ex.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: ['Restore most recent snapshot'],
    parent: ex.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [ex.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: ['Launch Migration'],
    parent: ex.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [ex.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: ['Toggle new system on/off'],
    parent: ex.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [ex.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_TTS],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
    parent: ex.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [ex.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
    parent: ex.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [ex.s6.NOTIFICATIONS_SOUNDS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.SOUNDS],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_EMAILS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
    parent: ex.s6.NOTIFICATIONS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_TIPS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
    section: eM.oAB.NOTIFICATIONS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
    parent: ex.s6.NOTIFICATIONS_EMAILS
  },
  [ex.s6.KEYBINDS]: {
    section: eM.oAB.KEYBINDS,
    searchableTitles: [eP.Z.Messages.KEYBINDS],
    label: eP.Z.Messages.KEYBINDS,
    element: ed.Z
  },
  [ex.s6.LANGUAGE]: {
    section: eM.oAB.LOCALE,
    searchableTitles: [eP.Z.Messages.LANGUAGE],
    label: eP.Z.Messages.LANGUAGE,
    element: e_.Z
  },
  [ex.s6.WINDOW_SETTINGS]: {
    section: eM.oAB.WINDOWS,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
    label: eP.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eg.Z,
    predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
  },
  [ex.s6.LINUX_SETTINGS]: {
    section: eM.oAB.LINUX,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
    label: eP.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eZ,
    predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
  },
  [ex.s6.STREAMER_MODE]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.STREAMER_MODE],
    label: eP.Z.Messages.STREAMER_MODE,
    ariaLabel: eP.Z.Messages.STREAMER_MODE,
    element: eC.Z
  },
  [ex.s6.STREAMER_MODE_INTEGRATIONS]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_ENABLE]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
    parent: ex.s6.STREAMER_MODE
  },
  [ex.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
    section: eM.oAB.STREAMER_MODE,
    searchableTitles: [eP.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
    parent: ex.s6.STREAMER_MODE,
    predicate: () => {
      var e, s, t;
      return null !== (t = null === u.Z || void 0 === u.Z ? void 0 : null === (s = u.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
    }
  },
  [ex.s6.SETTINGS_ADVANCED]: {
    section: eM.oAB.ADVANCED,
    searchableTitles: [eP.Z.Messages.SETTINGS_ADVANCED],
    label: eP.Z.Messages.SETTINGS_ADVANCED,
    ariaLabel: eP.Z.Messages.SETTINGS_ADVANCED,
    element: J.Z
  },
  [ex.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
    section: eM.oAB.ADVANCED,
    searchableTitles: [eP.Z.Messages.DEVELOPER_MODE],
    parent: ex.s6.SETTINGS_ADVANCED,
    predicate: () => U.wS
  },
  [ex.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
    section: eM.oAB.ADVANCED,
    searchableTitles: [eP.Z.Messages.HARDWARE_ACCELERATION],
    parent: ex.s6.SETTINGS_ADVANCED,
    predicate: () => F.isPlatformEmbedded
  },
  [ex.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
    section: eM.oAB.ADVANCED,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
    parent: ex.s6.SETTINGS_ADVANCED,
    predicate: () => ez
  },
  [ex.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
    section: eM.oAB.ADVANCED,
    searchableTitles: [eP.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
    parent: ex.s6.SETTINGS_ADVANCED,
    predicate: () => eq
  },
  [ex.s6.ACTIVITY_PRIVACY]: {
    section: eM.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eP.Z.Messages.ACTIVITY_PRIVACY],
    label: eP.Z.Messages.ACTIVITY_PRIVACY,
    ariaLabel: eP.Z.Messages.ACTIVITY_PRIVACY,
    element: q.Z,
    predicate: () => !eF
  },
  [ex.s6.ACTIVITY_PRIVACY_STATUS]: {
    section: eF ? eM.oAB.GAMES : eM.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eP.Z.Messages.ACTIVITY_STATUS],
    parent: eF ? ex.s6.GAMES_ACTIVITY_PRIVACY : ex.s6.ACTIVITY_PRIVACY
  },
  [ex.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
    section: eF ? eM.oAB.GAMES : eM.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eP.Z.Messages.ACTIVITY_PARTY_PRIVACY],
    parent: eF ? ex.s6.GAMES_ACTIVITY_PRIVACY : ex.s6.ACTIVITY_PRIVACY
  },
  [ex.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
    section: eF ? eM.oAB.GAMES : eM.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eP.Z.Messages.BROADCASTING_SETTINGS],
    parent: eF ? ex.s6.GAMES_ACTIVITY_PRIVACY : ex.s6.ACTIVITY_PRIVACY,
    predicate: () => eX
  },
  [ex.s6.ACTIVITY_PRIVACY_TOS]: {
    section: eF ? eM.oAB.GAMES : eM.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [ex.CF],
    parent: eF ? ex.s6.GAMES_ACTIVITY_PRIVACY : ex.s6.ACTIVITY_PRIVACY
  },
  [ex.s6.REGISTERED_GAMES]: {
    section: eM.oAB.REGISTERED_GAMES,
    searchableTitles: [eP.Z.Messages.REGISTERED_GAMES],
    label: eP.Z.Messages.REGISTERED_GAMES,
    element: eo.Z,
    predicate: () => !eF && (0, eh.Jw)()
  },
  [ex.s6.OVERLAY]: {
    section: eM.oAB.OVERLAY,
    searchableTitles: [eP.Z.Messages.OVERLAY],
    label: eP.Z.Messages.OVERLAY,
    element: eu.Z,
    predicate: () => !eF && eU
  },
  [ex.s6.CHANGELOG]: {
    section: 'changelog',
    onClick: () => (0, S.Z)(!0),
    searchableTitles: [eP.Z.Messages.WHATS_NEW],
    label: eP.Z.Messages.WHATS_NEW
  },
  [ex.s6.MERCHANDISE]: {
    section: 'merchandise',
    onClick: () => {
      let e = 'https://discordmerch.com/Dsktopprm';
      B.default.track(eM.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, G.q)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          B.default.track(eM.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, I.Z)(e);
        }
      });
    },
    searchableTitles: [eP.Z.Messages.MERCHANDISE],
    label: eP.Z.Messages.MERCHANDISE,
    ariaLabel: eP.Z.Messages.MERCHANDISE
  },
  [ex.s6.HYPESQUAD]: {
    section: eM.oAB.HYPESQUAD_ONLINE,
    searchableTitles: [eP.Z.Messages.USER_SETTINGS_HYPESQUAD],
    label: eP.Z.Messages.USER_SETTINGS_HYPESQUAD,
    element: el.Z
  },
  [ex.s6.EXPERIMENTS]: {
    section: eM.oAB.EXPERIMENTS,
    searchableTitles: ['Experiments'],
    label: 'Experiments',
    element: eO.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options'],
    label: 'Developer Options',
    ariaLabel: 'Developer Options',
    element: ea.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_FLAGS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options Flags'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Tracing Requests'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Forced Canary'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Gateway Events To Console'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Rpc Events Commands'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Events Logging'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Source Maps'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Debugger View'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Idle Status Indicator'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eY && b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Accessibility Auditing'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => !1
  },
  [ex.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['CSS Debugging'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eY && b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Layout Debugging'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eY && b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Layout Debugging'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eY && b.Z.isDeveloper && Z.default.layoutDebuggingEnabled
  },
  [ex.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Preview Unpublished Collections'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eY && b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side'],
    parent: ex.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Premium Type'],
    parent: ex.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Account Created Data'],
    parent: ex.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Open Overlay'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Reset Socket'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Clear Caches'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => T.q && b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_CRASHES]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Crashes'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Survey Override'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Changelog Override'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
    section: eM.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Build Override'],
    parent: ex.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.HOTSPOT_OPTIONS]: {
    section: eM.oAB.HOTSPOT_OPTIONS,
    searchableTitles: ['Hotspot Options'],
    label: 'Hotspot Options',
    element: w.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
    section: eM.oAB.DISMISSIBLE_CONTENT_OPTIONS,
    searchableTitles: ['Dismissible Contents'],
    label: 'Dismissible Contents',
    element: A.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.PAYMENT_FLOW_MODALS]: {
    section: eM.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
    searchableTitles: ['Payment Flow Modals'],
    label: 'Payment Flow Modals',
    element: H.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.TEXT_PLAYGROUND]: {
    section: eM.oAB.TEXT_PLAYGROUND,
    searchableTitles: ['Text Playground'],
    label: 'Text Playground',
    element: eA.Z,
    predicate: () => (0, z.D)() || b.Z.isDeveloper
  },
  [ex.s6.DESIGN_SYSTEMS]: {
    section: eM.oAB.DESIGN_SYSTEMS,
    searchableTitles: ['Design Systems'],
    label: 'Design Systems',
    element: en.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.TEXT_COMPONENTS]: {
    section: eM.oAB.TEXT_COMPONENT,
    searchableTitles: ['Text Components'],
    label: 'Text Components',
    element: K.Z,
    predicate: () => (0, z.D)() || b.Z.isDeveloper
  },
  [ex.s6.INTL_TESTING]: {
    section: eM.oAB.INTL_TESTING,
    searchableTitles: [
      'Intl Testing',
      'i18n'
    ],
    label: 'Intl Testing',
    element: h.Z,
    predicate: () => eY || b.Z.isDeveloper
  },
  [ex.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
    section: eM.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
    searchableTitles: ['Profile Effects Preview Tool'],
    label: 'Profile Effects Preview Tool',
    element: D.Z,
    predicate: () => b.Z.isDeveloper
  },
  [ex.s6.QUEST_PREVIEW_TOOL]: {
    section: eM.oAB.QUEST_PREVIEW_TOOL,
    searchableTitles: ['Quest Preview Tool'],
    label: 'Quest Preview Tool',
    element: L.Z,
    predicate: () => (0, P.X7)({
      location: ef.dr.QUEST_PREVIEW_TOOL
    })
  },
  [ex.s6.LOGOUT]: {
    section: 'logout',
    onClick: () => {
      (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
        header: eP.Z.Messages.LOGOUT,
        confirmText: eP.Z.Messages.LOGOUT,
        cancelText: eP.Z.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => c.Z.logout(),
        ...e,
        children: (0, n.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: eP.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }));
    },
    label: eP.Z.Messages.LOGOUT,
    ariaLabel: eP.Z.Messages.LOGOUT,
    icon: (0, n.jsx)(o.DoorExitIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  },
  [ex.s6.SOCIAL_LINKS]: {
    section: E.ID.CUSTOM,
    element: W.Z
  },
  [ex.s6.CLIENT_DEBUG_INFO]: {
    section: E.ID.CUSTOM,
    element: Y.Z
  }
});
  };