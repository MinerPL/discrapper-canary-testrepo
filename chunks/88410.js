t.d(n, {
  Z: function() {
return l;
  }
}), t(627494), t(757143);
var i = t(470079),
  a = t(812236);

function l(e) {
  let {
applicationId: n,
channel: t
  } = e, l = (0, a.SY)(t, n).commands[0];
  return i.useMemo(() => {
let e = null == l ? void 0 : l.name;
if (null != e)
  return (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
  }, [l]);
}