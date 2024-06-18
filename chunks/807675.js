"use strict";
n.d(t, {
  K: function() {
    return _
  },
  y: function() {
    return d
  }
}), n(653041);
var i = n(593473),
  r = n(243814),
  s = n(149765),
  o = n(592125),
  a = n(914010),
  l = n(700785),
  u = n(713938);

function _(e) {
  let t = e.filter(e => !u.up.includes(e));
  return t.includes(r.x.BOT) && !t.includes(r.x.APPLICATIONS_COMMANDS) && t.push(r.x.APPLICATIONS_COMMANDS), t
}

function d(e) {
  var t, n, r, u, _, d;
  let c = (0, i.parse)(e, {
      arrayFormat: "bracket"
    }),
    E = l.Hn;
  try {
    E = s.vB(null != c.permissions && "" !== c.permissions ? c.permissions : "0")
  } catch (e) {}
  let I = c.channel_id,
    T = null !== (u = null !== (r = null !== (n = c.guild_id) && void 0 !== n ? n : null === (t = o.Z.getChannel(I)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : a.Z.getGuildId()) && void 0 !== u ? u : void 0;
  return {
    clientId: null !== (_ = c.client_id) && void 0 !== _ ? _ : "",
    scopes: (null !== (d = c.scope) && void 0 !== d ? d : "").split(" ").filter(e => e.length > 0),
    responseType: c.response_type,
    redirectUri: c.redirect_uri,
    codeChallenge: c.code_challenge,
    codeChallengeMethod: c.code_challenge_method,
    state: c.state,
    permissions: E,
    channelId: I,
    guildId: T,
    prompt: c.prompt,
    disableGuildSelect: "true" === c.disable_guild_select,
    integrationType: null == c.integration_type ? void 0 : Number(c.integration_type),
    nonce: c.nonce
  }
}