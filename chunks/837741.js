n.d(t, {
  F: function() {
return r;
  },
  J: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-05_brand_refresh_perks_experiment',
label: 'Brand Refresh Perks Experiment',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enables new nitro perks related to brand refresh',
  config: {
    enabled: !0
  }
}]
  }),
  i = e => {
let {
  location: t
} = e;
return r.useExperiment({
  location: t
});
  };