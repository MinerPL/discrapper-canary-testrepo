n.d(t, {
  h: function() {
return s;
  }
});
var i = n(237292),
  a = n(403485),
  l = n(604849);

function s(e) {
  let t = (0, i.y0)({
  location: 'safety-tools-button'
}),
n = (0, l.c)(),
s = (0, a.h)(e);
  if (!t || !n)
return;
  let r = s.filter(e => null != e.dismiss_timestamp);
  if (0 !== r.length)
return r.sort((e, t) => e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0];
}