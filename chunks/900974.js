var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140);
let r = !1,
  l = null;
t.Z = {
  init() {
a.Z.subscribe('CONNECTION_OPEN', e => {
  let {
    pendingPayments: t
  } = e;
  if (null != t && t.length > 0) {
    var a;
    if (l === t[0] || null == (l = t[0]))
      return;
    a = l, r || (r = !0, (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('7232').then(n.bind(n, 645586));
      return t => {
        let {
          transitionState: n,
          onClose: s
        } = t;
        return (0, i.jsx)(e, {
          pendingPayment: a,
          transitionState: n,
          onClose: () => (r = !1, s())
        });
      };
    }));
  }
});
  }
};