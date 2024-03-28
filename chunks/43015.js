"use strict";
s.r(t), s.d(t, {
  clearAuthSessions: function() {
    return r
  },
  fetchAuthSessions: function() {
    return i
  },
  logOutSessions: function() {
    return o
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("981631");
async function i() {
  var e;
  let t = await a.HTTP.get({
    url: l.Endpoints.AUTH_SESSIONS
  });
  return (null == t ? void 0 : t.ok) && (null === (e = t.body) || void 0 === e ? void 0 : e.user_sessions) != null && n.default.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: t.body.user_sessions
  }), t
}

function r() {
  n.default.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: []
  })
}
async function o(e) {
  if (Array.isArray(e)) {
    if (0 === e.length) return
  } else e = [e];
  let t = await a.HTTP.post({
    url: l.Endpoints.AUTH_SESSIONS_LOGOUT,
    body: {
      session_id_hashes: e
    }
  });
  return (null == t ? void 0 : t.ok) && n.default.dispatch({
    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
    sessionIdHashes: e
  }), t
}