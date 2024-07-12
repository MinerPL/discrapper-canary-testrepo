n.d(t, {
  c: function() {
return a;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-05_collectibles_hover_preview',
label: 'Collectibles Hover Preview Experiment',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Collectibles card with avatar deco hover preview',
  config: {
    enabled: !0
  }
}]
  }),
  a = e => r.useExperiment({
location: e
  }).enabled;