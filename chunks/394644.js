t.d(s, {
    Gj: function () {
        return G;
    },
    Pt: function () {
        return U;
    },
    VO: function () {
        return y;
    },
    ji: function () {
        return w;
    },
    q8: function () {
        return V;
    }
}),
    t(639576),
    t(536091),
    t(47120),
    t(653041);
var n = t(470079),
    a = t(442837),
    i = t(704215),
    r = t(493544),
    o = t(634894),
    l = t(211242),
    c = t(770471),
    d = t(924557),
    _ = t(706140),
    u = t(592204),
    E = t(610697),
    T = t(880257),
    S = t(631885),
    I = t(223639),
    N = t(160913),
    m = t(725727),
    C = t(977156),
    A = t(921157),
    g = t(237292),
    h = t(314897),
    O = t(283595),
    p = t(663389),
    R = t(594174),
    x = t(202527),
    f = t(187819),
    M = t(695346),
    D = t(620163),
    P = t(295545),
    L = t(168308),
    b = t(839469),
    Z = t(726985),
    v = t(46140),
    j = t(689938);
function B(e) {
    let { shouldMergeGameSettings: s } = e,
        t = [
            {
                header: j.Z.Messages.USER_SETTINGS,
                settings: [Z.s6.ACCOUNT, Z.s6.GAMES, Z.s6.PROFILE_CUSTOMIZATION, Z.s6.PRIVACY_AND_SAFETY, Z.s6.PRIVACY_AND_SAFETY_V2, Z.s6.PRIVACY_FAMILY_CENTER, Z.s6.AUTHORIZED_APPS, Z.s6.SESSIONS, Z.s6.CONNECTIONS, Z.s6.CLIPS, Z.s6.FRIEND_REQUESTS]
            },
            {
                header: j.Z.Messages.BILLING_SETTINGS,
                divider: !0,
                settings: [Z.s6.PREMIUM, Z.s6.GUILD_BOOSTING, Z.s6.SUBSCRIPTIONS, Z.s6.GIFT_INVENTORY, Z.s6.BILLING]
            },
            {
                header: j.Z.Messages.APP_SETTINGS,
                divider: !0,
                settings: [Z.s6.APPEARANCE, Z.s6.ACCESSIBILITY, Z.s6.VOICE_AND_VIDEO, Z.s6.POGGERMODE, Z.s6.CHAT, Z.s6.NOTIFICATIONS, Z.s6.KEYBINDS, Z.s6.LANGUAGE, Z.s6.WINDOW_SETTINGS, Z.s6.LINUX_SETTINGS, Z.s6.STREAMER_MODE, Z.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [Z.s6.CHANGELOG, Z.s6.MERCHANDISE, Z.s6.HYPESQUAD, Z.s6.EXPERIMENTS, Z.s6.DEVELOPER_OPTIONS, Z.s6.HOTSPOT_OPTIONS, Z.s6.DISMISSIBLE_CONTENT_OPTIONS, Z.s6.PAYMENT_FLOW_MODALS, Z.s6.DESIGN_SYSTEMS, Z.s6.TEXT_PLAYGROUND, Z.s6.TEXT_COMPONENTS, Z.s6.INTL_TESTING, Z.s6.PROFILE_EFFECTS_PREVIEW_TOOL, Z.s6.WEB_SETTING_TREE_TOOL, Z.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [Z.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [Z.s6.SOCIAL_LINKS, Z.s6.CLIENT_DEBUG_INFO]
            }
        ],
        n = {
            header: j.Z.Messages.ACTIVITY_SETTINGS,
            divider: !0,
            settings: [Z.s6.ACTIVITY_PRIVACY, Z.s6.REGISTERED_GAMES, Z.s6.OVERLAY]
        };
    return s ? t : t.toSpliced(3, 0, n);
}
function U() {
    var e, s, t, n;
    let r = (0, m.YO)().length,
        b = (0, N.U)(),
        Z = (0, a.e7)([p.Z], () => p.Z.getProps().impressionSource),
        j = (0, S.gU)(),
        B = (0, L.bC)(),
        U = (0, d.Go)(),
        [G] = (0, _.cv)(U ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    (0, o.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: y } = x.b.useExperiment({ location: 'settings' }),
        V = (0, P.eA)({ location: 'settings' }),
        Y = (0, u.Xo)({ location: 'settings' }),
        w = null !== (t = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t,
        k = (0, g.y0)({ location: 'settings' }),
        H = (0, l.Q)(),
        W = (0, C.Zy)({ location: v.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: K } = I.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        z = (0, a.e7)([O.Z], () => O.Z.hasLibraryApplication()),
        Q = (0, a.e7)([h.default], () => h.default.hasTOTPEnabled()),
        { canBroadcast: X } = c.Z.useExperiment({ location: 'user_settings_activity_privacy' }, { autoTrackExposure: !0 }),
        q = M.Sb.useSetting(),
        J = (0, E.Z)(),
        $ = (0, f._p)({ location: 'settings-renderer-utils-web' }),
        ee = null === (n = (0, T.Z)()) || void 0 === n || n,
        es = (null === (s = (0, A.s)()) || void 0 === s ? void 0 : s.length) > 0;
    return (0, D.i)({
        unseenGiftCount: r,
        showPrepaidPaymentPastDueWarning: b,
        impressionSource: Z,
        numOfPendingFamilyRequests: j,
        isOverlaySupported: B,
        isClipsBetaTagShowing: G === i.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: y,
        isUserSettingsSearchEnabled: V,
        isKeywordFilteringEnabled: Y,
        isStaff: w,
        isInappropriateConversationWarningEnabled: k,
        paymentsBlocked: H,
        isEligibleForQuests: W,
        showGiftNitro: K,
        isStricterMessageRequestsEnabled: J,
        hasLibraryApplication: z,
        hasTOTPEnabled: Q,
        canBroadcastActivity: X,
        developerMode: q,
        isSafetySettingsV2Enabled: $,
        isAdultUser: ee,
        hasSecureFramesVerifiedUserIds: es
    });
}
function G(e) {
    let { searchResults: s } = (0, b.E)(),
        t = U();
    if (!(0, P.eA)({ location: 'settings' })) return new Set();
    let n = t[e],
        a = Object.fromEntries(
            Object.entries(t).filter((e) => {
                let [s, t] = e;
                return t.section === n.section;
            })
        ),
        i = Object.fromEntries(
            Object.entries(a)
                .filter((e) => {
                    let [s, { parent: t, section: a }] = e;
                    return null != t && a === n.section;
                })
                .map((e) => {
                    let [s, { parent: t }] = e;
                    return [s, t];
                })
        ),
        r = new Set(),
        o = (e) => {
            let s = a[e];
            if (null == s) return;
            r.add(e);
            let t = s.parent;
            null != t && o(t);
        },
        l = (e) => {
            for (let s of (r.add(e),
            Object.entries(i)
                .filter((s) => {
                    let [t, n] = s;
                    return n === e;
                })
                .map((e) => {
                    let [s] = e;
                    return s;
                })))
                l(s);
        };
    for (let e of s.filter((e) => e in a))
        if (!r.has(e)) {
            if (null != a[e].element && null == a[e].parent) {
                r.clear();
                break;
            }
            Object.values(i).includes(e) && l(e), o(e);
        }
    return r;
}
function F(e, s) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0,
        a = [],
        i = Y(s),
        o = (function (e, s) {
            let t = new Map();
            return (
                null != s &&
                    s.forEach((s) => {
                        let n = e[s].parent;
                        for (; null != n && null != e[n].parent; ) n = e[n].parent;
                        if (null != n) {
                            var a;
                            let e = null !== (a = t.get(n)) && void 0 !== a ? a : 0;
                            t.set(n, e + 1);
                        }
                    }),
                t
            );
        })(s, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && a.push({ section: r.ID.DIVIDER }),
                null != e.header &&
                    a.push({
                        section: r.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    a.push({
                        ...s[e],
                        tabPredicate: () => {
                            var s, t, a;
                            return null == n || ((s = e), (t = n), (a = o), (s === Z.s6.SEARCH_NO_RESULTS && 0 === t.size) || a.has(s) || t.has(s));
                        },
                        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
                    });
                }));
        }),
        a
    );
}
function y() {
    let e = U(),
        { shouldMergeGameSettings: s } = x.b.useExperiment({ location: 'settings' }),
        t = n.useMemo(() => B({ shouldMergeGameSettings: s }), [s]);
    return n.useMemo(() => F(t, e), [t, e]);
}
function V(e) {
    let s = U(),
        t = (function () {
            let { shouldMergeGameSettings: e } = x.b.useExperiment({ location: 'settings' }),
                s = B({ shouldMergeGameSettings: e });
            return n.useMemo(
                () => [
                    {
                        header: j.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
                        settings: [
                            ...s
                                .map((e) => {
                                    let { settings: s } = e;
                                    return s;
                                })
                                .flat(1),
                            Z.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [s]
            );
        })(),
        a = (0, P.c3)({ location: 'settings' });
    return n.useMemo(() => F(t, s, a, new Set(e)), [t, s, a, e]);
}
function Y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [s, t] = e;
            return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate());
        })
    );
}
function w(e) {
    return Array.from(Y(e).entries()).map((e) => {
        let [s, t] = e;
        return [s, t.searchableTitles];
    });
}
