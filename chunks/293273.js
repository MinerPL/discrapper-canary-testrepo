n(653041), n(47120);
var r, i, a, o, s = n(348327), l = n.n(s), u = n(392711), c = n.n(u), d = n(442837), _ = n(570140), E = n(317381), f = n(812206), h = n(676035), p = n(594190), m = n(106301), I = n(406066), T = n(768419), g = n(695346), S = n(581883), A = n(199902), N = n(272053), v = n(77498), O = n(981631), R = n(689938);
let C = [], y = {};
function D() {
    let e = [], t = g.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, h.I)(t));
    let n = I.Z.getActivities();
    e.push(...n);
    let r = N.Z.getStream();
    null != r && e.push({
        type: O.IIU.STREAMING,
        ...r
    });
    let i = new Set(), a = new Set();
    c().forEach(y, t => {
        null != t.application_id && (i.add(t.name), a.add(t.application_id), e.push(t));
    }), E.ZP.getSelfEmbeddedActivities().forEach(t => {
        var n;
        let {applicationId: r} = t;
        if (a.has(r))
            return;
        let i = null === (n = f.Z.getApplication(r)) || void 0 === n ? void 0 : n.name;
        e.push({
            type: O.IIU.PLAYING,
            name: null != i ? i : R.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
            application_id: r,
            flags: O.xjy.EMBEDDED
        });
    });
    let o = p.ZP.getVisibleGame(), s = null != o && null != o.name && i.has(o.name), u = null != o && o.isLauncher, d = A.Z.getCurrentUserActiveStream();
    if (null != o && null != o.name && !(s || u && !(null != d))) {
        var _, S;
        e.push({
            type: O.IIU.PLAYING,
            name: o.name,
            application_id: null !== (S = o.id) && void 0 !== S ? S : null === (_ = v.Z.getGameByName(o.name)) || void 0 === _ ? void 0 : _.id,
            timestamps: { start: o.start }
        });
    }
    let D = T.Z.getActivity();
    null != D && e.push({
        type: O.IIU.LISTENING,
        ...D
    });
    let L = m.Z.getCurrentHangStatus();
    if (null != L) {
        let t = m.Z.getCustomHangStatus();
        e.push({
            type: O.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: L,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji
        });
    }
    !l()(C, e) && (C = e);
}
class L extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, E.ZP, N.Z, A.Z, T.Z, S.Z, m.Z, v.Z), this.syncWith([
            I.Z,
            m.Z
        ], () => D());
    }
    getActivities() {
        return C;
    }
    getPrimaryActivity() {
        return C[0];
    }
    getApplicationActivity(e) {
        return this.findActivity(t => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity(e => e.type === O.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return C.find(e);
    }
    getApplicationActivities() {
        return y;
    }
}
o = 'LocalActivityStore', (a = 'displayName') in (i = L) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new L(_.Z, {
    OVERLAY_INITIALIZE: function (e) {
        let {localActivities: t} = e;
        y = { ...t }, D();
    },
    START_SESSION: function () {
        y = {}, D();
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let {
            socketId: t,
            activity: n
        } = e;
        if (l()(y[t], n))
            return !1;
        null != n ? y[t] = n : delete y[t], D();
    },
    RPC_APP_DISCONNECTED: function (e) {
        let {socketId: t} = e;
        delete y[t], D();
    },
    RUNNING_GAMES_CHANGE: D,
    LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
    SPOTIFY_PLAYER_STATE: D,
    SPOTIFY_PLAYER_PLAY: D,
    STREAMING_UPDATE: D,
    USER_CONNECTIONS_UPDATE: D,
    STREAM_START: D,
    STREAM_STOP: D,
    USER_SETTINGS_PROTO_UPDATE: D,
    EMBEDDED_ACTIVITY_OPEN: D,
    EMBEDDED_ACTIVITY_CLOSE: D,
    UPDATE_HANG_STATUS: D
});
