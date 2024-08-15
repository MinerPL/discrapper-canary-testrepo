n.d(t, {
  F_: function() {
return a;
  },
  JP: function() {
return r;
  },
  YQ: function() {
return i;
  },
  as: function() {
return l;
  }
});
var s = n(818083);
let a = (0, s.B)({
kind: 'user',
id: '2023-09_whats_new_drop_1_flip',
label: 'What\'s New Drop 1',
defaultConfig: {
  flipped: !1
},
treatments: [{
  id: 1,
  label: 'Flipped',
  config: {
    flipped: !0
  }
}]
  }),
  r = () => a.useExperiment({
location: 'experiment_hook'
  }),
  i = (0, s.B)({
kind: 'user',
id: '2023-09_whats_new_drop_2_flip',
label: 'What\'s New Drop 2',
defaultConfig: {
  flipped: !1
},
treatments: [{
  id: 1,
  label: 'Flipped',
  config: {
    flipped: !0
  }
}]
  }),
  l = () => i.useExperiment({
location: 'experiment_hook'
  });