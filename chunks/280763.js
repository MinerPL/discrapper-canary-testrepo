"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("748780"),
  o = n("399606"),
  u = n("607070"),
  d = n("641051"),
  c = n("329461"),
  f = n("918373");
class E extends a.PureComponent {
  componentDidUpdate(e) {
    e.count < this.props.count && !this.props.reducedMotion && r.default.sequence([r.default.timing(this.animationScale, {
      toValue: 1.8,
      duration: 300
    }), r.default.timing(this.animationScale, {
      toValue: 1,
      duration: 200
    })]).start()
  }
  render() {
    let {
      count: e,
      className: t
    } = this.props;
    return 0 === e ? null : (0, s.jsx)(r.default.div, {
      className: i()(f.badge, t),
      style: {
        transform: [{
          scale: this.animationScale
        }]
      },
      children: e
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "animationScale", s = new r.default.Value(1), n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function _(e) {
  let {
    className: t
  } = e, {
    showReminders: n
  } = d.default.useExperiment({
    location: "f79435_1"
  }, {
    autoTrackExposure: !1
  }), a = (0, o.useStateFromStores)([c.default], () => n ? c.default.getOverdueMessageReminderCount() : 0, [n]), l = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  return n ? (0, s.jsx)(E, {
    count: a,
    className: t,
    reducedMotion: l
  }) : null
}