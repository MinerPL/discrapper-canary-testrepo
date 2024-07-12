n.d(t, {
  _: function() {
return i;
  },
  n: function() {
return r;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-05_pride_month_perks_experiment',
label: 'Pride Month Perks Experiment',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Enables new nitro perks related to Pride month',
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