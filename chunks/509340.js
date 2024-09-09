o.d(n, {
    Z: function () {
        return a;
    }
});
var t = o(735250);
o(470079);
var s = o(159277),
    r = o(585183),
    i = o(981631),
    c = o(927923);
function a(e) {
    let { authToken: n, onContinue: o, onError: a, onClose: l } = e;
    return (0, t.jsx)(r.h, {
        platformType: i.ABu.XBOX,
        clientId: s.t.XBOX_APPLICATION_ID,
        scopes: c.tA,
        authToken: n,
        onContinue: o,
        onError: a,
        onClose: l
    });
}
