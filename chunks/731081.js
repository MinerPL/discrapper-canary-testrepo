"use strict";
n.r(t), n("47120");
var s, a, i = n("735250"),
  r = n("470079"),
  l = n("803997"),
  o = n.n(l),
  d = n("392711"),
  u = n.n(d),
  h = n("846519"),
  c = n("481060"),
  p = n("585483"),
  m = n("996753"),
  g = n("206895"),
  f = n("981631"),
  C = n("689938"),
  I = n("894584");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {
  JUMP: "jump",
  NEXT: "next",
  PREVIOUS: "previous"
};
class v extends(s = r.PureComponent) {
  componentDidMount() {
    p.ComponentDispatch.subscribe(f.ComponentActions.CAROUSEL_PREV, this.handlePrevious), p.ComponentDispatch.subscribe(f.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  componentWillUnmount() {
    p.ComponentDispatch.unsubscribe(f.ComponentActions.CAROUSEL_PREV, this.handlePrevious), p.ComponentDispatch.unsubscribe(f.ComponentActions.CAROUSEL_NEXT, this.handleNext)
  }
  render() {
    let {
      current: e,
      count: t,
      includeHitboxPadding: n,
      arrowClassName: s
    } = this.props, a = o()(I.arrowHitbox, s, {
      [I.arrowHitboxPadding]: n
    });
    return (0, i.jsxs)("div", {
      className: o()(I.controls, this.props.className),
      children: [(0, i.jsx)(c.Button, {
        look: c.Button.Looks.BLANK,
        className: a,
        onClick: this.handlePrevious,
        "aria-label": C.default.Messages.PAGINATION_PREVIOUS,
        children: (0, i.jsx)(m.default, {
          className: I.arrow,
          direction: m.default.Directions.LEFT
        })
      }), (0, i.jsx)("div", {
        className: I.dots,
        children: u().times(t, t => (0, i.jsx)(c.Button, {
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          onClick: () => this.handleDotClick(t),
          className: t === e ? I.dotSelected : I.dotNormal,
          "aria-label": C.default.Messages.PAGINATION_SLIDE_LABEL.format({
            pageNumber: t + 1
          })
        }, "dot-".concat(t)))
      }), (0, i.jsx)(c.Button, {
        look: c.Button.Looks.BLANK,
        className: a,
        onClick: this.handleNext,
        "aria-label": C.default.Messages.PAGINATION_NEXT,
        children: (0, i.jsx)(m.default, {
          className: I.arrow,
          direction: m.default.Directions.RIGHT
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "handleDotClick", e => {
      let {
        onSetItem: t,
        onIntentionalChange: n,
        current: s
      } = this.props;
      null == n || n(s, e, E.JUMP), t(e)
    }), x(this, "handleNext", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, s = n(1);
      null == e || e(t, s, E.NEXT)
    }), x(this, "handlePrevious", () => {
      let {
        onIntentionalChange: e,
        current: t,
        onChangePage: n
      } = this.props, s = n(-1);
      null == e || e(t, s, E.PREVIOUS)
    })
  }
}
x(v, "defaultProps", {
  includeHitboxPadding: !0
});
class N extends(a = r.PureComponent) {
  componentDidMount() {
    !this.props.paused && !this.state.hovered && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let n, s, a, i;
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
    let a = t > 0 ? g.SlideDirection.LEFT : g.SlideDirection.RIGHT;
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
      paginationClassName: s,
      paginationArrowClassName: a,
      themedPagination: r,
      includeHitboxPadding: l,
      style: d,
      aspectRatio: u
    } = this.props, {
      visibleIndex: h
    } = this.state;
    return (0, i.jsxs)("div", {
      className: o()(I.root, n),
      style: d,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, i.jsx)("div", {
        style: {
          aspectRatio: u
        },
        children: (0, i.jsx)(g.default, {
          step: h,
          direction: this.getCurrentDirection(),
          className: I.carousel,
          children: t(e[h], h)
        })
      }), e.length > 1 && (0, i.jsx)(v, {
        className: o()(s, r ? I.themedPagination : I.pagination),
        arrowClassName: a,
        includeHitboxPadding: l,
        current: h,
        count: e.length,
        onChangePage: t => this.changeItem(e, t),
        onSetItem: this.handleSetItem,
        onIntentionalChange: this.handleIntentionalChange
      })]
    })
  }
  constructor(e) {
    super(e), x(this, "timer", new h.Interval), x(this, "getCurrentDirection", () => this.state.direction), x(this, "nextItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, 1)
    }), x(this, "previousItem", () => {
      let {
        items: e
      } = this.props;
      this.changeItem(e, -1)
    }), x(this, "handleSetItem", e => {
      let {
        visibleIndex: t
      } = this.state, {
        items: n
      } = this.props;
      this.changeItem(n, e - t)
    }), x(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), x(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), x(this, "handleIntentionalChange", (e, t, n) => {
      let {
        items: s,
        onIntentionalChange: a
      } = this.props;
      return null == a ? void 0 : a(s[t], e, t, n)
    }), this.state = {
      visibleIndex: !0 === e.randomize ? u().random(0, e.items.length - 1) : 0,
      direction: g.SlideDirection.LEFT,
      hovered: !1
    }
  }
}
x(N, "defaultProps", {
  aspectRatio: 16 / 9
}), t.default = N