"use strict";
n.d(t, {
  L$: function() {
    return d
  },
  Sr: function() {
    return c
  },
  WQ: function() {
    return _
  },
  cT: function() {
    return u
  },
  d$: function() {
    return a
  },
  hL: function() {
    return l
  },
  us: function() {
    return o
  }
});
var i = n(544891),
  r = n(570140),
  s = n(981631);
async function o() {
  return (await i.tn.post(s.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
}
async function a() {
  let {
    challenge: e,
    ticket: t
  } = (await i.tn.post(s.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body;
  return {
    challenge: e,
    ticket: t
  }
}

function l() {
  r.Z.dispatch({
    type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
  }), i.tn.get(s.ANM.MFA_WEBAUTHN_CREDENTIALS).then(e => {
    r.Z.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function u(e) {
  i.tn.del(s.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
    r.Z.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function _(e, t) {
  let n = await i.tn.patch({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    }
  });
  r.Z.dispatch({
    type: "AUTHENTICATOR_UPDATE",
    credential: n.body
  })
}
async function d() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await i.tn.post({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
    body: {}
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function c(e, t, n) {
  let o = await i.tn.post({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: n
    }
  });
  r.Z.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: o.body
  }), r.Z.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: o.body.backup_codes
  })
}