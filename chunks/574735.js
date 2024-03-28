"use strict";
n.r(t), n.d(t, {
  normalizeIndex: function() {
    return m
  }
}), n("47120"), n("411104");
var s, a = n("735250"),
  i = n("470079"),
  r = n("803997"),
  l = n.n(r),
  o = n("748780"),
  d = n("112724"),
  u = n("904222");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
    tension: 7,
    friction: 5,
    overshootClamping: !0
  },
  p = {
    CENTER: "center",
    RIGHT: "right"
  };

function m(e, t) {
  return (e % t + t) % t
}
class g extends(s = i.Component) {
  componentDidMount() {
    this.animatedIndex.setValue(this.props.currentIndex)
  }
  componentDidUpdate(e) {
    let {
      align: t,
      animate: n,
      currentIndex: s,
      items: a,
      width: i
    } = this.props, r = m(s, a.length), l = m(e.currentIndex, a.length);
    (r !== l || a.length !== e.items.length) && this.updateAnimatedIndex(r, l), i !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || r !== l) && o.default.spring(this.animatedAlignmentOffset, {
      ...c,
      toValue: this.getAlignmentOffset(t)
    }).start()
  }
  getAlignmentOffset(e) {
    let {
      width: t,
      itemSize: n,
      currentIndex: s,
      gutter: a,
      items: i
    } = this.props, r = a * m(s, i.length) * 2;
    return e === p.CENTER ? (t - n.width) / 2 + r : e === p.RIGHT ? t - n.width - a + r : a + r
  }
  getCarouselTranslate() {
    let {
      itemSize: e,
      edgeItems: t
    } = this.props;
    return t * (e.width + e.margin)
  }
  animateToIndex(e, t) {
    let {
      animatedIndex: n
    } = this, {
      items: s,
      edgeItems: a
    } = this.props;
    a > 0 && (0 === e && t === s.length - 1 ? n.setValue(-1) : 0 === t && e === s.length - 1 && s.length > 2 && n.setValue(s.length)), o.default.spring(n, {
      ...c,
      toValue: e
    }).start()
  }
  updateAnimatedIndex(e, t) {
    let {
      animatedIndex: n,
      animatedOpacity: s
    } = this, {
      animate: a
    } = this.props;
    a ? this.animateToIndex(e, t) : o.default.timing(s, {
      fromValue: 1,
      toValue: 0,
      duration: 100
    }).start(() => {
      n.setValue(e), o.default.timing(s, {
        fromValue: 0,
        toValue: 1,
        duration: 100
      }).start()
    })
  }
  renderSingleItem() {
    let {
      renderItem: e,
      items: t,
      itemSize: n,
      className: s
    } = this.props;
    return (0, a.jsx)("div", {
      className: l()(u.singleItemWrapper, u.viewport, s),
      children: (0, a.jsx)("div", {
        className: u.singleItem,
        style: {
          width: n.width,
          height: n.height
        },
        children: e(t[0], 0)
      })
    })
  }
  renderCarouselItems() {
    let e;
    let {
      animatedIndex: t,
      animatedAlignmentOffset: n,
      animatedOpacity: s
    } = this, {
      renderItem: i,
      items: r,
      itemSize: l,
      edgeItems: d,
      gutter: h
    } = this.props, {
      margin: c,
      width: p
    } = l, m = this.getCarouselTranslate(), g = this.getItemStyle(), f = (e = d > 0 ? [...r.slice(-d), ...r, ...r.slice(0, d)] : r).map((e, t) => (0, a.jsx)("div", {
      style: g,
      className: u.item,
      children: i(e, t - d, this.interpolateValueForItem(t - d))
    }, t));
    return (0, a.jsx)(o.default.div, {
      className: u.carousel,
      style: {
        opacity: s,
        left: o.default.add(t.interpolate({
          inputRange: [0, 1],
          outputRange: [-m, -c - p - m - h * (r.length - 1)]
        }), n)
      },
      children: f
    })
  }
  render() {
    let {
      items: e,
      className: t,
      hideOverflow: n
    } = this.props;
    if (e.length <= 0) throw Error("Carousel has no items");
    return 1 === e.length ? this.renderSingleItem() : (0, a.jsx)("div", {
      className: l()({
        [u.viewport]: n
      }, t),
      children: this.renderCarouselItems()
    })
  }
  constructor(...e) {
    super(...e), h(this, "animatedIndex", new o.default.Value(this.props.currentIndex)), h(this, "animatedAlignmentOffset", new o.default.Value(this.getAlignmentOffset(this.props.align))), h(this, "animatedOpacity", new o.default.Value(1)), h(this, "getItemStyle", () => {
      let {
        itemSize: {
          width: e,
          margin: t,
          height: n
        }
      } = this.props;
      return {
        flexBasis: e,
        marginRight: t,
        height: n,
        width: e,
        maxWidth: e
      }
    }), h(this, "interpolateValueForItem", e => this.animatedIndex.interpolate({
      inputRange: [e - 1, e, e + 1],
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    }))
  }
}
h(g, "defaultProps", {
  animate: !0,
  edgeItems: 2,
  align: p.CENTER,
  gutter: 0,
  hideOverflow: !0
}), t.default = (0, d.default)(g)