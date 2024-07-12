a.r(t), a(47120);
var n = a(735250),
  i = a(470079),
  r = a(548668),
  l = a(231262),
  o = a(501522),
  s = a(442837),
  c = a(153867),
  d = a(706454),
  u = a(626135),
  p = a(981631),
  h = a(689938),
  m = a(256964);
class N extends i.Component {
  shouldScrollToTop(e) {
let {
  location: t
} = e;
return t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
  }
  render() {
let {
  location: e,
  className: t,
  render: a,
  locale: s
} = this.props;
return (0, n.jsx)(o.Z, {
  className: t,
  shouldScrollToTop: this.shouldScrollToTop,
  render: (t, o) => (0, n.jsxs)(i.Fragment, {
    children: [
      (0, n.jsx)(l.h, {
        avoidRouter: !0,
        locale: s,
        authRedirectTo: e.pathname,
        track: u.default.track,
        className: m.marketingHeader,
        onChangeLocale: this.handleHeaderLocaleChange,
        mobileClassName: m.marketingHeader,
        openNavAriaLabel: h.Z.Messages.OPEN_NAVIGATION,
        hideNavAriaLabel: h.Z.Messages.HIDE_NAVIGATION,
        skipToContentLabel: h.Z.Messages.SKIP_TO_CONTENT
      }),
      a(t, o),
      (0, n.jsx)(r.$, {
        locale: s,
        authRedirectTo: e.pathname,
        avoidRouter: !0,
        track: u.default.track,
        className: m.marketingFooter
      })
    ]
  })
});
  }
  constructor(...e) {
var t, a, n;
super(...e), t = this, a = 'handleHeaderLocaleChange', n = e => {
  e !== this.props.locale && c.ZP.overrideLocale(e);
}, a in t ? Object.defineProperty(t, a, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[a] = n;
  }
}
t.default = s.ZP.connectStores([d.default], () => ({
  locale: d.default.locale
}))(N);