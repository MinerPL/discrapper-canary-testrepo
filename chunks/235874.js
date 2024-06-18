"use strict";
n.d(t, {
  K: function() {
    return T
  },
  y: function() {
    return I
  }
}), n(411104), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(922770),
  u = n(930295),
  _ = n(126306),
  d = n(900975);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).NONE = "1", s.TRANSLATE = "2", s.SCALE = "3", s.FADE = "4";
let E = Object.freeze({
  2: _.l.Types.TRANSLATE,
  3: _.l.Types.SCALE,
  4: _.l.Types.FADE
});
class I extends(r = a.Component) {
  render() {
    let {
      children: e,
      shouldShow: t,
      position: n,
      onRequestOpen: i,
      onRequestClose: r,
      align: s,
      autoInvert: a,
      fixed: l,
      nudgeAlignIntoViewport: _,
      useRawTargetDimensions: d,
      spacing: c,
      onShiftClick: E,
      positionKey: I,
      preload: T,
      disablePointerEvents: h,
      ignoreModalClicks: S,
      closeOnScroll: f,
      useMouseEnter: N,
      renderPopout: A,
      layerContext: m
    } = this.props;
    return (0, o.jsx)(u.H, {
      ref: this.ref,
      preload: T,
      position: n,
      align: null != s ? s : function(e) {
        switch (e) {
          case "top":
          case "bottom":
            return "left";
          case "left":
          case "right":
            return "top";
          case "center":
          case "window_center":
            return "center"
        }
        throw Error("Unexpected position: ".concat(e))
      }(n),
      autoInvert: a,
      fixed: l,
      nudgeAlignIntoViewport: _,
      useRawTargetDimensions: d,
      renderPopout: this.renderPopout,
      spacing: c,
      shouldShow: null != A && t,
      onRequestOpen: i,
      onRequestClose: r,
      onShiftClick: E,
      positionKey: I,
      disablePointerEvents: h,
      ignoreModalClicks: S,
      closeOnScroll: f,
      useMouseEnter: N,
      layerContext: m,
      children: e
    })
  }
  constructor(...e) {
    super(...e), c(this, "ref", a.createRef()), c(this, "renderPopout", e => {
      let {
        renderPopout: t,
        animation: n,
        animationPosition: i
      } = this.props;
      switch (null != i && null != e.position && (e.position = i), n) {
        case "2":
        case "3":
        case "4":
          return (0, o.jsx)(_.l, {
            position: e.position,
            type: E[n],
            children: t(e)
          });
        case "1":
          return t(e)
      }
      throw Error("Unsupported animation config: ".concat(JSON.stringify(n)))
    })
  }
}

function T(e) {
  let {
    renderPopout: t,
    ...n
  } = e, i = a.useRef(null), [r, s] = a.useState(0);

  function u() {
    return c(), (0, o.jsx)(o.Fragment, {})
  }
  a.useLayoutEffect(() => {
    if (r > 0) {
      var e, t, n, s, o;
      null === (o = i.current) || void 0 === o || null === (s = o.ref) || void 0 === s || null === (n = s.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition()
    }
  }, [r]), a.useEffect(() => {
    let e = setTimeout(t, 20 + 20 * Math.random());
    return () => clearTimeout(e)
  }, []);
  let _ = a.useRef(!1);
  async function c() {
    if (!_.current) {
      _.current = !0;
      let e = setTimeout(() => {
          h(() => E), s(e => e + 1)
        }, 300),
        n = await t();
      h(() => n), s(e => e + 1), clearTimeout(e)
    }
  }

  function E() {
    var e, t, n, r;
    let s = null === (r = i.current) || void 0 === r ? void 0 : null === (n = r.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
      a = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
    return (0, o.jsx)("div", {
      className: d.loader,
      style: {
        width: a
      },
      children: (0, o.jsx)(l.$, {})
    })
  }
  let [T, h] = a.useState(() => u);
  return a.useEffect(() => {
    _.current ? t().then(e => {
      h(() => e), s(e => e + 1)
    }) : h(u)
  }, [t]), (0, o.jsx)(I, {
    ref: i,
    ...n,
    renderPopout: T
  })
}
c(I, "Animation", i), c(I, "defaultProps", {
  position: "right",
  autoInvert: !0,
  nudgeAlignIntoViewport: !0,
  spacing: 8,
  animation: "2",
  positionKey: void 0
}), T.Animation = i