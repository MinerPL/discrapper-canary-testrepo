a.d(t, {
  Z: function() {
return k;
  }
}), a(47120);
var n, i = a(735250),
  r = a(470079),
  l = a(39383),
  o = a.n(l),
  s = a(948789),
  c = a(66037),
  d = a(950132),
  u = a(231338),
  h = a(431138),
  m = a(166292);

function p(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = a, e;
}
let N = u.j_.MAIN_NAVIGATION_MENU;
class k extends(n = r.PureComponent) {
  render() {
let {
  title: e,
  links: t,
  isOpen: a,
  isMobile: n,
  TrackClick: r,
  avoidRouter: l
} = this.props, o = n && a ? (0, i.jsx)('ul', {
  className: m.mobileSubMenuOpen,
  id: this._dropdownId,
  children: this.renderMobileSubMenu()
}) : null;
return n ? (0, i.jsxs)('li', {
  className: m.__invalid_subListHeading,
  tabIndex: -1,
  onClick: this.toggleMenu,
  onKeyDown: this.handleKeyDown,
  children: [
    (0, i.jsxs)('span', {
      className: m.mobileMenuItem,
      'aria-label': 'Open '.concat(e, ' Nav'),
      'aria-expanded': a,
      'aria-controls': this._dropdownId,
      'aria-haspopup': 'true',
      role: 'menuitem',
      tabIndex: 0,
      children: [
        e,
        (0, i.jsx)('img', {
          src: h.r.ICON_ARROW_DOWN,
          className: m.iconArrow,
          alt: 'Open Nav'
        })
      ]
    }, 'more'),
    o
  ]
}, 'dropdown_'.concat(e)) : (0, i.jsxs)('li', {
  role: 'none',
  tabIndex: -1,
  onFocus: this.openMenu,
  onBlur: this.closeMenu,
  onMouseEnter: this.openMenu,
  onMouseLeave: this.closeMenu,
  className: m.desktopSubMenuItem,
  children: [
    (0, i.jsxs)('span', {
      className: m.desktopMenuMore,
      role: 'menuitem',
      tabIndex: 0,
      'aria-haspopup': 'true',
      'aria-expanded': a,
      'aria-controls': this._dropdownId,
      children: [
        e,
        (0, i.jsx)('img', {
          src: h.r.ICON_ARROW_DOWN,
          className: m.iconArrow,
          alt: 'Open Nav'
        })
      ]
    }, 'more'),
    (0, i.jsx)(d.h, {
      id: this._dropdownId,
      avoidRouter: l,
      TrackClick: r,
      isOpen: a,
      dropdownLinks: t,
      'aria-label': e
    })
  ]
}, 'dropdown_'.concat(e));
  }
  constructor(...e) {
super(...e), p(this, '_dropdownId', o()('subMenuDropdown')), p(this, 'closeMenu', () => {
  this.props.onClose();
}), p(this, 'openMenu', () => {
  let {
    title: e,
    onOpen: t
  } = this.props;
  t(e);
}), p(this, 'toggleMenu', () => {
  let {
    isOpen: e,
    title: t,
    onOpen: a,
    onClose: n
  } = this.props;
  e ? n() : a(t);
}), p(this, 'handleKeyDown', e => {
  ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), this.toggleMenu());
}), p(this, 'renderMobileSubMenu', () => {
  let {
    links: e,
    TrackClick: t,
    avoidRouter: a
  } = this.props, n = (0, s.fQ)(this.context.router);
  return e.map(e => e.external ? (0, i.jsx)('li', {
    className: m.subListItemInactive,
    children: (0, i.jsx)(t, {
      eventName: N,
      className: m.subListItemLink,
      data: {
        linkClicked: 'mobile-'.concat(e.linkClicked)
      },
      rel: 'me',
      href: e.route,
      children: e.title
    })
  }, e.route) : (0, i.jsx)('li', {
    className: n(e.route) ? m.subListItemActive : m.subListItemInactive,
    children: (0, i.jsx)(c.Z, {
      avoidRouter: a,
      to: e.route,
      from: u.j_.MAIN_NAVIGATION_MENU,
      children: (0, i.jsx)(t, {
        className: m.subListItemLink,
        tag: 'span',
        eventName: N,
        data: {
          linkClicked: 'mobile-'.concat(e.linkClicked)
        },
        children: e.title
      })
    })
  }, e.route));
});
  }
}
p(k, 'defaultProps', {
  isOpen: !1,
  isMobileMenuOpen: !1
});