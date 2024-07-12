n.d(t, {
  Z: function() {
return h;
  },
  e: function() {
return a;
  }
});
var i, a, l = n(735250);
n(470079);
var s = n(120356),
  r = n.n(s),
  o = n(285952),
  c = n(507675),
  d = n(177524);

function u(e) {
  let {
disableGradients: t = !1,
renderHeader: n,
renderBottomLeft: i,
renderBottomCenter: a,
renderBottomRight: s,
renderCenter: r
  } = e;
  return (0, l.jsxs)('div', {
className: d.videoControls,
children: [
  !(0 === t || !0 === t) && (0, l.jsx)('div', {
    className: d.gradientTop
  }),
  !(1 === t || !0 === t) && (0, l.jsx)('div', {
    className: d.gradientBottom
  }),
  (0, l.jsx)('div', {
    className: d.topControls,
    children: null == n ? void 0 : n()
  }),
  null == r ? void 0 : r(),
  (0, l.jsxs)('div', {
    className: d.bottomControls,
    children: [
      (0, l.jsx)(o.Z, {
        grow: 0,
        shrink: 1,
        align: o.Z.Align.CENTER,
        children: null == i ? void 0 : i()
      }),
      (0, l.jsx)(o.Z, {
        grow: 1,
        justify: o.Z.Justify.CENTER,
        align: o.Z.Align.CENTER,
        children: null == a ? void 0 : a()
      }),
      (0, l.jsx)(o.Z, {
        grow: 0,
        shrink: 1,
        justify: o.Z.Justify.END,
        align: o.Z.Align.CENTER,
        children: null == s ? void 0 : s()
      })
    ]
  })
]
  });
}

function h(e) {
  let {
screenMessage: t,
onDoubleClick: n,
onActive: i,
onForceIdle: a,
idle: s,
children: o,
renderChatButton: h,
renderChatToasts: p,
renderVoiceChannelEffects: m,
style: _,
...f
  } = e;
  return (0, l.jsxs)('div', {
className: r()(d.root, {
  [d.idle]: s
}),
style: _,
onMouseMove: i,
onMouseDown: i,
onMouseLeave: a,
onDoubleClick: n,
children: [
  o,
  null != t ? (0, l.jsx)(c.Z, {
    size: 'large',
    ...t
  }) : null,
  (0, l.jsx)(u, {
    ...f
  }),
  null == h ? void 0 : h({
    className: d.chatButton,
    showingClassName: d.chatButtonShowing
  }),
  null == p ? void 0 : p(),
  null == m ? void 0 : m()
]
  });
}
(i = a || (a = {}))[i.TOP = 0] = 'TOP', i[i.BOTTOM = 1] = 'BOTTOM';