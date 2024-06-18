"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(699581),
  o = n(990547),
  a = n(442837),
  l = n(481060),
  u = n(239091),
  _ = n(40851),
  d = n(213609),
  c = n(210887),
  E = n(574254),
  I = n(153850),
  T = n(585483),
  h = n(981631);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = e => {
  let {
    children: t,
    close: n,
    onUnmount: a,
    target: u,
    rect: c,
    position: E,
    align: T,
    impressionName: S,
    impressionProperties: f
  } = e, N = r.useRef(null), A = r.useMemo(() => ({
    current: u
  }), [u]);
  r.useEffect(() => {
    var e, t;
    let i = (0, s.findDOMNode)(N.current);
    if (null == i) return;
    let r = e => {
      let t = e.target,
        i = (0, s.findDOMNode)(N.current);
      if (!(null != i && (0, l.referencePortalAwareContains)(i, t))) window.getSelection().removeAllRanges(), n()
    };
    return null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
      var e, t;
      null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
    }
  }, [n]);
  let m = r.useRef(a);
  r.useEffect(() => void(m.current = a)), r.useEffect(() => () => {
    var e;
    return null === (e = m.current) || void 0 === e ? void 0 : e.call(m)
  }, []), r.useLayoutEffect(() => {
    var e;
    null === (e = N.current) || void 0 === e || e.updatePosition()
  }), (0, d.Z)({
    type: o.ImpressionTypes.MENU,
    name: S,
    properties: f
  });
  let O = (0, _.Aq)(),
    R = r.useCallback(() => {
      O.dispatch(h.CkL.POPOUT_SHOW)
    }, [O]),
    C = r.useCallback(() => {
      O.dispatch(h.CkL.POPOUT_HIDE)
    }, [O]);
  return (0, i.jsx)(I.W5, {
    onMount: R,
    onUnmount: C,
    targetRef: A,
    overrideTargetRect: c,
    position: null != E ? E : "right",
    align: null != T ? T : "top",
    autoInvert: !0,
    ref: N,
    nudgeAlignIntoViewport: !0,
    children: t
  })
};
class N extends r.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, !0), T.S.subscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, i.jsx)(l.MenuSpinner, {})
        })
      }, 300);
      e().then(e => {
        this.setState({
          render: e
        }), clearTimeout(t)
      })
    }
  }
  componentDidUpdate(e) {
    let {
      isOpen: t
    } = this.props;
    if (!t && e.isOpen) {
      var n, i;
      null === (i = e.config) || void 0 === i || null === (n = i.onClose) || void 0 === n || n.call(i)
    }
  }
  componentWillUnmount() {
    let {
      renderWindow: e
    } = this.props;
    e.removeEventListener("resize", this.closeResize, !0), T.S.unsubscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e;
    let {
      appContext: t,
      target: n,
      isOpen: r,
      theme: s,
      config: o,
      rect: a
    } = this.props, l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
    return r && null != a && null != o && null != n && null != l && o.context === t ? (0, i.jsx)(f, {
      target: n,
      rect: a,
      close: this.close,
      onUnmount: o.onClose,
      align: o.align,
      position: o.position,
      impressionName: o.impressionName,
      impressionProperties: o.impressionProperties,
      children: (e, i) => {
        let {
          position: r
        } = e;
        return l({
          position: r,
          theme: s,
          onHeightUpdate: i,
          config: o,
          target: n,
          context: t
        })
      }
    }) : null
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      render: void 0
    }), S(this, "closeResize", e => {
      let {
        renderWindow: t
      } = this.props;
      if (e.target === t) this.close()
    }), S(this, "close", () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    })
  }
}

function A() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, a.cj)([E.Z], () => ({
    contextMenu: E.Z.getContextMenu(),
    version: E.Z.version,
    isOpen: E.Z.isOpen()
  })), s = (0, a.e7)([c.Z], () => c.Z.theme), {
    appContext: o,
    renderWindow: l
  } = r.useContext(_.ZP);
  return (0, i.jsx)(N, {
    appContext: o,
    renderWindow: l,
    ...e,
    isOpen: n,
    theme: s,
    closeContextMenu: u.Zy
  }, t)
}