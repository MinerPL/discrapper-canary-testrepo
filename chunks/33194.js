n.d(t, {
    Iu: function () {
        return i;
    },
    OS: function () {
        return a;
    },
    g6: function () {
        return o;
    },
    v3: function () {
        return s;
    }
});
let r = (0, n(903797).Z)((e) => ({
    channelDismissTimestamps: {},
    queuedWarning: !1
}));
function i(e) {
    return r.getState().channelDismissTimestamps[e];
}
function a() {
    return r.getState().queuedWarning;
}
function s() {
    r.setState({ queuedWarning: !1 });
}
function o(e) {
    r.setState((t) => ({
        channelDismissTimestamps: {
            ...t.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
