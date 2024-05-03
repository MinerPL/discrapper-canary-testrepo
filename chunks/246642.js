"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("735250");
i("470079");
var a = i("481060"),
  s = i("44315"),
  l = i("641033"),
  o = i("989830"),
  r = i("689938"),
  u = i("55153");

function d(e) {
  let {
    channelId: t
  } = e, i = (0, o.default)(t);
  if (!(null != i && (i.value > 0 || (null == i ? void 0 : i.multiplier) > 1))) return null;
  let {
    multiplier: d
  } = i, {
    color: c
  } = (0, l.getComboStyles)(d);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-xs/normal",
      children: r.default.Messages.POGGERMODE_COMBO_BAR
    }), (0, n.jsx)(a.Progress, {
      foregroundColor: (0, s.getColor)(c),
      className: u.progress,
      size: a.Progress.Sizes.LARGE,
      percent: 100 * (0, l.getComboPercentage)(i),
      animate: !0
    })]
  })
}