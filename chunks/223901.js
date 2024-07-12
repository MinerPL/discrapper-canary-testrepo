s.r(e), s.d(e, {
  default: function() {
return d;
  }
});
var o = s(735250),
  r = s(470079),
  t = s(481060),
  n = s(91159),
  i = s(593130),
  c = s(689938),
  l = s(905609);

function d(a) {
  let {
channel: e,
onClose: s,
transitionState: d
  } = a;
  return r.useEffect(() => {
(0, n.U4)();
  }, []), (0, o.jsx)(t.ModalRoot, {
className: l.modal,
transitionState: d,
'aria-label': c.Z.Messages.THREADS,
size: t.ModalSize.DYNAMIC,
children: (0, o.jsx)(i.Z, {
  className: l.browser,
  channel: e,
  onClose: s
})
  });
}