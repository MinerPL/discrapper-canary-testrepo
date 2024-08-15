n.d(t, {
  i: function() {
return g;
  }
}), n(724458), n(411104);
var r, i, a, s = n(735250),
  o = n(470079),
  l = n(120356),
  u = n.n(l),
  c = n(392711),
  d = n.n(c),
  _ = n(374470),
  E = n(84735),
  f = n(981729),
  h = n(607070),
  p = n(563334);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function I(e, t) {
  let n = 0;
  for (let r = 0; r < t.length; r++) {
let i = t[r];
if (e === i)
  return r;
if (e < i) {
  if (0 === n || i - e < n)
    return r;
  return r - 1;
}
n = e - i;
  }
  return null;
}
(a = r || (r = {}))[a.ABOVE = 0] = 'ABOVE', a[a.BELOW = 1] = 'BELOW';

function T(e) {
  return {
value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
initialValueProp: e.initialValue,
newClosestIndex: null,
... function(e) {
  let {
    markers: t,
    initialValue: n,
    minValue: r,
    maxValue: i,
    equidistant: a
  } = e, s = [], o = [];
  if (null == t)
    return {
      min: r,
      max: i,
      range: i - r,
      sortedMarkers: s,
      markerPositions: o
    };
  let l = I(n, s = t.sort((e, t) => e - t)),
    u = s[0],
    c = s[s.length - 1],
    d = c - u;
  if (a) {
    let e = 100 / (s.length - 1);
    o = s.map((t, n) => n * e);
  } else {
    let e = e => 100 * (e - u) / d;
    o = s.map(t => e(t));
  }
  return {
    min: u,
    max: c,
    range: d,
    sortedMarkers: s,
    markerPositions: o,
    closestMarkerIndex: l
  };
}(e)
  };
}
class g extends(i = o.PureComponent) {
  static getDerivedStateFromProps(e, t) {
return e.initialValue !== t.initialValueProp ? {
  ...T(e),
  active: t.active
} : null;
  }
  componentWillUnmount() {
this.reset();
  }
  renderMark(e) {
let {
  onMarkerRender: t
} = this.props;
return null != t ? t(e) : e;
  }
  render() {
var e;
let {
  value: t,
  active: n,
  focused: r,
  sortedMarkers: i,
  markerPositions: a,
  closestMarkerIndex: o,
  newClosestIndex: l,
  min: c,
  max: d
} = this.state, {
  disabled: _,
  stickToMarkers: m,
  className: I,
  children: T,
  barStyles: g,
  fillStyles: S,
  mini: A,
  hideBubble: N,
  defaultValue: v,
  orientation: O,
  onValueRender: R,
  renderMarker: C,
  getAriaValueText: y,
  barClassName: D,
  grabberClassName: L,
  grabberStyles: b = {},
  markerPosition: M = 0,
  'aria-hidden': P,
  'aria-label': U,
  'aria-labelledby': w,
  'aria-describedby': x
} = this.props, G = 0;
m ? null != a && (null != l ? G = a[l] : null != o && (G = a[o])) : G = this.scaleValue(t);
let k = ''.concat(G, '%'),
  B = null != a && null != i ? a.map((e, t) => {
    let n = i[t],
      r = null != v && v === n,
      a = this.renderMark(n);
    return (0, s.jsx)('div', {
      className: u()(p.mark, {
        [p.defaultValue]: r,
        [p.markAbove]: 0 === M,
        [p.markBelow]: 1 === M
      }),
      style: {
        left: ''.concat(e, '%')
      },
      children: null != C ? C(n) : (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)('div', {
            className: p.markValue,
            children: a
          }),
          (0, s.jsx)('div', {
            className: p['markDash'.concat(null == a ? 'simple' : '')]
          })
        ]
      })
    }, t);
  }) : null,
  F = null != R ? R(t) : ''.concat(G.toFixed(0), '%'),
  V = null !== (e = null == y ? void 0 : y(t)) && void 0 !== e ? e : void 0;
return (0, s.jsx)(E.t, {
  focusTarget: this.containerRef,
  ringTarget: this.grabberRef,
  children: (0, s.jsxs)('div', {
    className: u()(p.slider, I, {
      [p.disabled]: _,
      [p.mini]: A
    }),
    'aria-valuemin': c,
    'aria-valuemax': d,
    'aria-valuenow': t,
    'aria-disabled': _,
    'aria-orientation': O,
    'aria-hidden': P,
    'aria-label': U,
    'aria-labelledby': w,
    'aria-describedby': x,
    'aria-valuetext': V,
    role: 'slider',
    tabIndex: 0,
    onKeyDown: this.handleKeyDown,
    onMouseDown: this.handleContainerMouseDown,
    onFocus: this.onFocus,
    onBlur: this.onBlur,
    ref: this.containerRef,
    children: [
      (0, s.jsx)('div', {
        className: p.track,
        children: B
      }),
      (0, s.jsx)('div', {
        className: u()(p.bar, D),
        style: g,
        children: (0, s.jsx)('div', {
          className: p.barFill,
          style: {
            ...S,
            width: k
          }
        })
      }),
      T,
      (0, s.jsx)('div', {
        className: p.track,
        children: (0, s.jsx)(f.u, {
          color: f.u.Colors.GREY,
          hideOnClick: !1,
          text: N || m ? null : F,
          forceOpen: n || r && h.Z.keyboardModeEnabled,
          children: e => (0, s.jsx)('div', {
            ...e,
            className: u()(p.grabber, L),
            style: {
              ...b,
              left: k
            },
            onMouseDown: this.handleMouseDown,
            ref: this.grabberRef
          })
        })
      })
    ]
  })
});
  }
  reset() {
var e, t, n, r;
null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener('mousemove', this.handleMouseMove, !0), null === (r = this.containerRef.current) || void 0 === r || null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener('mouseup', this.handleMouseUp, !0);
  }
  scaleValue(e) {
return 100 * (e - this.state.min) / this.state.range;
  }
  unscaleValue(e) {
return e * this.state.range / 100 + this.state.min;
  }
  focus() {
var e;
null === (e = this.containerRef.current) || void 0 === e || e.focus();
  }
  blur() {
var e;
null === (e = this.containerRef.current) || void 0 === e || e.blur();
  }
  moveStaggered(e) {
let t;
let {
  boundingRect: n,
  x: r = 0,
  closestMarkerIndex: i,
  markerPositions: a,
  sortedMarkers: s
} = this.state, {
  asValueChanges: o
} = this.props;
if (null == n)
  return;
let {
  left: l,
  right: u
} = n;
if (e.clientX <= l || e.clientX >= u)
  return;
let c = e.clientX - r,
  d = a[i] + c / (u - l) * 100;
null != (t = this.props.equidistant ? I(d, a) : I(this.unscaleValue(d), s)) && (null == o || o(s[t])), this.setState({
  newClosestIndex: t
});
  }
  constructor(e) {
super(e), m(this, 'containerRef', o.createRef()), m(this, 'grabberRef', o.createRef()), m(this, 'moveGrabber', e => {
  let {
    sortedMarkers: t,
    value: n,
    min: r,
    max: i
  } = this.state, {
    asValueChanges: a,
    onValueChange: s,
    stickToMarkers: o
  } = this.props, l = {};
  if (o) {
    let r = t.indexOf(n);
    if (r < 0)
      return;
    let i = r + e,
      a = t[i];
    if (null == a)
      return;
    l.value = a, l.closestMarkerIndex = i, l.newClosestIndex = i;
  } else
    l.value = d().clamp(n + e, r, i);
  this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == s || s(l.value));
}), m(this, 'handleContainerMouseDown', e => {
  let t;
  let {
    disabled: n,
    maxValue: r,
    minValue: i,
    asValueChanges: a,
    onValueChange: s,
    stickToMarkers: o
  } = this.props, {
    sortedMarkers: l,
    markerPositions: u
  } = this.state;
  if (n)
    return;
  let {
    clientX: c,
    currentTarget: d
  } = e;
  if (!(0, _.k)(d))
    return;
  let {
    left: E,
    width: f
  } = d.getBoundingClientRect(), h = (c - E) / f;
  if (o) {
    let {
      nextClosestMarkerIndex: e
    } = u.reduce((e, t, n) => {
      let r = Math.abs(t / 100 - h);
      return r <= e.smallestDelta ? {
        smallestDelta: r,
        nextClosestMarkerIndex: n
      } : e;
    }, {
      smallestDelta: 1,
      nextClosestMarkerIndex: -1
    });
    if (-1 === e)
      return;
    this.setState({
      closestMarkerIndex: e
    }), t = l[e];
  } else
    t = i + (r - i) * h, this.setState({
      value: t
    }), this.handleMouseDown(e);
  null != s && s(t), null != a && a(t);
}), m(this, 'handleKeyDown', e => {
  let {
    disabled: t,
    orientation: n,
    keyboardStep: r = 1
  } = this.props;
  if (t)
    return;
  let {
    key: i
  } = e, a = [], s = [];
  switch (n) {
    case 'horizontal':
      a = ['ArrowRight'], s = ['ArrowLeft'];
      break;
    case 'vertical':
      a = ['ArrowUp'], s = ['ArrowDown'];
      break;
    default:
      a = [
        'ArrowRight',
        'ArrowUp'
      ], s = [
        'ArrowLeft',
        'ArrowDown'
      ];
  }
  s.includes(i) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r)) : a.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
}), m(this, 'handleMouseDown', e => {
  var t, n;
  if (this.props.disabled)
    return;
  e.stopPropagation();
  let {
    current: r
  } = this.containerRef;
  if (null == r || null === (t = r.ownerDocument) || void 0 === t || t.addEventListener('mousemove', this.handleMouseMove, !0), null == r || null === (n = r.ownerDocument) || void 0 === n || n.addEventListener('mouseup', this.handleMouseUp, !0), !(0, _.k)(r))
    throw Error('[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element');
  this.setState({
    x: e.clientX,
    active: !0,
    boundingRect: r.getBoundingClientRect(),
    newClosestIndex: this.state.closestMarkerIndex
  });
}), m(this, 'handleMouseUp', e => {
  e.stopPropagation(), this.reset();
  let {
    onValueChange: t,
    stickToMarkers: n
  } = this.props, {
    newClosestIndex: r
  } = this.state;
  n && null != r ? (null == t || t(this.state.sortedMarkers[r]), this.setState({
    newClosestIndex: null,
    closestMarkerIndex: r
  })) : null == t || t(this.state.value), this.setState({
    active: !1
  });
}), m(this, 'handleMouseMove', e => {
  e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
}), m(this, 'onFocus', () => {
  this.setState({
    focused: !0
  });
}), m(this, 'onBlur', () => {
  this.setState({
    focused: !1
  });
}), m(this, 'moveSmoothly', e => {
  let {
    minValue: t,
    maxValue: n,
    asValueChanges: r
  } = this.props, {
    boundingRect: i
  } = this.state;
  if (null == i)
    return;
  let {
    left: a,
    right: s
  } = i, o = n - t, l = Math.min(Math.max(t + (e.clientX - a) / (s - a) * o, t), n);
  null == r || r(l), this.setState({
    value: l
  });
}), this.state = {
  active: !1,
  focused: !1,
  ...T(e)
};
  }
}
m(g, 'defaultProps', {
  initialValue: 10,
  minValue: 0,
  maxValue: 100,
  keyboardStep: 1,
  handleSize: 10,
  disabled: !1,
  stickToMarkers: !1,
  fillStyles: {}
});