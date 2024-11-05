function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
            i = e[r];
        if (0 < a(i, t)) (e[r] = t), (e[n] = i), (n = r);
        else break;
    }
}
function r(e) {
    return 0 === e.length ? null : e[0];
}
function i(e) {
    if (0 === e.length) return null;
    var t = e[0],
        n = e.pop();
    if (n !== t) {
        e[0] = n;
        for (var r = 0, i = e.length, s = i >>> 1; r < s; ) {
            var o = 2 * (r + 1) - 1,
                l = e[o],
                u = o + 1,
                c = e[u];
            if (0 > a(l, n)) u < i && 0 > a(c, l) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = l), (e[o] = n), (r = o));
            else if (u < i && 0 > a(c, n)) (e[r] = c), (e[u] = n), (r = u);
            else break;
        }
    }
    return t;
}
function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
}
if ('object' == typeof performance && 'function' == typeof performance.now) {
    var s,
        o = performance;
    t.unstable_now = function () {
        return o.now();
    };
} else {
    var l = Date,
        u = l.now();
    t.unstable_now = function () {
        return l.now() - u;
    };
}
var c = [],
    d = [],
    f = 1,
    _ = null,
    h = 3,
    p = !1,
    m = !1,
    g = !1,
    E = 'function' == typeof setTimeout ? setTimeout : null,
    v = 'function' == typeof clearTimeout ? clearTimeout : null,
    I = 'undefined' != typeof setImmediate ? setImmediate : null;
function S(e) {
    for (var t = r(d); null !== t; ) {
        if (null === t.callback) i(d);
        else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(c, t);
        else break;
        t = r(d);
    }
}
function T(e) {
    if (((g = !1), S(e), !m)) {
        if (null !== r(c)) (m = !0), w(b);
        else {
            var t = r(d);
            null !== t && M(T, t.startTime - e);
        }
    }
}
function b(e, n) {
    (m = !1), g && ((g = !1), v(N), (N = -1)), (p = !0);
    var a = h;
    try {
        for (S(n), _ = r(c); null !== _ && (!(_.expirationTime > n) || (e && !O())); ) {
            var s = _.callback;
            if ('function' == typeof s) {
                (_.callback = null), (h = _.priorityLevel);
                var o = s(_.expirationTime <= n);
                (n = t.unstable_now()), 'function' == typeof o ? (_.callback = o) : _ === r(c) && i(c), S(n);
            } else i(c);
            _ = r(c);
        }
        if (null !== _) var l = !0;
        else {
            var u = r(d);
            null !== u && M(T, u.startTime - n), (l = !1);
        }
        return l;
    } finally {
        (_ = null), (h = a), (p = !1);
    }
}
'undefined' != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var y = !1,
    A = null,
    N = -1,
    C = 5,
    R = -1;
function O() {
    return !(t.unstable_now() - R < C);
}
function D() {
    if (null !== A) {
        var e = t.unstable_now();
        R = e;
        var n = !0;
        try {
            n = A(!0, e);
        } finally {
            n ? s() : ((y = !1), (A = null));
        }
    } else y = !1;
}
if ('function' == typeof I)
    s = function () {
        I(D);
    };
else if ('undefined' != typeof MessageChannel) {
    var L = new MessageChannel(),
        x = L.port2;
    (L.port1.onmessage = D),
        (s = function () {
            x.postMessage(null);
        });
} else
    s = function () {
        E(D, 0);
    };
function w(e) {
    (A = e), y || ((y = !0), s());
}
function M(e, n) {
    N = E(function () {
        e(t.unstable_now());
    }, n);
}
(t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (e) {
        e.callback = null;
    }),
    (t.unstable_continueExecution = function () {
        m || p || ((m = !0), w(b));
    }),
    (t.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (C = 0 < e ? Math.floor(1000 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
        return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
        return r(c);
    }),
    (t.unstable_next = function (e) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = h;
        }
        var n = h;
        h = t;
        try {
            return e();
        } finally {
            h = n;
        }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var n = h;
        h = e;
        try {
            return t();
        } finally {
            h = n;
        }
    }),
    (t.unstable_scheduleCallback = function (e, i, a) {
        var s = t.unstable_now();
        switch (((a = 'object' == typeof a && null !== a ? ('number' == typeof (a = a.delay) && 0 < a ? s + a : s) : s), e)) {
            case 1:
                var o = -1;
                break;
            case 2:
                o = 250;
                break;
            case 5:
                o = 1073741823;
                break;
            case 4:
                o = 10000;
                break;
            default:
                o = 5000;
        }
        return (
            (o = a + o),
            (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: o,
                sortIndex: -1
            }),
            a > s ? ((e.sortIndex = a), n(d, e), null === r(c) && e === r(d) && (g ? (v(N), (N = -1)) : (g = !0), M(T, a - s))) : ((e.sortIndex = o), n(c, e), m || p || ((m = !0), w(b))),
            e
        );
    }),
    (t.unstable_shouldYield = O),
    (t.unstable_wrapCallback = function (e) {
        var t = h;
        return function () {
            var n = h;
            h = t;
            try {
                return e.apply(this, arguments);
            } finally {
                h = n;
            }
        };
    });
