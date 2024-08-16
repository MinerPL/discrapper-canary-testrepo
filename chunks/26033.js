n.d(t, {
    Cb: function () {
        return a;
    },
    KF: function () {
        return u;
    },
    Mq: function () {
        return E;
    },
    Q0: function () {
        return s;
    },
    aA: function () {
        return _;
    },
    dU: function () {
        return l;
    },
    dX: function () {
        return o;
    },
    kq: function () {
        return c;
    },
    y0: function () {
        return d;
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
    return (null == e ? void 0 : e.content_type) === r.s.LISTENED_SESSION;
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_ARTIST;
}
function c(e) {
    return l(e) || u(e);
}
function d(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function _(e) {
    var t, n;
    return (!!o((t = e)) && t.extra.platform === i.z.XBOX) || (!!o((n = e)) && n.extra.platform === i.z.PLAYSTATION);
}
function E(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
