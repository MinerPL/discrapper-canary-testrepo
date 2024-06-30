function r(e) {
    return Math.max(Math.min(e, 1), 0);
}
function i(e, t) {
    let {
        top: n,
        bottom: i,
        left: a,
        right: o
    } = e;
    return {
        top: null != n ? Math.floor(r(n) * t.height) : null,
        left: null != a ? Math.floor(r(a) * t.width) : null,
        bottom: null != i ? Math.floor(r(i) * t.height) : null,
        right: null != o ? Math.floor(r(o) * t.width) : null
    };
}
function a(e, t) {
    let {
        width: n,
        height: i
    } = e;
    return {
        width: 'auto' === n ? n : Math.floor(r(n) * t.width),
        height: 'auto' === i ? i : Math.floor(r(i) * t.height)
    };
}
function o(e, t) {
    let {
        top: n,
        bottom: i,
        left: a,
        right: o
    } = e;
    return {
        top: null != n ? r(n / t.height) : null,
        left: null != a ? r(a / t.width) : null,
        bottom: null != i ? r(i / t.height) : null,
        right: null != o ? r(o / t.width) : null
    };
}
function s(e, t) {
    let {
        width: n,
        height: r
    } = e;
    return {
        width: 'auto' === n ? n : n / t.width,
        height: 'auto' === r ? r : r / t.height
    };
}
function l(e, t, n, r, i) {
    let {
        top: a,
        bottom: o,
        left: s,
        right: l
    } = e;
    if (null == a && null == o ? (a = 0, o = n - i) : null == a && null != o ? a = n - (o + i) : null != a && (o = n - (a + i)), null == s && null == l ? (s = 0, l = t - r) : null == s && null != l ? s = t - (l + r) : null == l && null != s && (l = t - (s + r)), null == a || null == o || null == s || null == l)
        throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: a,
        left: s,
        bottom: o,
        right: l
    };
}
function u(e) {
    let {
        top: t,
        left: n,
        bottom: r,
        right: i
    } = e;
    return 0 === t || t <= r ? r = null : t = null, 0 === n || n <= i ? i = null : n = null, {
        top: t,
        left: n,
        bottom: r,
        right: i
    };
}
function c(e) {
    let {
        top: t,
        left: n,
        bottom: r,
        right: i
    } = e;
    return r < 0 && (t += r, r = 0), t < 0 && (r += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
        top: t,
        left: n,
        bottom: r,
        right: i
    };
}
function d(e, t, n) {
    e = i(e, n);
    let {
        width: r,
        height: o
    } = a(t, n);
    return r = 'string' == typeof r ? 0 : r, o = 'string' == typeof o ? 0 : o, l(e, n.width, n.height, r, o);
}
function _(e, t, n) {
    let {
            top: r,
            left: i
        } = e, {
            x: a,
            y: d
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: _,
            height: E
        } = t;
    return [
        o(u(c(l({
            top: r + d,
            left: i + a,
            bottom: null,
            right: null
        }, n.width, n.height, 'number' == typeof _ ? _ : 0, 'number' == typeof E ? E : 0))), n),
        s(t, n)
    ];
}
function E(e, t, n) {
    let {
            top: r,
            right: i
        } = e, {
            x: a,
            y: d
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: _,
            height: E
        } = t;
    return [
        o(u(c(l({
            top: r + d,
            left: null,
            bottom: null,
            right: i - a
        }, n.width, n.height, 'number' == typeof _ ? _ : 0, 'number' == typeof E ? E : 0))), n),
        s(t, n)
    ];
}
n.d(t, {
    KR: function () {
        return i;
    },
    Ox: function () {
        return s;
    },
    PY: function () {
        return l;
    },
    R: function () {
        return u;
    },
    jL: function () {
        return o;
    },
    o4: function () {
        return _;
    },
    ou: function () {
        return c;
    },
    uq: function () {
        return E;
    },
    vS: function () {
        return d;
    },
    w_: function () {
        return a;
    }
}), n(411104);
