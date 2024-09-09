t.d(s, {
    i: function () {
        return eU;
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
    u = t(493544),
    E = t(579806),
    T = t(782568),
    S = t(758182),
    I = t(163379),
    N = t(703288),
    m = t(574755),
    C = t(377171),
    A = t(621628),
    g = t(18438),
    h = t(778825),
    O = t(665166),
    p = t(351780),
    R = t(231765),
    x = t(813732),
    f = t(398140),
    M = t(564344),
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
    Y = t(695346),
    w = t(604227),
    k = t(38915),
    H = t(498639),
    W = t(748717),
    K = t(419636),
    z = t(799071),
    Q = t(601433),
    X = t(154022),
    q = t(393681),
    J = t(309739),
    $ = t(64914),
    ee = t(501348),
    es = t(795594),
    et = t(443702),
    en = t(920914),
    ea = t(177508),
    ei = t(956699),
    er = t(54942),
    eo = t(15780),
    el = t(293389),
    ec = t(88624),
    ed = t(387747),
    e_ = t(389650),
    eu = t(649157),
    eE = t(593648),
    eT = t(327885),
    eS = t(595242),
    eI = t(301121),
    eN = t(757151),
    em = t(463153),
    eC = t(36192),
    eA = t(338345),
    eg = t(400287),
    eh = t(554042),
    eO = t(200645),
    ep = t(287490),
    eR = t(706060),
    ex = t(168308),
    ef = t(277329),
    eM = t(674116),
    eD = t(726985),
    eP = t(981631),
    eL = t(46140),
    eb = t(65154),
    eZ = t(689938),
    ev = t(54048);
let ej = () => [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eB = eO.Z,
    eU = (e) => {
        let { unseenGiftCount: s, showPrepaidPaymentPastDueWarning: eU, impressionSource: eG, numOfPendingFamilyRequests: eF, isOverlaySupported: ey, isClipsBetaTagShowing: eV = !1, shouldMergeGameSettings: eY, isUserSettingsSearchEnabled: ew, isKeywordFilteringEnabled: ek, isStaff: eH, isInappropriateConversationWarningEnabled: eW, paymentsBlocked: eK, isEligibleForQuests: ez, showGiftNitro: eQ, isStricterMessageRequestsEnabled: eX, hasLibraryApplication: eq, hasTOTPEnabled: eJ, canBroadcastActivity: e$, developerMode: e0, isSafetySettingsV2Enabled: e1, isAdultUser: e2, hasSecureFramesVerifiedUserIds: e6 } = e;
        return Object.freeze({
            [eD.s6.SEARCH_NO_RESULTS]: {
                section: u.ID.CUSTOM,
                element: em.Z,
                predicate: () => ew
            },
            [eD.s6.ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: eZ.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: eZ.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: q.Z
            },
            [eD.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eZ.Z.Messages.PROFILE],
                parent: eD.s6.ACCOUNT,
                section: eP.oAB.ACCOUNT
            },
            [eD.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eZ.Z.Messages.DISPLAY_NAME],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE
            },
            [eD.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eZ.Z.Messages.CHANGE_PHONE_NUMBER],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE
            },
            [eD.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE
            },
            [eD.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eZ.Z.Messages.CHANGE_EMAIL],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PROFILE
            },
            [eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT
            },
            [eD.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eZ.Z.Messages.CHANGE_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eZ.Z.Messages.SETTINGS_TWO_FA],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eZ.Z.Messages.TWO_FA_ENABLE],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !eJ
            },
            [eD.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eZ.Z.Messages.TWO_FA_REMOVE],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => eJ
            },
            [eD.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eZ.Z.Messages.TWO_FA_BACKUP_CODE],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eZ.Z.Messages.MFA_SMS_AUTH],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eZ.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: eP.oAB.ACCOUNT,
                parent: eD.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eD.s6.ACCOUNT_REMOVAL]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: eD.s6.ACCOUNT
            },
            [eD.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eZ.Z.Messages.DISABLE_ACCOUNT],
                parent: eD.s6.ACCOUNT_REMOVAL
            },
            [eD.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eZ.Z.Messages.DELETE_ACCOUNT],
                parent: eD.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eD.s6.GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eZ.Z.Messages.GAMES],
                label: eZ.Z.Messages.GAMES,
                ariaLabel: eZ.Z.Messages.GAMES,
                element: ef.Z,
                predicate: () => eY
            },
            [eD.s6.GAMES_MY_GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eZ.Z.Messages.MY_GAMES],
                parent: eD.s6.GAMES
            },
            [eD.s6.GAMES_CLIPS]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eZ.Z.Messages.CLIPS],
                parent: eD.s6.GAMES
            },
            [eD.s6.GAMES_OVERLAY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eZ.Z.Messages.OVERLAY],
                parent: eD.s6.GAMES
            },
            [eD.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eZ.Z.Messages.ACTIVITY_PRIVACY],
                parent: eD.s6.GAMES
            },
            [eD.s6.PROFILE_CUSTOMIZATION]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                type: u.bT.WIDE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_PROFILES],
                label: eZ.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: eZ.Z.Messages.USER_SETTINGS_PROFILES,
                element: M.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eZ.Z.Messages.NEW }),
                notice: {
                    stores: [j.Z, h.Z],
                    element: f.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [eD.s6.PROFILE_DISPLAY_NAME]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.Z.Messages.DISPLAY_NAME],
                parent: eD.s6.PROFILE_CUSTOMIZATION
            },
            [eD.s6.PROFILE_USER_PROFILE]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: eD.s6.PROFILE_CUSTOMIZATION
            },
            [eD.s6.PROFILE_SERVER_PROFILES]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eZ.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: eD.s6.PROFILE_CUSTOMIZATION
            },
            [eD.s6.PRIVACY_AND_SAFETY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                label: eZ.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eZ.Z.Messages.PRIVACY_AND_SAFETY,
                element: eI.Z,
                predicate: () => !e1
            },
            [eD.s6.PRIVACY_AND_SAFETY_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                label: eZ.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eZ.Z.Messages.PRIVACY_AND_SAFETY,
                element: eN.Z,
                predicate: () => e1
            },
            [eD.s6.PRIVACY_USER_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY],
                parent: eD.s6.PRIVACY_AND_SAFETY
            },
            [eD.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL],
                parent: eD.s6.PRIVACY_AND_SAFETY_V2
            },
            [eD.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY],
                parent: eD.s6.PRIVACY_AND_SAFETY_V2
            },
            [eD.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING],
                parent: eD.s6.PRIVACY_AND_SAFETY_V2
            },
            [eD.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.SAFETY_HUB_PAGE_TITLE],
                parent: eD.s6.PRIVACY_AND_SAFETY_STANDING
            },
            [eD.s6.PRIVACY_AND_SAFETY_ENCRYPTION]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION],
                parent: eD.s6.PRIVACY_AND_SAFETY_V2,
                predicate: () => (0, F.isDesktop)()
            },
            [eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY],
                parent: eD.s6.PRIVACY_AND_SAFETY_ENCRYPTION
            },
            [eD.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES],
                parent: eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
            },
            [eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.FRIEND_REQUESTS],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
            },
            [eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.FRIEND_REQUESTS],
                parent: eD.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eD.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
            },
            [eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE],
                parent: eD.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
            },
            [eD.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eD.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, eZ.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eD.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER, eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eD.s6.PRIVACY_USER_SETTINGS
            },
            [eD.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER, eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, eZ.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.USER_DM_SETTINGS, eZ.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, eZ.Z.Messages.USER_DM_SEARCH_TERM_DM],
                parent: eD.s6.PRIVACY_USER_SETTINGS
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !eX
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eD.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                parent: eD.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.SERVER_SETTINGS],
                parent: eD.s6.PRIVACY_AND_SAFETY
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: eD.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE, eZ.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_GLOBAL_NOTE],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: eD.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !eX
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eX
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eD.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eD.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eD.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eD.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eD.s6.PRIVACY_DATA_PRIVACY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: eD.s6.PRIVACY_USER_SETTINGS
            },
            [eD.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eD.s6.PRIVACY_DATA_PRIVACY
            },
            [eD.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eD.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eD.s6.PRIVACY_DATA_PRIVACY
            },
            [eD.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eD.s6.PRIVACY_DATA_QUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eD.s6.PRIVACY_DATA_PRIVACY
            },
            [eD.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eD.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: eD.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [eD.CF]
            },
            [eD.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eD.CF],
                parent: eD.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eD.s6.PRIVACY_DATA_REQUEST]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eD.s6.PRIVACY_DATA_PRIVACY
            },
            [eD.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eD.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eD.s6.PRIVACY_STAFF_ONLY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: eD.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eH
            },
            [eD.s6.PRIVACY_KEYWORD_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, eZ.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eD.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ek
            },
            [eD.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, eZ.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => ek
            },
            [eD.s6.PRIVACY_TERMS_POLICY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: eD.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [eD.CF]
            },
            [eD.s6.PRIVACY_SAFETY_ALERTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eD.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eW
            },
            [eD.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eD.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eW && !e2
            },
            [eD.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: eD.s6.PRIVACY_AND_SAFETY
            },
            [eD.s6.PRIVACY_ENCRYPTION]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.E2EE_ENCRYPTION, eZ.Z.Messages.E2EE_END_TO_END_ENCRYPTION],
                parent: eD.s6.PRIVACY_AND_SAFETY
            },
            [eD.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: eD.s6.PRIVACY_ENCRYPTION
            },
            [eD.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eZ.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eD.s6.PRIVACY_ENCRYPTION
            },
            [eD.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eD.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e6
            },
            [eD.s6.PRIVACY_FAMILY_CENTER]: {
                section: eP.oAB.FAMILY_CENTER,
                searchableTitles: [eZ.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: eZ.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: eZ.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: er.Z,
                badgeCount: eF,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: eZ.Z.Messages.NEW,
                    color: C.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [eD.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eZ.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA],
                parent: eD.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
            },
            [eD.s6.AUTHORIZED_APPS]: {
                section: eP.oAB.AUTHORIZED_APPS,
                searchableTitles: [eZ.Z.Messages.AUTHORIZED_APPS],
                label: eZ.Z.Messages.AUTHORIZED_APPS,
                element: es.Z
            },
            [eD.s6.SESSIONS]: {
                section: eP.oAB.SESSIONS,
                searchableTitles: [eZ.Z.Messages.AUTH_SESSIONS],
                label: eZ.Z.Messages.AUTH_SESSIONS,
                ariaLabel: eZ.Z.Messages.AUTH_SESSIONS,
                element: eC.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => V.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [eD.s6.CONNECTIONS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eZ.Z.Messages.CONNECTIONS],
                label: eZ.Z.Messages.CONNECTIONS,
                ariaLabel: eZ.Z.Messages.CONNECTIONS,
                element: en.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: eG },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [eD.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eZ.Z.Messages.CONNECTED_ACCOUNTS],
                parent: eD.s6.CONNECTIONS,
                element: en.Z
            },
            [eD.s6.CLIPS]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [eZ.Z.Messages.CLIPS],
                label: eZ.Z.Messages.CLIPS,
                ariaLabel: eZ.Z.Messages.CLIPS,
                icon: eV ? (0, n.jsx)(N.Z, {}) : void 0,
                element: m.Z,
                predicate: () => !eY
            },
            [eD.s6.FRIEND_REQUESTS]: {
                section: eP.oAB.FRIEND_REQUESTS,
                searchableTitles: [eZ.Z.Messages.FRIEND_REQUESTS],
                label: eZ.Z.Messages.FRIEND_REQUESTS,
                element: eo.Z,
                predicate: () => !e1
            },
            [eD.s6.PREMIUM]: {
                section: eP.oAB.PREMIUM,
                ariaLabel: eZ.Z.Messages.PREMIUM,
                searchableTitles: [eZ.Z.Messages.PREMIUM],
                label: eZ.Z.Messages.PREMIUM,
                element: W.Z,
                className: ev.premiumTab
            },
            [eD.s6.GUILD_BOOSTING]: {
                section: eP.oAB.GUILD_BOOSTING,
                searchableTitles: [eZ.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: eZ.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: eS.Z
            },
            [eD.s6.SUBSCRIPTIONS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                ariaLabel: eZ.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [eZ.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: eZ.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: x.Z,
                icon: eU
                    ? (0, n.jsx)(o.CircleWarningIcon, {
                          size: 'xs',
                          color: r.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eD.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                searchableTitles: [eZ.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: eD.s6.SUBSCRIPTIONS
            },
            [eD.s6.GIFT_INVENTORY]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.GIFT_INVENTORY],
                label: eZ.Z.Messages.GIFT_INVENTORY,
                element: ed.Z,
                ariaLabel: eZ.Z.Messages.GIFT_INVENTORY,
                badgeCount: s
            },
            [eD.s6.GIFT_NITRO]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.GIFT_NITRO],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => !eK && eQ
            },
            [eD.s6.GIFT_CODE_REDEMPTION]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => !eK
            },
            [eD.s6.GIFT_INVENTORY_QUESTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.QUESTS],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => ez
            },
            [eD.s6.GIFT_INVENTORY_LIST]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => !eK
            },
            [eD.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eZ.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: eD.s6.GIFT_INVENTORY,
                predicate: () => eK
            },
            [eD.s6.BILLING]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eZ.Z.Messages.BILLING],
                label: eZ.Z.Messages.BILLING,
                ariaLabel: eZ.Z.Messages.BILLING,
                element: et.Z
            },
            [eD.s6.BILLING_PAYMENT_METHODS]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eZ.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: eD.s6.BILLING
            },
            [eD.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eZ.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: eD.s6.BILLING
            },
            [eD.s6.APPEARANCE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.APPEARANCE],
                label: eZ.Z.Messages.APPEARANCE,
                ariaLabel: eZ.Z.Messages.APPEARANCE,
                element: ee.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eZ.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: ej()
            },
            [eD.s6.APPEARANCE_THEME]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.THEME],
                parent: eD.s6.APPEARANCE
            },
            [eD.s6.APPEARANCE_COLOR]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: eD.s6.APPEARANCE_THEME
            },
            [eD.s6.APPEARANCE_ICON]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: eD.s6.APPEARANCE_THEME
            },
            [eD.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: eD.s6.APPEARANCE
            },
            [eD.s6.APPEARANCE_SCALING_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: eD.s6.APPEARANCE
            },
            [eD.s6.ACCESSIBILITY]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY],
                label: eZ.Z.Messages.ACCESSIBILITY,
                ariaLabel: eZ.Z.Messages.ACCESSIBILITY,
                element: X.Z
            },
            [eD.s6.ACCESSIBILITY_SATURATION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_TAGS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_STICKERS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_MESSAGES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_TTS],
                parent: eD.s6.ACCESSIBILITY
            },
            [eD.s6.VOICE_AND_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.VOICE_AND_VIDEO],
                label: eZ.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: eZ.Z.Messages.VOICE_AND_VIDEO,
                element: eM.Z,
                predicate: () => v.Z.isSupported()
            },
            [eD.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_INPUT_DEVICE, eZ.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, eZ.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eZ.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eZ.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_INPUT_VOLUME, eZ.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, eZ.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eZ.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eZ.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, eZ.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_INPUT_MODE, eZ.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, eZ.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.SOUNDBOARD],
                parent: eD.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eD.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eD.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.VIDEO_SETTINGS],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: eD.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => v.Z.supports(eb.AN.VIDEO)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.SETTINGS_ADVANCED],
                parent: eD.s6.VOICE_AND_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eb.AN.OPEN_H264)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== y.ZP.releaseChannel && v.Z.isExperimentalEncodersSupported()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.ECHO_CANCELLATION],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eD.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.NOISE_SUPPRESSION, eZ.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isNoiseSuppressionSupported()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAdvancedVoiceActivitySupported()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAutomaticGainControlSupported()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_QOS],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eb.AN.QOS)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eb.AN.ATTENUATION)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eb.AN.LEGACY_AUDIO_SUBSYSTEM) || v.Z.supports(eb.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_DEBUG],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Sb.getSetting()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => v.Z.isAecDumpSupported()
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === y.ZP.releaseChannel || 'development' === y.ZP.releaseChannel) && eH && v.Z.supports(eb.AN.CONNECTION_REPLAY)
            },
            [eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.isPlatformEmbedded && v.Z.supports(eb.AN.DEBUG_LOGGING) && null != E.Z.fileManager.readLogFiles
            },
            [eD.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eZ.Z.Messages.RESET_VOICE_SETTINGS],
                parent: eD.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eD.s6.POGGERMODE]: {
                section: eP.oAB.POGGERMODE,
                searchableTitles: [eZ.Z.Messages.POGGERMODE],
                label: eZ.Z.Messages.POGGERMODE,
                ariaLabel: eZ.Z.Messages.POGGERMODE,
                element: R.Z,
                predicate: () => p.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: t(348621),
                    className: ev.poggermodeIcon
                })
            },
            [eD.s6.CHAT]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.CHAT],
                label: eZ.Z.Messages.CHAT,
                ariaLabel: eZ.Z.Messages.CHAT,
                element: eg.Z
            },
            [eD.s6.CHAT_INLINE_MEDIA]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.INLINE_MEDIA_LABEL],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.INLINE_EMBED_MEDIA],
                parent: eD.s6.CHAT_INLINE_MEDIA
            },
            [eD.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: eD.s6.CHAT_INLINE_MEDIA
            },
            [eD.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.IMAGE_DESCRIPTION],
                parent: eD.s6.CHAT_INLINE_MEDIA
            },
            [eD.s6.CHAT_EMBEDS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.RENDER_EMBEDS],
                parent: eD.s6.CHAT_EMBEDS
            },
            [eD.s6.CHAT_EMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.EMOJI],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_EMOJI_REACTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.RENDER_REACTIONS],
                parent: eD.s6.CHAT_EMOJI
            },
            [eD.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.CONVERT_EMOTICONS],
                parent: eD.s6.CHAT_EMOJI
            },
            [eD.s6.CHAT_STICKERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: eD.s6.CHAT_STICKERS
            },
            [eD.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: eD.s6.CHAT_STICKERS
            },
            [eD.s6.CHAT_TEXT_BOX]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: eD.s6.CHAT_TEXT_BOX
            },
            [eD.s6.CHAT_THREADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.THREADS],
                parent: eD.s6.CHAT
            },
            [eD.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: eD.s6.CHAT_THREADS
            },
            [eD.s6.CHAT_SPOILERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eZ.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: eD.s6.CHAT
            },
            [eD.s6.NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.NOTIFICATIONS],
                label: eZ.Z.Messages.NOTIFICATIONS,
                ariaLabel: eZ.Z.Messages.NOTIFICATIONS,
                element: eE.Z
            },
            [eD.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: eD.s6.NOTIFICATIONS,
                predicate: () => (0, F.isWindows)()
            },
            [eD.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: eD.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eD.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eD.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eD.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eD.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eD.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_TTS],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eD.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: eD.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eD.s6.NOTIFICATIONS_SOUNDS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.SOUNDS],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: eD.s6.NOTIFICATIONS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: eD.s6.NOTIFICATIONS_EMAILS
            },
            [eD.s6.KEYBINDS]: {
                section: eP.oAB.KEYBINDS,
                searchableTitles: [eZ.Z.Messages.KEYBINDS],
                label: eZ.Z.Messages.KEYBINDS,
                element: e_.Z
            },
            [eD.s6.LANGUAGE]: {
                section: eP.oAB.LOCALE,
                searchableTitles: [eZ.Z.Messages.LANGUAGE],
                label: eZ.Z.Messages.LANGUAGE,
                element: eu.Z
            },
            [eD.s6.WINDOW_SETTINGS]: {
                section: eP.oAB.WINDOWS,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: eZ.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: eO.Z,
                predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
            },
            [eD.s6.LINUX_SETTINGS]: {
                section: eP.oAB.LINUX,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: eZ.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: eB,
                predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
            },
            [eD.s6.STREAMER_MODE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.STREAMER_MODE],
                label: eZ.Z.Messages.STREAMER_MODE,
                ariaLabel: eZ.Z.Messages.STREAMER_MODE,
                element: eA.Z
            },
            [eD.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_ENABLE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: eD.s6.STREAMER_MODE
            },
            [eD.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eZ.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: eD.s6.STREAMER_MODE,
                predicate: () => {
                    var e, s, t;
                    return null !== (t = null === E.Z || void 0 === E.Z ? void 0 : null === (s = E.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
                }
            },
            [eD.s6.SETTINGS_ADVANCED]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eZ.Z.Messages.SETTINGS_ADVANCED],
                label: eZ.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: eZ.Z.Messages.SETTINGS_ADVANCED,
                element: $.Z
            },
            [eD.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eZ.Z.Messages.DEVELOPER_MODE],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => U.wS
            },
            [eD.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eZ.Z.Messages.HARDWARE_ACCELERATION],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eD.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => eq
            },
            [eD.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eZ.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: eD.s6.SETTINGS_ADVANCED,
                predicate: () => e0
            },
            [eD.s6.ACTIVITY_PRIVACY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.Z.Messages.ACTIVITY_PRIVACY],
                label: eZ.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: eZ.Z.Messages.ACTIVITY_PRIVACY,
                element: J.Z,
                predicate: () => !eY
            },
            [eD.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eY ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.Z.Messages.ACTIVITY_STATUS],
                parent: eY ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY
            },
            [eD.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eY ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: eY ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY
            },
            [eD.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
                section: eY ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eZ.Z.Messages.BROADCASTING_SETTINGS],
                parent: eY ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY,
                predicate: () => e$
            },
            [eD.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eY ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eD.CF],
                parent: eY ? eD.s6.GAMES_ACTIVITY_PRIVACY : eD.s6.ACTIVITY_PRIVACY
            },
            [eD.s6.REGISTERED_GAMES]: {
                section: eP.oAB.REGISTERED_GAMES,
                searchableTitles: [eZ.Z.Messages.REGISTERED_GAMES],
                label: eZ.Z.Messages.REGISTERED_GAMES,
                element: el.Z,
                predicate: () => !eY && (0, ex.Jw)()
            },
            [eD.s6.OVERLAY]: {
                section: eP.oAB.OVERLAY,
                searchableTitles: [eZ.Z.Messages.OVERLAY],
                label: eZ.Z.Messages.OVERLAY,
                element: eT.Z,
                predicate: () => !eY && ey
            },
            [eD.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, I.Z)(!0),
                searchableTitles: [eZ.Z.Messages.WHATS_NEW],
                label: eZ.Z.Messages.WHATS_NEW
            },
            [eD.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, G.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e);
                            }
                        });
                },
                searchableTitles: [eZ.Z.Messages.MERCHANDISE],
                label: eZ.Z.Messages.MERCHANDISE,
                ariaLabel: eZ.Z.Messages.MERCHANDISE
            },
            [eD.s6.HYPESQUAD]: {
                section: eP.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eZ.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: eZ.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: ec.Z
            },
            [eD.s6.EXPERIMENTS]: {
                section: eP.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ep.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ei.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eD.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper && Z.default.layoutDebuggingEnabled
            },
            [eD.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eD.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eD.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => S.q && b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eD.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.HOTSPOT_OPTIONS]: {
                section: eP.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: k.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eP.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: A.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.PAYMENT_FLOW_MODALS]: {
                section: eP.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: H.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.TEXT_PLAYGROUND]: {
                section: eP.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eh.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eD.s6.DESIGN_SYSTEMS]: {
                section: eP.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ea.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.TEXT_COMPONENTS]: {
                section: eP.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: z.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eD.s6.INTL_TESTING]: {
                section: eP.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: O.Z,
                predicate: () => eH || b.Z.isDeveloper
            },
            [eD.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eP.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: D.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.QUEST_PREVIEW_TOOL]: {
                section: eP.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: L.Z,
                predicate: () => (0, P.X7)({ location: eL.dr.QUEST_PREVIEW_TOOL })
            },
            [eD.s6.WEB_SETTING_TREE_TOOL]: {
                section: eP.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: eR.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eD.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)((e) =>
                        (0, n.jsx)(o.ConfirmModal, {
                            header: eZ.Z.Messages.LOGOUT,
                            confirmText: eZ.Z.Messages.LOGOUT,
                            cancelText: eZ.Z.Messages.CANCEL,
                            onCancel: e.onClose,
                            onConfirm: () => c.Z.logout(),
                            ...e,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: eZ.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                            })
                        })
                    );
                },
                label: eZ.Z.Messages.LOGOUT,
                ariaLabel: eZ.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eD.s6.SOCIAL_LINKS]: {
                section: u.ID.CUSTOM,
                element: K.Z
            },
            [eD.s6.CLIENT_DEBUG_INFO]: {
                section: u.ID.CUSTOM,
                element: w.Z
            }
        });
    };
