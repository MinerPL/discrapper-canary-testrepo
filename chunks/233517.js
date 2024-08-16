r.d(t, {
    Qy: function () {
        return D;
    },
    TM: function () {
        return h;
    },
    Tb: function () {
        return c;
    },
    YA: function () {
        return d;
    },
    av: function () {
        return N;
    },
    cg: function () {
        return g;
    },
    dk: function () {
        return S;
    },
    eN: function () {
        return u;
    },
    eW: function () {
        return p;
    },
    mG: function () {
        return T;
    },
    rJ: function () {
        return R;
    },
    sU: function () {
        return A;
    },
    uT: function () {
        return I;
    },
    v: function () {
        return l;
    },
    xv: function () {
        return f;
    },
    yj: function () {
        return L;
    },
    yl: function () {
        return O;
    }
});
var n = r(622916),
    a = r(899517),
    o = r(559508),
    i = r(263449),
    _ = r(255768),
    E = r(112797),
    s = r(822578);
function c(e, t) {
    return (0, i.nZ)().captureException(e, (0, s.U0)(t));
}
function I(e, t) {
    let r = 'string' == typeof t ? t : void 0,
        n = 'string' != typeof t ? { captureContext: t } : void 0;
    return (0, i.nZ)().captureMessage(e, r, n);
}
function u(e, t) {
    return (0, i.nZ)().captureEvent(e, t);
}
function l(e, t) {
    (0, i.aF)().setContext(e, t);
}
function R(e) {
    (0, i.aF)().setExtras(e);
}
function A(e, t) {
    (0, i.aF)().setExtra(e, t);
}
function T(e) {
    (0, i.aF)().setTags(e);
}
function d(e, t) {
    (0, i.aF)().setTag(e, t);
}
function N(e) {
    (0, i.aF)().setUser(e);
}
function p() {
    return (0, i.aF)().lastEventId();
}
async function O(e) {
    let t = (0, i.s3)();
    return t ? t.flush(e) : (_.X && n.kg.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
}
async function f(e) {
    let t = (0, i.s3)();
    return t ? t.close(e) : (_.X && n.kg.warn('Cannot flush events and disable SDK. No client defined.'), Promise.resolve(!1));
}
function S() {
    return !!(0, i.s3)();
}
function D(e) {
    (0, i.aF)().addEventProcessor(e);
}
function L(e) {
    let t = (0, i.s3)(),
        r = (0, i.aF)(),
        n = (0, i.nZ)(),
        { release: _, environment: s = o.J } = (t && t.getOptions()) || {},
        { userAgent: c } = a.n.navigator || {},
        I = (0, E.Hv)({
            release: _,
            environment: s,
            user: n.getUser() || r.getUser(),
            ...(c && { userAgent: c }),
            ...e
        }),
        u = r.getSession();
    return u && 'ok' === u.status && (0, E.CT)(u, { status: 'exited' }), h(), r.setSession(I), n.setSession(I), I;
}
function h() {
    let e = (0, i.aF)(),
        t = (0, i.nZ)(),
        r = t.getSession() || e.getSession();
    r && (0, E.RJ)(r), C(), e.setSession(), t.setSession();
}
function C() {
    let e = (0, i.aF)(),
        t = (0, i.nZ)(),
        r = (0, i.s3)(),
        n = t.getSession() || e.getSession();
    n && r && r.captureSession(n);
}
function g(e = !1) {
    if (e) {
        h();
        return;
    }
    C();
}
