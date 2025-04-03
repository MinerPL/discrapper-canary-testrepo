var i = r(47120);
var a = r(147913),
    s = r(716364),
    o = r(474873),
    l = r(135906),
    u = r(378364),
    c = r(197344),
    d = r(860973),
    f = r(871465);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends a.Z {
    _initialize() {
        this.subscription = c.Z.subscribe(this.handleExperimentUpdated);
    }
    _terminate() {
        var e, n;
        null === (e = (n = this).subscription) || void 0 === e || e.call(n), (this.subscription = void 0);
    }
    updateSoundpack() {
        let e = o.Z.getSoundpack(),
            n = o.Z.getLastSoundpackExperimentId(),
            r = u.Z.experiment.definition.id,
            i = c.Z.isEligible();
        i || (null == n && e === f.YC.CLASSIC) ? i && null != u.Z.soundpack && r !== n && e !== u.Z.soundpack && (0, s.c)(u.Z.soundpack, r) : (0, s.c)(f.YC.CLASSIC, null);
    }
    updateRingtone() {
        if (c.Z.isEligible()) {
            let e = (0, l.Z)(o.Z.getSoundpack());
            null != e.call_ringing && (0, d._)('call_ringing', e.call_ringing + '.mp3');
        } else (0, d._)('call_ringing', 'call_ringing.mp3');
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone }),
            _(this, 'subscription', void 0),
            _(this, 'handleExperimentUpdated', () => {
                this.updateSoundpack(), this.updateRingtone();
            });
    }
}
n.Z = new h();
