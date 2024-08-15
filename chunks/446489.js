n.d(t, {
  Z: function() {
return g;
  },
  y: function() {
return p;
  }
});
var i, s, o, a = n(735250),
  l = n(470079),
  r = n(392711),
  c = n.n(r),
  u = n(748780),
  d = n(451478);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function m(e, t) {
  return {
toValue: e,
duration: null != t ? t : 300,
easing: u.Z.Easing.inOut(u.Z.Easing.back())
  };
}

function p(e, t, n) {
  if (null != t) {
let i = Math.ceil(Math.log10(e + 1));
return null != n && n > 0 ? Math.min(i, n) * t : i * t;
  }
}
(i = s || (s = {}))[i.ABOVE = 0] = 'ABOVE', i[i.VISIBLE = 1] = 'VISIBLE', i[i.BELOW = 2] = 'BELOW';
class g extends(o = l.PureComponent) {
  static getDerivedStateFromProps(e, t) {
let {
  prevValue: n,
  currValue: i,
  nextValue: s
} = t;
return null == n && i !== e.value ? {
  prevValue: d.Z.isFocused() ? i : null,
  currValue: e.value
} : null != s && s !== e.value ? {
  nextValue: e.value
} : null;
  }
  componentDidUpdate(e, t) {
let {
  prevValue: n,
  currValue: i
} = this.state;
n !== t.prevValue && null != n && this.animateBetween(n, i);
  }
  animateBetween(e, t) {
let n;
let {
  forcePosition: i,
  animationSpeed: s
} = this.props;
this.prevAnimate.setValue(1), null != i ? 0 === i ? (this.currAnimate.setValue(0), n = 2) : 2 === i && (this.currAnimate.setValue(2), n = 0) : e > t ? (this.currAnimate.setValue(0), n = 2) : (this.currAnimate.setValue(2), n = 0), u.Z.parallel([
  u.Z.timing(this.prevAnimate, m(n, s)),
  u.Z.timing(this.currAnimate, m(1, s))
]).start(this.animateNext);
  }
  getAnimatedStyle(e) {
let {
  animationColor: t
} = this.props;
return {
  transform: [{
    translateY: e.interpolate({
      inputRange: [
        0,
        1,
        2
      ],
      outputRange: [
        '-100%',
        '0%',
        '100%'
      ]
    })
  }],
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ...null != t && {
    color: t
  }
};
  }
  getMinWidth(e) {
let {
  digitWidth: t,
  padStartLength: n
} = this.props;
return p(e, t, n);
  }
  padValue(e) {
let {
  padStartLength: t
} = this.props;
return null != t ? String(e).padStart(t, '0') : e;
  }
  render() {
let {
  prevValue: e,
  currValue: t
} = this.state, {
  color: n,
  formatString: i
} = this.props, s = c().omit(this.props, [
  'value',
  'digitWidth',
  'padStartLength',
  'forcePosition'
]);
if (null == e)
  return (0, a.jsx)('div', {
    ...s,
    style: {
      color: n,
      minWidth: this.getMinWidth(t)
    },
    children: null != i ? i(this.padValue(t)) : this.padValue(t)
  });
let o = Math.max(e, t);
return (0, a.jsxs)('div', {
  ...s,
  style: {
    color: n,
    position: 'relative',
    overflow: 'hidden'
  },
  children: [
    (0, a.jsx)('div', {
      style: {
        visibility: 'hidden',
        minWidth: this.getMinWidth(o)
      },
      children: this.padValue(o)
    }),
    (0, a.jsx)(u.Z.div, {
      style: {
        color: n,
        ...this.getAnimatedStyle(this.prevAnimate)
      },
      children: null != i ? i(this.padValue(e)) : this.padValue(e)
    }),
    (0, a.jsx)(u.Z.div, {
      style: {
        color: n,
        ...this.getAnimatedStyle(this.currAnimate)
      },
      children: null != i ? i(this.padValue(t)) : this.padValue(t)
    })
  ]
});
  }
  constructor(e) {
super(e), h(this, 'prevAnimate', void 0), h(this, 'currAnimate', void 0), h(this, 'animateNext', () => {
  let {
    currValue: e,
    nextValue: t
  } = this.state;
  null != t ? this.setState({
    prevValue: d.Z.isFocused() ? e : null,
    currValue: t,
    nextValue: null
  }) : this.setState({
    prevValue: null
  });
}), this.state = {
  prevValue: null,
  currValue: e.value,
  nextValue: null
}, this.prevAnimate = new u.Z.Value(0), this.currAnimate = new u.Z.Value(1);
  }
}
h(g, 'Positions', s);