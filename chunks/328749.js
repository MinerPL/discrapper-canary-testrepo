n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(702346),
  r = n(689938),
  l = n(114782);

function o(e) {
  let {
message: t,
compact: n
  } = e;
  return (0, i.jsx)(a.Z, {
iconNode: (0, i.jsx)(s.ThreadIcon, {
  size: 'md',
  color: 'currentColor',
  className: l.icon
}),
timestamp: t.timestamp,
compact: n,
children: r.Z.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
  });
}