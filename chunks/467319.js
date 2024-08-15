n.d(t, {
  H: function() {
return a;
  },
  a: function() {
return i;
  }
});
var r = n(460083);

function a(e) {
  let {
enabled: t
  } = r.d.getCurrentConfig({
guildId: e,
location: '988d4e_3'
  });
  return t;
}

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
{
  enabled: n
} = r.d.useExperiment({
  guildId: e,
  location: '988d4e_4'
}, {
  autoTrackExposure: t
});
  return n;
}