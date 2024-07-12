r.d(t, {
  Z: function() {
return i;
  }
});
var a = r(570140),
  n = r(432877);

function i(e, t) {
  let r = 'boolean' == typeof t ? t : !n.ZP.get(e);
  a.Z.dispatch({
type: 'DEV_TOOLS_DEV_SETTING_SET',
toggle: e,
value: r
  });
}