"use strict";
n.r(t), n.d(t, {
  TestModeSKUButtonEnums: function() {
    return _
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("239091"),
  o = n("585237"),
  u = n("812206"),
  d = n("55563"),
  c = n("73346"),
  f = n("689938");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  DropdownSizes: o.default.DropdownSizes,
  Sizes: o.default.Sizes,
  Colors: o.default.Colors,
  Looks: o.default.Looks
};
class T extends a.PureComponent {
  render() {
    let {
      skus: e,
      children: t,
      applicationId: n,
      primarySKU: a,
      onSKUSelect: l,
      ...i
    } = this.props;
    return (0, s.jsx)(o.default, {
      onClick: this.handleClick,
      onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
      onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
      ...i,
      children: t
    })
  }
  constructor(...e) {
    super(...e), E(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, s.jsx)(i.Menu, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": f.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: r.closeContextMenu,
        children: e.map(e => (0, s.jsx)(i.MenuItem, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), E(this, "handleContextMenu", e => {
      e.stopPropagation(), r.openContextMenu(e, this.renderContextMenu)
    }), E(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
t.default = l.default.connectStores([d.default, u.default], e => {
  var t;
  let {
    applicationId: n
  } = e, s = (0, c.getPrimarySKUForApplication)(n, u.default, d.default);
  return {
    skus: (null !== (t = d.default.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => null != s && e.id === s.id ? -1 : null != s && t.id === s.id ? 1 : e.name >= t.name ? -1 : 1),
    primarySKU: s
  }
})(T)