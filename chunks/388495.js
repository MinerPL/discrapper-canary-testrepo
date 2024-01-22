"use strict";
n.r(t), n.d(t, {
  useModalContext: function() {
    return T
  },
  Modals: function() {
    return C
  }
}), n("222007"), n("70102"), n("700225");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("917351"),
  l = n.n(o),
  u = n("266491"),
  d = n("244201"),
  c = n("892974"),
  f = n("983782"),
  _ = n("668596"),
  h = n("659500"),
  g = n("551042"),
  m = n("625611"),
  E = n("49111"),
  p = n("193608");
let v = [f.default, _.default];
class S extends s.PureComponent {
  render() {
    let {
      render: e,
      LayerComponent: t,
      isTopModal: n,
      instant: s
    } = this.props, {
      transitionState: r
    } = this.state;
    return (r === m.ModalTransitionState.ENTERING || r === m.ModalTransitionState.ENTERED) && !n && (r = m.ModalTransitionState.HIDDEN), s && (r = m.ModalTransitionState.ENTERED), (0, i.jsx)(t, {
      children: (0, i.jsx)("div", {
        className: a(p.layer, !n && p.hidden),
        children: e({
          transitionState: r,
          onClose: this.close
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      transitionState: null
    }, this.componentWillAppear = e => {
      this.componentWillEnter(e)
    }, this.componentWillEnter = e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: m.ModalTransitionState.ENTERING
      }), setTimeout(() => {
        this.setState({
          transitionState: m.ModalTransitionState.ENTERED
        }), e()
      }, t ? 0 : m.TRANSITION_DURATION)
    }, this.componentWillLeave = e => {
      let {
        instant: t
      } = this.props;
      this.setState({
        transitionState: m.ModalTransitionState.EXITING
      }), setTimeout(() => {
        this.setState({
          transitionState: m.ModalTransitionState.EXITED
        }), e()
      }, t ? 0 : m.TRANSITION_DURATION)
    }, this.close = () => new Promise(e => {
      this.props.closeModal(this.props.modalKey), setTimeout(() => e(), m.TRANSITION_DURATION)
    })
  }
}

function T() {
  return (0, g.modalContextFromAppContext)((0, d.useAppContext)())
}
let I = [];

function C() {
  let e = T(),
    t = (0, g.useModalsStore)(t => void 0 !== t[e] ? t[e] : I),
    n = s.useRef();
  s.useLayoutEffect(() => {
    n.current = t[t.length - 1]
  }, [t]);
  let r = t.length > 0;
  s.useLayoutEffect(() => {
    if (!r) return;
    let e = () => {
      let e = n.current;
      null != e && null != e.onCloseRequest && e.onCloseRequest()
    };
    return h.ComponentDispatch.subscribe(E.ComponentActions.MODAL_CLOSE, e), () => {
      h.ComponentDispatch.unsubscribe(E.ComponentActions.MODAL_CLOSE, e)
    }
  }, [r]);
  let a = s.useCallback(() => {
      let e = n.current;
      null != e && null != e.onCloseRequest && e.onCloseRequest()
    }, []),
    o = s.useCallback(t => {
      (0, g.closeModal)(t, e)
    }, [e]),
    d = v.map(e => t.some(t => t.Layer === e || null == t.Layer && e === f.default));
  return (0, i.jsxs)(u.default, {
    component: s.Fragment,
    children: [v.map((e, n) => {
      let s = l.findLast(t, t => t.Layer === e || null == t.Layer && e === f.default);
      return (0, i.jsx)(c.default, {
        isVisible: d[n],
        backdropStyle: c.BackdropStyles.DARK,
        onClose: a,
        LayerComponent: e,
        backdropInstant: null == s ? void 0 : s.instant
      }, "layer-".concat(n))
    }), t.map((e, n) => {
      let {
        key: s,
        Layer: r,
        render: a,
        instant: l
      } = e;
      return (0, i.jsx)(S, {
        modalKey: s,
        LayerComponent: null != r ? r : f.default,
        isTopModal: n === t.length - 1,
        render: a,
        closeModal: o,
        instant: l
      }, s)
    })]
  })
}