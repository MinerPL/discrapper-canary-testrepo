n.d(t, {
    A_: function () {
        return I;
    },
    Ok: function () {
        return A;
    },
    U4: function () {
        return T;
    },
    Ye: function () {
        return h.Z;
    },
    ZJ: function () {
        return S;
    },
    q: function () {
        return g;
    }
}), n(789020);
var r = n(913527), i = n.n(r), a = n(442837), o = n(367907), s = n(731429), l = n(306680), u = n(9156), c = n(626135), d = n(630388), _ = n(621600), E = n(709054), f = n(569471), h = n(814391), p = n(124368), m = n(981631);
function I() {
    (0, o.yw)(m.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, o.yw)(m.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function g() {
    c.default.track(m.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function S(e, t) {
    var n, r;
    let i = (0, s.K)(e);
    if (null == i)
        return;
    let a = e.getGuildId(), o = e.parent_id, l = (0, _.I)(a, o), E = e => {
            if ((0, d.yE)(e, p.iN.ALL_MESSAGES))
                return _.$R[m.bL.ALL_MESSAGES];
            if ((0, d.yE)(e, p.iN.ONLY_MENTIONS))
                return _.$R[m.bL.ONLY_MENTIONS];
            if ((0, d.yE)(e, p.iN.NO_MESSAGES))
                return _.$R[m.bL.NO_MESSAGES];
            return _.$R[m.bL.NULL];
        }, h = null !== (n = f.Z.flags(e.id)) && void 0 !== n ? n : 0, I = E(h), T = f.Z.isMuted(e.id), g = (0, _.sK)(f.Z.getMuteConfig(e.id)), {
            can_send_message: S,
            ...A
        } = i, N = {
            ...A,
            channel_id: e.id,
            guild_id: a,
            parent_id: o,
            channel_type: e.type,
            has_interacted_with_thread: (h & p.iN.HAS_INTERACTED) != 0,
            parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(a, o),
            old_thread_notification_setting: I,
            new_thread_notification_setting: null != t.flags ? E(t.flags) : I,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: T,
            new_thread_is_muted: null !== (r = t.muted) && void 0 !== r ? r : T,
            old_thread_muted_until: g,
            new_thread_muted_until: null != t.mute_config ? (0, _.sK)(t.mute_config) : g
        };
    c.default.track(m.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, N);
}
n(689938);
let A = e => {
    var t, n;
    let r = (0, a.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)), o = null != r ? E.default.extractTimestamp(r) : null, s = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null != s ? i()(s).valueOf() : null;
    return null !== (n = null != o ? o : u) && void 0 !== n ? n : E.default.extractTimestamp(e.id);
};
