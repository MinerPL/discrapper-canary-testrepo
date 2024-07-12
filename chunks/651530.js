n.d(t, {
  Kh: function() {
return o;
  },
  yh: function() {
return s;
  }
});
var r = n(818083);
let i = (0, r.B)({
kind: 'user',
id: '2023-08_explicit_media_redaction',
label: 'Explicit Media Redaction',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enable explicit media redaction',
  config: {
    enabled: !0
  }
}]
  }),
  a = (0, r.B)({
kind: 'user',
id: '2023-08_explicit_media_redaction_teen',
label: 'Explicit Media Redaction for Teens',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enable explicit media redaction for teens',
  config: {
    enabled: !0
  }
}]
  });

function o() {
  let {
enabled: e
  } = i.getCurrentConfig({
location: '686da2_1'
  }, {
autoTrackExposure: !0
  }), {
enabled: t
  } = a.getCurrentConfig({
location: '686da2_1'
  }, {
autoTrackExposure: !0
  });
  return e || t;
}

function s() {
  let {
enabled: e
  } = i.useExperiment({
location: '686da2_2'
  }, {
autoTrackExposure: !0
  }), {
enabled: t
  } = a.useExperiment({
location: '686da2_2'
  }, {
autoTrackExposure: !0
  });
  return e || t;
}