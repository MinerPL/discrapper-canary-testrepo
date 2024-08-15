n.r(t);
var r = n(735250),
  o = n(470079),
  s = n(442837),
  a = n(481060),
  u = n(541099),
  i = n(827498),
  c = n(421591),
  l = n(314734),
  d = n(689938),
  f = n(551397);
t.default = o.memo(function(e) {
  let {
channel: t,
...n
  } = e, E = (0, s.e7)([u.Z], () => u.Z.shouldShowModal());
  return o.useEffect(() => {
!E && (0, a.closeModal)(l.e9);
  }), (0, r.jsx)('span', {
style: l.u$,
children: (0, r.jsx)(a.ModalRoot, {
  className: f.root,
  'aria-label': d.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
  ...n,
  children: (0, r.jsx)(c.Z, {
    channel: t,
    entrypoint: i._b.VOICE
  })
})
  });
});