n(47120);
var r = n(570140), i = n(147913), a = n(314897), o = n(967368), s = n(592125), l = n(944486), u = n(631768), c = n(981631);
function d() {
    !function () {
        let e = l.Z.getVoiceChannelId(), t = o.Z.bitrate;
        if (null == e)
            return;
        let n = s.Z.getChannel(e);
        if (null != n)
            t !== n.bitrate && r.Z.dispatch({
                type: 'SET_CHANNEL_BITRATE',
                bitrate: n.bitrate
            });
    }(), !function () {
        var e;
        let t = l.Z.getVoiceChannelId(), n = u.Z.mode;
        if (null == t)
            return;
        let i = s.Z.getChannel(t);
        if (null == i)
            return;
        let a = null !== (e = i.videoQualityMode) && void 0 !== e ? e : c.Ucd.AUTO;
        n !== a && r.Z.dispatch({
            type: 'SET_CHANNEL_VIDEO_QUALITY_MODE',
            mode: a
        });
    }();
}
function _(e) {
    let {channels: t} = e;
    for (let e of t)
        l.Z.getVoiceChannelId() === e.id && d();
}
function E(e) {
    let {voiceStates: t} = e;
    t.forEach(e => {
        a.default.getSessionId() === e.sessionId && d();
    });
}
class f extends i.Z {
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            CHANNEL_UPDATES: _,
            VOICE_STATE_UPDATES: E
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new f();
