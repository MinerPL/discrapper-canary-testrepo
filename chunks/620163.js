t.d(s, {
  i: function() {
return eZ;
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
  Z = t(131951),
  v = t(25990),
  j = t(626135),
  B = t(572004),
  U = t(49012),
  G = t(358085),
  F = t(998502),
  y = t(392735),
  V = t(604227),
  Y = t(38915),
  w = t(498639),
  H = t(748717),
  k = t(419636),
  W = t(799071),
  K = t(601433),
  z = t(154022),
  Q = t(393681),
  X = t(309739),
  q = t(64914),
  J = t(501348),
  $ = t(795594),
  ee = t(443702),
  es = t(920914),
  et = t(177508),
  en = t(956699),
  ea = t(54942),
  ei = t(15780),
  er = t(293389),
  eo = t(88624),
  el = t(387747),
  ec = t(389650),
  ed = t(649157),
  e_ = t(593648),
  eE = t(327885),
  eu = t(595242),
  eI = t(301121),
  eT = t(463153),
  eS = t(36192),
  eN = t(338345),
  eC = t(400287),
  em = t(554042),
  eA = t(200645),
  eg = t(287490),
  eO = t(168308),
  eh = t(277329),
  ep = t(674116),
  eR = t(726985),
  ex = t(981631),
  eM = t(46140),
  ef = t(65154),
  eD = t(689938),
  eP = t(82388);
let eL = () => [
i.z.CLIENT_THEMES_SETTINGS_BADGE,
i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
  ],
  eb = eA.Z,
  eZ = e => {
let {
  unseenGiftCount: s,
  showPrepaidPaymentPastDueWarning: eZ,
  impressionSource: ev,
  numOfPendingFamilyRequests: ej,
  isOverlaySupported: eB,
  isClipsBetaTagShowing: eU = !1,
  shouldMergeGameSettings: eG,
  isUserSettingsSearchEnabled: eF,
  isKeywordFilteringEnabled: ey,
  isStaff: eV,
  isInappropriateConversationWarningEnabled: eY,
  paymentsBlocked: ew,
  isEligibleForQuests: eH,
  showGiftNitro: ek,
  isStricterMessageRequestsEnabled: eW,
  hasLibraryApplication: eK,
  hasTOTPEnabled: ez,
  canBroadcastActivity: eQ,
  developerMode: eX
} = e;
return Object.freeze({
  [eR.s6.SEARCH_NO_RESULTS]: {
    section: E.ID.CUSTOM,
    element: eT.Z,
    predicate: () => eF
  },
  [eR.s6.ACCOUNT]: {
    section: ex.oAB.ACCOUNT,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
    label: eD.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eD.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Q.Z
  },
  [eR.s6.ACCOUNT_PROFILE]: {
    searchableTitles: [eD.Z.Messages.PROFILE],
    parent: eR.s6.ACCOUNT,
    section: ex.oAB.ACCOUNT
  },
  [eR.s6.ACCOUNT_DISPLAY_NAME]: {
    searchableTitles: [eD.Z.Messages.DISPLAY_NAME],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PROFILE
  },
  [eR.s6.ACCOUNT_PHONE_NUMBER]: {
    searchableTitles: [eD.Z.Messages.CHANGE_PHONE_NUMBER],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PROFILE
  },
  [eR.s6.ACCOUNT_USERNAME]: {
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PROFILE
  },
  [eR.s6.ACCOUNT_EMAIL]: {
    searchableTitles: [eD.Z.Messages.CHANGE_EMAIL],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PROFILE
  },
  [eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT
  },
  [eR.s6.ACCOUNT_CHANGE_PASSWORD]: {
    searchableTitles: [eD.Z.Messages.CHANGE_PASSWORD],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_CONFIRM_PASSWORD]: {
    searchableTitles: [eD.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
    searchableTitles: [eD.Z.Messages.SETTINGS_TWO_FA],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_ENABLE_2FA]: {
    searchableTitles: [eD.Z.Messages.TWO_FA_ENABLE],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => !ez
  },
  [eR.s6.ACCOUNT_REMOVE_2FA]: {
    searchableTitles: [eD.Z.Messages.TWO_FA_REMOVE],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => ez
  },
  [eR.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
    searchableTitles: [eD.Z.Messages.TWO_FA_BACKUP_CODE],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_SMS_BACKUP]: {
    searchableTitles: [eD.Z.Messages.MFA_SMS_AUTH],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_SECURITY_KEYS]: {
    searchableTitles: [eD.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
    section: ex.oAB.ACCOUNT,
    parent: eR.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eR.s6.ACCOUNT_REMOVAL]: {
    section: ex.oAB.ACCOUNT,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
    parent: eR.s6.ACCOUNT
  },
  [eR.s6.ACCOUNT_DISABLE_ACCOUNT]: {
    section: ex.oAB.ACCOUNT,
    searchableTitles: [eD.Z.Messages.DISABLE_ACCOUNT],
    parent: eR.s6.ACCOUNT_REMOVAL
  },
  [eR.s6.ACCOUNT_DELETE_ACCOUNT]: {
    section: ex.oAB.ACCOUNT,
    searchableTitles: [eD.Z.Messages.DELETE_ACCOUNT],
    parent: eR.s6.ACCOUNT_DISABLE_ACCOUNT
  },
  [eR.s6.GAMES]: {
    section: ex.oAB.GAMES,
    searchableTitles: [eD.Z.Messages.GAMES],
    label: eD.Z.Messages.GAMES,
    ariaLabel: eD.Z.Messages.GAMES,
    element: eh.Z,
    predicate: () => eG
  },
  [eR.s6.GAMES_MY_GAMES]: {
    section: ex.oAB.GAMES,
    searchableTitles: [eD.Z.Messages.MY_GAMES],
    parent: eR.s6.GAMES
  },
  [eR.s6.GAMES_CLIPS]: {
    section: ex.oAB.GAMES,
    searchableTitles: [eD.Z.Messages.CLIPS],
    parent: eR.s6.GAMES
  },
  [eR.s6.GAMES_OVERLAY]: {
    section: ex.oAB.GAMES,
    searchableTitles: [eD.Z.Messages.OVERLAY],
    parent: eR.s6.GAMES
  },
  [eR.s6.GAMES_ACTIVITY_PRIVACY]: {
    section: ex.oAB.GAMES,
    searchableTitles: [eD.Z.Messages.ACTIVITY_PRIVACY],
    parent: eR.s6.GAMES
  },
  [eR.s6.PROFILE_CUSTOMIZATION]: {
    section: ex.oAB.PROFILE_CUSTOMIZATION,
    type: E.bT.WIDE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_PROFILES],
    label: eD.Z.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eD.Z.Messages.USER_SETTINGS_PROFILES,
    element: f.Z,
    newIndicator: (0, n.jsx)(o.PremiumBadge, {
      text: eD.Z.Messages.NEW
    }),
    notice: {
      stores: [
        v.Z,
        O.Z
      ],
      element: M.Z
    },
    onSettingsClose: () => {
      l.Z.wait(() => {
        (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(ex.oAB.PROFILE_CUSTOMIZATION);
      });
    }
  },
  [eR.s6.PROFILE_DISPLAY_NAME]: {
    section: ex.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eD.Z.Messages.DISPLAY_NAME],
    parent: eR.s6.PROFILE_CUSTOMIZATION
  },
  [eR.s6.PROFILE_USER_PROFILE]: {
    section: ex.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eD.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
    parent: eR.s6.PROFILE_CUSTOMIZATION
  },
  [eR.s6.PROFILE_SERVER_PROFILES]: {
    section: ex.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [eD.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
    parent: eR.s6.PROFILE_CUSTOMIZATION
  },
  [eR.s6.PRIVACY_AND_SAFETY]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    label: eD.Z.Messages.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_AND_SAFETY],
    ariaLabel: eD.Z.Messages.PRIVACY_AND_SAFETY,
    element: eI.Z
  },
  [eR.s6.PRIVACY_USER_SETTINGS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_AND_SAFETY],
    parent: eR.s6.PRIVACY_AND_SAFETY
  },
  [eR.s6.PRIVACY_SENSITIVE_MEDIA]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eD.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
      eD.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER,
      eD.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR,
      eD.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT,
      eD.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT
    ],
    parent: eR.s6.PRIVACY_USER_SETTINGS
  },
  [eR.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eD.Z.Messages.SETTINGS_DM_SPAM_FILTER,
      eD.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES,
      eD.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX
    ],
    parent: eR.s6.PRIVACY_USER_SETTINGS
  },
  [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eD.Z.Messages.USER_DM_SETTINGS,
      eD.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES,
      eD.Z.Messages.USER_DM_SEARCH_TERM_DM
    ],
    parent: eR.s6.PRIVACY_USER_SETTINGS
  },
  [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.NEW_GUILDS_DM_ALLOWED],
    parent: eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
    parent: eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
    parent: eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
    predicate: () => !eW
  },
  [eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.NSFW_DM_COMMANDS_HEADER],
    parent: eR.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eR.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.SERVER_SETTINGS],
    parent: eR.s6.PRIVACY_AND_SAFETY
  },
  [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
    parent: eR.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
    parent: eR.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
    predicate: () => !eW
  },
  [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
    parent: eR.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eR.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
    parent: eR.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eR.s6.PRIVACY_DATA_PRIVACY]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
    parent: eR.s6.PRIVACY_USER_SETTINGS
  },
  [eR.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
    parent: eR.s6.PRIVACY_DATA_PRIVACY
  },
  [eR.s6.PRIVACY_DATA_PERSONALIZE]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
    parent: eR.s6.PRIVACY_DATA_PRIVACY
  },
  [eR.s6.PRIVACY_DATA_QUESTS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
    parent: eR.s6.PRIVACY_DATA_PRIVACY
  },
  [eR.s6.PRIVACY_DATA_BASIC_SERVICE]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    parent: eR.s6.PRIVACY_DATA_PRIVACY,
    searchableTitles: [eR.CF]
  },
  [eR.s6.PRIVACY_DATA_REQUEST]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
    parent: eR.s6.PRIVACY_DATA_PRIVACY
  },
  [eR.s6.PRIVACY_STAFF_ONLY]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
    parent: eR.s6.PRIVACY_USER_SETTINGS,
    predicate: () => eV
  },
  [eR.s6.PRIVACY_KEYWORD_FILTER]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eD.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
      eD.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD
    ],
    parent: eR.s6.PRIVACY_USER_SETTINGS,
    predicate: () => ey
  },
  [eR.s6.PRIVACY_TERMS_POLICY]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    parent: eR.s6.PRIVACY_USER_SETTINGS,
    searchableTitles: [eR.CF]
  },
  [eR.s6.PRIVACY_SAFETY_ALERTS]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
    parent: eR.s6.PRIVACY_USER_SETTINGS,
    predicate: () => eY
  },
  [eR.s6.PRIVACY_ACCOUNT_STANDING]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
    parent: eR.s6.PRIVACY_AND_SAFETY
  },
  [eR.s6.PRIVACY_ENCRYPTION]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      eD.Z.Messages.E2EE_ENCRYPTION,
      eD.Z.Messages.E2EE_END_TO_END_ENCRYPTION
    ],
    parent: eR.s6.PRIVACY_AND_SAFETY
  },
  [eR.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.E2EE_VERIFICATION_CODES],
    parent: eR.s6.PRIVACY_ENCRYPTION
  },
  [eR.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
    section: ex.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [eD.Z.Messages.E2EE_VERIFIED_DEVICES],
    parent: eR.s6.PRIVACY_ENCRYPTION
  },
  [eR.s6.PRIVACY_FAMILY_CENTER]: {
    section: ex.oAB.FAMILY_CENTER,
    searchableTitles: [eD.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
    label: eD.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eD.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: ea.Z,
    badgeCount: ej,
    newIndicator: (0, n.jsx)(o.TextBadge, {
      text: eD.Z.Messages.NEW,
      color: m.Z.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
  },
  [eR.s6.AUTHORIZED_APPS]: {
    section: ex.oAB.AUTHORIZED_APPS,
    searchableTitles: [eD.Z.Messages.AUTHORIZED_APPS],
    label: eD.Z.Messages.AUTHORIZED_APPS,
    element: $.Z
  },
  [eR.s6.SESSIONS]: {
    section: ex.oAB.SESSIONS,
    searchableTitles: [eD.Z.Messages.AUTH_SESSIONS],
    label: eD.Z.Messages.AUTH_SESSIONS,
    ariaLabel: eD.Z.Messages.AUTH_SESSIONS,
    element: eS.Z,
    newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
    predicate: () => y.Z.getCurrentConfig({
      location: '9f7d84_1'
    }, {
      autoTrackExposure: !1
    }).showSettings
  },
  [eR.s6.CONNECTIONS]: {
    section: ex.oAB.CONNECTIONS,
    searchableTitles: [eD.Z.Messages.CONNECTIONS],
    label: eD.Z.Messages.CONNECTIONS,
    ariaLabel: eD.Z.Messages.CONNECTIONS,
    element: es.Z,
    impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: ev
    },
    newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
  },
  [eR.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
    section: ex.oAB.CONNECTIONS,
    searchableTitles: [eD.Z.Messages.CONNECTED_ACCOUNTS],
    parent: eR.s6.CONNECTIONS,
    element: es.Z
  },
  [eR.s6.CLIPS]: {
    section: ex.oAB.CLIPS,
    searchableTitles: [eD.Z.Messages.CLIPS],
    label: eD.Z.Messages.CLIPS,
    ariaLabel: eD.Z.Messages.CLIPS,
    icon: eU ? (0, n.jsx)(N.Z, {}) : void 0,
    element: C.Z,
    predicate: () => !eG
  },
  [eR.s6.FRIEND_REQUESTS]: {
    section: ex.oAB.FRIEND_REQUESTS,
    searchableTitles: [eD.Z.Messages.FRIEND_REQUESTS],
    label: eD.Z.Messages.FRIEND_REQUESTS,
    element: ei.Z
  },
  [eR.s6.PREMIUM]: {
    section: ex.oAB.PREMIUM,
    ariaLabel: eD.Z.Messages.PREMIUM,
    searchableTitles: [eD.Z.Messages.PREMIUM],
    label: eD.Z.Messages.PREMIUM,
    element: H.Z,
    className: eP.premiumTab
  },
  [eR.s6.GUILD_BOOSTING]: {
    section: ex.oAB.GUILD_BOOSTING,
    searchableTitles: [eD.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
    label: eD.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eu.Z
  },
  [eR.s6.SUBSCRIPTIONS]: {
    section: ex.oAB.SUBSCRIPTIONS,
    ariaLabel: eD.Z.Messages.SUBSCRIPTIONS_TITLE,
    searchableTitles: [eD.Z.Messages.SUBSCRIPTIONS_TITLE],
    label: eD.Z.Messages.SUBSCRIPTIONS_TITLE,
    element: x.Z,
    icon: eZ ? (0, n.jsx)(o.CircleWarningIcon, {
      size: 'xs',
      color: r.Z.unsafe_rawColors.YELLOW_300.css
    }) : null
  },
  [eR.s6.SUBSCRIPTIONS_CREDITS]: {
    section: ex.oAB.SUBSCRIPTIONS,
    searchableTitles: [eD.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
    parent: eR.s6.SUBSCRIPTIONS
  },
  [eR.s6.GIFT_INVENTORY]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.GIFT_INVENTORY],
    label: eD.Z.Messages.GIFT_INVENTORY,
    element: el.Z,
    ariaLabel: eD.Z.Messages.GIFT_INVENTORY,
    badgeCount: s
  },
  [eR.s6.GIFT_NITRO]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.GIFT_NITRO],
    parent: eR.s6.GIFT_INVENTORY,
    predicate: () => !ew && ek
  },
  [eR.s6.GIFT_CODE_REDEMPTION]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
    parent: eR.s6.GIFT_INVENTORY,
    predicate: () => !ew
  },
  [eR.s6.GIFT_INVENTORY_QUESTS]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.QUESTS],
    parent: eR.s6.GIFT_INVENTORY,
    predicate: () => eH
  },
  [eR.s6.GIFT_INVENTORY_LIST]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
    parent: eR.s6.GIFT_INVENTORY,
    predicate: () => !ew
  },
  [eR.s6.GIFT_BLOCKED_PAYMENTS]: {
    section: ex.oAB.INVENTORY,
    searchableTitles: [eD.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
    parent: eR.s6.GIFT_INVENTORY,
    predicate: () => ew
  },
  [eR.s6.BILLING]: {
    section: ex.oAB.BILLING,
    searchableTitles: [eD.Z.Messages.BILLING],
    label: eD.Z.Messages.BILLING,
    ariaLabel: eD.Z.Messages.BILLING,
    element: ee.Z
  },
  [eR.s6.BILLING_PAYMENT_METHODS]: {
    section: ex.oAB.BILLING,
    searchableTitles: [eD.Z.Messages.BILLING_PAYMENT_SOURCES],
    parent: eR.s6.BILLING
  },
  [eR.s6.BILLING_TRANSACTION_HISTORY]: {
    section: ex.oAB.BILLING,
    searchableTitles: [eD.Z.Messages.BILLING_PAYMENT_HISTORY],
    parent: eR.s6.BILLING
  },
  [eR.s6.APPEARANCE]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.APPEARANCE],
    label: eD.Z.Messages.APPEARANCE,
    ariaLabel: eD.Z.Messages.APPEARANCE,
    element: J.Z,
    newIndicator: (0, n.jsx)(o.PremiumBadge, {
      text: eD.Z.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: eL()
  },
  [eR.s6.APPEARANCE_THEME]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.THEME],
    parent: eR.s6.APPEARANCE
  },
  [eR.s6.APPEARANCE_COLOR]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
    parent: eR.s6.APPEARANCE_THEME
  },
  [eR.s6.APPEARANCE_ICON]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
    parent: eR.s6.APPEARANCE_THEME
  },
  [eR.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
    parent: eR.s6.APPEARANCE
  },
  [eR.s6.APPEARANCE_SCALING_SPACING]: {
    section: ex.oAB.APPEARANCE,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
    parent: eR.s6.APPEARANCE
  },
  [eR.s6.ACCESSIBILITY]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY],
    label: eD.Z.Messages.ACCESSIBILITY,
    ariaLabel: eD.Z.Messages.ACCESSIBILITY,
    element: z.Z
  },
  [eR.s6.ACCESSIBILITY_SATURATION]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_ROLE_STYLE]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_TAGS]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_CONTRAST]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_REDUCED_MOTION]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_STICKERS]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_MESSAGES]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
    section: ex.oAB.ACCESSIBILITY,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_TTS],
    parent: eR.s6.ACCESSIBILITY
  },
  [eR.s6.VOICE_AND_VIDEO]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.VOICE_AND_VIDEO],
    label: eD.Z.Messages.VOICE_AND_VIDEO,
    ariaLabel: eD.Z.Messages.VOICE_AND_VIDEO,
    element: ep.Z,
    predicate: () => Z.Z.isSupported()
  },
  [eR.s6.VOICE_AND_VIDEO_DEVICES]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.FORM_LABEL_INPUT_DEVICE,
      eD.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
      eD.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      eD.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      eD.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.FORM_LABEL_INPUT_VOLUME,
      eD.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
      eD.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      eD.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      eD.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_MIC_TEST]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      eD.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.FORM_LABEL_INPUT_MODE,
      eD.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      eD.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_SOUNDS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.SOUNDBOARD],
    parent: eR.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [eR.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: eR.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [eR.s6.VOICE_AND_VIDEO_VIDEO]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.VIDEO_SETTINGS],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
    parent: eR.s6.VOICE_AND_VIDEO_VIDEO,
    predicate: () => Z.Z.supports(ef.AN.VIDEO)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.SETTINGS_ADVANCED],
    parent: eR.s6.VOICE_AND_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => Z.Z.supports(ef.AN.OPEN_H264)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.EXPERIMENTAL_ENCODERS],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => 'stable' !== F.ZP.releaseChannel && Z.Z.isExperimentalEncodersSupported()
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.ECHO_CANCELLATION],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.SIDECHAIN_COMPRESSION],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
    section: ex.oAB.VOICE,
    searchableTitles: [
      eD.Z.Messages.NOISE_SUPPRESSION,
      eD.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP
    ],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => Z.Z.isNoiseSuppressionSupported()
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.ADVANCED_VOICE_ACTIVITY],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => Z.Z.isAdvancedVoiceActivitySupported()
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.AUTOMATIC_GAIN_CONTROL],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => Z.Z.isAutomaticGainControlSupported()
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_QOS],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => Z.Z.supports(ef.AN.QOS)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_ATTENUATION],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => Z.Z.supports(ef.AN.ATTENUATION)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_SUBSYSTEM],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => Z.Z.supports(ef.AN.LEGACY_AUDIO_SUBSYSTEM) || Z.Z.supports(ef.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => G.isPlatformEmbedded
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_DEBUG],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => G.isPlatformEmbedded && Z.Z.supports(ef.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => Z.Z.isAecDumpSupported()
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => ('canary' === F.ZP.releaseChannel || 'development' === F.ZP.releaseChannel) && eV && Z.Z.supports(ef.AN.CONNECTION_REPLAY)
  },
  [eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
  },
  [eR.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
    section: ex.oAB.VOICE,
    searchableTitles: [eD.Z.Messages.RESET_VOICE_SETTINGS],
    parent: eR.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eR.s6.POGGERMODE]: {
    section: ex.oAB.POGGERMODE,
    searchableTitles: [eD.Z.Messages.POGGERMODE],
    label: eD.Z.Messages.POGGERMODE,
    ariaLabel: eD.Z.Messages.POGGERMODE,
    element: R.Z,
    predicate: () => p.Z.settingsVisible,
    icon: (0, n.jsx)('img', {
      alt: '',
      src: t(348621),
      className: eP.poggermodeIcon
    })
  },
  [eR.s6.CHAT]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.CHAT],
    label: eD.Z.Messages.CHAT,
    ariaLabel: eD.Z.Messages.CHAT,
    element: eC.Z
  },
  [eR.s6.CHAT_INLINE_MEDIA]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.INLINE_MEDIA_LABEL],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_INLINE_MEDIA_LINKS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.INLINE_EMBED_MEDIA],
    parent: eR.s6.CHAT_INLINE_MEDIA
  },
  [eR.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.INLINE_ATTACHMENT_MEDIA],
    parent: eR.s6.CHAT_INLINE_MEDIA
  },
  [eR.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.IMAGE_DESCRIPTION],
    parent: eR.s6.CHAT_INLINE_MEDIA
  },
  [eR.s6.CHAT_EMBEDS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.RENDER_EMBEDS_LABEL],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.RENDER_EMBEDS],
    parent: eR.s6.CHAT_EMBEDS
  },
  [eR.s6.CHAT_EMOJI]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.EMOJI],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_EMOJI_REACTIONS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.RENDER_REACTIONS],
    parent: eR.s6.CHAT_EMOJI
  },
  [eR.s6.CHAT_EMOJI_EMOTICONS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.CONVERT_EMOTICONS],
    parent: eR.s6.CHAT_EMOJI
  },
  [eR.s6.CHAT_STICKERS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_STICKERS_SUGGESTIONS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.AUTO_SUGGEST_STICKERS],
    parent: eR.s6.CHAT_STICKERS
  },
  [eR.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
    parent: eR.s6.CHAT_STICKERS
  },
  [eR.s6.CHAT_TEXT_BOX]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_TEXT_BOX_PREVIEW]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
    parent: eR.s6.CHAT_TEXT_BOX
  },
  [eR.s6.CHAT_THREADS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.THREADS],
    parent: eR.s6.CHAT
  },
  [eR.s6.CHAT_THREADS_SPLIT_VIEW]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
    parent: eR.s6.CHAT_THREADS
  },
  [eR.s6.CHAT_SPOILERS]: {
    section: ex.oAB.TEXT,
    searchableTitles: [eD.Z.Messages.SHOW_SPOILER_CONTENT],
    parent: eR.s6.CHAT
  },
  [eR.s6.NOTIFICATIONS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.NOTIFICATIONS],
    label: eD.Z.Messages.NOTIFICATIONS,
    ariaLabel: eD.Z.Messages.NOTIFICATIONS,
    element: e_.Z
  },
  [eR.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: ['Mention on all messages'],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
    parent: eR.s6.NOTIFICATIONS,
    predicate: () => (0, G.isWindows)()
  },
  [eR.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_NEW_SETTINGS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
    parent: eR.s6.NOTIFICATIONS,
    predicate: () => !1
  },
  [eR.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: ['Restore most recent snapshot'],
    parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eR.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: ['Launch Migration'],
    parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eR.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: ['Toggle new system on/off'],
    parent: eR.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eR.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_TTS],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
    parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [eR.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
    parent: eR.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [eR.s6.NOTIFICATIONS_SOUNDS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.SOUNDS],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_EMAILS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
    parent: eR.s6.NOTIFICATIONS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_TIPS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
    section: ex.oAB.NOTIFICATIONS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
    parent: eR.s6.NOTIFICATIONS_EMAILS
  },
  [eR.s6.KEYBINDS]: {
    section: ex.oAB.KEYBINDS,
    searchableTitles: [eD.Z.Messages.KEYBINDS],
    label: eD.Z.Messages.KEYBINDS,
    element: ec.Z
  },
  [eR.s6.LANGUAGE]: {
    section: ex.oAB.LOCALE,
    searchableTitles: [eD.Z.Messages.LANGUAGE],
    label: eD.Z.Messages.LANGUAGE,
    element: ed.Z
  },
  [eR.s6.WINDOW_SETTINGS]: {
    section: ex.oAB.WINDOWS,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
    label: eD.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eA.Z,
    predicate: () => G.isPlatformEmbedded && (0, G.isWindows)()
  },
  [eR.s6.LINUX_SETTINGS]: {
    section: ex.oAB.LINUX,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
    label: eD.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eb,
    predicate: () => G.isPlatformEmbedded && (0, G.isLinux)()
  },
  [eR.s6.STREAMER_MODE]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.STREAMER_MODE],
    label: eD.Z.Messages.STREAMER_MODE,
    ariaLabel: eD.Z.Messages.STREAMER_MODE,
    element: eN.Z
  },
  [eR.s6.STREAMER_MODE_INTEGRATIONS]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_ENABLE]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
    parent: eR.s6.STREAMER_MODE
  },
  [eR.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
    section: ex.oAB.STREAMER_MODE,
    searchableTitles: [eD.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
    parent: eR.s6.STREAMER_MODE,
    predicate: () => {
      var e, s, t;
      return null !== (t = null === u.Z || void 0 === u.Z ? void 0 : null === (s = u.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
    }
  },
  [eR.s6.SETTINGS_ADVANCED]: {
    section: ex.oAB.ADVANCED,
    searchableTitles: [eD.Z.Messages.SETTINGS_ADVANCED],
    label: eD.Z.Messages.SETTINGS_ADVANCED,
    ariaLabel: eD.Z.Messages.SETTINGS_ADVANCED,
    element: q.Z
  },
  [eR.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
    section: ex.oAB.ADVANCED,
    searchableTitles: [eD.Z.Messages.DEVELOPER_MODE],
    parent: eR.s6.SETTINGS_ADVANCED,
    predicate: () => B.wS
  },
  [eR.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
    section: ex.oAB.ADVANCED,
    searchableTitles: [eD.Z.Messages.HARDWARE_ACCELERATION],
    parent: eR.s6.SETTINGS_ADVANCED,
    predicate: () => G.isPlatformEmbedded
  },
  [eR.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
    section: ex.oAB.ADVANCED,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
    parent: eR.s6.SETTINGS_ADVANCED,
    predicate: () => eK
  },
  [eR.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
    section: ex.oAB.ADVANCED,
    searchableTitles: [eD.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
    parent: eR.s6.SETTINGS_ADVANCED,
    predicate: () => eX
  },
  [eR.s6.ACTIVITY_PRIVACY]: {
    section: ex.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eD.Z.Messages.ACTIVITY_PRIVACY],
    label: eD.Z.Messages.ACTIVITY_PRIVACY,
    ariaLabel: eD.Z.Messages.ACTIVITY_PRIVACY,
    element: X.Z,
    predicate: () => !eG
  },
  [eR.s6.ACTIVITY_PRIVACY_STATUS]: {
    section: eG ? ex.oAB.GAMES : ex.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eD.Z.Messages.ACTIVITY_STATUS],
    parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY
  },
  [eR.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
    section: eG ? ex.oAB.GAMES : ex.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eD.Z.Messages.ACTIVITY_PARTY_PRIVACY],
    parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY
  },
  [eR.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
    section: eG ? ex.oAB.GAMES : ex.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eD.Z.Messages.BROADCASTING_SETTINGS],
    parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY,
    predicate: () => eQ
  },
  [eR.s6.ACTIVITY_PRIVACY_TOS]: {
    section: eG ? ex.oAB.GAMES : ex.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eR.CF],
    parent: eG ? eR.s6.GAMES_ACTIVITY_PRIVACY : eR.s6.ACTIVITY_PRIVACY
  },
  [eR.s6.REGISTERED_GAMES]: {
    section: ex.oAB.REGISTERED_GAMES,
    searchableTitles: [eD.Z.Messages.REGISTERED_GAMES],
    label: eD.Z.Messages.REGISTERED_GAMES,
    element: er.Z,
    predicate: () => !eG && (0, eO.Jw)()
  },
  [eR.s6.OVERLAY]: {
    section: ex.oAB.OVERLAY,
    searchableTitles: [eD.Z.Messages.OVERLAY],
    label: eD.Z.Messages.OVERLAY,
    element: eE.Z,
    predicate: () => !eG && eB
  },
  [eR.s6.CHANGELOG]: {
    section: 'changelog',
    onClick: () => (0, S.Z)(!0),
    searchableTitles: [eD.Z.Messages.WHATS_NEW],
    label: eD.Z.Messages.WHATS_NEW
  },
  [eR.s6.MERCHANDISE]: {
    section: 'merchandise',
    onClick: () => {
      let e = 'https://discordmerch.com/Dsktopprm';
      j.default.track(ex.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, U.q)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          j.default.track(ex.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, I.Z)(e);
        }
      });
    },
    searchableTitles: [eD.Z.Messages.MERCHANDISE],
    label: eD.Z.Messages.MERCHANDISE,
    ariaLabel: eD.Z.Messages.MERCHANDISE
  },
  [eR.s6.HYPESQUAD]: {
    section: ex.oAB.HYPESQUAD_ONLINE,
    searchableTitles: [eD.Z.Messages.USER_SETTINGS_HYPESQUAD],
    label: eD.Z.Messages.USER_SETTINGS_HYPESQUAD,
    element: eo.Z
  },
  [eR.s6.EXPERIMENTS]: {
    section: ex.oAB.EXPERIMENTS,
    searchableTitles: ['Experiments'],
    label: 'Experiments',
    element: eg.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options'],
    label: 'Developer Options',
    ariaLabel: 'Developer Options',
    element: en.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_FLAGS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options Flags'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Tracing Requests'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Forced Canary'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Gateway Events To Console'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Rpc Events Commands'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Events Logging'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Source Maps'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Debugger View'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Idle Status Indicator'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eV && b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Accessibility Auditing'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => !1
  },
  [eR.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['CSS Debugging'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eV && b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Preview Unpublished Collections'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => eV && b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side'],
    parent: eR.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Premium Type'],
    parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Account Created Data'],
    parent: eR.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Open Overlay'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Reset Socket'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Clear Caches'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => T.q && b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_CRASHES]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Crashes'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Survey Override'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Changelog Override'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
    section: ex.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Build Override'],
    parent: eR.s6.DEVELOPER_OPTIONS,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.HOTSPOT_OPTIONS]: {
    section: ex.oAB.HOTSPOT_OPTIONS,
    searchableTitles: ['Hotspot Options'],
    label: 'Hotspot Options',
    element: Y.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
    section: ex.oAB.DISMISSIBLE_CONTENT_OPTIONS,
    searchableTitles: ['Dismissible Contents'],
    label: 'Dismissible Contents',
    element: A.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.PAYMENT_FLOW_MODALS]: {
    section: ex.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
    searchableTitles: ['Payment Flow Modals'],
    label: 'Payment Flow Modals',
    element: w.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.TEXT_PLAYGROUND]: {
    section: ex.oAB.TEXT_PLAYGROUND,
    searchableTitles: ['Text Playground'],
    label: 'Text Playground',
    element: em.Z,
    predicate: () => (0, K.D)() || b.Z.isDeveloper
  },
  [eR.s6.DESIGN_SYSTEMS]: {
    section: ex.oAB.DESIGN_SYSTEMS,
    searchableTitles: ['Design Systems'],
    label: 'Design Systems',
    element: et.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.TEXT_COMPONENTS]: {
    section: ex.oAB.TEXT_COMPONENT,
    searchableTitles: ['Text Components'],
    label: 'Text Components',
    element: W.Z,
    predicate: () => (0, K.D)() || b.Z.isDeveloper
  },
  [eR.s6.INTL_TESTING]: {
    section: ex.oAB.INTL_TESTING,
    searchableTitles: [
      'Intl Testing',
      'i18n'
    ],
    label: 'Intl Testing',
    element: h.Z,
    predicate: () => eV || b.Z.isDeveloper
  },
  [eR.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
    section: ex.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
    searchableTitles: ['Profile Effects Preview Tool'],
    label: 'Profile Effects Preview Tool',
    element: D.Z,
    predicate: () => b.Z.isDeveloper
  },
  [eR.s6.QUEST_PREVIEW_TOOL]: {
    section: ex.oAB.QUEST_PREVIEW_TOOL,
    searchableTitles: ['Quest Preview Tool'],
    label: 'Quest Preview Tool',
    element: L.Z,
    predicate: () => (0, P.X7)({
      location: eM.dr.QUEST_PREVIEW_TOOL
    })
  },
  [eR.s6.LOGOUT]: {
    section: 'logout',
    onClick: () => {
      (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
        header: eD.Z.Messages.LOGOUT,
        confirmText: eD.Z.Messages.LOGOUT,
        cancelText: eD.Z.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => c.Z.logout(),
        ...e,
        children: (0, n.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: eD.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }));
    },
    label: eD.Z.Messages.LOGOUT,
    ariaLabel: eD.Z.Messages.LOGOUT,
    icon: (0, n.jsx)(o.DoorExitIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  },
  [eR.s6.SOCIAL_LINKS]: {
    section: E.ID.CUSTOM,
    element: k.Z
  },
  [eR.s6.CLIENT_DEBUG_INFO]: {
    section: E.ID.CUSTOM,
    element: V.Z
  }
});
  };