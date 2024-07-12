n.d(t, {
  Z: function() {
return s;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(588207);

function s(e) {
  let {
changePage: t,
offset: n,
totalResults: s,
pageLength: r
  } = e, o = Math.floor(n / r) + 1;
  return (0, i.jsx)('div', {
className: l.container,
children: (0, i.jsx)(a.Paginator, {
  currentPage: o,
  totalCount: s,
  pageSize: r,
  onPageChange: t,
  maxVisiblePages: 5
})
  });
}