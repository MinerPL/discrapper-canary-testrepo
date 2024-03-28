"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a, l, s, i, r = n("735250"),
  o = n("470079"),
  u = n("699581"),
  d = n("374470"),
  c = n("442837"),
  f = n("260300"),
  h = n("451478"),
  m = n("5560"),
  p = n("10401");
class E extends(i = o.Component) {
  componentDidMount() {
    let {
      visible: e,
      inlineSpecs: t
    } = this.props;
    null == t && this.show(e)
  }
  componentWillUnmount() {
    let {
      inlineSpecs: e
    } = this.props;
    null == e && this.show(!1)
  }
  componentDidUpdate(e) {
    let {
      position: t,
      offsetX: n,
      offsetY: a,
      tutorialId: l,
      visible: s,
      windowSize: i
    } = e;
    l !== this.props.tutorialId ? f.default.hide(l) : (s !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || a !== this.props.offsetY || i !== this.props.windowSize) && this.show(this.props.visible)
  }
  show(e) {
    let {
      tutorialId: t,
      position: n,
      offsetX: a,
      offsetY: l,
      visible: s,
      inlineSpecs: i,
      autoInvert: r
    } = this.props;
    if (e && null == i) {
      let e = (0, u.findDOMNode)(this);
      if (!(0, d.isElement)(e)) return;
      let {
        top: s,
        left: i,
        right: o,
        bottom: c
      } = e.getBoundingClientRect();
      f.default.show(t, {
        position: n,
        targetWidth: o - i,
        targetHeight: c - s,
        autoInvert: r,
        origin: {
          x: i,
          y: s
        },
        offset: {
          x: a,
          y: l
        }
      })
    } else s && f.default.hide(t)
  }
  render() {
    let {
      inlineSpecs: e,
      tutorialId: t,
      children: n,
      visible: a,
      windowFocused: l,
      position: s,
      autoInvert: i
    } = this.props, u = p.default.getData()[t];
    return null != e && null != u ? (0, r.jsxs)(r.Fragment, {
      children: [n, a && (0, r.jsx)(m.TutorialIndicator, {
        autoInvert: i,
        position: s,
        tutorialId: t,
        tutorialDefinition: u,
        focused: l,
        ...e
      })]
    }) : o.Children.only(n)
  }
}

function C(e) {
  let {
    tutorialId: t
  } = e, n = (0, c.useStateFromStores)([p.default], () => p.default.shouldShow(t), [t]), a = (0, c.useStateFromStores)([h.default], () => h.default.isFocused()), l = (0, c.useStateFromStores)([h.default], () => h.default.windowSize(), []);
  return (0, r.jsx)(E, {
    ...e,
    visible: n,
    windowFocused: a,
    windowSize: l
  })
}
s = {
  position: "top",
  offsetX: 0,
  offsetY: 0,
  autoInvert: !0
}, (l = "defaultProps") in(a = E) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s