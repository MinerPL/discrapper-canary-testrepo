"use strict";
n.d(t, {
  n: function() {
    return C
  },
  v: function() {
    return O
  }
}), n(47120), n(411104), n(852437);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(215569),
  _ = n(481060),
  d = n(40851),
  c = n(153850),
  E = n(78415),
  I = n(585483),
  T = n(952265),
  h = n(602091),
  S = n(981631),
  f = n(642049);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = [c.ZP, E.ZP];
class m extends r.PureComponent {
  render() {
    let {
      render: e,
      LayerComponent: t,
      isTopModal: n,
      instant: r
    } = this.props, {
      transitionState: s
    } = this.state;
    return (s === h.Dv.ENTERING || s === h.Dv.ENTERED) && !n && (s = h.Dv.HIDDEN), r && (s = h.Dv.ENTERED), (0, i.jsx)(t, {
      children: (0, i.jsx)("div", {
        className: o()(f.layer, !n && f.hidden),
        children: e({
          transitionState: s,
          onClose: this.close
        })
      })
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      transitionState: null
    }), N(this, "componentWillAppear", e => {
      this.componentWillEnter(e)
    }), N(this, "componentWillEnter", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: h.Dv.ENTERING
      }), setTimeout(() => {
        this.setState({
          transitionState: h.Dv.ENTERED
        }), e()
      }, t ? 0 : h.CT)
    }), N(this, "componentWillLeave", e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: h.Dv.EXITING
      }), setTimeout(() => {
        this.setState({
          transitionState: h.Dv.EXITED
        }), e()
      }, t ? 0 : h.CT)
    }), N(this, "close", () => new Promise(e => {
      this.props.closeModal(this.props.modalKey), setTimeout(() => e(), h.CT)
    }))
  }
}

function O() {
  return (0, T.Vn)((0, d.bp)())
}
let R = [];

function C() {
  let e = O(),
    t = (0, T.s9)(t => void 0 !== t[e] ? t[e] : R),
    n = r.useRef();
  r.useLayoutEffect(() => {
    n.current = t[t.length - 1]
  }, [t]);
  let s = t.length > 0;
  r.useLayoutEffect(() => {
    if (!s) return;
    let e = () => {
      let e = n.current;
      null != e && null != e.onCloseRequest && e.onCloseRequest()
    };
    return I.S.subscribe(S.CkL.MODAL_CLOSE, e), () => {
      I.S.unsubscribe(S.CkL.MODAL_CLOSE, e)
    }
  }, [s]);
  let o = r.useCallback(() => {
      let e = n.current;
      null != e && null != e.onCloseRequest && e.onCloseRequest()
    }, []),
    a = r.useCallback(t => {
      (0, T.Mr)(t, e)
    }, [e]),
    d = A.map(e => t.some(t => t.Layer === e || null == t.Layer && e === c.ZP));
  return (0, i.jsxs)(u.W, {
    component: r.Fragment,
    children: [A.map((e, n) => {
      var r;
      let s = l().findLast(t, t => t.Layer === e || null == t.Layer && e === c.ZP);
      return (0, i.jsx)(_.Backdrop, {
        isVisible: d[n],
        backdropStyle: null !== (r = null == s ? void 0 : s.backdropStyle) && void 0 !== r ? r : _.BackdropStyles.DARK,
        onClose: o,
        LayerComponent: e,
        backdropInstant: null == s ? void 0 : s.instant
      }, "layer-".concat(n))
    }), t.map((e, n) => {
      let {
        key: r,
        Layer: s,
        render: o,
        instant: l
      } = e;
      return (0, i.jsx)(m, {
        modalKey: r,
        LayerComponent: null != s ? s : c.ZP,
        isTopModal: n === t.length - 1,
        render: o,
        closeModal: a,
        instant: l
      }, r)
    })]
  })
}