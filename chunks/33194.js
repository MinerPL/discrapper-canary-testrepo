n.d(t, {
    Iu: function () {
        return i;
    },
    g6: function () {
        return a;
    }
});
let r = (0, n(652874).Z)((e) => ({ channelDismissTimestamps: {} }));
function i(e) {
    return r.getState().channelDismissTimestamps[e];
}
function a(e) {
    r.setState((t) => ({
        channelDismissTimestamps: {
            ...t.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
