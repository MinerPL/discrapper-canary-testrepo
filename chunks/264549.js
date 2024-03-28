"use strict";
n.r(t), n("653041"), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("714338"),
  d = n("585483"),
  c = n("981631"),
  f = n("52233");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = {
    PRIMARY: () => !0,
    SECONDARY: () => !0
  },
  p = () => (0, l.jsxs)("div", {
    className: f.symbol,
    children: [(0, l.jsx)("div", {
      className: f.symbolBackground
    }), (0, l.jsx)("img", {
      alt: "",
      src: n("977706")
    })]
  }, "symbol");
class m extends a.PureComponent {
  componentDidMount() {
    this.setState({
      animating: !0
    }), this._renderSecondaryTimeout = setTimeout(() => {
      this.setState({
        renderSecondary: !0
      })
    }, 120), this._doneTimeout = setTimeout(this.done, 1e3), C.PRIMARY()
  }
  componentDidUpdate(e, t) {
    this.state.renderSecondary && !t.renderSecondary && C.SECONDARY()
  }
  componentWillUnmount() {
    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
  }
  renderPrimary() {
    return (0, l.jsxs)("div", {
      className: f.primaryExplosion,
      children: [(0, l.jsx)("img", {
        alt: "",
        className: f.circleInner,
        src: n("273226"),
        width: 70,
        height: 69
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.circleOuter,
        src: n("922026"),
        width: 96,
        height: 95
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.linesSecondary,
        src: n("827926"),
        width: 183,
        height: 104
      }), (0, l.jsx)("img", {
        alt: "",
        className: f.linesMain,
        src: n("873180"),
        width: 69,
        height: 180
      })]
    }, "primary-explosion")
  }
  renderSecondary(e, t) {
    return (0, l.jsxs)("div", {
      className: f.secondaryExplosion,
      style: {
        top: t,
        left: e
      },
      children: [(0, l.jsx)("img", {
        alt: "",
        className: f.circleInner,
        src: n("272162"),
        width: 61,
        height: 58
      }, "circle-inner"), (0, l.jsx)("img", {
        alt: "",
        className: f.circleOuter,
        src: n("632989"),
        width: 85,
        height: 85
      }, "circle-outer"), (0, l.jsx)("img", {
        alt: "",
        className: f.linesSecondary,
        src: n("376252"),
        width: 162,
        height: 173
      }, "lines-secondary"), (0, l.jsx)("img", {
        alt: "",
        className: f.linesMain,
        src: n("720617"),
        width: 156,
        height: 306
      }, "lines-main")]
    }, "secondary-explosion")
  }
  render() {
    let {
      renderSecondary: e,
      offsetX: t,
      offsetY: n,
      animating: a,
      scale: s
    } = this.state, r = [this.renderPrimary()];
    return e && r.push(this.renderSecondary(t, n)), (0, l.jsx)("div", {
      className: i()(f.container, {
        [f.animate]: a
      }),
      style: {
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(s, ")")
      },
      children: r
    })
  }
  constructor(...e) {
    super(...e), h(this, "_renderSecondaryTimeout", null), h(this, "_doneTimeout", null), h(this, "state", {
      animating: !1,
      renderSecondary: !1,
      scale: o().random(.6, 1, !0),
      offsetX: o().random(0, 140, !1) - 70,
      offsetY: o().random(0, 140, !1) - 70
    }), h(this, "done", () => {
      this.props.onAnimationComplete(this.props.componentId)
    })
  }
}
let g = 240;
class E extends a.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: !0
      }), d.ComponentDispatch.dispatch(c.ComponentActions.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (u.default.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
  }
  render() {
    return (0, l.jsx)("div", {
      className: i()(f.ragingDemon, {
        [f.visible]: this.state.visible
      }),
      children: this.children
    })
  }
  constructor(...e) {
    super(...e), h(this, "_timeouts", []), h(this, "children", []), h(this, "state", {
      explosions: 0,
      visible: !1
    }), h(this, "setTimeout", (e, t) => {
      let n = setTimeout(e, t);
      return this._timeouts.push(n), n
    }), h(this, "removeExplosion", e => {
      let t = this.children,
        n = t.findIndex(t => {
          if (t.type !== m) return !1;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }), h(this, "createExplosion", () => {
      let e = this.children,
        t = window.innerWidth / 2 >> 0,
        n = window.innerHeight / 2 >> 0;
      if (this.state.explosions < 8) {
        let a = "expl-".concat(this.state.explosions);
        e.push((0, l.jsx)(m, {
          componentId: a,
          top: o().random(n - 100, n + 100, !1),
          left: o().random(t - 200, t + 200, !1),
          onAnimationComplete: this.removeExplosion
        }, a)), this.setTimeout(this.createExplosion, g), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }), h(this, "addSymbol", () => {
      this.children = [(0, l.jsx)(p, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }), h(this, "delayedClose", () => {
      this.props.onClose()
    })
  }
}
t.default = E