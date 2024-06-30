r.d(e, {
    $Q: function () {
        return E;
    },
    HK: function () {
        return s;
    },
    Jr: function () {
        return l;
    },
    Sh: function () {
        return I;
    },
    _j: function () {
        return c;
    },
    hl: function () {
        return i;
    },
    xp: function () {
        return o;
    },
    zf: function () {
        return T;
    }
});
var n = r(829919), _ = r(46834), a = r(336344);
function i(t, e, r) {
    if (!(e in t))
        return;
    let n = t[e], _ = r(n);
    if ('function' == typeof _)
        try {
            E(_, n);
        } catch (t) {
        }
    t[e] = _;
}
function o(t, e, r) {
    Object.defineProperty(t, e, {
        value: r,
        writable: !0,
        configurable: !0
    });
}
function E(t, e) {
    let r = e.prototype || {};
    t.prototype = e.prototype = r, o(t, '__sentry_original__', e);
}
function s(t) {
    return t.__sentry_original__;
}
function c(t) {
    return Object.keys(t).map(e => `${ encodeURIComponent(e) }=${ encodeURIComponent(t[e]) }`).join('&');
}
function I(t) {
    if ((0, _.VZ)(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...u(t)
        };
    if (!(0, _.cO)(t))
        return t;
    {
        let e = {
            type: t.type,
            target: R(t.target),
            currentTarget: R(t.currentTarget),
            ...u(t)
        };
        return 'undefined' != typeof CustomEvent && (0, _.V9)(t, CustomEvent) && (e.detail = t.detail), e;
    }
}
function R(t) {
    try {
        return (0, _.kK)(t) ? (0, n.Rt)(t) : Object.prototype.toString.call(t);
    } catch (t) {
        return '<unknown>';
    }
}
function u(t) {
    if ('object' != typeof t || null === t)
        return {};
    {
        let e = {};
        for (let r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
    }
}
function T(t, e = 40) {
    let r = Object.keys(I(t));
    if (r.sort(), !r.length)
        return '[object has no keys]';
    if (r[0].length >= e)
        return (0, a.$G)(r[0], e);
    for (let t = r.length; t > 0; t--) {
        let n = r.slice(0, t).join(', ');
        if (!(n.length > e)) {
            if (t === r.length)
                return n;
            return (0, a.$G)(n, e);
        }
    }
    return '';
}
function l(t) {
    return function t(e, r) {
        if ((0, _.PO)(e)) {
            let n = r.get(e);
            if (void 0 !== n)
                return n;
            let _ = {};
            for (let n of (r.set(e, _), Object.keys(e)))
                void 0 !== e[n] && (_[n] = t(e[n], r));
            return _;
        }
        if (Array.isArray(e)) {
            let n = r.get(e);
            if (void 0 !== n)
                return n;
            let _ = [];
            return r.set(e, _), e.forEach(e => {
                _.push(t(e, r));
            }), _;
        }
        return e;
    }(t, new Map());
}
