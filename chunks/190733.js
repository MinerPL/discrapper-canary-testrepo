i(47120);
var n = i(735250),
  a = i(470079),
  r = i(120356),
  o = i.n(r),
  s = i(481060),
  l = i(981631),
  c = i(689938),
  d = i(466628);
t.Z = a.forwardRef(function(e, t) {
  let {
query: i,
canShowCta: r = !1,
onChange: u,
onSubmit: h,
className: _
  } = e, [p, m] = a.useState(!1);
  return (0, n.jsx)(s.SearchBox, {
ref: t,
className: o()(d.search, _),
label: c.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
placeholder: c.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
searchTerm: i,
cta: r && p && i.length > 0 ? c.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
onChange: u,
onClear: () => u(''),
onFocus: () => m(!0),
onBlur: () => m(!1),
onKeyPress: e => {
  e.charCode === l.yXg.ENTER && (null == h || h());
},
autoFocus: !0
  });
});