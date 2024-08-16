n.d(t, {
    $Z: function () {
        return o;
    },
    Ao: function () {
        return l;
    },
    Cp: function () {
        return s;
    },
    Cz: function () {
        return c;
    },
    bA: function () {
        return i;
    },
    d7: function () {
        return u;
    },
    k3: function () {
        return d;
    },
    xv: function () {
        return a;
    }
});
var r = n(570140);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_OPEN',
        id: e,
        component: t,
        props: n
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_CLOSE',
        id: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_HIDE',
        id: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_SHOW',
        id: e
    });
}
function l(e, t) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_MOVE',
        id: e,
        position: t
    });
}
function u(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_RESIZE',
        width: e
    });
}
function c(e, t) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_RECT',
        id: e,
        rect: t
    });
}
function d(e) {
    r.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW',
        id: e
    });
}
