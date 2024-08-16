n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(69580);
function i(e) {
    var t, n, i, a;
    let s = null == e ? void 0 : e.get('client_id'),
        o = null == e ? void 0 : null === (t = e.get('scope')) || void 0 === t ? void 0 : t.split(' '),
        l = null == e ? void 0 : e.get('state'),
        u = null == e ? void 0 : e.get('redirect_uri'),
        c = null == e ? void 0 : e.get('response_type'),
        d = null !== (n = null == e ? void 0 : e.get('nonce')) && void 0 !== n ? n : void 0,
        _ = null !== (i = null == e ? void 0 : e.get('code_challenge')) && void 0 !== i ? i : void 0,
        E = null !== (a = null == e ? void 0 : e.get('code_challenge_method')) && void 0 !== a ? a : void 0;
    return (
        null == s ||
        null == o ||
        null == u ||
        null == c ||
        ((0, r.openOAuth2Modal)({
            clientId: s,
            scopes: o,
            redirectUri: u,
            state: null != l ? l : void 0,
            responseType: c,
            nonce: d,
            codeChallenge: _,
            codeChallengeMethod: E
        }),
        !0)
    );
}
