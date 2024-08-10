n.d(t, {
  P0: function() {
return a;
  }
});
var s, a, r = n(818083);
(s = a || (a = {}))[s.DEFAULT = 0] = 'DEFAULT', s[s.SUMMER_2024 = 1] = 'SUMMER_2024';
let i = (0, r.B)({
  kind: 'user',
  id: '2024-07_shy_project',
  label: 'Shy Project Marketing Variation',
  defaultConfig: {
variant: 0
  },
  treatments: [{
id: 1,
label: 'Summer 2024',
config: {
  variant: 1
}
  }]
});
t.ZP = e => i.useExperiment({
  location: e
}).variant;