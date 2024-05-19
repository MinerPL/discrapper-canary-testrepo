"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
  }
}), n("47120"), n("653041");
var o, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  a = n.n(r),
  l = n("299608"),
  c = n.n(l),
  u = n("748780"),
  d = n("215569"),
  p = n("376641"),
  h = n("714338"),
  f = n("134432"),
  m = n("494735"),
  C = n("585483"),
  g = n("981631"),
  A = n("183641");

function E(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let L = {
  friction: 10,
  tension: 100
};

function O(t, e) {
  return (t % e + e) % e
}
class N extends i.Component {
  componentWillEnter(t) {
    let {
      directionHistory: e
    } = this.props, {
      translate: n,
      opacity: o
    } = this.state;
    n.setValue(e[e.length - 1]), o.setValue(0), t(), u.default.parallel([u.default.timing(o, {
      toValue: 1,
      easing: u.default.Easing.out(u.default.Easing.linear),
      duration: 200
    }), u.default.spring(n, {
      toValue: 0,
      ...L
    })]).start()
  }
  componentWillLeave(t) {
    let {
      directionHistory: e
    } = this.props, {
      opacity: n,
      translate: o
    } = this.state;
    u.default.parallel([u.default.timing(n, {
      toValue: 0,
      easing: u.default.Easing.in(u.default.Easing.linear),
      duration: 200
    }), u.default.spring(o, {
      toValue: -1 * e[e.length - 1],
      ...L
    })]).start(t)
  }
  getStyle() {
    let {
      translate: t,
      opacity: e
    } = this.state;
    return u.default.accelerate({
      opacity: e,
      transform: [{
        translateX: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "300px"]
        })
      }]
    })
  }
  render() {
    let {
      item: t
    } = this.props, {
      className: e
    } = this.props;
    return (0, s.jsx)(u.default.img, {
      src: t.src,
      alt: "",
      className: a()(A.slide, e),
      style: this.getStyle()
    })
  }
  constructor(...t) {
    super(...t), E(this, "state", {
      translate: new u.default.Value(0),
      opacity: new u.default.Value(1)
    })
  }
}
class _ extends(o = i.Component) {
  componentDidMount() {
    this.preloadNextImages(), h.default.disable(), h.default.enableTemp(p.MODAL_CAROUSEL_LAYOUT), C.ComponentDispatch.subscribe(g.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.ComponentDispatch.subscribe(g.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  componentWillUnmount() {
    h.default.disableTemp(), C.ComponentDispatch.unsubscribe(g.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.ComponentDispatch.unsubscribe(g.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  preloadNextImages() {
    var t, e;
    let {
      currentIndex: n
    } = this.state, {
      items: o
    } = this.props;
    let s = ((n + 1) % (t = o.length) + t) % t;
    let i = ((n - 1) % (e = o.length) + e) % e;
    this.preloadImage(o[s]), this.preloadImage(o[i])
  }
  preloadImage(t) {
    (0, f.loadImage)(t.src)
  }
  componentDidUpdate(t, e) {
    let {
      currentIndex: n
    } = this.state;
    n !== e.currentIndex && this.preloadNextImages()
  }
  navigateTo(t) {
    var e, n, o;
    let {
      directionHistory: s,
      currentIndex: i
    } = this.state;
    s.push(t - i), t = (t % (o = this.props.items.length) + o) % o, this.setState({
      currentIndex: t,
      directionHistory: s
    }), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t)
  }
  render() {
    var t;
    let {
      className: e
    } = this.props, {
      currentIndex: n,
      directionHistory: o
    } = this.state, {
      modalCarouselItemClassName: i
    } = this.props, r = this.props.items[n], l = this.props.items;
    return (0, s.jsxs)(d.TransitionGroup, {
      component: "div",
      className: a()(A.wrapper, e),
      children: [l.length > 1 ? (0, s.jsx)(m.CarouselPrevious, {
        className: A.navPrev,
        onClick: this.gotoPrev
      }) : null, null !== (t = r.component) && void 0 !== t ? t : (0, s.jsx)(N, {
        item: r,
        directionHistory: o,
        className: i
      }, r.src), l.length > 1 ? (0, s.jsx)(m.CarouselNext, {
        className: A.navNext,
        onClick: this.gotoNext
      }) : null]
    })
  }
  constructor(t) {
    super(t), E(this, "gotoNext", () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t + 1)
    }), E(this, "gotoPrev", () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t - 1)
    }), E(this, "gotoNextThrottled", c()(this.gotoNext, 300)), E(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)), this.state = {
      currentIndex: t.startWith,
      directionHistory: []
    }
  }
}
E(_, "defaultProps", {
  startWith: 0
})