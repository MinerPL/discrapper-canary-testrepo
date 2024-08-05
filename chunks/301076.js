n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(592471),
  s = n(871499);

function l(e) {
  let t, {
  isActivityActive: n,
  onMouseEnter: l,
  onMouseLeave: r,
  onClick: o,
  ...c
} = e,
{
  Component: u,
  events: d
} = (0, a.s)();
  return (0, i.jsx)(s.d, {
isActive: n,
color: t,
iconComponent: u,
onMouseEnter: e => {
  null == l || l(e), d.onMouseEnter();
},
onMouseLeave: e => {
  null == r || r(e), d.onMouseLeave();
},
onClick: e => {
  null == o || o(e), d.onClick();
},
...c
  });
}