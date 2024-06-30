t.d(e, {
    DT: function () {
        return M;
    },
    Ef: function () {
        return R;
    },
    HO: function () {
        return C;
    },
    NZ: function () {
        return m;
    },
    Pq: function () {
        return g;
    },
    Q1: function () {
        return A;
    },
    RK: function () {
        return S;
    },
    _0: function () {
        return h;
    },
    hz: function () {
        return O;
    },
    yi: function () {
        return p;
    }
});
var i = t(512722), l = t.n(i), s = t(149765), a = t(544891), r = t(493683);
t(749210);
var c = t(911969), o = t(367907), u = t(944486), d = t(979651), _ = t(700785), E = t(922482), I = t(192079), T = t(706058), N = t(590415), f = t(981631);
function A(n, e) {
    let t = n.getGuildId();
    return l()(null != t, 'This channel cannot be guildless.'), e && (0, o.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(n) }), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(t),
        body: {
            request_to_speak_timestamp: e ? new Date().toISOString() : null,
            channel_id: n.id
        }
    });
}
function h(n, e) {
    let t = n.getGuildId();
    return l()(null != t, 'This channel cannot be guildless.'), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(t, e),
        body: {
            suppress: !1,
            request_to_speak_timestamp: new Date().toISOString(),
            channel_id: n.id
        }
    });
}
function S(n, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = null == n ? void 0 : n.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let s = d.Z.getVoiceStateForChannel(n.id);
    return (0, N.gf)(s) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !e && (0, o.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(n) }), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(i),
        body: {
            suppress: e,
            request_to_speak_timestamp: null,
            channel_id: n.id,
            ...t ? { silent: t } : {}
        }
    });
}
function p(n) {
    let e = null == n ? void 0 : n.getGuildId();
    return l()(null != e, 'This channel cannot be guildless.'), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(e),
        body: {
            suppress: !0,
            channel_id: n.id,
            self_video: !1,
            self_stream: !1
        }
    });
}
function M(n, e, t) {
    let i = n.getGuildId();
    return l()(null != i, 'This channel cannot be guildless.'), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(i, e),
        body: {
            suppress: t,
            channel_id: n.id
        }
    });
}
function O(n, e) {
    if (null == e || null == n)
        return;
    let t = e.getGuildId();
    return l()(null != t, 'This channel cannot be guildless.'), M(e, n.id, !0), a.tn.patch({
        url: f.ANM.UPDATE_VOICE_STATE(t, n.id),
        body: {
            suppress: !0,
            channel_id: e.id,
            self_video: !1,
            self_stream: !1
        }
    });
}
function g(n, e, t) {
    let i = n.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let a = n.permissionOverwrites[i], o = {
            id: i,
            type: c.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...a
        };
    t ? (o.allow = s.IH(o.allow, e), o.deny = s.Od(o.deny, e)) : (o.allow = s.Od(o.allow, e), o.deny = s.IH(o.deny, e)), r.Z.updatePermissionOverwrite(n.id, o);
}
async function C(n, e, t, i) {
    if ('' === e)
        return;
    u.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
    let l = await (0, T.me)(n.id, e, t, i);
    return S(n, !1, !0), l;
}
async function R(n, e, t) {
    if ('' !== e)
        return await (0, T.Dk)(n.id, e, t);
}
async function m(n) {
    await (0, T.Ix)(n.id);
}
