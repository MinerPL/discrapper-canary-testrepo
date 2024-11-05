n.d(t, {
    A4: function () {
        return d;
    },
    E9: function () {
        return u;
    },
    Os: function () {
        return o;
    },
    jx: function () {
        return f;
    },
    nv: function () {
        return s;
    },
    sz: function () {
        return c;
    },
    te: function () {
        return a;
    },
    xh: function () {
        return l;
    },
    zG: function () {
        return _;
    }
});
var r = n(570140),
    i = n(145597);
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Gr;
    r.Z.dispatch({
        type: 'LAYOUT_CREATE',
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: a
    });
}
function s(e) {
    let { widgetId: t, anchor: n, size: i, opacity: a } = e;
    r.Z.dispatch({
        type: 'LAYOUT_UPDATE_WIDGET',
        widgetId: t,
        anchor: n,
        size: i,
        opacity: a
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_TOP_WIDGET',
        widgetId: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_PINNED',
        widgetId: e
    });
}
function u(e) {
    r.Z.dispatch({
        type: 'LAYOUT_DELETE_WIDGET',
        widgetId: e
    });
}
function c(e) {
    r.Z.dispatch({
        type: 'LAYOUT_DELETE_ALL_WIDGETS',
        layoutId: e
    });
}
function d(e) {
    f([e]);
}
function f(e) {
    r.Z.dispatch({
        type: 'LAYOUT_CREATE_WIDGETS',
        widgetConfigs: e
    });
}
function _(e, t) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_WIDGET_META',
        widgetId: e,
        meta: t
    });
}
