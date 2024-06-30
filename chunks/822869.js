n.d(t, {
    Lb: function () {
        return s;
    },
    gP: function () {
        return r;
    },
    sF: function () {
        return l;
    }
});
var i = n(626135), a = n(981631);
function s(e, t, n) {
    i.default.track(a.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    });
}
function l(e, t) {
    i.default.track(a.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: e,
        message_id: t
    });
}
function r(e, t, n, s) {
    i.default.track(a.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: e,
        message_id: t,
        has_error: n,
        num_destinations: s
    });
}
