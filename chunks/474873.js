var r,
    i = n(442837),
    a = n(570140),
    s = n(871465);
function o(e, t, n) {
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
let l = {
    soundpack: s.YC.CLASSIC,
    lastSoundpackExperimentId: null
};
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((l = e), !Object.values(s.YC).includes(l.soundpack) && (l.soundpack = s.YC.CLASSIC));
    }
    getState() {
        return l;
    }
    getSoundpack() {
        return l.soundpack;
    }
    getLastSoundpackExperimentId() {
        return l.lastSoundpackExperimentId;
    }
}
o(u, 'displayName', 'SoundpackStore'),
    o(u, 'persistKey', 'SoundpackStore'),
    (t.Z = new u(a.Z, {
        SET_SOUNDPACK: function (e) {
            let { soundpack: t, forExperimentId: n } = e;
            l = {
                soundpack: t,
                lastSoundpackExperimentId: void 0 !== n ? n : l.lastSoundpackExperimentId
            };
        }
    }));
