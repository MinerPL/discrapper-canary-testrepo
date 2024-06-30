n(47120);
var r = n(392711), i = n.n(r), a = n(846519), o = n(147913), s = n(314897), l = n(70956), u = n(557177), c = n(697492), d = n(37091), _ = n(721264);
let E = 15 * l.Z.Millis.SECOND, f = 15 * l.Z.Millis.SECOND, h = [
        '\uD83C\uDDE9',
        '\uD83C\uDDF4',
        '\uD83C\uDDF9',
        '\uD83C\uDDE6'
    ], p = h.length, m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    }, I = new a.V7(), T = [], g = {}, S = (0, u.tu)('highfive_whistle', 'highfive_whistle', 0.6), A = (0, u.tu)('highfive_clap', 'highfive_clap', 0.6);
function N(e) {
    let {
            emoji: t,
            channelId: n,
            userId: r
        } = e, o = s.default.getId(), l = d.Z.getEnabled();
    if (null != t) {
        if (l && (0, _.Z)(t.name))
            return function (e, t, n) {
                var r;
                let i = m(t, n);
                if (null != d.Z.getWaitingHighFive(n, t))
                    return;
                let [o, s] = null !== (r = Object.entries(g).find(e => {
                    let [t] = e;
                    return t !== i;
                })) && void 0 !== r ? r : [];
                if (null != o && null != s)
                    s.cancel(), A.play(), delete g[o], (0, c.Ym)(o.split(':')[0], t, n, e);
                else {
                    (0, c._g)(e, t, n), S.play();
                    let r = new a.sW(f, () => {
                        delete g[t], (0, c.Gd)(t, n);
                    });
                    g[t] = r, r.delay();
                }
            }(t.name, r, n);
        r === o && (T = [
            ...T,
            t.name
        ].slice(-1 * p), i().isEqual(T, h) ? (S.play(), I.stop(), T = [], (0, c.ME)(!l)) : I.start(E, () => T = []));
    }
}
function v(e) {
    let {
            completingUserId: t,
            waitingUserId: n,
            channelId: r
        } = e, i = m(''.concat(t).concat(n), r, !0);
    g[i] = new a.sW(550, () => {
        delete g[i], (0, c.hu)(t, n, r);
    }), g[i].delay();
}
class O extends o.Z {
    _terminate() {
        Object.values(g).forEach(e => e.cancel()), g = {};
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            VOICE_CHANNEL_EFFECT_SEND: N,
            HIGH_FIVE_COMPLETE: v
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new O();
