"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  u = n("837899"),
  o = n("849467"),
  d = n("155207"),
  c = n("980423"),
  f = n("215536"),
  h = n("232027"),
  m = l.memo(function(e) {
    let {
      label: t,
      participantCount: n,
      onClick: l,
      className: s,
      collapsed: m,
      speakers: p,
      channel: E,
      isStreamLive: g
    } = e;
    return (0, a.jsxs)(r.Clickable, {
      onClick: l,
      className: i(h.container, s),
      children: [null == p ? (0, a.jsx)(d.default, {
        width: 20,
        height: 20,
        className: h.micIcon
      }) : (0, a.jsx)(o.default, {
        width: 20,
        height: 20,
        className: h.micIcon
      }), (0, a.jsxs)(r.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        className: h.text,
        children: [t, " — ", n]
      }), m && null != E && null != p && p.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(f.default, {
          channel: E,
          speakers: p
        }), g && (0, a.jsx)(c.default, {})]
      }), (0, a.jsx)(u.default, {
        width: 20,
        height: 20,
        className: i(h.downIcon, {
          [h.upIcon]: m
        })
      })]
    })
  })