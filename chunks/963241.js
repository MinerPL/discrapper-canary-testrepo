"use strict";
n.r(t), n.d(t, {
  normalizeIndex: function() {
    return c
  },
  default: function() {
    return m
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  i = n("414456"),
  r = n.n(i),
  l = n("458960"),
  o = n("737960"),
  d = n("674569");
let u = {
    tension: 7,
    friction: 5,
    overshootClamping: !0
  },
  h = {
    CENTER: "center",
    RIGHT: "right"
  };

function c(e, t) {
  return (e % t + t) % t
}
class p extends a.Component {
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
    } = this.props, r = c(s, a.length), o = c(e.currentIndex, a.length);
    (r !== o || a.length !== e.items.length) && this.updateAnimatedIndex(r, o), i !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || r !== o) && l.default.spring(this.animatedAlignmentOffset, {
      ...u,
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
    } = this.props, r = c(s, i.length), l = a * r * 2;
    return e === h.CENTER ? (t - n.width) / 2 + l : e === h.RIGHT ? t - n.width - a + l : a + l
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
    a > 0 && (0 === e && t === s.length - 1 ? n.setValue(-1) : 0 === t && e === s.length - 1 && s.length > 2 && n.setValue(s.length)), l.default.spring(n, {
      ...u,
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
    a ? this.animateToIndex(e, t) : l.default.timing(s, {
      fromValue: 1,
      toValue: 0,
      duration: 100
    }).start(() => {
      n.setValue(e), l.default.timing(s, {
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
      className: a
    } = this.props;
    return (0, s.jsx)("div", {
      className: r(d.singleItemWrapper, d.viewport, a),
      children: (0, s.jsx)("div", {
        className: d.singleItem,
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
      animatedOpacity: a
    } = this, {
      renderItem: i,
      items: r,
      itemSize: o,
      edgeItems: u,
      gutter: h
    } = this.props, {
      margin: c,
      width: p
    } = o, m = this.getCarouselTranslate(), g = this.getItemStyle();
    e = u > 0 ? [...r.slice(-u), ...r, ...r.slice(0, u)] : r;
    let C = e.map((e, t) => (0, s.jsx)("div", {
      style: g,
      className: d.item,
      children: i(e, t - u, this.interpolateValueForItem(t - u))
    }, t));
    return (0, s.jsx)(l.default.div, {
      className: d.carousel,
      style: {
        opacity: a,
        left: l.default.add(t.interpolate({
          inputRange: [0, 1],
          outputRange: [-m, -c - p - m - h * (r.length - 1)]
        }), n)
      },
      children: C
    })
  }
  render() {
    let {
      items: e,
      className: t,
      hideOverflow: n
    } = this.props;
    if (e.length <= 0) throw Error("Carousel has no items");
    return 1 === e.length ? this.renderSingleItem() : (0, s.jsx)("div", {
      className: r({
        [d.viewport]: n
      }, t),
      children: this.renderCarouselItems()
    })
  }
  constructor(...e) {
    super(...e), this.animatedIndex = new l.default.Value(this.props.currentIndex), this.animatedAlignmentOffset = new l.default.Value(this.getAlignmentOffset(this.props.align)), this.animatedOpacity = new l.default.Value(1), this.getItemStyle = () => {
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
    }, this.interpolateValueForItem = e => this.animatedIndex.interpolate({
      inputRange: [e - 1, e, e + 1],
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    })
  }
}
p.defaultProps = {
  animate: !0,
  edgeItems: 2,
  align: h.CENTER,
  gutter: 0,
  hideOverflow: !0
};
var m = (0, o.default)(p)