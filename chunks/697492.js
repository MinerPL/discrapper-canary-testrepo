n.d(t, {
    Gd: function () {
        return a;
    },
    ME: function () {
        return o;
    },
    Ym: function () {
        return s;
    },
    _g: function () {
        return i;
    },
    hu: function () {
        return l;
    }
});
var r = n(570140);
function i(e, t, n) {
    r.Z.dispatch({
        type: 'HIGH_FIVE_QUEUE',
        userId: t,
        channelId: n,
        emoji: e
    });
}
function a(e, t) {
    r.Z.dispatch({
        type: 'HIGH_FIVE_REMOVE',
        channelId: t,
        userId: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'HIGH_FIVE_SET_ENABLED',
        enabled: e
    });
}
function s(e, t, n, i) {
    r.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE',
        waitingUserId: e,
        completingUserId: t,
        channelId: n,
        completingEmoji: i
    });
}
function l(e, t, n) {
    r.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE_CLEAR',
        firstUserId: e,
        secondUserId: t,
        channelId: n
    });
}
