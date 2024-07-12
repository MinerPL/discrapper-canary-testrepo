n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(829820);

function r(e) {
  let {
activity: t,
user: n,
source: r,
...l
  } = e, {
label: o,
tooltip: c,
loading: d,
disabled: u,
onClick: _
  } = (0, s.Lz)(t, n, r);
  return (0, i.jsx)(a.Tooltip, {
text: c,
children: e => {
  let {
    onMouseEnter: t,
    onMouseLeave: n
  } = e;
  return (0, i.jsx)(a.Button, {
    ...l,
    color: u ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
    onClick: _,
    onMouseEnter: t,
    onMouseLeave: n,
    disabled: !d && u,
    submitting: d,
    children: o
  });
}
  });
}