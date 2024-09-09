var r,
    i = n(442837),
    a = n(570140),
    s = n(657254),
    o = n(871465);
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
let u = { soundpack: o.YC.CLASSIC };
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        s.Z.subscribe({ location: '1' }, () => this.emitChange()), null != e && (u = e);
    }
    getState() {
        return u;
    }
    getSoundpack() {
        var e;
        let { allowAprilFoolsSoundpack: t } = s.Z.getCurrentConfig({ location: '37bac2_1' }, { autoTrackExposure: !1 });
        return t && ((e = u.soundpack), Object.values(o.YC).includes(e)) ? u.soundpack : o.YC.CLASSIC;
    }
}
l(c, 'displayName', 'SoundpackStore'),
    l(c, 'persistKey', 'SoundpackStore'),
    (t.Z = new c(a.Z, {
        SET_SOUNDPACK: function (e) {
            let { soundpack: t } = e;
            u = { soundpack: t };
        }
    }));
