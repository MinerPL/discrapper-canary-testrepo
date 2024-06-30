n(47120);
var s = n(748780);
function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class i {
    start() {
        return new Promise(e => {
            this.animation.start(() => {
                e();
            });
        });
    }
    stop() {
        this.animation.stop();
    }
    constructor(e) {
        a(this, 'animation', void 0), this.animation = e;
    }
}
class r {
    _map(e) {
        return this.animations.map(e);
    }
    start() {
        return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()));
    }
    stop() {
        this._map(e => e.stop());
    }
    constructor(e) {
        a(this, 'animations', void 0), this.animations = e;
    }
}
class l {
    async start() {
        for (let e of (this.stopped = !1, this.animations)) {
            if (this.stopped)
                return;
            await e.start();
        }
    }
    stop() {
        this.stopped = !0, this.animations.map(e => e.stop());
    }
    constructor(e) {
        a(this, 'animations', void 0), a(this, 'stopped', !1), this.animations = e;
    }
}
function o(e, t, n) {
    return new i(n(e, { ...t }));
}
t.ZP = {
    ...s.Z,
    timing: function (e, t) {
        return o(e, t, s.Z.timing);
    },
    spring: function (e, t) {
        return o(e, t, s.Z.spring);
    },
    parallel: function (e) {
        return new r(e);
    },
    sequence: function (e) {
        return new l(e);
    }
};
