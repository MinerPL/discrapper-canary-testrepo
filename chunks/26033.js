n.d(t, {
    Cb: function () {
        return a;
    },
    KF: function () {
        return c;
    },
    Mq: function () {
        return f;
    },
    Q0: function () {
        return s;
    },
    aA: function () {
        return E;
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
        return _;
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
function _(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function E(e) {
    var t, n;
    return (!!o((t = e)) && t.extra.platform === i.z.XBOX) || (!!o((n = e)) && n.extra.platform === i.z.PLAYSTATION);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
