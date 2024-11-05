var r, i, a, s;
function o(e) {
    return e.type === r.literal;
}
function l(e) {
    return e.type === r.argument;
}
function u(e) {
    return e.type === r.number;
}
function c(e) {
    return e.type === r.date;
}
function d(e) {
    return e.type === r.time;
}
function f(e) {
    return e.type === r.select;
}
function _(e) {
    return e.type === r.plural;
}
function h(e) {
    return e.type === r.pound;
}
function p(e) {
    return e.type === r.tag;
}
function m(e) {
    return !!(e && 'object' == typeof e && e.type === i.number);
}
function g(e) {
    return !!(e && 'object' == typeof e && e.type === i.dateTime);
}
n.d(t, {
    HI: function () {
        return p;
    },
    Ii: function () {
        return g;
    },
    Jo: function () {
        return _;
    },
    O4: function () {
        return o;
    },
    VG: function () {
        return l;
    },
    Wh: function () {
        return m;
    },
    Wi: function () {
        return f;
    },
    aV: function () {
        return i;
    },
    pe: function () {
        return d;
    },
    rp: function () {
        return c;
    },
    uf: function () {
        return u;
    },
    wD: function () {
        return r;
    },
    yx: function () {
        return h;
    }
}),
    ((a = r || (r = {}))[(a.literal = 0)] = 'literal'),
    (a[(a.argument = 1)] = 'argument'),
    (a[(a.number = 2)] = 'number'),
    (a[(a.date = 3)] = 'date'),
    (a[(a.time = 4)] = 'time'),
    (a[(a.select = 5)] = 'select'),
    (a[(a.plural = 6)] = 'plural'),
    (a[(a.pound = 7)] = 'pound'),
    (a[(a.tag = 8)] = 'tag'),
    ((s = i || (i = {}))[(s.number = 0)] = 'number'),
    (s[(s.dateTime = 1)] = 'dateTime');
