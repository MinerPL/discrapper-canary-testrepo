n.d(t, {
  e: function() {
return i;
  }
});
var r, i, a = n(818083);
(r = i || (i = {})).ALLOWED = 'allowed', r.DEFAULT = 'default', t.Z = (0, a.B)({
  kind: 'guild',
  id: '2023-09_user_apps_guild',
  label: 'Allow user app commands',
  defaultConfig: {
userAppsTreatment: 'default'
  },
  treatments: [{
id: 1,
label: 'Allow user app commands',
config: {
  userAppsTreatment: 'allowed'
}
  }]
});