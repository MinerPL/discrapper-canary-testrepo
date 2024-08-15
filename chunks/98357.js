t.d(r, {
  Z: function() {
return i;
  }
});
var a = t(570140),
  n = t(432877);

function i(e, r) {
  let t = 'boolean' == typeof r ? r : !n.ZP.get(e);
  a.Z.dispatch({
type: 'DEV_TOOLS_DEV_SETTING_SET',
toggle: e,
value: t
  });
}