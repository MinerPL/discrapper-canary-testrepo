n.d(t, {
  Z: function() {
return E;
  }
});
var i, a, l, s, r = n(735250),
  o = n(470079),
  c = n(699581),
  d = n(374470),
  u = n(442837),
  h = n(260300),
  p = n(451478),
  m = n(5560),
  _ = n(10401);
class f extends(s = o.Component) {
  componentDidMount() {
let {
  visible: e,
  inlineSpecs: t
} = this.props;
null == t && this.show(e);
  }
  componentWillUnmount() {
let {
  inlineSpecs: e
} = this.props;
null == e && this.show(!1);
  }
  componentDidUpdate(e) {
let {
  position: t,
  offsetX: n,
  offsetY: i,
  tutorialId: a,
  visible: l,
  windowSize: s
} = e;
a !== this.props.tutorialId ? h.Z.hide(a) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || s !== this.props.windowSize) && this.show(this.props.visible);
  }
  show(e) {
let {
  tutorialId: t,
  position: n,
  offsetX: i,
  offsetY: a,
  visible: l,
  inlineSpecs: s,
  autoInvert: r
} = this.props;
if (e && null == s) {
  let e = (0, c.findDOMNode)(this);
  if (!(0, d.k)(e))
    return;
  let {
    top: l,
    left: s,
    right: o,
    bottom: u
  } = e.getBoundingClientRect();
  h.Z.show(t, {
    position: n,
    targetWidth: o - s,
    targetHeight: u - l,
    autoInvert: r,
    origin: {
      x: s,
      y: l
    },
    offset: {
      x: i,
      y: a
    }
  });
} else
  l && h.Z.hide(t);
  }
  render() {
let {
  inlineSpecs: e,
  tutorialId: t,
  children: n,
  visible: i,
  windowFocused: a,
  position: l,
  autoInvert: s
} = this.props, c = _.Z.getData()[t];
return null != e && null != c ? (0, r.jsxs)(r.Fragment, {
  children: [
    n,
    i && (0, r.jsx)(m.V, {
      autoInvert: s,
      position: l,
      tutorialId: t,
      tutorialDefinition: c,
      focused: a,
      ...e
    })
  ]
}) : o.Children.only(n);
  }
}

function E(e) {
  let {
tutorialId: t
  } = e, n = (0, u.e7)([_.Z], () => _.Z.shouldShow(t), [t]), i = (0, u.e7)([p.Z], () => p.Z.isFocused()), a = (0, u.e7)([p.Z], () => p.Z.windowSize(), []);
  return (0, r.jsx)(f, {
...e,
visible: n,
windowFocused: i,
windowSize: a
  });
}
l = {
  position: 'top',
  offsetX: 0,
  offsetY: 0,
  autoInvert: !0
}, (a = 'defaultProps') in(i = f) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l;