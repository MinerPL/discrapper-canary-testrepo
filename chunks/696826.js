n.d(t, {
    Dk: function () {
        return g;
    },
    P5: function () {
        return A;
    },
    QF: function () {
        return m;
    },
    Sk: function () {
        return d.Skl;
    },
    W5: function () {
        return v;
    },
    lm: function () {
        return p;
    },
    qb: function () {
        return O;
    },
    rs: function () {
        return N;
    },
    vP: function () {
        return S;
    },
    vj: function () {
        return h;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(780384), u = n(44315), c = n(806519), d = n(981631), _ = n(182294), E = n(187126);
let f = {
    tension: 600,
    friction: 70
};
function h(e, t) {
    let n = (0, u.Sl)(function (e) {
            switch (e) {
            case d.Skl.ONLINE:
                return d.Ilk.GREEN_360;
            case d.Skl.IDLE:
                return d.Ilk.YELLOW_300;
            case d.Skl.DND:
                return d.Ilk.RED_400;
            case d.Skl.STREAMING:
                return d.Ilk.TWITCH;
            case d.Skl.INVISIBLE:
            case d.Skl.UNKNOWN:
            case d.Skl.OFFLINE:
            default:
                return d.Ilk.PRIMARY_400;
            }
        }(e)).hex, r = (0, u.K3)(null != t ? t : n);
    return null != r ? r : void 0;
}
function p(e, t) {
    return t === _.VZ.WHITE && e === d.Skl.IDLE ? _.d_.HIGH : _.d_.LOW;
}
function m(e) {
    return (0, l.wj)(e) ? _.VZ.BLACK : _.VZ.WHITE;
}
function I(e, t, n, r) {
    return 'scale('.concat(t, ') translate(').concat(0.5625 * e + r, ' ').concat(0.75 * e + n, ')');
}
function T(e, t, n) {
    return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}
function g(e) {
    let {
            size: t,
            status: n,
            isMobile: r,
            isTyping: i,
            topOffset: a = 0,
            leftOffset: o = 0
        } = e, s = a / 8 * t, l = o / 8 * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * _.D6,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: I(t, 0, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    switch (n) {
    case d.Skl.ONLINE:
        if (r)
            return {
                bgRadius: t * _.EW * _.e7,
                bgY: 0,
                bgX: l,
                bgHeight: t * _.EW,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.25 * t,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0,
                polygonScale: I(t, 0, s, l),
                polygonOrigin: T(t, s, l),
                dotY: 1.25 * t,
                dotX: 0.5 * t + l,
                dotRadius: 0.125 * t
            };
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: l,
            bgHeight: t,
            bgWidth: t,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: I(t, 0, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    case d.Skl.IDLE:
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: l,
            bgHeight: t,
            bgWidth: t,
            cutoutX: -(0.125 * t) + l,
            cutoutY: 0.125 * t + s,
            cutoutWidth: 0.75 * t,
            cutoutHeight: 0.75 * t,
            cutoutRadius: 0.375 * t,
            polygonScale: I(t, 0, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    case d.Skl.DND:
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: l,
            bgHeight: t,
            bgWidth: t,
            cutoutX: 0.125 * t + l,
            cutoutY: 0.625 * t + s,
            cutoutWidth: 0.75 * t,
            cutoutHeight: 0.25 * t,
            cutoutRadius: 0.125 * t,
            polygonScale: I(t, 0, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    case d.Skl.STREAMING:
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: l,
            bgHeight: t,
            bgWidth: t,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0.25 * t,
            polygonScale: I(t, 1, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
    default:
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: l,
            bgHeight: t,
            bgWidth: t,
            cutoutX: 0.25 * t + l,
            cutoutY: 0.5 * t + s,
            cutoutWidth: 0.5 * t,
            cutoutHeight: 0.5 * t,
            cutoutRadius: 0.25 * t,
            polygonScale: I(t, 0, s, l),
            polygonOrigin: T(t, s, l),
            dotY: 0.75 * t + s,
            dotX: 0.5 * t + l,
            dotRadius: 0
        };
    }
}
function S(e, t, n) {
    var i;
    let {
        bgRadius: a,
        bgY: o,
        bgX: l,
        bgHeight: u,
        bgWidth: c,
        cutoutX: d,
        cutoutY: _,
        cutoutWidth: E,
        cutoutHeight: f,
        cutoutRadius: h,
        polygonScale: p,
        polygonOrigin: m,
        dotY: I,
        dotX: T,
        dotRadius: g
    } = e;
    return (0, r.jsxs)('mask', {
        id: n,
        children: [
            (0, r.jsx)(s.animated.rect, {
                x: l,
                y: o,
                width: c,
                height: u,
                rx: a,
                ry: a,
                fill: 'white'
            }),
            (0, r.jsx)(s.animated.rect, {
                x: d,
                y: _,
                width: E,
                height: f,
                rx: h,
                ry: h,
                fill: 'black'
            }),
            (0, r.jsx)(s.animated.polygon, {
                points: (i = t, '-'.concat(0.216506 * i, ',-').concat(0.25 * i, ' ').concat(0.216506 * i, ',0 -').concat(0.216506 * i, ',').concat(0.25 * i)),
                fill: 'black',
                transform: p,
                style: { transformOrigin: m }
            }),
            (0, r.jsx)(s.animated.circle, {
                fill: 'black',
                cx: T,
                cy: I,
                r: g
            })
        ]
    });
}
function A(e) {
    let {
            status: t,
            isMobile: n = !1,
            size: a = 8,
            color: l,
            className: u,
            style: c
        } = e, p = i.useId(), m = t === d.Skl.ONLINE && n, I = i.useMemo(() => g({
            size: a,
            status: t,
            isMobile: m
        }), [
            a,
            t,
            m
        ]), T = (0, s.useSpring)({
            config: f,
            to: I
        }), A = h(t, l), [{fill: N}] = (0, s.useSpring)({
            config: f,
            fill: A
        }, [A]), v = Math.ceil(a * _.EW);
    return (0, r.jsxs)('svg', {
        width: a,
        height: v,
        viewBox: '0 0 '.concat(a, ' ').concat(v),
        className: o()(E.mask, u),
        style: c,
        children: [
            S(T, a, p),
            (0, r.jsx)(s.animated.rect, {
                x: 0,
                y: 0,
                width: a,
                height: v,
                fill: N,
                mask: 'url(#'.concat(p, ')')
            })
        ]
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n)
        return c.ZP.Masks.STATUS_TYPING;
    switch (e) {
    case d.Skl.IDLE:
        return c.ZP.Masks.STATUS_IDLE;
    case d.Skl.DND:
        return c.ZP.Masks.STATUS_DND;
    case d.Skl.STREAMING:
        return c.ZP.Masks.STATUS_STREAMING;
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
        return c.ZP.Masks.STATUS_OFFLINE;
    case d.Skl.ONLINE:
    default:
        if (t)
            return c.ZP.Masks.STATUS_ONLINE_MOBILE;
        return c.ZP.Masks.STATUS_ONLINE;
    }
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === d.Skl.ONLINE && n && !r ? {
        width: e,
        height: e * _.EW
    } : {
        width: r ? e * _.D6 : e,
        height: e
    };
}
function O(e) {
    let {
            status: t,
            isMobile: n = !1,
            size: i = 8,
            className: a,
            style: s,
            color: l
        } = e, u = t === d.Skl.ONLINE && n, _ = h(t, l);
    return (0, r.jsx)(c.ZP, {
        mask: N(t, u),
        className: o()(E.mask, a),
        style: s,
        ...v(i, t, u),
        children: (0, r.jsx)('div', {
            style: { backgroundColor: _ },
            className: E.status
        })
    });
}
