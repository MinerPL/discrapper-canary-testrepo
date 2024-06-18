"use strict";
n.d(t, {
  j: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(481060);

function s(e) {
  let {
    application: t,
    onConfirm: s,
    onCancel: o
  } = e;
  return (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("18367")]).then(n.bind(n, 557751));
    return n => (0, i.jsx)(e, {
      application: t,
      onConfirm: s,
      onCancel: o,
      ...n
    })
  }), Promise.resolve()
}