n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(433517),
  o = n(241915),
  c = n(27457),
  u = n(981631),
  d = n(987647),
  h = n(759823);
let p = 'CameraPreviewPosition';

function m(e) {
  let {
width: t,
onContextMenuParticipant: n,
height: s,
channel: m,
participants: _
  } = e, [f, E] = function() {
let [e, t] = a.useState(() => r.K.get(p, u.VD2.BOTTOM_RIGHT));
return [
  e,
  a.useCallback(e => {
    r.K.set(p, e), t(e);
  }, [])
];
  }(), g = a.useRef(null), C = null == m.getGuildId() ? 70 : 50;
  return a.useLayoutEffect(() => {
var e;
null === (e = g.current) || void 0 === e || e.ensureIsInPosition();
  }, [_.length]), (0, i.jsx)('div', {
className: d.container,
children: (0, i.jsx)(o._, {
  position: f,
  id: 0,
  ref: g,
  onMove: (e, t) => E(t),
  maxX: t,
  maxY: s,
  edgeOffsetTop: C,
  edgeOffsetBottom: 70,
  edgeOffsetLeft: 16,
  edgeOffsetRight: 16,
  children: (0, i.jsx)('div', {
    className: d.tileContainer,
    children: _.map(e => (0, i.jsx)(c.ZP, {
      participant: e,
      channel: m,
      onContextMenu: n,
      className: l()(d.tile, h.elevationHigh),
      fit: c.BP.COVER,
      inCall: !0,
      inPopout: !1,
      width: 160
    }, e.id))
  })
})
  });
}