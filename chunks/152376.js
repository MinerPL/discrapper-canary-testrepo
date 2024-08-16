n.d(t, {
    C1: function () {
        return A;
    },
    Mo: function () {
        return N;
    },
    QG: function () {
        return v;
    },
    XQ: function () {
        return T;
    },
    _U: function () {
        return C;
    },
    dM: function () {
        return O;
    },
    k$: function () {
        return g;
    }
}),
    n(47120);
var r = n(392711),
    i = n(524437),
    a = n(570140),
    s = n(92114),
    o = n(367907),
    l = n(962086),
    u = n(160404),
    c = n(149071),
    d = n(675478),
    _ = n(592125),
    E = n(9156),
    f = n(626135),
    h = n(630388),
    p = n(621600),
    m = n(981631),
    I = n(526761);
function T(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]);
        return;
    }
    let i = E.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, h.mB)(i, I.ic.FAVORITED, !1));
    let s = (0, p.I)(e, t),
        d = { flags: (0, h.mB)(i, I.ic.OPT_IN_ENABLED, n) };
    c.Z.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: d } } }),
        a.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
            guildId: e,
            channelId: t,
            settings: d
        }),
        (0, p.jz)(e, t, d, s, p.UE.optedIn(n), r),
        R(e),
        f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            ...(0, o.v_)(_.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
function g(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]), (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = E.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, h.mB)(i, I.ic.FAVORITED, !1));
    let s = (0, p.I)(e, t),
        d = { flags: (0, h.mB)(i, I.ic.OPT_IN_ENABLED, n) };
    if (!E.ZP.isOptInEnabled(e)) {
        let n = (0, h.mB)(E.ZP.getGuildFlags(e), I.vc.OPT_IN_CHANNELS_ON, !0);
        c.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: d },
                flags: n
            }
        });
    }
    a.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
        guildId: e,
        channelId: t,
        settings: d
    }),
        (0, p.jz)(e, t, d, s, p.UE.optedIn(n), r),
        R(e),
        f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            ...(0, o.v_)(_.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
async function S(e, t) {
    if (!(null == e || u.Z.isFullServerPreview(e)))
        await c.Z.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES',
                guildId: e,
                updates: t
            });
}
let A = (0, r.debounce)((e, t) => S(e, t), 1000);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, t, []), n && (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = {};
    if (
        (t.forEach((t) => {
            let n = E.ZP.getChannelIdFlags(e, t);
            i[t] = { flags: (0, h.mB)(n, I.ic.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, h.mB)(E.ZP.getGuildFlags(e), I.vc.OPT_IN_CHANNELS_ON, !0);
        s.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: i
            },
            p.ZB.OptedIn
        ),
            f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, o.hH)(e),
                action_type: 'add_many_and_enable_guild',
                location: r
            });
    } else
        s.Z.updateChannelOverrideSettingsBulk(e, i, p.ZB.OptedIn),
            f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, o.hH)(e),
                action_type: 'add_many',
                location: r
            });
}
function v(e, t, n) {
    if (u.Z.isFullServerPreview(e)) {
        (0, l.aq)(e, { optInEnabled: t });
        return;
    }
    let r = E.ZP.getGuildFlags(e);
    s.Z.updateGuildNotificationSettings(e, { flags: (0, h.mB)(r, I.vc.OPT_IN_CHANNELS_ON, t) }, p.UE.optedIn(t)),
        f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            action_type: t ? 'guild_enabled' : 'guild_disabled',
            location: n
        });
}
function O(e, t, n, r) {
    if (null == e || u.Z.isFullServerPreview(e)) return;
    let i = E.ZP.getChannelIdFlags(e, t);
    !(0, h.yE)(i, I.ic.OPT_IN_ENABLED) && n && (i = (0, h.mB)(i, I.ic.OPT_IN_ENABLED, !0)),
        s.Z.updateChannelOverrideSettings(e, t, { flags: (0, h.mB)(i, I.ic.FAVORITED, n) }, p.UE.favorited(n)),
        f.default.track(m.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            action_type: n ? 'favorited' : 'unfavorited',
            location: r
        });
}
function R(e) {
    (0, d.PS)(e, (e) => (!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED) || !!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN)) && ((e.guildOnboardingProgress = (0, h.pj)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED)), (e.guildOnboardingProgress = (0, h.mB)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN, !1)), !0), d.fy.INFREQUENT_USER_ACTION);
}
function C(e, t) {
    a.Z.dispatch({
        type: 'DISMISS_FAVORITE_SUGGESTION',
        guildId: e,
        channelId: t
    });
}
