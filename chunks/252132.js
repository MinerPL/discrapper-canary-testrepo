n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(27457),
  s = n(131951),
  l = n(862978);

function r(e) {
  let {
aspectRatio: t,
blocked: n,
channel: r,
className: o,
focused: c,
children: u,
inCall: d,
inPopout: h,
noBorder: p,
onClick: m,
onContextMenu: _,
onDoubleClick: f,
onVideoResize: E,
paused: g,
pulseSpeakingIndicator: C,
participant: I,
width: x,
...T
  } = e, N = s.Z.getVideoComponent();
  return (0, i.jsx)('div', {
style: {
  width: x
},
className: l.spaceBetweenTiles,
children: (0, i.jsxs)('div', {
  className: l.tileSizer,
  style: {
    aspectRatio: t
  },
  children: [
    (0, i.jsx)(a.ZP, {
      blocked: n,
      channel: r,
      className: o,
      focused: c,
      inCall: d,
      inPopout: h,
      noBorder: p,
      onClick: m,
      onContextMenu: _,
      onDoubleClick: f,
      onVideoResize: E,
      participant: I,
      paused: g,
      pulseSpeakingIndicator: C,
      videoComponent: N,
      width: x,
      ...T
    }),
    u
  ]
})
  });
}