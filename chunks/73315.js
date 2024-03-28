"use strict";
i.r(t), i("627341");
var n = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  l = i("278074"),
  o = i("984986"),
  r = i("169525"),
  u = i("149111"),
  d = i("548931");
t.default = e => {
  let {
    obscureReason: t,
    iconClassname: i
  } = e;
  return (0, l.match)(t).with(r.ObscureReason.EXPLICIT_CONTENT, () => (0, n.jsx)(o.ImageWarningIcon, {
    className: s()(i, d.obscuredIcon),
    color: "white"
  })).with(r.ObscureReason.SPOILER, () => (0, n.jsx)(u.default, {
    className: i
  })).otherwise(() => null)
}