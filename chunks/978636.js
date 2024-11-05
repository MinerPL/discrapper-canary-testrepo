n.d(t, {
    JL: function () {
        return a;
    },
    i9: function () {
        return i;
    }
}),
    n(47120);
let r = (0, n(903797).Z)(() => ({ hasFiredFromMessage: new Set() }));
function i(e) {
    let { hasFiredFromMessage: t } = r.getState();
    t.add(e), r.setState({ hasFiredFromMessage: t });
}
function a(e) {
    let { hasFiredFromMessage: t } = r.getState();
    return t.has(e);
}
