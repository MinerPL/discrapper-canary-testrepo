n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(748780),
  o = n(91192),
  c = n(481060),
  d = n(239091),
  u = n(617015),
  _ = n(234187);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class E extends s.PureComponent {
  componentWillLeave(e) {
l.Z.parallel([
  l.Z.timing(this.state.opacity, {
    toValue: 0,
    duration: 200
  }),
  l.Z.timing(this.state.height, {
    toValue: 0,
    duration: 200
  })
]).start(e);
  }
  componentWillEnter(e) {
this.state.opacity.setValue(0), this.state.height.setValue(0), l.Z.parallel([
  l.Z.timing(this.state.opacity, {
    toValue: 1,
    duration: 200
  }),
  l.Z.timing(this.state.height, {
    toValue: u.NV,
    duration: 200
  })
]).start(e);
  }
  render() {
let {
  height: e,
  opacity: t,
  hovered: n,
  isContextMenuActive: s
} = this.state, {
  children: a,
  user: d,
  onClick: u,
  isActive: h
} = this.props;
return (0, i.jsx)(o.mh, {
  id: d.id,
  children: o => (0, i.jsx)(c.FocusRing, {
    offset: {
      left: -8,
      right: -8
    },
    children: (0, i.jsx)(l.Z.div, {
      className: r()(_.peopleListItem, {
        [_.active]: h || s
      }),
      onContextMenu: e => this.handleContextMenu(e, d),
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onClick: null != u ? u : void 0,
      style: {
        height: e,
        opacity: t
      },
      ...o,
      children: a(n || h || s)
    })
  })
});
  }
  constructor(...e) {
super(...e), h(this, 'state', {
  height: new l.Z.Value(u.NV),
  opacity: new l.Z.Value(1),
  hovered: !1,
  isContextMenuActive: !1
}), h(this, 'handleMouseEnter', () => {
  let {
    isFocused: e,
    isActive: t,
    onOtherHover: n
  } = this.props, {
    isContextMenuActive: i
  } = this.state;
  this.setState({
    hovered: e
  }), e && !t && !i && (null == n || n());
}), h(this, 'handleMouseLeave', () => {
  this.setState({
    hovered: !1
  });
}), h(this, 'handleContextMenu', (e, t) => {
  this.setState({
    isContextMenuActive: !0
  }), (0, d.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('17400'),
      n.e('13806')
    ]).then(n.bind(n, 881351));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t
    });
  }, {
    onClose: () => {
      this.setState({
        isContextMenuActive: !1
      });
    }
  });
});
  }
}
t.Z = E;