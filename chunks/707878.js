"use strict";
n.r(t), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("442837"),
  s = n("481060"),
  o = n("13245"),
  r = n("237997"),
  d = n("153124"),
  u = n("766032"),
  c = n("987650"),
  f = n("981631"),
  h = n("689938"),
  p = n("993384");
let g = Object.values(c.OpacityBounds).map(e => 100 * e),
  m = (0, d.uid)();
class E extends a.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    o.default.setTextWidgetOpacity((0, u.default)(e / 100)), o.default.track(f.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    o.default.setTextWidgetOpacity((0, u.default)(e / 100))
  }
  render() {
    return (0, i.jsxs)("div", {
      className: p.container,
      children: [(0, i.jsx)(s.FormTitle, {
        id: m,
        tag: s.FormTitleTags.H5,
        className: p.title,
        children: h.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
      }), (0, i.jsx)("div", {
        className: p.sliderContainer,
        children: (0, i.jsx)(s.Slider, {
          mini: !0,
          initialValue: this.initialValue,
          defaultValue: this.initialValue,
          minValue: g[0],
          maxValue: g[g.length - 1],
          handleSize: 10,
          onValueChange: this.handleUpdateBackgroundOpacity,
          asValueChanges: this.handlePreviewBackgroundOpacity,
          markers: g,
          onMarkerRender: f.NOOP,
          equidistant: !0,
          stickToMarkers: !0,
          "aria-labelledby": m
        })
      })]
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "initialValue", i = 100 * this.props.opacity, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = l.default.connectStores([r.default], () => ({
  opacity: r.default.getTextWidgetOpacity()
}))(E)