n.d(e, {
    B: function () {
        return c;
    }
});
var a = n(735250);
n(470079);
var r = n(69580),
    o = n(944844),
    s = n(896426);
function c(t) {
    let { data: e, onDenied: n, onError: c, onSuccess: u } = t,
        l = (0, o.t)(e, n, c, u);
    return (0, a.jsx)('div', {
        className: s.content,
        children: (0, a.jsx)(r.OAuth2Authorize, {
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: l
        })
    });
}
