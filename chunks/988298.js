e.d(n, {
    GG: function () {
        return o;
    },
    R2: function () {
        return l;
    },
    h7: function () {
        return s;
    },
    rh: function () {
        return r;
    }
});
var i = e(570140);
function s(t, n, e) {
    return new Promise((s) => {
        setTimeout(() => {
            i.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: t,
                isPrivate: n,
                context: e,
                resolve: s
            });
        }, 0);
    });
}
function r(t) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: t
    });
}
function o(t) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: t
    });
}
function l(t) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: t
    });
}
