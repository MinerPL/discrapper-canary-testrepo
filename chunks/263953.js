n.d(t, {
  q: function() {
return T;
  }
}), n(47120);
var r, i, a, s, o, l, u = n(735250),
  c = n(470079),
  d = n(120356),
  _ = n.n(d),
  E = n(748780),
  f = n(215569),
  h = n(186325),
  p = n(412014);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(o = r || (r = {}))[o.ENTERING = 0] = 'ENTERING', o[o.LEAVING = 1] = 'LEAVING', o[o.APPEARING = 2] = 'APPEARING', o[o.STATIC = 3] = 'STATIC', (l = i || (i = {})).SLIDE = 'slide', l.LIFT = 'lift';
class I extends(a = c.PureComponent) {
  componentDidMount() {
if (null != this._measureRef.current) {
  let {
    height: e
  } = this._measureRef.current.getBoundingClientRect();
  this.setState({
    targetHeight: e,
    baseHeight: this.props.getBaseHeight()
  });
}
  }
  componentDidUpdate(e, t) {
t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight);
  }
  componentWillAppear(e) {
this.setState({
  animationState: 2
}), e();
  }
  componentDidAppear() {
let {
  animationProgress: e,
  targetHeight: t
} = this.state;
e.setValue(2), this.setState({
  animationState: 3,
  baseHeight: t
});
  }
  componentWillEnter(e) {
let {
  duration: t
} = this.props, {
  animationProgress: n
} = this.state;
this.setState({
  animationState: 0
}), this.props.setHeight(this.state.targetHeight), E.Z.timing(n, {
  toValue: 2,
  duration: t,
  delay: t / 2
}).start(e);
  }
  componentDidEnter() {
this.setState({
  animationState: 3
});
  }
  componentWillLeave(e) {
let {
  animationProgress: t
} = this.state, {
  duration: n,
  getDirection: r
} = this.props;
this.direction = r(), this.setState({
  animationState: 1
}), E.Z.timing(t, {
  toValue: 0,
  duration: n
}).start(e);
  }
  componentDidLeave() {
this.setState({
  animationState: 3
});
  }
  getMotionAnimation() {
let {
  reducedMotion: e
} = this.context;
if (e.enabled)
  return null;
let {
  animationMotionType: t
} = this.props, {
  animationProgress: n,
  animationState: r
} = this.state, i = (1 === r ? -1 : 1) * this.direction;
switch (t) {
  case 'slide':
    return {
      transform: [{
        translateX: n.interpolate({
          inputRange: [
            0,
            2
          ],
          outputRange: [
            ''.concat(150 * i, '%'),
            '0%'
          ],
          extrapolate: 'clamp',
          easing: E.Z.Easing.inOut(E.Z.Easing.ease)
        })
      }]
    };
  case 'lift':
    return {
      transform: [{
        translateY: n.interpolate({
          inputRange: [
            0,
            2
          ],
          outputRange: [
            ''.concat(10 * i, '%'),
            '0%'
          ],
          extrapolate: 'clamp',
          easing: E.Z.Easing.inOut(E.Z.Easing.ease)
        })
      }]
    };
  default:
    return null;
}
  }
  getAnimatedStyle() {
var e, t;
let {
  fillParent: n
} = this.props, {
  animationProgress: r,
  animationState: i,
  baseHeight: a,
  targetHeight: s
} = this.state, o = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, u = 1 === i, c = 0 === i;
return {
  overflow: c || u ? 'hidden' : 'visible',
  position: u ? 'absolute' : void 0,
  top: u ? l : void 0,
  left: u ? o : void 0,
  right: u ? o : void 0,
  bottom: u ? l : void 0,
  ...this.getMotionAnimation(),
  opacity: r.interpolate({
    inputRange: [
      0,
      2
    ],
    outputRange: [
      0,
      1
    ],
    extrapolate: 'clamp',
    easing: E.Z.Easing.inOut(E.Z.Easing.ease)
  }),
  height: c ? r.interpolate({
    inputRange: [
      0,
      1
    ],
    outputRange: [
      a,
      s
    ],
    extrapolate: 'clamp',
    easing: E.Z.Easing.inOut(E.Z.Easing.ease)
  }) : n ? '100%' : 'auto'
};
  }
  render() {
let {
  fillParent: e,
  className: t,
  animatedNodeClassName: n,
  staticClassName: r
} = this.props, {
  animationState: i
} = this.state;
return e ? (0, u.jsx)('div', {
  ref: this._measureRef,
  className: _()(p.measurementFill, t, {
    [_()(p.measurementFillStatic, r)]: 3 === i
  }),
  children: (0, u.jsx)(E.Z.div, {
    className: _()(p.animatedNode, n),
    style: this.getAnimatedStyle(),
    children: this.props.children
  })
}) : (0, u.jsx)('div', {
  ref: this._measureRef,
  className: _()(p.measurement, t),
  children: (0, u.jsx)(E.Z.div, {
    className: _()(p.animatedNode, n),
    style: this.getAnimatedStyle(),
    children: this.props.children
  })
});
  }
  constructor(...e) {
super(...e), m(this, 'state', {
  animationProgress: new E.Z.Value(0),
  targetHeight: 0,
  baseHeight: 0,
  animationState: null
}), m(this, 'direction', this.props.getDirection()), m(this, '_measureRef', c.createRef());
  }
}
m(I, 'contextType', h.S), m(I, 'defaultProps', {
  duration: 300
});
class T extends(s = c.Component) {
  componentDidMount() {
this.setPrevSteps();
  }
  componentDidUpdate() {
this.setPrevSteps();
  }
  setPrevSteps() {
let {
  step: e,
  steps: t
} = this.props;
this.prevStep = e, this.prevSteps = t;
  }
  render() {
let {
  step: e,
  className: t,
  innerClassName: n,
  animatedNodeClassName: r,
  staticClassName: i,
  sideMargin: a,
  verticalMargin: s,
  children: o,
  fillParent: l,
  animationMotionType: c
} = this.props;
return (0, u.jsx)(f.W, {
  component: 'div',
  className: _()(p.transitionGroup, t),
  children: (0, u.jsx)(I, {
    fillParent: l,
    sideMargin: a,
    animationMotionType: null != c ? c : 'slide',
    verticalMargin: s,
    getDirection: this.getDirection,
    getBaseHeight: this.getBaseHeight,
    className: n,
    animatedNodeClassName: r,
    staticClassName: i,
    setHeight: this.setHeight,
    children: o
  }, ''.concat(e))
});
  }
  constructor(...e) {
super(...e), m(this, 'stepHeights', {}), m(this, 'prevStep', null), m(this, 'prevSteps', []), m(this, 'getBaseHeight', () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0), m(this, 'getDirection', () => {
  let {
    steps: e,
    step: t
  } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, r = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
  return Math.max(n, r) > e.indexOf(t) ? -1 : 1;
}), m(this, 'setHeight', e => {
  let {
    step: t
  } = this.props;
  this.stepHeights[t] = e;
});
  }
}
m(T, 'defaultProps', {
  fillParent: !1,
  animationMotionType: 'slide'
});