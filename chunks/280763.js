n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(748780),
  o = n(399606),
  c = n(607070),
  u = n(768943),
  d = n(742989),
  _ = n(929792);
class E extends a.PureComponent {
  componentDidUpdate(e) {
e.count < this.props.count && !this.props.reducedMotion && l.Z.sequence([
  l.Z.timing(this.animationScale, {
    toValue: 1.8,
    duration: 300
  }),
  l.Z.timing(this.animationScale, {
    toValue: 1,
    duration: 200
  })
]).start();
  }
  render() {
let {
  count: e,
  className: t
} = this.props;
return 0 === e ? null : (0, i.jsx)(l.Z.div, {
  className: r()(_.badge, t),
  style: {
    transform: [{
      scale: this.animationScale
    }]
  },
  children: e
});
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'animationScale', i = new l.Z.Value(1), n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}

function I(e) {
  let {
className: t
  } = e, {
showReminders: n
  } = d.Z.useExperiment({
location: 'f79435_1'
  }, {
autoTrackExposure: !1
  }), a = (0, o.e7)([u.Z], () => n ? u.Z.getOverdueMessageReminderCount() : 0, [n]), s = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
  return n ? (0, i.jsx)(E, {
count: a,
className: t,
reducedMotion: s
  }) : null;
}