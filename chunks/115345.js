n.d(t, {
    F6: function () {
        return U;
    },
    _Y: function () {
        return Z;
    },
    cG: function () {
        return w;
    },
    ly: function () {
        return x;
    },
    oL: function () {
        return H;
    },
    vo: function () {
        return G;
    }
}),
    n(47120),
    n(789020),
    n(724458),
    n(411104);
var r = n(470079),
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(668781),
    c = n(92114),
    d = n(181945),
    _ = n(149071),
    E = n(516373),
    f = n(480294),
    h = n(650774),
    p = n(888369),
    m = n(430824),
    I = n(771845),
    T = n(9156),
    g = n(626135),
    S = n(630388),
    A = n(823379),
    N = n(960048),
    v = n(709054),
    O = n(223683),
    R = n(630114),
    C = n(506712),
    y = n(468788),
    D = n(789662),
    L = n(981631),
    b = n(490897),
    M = n(526761),
    P = n(689938);
function U(e, t) {
    let [n, i] = r.useState(D.nf),
        [o, l] = r.useState({});
    (0, E.D)();
    let u = (0, s.Wu)([m.Z], () => Object.values(m.Z.getGuilds())),
        c = r.useCallback(() => {
            let r = {};
            for (let i of u)
                r[i.id] = (function (e, t, n, r, i) {
                    var a;
                    let [s, o, l] = f.Z.hasConsented(L.pjP.PERSONALIZATION) ? (0, C.q)(e, t, n, r, !0) : (0, C.A)(e, n),
                        u = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
                        c = (0, R.Z)(e, null != i ? i : s, u, r, t);
                    return {
                        guildId: e.id,
                        mode: s,
                        debugReason: l,
                        actions: c,
                        overrideMode: i,
                        messagePain: u.messages === D.XR.High,
                        visitsALot: o,
                        muted: T.ZP.isMuted(e.id) && !T.ZP.isTemporarilyMuted(e.id)
                    };
                })(i, n, e, t, o[i.id]);
            return r;
        }, [u, n, e, t, o]),
        [d, _] = r.useState(() => c());
    return (
        r.useEffect(() => _(c()), [c]),
        {
            guildPlans: d,
            overrideGuild: r.useCallback((e, t) => {
                l((n) => ({
                    ...n,
                    [e]: t
                }));
            }, []),
            setThresholds: i,
            getDebug: () =>
                (function (e, t) {
                    let n = t.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
                        }, 0),
                        r = t.reduce((e, t) => {
                            var n;
                            return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0);
                        }, 0),
                        i = I.ZP.getFlattenedGuildIds(),
                        s = a().sortBy(Object.values(e), (e) => {
                            let t = i.indexOf(e.guildId);
                            return -1 === t ? i.length : t;
                        }),
                        o = [
                            ['Use Grey Dot', new Set([D.AR.UseGreyDot])],
                            ['Keep As Is', new Set([D.AR.KeepAsIs])]
                        ].map((e) => {
                            let [t, n] = e,
                                r = s
                                    .filter((e) => {
                                        var t;
                                        return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode);
                                    })
                                    .map((e) => {
                                        let t = m.Z.getGuild(e.guildId),
                                            n = e.actions
                                                .map((e) => {
                                                    var t;
                                                    return '- '.concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : '');
                                                })
                                                .join('\n');
                                        return '### '.concat(t.name, '\n**Reasoning**: ').concat(e.debugReason, '**ActionPlan**:\n').concat(n);
                                    });
                            return '# '.concat(t, '\n\n').concat(r.join('\n\n'));
                        });
                    return '\n# Basic Stats\n- Total channel visits (yr): '.concat(n, '\n- Total channel visits (month): ').concat(r, '\n\n').concat(o.join('\n\n'));
                })(Object.values(d), t)
        }
    );
}
function w(e, t) {
    return Object.values(m.Z.getGuilds()).some((n) => {
        let [r] = f.Z.hasConsented(L.pjP.PERSONALIZATION) ? (0, C.q)(n, D.nf, e, t, !1) : (0, C.A)(n, e);
        return r === D.AR.UseGreyDot;
    });
}
function x() {
    let e = Object.values(m.Z.getGuilds()),
        t = {};
    for (let i of e) {
        var n, r;
        let e = null !== (r = (null !== (n = T.ZP.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {}).flags) && void 0 !== r ? r : 0;
        (e = (0, S.mB)(e, M.vc.UNREADS_ALL_MESSAGES, !0)), (e = (0, S.mB)(e, M.vc.UNREADS_ONLY_MENTIONS, !1)), (t[i.id] = { flags: e });
    }
    B(t),
        g.default.track(L.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter((e) => p.default.hasUnread(e.id)).length
        });
}
function G(e) {
    let [t, n] = r.useState(!1),
        [i, a] = r.useState(!1),
        s = r.useCallback(
            async (t) => {
                if (i) throw Error('Already submitted notifications migration');
                n(!0);
                try {
                    await k(t, e), a(!0);
                } finally {
                    n(!1);
                }
            },
            [i, e]
        );
    return {
        submitting: t,
        submitted: i,
        saveSettings: s
    };
}
async function k(e, t) {
    if (T.ZP.useNewNotifications) {
        u.Z.show({
            title: 'Info',
            body: 'It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!'
        });
        return;
    }
    let n = (function (e) {
        let t = Object.values(e)
                .filter((e) => {
                    var t;
                    return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === D.AR.UseGreyDot;
                })
                .map((e) => {
                    var t;
                    return {
                        plan: e,
                        memberCount: null !== (t = h.Z.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                    };
                }),
            n = {
                num_unread_guilds_before: v.default.keys(e).filter((e) => p.default.hasUnread(e)).length,
                unmuted_server_ids: t.filter((e) => T.ZP.isMuted(e.plan.guildId)).map((e) => e.plan.guildId)
            };
        return () => {
            g.default.track(L.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
                ...n,
                auto_migrated: !0,
                pre_selected_server_ids: Object.values(e)
                    .filter((e) => e.mode === D.AR.UseGreyDot)
                    .map((e) => e.guildId),
                final_selected_server_ids: t.map((e) => e.plan.guildId),
                num_unread_guids_after: v.default.keys(e).filter((e) => p.default.hasUnread(e)).length,
                num_tiny_servers_selected: t.filter((e) => e.memberCount <= 20).length,
                num_small_servers_selected: t.filter((e) => e.memberCount > 20 && e.memberCount <= 200).length,
                num_medium_servers_selected: t.filter((e) => e.memberCount > 200 && e.memberCount <= 1000).length,
                num_large_servers_selected: t.filter((e) => e.memberCount > 1000).length,
                num_quiet_servers_selected: t.filter((e) => !e.plan.messagePain).length,
                num_busy_servers_selected: t.filter((e) => e.plan.messagePain).length,
                num_frequent_visited_servers_selected: t.filter((e) => e.plan.visitsALot).length,
                num_infrequent_visited_servers_selected: t.filter((e) => !e.plan.visitsALot).length
            });
        };
    })(e);
    try {
        let t = {};
        for (let n of Object.values(e)) {
            var r, i;
            let e = null !== (r = T.ZP.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== r ? r : {},
                a = {};
            for (let t of n.actions) null === (i = t.apply) || void 0 === i || i.call(t, a, e);
            t[n.guildId] = a;
        }
        await B(t);
        let a = Object.values(e)
            .filter((e) => e.actions.some((e) => e.needsMarkedAsRead))
            .map((e) => e.guildId);
        if (a.length > 0) {
            let e = setTimeout(n, 5000);
            (0, d.Z)(a, void 0, () => {
                l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' }), clearTimeout(e), n();
            });
        } else n();
    } catch (e) {
        N.Z.captureException(e),
            u.Z.show({
                title: P.Z.Messages.ERROR,
                body: P.Z.Messages.NOTIF_MIGRATION_ERROR,
                onConfirm: t
            });
    }
}
async function B(e) {
    await F(() => V()), await F(() => c.Z.setAccountFlag(y.c.USE_NEW_NOTIFICATIONS, !0));
    let t = await F(() => _.Z.saveUserGuildSettingsBulk(e));
    l.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
        userGuildSettings: t
    }),
        l.Z.dispatch({ type: 'RECOMPUTE_READ_STATES' });
}
async function F(e) {
    for (let t = 0; t < 3; t++)
        try {
            return await e();
        } catch (e) {
            await new Promise((e) => setTimeout(e, 1000 * (t + 1)));
        }
    return await e();
}
async function V() {
    let e = await (0, O.Tn)();
    e.length > 0
        ? (await (function () {
              return new Promise((e) => {
                  u.Z.show({
                      title: 'Create new Backup?',
                      body: 'It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?',
                      confirmText: 'Take New Backup',
                      cancelText: 'Skip Backup',
                      onConfirm: () => e(!0),
                      onCancel: () => e(!1)
                  });
              });
          })()) && (0, O.dt)(e)
        : (0, O.$U)('Backup from '.concat(new Date().toLocaleDateString()));
}
async function H() {
    o.K.set('turnedOffNewNotifications', !0), g.default.track(L.rMx.NOTIFICATION_MIGRATION_OPTOUT, { num_guilds_with_new_setting: Object.values(m.Z.getGuilds()).filter((e) => T.ZP.resolveGuildUnreadSetting(e) === b.i.ONLY_MENTIONS).length });
    let e = await (0, O.Tn)(),
        t = a().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    if (t.length > 0) {
        let e = t[t.length - 1];
        await new Promise((t) =>
            u.Z.show({
                title: 'Please Confirm',
                body: 'This will turn off the new notification system and restore your ' + 'notification settings to a backup created on '.concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: 'Cancel',
                onCancel: () => {}
            })
        ),
            await (0, O.xx)(e.id),
            await c.Z.setAccountFlag(y.c.USE_NEW_NOTIFICATIONS, !1);
    } else await c.Z.setAccountFlag(y.c.USE_NEW_NOTIFICATIONS, !1);
}
function Z(e) {
    var t, n, r;
    if (null == e) return [];
    let i = a().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], 'channel_id'),
        s = a().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], 'channel_id');
    return (null !== (r = e.channel_opens) && void 0 !== r ? r : [])
        .map((e) => {
            var t, n, r, a, o, l, u, c, d, _, E;
            let f = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
                h = null !== (n = s[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (r = e.year_opens) && void 0 !== r ? r : 0),
                num_month_opens: Number(null !== (a = e.one_month_opens) && void 0 !== a ? a : 0),
                num_three_month_opens: Number(null !== (o = e.three_month_opens) && void 0 !== o ? o : 0),
                num_six_month_opens: Number(null !== (l = e.six_month_opens) && void 0 !== l ? l : 0),
                num_messages: Number(null !== (u = null == h ? void 0 : h.num_messages) && void 0 !== u ? u : 0),
                num_year_voice_joins: Number(null !== (c = null == f ? void 0 : f.year_opens) && void 0 !== c ? c : 0),
                num_month_voice_joins: Number(null !== (d = null == f ? void 0 : f.one_month_opens) && void 0 !== d ? d : 0),
                num_three_month_voice_joins: Number(null !== (_ = null == f ? void 0 : f.three_month_opens) && void 0 !== _ ? _ : 0),
                num_six_month_voice_joins: Number(null !== (E = null == f ? void 0 : f.six_month_opens) && void 0 !== E ? E : 0)
            };
        })
        .filter(A.lm);
}
