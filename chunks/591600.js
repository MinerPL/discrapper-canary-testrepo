n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(666520),
  s = n(785717),
  o = n(659101),
  l = n(689938),
  u = n(444266),
  c = n(651003);

function d(e) {
  let {
user: t,
setNote: n,
autoFocus: d,
lastSection: _
  } = e, {
trackUserProfileAction: E
  } = (0, s.KZ)();
  return (0, r.jsxs)(o.Z, {
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