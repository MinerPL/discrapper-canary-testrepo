s.d(t, {
    i: function () {
        return eU;
    }
}), s(653041);
var n = s(735250);
s(470079);
var a = s(990547), i = s(704215), r = s(692547), o = s(481060), l = s(570140), c = s(893776), d = s(809206), _ = s(230711), E = s(493544), u = s(579806), T = s(782568), I = s(758182), S = s(163379), N = s(703288), C = s(574755), m = s(425799), A = s(377171), h = s(621628), g = s(18438), O = s(778825), p = s(351780), R = s(231765), x = s(837741), M = s(804545), D = s(813732), f = s(398140), P = s(564344), L = s(977156), Z = s(652380), b = s(171156), v = s(906467), j = s(131951), B = s(25990), U = s(626135), G = s(572004), F = s(49012), y = s(358085), V = s(998502), Y = s(392735), w = s(61160), k = s(604227), H = s(38915), W = s(498639), K = s(748717), z = s(419636), Q = s(35426), X = s(799071), q = s(601433), J = s(154022), $ = s(393681), ee = s(309739), et = s(64914), es = s(501348), en = s(795594), ea = s(443702), ei = s(920914), er = s(177508), eo = s(956699), el = s(54942), ec = s(15780), ed = s(293389), e_ = s(88624), eE = s(387747), eu = s(389650), eT = s(649157), eI = s(593648), eS = s(327885), eN = s(595242), eC = s(301121), em = s(463153), eA = s(36192), eh = s(338345), eg = s(400287), eO = s(554042), ep = s(200645), eR = s(287490), ex = s(168308), eM = s(277329), eD = s(674116), ef = s(726985), eP = s(981631), eL = s(46140), eZ = s(65154), eb = s(689938), ev = s(422237);
let ej = () => {
        let e = 'Settings list view', t = [
                i.z.CLIENT_THEMES_SETTINGS_BADGE,
                i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
            ];
        return x.F.getCurrentConfig({ location: e }).enabled && t.push(i.z.BRAND_REFRESH_NEW_BADGE), M.n.getCurrentConfig({ location: e }).enabled && t.push(i.z.PRIDE_ICONS_APPEARANCE_BADGE), t;
    }, eB = ep.Z, eU = e => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: x,
            impressionSource: M,
            numOfPendingFamilyRequests: eU,
            isOverlaySupported: eG,
            isClipsBetaTagShowing: eF = !1,
            shouldMergeGameSettings: ey,
            isUserSettingsSearchEnabled: eV,
            isKeywordFilteringEnabled: eY,
            isStaff: ew,
            isInappropriateConversationWarningEnabled: ek,
            paymentsBlocked: eH,
            isEligibleForQuests: eW,
            showGiftNitro: eK,
            isStricterMessageRequestsEnabled: ez,
            hasLibraryApplication: eQ,
            hasTOTPEnabled: eX,
            canBroadcastActivity: eq
        } = e;
        return Object.freeze({
            [ef.s6.SEARCH_NO_RESULTS]: {
                section: E.ID.CUSTOM,
                element: em.Z,
                predicate: () => eV
            },
            [ef.s6.ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: $.Z
            },
            [ef.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eb.Z.Messages.PROFILE],
                parent: ef.s6.ACCOUNT,
                section: eP.oAB.ACCOUNT
            },
            [ef.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PROFILE
            },
            [ef.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eb.Z.Messages.CHANGE_PHONE_NUMBER],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PROFILE
            },
            [ef.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PROFILE
            },
            [ef.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eb.Z.Messages.CHANGE_EMAIL],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PROFILE
            },
            [ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT
            },
            [ef.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eb.Z.Messages.CHANGE_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eb.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eb.Z.Messages.SETTINGS_TWO_FA],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_ENABLE],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !eX
            },
            [ef.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_REMOVE],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => eX
            },
            [ef.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_BACKUP_CODE],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eb.Z.Messages.MFA_SMS_AUTH],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: eP.oAB.ACCOUNT,
                parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ef.s6.ACCOUNT_REMOVAL]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: ef.s6.ACCOUNT
            },
            [ef.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.DISABLE_ACCOUNT],
                parent: ef.s6.ACCOUNT_REMOVAL
            },
            [ef.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.DELETE_ACCOUNT],
                parent: ef.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [ef.s6.GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.GAMES],
                label: eb.Z.Messages.GAMES,
                ariaLabel: eb.Z.Messages.GAMES,
                element: eM.Z,
                predicate: () => ey
            },
            [ef.s6.GAMES_MY_GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.MY_GAMES],
                parent: ef.s6.GAMES
            },
            [ef.s6.GAMES_CLIPS]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.CLIPS],
                parent: ef.s6.GAMES
            },
            [ef.s6.GAMES_OVERLAY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.OVERLAY],
                parent: ef.s6.GAMES
            },
            [ef.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
                parent: ef.s6.GAMES
            },
            [ef.s6.PROFILE_CUSTOMIZATION]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                type: E.bT.WIDE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_PROFILES],
                label: eb.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: eb.Z.Messages.USER_SETTINGS_PROFILES,
                element: P.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eb.Z.Messages.NEW }),
                notice: {
                    stores: [
                        B.Z,
                        O.Z
                    ],
                    element: f.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [ef.s6.PROFILE_DISPLAY_NAME]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
                parent: ef.s6.PROFILE_CUSTOMIZATION
            },
            [ef.s6.PROFILE_USER_PROFILE]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: ef.s6.PROFILE_CUSTOMIZATION
            },
            [ef.s6.PROFILE_SERVER_PROFILES]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: ef.s6.PROFILE_CUSTOMIZATION
            },
            [ef.s6.PRIVACY_AND_SAFETY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                label: eb.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eb.Z.Messages.PRIVACY_AND_SAFETY,
                element: eC.Z
            },
            [ef.s6.PRIVACY_USER_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
                parent: ef.s6.PRIVACY_AND_SAFETY
            },
            [ef.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [
                    eb.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
                    eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER,
                    eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR,
                    eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT,
                    eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT
                ],
                parent: ef.s6.PRIVACY_USER_SETTINGS
            },
            [ef.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [
                    eb.Z.Messages.SETTINGS_DM_SPAM_FILTER,
                    eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES,
                    eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX
                ],
                parent: ef.s6.PRIVACY_USER_SETTINGS
            },
            [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [
                    eb.Z.Messages.USER_DM_SETTINGS,
                    eb.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES,
                    eb.Z.Messages.USER_DM_SEARCH_TERM_DM
                ],
                parent: ef.s6.PRIVACY_USER_SETTINGS
            },
            [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !ez
            },
            [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SERVER_SETTINGS],
                parent: ef.s6.PRIVACY_AND_SAFETY
            },
            [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !ez
            },
            [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [ef.s6.PRIVACY_DATA_PRIVACY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: ef.s6.PRIVACY_USER_SETTINGS
            },
            [ef.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: ef.s6.PRIVACY_DATA_PRIVACY
            },
            [ef.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: ef.s6.PRIVACY_DATA_PRIVACY
            },
            [ef.s6.PRIVACY_DATA_QUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: ef.s6.PRIVACY_DATA_PRIVACY
            },
            [ef.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: ef.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [ef.CF]
            },
            [ef.s6.PRIVACY_DATA_REQUEST]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: ef.s6.PRIVACY_DATA_PRIVACY
            },
            [ef.s6.PRIVACY_STAFF_ONLY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: ef.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ew
            },
            [ef.s6.PRIVACY_KEYWORD_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [
                    eb.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
                    eb.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD
                ],
                parent: ef.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eY
            },
            [ef.s6.PRIVACY_TERMS_POLICY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: ef.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [ef.CF]
            },
            [ef.s6.PRIVACY_SAFETY_ALERTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: ef.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ek
            },
            [ef.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: ef.s6.PRIVACY_AND_SAFETY
            },
            [ef.s6.PRIVACY_ENCRYPTION]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [
                    eb.Z.Messages.E2EE_ENCRYPTION,
                    eb.Z.Messages.E2EE_END_TO_END_ENCRYPTION
                ],
                parent: ef.s6.PRIVACY_AND_SAFETY
            },
            [ef.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: ef.s6.PRIVACY_ENCRYPTION
            },
            [ef.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: ef.s6.PRIVACY_ENCRYPTION
            },
            [ef.s6.PRIVACY_FAMILY_CENTER]: {
                section: eP.oAB.FAMILY_CENTER,
                searchableTitles: [eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: el.Z,
                badgeCount: eU,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: eb.Z.Messages.NEW,
                    color: A.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [ef.s6.AUTHORIZED_APPS]: {
                section: eP.oAB.AUTHORIZED_APPS,
                searchableTitles: [eb.Z.Messages.AUTHORIZED_APPS],
                label: eb.Z.Messages.AUTHORIZED_APPS,
                element: en.Z
            },
            [ef.s6.SESSIONS]: {
                section: eP.oAB.SESSIONS,
                searchableTitles: [eb.Z.Messages.AUTH_SESSIONS],
                label: eb.Z.Messages.AUTH_SESSIONS,
                ariaLabel: eb.Z.Messages.AUTH_SESSIONS,
                element: eA.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => Y.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [ef.s6.CONNECTIONS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eb.Z.Messages.CONNECTIONS],
                label: eb.Z.Messages.CONNECTIONS,
                ariaLabel: eb.Z.Messages.CONNECTIONS,
                element: ei.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: M },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [ef.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [eb.Z.Messages.CONNECTED_ACCOUNTS],
                parent: ef.s6.CONNECTIONS,
                element: ei.Z
            },
            [ef.s6.CLIPS]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [eb.Z.Messages.CLIPS],
                label: eb.Z.Messages.CLIPS,
                ariaLabel: eb.Z.Messages.CLIPS,
                icon: eF ? (0, n.jsx)(N.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !ey
            },
            [ef.s6.FRIEND_REQUESTS]: {
                section: eP.oAB.FRIEND_REQUESTS,
                searchableTitles: [eb.Z.Messages.FRIEND_REQUESTS],
                label: eb.Z.Messages.FRIEND_REQUESTS,
                element: ec.Z
            },
            [ef.s6.PREMIUM]: {
                section: eP.oAB.PREMIUM,
                ariaLabel: eb.Z.Messages.PREMIUM,
                searchableTitles: [eb.Z.Messages.PREMIUM],
                label: eb.Z.Messages.PREMIUM,
                element: K.Z,
                className: ev.premiumTab
            },
            [ef.s6.GUILD_BOOSTING]: {
                section: eP.oAB.GUILD_BOOSTING,
                searchableTitles: [eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: eN.Z
            },
            [ef.s6.SUBSCRIPTIONS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                ariaLabel: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [eb.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: D.Z,
                icon: x ? (0, n.jsx)(o.CircleExclamationPointIcon, {
                    size: 'xs',
                    color: r.Z.unsafe_rawColors.YELLOW_300.css
                }) : null
            },
            [ef.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                searchableTitles: [eb.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: ef.s6.SUBSCRIPTIONS
            },
            [ef.s6.GIFT_INVENTORY]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY],
                label: eb.Z.Messages.GIFT_INVENTORY,
                element: eE.Z,
                ariaLabel: eb.Z.Messages.GIFT_INVENTORY,
                badgeCount: t
            },
            [ef.s6.GIFT_NITRO]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_NITRO],
                parent: ef.s6.GIFT_INVENTORY,
                predicate: () => !eH && eK
            },
            [ef.s6.GIFT_CODE_REDEMPTION]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: ef.s6.GIFT_INVENTORY,
                predicate: () => !eH
            },
            [ef.s6.GIFT_INVENTORY_QUESTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.QUESTS],
                parent: ef.s6.GIFT_INVENTORY,
                predicate: () => eW
            },
            [ef.s6.GIFT_INVENTORY_LIST]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: ef.s6.GIFT_INVENTORY,
                predicate: () => !eH
            },
            [ef.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: ef.s6.GIFT_INVENTORY,
                predicate: () => eH
            },
            [ef.s6.BILLING]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING],
                label: eb.Z.Messages.BILLING,
                ariaLabel: eb.Z.Messages.BILLING,
                element: ea.Z
            },
            [ef.s6.BILLING_PAYMENT_METHODS]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: ef.s6.BILLING
            },
            [ef.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eP.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: ef.s6.BILLING
            },
            [ef.s6.APPEARANCE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.APPEARANCE],
                label: eb.Z.Messages.APPEARANCE,
                ariaLabel: eb.Z.Messages.APPEARANCE,
                element: es.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eb.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: ej()
            },
            [ef.s6.APPEARANCE_THEME]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.THEME],
                parent: ef.s6.APPEARANCE
            },
            [ef.s6.APPEARANCE_COLOR]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: ef.s6.APPEARANCE_THEME
            },
            [ef.s6.APPEARANCE_ICON]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: ef.s6.APPEARANCE_THEME
            },
            [ef.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: ef.s6.APPEARANCE
            },
            [ef.s6.APPEARANCE_SCALING_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: ef.s6.APPEARANCE
            },
            [ef.s6.ACCESSIBILITY]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY],
                label: eb.Z.Messages.ACCESSIBILITY,
                ariaLabel: eb.Z.Messages.ACCESSIBILITY,
                element: J.Z
            },
            [ef.s6.ACCESSIBILITY_SATURATION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_TAGS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_STICKERS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_MESSAGES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
                parent: ef.s6.ACCESSIBILITY
            },
            [ef.s6.VOICE_AND_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.VOICE_AND_VIDEO],
                label: eb.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: eb.Z.Messages.VOICE_AND_VIDEO,
                element: eD.Z,
                predicate: () => j.Z.isSupported()
            },
            [ef.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.FORM_LABEL_INPUT_DEVICE,
                    eb.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
                    eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
                    eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
                    eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
                ],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.FORM_LABEL_INPUT_VOLUME,
                    eb.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
                    eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
                    eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
                    eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
                ],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
                    eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
                ],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.FORM_LABEL_INPUT_MODE,
                    eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
                ],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                    eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
                ],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SOUNDBOARD],
                parent: ef.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ef.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: ef.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [ef.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.VIDEO_SETTINGS],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: ef.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => j.Z.supports(eZ.AN.VIDEO)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
                parent: ef.s6.VOICE_AND_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => j.Z.supports(eZ.AN.OPEN_H264)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== V.ZP.releaseChannel && j.Z.isExperimentalEncodersSupported()
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.ECHO_CANCELLATION],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [
                    eb.Z.Messages.NOISE_SUPPRESSION,
                    eb.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP
                ],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isNoiseSuppressionSupported()
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAdvancedVoiceActivitySupported()
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAutomaticGainControlSupported()
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_QOS],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(eZ.AN.QOS)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(eZ.AN.ATTENUATION)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(eZ.AN.LEGACY_AUDIO_SUBSYSTEM) || j.Z.supports(eZ.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_DEBUG],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => y.isPlatformEmbedded && j.Z.supports(eZ.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => j.Z.isAecDumpSupported()
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === V.ZP.releaseChannel || 'development' === V.ZP.releaseChannel) && ew && j.Z.supports(eZ.AN.CONNECTION_REPLAY)
            },
            [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
            },
            [ef.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.RESET_VOICE_SETTINGS],
                parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [ef.s6.POGGERMODE]: {
                section: eP.oAB.POGGERMODE,
                searchableTitles: [eb.Z.Messages.POGGERMODE],
                label: eb.Z.Messages.POGGERMODE,
                ariaLabel: eb.Z.Messages.POGGERMODE,
                element: R.Z,
                predicate: () => p.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: s(348621),
                    className: ev.poggermodeIcon
                })
            },
            [ef.s6.CHAT]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.CHAT],
                label: eb.Z.Messages.CHAT,
                ariaLabel: eb.Z.Messages.CHAT,
                element: eg.Z
            },
            [ef.s6.CHAT_INLINE_MEDIA]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_MEDIA_LABEL],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_EMBED_MEDIA],
                parent: ef.s6.CHAT_INLINE_MEDIA
            },
            [ef.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: ef.s6.CHAT_INLINE_MEDIA
            },
            [ef.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.IMAGE_DESCRIPTION],
                parent: ef.s6.CHAT_INLINE_MEDIA
            },
            [ef.s6.CHAT_EMBEDS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_EMBEDS],
                parent: ef.s6.CHAT_EMBEDS
            },
            [ef.s6.CHAT_EMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.EMOJI],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_EMOJI_REACTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_REACTIONS],
                parent: ef.s6.CHAT_EMOJI
            },
            [ef.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.CONVERT_EMOTICONS],
                parent: ef.s6.CHAT_EMOJI
            },
            [ef.s6.CHAT_STICKERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: ef.s6.CHAT_STICKERS
            },
            [ef.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: ef.s6.CHAT_STICKERS
            },
            [ef.s6.CHAT_TEXT_BOX]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: ef.s6.CHAT_TEXT_BOX
            },
            [ef.s6.CHAT_THREADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.THREADS],
                parent: ef.s6.CHAT
            },
            [ef.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: ef.s6.CHAT_THREADS
            },
            [ef.s6.CHAT_SPOILERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: ef.s6.CHAT
            },
            [ef.s6.NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.NOTIFICATIONS],
                label: eb.Z.Messages.NOTIFICATIONS,
                ariaLabel: eb.Z.Messages.NOTIFICATIONS,
                element: eI.Z
            },
            [ef.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: ef.s6.NOTIFICATIONS,
                predicate: () => (0, y.isWindows)()
            },
            [ef.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: ef.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [ef.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ef.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ef.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [ef.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ef.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [ef.s6.NOTIFICATIONS_SOUNDS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.SOUNDS],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: ef.s6.NOTIFICATIONS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: ef.s6.NOTIFICATIONS_EMAILS
            },
            [ef.s6.KEYBINDS]: {
                section: eP.oAB.KEYBINDS,
                searchableTitles: [eb.Z.Messages.KEYBINDS],
                label: eb.Z.Messages.KEYBINDS,
                element: eu.Z
            },
            [ef.s6.LANGUAGE]: {
                section: eP.oAB.LOCALE,
                searchableTitles: [eb.Z.Messages.LANGUAGE],
                label: eb.Z.Messages.LANGUAGE,
                element: eT.Z
            },
            [ef.s6.WINDOW_SETTINGS]: {
                section: eP.oAB.WINDOWS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: ep.Z,
                predicate: () => y.isPlatformEmbedded && (0, y.isWindows)()
            },
            [ef.s6.LINUX_SETTINGS]: {
                section: eP.oAB.LINUX,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: eB,
                predicate: () => y.isPlatformEmbedded && (0, y.isLinux)()
            },
            [ef.s6.STREAMER_MODE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.STREAMER_MODE],
                label: eb.Z.Messages.STREAMER_MODE,
                ariaLabel: eb.Z.Messages.STREAMER_MODE,
                element: eh.Z
            },
            [ef.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_ENABLE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: ef.s6.STREAMER_MODE
            },
            [ef.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: ef.s6.STREAMER_MODE,
                predicate: () => {
                    var e, t, s;
                    return null !== (s = null === u.Z || void 0 === u.Z ? void 0 : null === (t = u.Z.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s && s;
                }
            },
            [ef.s6.SPEED_TEST]: {
                section: eP.oAB.SPEED_TEST,
                searchableTitles: ['Speed Test'],
                label: 'Speed Test',
                element: Q.Z,
                predicate: () => b.Z.isSupported() && w.Z.getCurrentConfig({ location: '9f7d84_2' }).showSettings
            },
            [ef.s6.SETTINGS_ADVANCED]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
                label: eb.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: eb.Z.Messages.SETTINGS_ADVANCED,
                element: et.Z
            },
            [ef.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.DEVELOPER_MODE],
                parent: ef.s6.SETTINGS_ADVANCED,
                predicate: () => G.wS
            },
            [ef.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.HARDWARE_ACCELERATION],
                parent: ef.s6.SETTINGS_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [ef.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: ef.s6.SETTINGS_ADVANCED,
                predicate: () => eQ
            },
            [ef.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: ef.s6.SETTINGS_ADVANCED,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV],
                parent: ef.s6.SETTINGS_ADVANCED
            },
            [ef.s6.ACTIVITY_PRIVACY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
                label: eb.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: eb.Z.Messages.ACTIVITY_PRIVACY,
                element: ee.Z,
                predicate: () => !ey
            },
            [ef.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_STATUS],
                parent: ey ? ef.s6.GAMES_ACTIVITY_PRIVACY : ef.s6.ACTIVITY_PRIVACY
            },
            [ef.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: ey ? ef.s6.GAMES_ACTIVITY_PRIVACY : ef.s6.ACTIVITY_PRIVACY
            },
            [ef.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
                section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.BROADCASTING_SETTINGS],
                parent: ey ? ef.s6.GAMES_ACTIVITY_PRIVACY : ef.s6.ACTIVITY_PRIVACY,
                predicate: () => eq
            },
            [ef.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ef.CF],
                parent: ey ? ef.s6.GAMES_ACTIVITY_PRIVACY : ef.s6.ACTIVITY_PRIVACY
            },
            [ef.s6.REGISTERED_GAMES]: {
                section: eP.oAB.REGISTERED_GAMES,
                searchableTitles: [eb.Z.Messages.REGISTERED_GAMES],
                label: eb.Z.Messages.REGISTERED_GAMES,
                element: ed.Z,
                predicate: () => !ey && (0, ex.Jw)()
            },
            [ef.s6.OVERLAY]: {
                section: eP.oAB.OVERLAY,
                searchableTitles: [eb.Z.Messages.OVERLAY],
                label: eb.Z.Messages.OVERLAY,
                element: eS.Z,
                predicate: () => !ey && eG
            },
            [ef.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, S.Z)(!0),
                searchableTitles: [eb.Z.Messages.WHATS_NEW],
                label: eb.Z.Messages.WHATS_NEW
            },
            [ef.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    U.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.q)({
                        href: e,
                        shouldConfirm: !0,
                        onConfirm: () => {
                            U.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e);
                        }
                    });
                },
                searchableTitles: [eb.Z.Messages.MERCHANDISE],
                label: eb.Z.Messages.MERCHANDISE,
                ariaLabel: eb.Z.Messages.MERCHANDISE
            },
            [ef.s6.HYPESQUAD]: {
                section: eP.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: eb.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: e_.Z
            },
            [ef.s6.EXPERIMENTS]: {
                section: eP.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eR.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eo.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => ew && v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [ef.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => ew && v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => I.q && v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: ef.s6.DEVELOPER_OPTIONS,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.HOTSPOT_OPTIONS]: {
                section: eP.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: H.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eP.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: h.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.PAYMENT_FLOW_MODALS]: {
                section: eP.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: W.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.TEXT_PLAYGROUND]: {
                section: eP.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eO.Z,
                predicate: () => (0, q.D)() || v.Z.isDeveloper
            },
            [ef.s6.DESIGN_SYSTEMS]: {
                section: eP.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: er.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.TEXT_COMPONENTS]: {
                section: eP.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: X.Z,
                predicate: () => (0, q.D)() || v.Z.isDeveloper
            },
            [ef.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eP.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: m.Z,
                predicate: () => v.Z.isDeveloper
            },
            [ef.s6.QUEST_PREVIEW_TOOL]: {
                section: eP.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: Z.Z,
                predicate: () => (0, L.X7)({ location: eL.dr.QUEST_PREVIEW_TOOL })
            },
            [ef.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
                        header: eb.Z.Messages.LOGOUT,
                        confirmText: eb.Z.Messages.LOGOUT,
                        cancelText: eb.Z.Messages.CANCEL,
                        onCancel: e.onClose,
                        onConfirm: () => c.Z.logout(),
                        ...e,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: eb.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                        })
                    }));
                },
                label: eb.Z.Messages.LOGOUT,
                ariaLabel: eb.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [ef.s6.SOCIAL_LINKS]: {
                section: E.ID.CUSTOM,
                element: z.Z
            },
            [ef.s6.CLIENT_DEBUG_INFO]: {
                section: E.ID.CUSTOM,
                element: k.Z
            }
        });
    };
