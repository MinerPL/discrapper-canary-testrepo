n.d(e, {
  Z: function() {
return N;
  }
}), n(47120), n(653041);
var a, o = n(735250),
  r = n(470079),
  i = n(120356),
  s = n.n(i),
  l = n(299608),
  c = n.n(l),
  u = n(748780),
  d = n(215569),
  p = n(376641),
  h = n(714338),
  g = n(134432),
  f = n(44488),
  m = n(585483),
  C = n(981631),
  _ = n(903463);

function b(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : t[e] = n, t;
}
let v = {
  friction: 10,
  tension: 100
};

function x(t, e) {
  return (t % e + e) % e;
}
class L extends r.Component {
  componentWillEnter(t) {
let {
  directionHistory: e
} = this.props, {
  translate: n,
  opacity: a
} = this.state;
n.setValue(e[e.length - 1]), a.setValue(0), t(), u.Z.parallel([
  u.Z.timing(a, {
    toValue: 1,
    easing: u.Z.Easing.out(u.Z.Easing.linear),
    duration: 200
  }),
  u.Z.spring(n, {
    toValue: 0,
    ...v
  })
]).start();
  }
  componentWillLeave(t) {
let {
  directionHistory: e
} = this.props, {
  opacity: n,
  translate: a
} = this.state;
u.Z.parallel([
  u.Z.timing(n, {
    toValue: 0,
    easing: u.Z.Easing.in(u.Z.Easing.linear),
    duration: 200
  }),
  u.Z.spring(a, {
    toValue: -1 * e[e.length - 1],
    ...v
  })
]).start(t);
  }
  getStyle() {
let {
  translate: t,
  opacity: e
} = this.state;
return u.Z.accelerate({
  opacity: e,
  transform: [{
    translateX: t.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        '0px',
        '300px'
      ]
    })
  }]
});
  }
  render() {
let {
  item: t
} = this.props, {
  className: e
} = this.props;
return (0, o.jsx)(u.Z.img, {
  src: t.src,
  alt: '',
  className: s()(_.slide, e),
  style: this.getStyle()
});
  }
  constructor(...t) {
super(...t), b(this, 'state', {
  translate: new u.Z.Value(0),
  opacity: new u.Z.Value(1)
});
  }
}
class N extends(a = r.Component) {
  componentDidMount() {
this.preloadNextImages(), h.Z.disable(), h.Z.enableTemp(p.P), m.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), m.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
  }
  componentWillUnmount() {
h.Z.disableTemp(), m.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), m.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
  }
  preloadNextImages() {
var t, e;
let {
  currentIndex: n
} = this.state, {
  items: a
} = this.props;
let o = ((n + 1) % (t = a.length) + t) % t;
let r = ((n - 1) % (e = a.length) + e) % e;
this.preloadImage(a[o]), this.preloadImage(a[r]);
  }
  preloadImage(t) {
(0, g.po)(t.src);
  }
  componentDidUpdate(t, e) {
let {
  currentIndex: n
} = this.state;
n !== e.currentIndex && this.preloadNextImages();
  }
  navigateTo(t) {
var e, n, a;
let {
  directionHistory: o,
  currentIndex: r
} = this.state;
o.push(t - r), t = (t % (a = this.props.items.length) + a) % a, this.setState({
  currentIndex: t,
  directionHistory: o
}), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t);
  }
  render() {
var t;
let {
  className: e
} = this.props, {
  currentIndex: n,
  directionHistory: a
} = this.state, {
  modalCarouselItemClassName: r
} = this.props, i = this.props.items[n], l = this.props.items;
return (0, o.jsxs)(d.W, {
  component: 'div',
  className: s()(_.wrapper, e),
  children: [
    l.length > 1 ? (0, o.jsx)(f.am, {
      className: _.navPrev,
      onClick: this.gotoPrev
    }) : null,
    null !== (t = i.component) && void 0 !== t ? t : (0, o.jsx)(L, {
      item: i,
      directionHistory: a,
      className: r
    }, i.src),
    l.length > 1 ? (0, o.jsx)(f.Pz, {
      className: _.navNext,
      onClick: this.gotoNext
    }) : null
  ]
});
  }
  constructor(t) {
super(t), b(this, 'gotoNext', () => {
  let {
    currentIndex: t
  } = this.state;
  this.navigateTo(t + 1);
}), b(this, 'gotoPrev', () => {
  let {
    currentIndex: t
  } = this.state;
  this.navigateTo(t - 1);
}), b(this, 'gotoNextThrottled', c()(this.gotoNext, 300)), b(this, 'gotoPrevThrottled', c()(this.gotoPrev, 300)), this.state = {
  currentIndex: t.startWith,
  directionHistory: []
};
  }
}
b(N, 'defaultProps', {
  startWith: 0
});