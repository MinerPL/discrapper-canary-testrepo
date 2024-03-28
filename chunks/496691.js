"use strict";
n.r(t), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("548668"),
  i = n("231262"),
  r = n("501522"),
  o = n("442837"),
  c = n("153867"),
  u = n("706454"),
  d = n("626135"),
  p = n("981631"),
  h = n("689938"),
  N = n("757473");
class g extends l.Component {
  shouldScrollToTop(e) {
    let {
      location: t
    } = e;
    return t.pathname.startsWith(p.Routes.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(p.Routes.APPLICATION_STORE_LISTING_APPLICATION(""))
  }
  render() {
    let {
      location: e,
      className: t,
      render: n,
      locale: o
    } = this.props;
    return (0, s.jsx)(r.default, {
      className: t,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, r) => (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(i.Header, {
          avoidRouter: !0,
          locale: o,
          authRedirectTo: e.pathname,
          track: d.default.track,
          className: N.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: N.marketingHeader,
          openNavAriaLabel: h.default.Messages.OPEN_NAVIGATION,
          hideNavAriaLabel: h.default.Messages.HIDE_NAVIGATION,
          skipToContentLabel: h.default.Messages.SKIP_TO_CONTENT
        }), n(t, r), (0, s.jsx)(a.Footer, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: !0,
          track: d.default.track,
          className: N.marketingFooter
        })]
      })
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleHeaderLocaleChange", s = e => {
      e !== this.props.locale && c.default.overrideLocale(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.default = o.default.connectStores([u.default], () => ({
  locale: u.default.locale
}))(g)