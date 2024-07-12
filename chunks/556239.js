n.d(t, {
  L: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-07_expand_roles_inline',
label: 'Expand Roles Inline',
defaultConfig: {
  expandRolesInlineEnabled: !1
},
treatments: [{
  id: 1,
  label: 'Expand roles inline when +X is clicked in the redesigned profile popout',
  config: {
    expandRolesInlineEnabled: !0
  }
}]
  }),
  i = e => {
let {
  location: t,
  autoTrackExposure: n = !0,
  trackExposureOptions: i = {}
} = e;
return r.useExperiment({
  location: t
}, {
  autoTrackExposure: n,
  trackExposureOptions: i
});
  };