"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var a = i("735250");
i("470079");
var l = i("803997"),
  n = i.n(l),
  s = i("481060"),
  r = i("893079");

function o(e) {
  let {
    checked: t,
    onChange: i,
    disabled: l,
    className: o,
    tooltipProps: d
  } = e, c = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(s.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: n()(r.switch, o),
    ...d,
    children: (0, a.jsx)(s.Switch, {
      checked: t,
      onChange: i,
      disabled: l
    })
  })
}