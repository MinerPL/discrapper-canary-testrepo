"use strict";
n.d(t, {
  Iq: function() {
    return l
  },
  UR: function() {
    return _
  },
  Ww: function() {
    return u
  },
  c$: function() {
    return d
  },
  g: function() {
    return a
  },
  i2: function() {
    return I
  },
  tR: function() {
    return E
  },
  tV: function() {
    return c
  }
});
var i = n(860911),
  r = n(544891),
  s = n(893776),
  o = n(981631);

function a(e) {
  return r.tn.post({
    url: o.ANM.OAUTH2_WHITELIST_ACCEPT,
    query: {
      token: e
    },
    oldFormErrors: !0
  })
}
async function l(e) {
  let {
    authorize: t,
    clientId: n,
    scopes: i,
    responseType: s,
    redirectUri: a,
    codeChallenge: l,
    codeChallengeMethod: u,
    state: _,
    permissions: d,
    guildId: c,
    channelId: E,
    integrationType: I,
    nonce: T
  } = e;
  return (await r.tn.post({
    url: o.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: n,
      response_type: s,
      redirect_uri: a,
      code_challenge: l,
      code_challenge_method: u,
      scope: i.join(" "),
      state: _,
      nonce: T
    },
    body: {
      guild_id: c,
      webhook_channel_id: null != c && null != E ? E : void 0,
      channel_id: null == c && null != E ? E : void 0,
      permissions: d,
      authorize: t,
      integration_type: I
    },
    oldFormErrors: !0
  })).body
}
async function u(e) {
  let {
    clientId: t,
    scopes: n,
    responseType: i,
    redirectUri: s,
    codeChallenge: a,
    codeChallengeMethod: l,
    state: u,
    integrationType: _,
    nonce: d
  } = e;
  return (await r.tn.get({
    url: o.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: t,
      response_type: i,
      redirect_uri: s,
      code_challenge: a,
      code_challenge_method: l,
      scope: n.join(" "),
      state: u,
      integration_type: _,
      nonce: d
    },
    retries: 3,
    oldFormErrors: !0
  })).body
}
async function _(e) {
  let {
    body: t
  } = await r.tn.get({
    url: o.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
    query: {
      guild_id: e
    },
    oldFormErrors: !0
  });
  return t
}

function d(e) {
  s.Z.logout((0, i.U)(e.pathname + e.search, !1))
}
async function c(e) {
  return await r.tn.post({
    url: o.ANM.OAUTH2_DEVICE_VERIFY,
    body: {
      user_code: e
    }
  })
}
async function E(e, t) {
  return await r.tn.post({
    url: o.ANM.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: t
    }
  })
}
async function I(e, t, n) {
  return await r.tn.post({
    url: o.ANM.OAUTH2_DEVICE_FINISH,
    body: {
      user_code: e,
      result: "two_way_link_error",
      error_code: t,
      error_source: n
    }
  })
}