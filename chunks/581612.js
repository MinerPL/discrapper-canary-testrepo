r.d(t, {
  Z: function() {
return i;
  },
  q: function() {
return o;
  }
});
var a = r(570140),
  n = r(91311);

function i(e, t) {
  let r = 'boolean' == typeof t ? t : !n.Z.get(e);
  a.Z.dispatch({
type: 'DEV_TOOLS_DESIGN_TOGGLE_WEB_SET',
toggle: e,
value: r
  });
}

function o() {
  for (let e in n.Z.all())
i(e, !1);
}