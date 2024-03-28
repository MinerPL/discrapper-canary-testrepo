"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("748780"),
  o = n("924826"),
  u = n("481060"),
  d = n("239091"),
  c = n("617015"),
  f = n("886795");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends s.PureComponent {
  componentWillLeave(e) {
    r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    this.state.opacity.setValue(0), this.state.height.setValue(0), r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: c.PEOPLE_LIST_ITEM_HEIGHT,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: n,
      isContextMenuActive: s
    } = this.state, {
      children: l,
      user: d,
      onClick: c,
      isActive: E
    } = this.props;
    return (0, a.jsx)(o.ListNavigatorItem, {
      id: d.id,
      children: o => (0, a.jsx)(u.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, a.jsx)(r.default.div, {
          className: i()(f.peopleListItem, {
            [f.active]: E || s
          }),
          onContextMenu: e => this.handleContextMenu(e, d),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != c ? c : void 0,
          style: {
            height: e,
            opacity: t
          },
          ...o,
          children: l(n || E || s)
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      height: new r.default.Value(c.PEOPLE_LIST_ITEM_HEIGHT),
      opacity: new r.default.Value(1),
      hovered: !1,
      isContextMenuActive: !1
    }), E(this, "handleMouseEnter", () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: n
      } = this.props, {
        isContextMenuActive: a
      } = this.state;
      this.setState({
        hovered: e
      }), e && !t && !a && (null == n || n())
    }), E(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), E(this, "handleContextMenu", (e, t) => {
      this.setState({
        isContextMenuActive: !0
      }), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("64409")]).then(n.bind(n, "881351"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: () => {
          this.setState({
            isContextMenuActive: !1
          })
        }
      })
    })
  }
}
t.default = h