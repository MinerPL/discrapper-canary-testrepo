"use strict";
s.r(t);
var l = s("735250");
s("470079");
var a = s("803997"),
  n = s.n(a),
  i = s("692547"),
  r = s("481060"),
  o = s("285952"),
  d = s("176677");
t.default = e => {
  let {
    className: t,
    icon: s,
    noticeText: a,
    buttonText: u,
    onClick: c,
    canSync: h
  } = e;
  return (0, l.jsx)(r.Card, {
    className: n()(t, d.card),
    children: (0, l.jsxs)(o.default, {
      justify: o.default.Justify.BETWEEN,
      align: o.default.Align.CENTER,
      children: [(0, l.jsx)(s, {
        width: 20,
        height: 20,
        color: i.default.unsafe_rawColors.YELLOW_300.css
      }), (0, l.jsx)("div", {
        className: d.label,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: a
        })
      }), h && (0, l.jsx)(r.Button, {
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: c,
        children: u
      })]
    })
  })
}