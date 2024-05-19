"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("433517"),
  o = n("518774"),
  u = n("27457"),
  d = n("981631"),
  c = n("151561"),
  f = n("661781");
let h = "CameraPreviewPosition";

function m(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: s,
    channel: m,
    participants: p
  } = e, [E, C] = function() {
    let [e, t] = l.useState(() => r.Storage.get(h, d.PictureInPicturePositions.BOTTOM_RIGHT));
    return [e, l.useCallback(e => {
      r.Storage.set(h, e), t(e)
    }, [])]
  }(), g = l.useRef(null), S = null == m.getGuildId() ? 70 : 50;
  return l.useLayoutEffect(() => {
    var e;
    null === (e = g.current) || void 0 === e || e.ensureIsInPosition()
  }, [p.length]), (0, a.jsx)("div", {
    className: c.container,
    children: (0, a.jsx)(o.PictureInPictureWindow, {
      position: E,
      id: 0,
      ref: g,
      onMove: (e, t) => C(t),
      maxX: t,
      maxY: s,
      edgeOffsetTop: S,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      children: (0, a.jsx)("div", {
        className: c.tileContainer,
        children: p.map(e => (0, a.jsx)(u.default, {
          participant: e,
          channel: m,
          onContextMenu: n,
          className: i()(c.tile, f.elevationHigh),
          fit: u.CallTileFit.COVER,
          inCall: !0,
          inPopout: !1,
          width: 160
        }, e.id))
      })
    })
  })
}