n.d(e, {
    B: function () {
        return c;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(69580),
    l = n(787025),
    s = n(944844);
function c(t) {
    let { data: e, onDenied: n, onError: c, onSuccess: u } = t,
        d = (0, s.t)(n, c, u),
        f = r.useCallback((t) => d(e, t), [e, d]);
    return (0, a.jsx)(l.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f
        })
    });
}
