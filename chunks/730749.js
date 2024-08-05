n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(626135);

function s(e) {
  var t;
  let n = i.forwardRef((t, n) => (0, r.jsx)(a.AnalyticsContext.Consumer, {
children: i => (0, r.jsx)(e, {
  ...t,
  ref: n,
  analyticsContext: i
})
  }));
  return n.displayName = 'withAnalyticsContext('.concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ')'), n;
}