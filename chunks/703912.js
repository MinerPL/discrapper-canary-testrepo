"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("789020"), n("47120");
var a = n("664751"),
  s = n("373793"),
  l = n("243814"),
  i = n("149765"),
  r = n("544891"),
  o = n("45792"),
  u = n("433517"),
  d = n("570140"),
  c = n("812206"),
  f = n("979200"),
  E = n("489863"),
  h = n("166148"),
  _ = n("307643"),
  C = n("973616"),
  m = n("594174"),
  S = n("630388"),
  p = n("700785"),
  g = n("996106"),
  I = n("186901"),
  T = n("981631");
let A = "CachedTokens";
async function N(e, t, n) {
  var a, l;
  let r;
  let o, u, d, I, {
    client_id: A,
    response_type: N = "code",
    redirect_uri: v,
    code_challenge: R,
    code_challenge_method: O,
    state: L,
    nonce: M,
    scope: y,
    permissions: P,
    guild_id: x,
    channel_id: D,
    prompt: b,
    disable_guild_select: U,
    integration_type: j
  } = e;
  if (null == A) throw new g.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != v) throw new g.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let G = [];
  if ("string" == typeof y ? G = y.split(" ").filter(e => e.length > 0) : Array.isArray(y) && (G = y), null == m.default.getCurrentUser()) throw new g.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  let k = null !== (l = c.default.getApplication(A)) && void 0 !== l ? l : C.default.createFromServer(await (0, _.fetchApplication)(A)),
    w = null != k && (0, S.hasFlag)(k.flags, T.ApplicationFlags.EMBEDDED) && (null === (a = k.integrationTypesConfig) || void 0 === a ? void 0 : a[s.ApplicationIntegrationType.USER_INSTALL]) != null;
  o = null == j ? w ? s.ApplicationIntegrationType.USER_INSTALL : s.ApplicationIntegrationType.GUILD_INSTALL : Number(j);
  try {
    u = await (0, E.fetchAuthorization)({
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: R,
      codeChallengeMethod: O,
      state: L,
      integrationType: o
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new g.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: d,
      allAcked: I
    } = await (0, f.getDisclosures)(u.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new g.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (b === h.OAuth2Prompts.NONE && null != u && u.authorized && I) try {
    return (await (0, E.authorize)({
      authorize: !0,
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: R,
      codeChallengeMethod: O,
      state: L,
      nonce: M,
      integrationType: o
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new g.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(u.application, D);
  let B = p.NONE;
  try {
    B = i.deserialize(null != P ? P : 0)
  } catch (e) {}
  return null != u.integration_type && Object.values(s.ApplicationIntegrationType).includes(u.integration_type) && (r = new Map).set(u.integration_type, u), t({
    clientId: A,
    authorizations: r,
    scopes: G,
    parsedPermissions: B,
    responseType: N,
    redirectUri: v,
    codeChallenge: R,
    codeChallengeMethod: O,
    state: L,
    guildId: x,
    channelId: D,
    prompt: b,
    disableGuildSelect: U,
    disclosures: d,
    integrationType: o
  })
}

function v(e, t) {
  if (e.authorization.accessToken) throw new g.default({
    errorCode: T.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new g.default({
    errorCode: T.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, r.HTTP.get({
    url: T.Endpoints.OAUTH2_CURRENT_AUTH,
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
    if (e.application.id !== a.id) throw new g.default({
      errorCode: T.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = m.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new g.default({
      errorCode: T.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, I.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), d.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new g.default({
      errorCode: T.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function R(e, t) {
  return {
    [T.RPCCommands.AUTHENTICATE]: (0, o.createRPCCommand)(T.RPCCommands.AUTHENTICATE, {
      handler(n) {
        let {
          socket: s,
          args: {
            access_token: i
          }
        } = n;
        if (null == i && s.transport === I.TransportTypes.IPC) {
          let n = s.application.id;
          if (null == n) throw new g.default({
            errorCode: T.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let r = l.OAuth2Scopes.IDENTIFY,
            o = () => N({
              client_id: n,
              scope: r,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new g.default({
                errorCode: T.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = a.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new g.default({
                  errorCode: T.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, n, a) {
                var s;
                let l = null !== (s = u.Storage.get(A)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, u.Storage.set(A, l)
              }(n, l.access_token, l.scope, l.expires_in), v(s, l.access_token)
            });
          return null != (i = function(e, t) {
            let n = u.Storage.get(A);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], u.Storage.set(A, n)
            }
          }(n, r)) ? v(s, i).catch(() => (! function(e) {
            var t;
            let n = null !== (t = u.Storage.get(A)) && void 0 !== t ? t : {};
            delete n[e], u.Storage.set(A, n)
          }(n), o())) : o()
        }
        if (null == i) throw new g.default({
          errorCode: T.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return v(s, i)
      }
    }),
    [T.RPCCommands.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: l
        } = n, i = l.client_id;
        if (!i) throw new g.default({
          errorCode: T.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new g.default({
          errorCode: T.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new g.default({
          errorCode: T.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, r.HTTP.get({
          url: T.Endpoints.APPLICATION_RPC(i),
          oldFormErrors: !0
        }).then(n => {
          let a = n.body;
          if (s.application.id !== a.id) throw new g.default({
            errorCode: T.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, N({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new g.default({
            errorCode: T.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(i))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new g.default({
            errorCode: T.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = a.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new g.default({
              errorCode: T.RPCErrors.OAUTH2_ERROR
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