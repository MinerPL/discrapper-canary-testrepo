n.d(t, {
    Cb: function () {
        return a;
    },
    KF: function () {
        return c;
    },
    LP: function () {
        return p;
    },
    Mq: function () {
        return h;
    },
    Q0: function () {
        return s;
    },
    aA: function () {
        return _;
    },
    dU: function () {
        return u;
    },
    dX: function () {
        return o;
    },
    kq: function () {
        return d;
    },
    m9: function () {
        return l;
    },
    y0: function () {
        return f;
    }
});
var r = n(876215),
    i = n(758713);
function a(e) {
    return (null == e ? void 0 : e.content_type) === r.s.PLAYED_GAME;
}
function s(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_GAME;
}
function o(e) {
    return a(e) || s(e);
}
function l(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LISTENED_SESSION;
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_ARTIST;
}
function d(e) {
    return u(e) || c(e);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function _(e) {
    var t, n;
    return (!!o((t = e)) && t.extra.platform === i.z.XBOX) || (!!o((n = e)) && n.extra.platform === i.z.PLAYSTATION);
}
function h(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
function p(e) {
    return o(e) || d(e) || f(e) || l(e);
}
