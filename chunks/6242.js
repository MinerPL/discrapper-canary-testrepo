n.d(t, {
  TD: function() {
return c;
  },
  lL: function() {
return u;
  }
});
var i = n(818083),
  a = n(594174),
  s = n(74538),
  l = n(474936);
let r = (0, i.B)({
  kind: 'user',
  id: '2024-08_hd_streaming_viewer',
  label: 'HD Streaming Viewer Upsell',
  defaultConfig: {
enabled: !1,
sendNitroMessage: !1
  },
  treatments: [{
id: 1,
label: 'Enabled',
config: {
  enabled: !0,
  sendNitroMessage: !0
}
  }]
});

function o(e, t) {
  return (0, s.I5)(e, l.p9.TIER_2) || t;
}

function c(e) {
  let t = a.default.getCurrentUser();
  return r.getCurrentConfig({
location: 'get_hd_streaming_viewer_config'
  }, {
autoTrackExposure: !1,
disable: o(t, e)
  });
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = arguments.length > 2 ? arguments[2] : void 0,
i = arguments.length > 3 ? arguments[3] : void 0;
  return r.useExperiment({
location: e
  }, {
autoTrackExposure: t,
disable: o(n, i)
  });
}