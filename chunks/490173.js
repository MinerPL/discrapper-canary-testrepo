n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(699581),
  s = n(990547),
  o = n(442837),
  l = n(481060),
  u = n(239091),
  c = n(40851),
  d = n(213609),
  _ = n(210887),
  E = n(574254),
  f = n(153850),
  h = n(585483),
  p = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let I = e => {
  let {
children: t,
close: n,
onUnmount: o,
target: u,
rect: _,
position: E,
align: h,
impressionName: m,
impressionProperties: I
  } = e, T = i.useRef(null), g = i.useMemo(() => ({
current: u
  }), [u]);
  i.useEffect(() => {
var e, t;
let r = (0, a.findDOMNode)(T.current);
if (null == r)
  return;
let i = e => {
  let t = e.target,
    r = (0, a.findDOMNode)(T.current);
  if (!(null != r && (0, l.referencePortalAwareContains)(r, t)))
    window.getSelection().removeAllRanges(), n();
};
return null === (e = r.ownerDocument) || void 0 === e || e.addEventListener('click', i, !0), null === (t = r.ownerDocument) || void 0 === t || t.addEventListener('contextmenu', i, !0), () => {
  var e, t;
  null === (e = r.ownerDocument) || void 0 === e || e.removeEventListener('click', i, !0), null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener('contextmenu', i, !0);
};
  }, [n]);
  let S = i.useRef(o);
  i.useEffect(() => void(S.current = o)), i.useEffect(() => () => {
var e;
return null === (e = S.current) || void 0 === e ? void 0 : e.call(S);
  }, []), i.useLayoutEffect(() => {
var e;
null === (e = T.current) || void 0 === e || e.updatePosition();
  }), (0, d.Z)({
type: s.ImpressionTypes.MENU,
name: m,
properties: I
  });
  let A = (0, c.Aq)(),
N = i.useCallback(() => {
  A.dispatch(p.CkL.POPOUT_SHOW);
}, [A]),
v = i.useCallback(() => {
  A.dispatch(p.CkL.POPOUT_HIDE);
}, [A]);
  return (0, r.jsx)(f.W5, {
onMount: N,
onUnmount: v,
targetRef: g,
overrideTargetRect: _,
position: null != E ? E : 'right',
align: null != h ? h : 'top',
autoInvert: !0,
ref: T,
nudgeAlignIntoViewport: !0,
children: t
  });
};
class T extends i.PureComponent {
  componentDidMount() {
let {
  renderLazy: e,
  renderWindow: t
} = this.props;
if (t.addEventListener('resize', this.closeResize, !0), h.S.subscribe(p.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
  let t = setTimeout(() => {
    this.setState({
      render: () => (0, r.jsx)(l.MenuSpinner, {})
    });
  }, 300);
  e().then(e => {
    this.setState({
      render: e
    }), clearTimeout(t);
  });
}
  }
  componentDidUpdate(e) {
let {
  isOpen: t
} = this.props;
if (!t && e.isOpen) {
  var n, r;
  null === (r = e.config) || void 0 === r || null === (n = r.onClose) || void 0 === n || n.call(r);
}
  }
  componentWillUnmount() {
let {
  renderWindow: e
} = this.props;
e.removeEventListener('resize', this.closeResize, !0), h.S.unsubscribe(p.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
  }
  render() {
var e;
let {
  appContext: t,
  target: n,
  isOpen: i,
  theme: a,
  config: s,
  rect: o
} = this.props, l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
return i && null != o && null != s && null != n && null != l && s.context === t ? (0, r.jsx)(I, {
  target: n,
  rect: o,
  close: this.close,
  onUnmount: s.onClose,
  align: s.align,
  position: s.position,
  impressionName: s.impressionName,
  impressionProperties: s.impressionProperties,
  children: (e, r) => {
    let {
      position: i
    } = e;
    return l({
      position: i,
      theme: a,
      onHeightUpdate: r,
      config: s,
      target: n,
      context: t
    });
  }
}) : null;
  }
  constructor(...e) {
super(...e), m(this, 'state', {
  render: void 0
}), m(this, 'closeResize', e => {
  let {
    renderWindow: t
  } = this.props;
  if (e.target === t)
    this.close();
}), m(this, 'close', () => {
  let {
    isOpen: e,
    closeContextMenu: t
  } = this.props;
  e && t();
});
  }
}

function g() {
  let {
contextMenu: e,
version: t,
isOpen: n
  } = (0, o.cj)([E.Z], () => ({
contextMenu: E.Z.getContextMenu(),
version: E.Z.version,
isOpen: E.Z.isOpen()
  })), a = (0, o.e7)([_.Z], () => _.Z.theme), {
appContext: s,
renderWindow: l
  } = i.useContext(c.ZP);
  return (0, r.jsx)(T, {
appContext: s,
renderWindow: l,
...e,
isOpen: n,
theme: a,
closeContextMenu: u.Zy
  }, t);
}