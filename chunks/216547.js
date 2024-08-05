a(47120);
var C, t, i = a(735250),
  s = a(470079),
  r = a(120356),
  n = a.n(r),
  l = a(699581),
  o = a(374470),
  H = a(481060),
  c = a(112724),
  d = a(768762),
  V = a(283414);

function M(e, L, a) {
  return L in e ? Object.defineProperty(e, L, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[L] = a, e;
}
(t = C || (C = {}))[t.LEFT = 0] = 'LEFT', t[t.RIGHT = 1] = 'RIGHT';
let Z = e => {
  let {
onClick: L,
className: a,
direction: C
  } = e;
  return (0, i.jsx)(H.Clickable, {
'aria-hidden': !0,
className: n()(V.scrollerButton, a),
onClick: L,
children: (0, i.jsx)(d.Z, {
  className: V.scrollerButtonArrow,
  direction: C
})
  });
};
class _ extends s.Component {
  static getDerivedStateFromProps(e, L) {
return L.prevWidth !== e.width ? {
  tileIndex: 0,
  prevWidth: e.width,
  lastArrowDirection: 0
} : null;
  }
  getMaxOffset() {
let {
  width: e
} = this.props, {
  scrollerWidth: L
} = this.state;
return Math.max(Math.floor(L - e), 0);
  }
  getSideOffset() {
let {
  tileWidth: e,
  tileMargin: L
} = this.props, a = this.getMaxOffset(), C = e + L;
return a - Math.floor(a / C) * C;
  }
  getMaxIndex() {
let {
  tileWidth: e,
  tileMargin: L
} = this.props;
return Math.round(this.getMaxOffset() / (e + L));
  }
  getOffset(e, L) {
let {
  tileWidth: a,
  tileMargin: C
} = this.props;
return Math.min(e * (a + C) + (1 === L ? this.getSideOffset() : 0), this.getMaxOffset());
  }
  componentDidMount() {
this.setScrollerWidth();
  }
  componentDidUpdate(e, L) {
if (L.tileIndex !== this.state.tileIndex || L.lastArrowDirection !== this.state.lastArrowDirection) {
  var a, C, t;
  let {
    tileIndex: e
  } = this.state, L = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
  null === (a = this.advancedScrollerRef.current) || void 0 === a || a.scrollTo({
    to: L,
    animate: !0
  }), null === (C = (t = this.props).onScroll) || void 0 === C || C.call(t, {
    tileIndex: e
  });
}
e.width !== this.props.width && this.setScrollerWidth();
  }
  render() {
let {
  tileIndex: e,
  lastArrowDirection: L
} = this.state, {
  header: a,
  headerId: C,
  subHeader: t,
  headerContainerClassName: s,
  scrollContainerClassName: r
} = this.props, l = this.getMaxOffset();
return (0, i.jsxs)('div', {
  children: [
    (0, i.jsxs)('div', {
      className: n()(V.headerContainer, s),
      children: [
        (0, i.jsxs)('div', {
          children: [
            (0, i.jsx)(H.Heading, {
              id: C,
              variant: 'heading-lg/semibold',
              children: a
            }),
            null == t ? null : (0, i.jsx)(H.Text, {
              variant: 'text-sm/medium',
              className: V.subheader,
              children: t
            })
          ]
        }),
        l > 0 ? (0, i.jsxs)('div', {
          className: V.arrowsContainer,
          children: [
            (0, i.jsx)(Z, {
              direction: d.Z.Directions.LEFT,
              onClick: this.prev,
              className: n()(V.arrowLeft, {
                [V.arrowDisabled]: 0 === e && 0 === L
              })
            }),
            (0, i.jsx)(Z, {
              direction: d.Z.Directions.RIGHT,
              onClick: this.next,
              className: n()(V.arrowRight, {
                [V.arrowDisabled]: e === this.getMaxIndex() && 1 === L
              })
            })
          ]
        }) : null
      ]
    }),
    (0, i.jsx)('div', {
      className: n()(V.scrollerContainer, r),
      children: (0, i.jsx)(H.AdvancedScrollerNone, {
        ref: this.advancedScrollerRef,
        orientation: 'horizontal',
        className: V.scroller,
        children: (0, i.jsx)('div', {
          className: V.scroller,
          ref: e => {
            this.tileScrollerRef.current = e, this.setScrollerWidth();
          },
          children: this.props.children
        })
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), M(this, 'state', {
  tileIndex: 0,
  prevWidth: this.props.width,
  lastArrowDirection: 0,
  scrollerWidth: 0
}), M(this, 'advancedScrollerRef', s.createRef()), M(this, 'tileScrollerRef', s.createRef()), M(this, 'setScrollerWidth', () => {
  let e = (0, l.findDOMNode)(this.tileScrollerRef.current);
  (0, o.k)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({
    scrollerWidth: e.offsetWidth
  });
}), M(this, 'prev', () => {
  this.setState({
    tileIndex: Math.max(this.state.tileIndex - 1, 0),
    lastArrowDirection: 0
  });
}), M(this, 'next', () => {
  this.setState({
    tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
    lastArrowDirection: 1
  });
});
  }
}
L.Z = (0, c.Z)(_);