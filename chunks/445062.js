n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(864094),
  a = n(871499),
  s = n(689938);

function o(e) {
  let {
isSelfStream: t,
centerButton: n = !1,
onMouseEnter: o,
onMouseLeave: l,
...u
  } = e, c = n ? a.d : a.Z, {
Component: d,
events: _
  } = (0, i.P)('disable');
  return (0, r.jsx)(c, {
label: t ? s.Z.Messages.STOP_STREAMING : s.Z.Messages.STOP_WATCHING,
iconComponent: d,
isActive: !0,
onMouseEnter: e => {
  null == o || o(e), _.onMouseEnter();
},
onMouseLeave: e => {
  null == l || l(e), _.onMouseLeave();
},
...u
  });
}