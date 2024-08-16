n.d(e, {
    $Q: function () {
        return l;
    },
    HK: function () {
        return f;
    },
    Jr: function () {
        return m;
    },
    Sh: function () {
        return p;
    },
    _j: function () {
        return h;
    },
    hl: function () {
        return c;
    },
    xp: function () {
        return a;
    },
    zf: function () {
        return g;
    }
});
var r = n(467510),
    i = n(309544),
    s = n(573736),
    o = n(622916),
    u = n(886115);
function c(t, e, n) {
    if (!(e in t)) return;
    let r = t[e],
        i = n(r);
    'function' == typeof i && l(i, r), (t[e] = i);
}
function a(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch (n) {
        i.X && o.kg.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
function l(t, e) {
    try {
        let n = e.prototype || {};
        (t.prototype = e.prototype = n), a(t, '__sentry_original__', e);
    } catch (t) {}
}
function f(t) {
    return t.__sentry_original__;
}
function h(t) {
    return Object.keys(t)
        .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
        .join('&');
}
function p(t) {
    if ((0, s.VZ)(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...d(t)
        };
    if (!(0, s.cO)(t)) return t;
    {
        let e = {
            type: t.type,
            target: _(t.target),
            currentTarget: _(t.currentTarget),
            ...d(t)
        };
        return 'undefined' != typeof CustomEvent && (0, s.V9)(t, CustomEvent) && (e.detail = t.detail), e;
    }
}
function _(t) {
    try {
        return (0, s.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t);
    } catch (t) {
        return '<unknown>';
    }
}
function d(t) {
    if ('object' != typeof t || null === t) return {};
    {
        let e = {};
        for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }
}
function g(t, e = 40) {
    let n = Object.keys(p(t));
    n.sort();
    let r = n[0];
    if (!r) return '[object has no keys]';
    if (r.length >= e) return (0, u.$G)(r, e);
    for (let t = n.length; t > 0; t--) {
        let r = n.slice(0, t).join(', ');
        if (!(r.length > e)) {
            if (t === n.length) return r;
            return (0, u.$G)(r, e);
        }
    }
    return '';
}
function m(t) {
    return (function t(e, n) {
        if (
            (function (t) {
                if (!(0, s.PO)(t)) return !1;
                try {
                    let e = Object.getPrototypeOf(t).constructor.name;
                    return !e || 'Object' === e;
                } catch (t) {
                    return !0;
                }
            })(e)
        ) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e))) void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
        }
        if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
                n.set(e, i),
                e.forEach((e) => {
                    i.push(t(e, n));
                }),
                i
            );
        }
        return e;
    })(t, new Map());
}
