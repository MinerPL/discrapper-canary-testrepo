n.d(t, {
  j: function() {
return O;
  },
  t: function() {
return g;
  }
}), n(47120), n(411104);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(512722),
  u = n.n(l),
  c = n(84735),
  d = n(801787),
  _ = n(585483),
  E = n(792125),
  f = n(872801),
  h = n(302901),
  p = n(981631),
  m = n(65551);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = new WeakMap();

function g(e, t) {
  if (e.contains(t))
return !0;
  let n = (0, f.Z)(t, m.layer);
  for (; null != n;) {
let t = T.get(n);
if (null == t)
  break;
if (e.contains(t))
  return !0;
n = (0, f.Z)(t, m.layer);
  }
  return !1;
}

function S(e) {
  let {
positionKey: t,
position: n,
align: r
  } = e;
  return null != t ? t : ''.concat(n, ':').concat(r);
}

function A(e, t, n, r) {
  switch (e) {
case 'top':
  return u()(null != t.bottom, 'Missing bottom'), r.offsetHeight - (t.bottom + n.offsetHeight);
case 'bottom':
  return u()(null != t.top, 'Missing top'), r.offsetHeight - (t.top + n.offsetHeight);
case 'left':
  return u()(null != t.right, 'Missing right'), r.offsetWidth - (t.right + n.offsetWidth);
case 'right':
  return u()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth);
case 'center':
case 'window_center':
  return u()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth / 2);
default:
  throw Error('Unexpected position: '.concat(e));
  }
}

function N(e, t, n) {
  if (null != e && e < 0 && ('top' === n.position || 'bottom' === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
let t = 'top' === n.position ? 'bottom' : 'top',
  r = n.style[t];
return {
  ...n,
  style: {
    ...n.style,
    [t]: (null == r ? 0 : r) + e
  }
};
  }
  return n;
}

function v(e) {
  let {
targetRef: t,
overrideTargetRect: n
  } = e;
  return null != n ? n : (u()(null != t.current, 'Invalid ref'), t.current.getBoundingClientRect());
}
class O extends(r = a.Component) {
  formatDimension(e) {
return this.props.useRawTargetDimensions ? e : Math.ceil(e);
  }
  nudgeLeftAlignment(e, t, n) {
let {
  nudgeAlignIntoViewport: r
} = this.props;
if (!r)
  return e;
let i = n.offsetWidth,
  a = e + t.offsetWidth - i + 12;
return a > 0 ? Math.max(12, e - a) : e;
  }
  getHorizontalAlignmentStyle(e, t, n, r) {
let {
  align: i
} = this.props;
switch (i) {
  case 'left': {
    let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
      a = this.formatDimension(e.left) - i;
    return {
      style: {
        ...r,
        left: i
      },
      nudge: a
    };
  }
  case 'right': {
    let t = this.formatDimension(n.offsetWidth - e.right);
    return {
      style: {
        ...r,
        right: t
      },
      nudge: 0
    };
  }
  case 'center': {
    let i = e.left + (e.width - t.offsetWidth) / 2,
      a = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
      s = this.formatDimension(i) - a;
    return {
      style: {
        ...r,
        left: a
      },
      nudge: s
    };
  }
  default:
    throw Error('Unsupported align: '.concat(i));
}
  }
  nudgeTopAlignment(e, t, n) {
let {
  nudgeAlignIntoViewport: r
} = this.props;
if (!r)
  return e;
if (e < 0)
  return 0;
let i = t.getBoundingClientRect().height,
  a = n.offsetHeight,
  s = e + i - a + 12;
return s > 0 ? Math.max(12, e - s) : e;
  }
  nudgeBottomAlignment(e, t, n) {
let {
  nudgeAlignIntoViewport: r
} = this.props, i = n.offsetHeight, a = i - e;
if (!r)
  return a;
let s = a + t.offsetHeight - i + 12;
return s > 0 ? Math.max(12, a - s) : a;
  }
  getVerticalAlignmentStyle(e, t, n, r) {
let {
  align: i
} = this.props;
switch (i) {
  case 'top': {
    let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
      a = this.formatDimension(e.top) - i;
    return {
      style: {
        ...r,
        top: i
      },
      nudge: a
    };
  }
  case 'bottom': {
    let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
      a = this.formatDimension(e.bottom) - i;
    return {
      style: {
        ...r,
        bottom: i
      },
      nudge: a
    };
  }
  case 'center': {
    let i = e.top + (e.height - t.offsetHeight) / 2,
      a = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
      s = this.formatDimension(i) - a;
    return {
      style: {
        ...r,
        top: a
      },
      nudge: s
    };
  }
  default:
    throw Error('Unsupported align: '.concat(i));
}
  }
  calculatePositionStyle(e, t, n) {
var r, i, a;
let {
  spacing: s = 0
} = this.props, o = v(this.props), l = n.getBoundingClientRect();
let u = (r = o, i = l.left, a = l.top, {
  top: r.top - a,
  left: r.left - i,
  bottom: r.bottom - a,
  right: r.right - i,
  width: r.width,
  height: r.height
});
switch (e) {
  case 'top':
    return this.getHorizontalAlignmentStyle(u, t, n, {
      bottom: n.offsetHeight - u.top + s
    });
  case 'bottom':
    return this.getHorizontalAlignmentStyle(u, t, n, {
      top: u.bottom + s
    });
  case 'left':
    return this.getVerticalAlignmentStyle(u, t, n, {
      right: n.offsetWidth - u.left + s
    });
  case 'right':
    return this.getVerticalAlignmentStyle(u, t, n, {
      left: u.right + s
    });
  case 'center':
    return this.getVerticalAlignmentStyle(u, t, n, {
      left: u.left + u.width / 2 - t.offsetWidth / 2 + s
    });
  case 'window_center':
    return this.getVerticalAlignmentStyle(u, t, n, {
      left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
    });
  default:
    throw Error('Unexpected position: '.concat(e));
}
  }
  calculateState() {
let {
  position: e,
  autoInvert: t
} = this.props, n = this.elementRef.current;
u()(null != n, 'Unexpected null element');
let r = (0, h.wL)(n),
  {
    style: i,
    nudge: a
  } = this.calculatePositionStyle(e, n, r),
  s = null,
  o = null;
if (t && (s = A(e, i, n, r)) < 0) {
  let t = function(e) {
      switch (e) {
        case 'top':
          return 'bottom';
        case 'bottom':
          return 'top';
        case 'left':
          return 'right';
        case 'right':
          return 'left';
        case 'center':
          return 'center';
        case 'window_center':
          return 'window_center';
        default:
          throw Error();
      }
    }(e),
    {
      style: i,
      nudge: a
    } = this.calculatePositionStyle(t, n, r);
  if ((o = A(t, i, n, r)) > s)
    return N(o, n, {
      position: t,
      nudge: a,
      style: i
    });
}
return N(s, n, {
  position: e,
  nudge: a,
  style: i
});
  }
  componentDidMount() {
var e, t;
let {
  targetRef: n,
  onMount: r
} = this.props;
this.setState({
  isPositioned: !0,
  ...this.calculateState()
});
let i = this.elementRef.current;
u()(null != i, 'Missing elementRef'), null != n.current && T.set(i, n.current), _.S.subscribe(p.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.subscribe(p.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null === (t = i.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener('resize', this.handleLayerPopComplete), null == r || r();
  }
  componentDidUpdate(e, t) {
if ((S(e) !== S(this.props) || ! function(e, t) {
    let n = v(e),
      r = v(t);
    return n.top === r.top && n.left === r.left;
  }(e, this.props)) && this.updatePosition(), t.position !== this.state.position) {
  var n, r;
  null === (n = (r = this.props).onPositionChange) || void 0 === n || n.call(r, this.state.position);
}
  }
  componentWillUnmount() {
var e, t, n, r;
let i = this.elementRef.current;
u()(null != i, 'Missing elementRef'), T.delete(i), _.S.unsubscribe(p.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.unsubscribe(p.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null === (t = i.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener('resize', this.handleLayerPopComplete), null === (n = (r = this.props).onUnmount) || void 0 === n || n.call(r);
  }
  render() {
let {
  id: e,
  className: t,
  children: n,
  fixed: r,
  disablePointerEvents: a
} = this.props, {
  position: s,
  isPositioned: l,
  isSettingsLayerTransitioning: u,
  nudge: _
} = this.state;
return (0, i.jsx)(d.C1, {
  children: d => {
    let {
      theme: f
    } = d;
    return (0, i.jsx)('div', {
      id: e,
      className: o()(t, (0, E.Q)(f), m.layer, {
        [m.emptyError]: !1,
        [m.layerHidden]: u,
        [m.disabledPointerEvents]: a
      }),
      style: {
        position: r ? 'fixed' : 'absolute',
        ...this.state.style
      },
      ref: this.elementRef,
      children: (0, i.jsx)(c.J, {
        containerRef: this.elementRef,
        children: n({
          position: s,
          nudge: _,
          isPositioned: l
        }, this.updatePosition)
      })
    });
  }
});
  }
  constructor(...e) {
super(...e), I(this, 'elementRef', a.createRef()), I(this, 'state', {
  style: Object.freeze({}),
  position: this.props.autoInvert ? null : this.props.position,
  nudge: 0,
  isPositioned: !1,
  isSettingsLayerTransitioning: !1
}), I(this, 'handleLayerPopStart', () => {
  this.setState({
    isSettingsLayerTransitioning: !0
  });
}), I(this, 'handleLayerPopComplete', () => {
  let e = this.calculateState();
  this.setState({
    ...e,
    isSettingsLayerTransitioning: !1
  });
}), I(this, 'updatePosition', () => {
  this.setState(this.calculateState());
});
  }
}
I(O, 'defaultProps', {
  nudgeAlignIntoViewport: !1,
  spacing: 0,
  autoInvert: !1,
  disablePointerEvents: !1
});