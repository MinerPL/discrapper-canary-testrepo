var r = n(735250);
n(470079);
var i = n(481060);
t.Z = {
  show(e) {
let {
  url: t,
  trustUrl: a,
  onConfirm: s,
  isProtocol: o
} = e;
(0, i.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('85668').then(n.bind(n, 720553));
  return n => (0, r.jsx)(e, {
    ...n,
    url: t,
    isProtocol: o,
    trustUrl: a,
    onConfirm: s
  });
});
  }
};