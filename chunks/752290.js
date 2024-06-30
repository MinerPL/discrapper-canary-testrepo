n(47120);
var r = n(729357), i = n.n(r), a = n(147913), o = n(557177);
let s = (0, o.tu)('vibing_wumpus', 'vibing_wumpus', 0), l = 0, u = 0, c = null;
function d(e, t) {
    let n = Math.round(100 * e), r = Math.round(100 * u), a = Math.round(100 * l);
    n > 0 && a >= r || n < 0 && a <= r ? (clearInterval(c), 0 === r && null != t && t()) : (a += n, l = a / 100, s.volume = i()(l, 0, 0.5));
}
function _(e) {
    null != c && clearInterval(c), u = 0;
    let t = p();
    c = setInterval(() => {
        d(t, e);
    }, 100);
}
function E() {
    null != c && clearInterval(c), s.loop(), u = 0.5;
    let e = p();
    c = setInterval(() => d(e), 100);
}
function f() {
    _(s.pause.bind(s));
}
function h() {
    _(s.stop.bind(s));
}
function p() {
    return 0.2 * (u - l);
}
class m extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            VIBING_WUMPUS_PLAY_MUSIC: E,
            VIBING_WUMPUS_STOP_MUSIC: h,
            VIBING_WUMPUS_PAUSE_MUSIC: f
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new m();
