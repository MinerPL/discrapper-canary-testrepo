n.d(t, {
  G7: function() {
return l;
  },
  LG: function() {
return d;
  },
  Pg: function() {
return r;
  },
  ZI: function() {
return a;
  },
  _0: function() {
return o;
  }
});
var s, a, i = n(689938);
let r = 5,
  l = 10,
  o = 30;
(s = a || (a = {}))[s.DISPLAY = 0] = 'DISPLAY', s[s.PERMISSIONS = 1] = 'PERMISSIONS', s[s.MEMBERS = 2] = 'MEMBERS', s[s.VERIFICATIONS = 3] = 'VERIFICATIONS';
let c = {
  afk_channel_id: () => i.Z.Messages.FORM_LABEL_AFK_CHANNEL,
  public_updates_channel_id: () => i.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE,
  safety_alerts_channel_id: () => i.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE,
  system_channel_id: () => i.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL
};

function d(e) {
  var t;
  if (0 === Object.keys(e).length)
return null;
  let n = Object.keys(e)[0],
s = null === (t = c[n]) || void 0 === t ? void 0 : t.call(c);
  return null != s ? '('.concat(s, ') ').concat(e[n]) : e[n];
}