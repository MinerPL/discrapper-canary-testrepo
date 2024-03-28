"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("470079"),
  l = n("399606"),
  s = n("673125"),
  i = n("292793"),
  r = n("88315"),
  o = n("179295"),
  u = n("370663"),
  d = n("743597");

function c(e) {
  let {
    user: t,
    channelId: n,
    streamerId: c,
    stream: f,
    focused: h,
    canvas: m
  } = e, p = a.useRef(!1), E = (0, l.useStateFromStores)([s.default], () => s.default.getDrawMode()), C = (0, o.default)((0, u.default)(t.id, n, c), f), g = (0, o.default)((0, d.default)(t.id, n, c), f), S = a.useCallback((e, t, n) => {
    if (null == m) return;
    let {
      x: a,
      y: l
    } = (0, r.getMouseCoordinatesPercent)(m, n);
    switch (t.type) {
      case i.DrawableType.LINE:
        return C[e](t, a, l);
      case i.DrawableType.EMOJI_HOSE:
        return g[e](t, a, l)
    }
  }, [m, C, g]), _ = a.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !0, S("handleMouseDown", E, e))
  }, [S, E, h]), T = a.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current && S("handleMouseMove", E, e))
  }, [S, E, h]), I = a.useCallback(e => {
    h && null != E && (e.stopPropagation(), p.current = !1, S("handleMouseUp", E, e))
  }, [S, E, h]), A = a.useCallback(e => {
    p.current && null != E && S("handleMouseEnter", E, e)
  }, [S, E]);
  return a.useEffect(() => {
    let e = e => {
      null != E && (p.current = !1, S("handleMouseUp", E, e))
    };
    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
  }, [S, E]), {
    handleClick: a.useCallback(e => {
      h && null != E && e.stopPropagation()
    }, [E, h]),
    handleMouseDown: _,
    handleMouseEnter: A,
    handleMouseMove: T,
    handleMouseUp: I
  }
}