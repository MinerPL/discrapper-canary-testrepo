s.d(t, {
    Gj: function () {
        return v;
    },
    Pt: function () {
        return b;
    },
    VO: function () {
        return B;
    },
    ji: function () {
        return F;
    },
    q8: function () {
        return U;
    }
}), s(639576), s(536091), s(47120), s(653041);
var n = s(470079), a = s(442837), i = s(704215), r = s(493544), o = s(634894), l = s(211242), c = s(770471), d = s(924557), _ = s(706140), E = s(592204), u = s(610697), T = s(631885), I = s(223639), S = s(160913), N = s(725727), C = s(977156), m = s(237292), A = s(314897), h = s(283595), g = s(663389), O = s(594174), p = s(202527), R = s(620163), x = s(295545), M = s(168308), D = s(839469), f = s(726985), P = s(46140), L = s(689938);
function Z(e) {
    let t = [
            {
                header: L.Z.Messages.USER_SETTINGS,
                settings: [
                    f.s6.ACCOUNT,
                    f.s6.GAMES,
                    f.s6.PROFILE_CUSTOMIZATION,
                    f.s6.PRIVACY_AND_SAFETY,
                    f.s6.PRIVACY_FAMILY_CENTER,
                    f.s6.AUTHORIZED_APPS,
                    f.s6.SESSIONS,
                    f.s6.CONNECTIONS,
                    f.s6.CLIPS,
                    f.s6.FRIEND_REQUESTS
                ]
            },
            {
                header: L.Z.Messages.BILLING_SETTINGS,
                divider: !0,
                settings: [
                    f.s6.PREMIUM,
                    f.s6.GUILD_BOOSTING,
                    f.s6.SUBSCRIPTIONS,
                    f.s6.GIFT_INVENTORY,
                    f.s6.BILLING
                ]
            },
            {
                header: L.Z.Messages.APP_SETTINGS,
                divider: !0,
                settings: [
                    f.s6.APPEARANCE,
                    f.s6.ACCESSIBILITY,
                    f.s6.VOICE_AND_VIDEO,
                    f.s6.POGGERMODE,
                    f.s6.CHAT,
                    f.s6.NOTIFICATIONS,
                    f.s6.KEYBINDS,
                    f.s6.LANGUAGE,
                    f.s6.WINDOW_SETTINGS,
                    f.s6.LINUX_SETTINGS,
                    f.s6.STREAMER_MODE,
                    f.s6.SPEED_TEST,
                    f.s6.SETTINGS_ADVANCED
                ]
            },
            {
                divider: !0,
                settings: [
                    f.s6.CHANGELOG,
                    f.s6.MERCHANDISE,
                    f.s6.HYPESQUAD,
                    f.s6.EXPERIMENTS,
                    f.s6.DEVELOPER_OPTIONS,
                    f.s6.HOTSPOT_OPTIONS,
                    f.s6.DISMISSIBLE_CONTENT_OPTIONS,
                    f.s6.PAYMENT_FLOW_MODALS,
                    f.s6.DESIGN_SYSTEMS,
                    f.s6.TEXT_PLAYGROUND,
                    f.s6.TEXT_COMPONENTS,
                    f.s6.PROFILE_EFFECTS_PREVIEW_TOOL,
                    f.s6.QUEST_PREVIEW_TOOL
                ]
            },
            {
                divider: !0,
                settings: [f.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [
                    f.s6.SOCIAL_LINKS,
                    f.s6.CLIENT_DEBUG_INFO
                ]
            }
        ], s = {
            header: L.Z.Messages.ACTIVITY_SETTINGS,
            divider: !0,
            settings: [
                f.s6.ACTIVITY_PRIVACY,
                f.s6.REGISTERED_GAMES,
                f.s6.OVERLAY
            ]
        };
    return e ? t : t.toSpliced(3, 0, s);
}
function b() {
    var e, t;
    let s = (0, N.YO)().length, n = (0, S.U)(), r = (0, a.e7)([g.Z], () => g.Z.getProps().impressionSource), D = (0, T.gU)(), f = (0, M.bC)(), L = (0, d.Go)(), [Z] = (0, _.c)(L ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []), b = 'useGenerateUserSettingsSections';
    (0, o.j)({
        location: b + ' auto on',
        autoTrackExposure: !0
    }), (0, o.j)({
        location: b + ' auto off',
        autoTrackExposure: !1
    });
    let {shouldMergeGameSettings: v} = p.b.useExperiment({ location: 'settings' }), j = (0, x.eA)({ location: 'settings' }), B = (0, E.Xo)({ location: 'settings' }), U = null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t, G = (0, m.y0)({ location: 'settings' }), F = (0, l.Q)(), y = (0, C.Zy)({ location: P.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }), {enabled: V} = I.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }), Y = (0, a.e7)([h.Z], () => h.Z.hasLibraryApplication()), w = (0, a.e7)([A.default], () => A.default.hasTOTPEnabled()), {canBroadcast: k} = c.Z.useExperiment({ location: 'user_settings_activity_privacy' }, { autoTrackExposure: !0 }), H = (0, u.Z)();
    return (0, R.i)({
        unseenGiftCount: s,
        showPrepaidPaymentPastDueWarning: n,
        impressionSource: r,
        numOfPendingFamilyRequests: D,
        isOverlaySupported: f,
        isClipsBetaTagShowing: Z === i.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: v,
        isUserSettingsSearchEnabled: j,
        isKeywordFilteringEnabled: B,
        isStaff: U,
        isInappropriateConversationWarningEnabled: G,
        paymentsBlocked: F,
        isEligibleForQuests: y,
        showGiftNitro: V,
        isStricterMessageRequestsEnabled: H,
        hasLibraryApplication: Y,
        hasTOTPEnabled: w,
        canBroadcastActivity: k
    });
}
function v(e) {
    let {searchResults: t} = (0, D.E)(), s = b();
    if (!(0, x.eA)({ location: 'settings' }))
        return new Set();
    let n = s[e], a = Object.fromEntries(Object.entries(s).filter(e => {
            let [t, s] = e;
            return s.section === n.section;
        })), i = Object.fromEntries(Object.entries(a).filter(e => {
            let [t, {
                    parent: s,
                    section: a
                }] = e;
            return null != s && a === n.section;
        }).map(e => {
            let [t, {parent: s}] = e;
            return [
                t,
                s
            ];
        })), r = new Set(), o = e => {
            let t = a[e];
            if (null == t)
                return;
            r.add(e);
            let s = t.parent;
            null != s && o(s);
        }, l = e => {
            for (let t of (r.add(e), Object.entries(i).filter(t => {
                    let [s, n] = t;
                    return n === e;
                }).map(e => {
                    let [t] = e;
                    return t;
                })))
                l(t);
        };
    for (let e of t.filter(e => e in a))
        if (!r.has(e)) {
            if (null != a[e].element && null == a[e].parent) {
                r.clear();
                break;
            }
            Object.values(i).includes(e) && l(e), o(e);
        }
    return r;
}
function j(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = arguments.length > 3 ? arguments[3] : void 0, a = [], i = G(t), o = function (e, t) {
            let s = new Map();
            return null != t && t.forEach(t => {
                let n = e[t].parent;
                for (; null != n && null != e[n].parent;)
                    n = e[n].parent;
                if (null != n) {
                    var a;
                    let e = null !== (a = s.get(n)) && void 0 !== a ? a : 0;
                    s.set(n, e + 1);
                }
            }), s;
        }(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
    return e.forEach(e => {
        0 !== e.settings.length && (!0 === e.divider && a.push({ section: r.ID.DIVIDER }), null != e.header && a.push({
            section: r.ID.HEADER,
            label: e.header
        }), e.settings.forEach(e => {
            a.push({
                ...t[e],
                tabPredicate: () => {
                    var t, s, a;
                    return null == n || (t = e, s = n, a = o, t === f.s6.SEARCH_NO_RESULTS && 0 === s.size || a.has(t) || s.has(t));
                },
                searchFilterCount: !s || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
            });
        }));
    }), a;
}
function B() {
    let e = b(), {shouldMergeGameSettings: t} = p.b.useExperiment({ location: 'settings' }), s = n.useMemo(() => Z(t), [t]);
    return n.useMemo(() => j(s, e), [
        s,
        e
    ]);
}
function U(e) {
    let t = b(), s = function () {
            let {shouldMergeGameSettings: e} = p.b.useExperiment({ location: 'settings' }), t = Z(e);
            return n.useMemo(() => [{
                    header: L.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
                    settings: [
                        ...t.map(e => {
                            let {settings: t} = e;
                            return t;
                        }).flat(1),
                        f.s6.SEARCH_NO_RESULTS
                    ]
                }], [t]);
        }(), a = (0, x.c3)({ location: 'settings' });
    return n.useMemo(() => j(s, t, a, new Set(e)), [
        s,
        t,
        a,
        e
    ]);
}
function G(e) {
    return new Map(Object.entries(e).filter(e => {
        let [t, s] = e;
        return s.section !== r.ID.CUSTOM && null != s.searchableTitles && (null == s.predicate || s.predicate());
    }));
}
function F(e) {
    return Array.from(G(e).entries()).map(e => {
        let [t, s] = e;
        return [
            t,
            s.searchableTitles
        ];
    });
}
