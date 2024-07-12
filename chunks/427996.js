n.d(t, {
  W: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var l = n(399606),
  r = n(481060),
  a = n(337682),
  o = n(115130),
  u = n(689938),
  c = n(903526);

function d(e) {
  let {
hideSearch: t
  } = e, {
activityUrlOverride: n,
useActivityUrlOverride: d,
filter: s
  } = (0, l.cj)([o.Z], () => ({
activityUrlOverride: o.Z.getActivityUrlOverride(),
useActivityUrlOverride: o.Z.getUseActivityUrlOverride(),
filter: o.Z.getFilter()
  }), []);
  return (0, i.jsxs)('div', {
className: c.container,
children: [
  (0, i.jsx)(r.Checkbox, {
    type: r.Checkbox.Types.INVERTED,
    className: c.__invalid_checkbox,
    value: d,
    onClick: a.Y$,
    children: (0, i.jsx)(r.Text, {
      variant: 'text-md/semibold',
      children: u.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
    })
  }),
  (0, i.jsx)(r.FormItem, {
    className: c.__invalid_urlOverride,
    title: u.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
    children: (0, i.jsx)(r.TextInput, {
      disabled: !d,
      value: null != n ? n : void 0,
      onChange: a.jS,
      placeholder: 'http://localhost:3000'
    })
  }),
  !0 === t ? null : (0, i.jsx)('div', {
    children: (0, i.jsx)(r.SearchBar, {
      className: c.searchBar,
      query: s,
      onChange: a.a8,
      onClear: function() {
        a.a8('');
      }
    })
  })
]
  });
}