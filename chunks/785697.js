t.d(s, {
  D2: function() {
return r;
  },
  SE: function() {
return c;
  }
});
var a = t(442837),
  l = t(818083),
  i = t(496675),
  n = t(981631);
let o = (0, l.B)({
  kind: 'guild',
  id: '2022-11_default_disable_mass_mention',
  label: 'Disable mass mentions for communities by default',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enabled',
config: {
  enabled: !0
}
  }]
});

function r(e) {
  return o.useExperiment({
guildId: e,
location: 'dd4beb_1'
  }, {
autoTrackExposure: !0
  });
}

function c(e) {
  var s;
  let t = (0, a.e7)([i.Z], () => i.Z.can(n.Plq.MANAGE_GUILD, e)),
{
  enabled: l
} = o.useExperiment({
  guildId: null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : n.lds,
  location: 'dd4beb_3'
}, {
  autoTrackExposure: !0
});
  if (null == e)
return !1;
  let r = e.hasFeature(n.oNc.COMMUNITY);
  return t && r && l;
}