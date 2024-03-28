"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("664751"),
  s = n("373793"),
  l = n("149765"),
  i = n("544891"),
  r = n("45792"),
  o = n("433517"),
  u = n("570140"),
  d = n("489863"),
  c = n("166148"),
  f = n("594174"),
  E = n("700785"),
  h = n("996106"),
  _ = n("186901"),
  C = n("981631");
let m = "CachedTokens";
async function S(e, t, n) {
  let a, {
    client_id: i,
    response_type: r = "code",
    redirect_uri: o,
    code_challenge: u,
    code_challenge_method: _,
    state: m,
    scope: S,
    permissions: I,
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
  let v = [];
  if ("string" == typeof S ? v = S.split(" ").filter(e => e.length > 0) : Array.isArray(S) && (v = S), null == f.default.getCurrentUser()) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    a = await (0, d.fetchAuthorization)({
      clientId: i,
      scopes: v,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: m
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
    return (await (0, d.authorize)({
      authorize: !0,
      clientId: i,
      scopes: v,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: m,
      integrationType: null == N ? s.ApplicationIntegrationType.GUILD_INSTALL : Number(N)
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new h.default({
      errorCode: C.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(a.application, T);
  let O = E.NONE;
  try {
    O = l.deserialize(null != I ? I : 0)
  } catch (e) {}
  return t(i, a, v, O, r, o, u, _, m, p, T, g, A)
}

function I(e, t) {
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
            r = () => S({
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
                let l = null !== (s = o.Storage.get(m)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, o.Storage.set(m, l)
              }(n, l.access_token, l.scope, l.expires_in), I(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let n = o.Storage.get(m);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], o.Storage.set(m, n)
            }
          }(n, i)) ? I(s, l).catch(() => (! function(e) {
            var t;
            let n = null !== (t = o.Storage.get(m)) && void 0 !== t ? t : {};
            delete n[e], o.Storage.set(m, n)
          }(n), r())) : r()
        }
        if (null == l) throw new h.default({
          errorCode: C.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return I(s, l)
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
          return delete l.scopes, S({
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