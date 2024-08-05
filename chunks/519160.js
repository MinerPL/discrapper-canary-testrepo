s.d(t, {
  gN: function() {
return g;
  }
}), s(47120), s(411104);
var n, i = s(735250),
  a = s(470079),
  r = s(120356),
  l = s.n(r),
  o = s(748780),
  h = s(112724),
  d = s(898108);

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let c = {
tension: 7,
friction: 5,
overshootClamping: !0
  },
  p = 'center',
  m = 'right';

function g(e, t) {
  return (e % t + t) % t;
}
class I extends(n = a.Component) {
  componentDidMount() {
this.animatedIndex.setValue(this.props.currentIndex);
  }
  componentDidUpdate(e) {
let {
  align: t,
  animate: s,
  currentIndex: n,
  items: i,
  width: a
} = this.props, r = g(n, i.length), l = g(e.currentIndex, i.length);
(r !== l || i.length !== e.items.length) && this.updateAnimatedIndex(r, l), a !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : s && (t !== e.align || r !== l) && o.Z.spring(this.animatedAlignmentOffset, {
  ...c,
  toValue: this.getAlignmentOffset(t)
}).start();
  }
  getAlignmentOffset(e) {
let {
  width: t,
  itemSize: s,
  currentIndex: n,
  gutter: i,
  items: a
} = this.props, r = i * g(n, a.length) * 2;
return e === p ? (t - s.width) / 2 + r : e === m ? t - s.width - i + r : i + r;
  }
  getCarouselTranslate() {
let {
  itemSize: e,
  edgeItems: t
} = this.props;
return t * (e.width + e.margin);
  }
  animateToIndex(e, t) {
let {
  animatedIndex: s
} = this, {
  items: n,
  edgeItems: i
} = this.props;
i > 0 && (0 === e && t === n.length - 1 ? s.setValue(-1) : 0 === t && e === n.length - 1 && n.length > 2 && s.setValue(n.length)), o.Z.spring(s, {
  ...c,
  toValue: e
}).start();
  }
  updateAnimatedIndex(e, t) {
let {
  animatedIndex: s,
  animatedOpacity: n
} = this, {
  animate: i
} = this.props;
i ? this.animateToIndex(e, t) : o.Z.timing(n, {
  fromValue: 1,
  toValue: 0,
  duration: 100
}).start(() => {
  s.setValue(e), o.Z.timing(n, {
    fromValue: 0,
    toValue: 1,
    duration: 100
  }).start();
});
  }
  renderSingleItem() {
let {
  renderItem: e,
  items: t,
  itemSize: s,
  className: n
} = this.props;
return (0, i.jsx)('div', {
  className: l()(d.singleItemWrapper, d.viewport, n),
  children: (0, i.jsx)('div', {
    className: d.singleItem,
    style: {
      width: s.width,
      height: s.height
    },
    children: e(t[0], 0)
  })
});
  }
  renderCarouselItems() {
let e;
let {
  animatedIndex: t,
  animatedAlignmentOffset: s,
  animatedOpacity: n
} = this, {
  renderItem: a,
  items: r,
  itemSize: l,
  edgeItems: h,
  gutter: u
} = this.props, {
  margin: c,
  width: p
} = l, m = this.getCarouselTranslate(), g = this.getItemStyle(), I = (e = h > 0 ? [
  ...r.slice(-h),
  ...r,
  ...r.slice(0, h)
] : r).map((e, t) => (0, i.jsx)('div', {
  style: g,
  className: d.item,
  children: a(e, t - h, this.interpolateValueForItem(t - h))
}, t));
return (0, i.jsx)(o.Z.div, {
  className: d.carousel,
  style: {
    opacity: n,
    left: o.Z.add(t.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        -m,
        -c - p - m - u * (r.length - 1)
      ]
    }), s)
  },
  children: I
});
  }
  render() {
let {
  items: e,
  className: t,
  hideOverflow: s
} = this.props;
if (e.length <= 0)
  throw Error('Carousel has no items');
return 1 === e.length ? this.renderSingleItem() : (0, i.jsx)('div', {
  className: l()({
    [d.viewport]: s
  }, t),
  children: this.renderCarouselItems()
});
  }
  constructor(...e) {
super(...e), u(this, 'animatedIndex', new o.Z.Value(this.props.currentIndex)), u(this, 'animatedAlignmentOffset', new o.Z.Value(this.getAlignmentOffset(this.props.align))), u(this, 'animatedOpacity', new o.Z.Value(1)), u(this, 'getItemStyle', () => {
  let {
    itemSize: {
      width: e,
      margin: t,
      height: s
    }
  } = this.props;
  return {
    flexBasis: e,
    marginRight: t,
    height: s,
    width: e,
    maxWidth: e
  };
}), u(this, 'interpolateValueForItem', e => this.animatedIndex.interpolate({
  inputRange: [
    e - 1,
    e,
    e + 1
  ],
  outputRange: [
    0,
    1,
    0
  ],
  extrapolate: 'clamp'
}));
  }
}
u(I, 'defaultProps', {
  animate: !0,
  edgeItems: 2,
  align: p,
  gutter: 0,
  hideOverflow: !0
}), t.ZP = (0, h.Z)(I);