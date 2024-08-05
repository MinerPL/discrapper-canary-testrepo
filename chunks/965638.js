n.d(t, {
  AG: function() {
return _;
  },
  FR: function() {
return d;
  },
  Ij: function() {
return E;
  },
  MQ: function() {
return c;
  },
  WC: function() {
return u;
  }
}), n(47120);
var r = n(442837),
  i = n(818083),
  a = n(487419),
  s = n(496675),
  o = n(434404),
  l = n(981631);
let u = (0, i.B)({
  kind: 'guild',
  id: '2022-07_invites_disabled',
  label: 'Report Raids',
  defaultConfig: {
enableInvitesDisabled: !1
  },
  treatments: [{
id: 1,
label: 'Enable Reporting Of Raids',
config: {
  enableInvitesDisabled: !0
}
  }]
});

function c(e) {
  return (0, r.e7)([s.Z], () => null != e && s.Z.can(l.Plq.MANAGE_GUILD, e), [e]);
}

function d(e) {
  return u.useExperiment({
guildId: e.id,
location: '108f83_1'
  }, {
autoTrackExposure: !1
  });
}
async function _(e, t) {
  if (e.hasFeature(l.oNc.INVITES_DISABLED) === t)
return;
  let n = new Set(e.features);
  t ? n.add(l.oNc.INVITES_DISABLED) : n.delete(l.oNc.INVITES_DISABLED), await o.Z.saveGuild(e.id, {
features: n
  }, {
throwErr: !0
  });
}

function E(e) {
  var t;
  let n = c(e),
i = (0, r.e7)([a.Z], () => null != e ? a.Z.getGuildIncident(e.id) : null),
s = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, l.oNc.INVITES_DISABLED)) || (null == i ? void 0 : i.invitesDisabledUntil) != null && new Date(i.invitesDisabledUntil) > new Date();
  return n && s;
}