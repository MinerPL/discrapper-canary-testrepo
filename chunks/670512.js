"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("748780"),
  o = n("846519"),
  u = n("585483"),
  d = n("981631"),
  c = n("689938"),
  f = n("740072");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = {
  friction: 15,
  tension: 100
};
class p extends a.PureComponent {
  componentDidMount() {
    this.setState({
      shown: !0
    }), u.ComponentDispatch.subscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), u.ComponentDispatch.unsubscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentDidUpdate() {
    let {
      hasQuery: e
    } = this.props;
    !e && this.springTo(0)
  }
  springTo(e) {
    r.default.spring(this.state.translateY, {
      toValue: Math.min(e, 250),
      ...C
    }).start()
  }
  renderArrowGroup(e) {
    return (0, l.jsxs)("div", {
      className: i()(f.arrowGroup, e),
      children: [(0, l.jsx)(r.default.div, {
        className: i()(f.arrowContainer, f.horizontal),
        style: this.getStyle(),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n("403756"),
          className: f.arrowIcon
        })
      }), (0, l.jsx)("div", {
        className: i()(f.arrowContainer, f.diag1),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n("536404"),
          className: f.arrowIcon
        })
      }), (0, l.jsx)("div", {
        className: i()(f.arrowContainer, f.diag2),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n("569347"),
          className: f.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, l.jsxs)("div", {
      className: f.tutorialMessages,
      children: [(0, l.jsx)("div", {
        className: f.searchMessage,
        children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
      }), (0, l.jsx)("div", {
        className: f.selectMessage,
        children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT
      })]
    })
  }
  render() {
    let {
      hasQuery: e
    } = this.props, {
      shown: t
    } = this.state;
    return (0, l.jsxs)("div", {
      ref: this.rootRef,
      className: i()(f.tutorial, {
        [f.shown]: t,
        [f.hasQuery]: e
      }),
      children: [this.renderContent(), this.renderArrowGroup(f.__invalid_left), this.renderArrowGroup(f.right)]
    })
  }
  getStyle() {
    return {
      transform: [{
        translateY: this.state.translateY.interpolate({
          inputRange: [0, 250],
          outputRange: ["0px", "".concat(250, "px")]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      shown: !1,
      translateY: new r.default.Value(0)
    }), h(this, "rootRef", a.createRef()), h(this, "focusTimeout", new o.Timeout), h(this, "handleResultFocus", e => {
      let {
        node: t
      } = e;
      this.focusTimeout.start(1, () => {
        if (this.props.hasQuery && null != t && null != this.rootRef.current) {
          let {
            top: e
          } = this.rootRef.current.getBoundingClientRect(), {
            top: n
          } = t.getBoundingClientRect();
          this.springTo(Math.abs(e - n) - 118 + 9)
        } else this.springTo(0)
      })
    })
  }
}
t.default = p