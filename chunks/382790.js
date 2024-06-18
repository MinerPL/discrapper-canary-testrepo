"use strict";
n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(442837),
  d = n(416568),
  c = n(914010),
  u = n(583883),
  h = n(547881),
  p = n(178528),
  f = n(669083),
  E = n(483962),
  Z = n(711553),
  g = n(689938),
  m = n(974285);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function I(e) {
  let {
    closePopout: t
  } = e;
  return (0, s.jsx)(f.Z, {
    onClose: t
  })
}
class S extends(i = l.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n
    } = this.props, i = null != e ? (0, s.jsx)(p.Z, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, s.jsx)(Z.Z, {
      title: g.Z.Messages.DIRECT_MESSAGES,
      renderSettings: I,
      onDragStart: this.onDragStart,
      children: (0, s.jsx)(E.Z, {})
    }), l = n ? "div" : h.ZP;
    return (0, s.jsxs)(l, {
      className: o()(m.base, {
        [m.widget]: !n
      }),
      children: [(0, s.jsx)(d.Z, {
        isOverlay: !0,
        disableAppDownload: !0,
        isVisible: !t
      }), i]
    })
  }
  constructor(...e) {
    super(...e), _(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(u.B.MOVE, e.clientX, e.clientY)
    })
  }
}
_(S, "defaultProps", {
  contained: !1
}), t.Z = r.ZP.connectStores([c.Z], () => ({
  selectedGuildId: c.Z.getGuildId()
}))(S)