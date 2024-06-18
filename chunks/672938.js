"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(846519),
  u = n(285952),
  _ = n(991463);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function c(e) {
  let {
    percentage: t,
    isSingleLine: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()({
      [_.bar]: n,
      [_.barInMultiLine]: !n
    }),
    children: (0, r.jsx)("div", {
      className: _.barInner,
      style: {
        width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
      }
    })
  })
}

function E(e) {
  return String(e).padStart(2, "0")
}

function I(e) {
  let {
    time: t,
    padLargestUnit: n
  } = e, i = Math.floor(t) % 60, r = Math.floor(t / 60) % 60, s = Math.floor(t / 3600);
  return 0 === s ? n ? "".concat(E(r), ":").concat(E(i)) : "".concat(r, ":").concat(E(i)) : n ? "".concat(E(s), ":").concat(E(r), ":").concat(E(i)) : "".concat(s, ":").concat(E(r), ":").concat(E(i))
}
class T extends(i = s.PureComponent) {
  componentDidMount() {
    this.timer.start(500, () => {
      this.setState({
        now: Date.now()
      })
    })
  }
  componentWillUnmount() {
    this.timer.stop()
  }
  render() {
    let {
      start: e,
      end: t,
      className: n,
      themed: i,
      singleLine: s = !1
    } = this.props, {
      now: o
    } = this.state, l = (t - e) / 1e3, d = Math.max(Math.min((o - e) / 1e3, l), 0);
    return s ? (0, r.jsxs)("div", {
      className: a()(n, {
        [_.themed]: i
      }, _.singleLineContainer),
      children: [(0, r.jsx)("div", {
        className: _.textLeftInSingleLine,
        children: I({
          time: d,
          padLargestUnit: !0
        })
      }), (0, r.jsx)("div", {
        className: _.barInSingleLine,
        children: (0, r.jsx)(c, {
          percentage: d / l,
          isSingleLine: !0
        })
      }), (0, r.jsx)("div", {
        className: _.textRight,
        children: I({
          time: l,
          padLargestUnit: !0
        })
      })]
    }) : (0, r.jsxs)("div", {
      className: a()(n, {
        [_.themed]: i
      }),
      children: [(0, r.jsx)(c, {
        percentage: d / l,
        isSingleLine: !1
      }), (0, r.jsxs)(u.Z, {
        children: [(0, r.jsx)(u.Z.Child, {
          grow: 1,
          className: _.textLeft,
          children: I({
            time: d,
            padLargestUnit: !1
          })
        }), (0, r.jsx)(u.Z.Child, {
          grow: 0,
          className: _.textRight,
          children: I({
            time: l,
            padLargestUnit: !1
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "timer", new l.Xp), d(this, "state", {
      now: Date.now()
    })
  }
}
d(T, "defaultProps", {
  themed: !1
}), t.Z = T