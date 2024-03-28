"use strict";
n.r(t), n("47120");
var i, a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  o = n.n(s),
  r = n("442837"),
  d = n("416568"),
  u = n("914010"),
  c = n("583883"),
  f = n("547881"),
  h = n("178528"),
  p = n("669083"),
  g = n("483962"),
  m = n("711553"),
  E = n("689938"),
  S = n("638779");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  let {
    closePopout: t
  } = e;
  return (0, a.jsx)(p.default, {
    onClose: t
  })
}
class I extends(i = l.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n
    } = this.props, i = null != e ? (0, a.jsx)(h.default, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, a.jsx)(m.default, {
      title: E.default.Messages.DIRECT_MESSAGES,
      renderSettings: y,
      onDragStart: this.onDragStart,
      children: (0, a.jsx)(g.default, {})
    }), l = n ? "div" : f.default;
    return (0, a.jsxs)(l, {
      className: o()(S.base, {
        [S.widget]: !n
      }),
      children: [(0, a.jsx)(d.default, {
        isOverlay: !0,
        disableAppDownload: !0,
        isVisible: !t
      }), i]
    })
  }
  constructor(...e) {
    super(...e), v(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(c.Operations.MOVE, e.clientX, e.clientY)
    })
  }
}
v(I, "defaultProps", {
  contained: !1
}), t.default = r.default.connectStores([u.default], () => ({
  selectedGuildId: u.default.getGuildId()
}))(I)