"use strict";
n.d(t, {
  HJ: function() {
    return h
  },
  Zd: function() {
    return _
  },
  yD: function() {
    return E
  }
});
var s = n(213919),
  r = n(544891),
  i = n(570140),
  a = n(893776),
  l = n(710845),
  o = n(314897),
  u = n(726745),
  c = n(981631);
let d = new l.Z("MultiAccountActionCreators");

function h() {
  let e = o.default.getId();
  u.Z.getUsers().forEach(async t => {
    let n, {
        id: a
      } = t,
      l = s.getToken(a);
    if (null == l || "" === l) {
      i.Z.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: a
      });
      return
    }
    i.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: a
    });
    try {
      n = await r.tn.get({
        url: c.ANM.ME,
        headers: {
          authorization: l
        },
        retries: 3
      })
    } catch (t) {
      let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
      i.Z.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: a
      });
      return
    }
    i.Z.dispatch({
      type: e === a ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), i.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: a
    })
  })
}

function E(e, t) {
  d.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = s.getToken(e);
  return null == n ? (d.log("Switching accounts failed because there was no token"), i.Z.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : a.Z.switchAccountToken(n, t)
}

function _(e) {
  i.Z.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}