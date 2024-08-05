n.d(t, {
  Z: function() {
return I;
  }
}), n(411104), n(47120);
var r, i, a, s, o, l = n(735250),
  u = n(470079),
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = (e, t) => {
  let {
x: n,
y: r
  } = e, {
x: i,
y: a
  } = t;
  return Math.pow(n - i, 2) + Math.pow(r - a, 2);
};

function E(e, t, n, r, i) {
  let {
top: a,
bottom: s,
left: o,
right: l
  } = e;
  if (null == a && null == s ? (a = 0, s = n - i) : null == a && null != s ? a = n - (s + i) : null != a && (s = n - (a + i)), null == o && null == l ? (o = 0, l = t - r) : null == o && null != l ? o = t - (l + r) : null == l && null != o && (l = t - (o + r)), null == a || null == s || null == o || null == l)
throw Error('Logically this can never happen based on our if/else statements');
  return {
top: a,
left: o,
bottom: s,
right: l
  };
}
(s = r || (r = {}))[s.DISABLED = 0] = 'DISABLED', s[s.DEFAULT = 1] = 'DEFAULT', s[s.OFFSET = 2] = 'OFFSET', (o = i || (i = {})).TOP = 'TOP', o.BOTTOM = 'BOTTOM', o.RIGHT = 'RIGHT', o.LEFT = 'LEFT';

function f(e) {
  return [
null == e.bottom ? 'TOP' : 'BOTTOM',
null == e.right ? 'LEFT' : 'RIGHT'
  ];
}

function h(e) {
  let {
top: t,
left: n,
bottom: r,
right: i
  } = e;
  return 0 === t || t <= r ? r = null : t = null, 0 === n || n <= i ? i = null : n = null, {
top: t,
left: n,
bottom: r,
right: i
  };
}

function p(e) {
  let {
top: t,
left: n,
bottom: r,
right: i
  } = e;
  return r < 0 && (t += r, r = 0), t < 0 && (r += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
top: t,
left: n,
bottom: r,
right: i
  };
}

function m(e) {
  return null != e ? ''.concat(e, 'px') : 'auto';
}
class I extends(a = u.PureComponent) {
  componentDidMount() {
this.checkBounds(), this.setDOMPositions(this.position);
  }
  componentDidUpdate(e, t) {
let {
  state: {
    verticalOrientation: n,
    horizontalOrientation: r,
    atTopEdge: i
  },
  props: {
    maxX: a,
    maxY: s,
    onRelocated: o,
    snapOrientation: l
  }
} = this;
(e.maxX !== a || e.maxY !== s || e.onRelocated !== o || e.snapOrientation !== l || t.verticalOrientation !== n || t.horizontalOrientation !== r || t.atTopEdge !== i) && this.checkBounds();
  }
  componentWillUnmount() {
window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp);
  }
  setDOMPositions(e) {
let {
  top: t,
  left: n,
  bottom: r,
  right: i
} = e, {
  draggableRef: {
    current: a
  }
} = this;
if (this.position = {
    top: t,
    left: n,
    bottom: r,
    right: i
  }, null != a)
  a.style.top = m(t), a.style.bottom = m(r), a.style.left = m(n), a.style.right = m(i);
  }
  render() {
let {
  children: e,
  className: t
} = this.props, {
  dragging: n,
  verticalOrientation: r,
  horizontalOrientation: i,
  atTopEdge: a
} = this.state, {
  top: s,
  left: o,
  right: c,
  bottom: d
} = this.position;
return (0, l.jsx)('div', {
  ref: this.draggableRef,
  className: t,
  onMouseDown: this.handleMouseDown,
  style: {
    pointerEvents: n ? 'none' : 'auto',
    position: 'absolute',
    top: s,
    left: o,
    bottom: d,
    right: c
  },
  children: u.cloneElement(u.Children.only(e), {
    flipped: 'RIGHT' === i,
    verticalFlipped: 'BOTTOM' === r,
    checkBounds: this.checkBounds,
    atTopEdge: a
  })
});
  }
  constructor(e) {
super(e), d(this, 'draggableRef', u.createRef()), d(this, '_dragStart', {
  x: 0,
  y: 0
}), d(this, '_offsetX', void 0), d(this, '_offsetY', void 0), d(this, 'position', void 0), d(this, 'handleMouseDown', e => {
  let {
    top: t,
    left: n,
    bottom: r,
    right: i
  } = this.position, {
    dragAnywhere: a,
    selector: s,
    maxX: o,
    maxY: l
  } = this.props, {
    target: u
  } = e, {
    current: d
  } = this.draggableRef;
  if (null != d && e.button === c.AeJ.PRIMARY && (a || null != u && null != s && '' !== s && null != u.closest(s))) {
    let {
      x: a,
      y: s
    } = function(e) {
      let {
        top: t,
        left: n
      } = e;
      return {
        x: n,
        y: t
      };
    }(E({
      top: t,
      left: n,
      bottom: r,
      right: i
    }, o, l, d.clientWidth, d.clientHeight));
    this._dragStart = {
      x: e.clientX,
      y: e.clientY
    }, this._offsetX = e.clientX - a, this._offsetY = e.clientY - s, window.addEventListener('mousemove', this.handleMouseMove), window.addEventListener('mouseup', this.handleMouseUp);
  }
}), d(this, 'handleMouseMove', e => {
  e.preventDefault();
  let {
    clientX: t,
    clientY: n
  } = e, {
    current: r
  } = this.draggableRef, {
    maxX: i,
    maxY: a,
    flipVertical: s,
    flipHorizontal: o,
    onDragStart: l,
    onDrag: u,
    onFlip: c,
    snapOrientation: d
  } = this.props, {
    dragging: m,
    dragging: I,
    verticalOrientation: T,
    horizontalOrientation: g
  } = this.state, S = !1;
  if (null == r || !m && 9 > _(this._dragStart, {
      x: t,
      y: n
    }))
    return;
  m = !0;
  let {
    clientWidth: A,
    clientHeight: N
  } = r, v = n - this._offsetY, O = p(E({
    top: v,
    left: t - this._offsetX
  }, i, a, A, N));
  if (d) {
    let e = f(O = h(O));
    T = e[0], g = e[1];
  } else
    O = {
      top: O.top,
      left: O.left
    };
  2 === o && g !== this.state.horizontalOrientation && (this._offsetX = A - this._offsetX, S = !0), 2 === s && T !== this.state.verticalOrientation && (this._offsetY = N - this._offsetY, S = !0), this.setDOMPositions(O), !I && (null == l || l(O, r)), null == u || u(O, r), S && (null == c || c([
    T,
    g
  ])), this.setState({
    dragging: m,
    verticalOrientation: T,
    horizontalOrientation: g,
    atTopEdge: 0 === O.top
  });
}), d(this, 'handleMouseUp', () => {
  window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp), this.state.dragging && this.setState({
    dragging: !1
  }, () => {
    let {
      onDragEnd: e
    } = this.props, {
      current: t
    } = this.draggableRef;
    null != t && null != e && e(this.position, t);
  });
}), d(this, '_checkBoundsRAF', null), d(this, 'checkBounds', () => {
  null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds);
}), d(this, '_performCheckBounds', () => {
  let e;
  let {
    position: t,
    state: n,
    draggableRef: {
      current: r
    },
    props: {
      maxX: i,
      maxY: a,
      onRelocated: s,
      snapOrientation: o
    }
  } = this, {
    verticalOrientation: l,
    horizontalOrientation: u
  } = this.state;
  if (null == r)
    return;
  let {
    clientHeight: c,
    clientWidth: d
  } = r, _ = E(t, i, a, d, c);
  if (_ = p(_), o) {
    let t = f(e = h(_));
    l = t[0], u = t[1];
  } else
    e = {
      top: _.top,
      left: _.left,
      right: null,
      bottom: null
    };
  if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom)
    return;
  null == s || s(e, r), this.setDOMPositions(e);
  let m = 0 === e.top;
  (l !== n.verticalOrientation || u !== n.horizontalOrientation || m !== n.atTopEdge) && this.setState({
    verticalOrientation: l,
    horizontalOrientation: u,
    atTopEdge: m
  });
});
let [t, n] = f(e.initialPosition);
this.position = function(e) {
  let {
    top: t,
    left: n,
    bottom: r,
    right: i
  } = e;
  return null == n && null == i && (n = 0), null != n && null != i && (i = null), null == t && null == r && (t = 0), null != t && null != r && (r = null), {
    top: t,
    left: n,
    bottom: r,
    right: i
  };
}(e.initialPosition), this.state = {
  dragging: !1,
  verticalOrientation: t,
  horizontalOrientation: n,
  atTopEdge: 0 === this.position.top
};
  }
}
d(I, 'FlipTypes', r), d(I, 'defaultProps', {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
});