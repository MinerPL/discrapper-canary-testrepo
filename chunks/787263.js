n.d(t, {
  w: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var l = n(481060);

function r(e, t) {
  return (0, l.openModalLazy)(async () => {
let {
  default: l
} = await Promise.all([
  n.e('53115'),
  n.e('79521')
]).then(n.bind(n, 207540));
return n => (0, i.jsx)(l, {
  ...n,
  onConfirm: () => {
    n.onClose(), t();
  },
  channel: e
});
  });
}