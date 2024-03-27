"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("522632"),
  s = n("891189"),
  l = n("316693"),
  i = n("872717"),
  r = n("524297"),
  o = n("95410"),
  u = n("913144"),
  d = n("8222"),
  c = n("357974"),
  f = n("697218"),
  E = n("991170"),
  h = n("861309"),
  _ = n("492249"),
  C = n("49111");
let S = "CachedTokens";
async function I(e, t, n) {
  let a, {
    client_id: i,
    response_type: r = "code",
    redirect_uri: o,
    code_challenge: u,
    code_challenge_method: _,
    state: S,
    scope: I,
    permissions: m,
    guild_id: p,
    channel_id: T,
    prompt: g,
    disable_guild_select: A,
    integration_type: N
  } = e;
  if (null == i) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != o) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let R = [];
  "string" == typeof I ? R = I.split(" ").filter(e => e.length > 0) : Array.isArray(I) && (R = I);
  let O = f.default.getCurrentUser();
  if (null == O) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    a = await (0, d.fetchAuthorization)({
      clientId: i,
      scopes: R,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: S
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new h.default({
      errorCode: C.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (g === c.OAuth2Prompts.NONE && null != a && a.authorized) try {
    let e = await (0, d.authorize)({
      authorize: !0,
      clientId: i,
      scopes: R,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: S,
      integrationType: null == N ? s.ApplicationIntegrationType.GUILD_INSTALL : Number(N)
    });
    return e.location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new h.default({
      errorCode: C.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(a.application, T);
  let v = E.NONE;
  try {
    v = l.deserialize(null != m ? m : 0)
  } catch (e) {}
  return t(i, a, R, v, r, o, u, _, S, p, T, g, A)
}

function m(e, t) {
  if (e.authorization.accessToken) throw new h.default({
    errorCode: C.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new h.default({
    errorCode: C.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: C.Endpoints.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: !0
  }).then(n => {
    e.authorization.authing = !1;
    let {
      application: a,
      user: s,
      scopes: l,
      expires: i
    } = n.body;
    if (e.application.id !== a.id) throw new h.default({
      errorCode: C.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = f.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new h.default({
      errorCode: C.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, _.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new h.default({
      errorCode: C.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function p(e, t) {
  return {
    [C.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(C.RPCCommands.AUTHENTICATE, {
      handler(n) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = n;
        if (null == l && s.transport === _.TransportTypes.IPC) {
          let n = s.application.id;
          if (null == n) throw new h.default({
            errorCode: C.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = C.OAuth2Scopes.IDENTIFY,
            r = () => I({
              client_id: n,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new h.default({
                errorCode: C.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = a.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new h.default({
                  errorCode: C.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, n, a) {
                var s;
                let l = null !== (s = o.Storage.get(S)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, o.Storage.set(S, l)
              }(n, l.access_token, l.scope, l.expires_in), m(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let n = o.Storage.get(S);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], o.Storage.set(S, n)
            }
          }(n, i)) ? m(s, l).catch(() => (! function(e) {
            var t;
            let n = null !== (t = o.Storage.get(S)) && void 0 !== t ? t : {};
            delete n[e], o.Storage.set(S, n)
          }(n), r())) : r()
        }
        if (null == l) throw new h.default({
          errorCode: C.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return m(s, l)
      }
    }),
    [C.RPCCommands.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: l
        } = n, r = l.client_id;
        if (!r) throw new h.default({
          errorCode: C.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new h.default({
          errorCode: C.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new h.default({
          errorCode: C.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: C.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(n => {
          let a = n.body;
          if (s.application.id !== a.id) throw new h.default({
            errorCode: C.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, I({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new h.default({
            errorCode: C.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new h.default({
            errorCode: C.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = a.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new h.default({
              errorCode: C.RPCErrors.OAUTH2_ERROR
            }, "OAuth2 Error: ".concat(t.error, ": ").concat(null !== (n = t.error_description) && void 0 !== n ? n : "unknown error"))
          }
          return {
            code: t.code
          }
        }).catch(e => {
          throw s.authorization.authing = !1, e
        })
      }
    }
  }
}