var i = n(735250),
  a = n(470079),
  l = n(450369),
  s = n(132582);
t.Z = a.memo(function(e) {
  let {
channel: t,
participants: n,
tileWidth: a,
selectedParticipant: r
  } = e;
  return (0, i.jsx)('div', {
className: s.rowContainer,
children: n.map(e => e.id === (null == r ? void 0 : r.id) ? null : (0, i.jsx)(l.Z, {
  channel: t,
  participant: e,
  width: a
}, e.id))
  });
});