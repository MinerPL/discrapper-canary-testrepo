t.d(n, {
  Z: function() {
return s;
  }
});
var l = t(735250),
  r = t(120356),
  i = t.n(r),
  a = t(481060),
  o = t(365030);

function s(e) {
  let {
className: n,
onClick: t,
...r
  } = e;
  return (0, l.jsx)(a.Clickable, {
...r,
className: i()(null != t && o.clickable, n),
onClick: t
  });
}