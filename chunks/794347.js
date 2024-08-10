n.d(t, {
  _: function() {
return I;
  }
}), n(47120);
var s, a = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  o = n(692547),
  c = n(477690),
  d = n(162168),
  _ = n(624138),
  u = n(820788);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = (0, _.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH),
  I = Object.freeze({
BLACK: u.black,
GRAY: u.gray
  });
class R extends(s = r.Component) {
  componentDidMount() {
this.computeBars(), window.addEventListener('resize', this.computeBars);
  }
  componentWillUnmount() {
window.removeEventListener('resize', this.computeBars);
  }
  roundToNearestStep(e) {
return Math.round(e / T) * T;
  }
  getProgressStyles() {
let {
  progress: e
} = this.props, t = Math.max(0, Math.min(100, e)), {
  barWidth: n
} = this.state, s = Math.abs(this.roundToNearestStep(n * (100 - t) / 100) - n);
return {
  transform: 'translateX('.concat(s, 'px)')
};
  }
  getGradientStyles() {
let {
  gradientEnd: e,
  gradientStart: t,
  progress: n
} = this.props, {
  barWidth: s
} = this.state;
return {
  width: ''.concat(s, 'px'),
  background: n <= 0 ? 'none' : 'linear-gradient(to right, '.concat(t, ', ').concat(e, ')')
};
  }
  render() {
let {
  className: e,
  notchBackground: t
} = this.props, {
  barWidth: n
} = this.state;
return (0, a.jsx)('div', {
  className: u.wrapper,
  ref: this.sizerRef,
  children: (0, a.jsxs)('div', {
    className: l()(u.container, e),
    style: this.getGradientStyles(),
    children: [
      (0, a.jsx)('div', {
        className: u.progress,
        style: this.getProgressStyles()
      }),
      0 !== n && (0, a.jsx)(d.Z, {
        width: n,
        className: l()(u.notches, t)
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), E(this, 'state', {
  barWidth: 0
}), E(this, 'sizerRef', r.createRef()), E(this, 'computeBars', () => {
  let {
    current: e
  } = this.sizerRef;
  this.setState({
    barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
  });
});
  }
}
E(R, 'defaultProps', {
  gradientStart: o.Z.unsafe_rawColors.YELLOW_260.css,
  gradientEnd: o.Z.unsafe_rawColors.GREEN_360.css
}), t.Z = R;