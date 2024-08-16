let r;
var i,
    a = n(442837),
    s = n(570140),
    o = n(353368);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        r = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : o.q.PREMIUM;
    }
    getState() {
        return { animationType: r };
    }
}
l(u, 'displayName', 'VoiceChannelEffectsPersistedStore'),
    l(u, 'persistKey', 'VoiceChannelEffectsPersistedStore'),
    (t.Z = new u(s.Z, {
        VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
            r = r === o.q.BASIC ? o.q.PREMIUM : o.q.BASIC;
        }
    }));
