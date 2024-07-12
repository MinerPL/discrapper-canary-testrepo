n.d(t, {
  o: function() {
return E;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  o = n(120356),
  s = n.n(o),
  l = n(748780),
  u = n(481060),
  c = n(440715);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = {
  friction: 7,
  tension: 60
};
class E extends(r = a.Component) {
  componentWillAppear(e) {
this.animateTo(1).start(e);
  }
  componentWillEnter(e) {
this.animateTo(1).start(e);
  }
  componentWillLeave(e) {
let {
  reducedMotion: t
} = this.context;
t.enabled ? this.animateTo(0).start(e) : l.Z.stagger(250, [
  this.animateTo(1.3),
  this.animateTo(0)
]).start(e);
  }
  animateTo(e) {
return l.Z.spring(this.animation, {
  ..._,
  toValue: e
});
  }
  getAnimatedStyle() {
let {
  reducedMotion: e
} = this.context;
return l.Z.accelerate({
  opacity: this.animation,
  transform: e.enabled ? void 0 : [{
    translateY: this.animation.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        '150%',
        '0%'
      ]
    })
  }]
});
  }
  render() {
let {
  className: e,
  children: t
} = this.props;
return (0, i.jsx)(l.Z.div, {
  className: s()(e, c.slider),
  style: this.getAnimatedStyle(),
  children: t
});
  }
  constructor(...e) {
super(...e), d(this, 'animation', new l.Z.Value(0));
  }
}
d(E, 'contextType', u.AccessibilityPreferencesContext);