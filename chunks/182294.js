var r, i, a, s, o, l;
n.d(t, {
    D6: function () {
        return c;
    },
    EF: function () {
        return r;
    },
    EW: function () {
        return u;
    },
    UC: function () {
        return f;
    },
    VZ: function () {
        return i;
    },
    ZC: function () {
        return _;
    },
    d_: function () {
        return a;
    },
    e7: function () {
        return d;
    },
    ny: function () {
        return E;
    },
    px: function () {
        return h;
    }
}),
    n(411104);
let u = 1.5,
    c = 2.5,
    d = 0.125,
    _ = 0.2;
((s = r || (r = {})).SIZE_16 = 'SIZE_16'), (s.SIZE_20 = 'SIZE_20'), (s.SIZE_24 = 'SIZE_24'), (s.SIZE_32 = 'SIZE_32'), (s.SIZE_40 = 'SIZE_40'), (s.SIZE_48 = 'SIZE_48'), (s.SIZE_56 = 'SIZE_56'), (s.SIZE_80 = 'SIZE_80'), (s.SIZE_120 = 'SIZE_120'), (s.SIZE_152 = 'SIZE_152'), (s.DEPRECATED_SIZE_30 = 'DEPRECATED_SIZE_30'), (s.DEPRECATED_SIZE_60 = 'DEPRECATED_SIZE_60'), (s.DEPRECATED_SIZE_100 = 'DEPRECATED_SIZE_100'), ((o = i || (i = {})).BLACK = 'black'), (o.WHITE = 'white'), ((l = a || (a = {}))[(l.HIGH = 0.7)] = 'HIGH'), (l[(l.LOW = 0.45)] = 'LOW');
let E = Object.freeze({
    SIZE_16: Object.freeze({
        size: 16,
        status: 6,
        stroke: 2,
        offset: 0
    }),
    SIZE_20: Object.freeze({
        size: 20,
        status: 6,
        stroke: 2,
        offset: 0
    }),
    SIZE_24: Object.freeze({
        size: 24,
        status: 8,
        stroke: 3,
        offset: 0
    }),
    SIZE_32: Object.freeze({
        size: 32,
        status: 10,
        stroke: 3,
        offset: 0
    }),
    SIZE_40: Object.freeze({
        size: 40,
        status: 12,
        stroke: 4,
        offset: 0
    }),
    SIZE_48: Object.freeze({
        size: 48,
        status: 12,
        stroke: 4,
        offset: 0
    }),
    SIZE_56: Object.freeze({
        size: 56,
        status: 14,
        stroke: 4,
        offset: 2
    }),
    SIZE_80: Object.freeze({
        size: 80,
        status: 16,
        stroke: 6,
        offset: 4
    }),
    SIZE_120: Object.freeze({
        size: 120,
        status: 24,
        stroke: 8,
        offset: 8
    }),
    SIZE_152: Object.freeze({
        size: 152,
        status: 30,
        stroke: 10,
        offset: 10
    }),
    DEPRECATED_SIZE_30: Object.freeze({
        size: 30,
        status: 0,
        stroke: 0,
        offset: 0
    }),
    DEPRECATED_SIZE_60: Object.freeze({
        size: 60,
        status: 0,
        stroke: 0,
        offset: 0
    }),
    DEPRECATED_SIZE_100: Object.freeze({
        size: 100,
        status: 0,
        stroke: 0,
        offset: 0
    })
});
function f(e) {
    return E[e];
}
function h(e) {
    if ('number' != typeof e) return E[e].size;
    return e;
}
