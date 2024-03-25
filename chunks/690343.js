"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("37983");
i("884691");
var a = i("414456"),
  l = i.n(a),
  s = i("77078"),
  r = i("854743");

function o(e) {
  let {
    checked: t,
    onChange: i,
    disabled: a,
    className: o,
    tooltipProps: d
  } = e, u = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, n.jsx)(s.Clickable, {
    onClick: u,
    onMouseDown: u,
    onMouseUp: u,
    className: l(r.switch, o),
    ...d,
    children: (0, n.jsx)(s.Switch, {
      checked: t,
      onChange: i,
      disabled: a
    })
  })
}