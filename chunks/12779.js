"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("86813"),
  u = n("357727"),
  d = n("158010"),
  c = n("368666"),
  f = n("14338"),
  h = n("538995");
t.default = l.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: l,
    className: s,
    collapsed: m,
    speakers: p,
    channel: E,
    isStreamLive: C
  } = e;
  return (0, a.jsxs)(r.Clickable, {
    onClick: l,
    className: i()(h.container, s),
    children: [null == p ? (0, a.jsx)(d.default, {
      width: 20,
      height: 20,
      className: h.micIcon
    }) : (0, a.jsx)(u.default, {
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
      }), C && (0, a.jsx)(c.default, {})]
    }), (0, a.jsx)(o.default, {
      width: 20,
      height: 20,
      className: i()(h.downIcon, {
        [h.upIcon]: m
      })
    })]
  })
})