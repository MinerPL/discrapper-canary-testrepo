n.d(t, {
  K: function() {
return c;
  },
  y: function() {
return d;
  }
}), n(653041);
var r = n(593473),
  i = n(243814),
  a = n(149765),
  o = n(592125),
  s = n(914010),
  l = n(700785),
  u = n(713938);

function c(e) {
  let t = e.filter(e => !u.up.includes(e));
  return t.includes(i.x.BOT) && !t.includes(i.x.APPLICATIONS_COMMANDS) && t.push(i.x.APPLICATIONS_COMMANDS), t;
}

function d(e) {
  var t, n, i, u, c, d;
  let _ = (0, r.parse)(e, {
  arrayFormat: 'bracket'
}),
E = l.Hn;
  try {
E = a.vB(null != _.permissions && '' !== _.permissions ? _.permissions : '0');
  } catch (e) {}
  let f = _.channel_id,
h = null !== (u = null !== (i = null !== (n = _.guild_id) && void 0 !== n ? n : null === (t = o.Z.getChannel(f)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== i ? i : s.Z.getGuildId()) && void 0 !== u ? u : void 0;
  return {
clientId: null !== (c = _.client_id) && void 0 !== c ? c : '',
scopes: (null !== (d = _.scope) && void 0 !== d ? d : '').split(' ').filter(e => e.length > 0),
responseType: _.response_type,
redirectUri: _.redirect_uri,
codeChallenge: _.code_challenge,
codeChallengeMethod: _.code_challenge_method,
state: _.state,
permissions: E,
channelId: f,
guildId: h,
prompt: _.prompt,
disableGuildSelect: 'true' === _.disable_guild_select,
integrationType: null == _.integration_type ? void 0 : Number(_.integration_type),
nonce: _.nonce
  };
}