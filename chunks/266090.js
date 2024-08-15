n.d(t, {
  P: function() {
return i;
  }
});
var r, i, a = n(818083);
(r = i || (i = {}))[r.None = 0] = 'None', r[r.DefaultOn = 1] = 'DefaultOn', r[r.DefaultOff = 2] = 'DefaultOff', r[r.ComingSoon = 3] = 'ComingSoon', r[r.ClydeProfiles = 4] = 'ClydeProfiles';
let s = (0, a.B)({
  kind: 'guild',
  id: '2023-03_clyde_ai',
  label: 'ClydeAI',
  defaultConfig: {
experimentState: 0
  },
  treatments: [{
  id: 1,
  label: 'Enabled (Default Off)',
  config: {
    experimentState: 2
  }
},
{
  id: 3,
  label: 'Enabled (Default On)',
  config: {
    experimentState: 1
  }
},
{
  id: 4,
  label: 'Coming Soon',
  config: {
    experimentState: 3
  }
},
{
  id: 5,
  label: 'Clyde Profiles',
  config: {
    experimentState: 4
  }
}
  ]
});
t.Z = s;