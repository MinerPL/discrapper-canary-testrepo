n.d(t, {
  O: function() {
return a;
  }
});
var r = n(735250);
n(470079);
var i = n(481060);

function a(e) {
  let {
channelId: t,
blockedUserIds: a
  } = e;
  (0, i.openModalLazy)(async () => {
let {
  default: e
} = await n.e('87337').then(n.bind(n, 164375));
return n => {
  let {
    transitionState: i,
    onClose: o
  } = n;
  return (0, r.jsx)(e, {
    channelId: t,
    blockedUserIds: a,
    transitionState: i,
    onClose: o
  });
};
  });
}