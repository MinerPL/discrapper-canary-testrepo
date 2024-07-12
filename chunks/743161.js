a.r(n);
var t = a(735250),
  o = a(470079),
  r = a(442837),
  i = a(481060),
  c = a(541099),
  d = a(827498),
  p = a(421591),
  _ = a(314734),
  l = a(689938),
  b = a(608305);
n.default = o.memo(function(e) {
  let {
channel: n,
...a
  } = e, s = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
  return o.useEffect(() => {
!s && (0, i.closeModal)(_.e9);
  }), (0, t.jsx)('span', {
style: _.u$,
children: (0, t.jsx)(i.ModalRoot, {
  className: b.root,
  'aria-label': l.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
  ...a,
  children: (0, t.jsx)(p.Z, {
    channel: n,
    entrypoint: d._b.VOICE
  })
})
  });
});