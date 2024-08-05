var r, i = n(735250),
  a = n(470079),
  s = n(699581),
  o = n(748780),
  l = n(374470),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = (e, t) => {
  let {
x: n,
y: r
  } = e, {
x: i,
y: a
  } = t;
  return Math.pow(n - i, 2) + Math.pow(r - a, 2);
};
class _ extends(r = a.PureComponent) {
  componentDidMount() {
let {
  initialX: e,
  initialY: t
} = this.props;
this.setPosition(e, t);
  }
  componentWillUnmount() {
this._removeListeners();
  }
  animateToPosition(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
  r = arguments.length > 3 ? arguments[3] : void 0,
  i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
i && this.grabDimensions();
let a = this.translate(e, t);
o.Z.spring(this.state.position, {
  toValue: {
    x: a.x,
    y: a.y
  },
  ...n
}).start(r);
  }
  setPosition(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
n && this.grabDimensions();
let r = this.translate(e, t);
this.state.position.setValue({
  x: r.x,
  y: r.y
});
  }
  grabDimensions() {
let e = (0, s.findDOMNode)(this._ref);
(0, l.k)(e) && (this._height = e.clientHeight, this._width = e.clientWidth);
  }
  translate(e, t) {
let {
  maxX: n,
  maxY: r
} = this.props;
return e < 0 ? e = 0 : e > n - this._width && (e = n - this._width), t < 0 ? t = 0 : t > r - this._height && (t = r - this._height), {
  x: e,
  y: t
};
  }
  render() {
let {
  dragging: e,
  position: t
} = this.state, {
  className: n,
  children: r
} = this.props, a = [
  0,
  1
], s = [
  '0px',
  '1px'
], l = o.Z.accelerate({
  pointerEvents: e ? 'none' : 'auto',
  transform: [{
      translateX: t.x.interpolate({
        inputRange: a,
        outputRange: s
      })
    },
    {
      translateY: t.y.interpolate({
        inputRange: a,
        outputRange: s
      })
    }
  ],
  ...this.props.style
});
return (0, i.jsx)(o.Z.div, {
  ref: this.handleSetRef,
  className: n,
  onMouseDown: this.handleMouseDown,
  style: l,
  children: r
});
  }
  constructor(e) {
super(e), c(this, '_ref', void 0), c(this, '_height', 0), c(this, '_width', 0), c(this, '_dragStart', {
  x: 0,
  y: 0
}), c(this, '_offsetX', 0), c(this, '_offsetY', 0), c(this, '_removeListeners', () => {}), c(this, 'handleSetRef', e => {
  this._ref = e;
}), c(this, 'handleMouseDown', e => {
  let {
    dragAnywhere: t,
    disabled: n,
    selector: r
  } = this.props;
  if (n)
    return;
  let {
    position: i
  } = this.state, a = e.target;
  if (e.button === u.AeJ.PRIMARY && (t || null != r && a.matches(r))) {
    this.grabDimensions(), this._dragStart = {
      x: e.clientX,
      y: e.clientY
    }, this._offsetX = e.clientX - i.x._value, this._offsetY = e.clientY - i.y._value;
    let t = e.nativeEvent.view;
    this._removeListeners(), t.addEventListener('mousemove', this.handleMouseMove), t.addEventListener('mouseup', this.handleMouseUp), this._removeListeners = () => {
      t.removeEventListener('mousemove', this.handleMouseMove), t.removeEventListener('mouseup', this.handleMouseUp);
    };
  }
}), c(this, 'handleMouseMove', e => {
  e.preventDefault();
  let {
    onDragStart: t,
    onDrag: n,
    disabled: r
  } = this.props;
  if (r)
    return;
  let {
    dragging: i,
    dragging: a
  } = this.state;
  if (!i && d(this._dragStart, {
      x: e.clientX,
      y: e.clientY
    }) > 9 && (i = !0), !!i)
    this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
      tension: 80,
      friction: 8
    }, null, !1), this.setState({
      dragging: i
    }, () => {
      !a && (null == t || t(e.clientX, e.clientY)), null == n || n(e.clientX, e.clientY);
    });
}), c(this, 'handleMouseUp', e => {
  this._removeListeners(), this.state.dragging && this.setState({
    dragging: !1
  }, () => {
    let {
      onDragEnd: t
    } = this.props;
    null == t || t(e.clientX, e.clientY);
  });
});
let t = new o.Z.Value(e.initialX),
  n = new o.Z.Value(e.initialY);
this.state = {
  dragging: !1,
  position: new o.Z.ValueXY({
    x: t,
    y: n
  })
};
  }
}
c(_, 'defaultProps', {
  maxX: 0,
  maxY: 0,
  initialX: 0,
  initialY: 0,
  disabled: !1,
  dragAnywhere: !1
}), t.Z = _;