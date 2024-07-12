n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(26151),
  s = n(871499),
  r = n(689938);

function o(e) {
  let {
channel: t,
...n
  } = e;
  return (0, i.jsx)(s.d, {
...n,
iconComponent: a.CloseSmallIcon,
label: r.Z.Messages.DISMISS,
onClick: () => l.Z.stopRinging(t.id)
  });
}