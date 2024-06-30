n.d(t, {
    T: function () {
        return r;
    },
    v: function () {
        return s;
    }
});
var i = n(442837), a = n(355298), l = n(333984);
function s(e) {
    return (0, i.e7)([a.Z], () => a.Z.isMessageRequest(e), [e]);
}
function r(e) {
    return (0, i.e7)([
        a.Z,
        l.Z
    ], () => null != e && (a.Z.isMessageRequest(e) || l.Z.isSpam(e)));
}
