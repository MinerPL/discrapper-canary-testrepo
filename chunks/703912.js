n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(789020),
    n(47120);
var i = n(664751),
    a = n(373793),
    s = n(243814),
    r = n(149765),
    l = n(544891),
    o = n(45792),
    c = n(433517),
    d = n(570140),
    u = n(812206),
    _ = n(979200),
    E = n(489863),
    h = n(166148),
    m = n(307643),
    I = n(973616),
    g = n(594174),
    p = n(630388),
    T = n(700785),
    S = n(996106),
    C = n(186901),
    f = n(981631);
let N = 'CachedTokens';
async function A(e, t, n) {
    var i, s;
    let l;
    let o,
        c,
        d,
        C,
        { client_id: N, response_type: A = 'code', redirect_uri: v, code_challenge: L, code_challenge_method: Z, state: R, nonce: O, scope: x, permissions: b, guild_id: P, channel_id: M, prompt: D, disable_guild_select: y, integration_type: j, pid: U, signal: G } = e;
    if (null == G ? void 0 : G.aborted) throw new S.Z({ errorCode: f.lTL.UNKNOWN_ERROR }, 'Request aborted');
    if (null == N) throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != v) throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let w = [];
    if (('string' == typeof x ? (w = x.split(' ').filter((e) => e.length > 0)) : Array.isArray(x) && (w = x), null == g.default.getCurrentUser())) throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let k = null !== (s = u.Z.getApplication(N)) && void 0 !== s ? s : null;
    (null == k ||
        (function (e) {
            var t;
            let n = null !== (t = u.Z.getApplicationLastUpdated(e)) && void 0 !== t ? t : 0;
            return n < Date.now() - 5000;
        })(k.id)) &&
        (k = I.Z.createFromServer(await (0, m.UM)(N, G)));
    let B = null != k && (0, p.yE)(k.flags, f.udG.EMBEDDED) && (null === (i = k.integrationTypesConfig) || void 0 === i ? void 0 : i[a.Y.USER_INSTALL]) != null;
    o = null == j ? (B ? a.Y.USER_INSTALL : a.Y.GUILD_INSTALL) : Number(j);
    try {
        c = await (0, E.Ww)({
            clientId: N,
            scopes: w,
            responseType: A,
            redirectUri: v,
            codeChallenge: L,
            codeChallengeMethod: Z,
            state: R,
            integrationType: o,
            signal: G
        });
    } catch (t) {
        let { body: e } = t;
        throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    try {
        ({ disclosures: d, allAcked: C } = await (0, _.de)(c.application.id));
    } catch (t) {
        let { body: e } = t;
        throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
    }
    if (D === h.s.NONE && null != c && c.authorized && C)
        try {
            return (
                await (0, E.Iq)({
                    authorize: !0,
                    clientId: N,
                    scopes: w,
                    responseType: A,
                    redirectUri: v,
                    codeChallenge: L,
                    codeChallengeMethod: Z,
                    state: R,
                    nonce: O,
                    integrationType: o
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat((null == e ? void 0 : e.message) || 'Unknown Error'));
        }
    null == n || n(c.application, M, U);
    let H = T.Hn;
    try {
        H = r.vB(null != b ? b : 0);
    } catch (e) {}
    return (
        null != c.integration_type && Object.values(a.Y).includes(c.integration_type) && (l = new Map()).set(c.integration_type, c),
        t({
            clientId: N,
            authorizations: l,
            scopes: w,
            parsedPermissions: H,
            responseType: A,
            redirectUri: v,
            codeChallenge: L,
            codeChallengeMethod: Z,
            state: R,
            guildId: P,
            channelId: M,
            prompt: D,
            disableGuildSelect: y,
            disclosures: d,
            integrationType: o,
            pid: U
        })
    );
}
function v(e, t) {
    if (e.authorization.accessToken) throw new S.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing) throw new S.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticating');
    return (
        (e.authorization.authing = !0),
        l.tn
            .get({
                url: f.ANM.OAUTH2_CURRENT_AUTH,
                headers: { Authorization: 'Bearer '.concat(t) },
                oldFormErrors: !0
            })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: a, scopes: s, expires: r } = n.body;
                    if (e.application.id !== i.id) throw new S.Z({ errorCode: f.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                    let l = g.default.getCurrentUser();
                    if (null == l || !a || l.id !== a.id) throw new S.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'Token does not match current user');
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...s, C.wE]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(r)),
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
                    throw new S.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
                }
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function L(e, t) {
    return {
        [f.Etm.AUTHENTICATE]: (0, o.S)(f.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: a,
                    signal: r,
                    args: { access_token: l }
                } = n;
                if (null == l && a.transport === C.He.IPC) {
                    let n = a.application.id;
                    if (null == n) throw new S.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'No application.');
                    let o = s.x.IDENTIFY,
                        d = () =>
                            A(
                                {
                                    client_id: n,
                                    scope: o,
                                    response_type: 'token',
                                    signal: r
                                },
                                e,
                                t
                            ).then((e) => {
                                if (null == e) throw new S.Z({ errorCode: f.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                                let t = e.split(/#|\?/),
                                    s = i.parse(t[t.length - 1]);
                                if (null != s.error) {
                                    var r;
                                    throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(s.error, ': ').concat(null !== (r = s.error_description) && void 0 !== r ? r : 'unknown error'));
                                }
                                return (
                                    !(function (e, t, n, i) {
                                        var a;
                                        let s = null !== (a = c.K.get(N)) && void 0 !== a ? a : {};
                                        (s[e] = {
                                            accessToken: t,
                                            scope: n,
                                            expires: Date.now() + i
                                        }),
                                            c.K.set(N, s);
                                    })(n, s.access_token, s.scope, s.expires_in),
                                    v(a, s.access_token)
                                );
                            });
                    return null !=
                        (l = (function (e, t) {
                            let n = c.K.get(N);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], c.K.set(N, n);
                            }
                        })(n, o))
                        ? v(a, l).catch(
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
                if (null == l) throw new S.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'No access token provided');
                return v(a, l);
            }
        }),
        [f.Etm.AUTHORIZE]: {
            handler(n) {
                let { socket: a, signal: s, args: r } = n,
                    o = r.client_id;
                if (!o) throw new S.Z({ errorCode: f.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != a.authorization.accessToken) throw new S.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (a.authorization.authing) throw new S.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authing');
                return (
                    (a.authorization.authing = !0),
                    l.tn
                        .get({
                            url: f.ANM.APPLICATION_RPC(o),
                            oldFormErrors: !0,
                            signal: s
                        })
                        .then(
                            (n) => {
                                let i = n.body;
                                if (a.application.id !== i.id) throw new S.Z({ errorCode: f.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
                                let l = r.scopes || r.scope;
                                return (
                                    delete r.scopes,
                                    A(
                                        {
                                            ...r,
                                            scope: l,
                                            signal: s
                                        },
                                        e,
                                        t
                                    )
                                );
                            },
                            () => {
                                throw new S.Z({ errorCode: f.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(o));
                            }
                        )
                        .then((e) => {
                            if (((a.authorization.authing = !1), null == e)) throw new S.Z({ errorCode: f.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                            let t = i.parse(e.split('?')[1].split('#')[0]);
                            if (null != t.error) {
                                var n;
                                throw new S.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(t.error, ': ').concat(null !== (n = t.error_description) && void 0 !== n ? n : 'unknown error'));
                            }
                            return { code: t.code };
                        })
                        .catch((e) => {
                            throw ((a.authorization.authing = !1), e);
                        })
                );
            }
        }
    };
}
