"use strict";
n.d(t, {
  B: function() {
    return h
  }
});
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(748780),
  u = n(846519),
  _ = n(215569),
  d = n(285952),
  c = n(981631),
  E = n(956941);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = {
  [c.AEg.NORMAL]: E.normal,
  [c.AEg.MINIMUM]: E.minimum,
  [c.AEg.NO_CHAT]: E.noChat,
  [c.AEg.FULL_SCREEN]: E.fullScreen
};
class h extends s.PureComponent {
  componentDidAppear() {
    this.state.animation.setValue(1)
  }
  componentWillEnter(e) {
    let {
      animation: t
    } = this.state;
    t.setValue(0), l.Z.spring(t, {
      toValue: 1,
      overshootClamping: !0
    }).start(e)
  }
  componentWillLeave(e) {
    l.Z.spring(this.state.animation, {
      toValue: 0,
      overshootClamping: !0
    }).start(e)
  }
  render() {
    return (0, r.jsx)(l.Z.div, {
      className: a()(E.videoBackgroundTransition, this.props.className),
      style: {
        opacity: this.state.animation
      },
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), this.state = {
      animation: new l.Z.Value(0)
    }
  }
}
class S extends(i = s.PureComponent) {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleMouseEvent, !0), document.addEventListener("mousemove", this.handleMouseEvent, !0)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseEvent, !0), document.removeEventListener("mousemove", this.handleMouseEvent, !0), this._timeout.stop()
  }
  static getDerivedStateFromProps(e, t) {
    if (e.layout !== t.layoutProp) return t.idle ? {
      idle: !1,
      layoutProp: e.layout
    } : {
      layoutProp: e.layout
    };
    return null
  }
  componentDidUpdate(e) {
    this.props.layout !== e.layout && this._timeout.stop()
  }
  renderBackground() {
    let {
      background: e,
      backgroundKey: t,
      layout: n
    } = this.props, i = "".concat(n, "-").concat(null != t ? t : "");
    return (0, r.jsx)(_.W, {
      className: E.videoBackground,
      component: "div",
      children: (0, r.jsx)(h, {
        children: e
      }, i)
    })
  }
  renderContents() {
    let {
      top: e,
      center: t,
      bottom: n,
      layout: i,
      focused: s
    } = this.props, {
      idle: o
    } = this.state;
    return (0, r.jsx)(d.Z, {
      className: a()(E.video, T[i], {
        [E.idle]: o
      }),
      direction: d.Z.Direction.VERTICAL,
      justify: d.Z.Justify.CENTER,
      children: (0, r.jsxs)(d.Z, {
        className: E.videoWrapper,
        direction: d.Z.Direction.VERTICAL,
        children: [this.renderBackground(), (0, r.jsxs)(d.Z, {
          className: a()(E.videoInner, {
            [E.focused]: s
          }),
          direction: d.Z.Direction.VERTICAL,
          justify: d.Z.Justify.BETWEEN,
          children: [(0, r.jsx)(d.Z, {
            className: E.videoTop,
            grow: 0,
            children: e
          }), (0, r.jsx)(d.Z, {
            className: E.videoCenter,
            children: t
          }), (0, r.jsx)(d.Z, {
            className: E.videoBottom,
            grow: 0,
            children: n
          })]
        })]
      })
    })
  }
  render() {
    let {
      layout: e,
      className: t,
      animated: n
    } = this.props;
    return (0, r.jsx)("div", {
      className: a()(E.videoHeight, T[e], t, {
        [E.animated]: n
      }),
      children: this.renderContents()
    })
  }
  constructor(e) {
    super(e), I(this, "_timeout", new u.V7), I(this, "handleMouseEvent", () => {
      let {
        layout: e
      } = this.props;
      if (e === c.AEg.FULL_SCREEN || e === c.AEg.NO_CHAT) this._timeout.start(3e3, () => this.setState({
        idle: !0
      })), this.state.idle && this.setState({
        idle: !1
      })
    }), this.state = {
      idle: !1,
      backgroundAnimation: new l.Z.Value(0),
      layoutProp: e.layout
    }
  }
}
I(S, "defaultProps", {
  layout: c.AEg.MINIMUM,
  animated: !0
})