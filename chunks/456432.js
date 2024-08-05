n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(829820);

function r(e) {
  let {
activity: t,
user: n,
source: r,
...l
  } = e, {
label: o,
tooltip: c,
loading: u,
disabled: d,
onClick: _
  } = (0, a.Lz)(t, n, r);
  return (0, i.jsx)(s.Tooltip, {
text: c,
children: e => {
  let {
    onMouseEnter: t,
    onMouseLeave: n
  } = e;
  return (0, i.jsx)(s.Button, {
    ...l,
    color: d ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
    onClick: _,
    onMouseEnter: t,
    onMouseLeave: n,
    disabled: !u && d,
    submitting: u,
    children: o
  });
}
  });
}