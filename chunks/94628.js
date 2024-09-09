n.d(e, {
    B: function () {
        return l;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    o = n(69580),
    s = n(787025),
    i = n(944844);
function l(t) {
    let { data: e, onDenied: n, onError: l, onSuccess: c } = t,
        u = (0, i.t)(e, n, l, c);
    return (0, a.jsx)(s.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(o.OAuth2AuthorizeModal, {
            transitionState: r.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: u
        })
    });
}
