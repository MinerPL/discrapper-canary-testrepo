t.d(s, {
  $Z: function() {
return o;
  },
  L$: function() {
return l;
  },
  fw: function() {
return r;
  }
});
var n = t(544891),
  a = t(570140),
  i = t(981631);
async function r() {
  var e;
  let s = await n.tn.get({
url: i.ANM.AUTH_SESSIONS
  });
  return (null == s ? void 0 : s.ok) && (null === (e = s.body) || void 0 === e ? void 0 : e.user_sessions) != null && a.Z.dispatch({
type: 'FETCH_AUTH_SESSIONS_SUCCESS',
sessions: s.body.user_sessions
  }), s;
}

function o() {
  a.Z.dispatch({
type: 'FETCH_AUTH_SESSIONS_SUCCESS',
sessions: []
  });
}
async function l(e) {
  if (Array.isArray(e)) {
if (0 === e.length)
  return;
  } else
e = [e];
  let s = await n.tn.post({
url: i.ANM.AUTH_SESSIONS_LOGOUT,
body: {
  session_id_hashes: e
}
  });
  return (null == s ? void 0 : s.ok) && a.Z.dispatch({
type: 'LOGOUT_AUTH_SESSIONS_SUCCESS',
sessionIdHashes: e
  }), s;
}