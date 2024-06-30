var r, i = n(442837), a = n(570140);
function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let s = !1, l = !1;
class u extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (s = e);
    }
    isMuted() {
        return s;
    }
    shouldPlay() {
        return l;
    }
    getUserAgnosticState() {
        return s;
    }
}
o(u, 'displayName', 'StageMusicStore'), o(u, 'persistKey', 'StageMusicStore'), t.Z = new u(a.Z, {
    STAGE_MUSIC_MUTE: function (e) {
        let {muted: t} = e;
        s = t, l = !1;
    },
    STAGE_MUSIC_PLAY: function (e) {
        let {play: t} = e;
        l = t;
    },
    VOICE_CHANNEL_SELECT: function () {
        l = !1;
    }
});
