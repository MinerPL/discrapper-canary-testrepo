"use strict";
i.r(t), i("47120");
var n, a, l, s, r = i("735250"),
  o = i("470079"),
  c = i("120356"),
  d = i.n(c),
  u = i("392711"),
  h = i.n(u),
  p = i("846519"),
  f = i("481060"),
  m = i("585483"),
  g = i("996753"),
  C = i("206895"),
  x = i("259580"),
  _ = i("981631"),
  I = i("689938"),
  v = i("382763");

function A(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let E = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
(s = n || (n = {})).ARROW = "arrow", s.CARET = "caret";
class N extends(a = o.PureComponent) {
  componentDidMount() {
    m.ComponentDispatch.subscribe(_.ComponentActions.CAROUSEL_PREV, this.handlePrevious), m.ComponentDispatch.subscribe(_.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    m.ComponentDispatch.unsubscribe(_.ComponentActions.CAROUSEL_PREV, this.handlePrevious), m.ComponentDispatch.unsubscribe(_.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: i,
      arrowClassName: n,
      paginationDotClassName: a,
      paginationDotSelectedClassName: l,
      paginationArrowIconType: s = "arrow"
    } = this.props, o = d()(v.arrowHitbox, {
      [v.arrowHitboxPadding]: i
    }, n);
    return (0, r.jsxs)("div", {
      className: d()(v.controls, this.props.className),
      children: [(0, r.jsx)(f.Button, {
        look: f.Button.Looks.BLANK,
        className: o,
        onClick: this.handlePrevious,
        "aria-label": I.default.Messages.PAGINATION_PREVIOUS,
        children: "caret" === s ? (0, r.jsx)(x.default, {
          className: v.arrow,
          direction: x.default.Directions.LEFT
        }) : (0, r.jsx)(g.default, {
          className: v.arrow,
          direction: g.default.Directions.LEFT
        })
      }), (0, r.jsx)("div", {
        className: v.dots,
        children: h().times(t, t => (0, r.jsx)(f.Button, {
          look: f.Button.Looks.BLANK,
          size: f.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? d()(v.dotSelected, l) : d()(v.dotNormal, a),
          "aria-label": I.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, r.jsx)(f.Button, {
        look: f.Button.Looks.BLANK,
        className: o,
        onClick: this.handleNext,
        "aria-label": I.default.Messages.PAGINATION_NEXT,
        children: "caret" === s ? (0, r.jsx)(x.default, {
          className: v.arrow,
          direction: x.default.Directions.RIGHT
        }) : (0, r.jsx)(g.default, {
          className: v.arrow,
          direction: g.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: i,
        current: n
      } = this.props;
      null == i || i(n, e, E.JUMP), t(e)
    }), A(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(1);
      null == e || e(t, n, E.NEXT)
    }), A(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: i
      } = this.props, n = i(-1);
      null == e || e(t, n, E.PREVIOUS)
    })
  }
}
A(N, "defaultProps", {
  includeHitboxPadding: !0
});
class T extends(l = o.PureComponent) {
  componentDidMount() {
    !this.props.paused && !this.state.hovered && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let i, n, a, l;
    let s = (i = this.props, n = this.state, !i.paused && !n.hovered);
    let r = (a = e, l = t, !a.paused && !l.hovered);
    s && !r ? this.startTimer() : !s && r && this.stopTimer();
    let {
      items: o
    } = this.props, {
      visibleIndex: c
    } = this.state;
    null == o[c] && this.changeItem(o, 1)
  }
  startTimer() {
    null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
  }
  stopTimer() {
    null != this.props.delay && this.timer.stop()
  }
  changeItem(e, t) {
    let i = this.state.visibleIndex + t;
    i < 0 ? i = e.length - 1 : i > e.length - 1 && (i = 0);
    let {
      onChangeItem: n
    } = this.props;
    null == n || n(e[i], this.state.visibleIndex, i);
    let a = t > 0 ? C.SlideDirection.LEFT : C.SlideDirection.RIGHT;
    return this.setState({
      visibleIndex: i,
      direction: a
    }), i
  }
  render() {
    let {
      items: e,
      renderItem: t,
      className: i,
      slideAnimatorClassName: n,
      slideAnimatorSpringSettings: a,
      slideAnimatorFadeInOut: l,
      paginationClassName: s,
      paginationArrowClassName: o,
      paginationArrowIconType: c,
      paginationDotClassName: u,
      paginationDotSelectedClassName: h,
      themedPagination: p,
      includeHitboxPadding: f,
      style: m,
      aspectRatio: g,
      children: x
    } = this.props, {
      visibleIndex: _
    } = this.state;
    return (0, r.jsxs)("div", {
      className: v.root,
      children: [(0, r.jsxs)("div", {
        className: d()(v.carouselContainer, i),
        style: m,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: [(0, r.jsx)("div", {
          style: {
            aspectRatio: g
          },
          children: (0, r.jsx)(C.default, {
            className: d()(v.carousel, n),
            step: _,
            direction: this.getCurrentDirection(),
            springSettings: a,
            fadeInOut: l,
            children: t(e[_], _)
          })
        }), e.length > 1 && (0, r.jsx)(N, {
          className: d()(s, p ? v.themedPagination : v.pagination),
          arrowClassName: o,
          includeHitboxPadding: f,
          current: _,
          count: e.length,
          onChangePage: t => this.changeItem(e, t),
          onSetItem: this.handleSetItem,
          onIntentionalChange: this.handleIntentionalChange,
          paginationArrowIconType: c,
          paginationDotClassName: u,
          paginationDotSelectedClassName: h
        })]
      }), null != x && x({
        step: _,
        direction: this.getCurrentDirection()
      })]
    })
  }
  constructor(e) {
    super(e), A(this, "timer", new p.Interval), A(this, "getCurrentDirection", () => this.state.direction), A(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), A(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), A(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: i
      } = this.props;
      this.changeItem(i, e - t)
    }), A(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), A(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), A(this, "handleIntentionalChange", (e, t, i) => {
      let {
        items: n,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(n[t], e, t, i)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
      direction: C.SlideDirection.LEFT,
      hovered: !1
    }
  }
}
A(T, "defaultProps", {
  aspectRatio: 16 / 9
}), t.default = T