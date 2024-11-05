let r, i;
n.d(t, {
    FW: function () {
        return u;
    },
    Gr: function () {
        return l;
    },
    Ht: function () {
        return p;
    },
    Js: function () {
        return d;
    },
    QF: function () {
        return _;
    },
    Te: function () {
        return m;
    },
    Tq: function () {
        return o;
    },
    VS: function () {
        return E;
    },
    W2: function () {
        return v;
    },
    qU: function () {
        return c;
    },
    tB: function () {
        return h;
    },
    vR: function () {
        return g;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(490029);
var a = n(568963),
    s = n(358085);
n(981631);
let o = 2,
    l = {
        width: 3840,
        height: 2160
    },
    u = {
        width: 768,
        height: 432
    },
    c = 'overlay_default',
    d = -2,
    f = !1;
function _() {
    var e;
    if (void 0 !== r) return r;
    let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
    return isNaN(t) && (t = -1), (r = t);
}
function h(e) {
    v() && (r = e);
}
function p() {
    return new URLSearchParams(window.location.search).get('rpc_auth_token');
}
function m(e) {
    return !s.isPlatformEmbedded || (e.width >= u.width && e.height >= u.height);
}
function g(e) {
    f = e;
}
function E() {
    return f;
}
function v() {
    if (void 0 !== i) return i;
    if ((0, a.R)()) i = !0;
    else {
        var e;
        i = (null !== (e = new URLSearchParams(window.location.search).get('oop')) && void 0 !== e ? e : '') === 'true';
    }
    return i;
}
