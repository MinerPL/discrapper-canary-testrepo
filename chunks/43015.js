s.d(t, {
    $Z: function () {
        return o;
    },
    L$: function () {
        return l;
    },
    fw: function () {
        return r;
    }
});
var n = s(544891), a = s(570140), i = s(981631);
async function r() {
    var e;
    let t = await n.tn.get({ url: i.ANM.AUTH_SESSIONS });
    return (null == t ? void 0 : t.ok) && (null === (e = t.body) || void 0 === e ? void 0 : e.user_sessions) != null && a.Z.dispatch({
        type: 'FETCH_AUTH_SESSIONS_SUCCESS',
        sessions: t.body.user_sessions
    }), t;
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
    let t = await n.tn.post({
        url: i.ANM.AUTH_SESSIONS_LOGOUT,
        body: { session_id_hashes: e }
    });
    return (null == t ? void 0 : t.ok) && a.Z.dispatch({
        type: 'LOGOUT_AUTH_SESSIONS_SUCCESS',
        sessionIdHashes: e
    }), t;
}
