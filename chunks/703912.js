n.d(t, {
    Z: function () {
        return Z;
    }
}), n(789020), n(47120);
var i = n(664751), s = n(373793), a = n(243814), r = n(149765), l = n(544891), o = n(45792), c = n(433517), d = n(570140), u = n(979200), _ = n(489863), E = n(166148), h = n(307643), I = n(973616), m = n(594174), p = n(630388), g = n(700785), T = n(996106), S = n(186901), C = n(981631);
let N = 'CachedTokens';
async function f(e, t, n) {
    var i;
    let a;
    let l, o, c, d, {
            client_id: S,
            response_type: N = 'code',
            redirect_uri: f,
            code_challenge: A,
            code_challenge_method: Z,
            state: L,
            nonce: v,
            scope: O,
            permissions: R,
            guild_id: x,
            channel_id: P,
            prompt: b,
            disable_guild_select: M,
            integration_type: D
        } = e;
    if (null == S)
        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'No Client ID provided');
    if (null != f)
        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow');
    let y = [];
    if ('string' == typeof O ? y = O.split(' ').filter(e => e.length > 0) : Array.isArray(O) && (y = O), null == m.default.getCurrentUser())
        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'Client is not logged in');
    let j = I.Z.createFromServer(await (0, h.UM)(S)), U = null != j && (0, p.yE)(j.flags, C.udG.EMBEDDED) && (null === (i = j.integrationTypesConfig) || void 0 === i ? void 0 : i[s.Y.USER_INSTALL]) != null;
    l = null == D ? U ? s.Y.USER_INSTALL : s.Y.GUILD_INSTALL : Number(D);
    try {
        o = await (0, _.Ww)({
            clientId: S,
            scopes: y,
            responseType: N,
            redirectUri: f,
            codeChallenge: A,
            codeChallengeMethod: Z,
            state: L,
            integrationType: l
        });
    } catch (t) {
        let {body: e} = t;
        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat(e.message || 'Unknown Error'));
    }
    try {
        ({
            disclosures: c,
            allAcked: d
        } = await (0, u.de)(o.application.id));
    } catch (t) {
        let {body: e} = t;
        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'OAuth2 Authorization Error: '.concat(e.message || 'Unknown Error'));
    }
    if (b === E.s.NONE && null != o && o.authorized && d)
        try {
            return (await (0, _.Iq)({
                authorize: !0,
                clientId: S,
                scopes: y,
                responseType: N,
                redirectUri: f,
                codeChallenge: A,
                codeChallengeMethod: Z,
                state: L,
                nonce: v,
                integrationType: l
            })).location;
        } catch (t) {
            let {body: e} = t;
            throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat(e.message || 'Unknown Error'));
        }
    null == n || n(o.application, P);
    let G = g.Hn;
    try {
        G = r.vB(null != R ? R : 0);
    } catch (e) {
    }
    return null != o.integration_type && Object.values(s.Y).includes(o.integration_type) && (a = new Map()).set(o.integration_type, o), t({
        clientId: S,
        authorizations: a,
        scopes: y,
        parsedPermissions: G,
        responseType: N,
        redirectUri: f,
        codeChallenge: A,
        codeChallengeMethod: Z,
        state: L,
        guildId: x,
        channelId: P,
        prompt: b,
        disableGuildSelect: M,
        disclosures: c,
        integrationType: l
    });
}
function A(e, t) {
    if (e.authorization.accessToken)
        throw new T.Z({ errorCode: C.lTL.INVALID_COMMAND }, 'Already authenticated');
    if (e.authorization.authing)
        throw new T.Z({ errorCode: C.lTL.INVALID_COMMAND }, 'Already authenticating');
    return e.authorization.authing = !0, l.tn.get({
        url: C.ANM.OAUTH2_CURRENT_AUTH,
        headers: { Authorization: 'Bearer '.concat(t) },
        oldFormErrors: !0
    }).then(n => {
        e.authorization.authing = !1;
        let {
            application: i,
            user: s,
            scopes: a,
            expires: r
        } = n.body;
        if (e.application.id !== i.id)
            throw new T.Z({ errorCode: C.lTL.INVALID_CLIENTID }, 'Application does not match the connection\'s');
        let l = m.default.getCurrentUser();
        if (null == l || !s || l.id !== s.id)
            throw new T.Z({ errorCode: C.lTL.INVALID_TOKEN }, 'Token does not match current user');
        return e.authorization.scopes = [
            ...e.authorization.scopes,
            ...a,
            S.wE
        ], e.authorization.accessToken = t, e.authorization.expires = new Date(r), d.Z.dispatch({
            type: 'RPC_APP_AUTHENTICATED',
            socketId: e.id,
            application: e.application
        }), {
            ...n.body,
            access_token: t
        };
    }, () => {
        throw new T.Z({ errorCode: C.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
    }).catch(t => {
        throw e.authorization.authing = !1, t;
    });
}
function Z(e, t) {
    return {
        [C.Etm.AUTHENTICATE]: (0, o.S)(C.Etm.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: s,
                    args: {access_token: r}
                } = n;
                if (null == r && s.transport === S.He.IPC) {
                    let n = s.application.id;
                    if (null == n)
                        throw new T.Z({ errorCode: C.lTL.INVALID_COMMAND }, 'No application.');
                    let l = a.x.IDENTIFY, o = () => f({
                            client_id: n,
                            scope: l,
                            response_type: 'token'
                        }, e, t).then(e => {
                            if (null == e)
                                throw new T.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                            let t = e.split(/#|\?/), a = i.parse(t[t.length - 1]);
                            if (null != a.error) {
                                var r;
                                throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(a.error, ': ').concat(null !== (r = a.error_description) && void 0 !== r ? r : 'unknown error'));
                            }
                            return !function (e, t, n, i) {
                                var s;
                                let a = null !== (s = c.K.get(N)) && void 0 !== s ? s : {};
                                a[e] = {
                                    accessToken: t,
                                    scope: n,
                                    expires: Date.now() + i
                                }, c.K.set(N, a);
                            }(n, a.access_token, a.scope, a.expires_in), A(s, a.access_token);
                        });
                    return null != (r = function (e, t) {
                        let n = c.K.get(N);
                        if (null != n && null != n[e]) {
                            let i = n[e];
                            if (!(i.scope !== t || i.expires <= Date.now()))
                                return i.accessToken;
                            delete n[e], c.K.set(N, n);
                        }
                    }(n, l)) ? A(s, r).catch(() => (!function (e) {
                        var t;
                        let n = null !== (t = c.K.get(N)) && void 0 !== t ? t : {};
                        delete n[e], c.K.set(N, n);
                    }(n), o())) : o();
                }
                if (null == r)
                    throw new T.Z({ errorCode: C.lTL.INVALID_TOKEN }, 'No access token provided');
                return A(s, r);
            }
        }),
        [C.Etm.AUTHORIZE]: {
            handler(n) {
                let {
                        socket: s,
                        args: a
                    } = n, r = a.client_id;
                if (!r)
                    throw new T.Z({ errorCode: C.lTL.INVALID_CLIENTID }, 'No client id provided');
                if (null != s.authorization.accessToken)
                    throw new T.Z({ errorCode: C.lTL.INVALID_COMMAND }, 'Already authenticated');
                if (s.authorization.authing)
                    throw new T.Z({ errorCode: C.lTL.INVALID_COMMAND }, 'Already authing');
                return s.authorization.authing = !0, l.tn.get({
                    url: C.ANM.APPLICATION_RPC(r),
                    oldFormErrors: !0
                }).then(n => {
                    let i = n.body;
                    if (s.application.id !== i.id)
                        throw new T.Z({ errorCode: C.lTL.INVALID_CLIENTID }, 'Application does not match the connection\'s');
                    let r = a.scopes || a.scope;
                    return delete a.scopes, f({
                        ...a,
                        scope: r
                    }, e, t);
                }, () => {
                    throw new T.Z({ errorCode: C.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(r));
                }).then(e => {
                    if (s.authorization.authing = !1, null == e)
                        throw new T.Z({ errorCode: C.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
                    let t = i.parse(e.split('?')[1].split('#')[0]);
                    if (null != t.error) {
                        var n;
                        throw new T.Z({ errorCode: C.lTL.OAUTH2_ERROR }, 'OAuth2 Error: '.concat(t.error, ': ').concat(null !== (n = t.error_description) && void 0 !== n ? n : 'unknown error'));
                    }
                    return { code: t.code };
                }).catch(e => {
                    throw s.authorization.authing = !1, e;
                });
            }
        }
    };
}
