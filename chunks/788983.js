n.d(t, {
    YS: function () {
        return u;
    },
    bA: function () {
        return a;
    },
    hP: function () {
        return o;
    },
    hY: function () {
        return l;
    },
    xv: function () {
        return s;
    }
});
var r = n(570140);
let i = {
    menubar: !1,
    toolbar: !1,
    location: !1,
    directories: !1
};
function a(e, t, n) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_OPEN',
        key: e,
        features: {
            ...i,
            ...n
        },
        render: t
    });
}
function o(e) {
    return r.Z.dispatch({
        type: 'CHANNEL_CALL_POPOUT_WINDOW_OPEN',
        channel: e
    });
}
function s(e) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_CLOSE',
        key: e
    });
}
function l(e, t) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP',
        alwaysOnTop: t,
        key: e
    });
}
function u(e, t) {
    return r.Z.dispatch({
        type: 'POPOUT_WINDOW_ADD_STYLESHEET',
        url: e,
        integrity: t
    });
}
