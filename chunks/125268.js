n.d(t, {
    AX: function () {
        return c;
    },
    BR: function () {
        return d;
    },
    Bo: function () {
        return f;
    },
    Df: function () {
        return h;
    },
    LT: function () {
        return E;
    },
    ZZ: function () {
        return p;
    },
    cV: function () {
        return u;
    },
    fW: function () {
        return _;
    },
    gr: function () {
        return m;
    },
    oW: function () {
        return o;
    }
});
var i = n(261470), a = n(544891), l = n(570140), s = n(292793), r = n(981631);
function o(e, t, n, i, a) {
    l.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: i,
        point: a
    });
}
function c(e, t, n, i) {
    return a.tn.post({
        url: r.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: i
        }
    });
}
function u(e, t, n, i) {
    l.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: i,
        streamerId: n
    });
}
function d(e, t, n) {
    return a.tn.post({
        url: r.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n }
    });
}
function h(e, t, n) {
    a.tn.del({
        url: r.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new i.Z()
    });
}
function p(e, t) {
    t.state = s.f.STOP, l.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: t,
        userId: t.userId,
        streamerId: e
    });
}
function m(e, t, n) {
    l.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function _(e, t) {
    l.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function f(e) {
    l.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function E() {
    l.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}
