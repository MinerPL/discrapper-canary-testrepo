n.d(t, {
  W: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var l = n(120356),
  r = n.n(l),
  a = n(399606),
  o = n(481060),
  u = n(337682),
  c = n(115130),
  d = n(689938),
  s = n(464243);

function p(e) {
  let {
hideSearch: t,
className: n
  } = e, {
activityUrlOverride: l,
useActivityUrlOverride: p,
filter: f
  } = (0, a.cj)([c.Z], () => ({
activityUrlOverride: c.Z.getActivityUrlOverride(),
useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
filter: c.Z.getFilter()
  }), []);
  return (0, i.jsxs)('div', {
className: r()(s.container, n),
children: [
  (0, i.jsx)(o.Checkbox, {
    type: o.Checkbox.Types.INVERTED,
    className: s.__invalid_checkbox,
    value: p,
    onClick: u.Y$,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-md/semibold',
      children: d.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
    })
  }),
  (0, i.jsx)(o.FormItem, {
    className: s.__invalid_urlOverride,
    title: d.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
    children: (0, i.jsx)(o.TextInput, {
      disabled: !p,
      value: null != l ? l : void 0,
      onChange: u.jS,
      placeholder: 'https://localhost:3000'
    })
  }),
  !0 === t ? null : (0, i.jsx)('div', {
    children: (0, i.jsx)(o.SearchBar, {
      className: s.searchBar,
      query: f,
      onChange: u.a8,
      onClear: function() {
        u.a8('');
      }
    })
  })
]
  });
}