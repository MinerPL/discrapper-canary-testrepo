n.d(t, {
  H: function() {
return o;
  },
  V: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(626135),
  l = n(687683),
  r = n(981631);

function o(e) {
  let {
channelId: t,
onConfirm: o,
onCancel: c
  } = e;
  s.default.track(r.rMx.OPEN_MODAL, {
type: l.t9,
channel_id: t
  }), (0, a.openModalLazy)(async () => {
let {
  default: e
} = await n.e('4117').then(n.bind(n, 217723));
return t => (0, i.jsx)(e, {
  onConfirm: o,
  onDismiss: c,
  ...t
});
  });
}

function c(e) {
  let {
onConfirm: t,
onCancel: s
  } = e;
  (0, a.openModalLazy)(async () => {
let {
  default: e
} = await n.e('7649').then(n.bind(n, 797464));
return n => (0, i.jsx)(e, {
  onConfirm: t,
  onDismiss: s,
  ...n
});
  });
}