"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var s, l = n("735250"),
  i = n("470079"),
  a = n("39383"),
  r = n.n(a),
  o = n("948789"),
  c = n("66037"),
  u = n("950132"),
  d = n("231338"),
  p = n("431138"),
  h = n("140293");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = d.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
class m extends(s = i.PureComponent) {
  render() {
    let {
      title: e,
      links: t,
      isOpen: n,
      isMobile: s,
      TrackClick: i,
      avoidRouter: a
    } = this.props, r = s && n ? (0, l.jsx)("ul", {
      className: h.mobileSubMenuOpen,
      id: this._dropdownId,
      children: this.renderMobileSubMenu()
    }) : null;
    return s ? (0, l.jsxs)("li", {
      className: h.__invalid_subListHeading,
      tabIndex: -1,
      onClick: this.toggleMenu,
      onKeyDown: this.handleKeyDown,
      children: [(0, l.jsxs)("span", {
        className: h.mobileMenuItem,
        "aria-label": "Open ".concat(e, " Nav"),
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        "aria-haspopup": "true",
        role: "menuitem",
        tabIndex: 0,
        children: [e, (0, l.jsx)("img", {
          src: p.Images.ICON_ARROW_DOWN,
          className: h.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), r]
    }, "dropdown_".concat(e)) : (0, l.jsxs)("li", {
      role: "none",
      tabIndex: -1,
      onFocus: this.openMenu,
      onBlur: this.closeMenu,
      onMouseEnter: this.openMenu,
      onMouseLeave: this.closeMenu,
      className: h.desktopSubMenuItem,
      children: [(0, l.jsxs)("span", {
        className: h.desktopMenuMore,
        role: "menuitem",
        tabIndex: 0,
        "aria-haspopup": "true",
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        children: [e, (0, l.jsx)("img", {
          src: p.Images.ICON_ARROW_DOWN,
          className: h.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), (0, l.jsx)(u.DropdownMenu, {
        id: this._dropdownId,
        avoidRouter: a,
        TrackClick: i,
        isOpen: n,
        dropdownLinks: t,
        "aria-label": e
      })]
    }, "dropdown_".concat(e))
  }
  constructor(...e) {
    super(...e), N(this, "_dropdownId", r()("subMenuDropdown")), N(this, "closeMenu", () => {
      this.props.onClose()
    }), N(this, "openMenu", () => {
      let {
        title: e,
        onOpen: t
      } = this.props;
      t(e)
    }), N(this, "toggleMenu", () => {
      let {
        isOpen: e,
        title: t,
        onOpen: n,
        onClose: s
      } = this.props;
      e ? s() : n(t)
    }), N(this, "handleKeyDown", e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.toggleMenu())
    }), N(this, "renderMobileSubMenu", () => {
      let {
        links: e,
        TrackClick: t,
        avoidRouter: n
      } = this.props, s = (0, o.isActiveCreator)(this.context.router);
      return e.map(e => e.external ? (0, l.jsx)("li", {
        className: h.subListItemInactive,
        children: (0, l.jsx)(t, {
          eventName: g,
          className: h.subListItemLink,
          data: {
            linkClicked: "mobile-".concat(e.linkClicked)
          },
          rel: "me",
          href: e.route,
          children: e.title
        })
      }, e.route) : (0, l.jsx)("li", {
        className: s(e.route) ? h.subListItemActive : h.subListItemInactive,
        children: (0, l.jsx)(c.default, {
          avoidRouter: n,
          to: e.route,
          from: d.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          children: (0, l.jsx)(t, {
            className: h.subListItemLink,
            tag: "span",
            eventName: g,
            data: {
              linkClicked: "mobile-".concat(e.linkClicked)
            },
            children: e.title
          })
        })
      }, e.route))
    })
  }
}
N(m, "defaultProps", {
  isOpen: !1,
  isMobileMenuOpen: !1
})