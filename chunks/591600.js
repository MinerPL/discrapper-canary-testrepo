n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(666520),
  o = n(785717),
  s = n(659101),
  l = n(689938),
  u = n(794213),
  c = n(655899);

function d(e) {
  let {
user: t,
setNote: n,
autoFocus: d,
lastSection: _
  } = e, {
trackUserProfileAction: E
  } = (0, o.KZ)();
  return (0, r.jsxs)(s.Z, {
lastSection: _,
children: [
  (0, r.jsx)(i.Heading, {
    variant: 'eyebrow',
    className: c.title,
    children: l.Z.Messages.NOTE
  }),
  (0, r.jsx)(a.Z, {
    userId: t.id,
    autoFocus: n || d,
    className: u.note,
    onUpdate: () => E({
      action: 'SET_NOTE'
    })
  }, 'note')
]
  });
}