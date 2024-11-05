n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(789020),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(664751),
    r = n(373793),
    a = n(243814),
    l = n(149765),
    s = n(544891),
    o = n(45792),
    c = n(433517),
    d = n(570140),
    u = n(812206),
    h = n(979200),
    m = n(489863),
    p = n(166148),
    g = n(307643),
    f = n(973616),
    _ = n(594174),
    E = n(630388),
    I = n(700785),
    C = n(996106),
    v = n(186901),
    S = n(981631);
let N = 'CachedTokens';
async function T(e, t, n) {
    var i, a;
    let s;
    let o,
        c,
        d,
        v,
        { client_id: N, response_type: T = 'code', redirect_uri: x, code_challenge: b, code_challenge_method: A, state: Z, nonce: y, scope: L, permissions: R, guild_id: P, channel_id: O, prompt: j, disable_guild_select: D, integration_type: M, pid: w, signal: k } = e;
    if (null == k ? void 0 : k.aborted) throw new C.Z({ errorCode: S.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == N) throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != x) throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let U = [];
    if (('string' == typeof L ? (U = L.split(' ').filter((e) => e.length > 0)) : Array.isArray(L) && (U = L), null == _.default.getCurrentUser())) throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let G = null !== (a = u.Z.getApplication(N)) && void 0 !== a ? a : null;
    (null == G ||
        (function (e) {
            var t;
            let n = null !== (t = u.Z.getApplicationLastUpdated(e)) && void 0 !== t ? t : 0;
            return n < Date.now() - 5000;
        })(G.id)) &&
        (G = f.Z.createFromServer(await (0, g.UM)(N, k)));
    let B = null != G && (0, E.yE)(G.flags, S.udG.EMBEDDED) && (null === (i = G.integrationTypesConfig) || void 0 === i ? void 0 : i[r.Y.USER_INSTALL]) != null;
    o = null == M ? (B ? r.Y.USER_INSTALL : r.Y.GUILD_INSTALL) : Number(M);
    try {
        c = await (0, m.Ww)({
            clientId: N,
            scopes: U,
            responseType: T,
            redirectUri: x,
            codeChallenge: b,
            codeChallengeMethod: A,
            state: Z,
            integrationType: o,
            signal: k
        });
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    try {
        ({ disclosures: d, allAcked: v } = await (0, h.de)(c.application.id));
    } catch (t) {
        let { body: e } = t;
        throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (j === p.s.NONE && null != c && c.authorized && v)
        try {
            return (
                await (0, m.Iq)({
                    authorize: !0,
                    clientId: N,
                    scopes: U,
                    responseType: T,
                    redirectUri: x,
                    codeChallenge: b,
                    codeChallengeMethod: A,
                    state: Z,
                    nonce: y,
                    integrationType: o
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(c.application, O, w);
    let H = I.Hn;
    try {
        H = l.vB(null != R ? R : 0);
    } catch (e) {}
    return (
        null != c.integration_type && Object.values(r.Y).includes(c.integration_type) && (s = new Map()).set(c.integration_type, c),
        t({
            clientId: N,
            authorizations: s,
            scopes: U,
            parsedPermissions: H,
            responseType: T,
            redirectUri: x,
            codeChallenge: b,
            codeChallengeMethod: A,
            state: Z,
            guildId: P,
            channelId: O,
            prompt: j,
            disableGuildSelect: D,
            disclosures: d,
            integrationType: o,
            pid: w
        })
    );
}
function x(e, t) {
    if (e.authorization.accessToken) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'Already authenticating');
    return (
        (e.authorization.authing = !0),
        s.tn
            .get({
                url: S.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: 'Bearer '.concat(t) },
                oldFormErrors: !0
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id) throw new C.Z({ errorCode: S.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                    let s = _.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id) throw new C.Z({ errorCode: S.lTL.INVALID_TOKEN }, 'Token does not match current user');
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, v.wE]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        d.Z.dispatch({
                            type: 'RPC_APP_AUTHENTICATED',
                            socketId: e.id,
                            application: e.application
                        }),
                        {
                            ...n.body,
                            access_token: t
                        }
                    );
                },
                () => {
                    throw new C.Z({ errorCode: S.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
                }
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function b(e, t) {
    return {
        [S.Etm.AUTHENTICATE]: (0, o.S)(S.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: r,
                    signal: l,
                    args: { access_token: s }
                } = n;
                if (null == s && r.transport === v.He.IPC) {
                    let n = r.application.id;
                    if (null == n) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'No application.');
                    let o = a.x.IDENTIFY,
                        d = () =>
                            T(
                                {
                                    client_id: n,
                                    scope: o,
                                    response_type: 'token',
                                    signal: l
                                },
                                e,
                                t
                            ).then((e) => {
                                if (null == e) throw new C.Z({ errorCode: S.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                                let t = e.split(/#|\?/),
                                    a = i.parse(t[t.length - 1]);
                                if (null != a.error) {
                                    var l;
                                    throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(a.error, ': ').concat(null !== (l = a.error_description) && void 0 !== l ? l : 'unknown error'));
                                }
                                return (
                                    !(function (e, t, n, i) {
                                        var r;
                                        let a = null !== (r = c.K.get(N)) && void 0 !== r ? r : {};
                                        (a[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + i
                                        }),
                                            c.K.set(N, a);
                                    })(n, a.access_token, a.scope, a.expires_in),
                                    x(r, a.access_token)
                                );
                            });
                    return null !=
                        (s = (function (e, t) {
                            let n = c.K.get(N);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], c.K.set(N, n);
                            }
                        })(n, o))
                        ? x(r, s).catch(
                              () => (
                                  !(function (e) {
                                      var t;
                                      let n = null !== (t = c.K.get(N)) && void 0 !== t ? t : {};
                                      delete n[e], c.K.set(N, n);
                                  })(n),
                                  d()
                              )
                          )
                        : d();
                }
                if (null == s) throw new C.Z({ errorCode: S.lTL.INVALID_TOKEN }, 'No access token provided');
                return x(r, s);
            }
        }),
        [S.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: i, signal: r, args: a } = n,
                    l = a.client_id;
                if (!l) throw new C.Z({ errorCode: S.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != i.authorization.accessToken) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (i.authorization.authing) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'Already authing');
                if (((i.authorization.authing = !0), 'token' === a.response_type)) throw new C.Z({ errorCode: S.lTL.INVALID_COMMAND }, 'Authorization response_type "token" is not supported');
                return s.tn
                    .get({
                        url: S.ANM.APPLICATION_RPC(l),
                        oldFormErrors: !0,
                        signal: r
                    })
                    .then(
                        (n) => {
                            let l = n.body;
                            if (i.application.id !== l.id) throw new C.Z({ errorCode: S.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                            let s = a.scopes || a.scope;
                            return (
                                delete a.scopes,
                                T(
                                    {
                                        ...a,
                                        scope: s,
                                        signal: r
                                    },
                                    e,
                                    t
                                )
                            );
                        },
                        () => {
                            throw new C.Z({ errorCode: S.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(l));
                        }
                    )
                    .then((e) => {
                        if (((i.authorization.authing = !1), null == e)) throw new C.Z({ errorCode: S.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                        let t = new URL(e),
                            n = t.searchParams.get('error');
                        if (null != n && '' !== n) {
                            var r;
                            let e = null !== (r = t.searchParams.get('error_description')) && void 0 !== r ? r : 'unknown error';
                            throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(n, ': ').concat(e));
                        }
                        let a = t.searchParams.get('code');
                        if (null == a) throw new C.Z({ errorCode: S.lTL.OAUTH2_ERROR }, 'OAuth2 Error: Unable to find auth code');
                        return { code: a };
                    })
                    .catch((e) => {
                        throw ((i.authorization.authing = !1), e);
                    });
            }
        }
    };
}
