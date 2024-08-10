n.d(t, {
  Iq: function() {
return c;
  },
  UR: function() {
return _;
  },
  Ww: function() {
return d;
  },
  c$: function() {
return E;
  },
  g: function() {
return u;
  },
  i2: function() {
return p;
  },
  tR: function() {
return h;
  },
  tV: function() {
return f;
  }
});
var r = n(860911),
  i = n(544891),
  a = n(893776),
  s = n(592125),
  o = n(944486),
  l = n(981631);

function u(e) {
  return i.tn.post({
url: l.ANM.OAUTH2_WHITELIST_ACCEPT,
query: {
  token: e
},
oldFormErrors: !0
  });
}
async function c(e) {
  let {
authorize: t,
clientId: n,
scopes: r,
responseType: a,
redirectUri: u,
codeChallenge: c,
codeChallengeMethod: d,
state: _,
permissions: E,
guildId: f,
channelId: h,
integrationType: p,
nonce: m
  } = e;
  return (await i.tn.post({
url: l.ANM.OAUTH2_AUTHORIZE,
query: {
  client_id: n,
  response_type: a,
  redirect_uri: u,
  code_challenge: c,
  code_challenge_method: d,
  scope: r.join(' '),
  state: _,
  nonce: m
},
body: {
  guild_id: f,
  webhook_channel_id: null != f && null != h ? h : void 0,
  channel_id: null == f && null != h ? h : void 0,
  permissions: E,
  authorize: t,
  integration_type: p,
  location_context: function() {
    var e;
    let t = o.Z.getChannelId(),
      n = s.Z.getChannel(t);
    return {
      guild_id: null == n ? void 0 : n.guild_id,
      channel_id: t,
      channel_type: null !== (e = null == n ? void 0 : n.type) && void 0 !== e ? e : l.d4z.UNKNOWN
    };
  }()
},
oldFormErrors: !0
  })).body;
}
async function d(e) {
  let {
clientId: t,
scopes: n,
responseType: r,
redirectUri: a,
codeChallenge: s,
codeChallengeMethod: o,
state: u,
integrationType: c,
nonce: d
  } = e;
  return (await i.tn.get({
url: l.ANM.OAUTH2_AUTHORIZE,
query: {
  client_id: t,
  response_type: r,
  redirect_uri: a,
  code_challenge: s,
  code_challenge_method: o,
  scope: n.join(' '),
  state: u,
  integration_type: c,
  nonce: d
},
retries: 3,
oldFormErrors: !0
  })).body;
}
async function _(e) {
  let {
body: t
  } = await i.tn.get({
url: l.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
query: {
  guild_id: e
},
oldFormErrors: !0
  });
  return t;
}

function E(e) {
  a.Z.logout((0, r.U)(e.pathname + e.search, !1));
}
async function f(e) {
  return await i.tn.post({
url: l.ANM.OAUTH2_DEVICE_VERIFY,
body: {
  user_code: e
}
  });
}
async function h(e, t) {
  return await i.tn.post({
url: l.ANM.OAUTH2_DEVICE_FINISH,
body: {
  user_code: e,
  result: t
}
  });
}
async function p(e, t, n) {
  return await i.tn.post({
url: l.ANM.OAUTH2_DEVICE_FINISH,
body: {
  user_code: e,
  result: 'two_way_link_error',
  error_code: t,
  error_source: n
}
  });
}