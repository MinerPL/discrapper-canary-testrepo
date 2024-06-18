"use strict";
n.d(t, {
  Z: function() {
    return g
  },
  u: function() {
    return C
  }
}), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(392711),
  u = n(286379),
  _ = n(622535),
  d = n(916616),
  c = n(818083),
  E = n(134432),
  I = n(797614),
  T = n(740492),
  h = n(866960),
  S = n(626135),
  f = n(768581),
  N = n(956664),
  A = n(311715),
  m = n(768760),
  O = n(981631);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = /\.gif($|\?|#)/i,
  p = /\.png($|\?|#)/i;
(s = i || (i = {})).LOAD = "LOAD", s.PRELOAD = "PRELOAD", s.CLICK = "CLICK";
class g extends(r = a.Component) {
  static isAnimated(e) {
    let {
      src: t,
      original: n,
      animated: i
    } = e;
    return i || C.test(null != n && "" !== n ? n : t)
  }
  static isSrcPNG(e) {
    let {
      src: t
    } = e;
    return p.test(t)
  }
  componentDidMount() {
    let {
      readyState: e
    } = this.state;
    e === O.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), g.isAnimated(this.props)), this.handleImageLoad), g.isAnimated(this.props) && this.observeVisibility()
  }
  componentDidUpdate(e) {
    let t = g.isAnimated(this.props);
    g.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
  }
  componentWillUnmount() {
    g.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
  }
  getSrc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        src: n,
        width: i,
        height: r,
        maxWidth: s,
        maxHeight: o,
        mediaLayoutType: a
      } = this.props,
      {
        format: l,
        quality: u
      } = this.getFormatQuality(t);
    return (0, E.Q4)({
      src: n,
      width: i,
      height: r,
      ratio: e,
      maxWidth: a === m.hV.MOSAIC ? s : void 0,
      maxHeight: a === m.hV.MOSAIC ? o : void 0,
      format: l,
      quality: u
    })
  }
  getFormatQuality() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = null,
      n = null;
    return f.$k && (e || !g.isAnimated(this.props)) ? (t = "webp", g.isSrcPNG(this.props) && (n = "lossless")) : e && (t = "png"), {
      format: t,
      quality: n
    }
  }
  getRatio() {
    let {
      width: e,
      height: t,
      maxWidth: n = 400,
      maxHeight: i = 300,
      mediaLayoutType: r,
      useFullWidth: s
    } = this.props;
    return r === m.hV.MOSAIC && s ? (0, N.rn)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: i
    }) : (0, N.Dc)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: i
    })
  }
  getType() {
    let {
      mediaLayoutType: e,
      responsive: t
    } = this.props;
    return null != e ? e : t ? m.hV.RESPONSIVE : m.hV.STATIC
  }
  loadImage(e, t) {
    let {
      width: n,
      height: i
    } = this.props;
    if (this.startLoadingTime = Date.now(), 1 === n && 1 === i) return;
    let r = (0, E.po)(e, (e, n) => {
      null != r && this._cancellers.delete(r), null == t || t(e, n)
    });
    null != r && this._cancellers.add(r)
  }
  render() {
    let {
      alt: e,
      zoomThumbnailPlaceholder: t,
      onZoom: n,
      shouldLink: i,
      onContextMenu: r,
      autoPlay: s,
      original: a,
      className: u,
      imageClassName: _,
      children: c,
      animated: E,
      shouldAnimate: I,
      width: T,
      height: h,
      minWidth: S,
      minHeight: f,
      maxWidth: N,
      maxHeight: A,
      onClick: m,
      renderAccessory: R,
      tabIndex: C,
      limitResponsiveWidth: p,
      useFullWidth: L,
      placeholder: v,
      placeholderVersion: D
    } = this.props, {
      readyState: M,
      hasMouseOver: P,
      hasFocus: y
    } = this.state, U = null != n, b = this.getRatio(), G = (0, l.clamp)(Math.round(T * b), null != S ? S : 0, null != N ? N : 1 / 0), w = (0, l.clamp)(Math.round(h * b), null != f ? f : 0, null != A ? A : 1 / 0), k = {
      alt: e,
      readyState: M,
      onContextMenu: null != r ? r : void 0,
      zoomable: U,
      className: u,
      imageClassName: _,
      minWidth: S,
      minHeight: f,
      mediaLayoutType: this.getType(),
      limitResponsiveWidth: p,
      useFullWidth: L,
      tabIndex: C,
      width: G,
      height: w,
      src: "",
      placeholder: v,
      placeholderVersion: D,
      children: null != c ? e => {
        let {
          src: t,
          size: n,
          alt: i,
          mediaLayoutType: r
        } = e;
        return c({
          src: t,
          size: n,
          alt: i,
          mediaLayoutType: r
        })
      } : void 0,
      onMouseEnter: this.onMouseEnter,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
    if (1 === k.width && 1 === k.height) return null;
    switch ((U || null != m) && (k.onClick = this.onClick), i && (k.original = null != a && "" !== a ? a : k.src), M) {
      case O.zo9.LOADING:
        null != t && (k.src = t);
        break;
      case O.zo9.READY:
        if (g.isAnimated(this.props)) {
          k.onMouseLeave = this.onMouseLeave;
          let e = (s || P || y) && (null == I || I) && g.visibilityObserver.isVisible(this);
          e ? (k.src = this.getSrc(b), k.renderAccessory = R) : (k.src = this.getSrc(b, !E || !s), k.renderAccessory = this.renderAccessory), null != c && (k.children = t => {
            let {
              src: n,
              size: i,
              alt: r,
              mediaLayoutType: s
            } = t;
            return c({
              src: n,
              size: i,
              animating: e,
              alt: r,
              mediaLayoutType: s
            })
          })
        } else k.src = this.getSrc(b)
    }
    return (0, o.jsx)(d.E, {
      ...k
    })
  }
  async trackLoadingCompleted(e, t, n) {
    var i;
    if (e && I.Z.increment({
        name: u.V.IMAGE_LOAD_ERROR
      }), !this.imageLoadAnalyticsEnabled) return;
    let r = await fetch(t.url).catch(() => void 0),
      s = null == r ? void 0 : null === (i = r.headers) || void 0 === i ? void 0 : i.get("content-length"),
      o = null != s ? Number(s) : null,
      a = Date.now() - this.startLoadingTime,
      {
        format: l,
        quality: _
      } = this.getFormatQuality();
    S.default.track(O.rMx.IMAGE_LOADING_COMPLETED, {
      duration_ms: a,
      requested_height: t.height,
      requested_width: t.width,
      height: this.props.height,
      width: this.props.width,
      original_url: this.props.original,
      url: this.props.src,
      requested_url: t.url,
      format: l,
      quality: _,
      state: e ? O.zo9.ERROR : this.state.readyState,
      data_saving_mode: T.ZP.dataSavingMode,
      low_quality_image_mode: T.ZP.dataSavingMode,
      trigger: n,
      size: o,
      connection_type: h.Z.getType(),
      effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
      service_provider: h.Z.getServiceProvider()
    })
  }
  constructor(e) {
    super(e), R(this, "imageLoadAnalyticsEnabled", !1), R(this, "state", {
      readyState: O.zo9.LOADING,
      hasMouseOver: !1,
      hasFocus: !1
    }), R(this, "startLoadingTime", Date.now()), R(this, "_cancellers", new Set), R(this, "observeVisibility", () => {
      g.visibilityObserver.observe(this)
    }), R(this, "unobserveVisibility", () => {
      g.visibilityObserver.unobserve(this)
    }), R(this, "handleImageLoad", (e, t) => {
      this.setState({
        readyState: e ? O.zo9.ERROR : O.zo9.READY
      }, () => {
        var n;
        return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : "LOAD")
      })
    }), R(this, "preloadImage", (e, t) => {
      let {
        width: n,
        height: i
      } = e, {
        width: r,
        height: s
      } = this.props;
      (1 !== r || 1 !== s) && this.loadImage(this.getSrc((0, N.Dc)({
        width: r,
        height: s,
        maxWidth: n,
        maxHeight: i
      })), (e, n) => {
        this.trackLoadingCompleted(e, n, "PRELOAD"), null == t || t(e, n)
      })
    }), R(this, "onMouseEnter", e => {
      g.isAnimated(this.props) && this.setState({
        hasMouseOver: !0
      });
      let {
        onMouseEnter: t
      } = this.props;
      null != t && t(e, {
        preloadImage: this.preloadImage
      })
    }), R(this, "onFocus", e => {
      g.isAnimated(this.props) && this.setState({
        hasFocus: !0
      })
    }), R(this, "onBlur", e => {
      let {
        currentTarget: t,
        relatedTarget: n
      } = e;
      !t.contains(n) && this.setState({
        hasFocus: !1
      })
    }), R(this, "onMouseLeave", () => this.setState({
      hasMouseOver: !1
    })), R(this, "onClick", e => {
      let {
        onZoom: t,
        onClick: n
      } = this.props;
      null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
        zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
        trigger: "CLICK"
      }))
    }), R(this, "renderAccessory", () => {
      let {
        hasMouseOver: e,
        hasFocus: t
      } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
      return this.props.shouldRenderAccessory ? e || t ? n : (0, o.jsx)(A.Z, {}) : null
    }), (0, E.Vv)(this.getSrc(this.getRatio(), g.isAnimated(this.props))) && (this.state.readyState = O.zo9.READY), this.imageLoadAnalyticsEnabled = L.getCurrentConfig({
      location: "lazy_image"
    }).enabled
  }
}
R(g, "visibilityObserver", new _.Z({
  threshold: .7
})), R(g, "defaultProps", {
  shouldLink: !1,
  autoPlay: !1,
  animated: !1,
  minWidth: 0,
  minHeight: 0,
  shouldRenderAccessory: !0
});
let L = (0, c.B)({
  kind: "user",
  id: "2024-02_image_load_metrics",
  label: "Image load metrics Config User Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Do not send metrics for image load",
    config: {
      enabled: !1
    }
  }, {
    id: 2,
    label: "Send metrics for image load",
    config: {
      enabled: !0
    }
  }]
})