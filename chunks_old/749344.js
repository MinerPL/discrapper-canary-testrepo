"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  i = n("414456"),
  r = n.n(i),
  l = n("917351"),
  o = n.n(l),
  d = n("862337"),
  u = n("77078"),
  h = n("659500"),
  c = n("137215"),
  p = n("16594"),
  m = n("49111"),
  g = n("782340"),
  C = n("592994");
let f = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
class I extends a.PureComponent {
  componentDidMount() {
    h.ComponentDispatch.subscribe(m.ComponentActions.CAROUSEL_PREV, this.handlePrevious), h.ComponentDispatch.subscribe(m.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    h.ComponentDispatch.unsubscribe(m.ComponentActions.CAROUSEL_PREV, this.handlePrevious), h.ComponentDispatch.unsubscribe(m.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: n,
      arrowClassName: a
    } = this.props, i = r(C.arrowHitbox, a, {
      [C.arrowHitboxPadding]: n
    });
    return (0, s.jsxs)("div", {
      className: r(C.controls, this.props.className),
      children: [(0, s.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: i,
        onClick: this.handlePrevious,
        "aria-label": g.default.Messages.PAGINATION_PREVIOUS,
        children: (0, s.jsx)(c.default, {
          className: C.arrow,
          direction: c.default.Directions.LEFT
        })
      }), (0, s.jsx)("div", {
        className: C.dots,
        children: o.times(t, t => (0, s.jsx)(u.Button, {
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? C.dotSelected : C.dotNormal,
          "aria-label": g.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, s.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        className: i,
        onClick: this.handleNext,
        "aria-label": g.default.Messages.PAGINATION_NEXT,
        children: (0, s.jsx)(c.default, {
          className: C.arrow,
          direction: c.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleDotClick = e => {
      let {
        onSetItem: t,
        onIntentionalChange: n,
        current: s
      } = this.props;
      null == n || n(s, e, f.JUMP), t(e)
    }, this.handleNext = () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, s = n(1);
      null == e || e(t, s, f.NEXT)
    }, this.handlePrevious = () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, s = n(-1);
      null == e || e(t, s, f.PREVIOUS)
    }
  }
}
I.defaultProps = {
  includeHitboxPadding: !0
};
class x extends a.PureComponent {
  componentDidMount() {
    !this.props.paused && !this.state.hovered && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    var n, s, a, i;
    let r = (n = this.props, s = this.state, !n.paused && !s.hovered);
    let l = (a = e, i = t, !a.paused && !i.hovered);
    r && !l ? this.startTimer() : !r && l && this.stopTimer();
    let {
      items: o
    } = this.props, {
      visibleIndex: d
    } = this.state;
    null == o[d] && this.changeItem(o, 1)
  }
  startTimer() {
    null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    null != this.props.delay && this.timer.stop()
  }
  changeItem(e, t) {
    let n = this.state.visibleIndex + t;
    n < 0 ? n = e.length - 1 : n > e.length - 1 && (n = 0);
    let {
      onChangeItem: s
    } = this.props;
    null == s || s(e[n], this.state.visibleIndex, n);
    let a = t > 0 ? p.SlideDirection.LEFT : p.SlideDirection.RIGHT;
    return this.setState({
      visibleIndex: n,
      direction: a
    }), n
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: n,
      paginationClassName: a,
      paginationArrowClassName: i,
      themedPagination: l,
      includeHitboxPadding: o,
      style: d,
      aspectRatio: u
    } = this.props, {
      visibleIndex: h
    } = this.state;
    return (0, s.jsxs)("div", {
      className: r(C.root, n),
      style: d,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, s.jsx)("div", {
        style: {
          aspectRatio: u
        },
        children: (0, s.jsx)(p.default, {
          step: h,
          direction: this.getCurrentDirection(),
          className: C.carousel,
          children: t(e[h], h)
        })
      }), e.length > 1 && (0, s.jsx)(I, {
        className: r(a, l ? C.themedPagination : C.pagination),
        arrowClassName: i,
        includeHitboxPadding: o,
        current: h,
        count: e.length,
        onChangePage: t => this.changeItem(e, t),
        onSetItem: this.handleSetItem,
        onIntentionalChange: this.handleIntentionalChange
      })]
    })
  }
  constructor(e) {
    super(e), this.timer = new d.Interval, this.getCurrentDirection = () => this.state.direction, this.nextItem = () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }, this.previousItem = () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }, this.handleSetItem = e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleIntentionalChange = (e, t, n) => {
      let {
        items: s,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(s[t], e, t, n)
    }, this.state = {
      visibleIndex: !0 === e.randomize ? o.random(0, e.items.length - 1) : 0,
      direction: p.SlideDirection.LEFT,
      hovered: !1
    }
  }
}
x.defaultProps = {
  aspectRatio: 16 / 9
};
var E = x