n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(442947);

function o(e) {
  let {
hasMentions: t,
truncatedCount: n,
className: a
  } = e;
  return (0, i.jsx)(l.Text, {
className: s()(r.unreadCount, a, {
  [r.mention]: t
}),
variant: 'text-xs/normal',
children: n
  });
}