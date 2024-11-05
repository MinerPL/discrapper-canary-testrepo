n.d(t, {
    Gj: function () {
        return M;
    },
    Pt: function () {
        return F;
    },
    VO: function () {
        return w;
    },
    ji: function () {
        return G;
    },
    q8: function () {
        return U;
    }
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(319828),
    m = n(592204),
    h = n(610697),
    g = n(880257),
    p = n(631885),
    x = n(223639),
    S = n(160913),
    T = n(725727),
    C = n(977156),
    _ = n(921157),
    E = n(237292),
    f = n(314897),
    I = n(283595),
    N = n(663389),
    A = n(594174),
    b = n(202527),
    v = n(187819),
    j = n(695346),
    O = n(620163),
    R = n(295545),
    P = n(168308),
    D = n(839469),
    y = n(726985),
    B = n(46140),
    L = n(388032);
function Z(e) {
    let { shouldMergeGameSettings: t } = e,
        n = [
            {
                header: L.intl.string(L.t.cduTBA),
                settings: [y.s6.ACCOUNT, y.s6.GAMES, y.s6.PROFILE_CUSTOMIZATION, y.s6.PRIVACY_AND_SAFETY, y.s6.CONTENT_SOCIAL, y.s6.DATA_PRIVACY, y.s6.PRIVACY_FAMILY_CENTER, y.s6.AUTHORIZED_APPS, y.s6.SESSIONS, y.s6.CONNECTIONS, y.s6.CLIPS, y.s6.FRIEND_REQUESTS]
            },
            {
                header: L.intl.string(L.t['4uOdGh']),
                divider: !0,
                settings: [y.s6.PREMIUM, y.s6.GUILD_BOOSTING, y.s6.SUBSCRIPTIONS, y.s6.GIFT_INVENTORY, y.s6.BILLING]
            },
            {
                header: L.intl.string(L.t.f2n1TE),
                divider: !0,
                settings: [y.s6.APPEARANCE, y.s6.ACCESSIBILITY, y.s6.VOICE_AND_VIDEO, y.s6.POGGERMODE, y.s6.CHAT, y.s6.NOTIFICATIONS, y.s6.KEYBINDS, y.s6.LANGUAGE, y.s6.WINDOW_SETTINGS, y.s6.LINUX_SETTINGS, y.s6.STREAMER_MODE, y.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [y.s6.CHANGELOG, y.s6.MERCHANDISE, y.s6.HYPESQUAD, y.s6.TOWNHALL, y.s6.EXPERIMENTS, y.s6.DEVELOPER_OPTIONS, y.s6.HOTSPOT_OPTIONS, y.s6.DISMISSIBLE_CONTENT_OPTIONS, y.s6.PAYMENT_FLOW_MODALS, y.s6.DESIGN_SYSTEMS, y.s6.TEXT_PLAYGROUND, y.s6.TEXT_COMPONENTS, y.s6.INTL_TESTING, y.s6.PROFILE_EFFECTS_PREVIEW_TOOL, y.s6.WEB_SETTING_TREE_TOOL, y.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [y.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [y.s6.SOCIAL_LINKS, y.s6.CLIENT_DEBUG_INFO]
            }
        ],
        i = {
            header: L.intl.string(L.t.SmHCFR),
            divider: !0,
            settings: [y.s6.ACTIVITY_PRIVACY, y.s6.REGISTERED_GAMES, y.s6.OVERLAY]
        };
    return t ? n : n.toSpliced(3, 0, i);
}
function F() {
    var e, t, n, i;
    let l = (0, T.YO)().length,
        D = (0, S.U)(),
        y = (0, s.e7)([N.Z], () => N.Z.getProps().impressionSource),
        L = (0, p.gU)(),
        Z = (0, P.bC)(),
        F = (0, c.Go)(),
        [M] = (0, d.cv)(F ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        k = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: k + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: k + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: w } = b.b.useExperiment({ location: 'settings' }),
        U = (0, R.eA)({ location: 'settings' }),
        V = (0, m.Xo)({ location: 'settings' }),
        G = null !== (n = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        Y = (0, E.y0)({ location: 'settings' }),
        H = (0, o.Q)(),
        z = (0, C.Zy)({ location: B.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: W } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        K = (0, s.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        q = (0, s.e7)([f.default], () => f.default.hasTOTPEnabled()),
        Q = j.Sb.useSetting(),
        X = (0, h.Z)(),
        J = (0, v._p)({ location: 'settings-renderer-utils-web' }),
        { hypeSquadRemoved: $ } = u.Z.useExperiment({ location: 'settings' }),
        ee = null === (i = (0, g.Z)()) || void 0 === i || i,
        et = (null === (t = (0, _.s)()) || void 0 === t ? void 0 : t.length) > 0;
    return (0, O.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: D,
        impressionSource: y,
        numOfPendingFamilyRequests: L,
        isOverlaySupported: Z,
        isClipsBetaTagShowing: M === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: w,
        isUserSettingsSearchEnabled: U,
        isKeywordFilteringEnabled: V,
        isStaff: G,
        isInappropriateConversationWarningEnabled: Y,
        paymentsBlocked: H,
        isEligibleForQuests: z,
        showGiftNitro: W,
        isStricterMessageRequestsEnabled: X,
        hasLibraryApplication: K,
        hasTOTPEnabled: q,
        developerMode: Q,
        isSafetySettingsV2Enabled: J,
        isAdultUser: ee,
        hasSecureFramesVerifiedUserIds: et,
        hypeSquadRemoved: $
    });
}
function M(e) {
    let { searchResults: t } = (0, D.E)(),
        n = F();
    if (!(0, R.eA)({ location: 'settings' })) return new Set();
    let i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        r = Object.fromEntries(
            Object.entries(s)
                .filter((e) => {
                    let [t, { parent: n, section: s }] = e;
                    return null != n && s === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        l = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
            Object.entries(r)
                .filter((t) => {
                    let [n, i] = t;
                    return i === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in s))
        if (!l.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                l.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), a(e);
        }
    return l;
}
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = V(t),
        a = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var s;
                            let e = null !== (s = n.get(i)) && void 0 !== s ? s : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != i ? i : []).filter((e) => r.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && s.push({ section: l.ID.DIVIDER }),
                null != e.header &&
                    s.push({
                        section: l.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    s.push({
                        ...t[e],
                        tabPredicate: () => {
                            var t, n, s;
                            return null == i || ((t = e), (n = i), (s = a), (t === y.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : a.get(e)
                    });
                }));
        }),
        s
    );
}
function w() {
    let e = F(),
        { shouldMergeGameSettings: t } = b.b.useExperiment({ location: 'settings' }),
        n = i.useMemo(() => Z({ shouldMergeGameSettings: t }), [t]);
    return i.useMemo(() => k(n, e), [n, e]);
}
function U(e) {
    let t = F(),
        n = (function () {
            let { shouldMergeGameSettings: e } = b.b.useExperiment({ location: 'settings' }),
                t = Z({ shouldMergeGameSettings: e });
            return i.useMemo(
                () => [
                    {
                        header: L.intl.string(L.t.zkoeq6),
                        settings: [
                            ...t
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            y.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [t]
            );
        })(),
        s = (0, R.c3)({ location: 'settings' });
    return i.useMemo(() => k(n, t, s, new Set(e)), [n, t, s, e]);
}
function V(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function G(e) {
    return Array.from(V(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
