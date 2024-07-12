t.d(n, {
  Fv: function() {
return r;
  },
  eA: function() {
return d;
  }
});
var a = t(470079),
  l = t(818083),
  i = t(594174),
  s = t(981631);
let o = (0, l.B)({
  kind: 'guild',
  id: '2022-03_guild_access_rate_insight_experiment',
  label: 'Guild Access Rate Insight Experiment',
  defaultConfig: {
showAccessRate: !1
  },
  treatments: [{
id: 1,
label: 'Show guild access rate in insights',
config: {
  showAccessRate: !0
}
  }]
});

function r(e) {
  var n;
  return (null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) && o.getCurrentConfig({
guildId: e,
location: '77b4b2_1'
  }).showAccessRate;
}

function d(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return a.useEffect(() => {
!n && null != e && o.trackExposure({
  guildId: e,
  location: '77b4b2_2'
});
  }, [
e,
n
  ]), o.useExperiment({
guildId: null != e ? e : s.lds,
location: '77b4b2_3'
  }, {
autoTrackExposure: !1,
disable: n || null == e
  });
}