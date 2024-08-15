n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  o = n(481060),
  r = n(13245),
  l = n(313201),
  c = n(237997),
  d = n(766032),
  u = n(987650),
  h = n(981631),
  p = n(689938),
  f = n(75483);
let _ = Object.values(u.wF).map(e => 100 * e),
  g = (0, l.hQ)();
class m extends s.PureComponent {
  handleUpdateBackgroundOpacity(e) {
r.Z.setTextWidgetOpacity((0, d.Z)(e / 100)), r.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
  text_opacity_slider: e
});
  }
  handlePreviewBackgroundOpacity(e) {
r.Z.setTextWidgetOpacity((0, d.Z)(e / 100));
  }
  render() {
return (0, i.jsxs)('div', {
  className: f.container,
  children: [
    (0, i.jsx)(o.FormTitle, {
      id: g,
      tag: o.FormTitleTags.H5,
      className: f.title,
      children: p.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
    }),
    (0, i.jsx)('div', {
      className: f.sliderContainer,
      children: (0, i.jsx)(o.Slider, {
        mini: !0,
        initialValue: this.initialValue,
        defaultValue: this.initialValue,
        minValue: _[0],
        maxValue: _[_.length - 1],
        handleSize: 10,
        onValueChange: this.handleUpdateBackgroundOpacity,
        asValueChanges: this.handlePreviewBackgroundOpacity,
        markers: _,
        onMarkerRender: h.dG4,
        equidistant: !0,
        stickToMarkers: !0,
        'aria-labelledby': g
      })
    })
  ]
});
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'initialValue', i = 100 * this.props.opacity, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = a.ZP.connectStores([c.Z], () => ({
  opacity: c.Z.getTextWidgetOpacity()
}))(m);