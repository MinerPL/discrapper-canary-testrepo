"use strict";
s.r(t), s.d(t, {
  Header: function() {
    return h
  }
});
var n = s("37983"),
  l = s("884691"),
  a = s("421898"),
  i = s.n(a),
  r = s("518066"),
  o = s("719562"),
  c = s("717443"),
  u = s("792788"),
  d = s("694663");
let p = null;
class h extends l.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: s,
      mainContentId: a,
      mobileClassName: r,
      avoidRouter: h,
      authRedirectTo: N,
      openNavAriaLabel: g,
      hideNavAriaLabel: m,
      skipToContentLabel: k
    } = this.props;
    return null == p ? null : (0, n.jsxs)(l.Fragment, {
      children: [(0, n.jsx)(o.DesktopHeader, {
        className: i(d.desktopHeader, t),
        TrackClick: p,
        token: e,
        avoidRouter: h,
        authRedirectTo: N,
        NavigationMessages: u.default.Messages.Navigation,
        onChangeLocale: s,
        mainContentId: a,
        skipToContentLabel: k
      }), (0, n.jsx)(c.MobileHeader, {
        className: i(d.mobileHeader, r),
        token: e,
        avoidRouter: h,
        TrackClick: p,
        NavigationMessages: u.default.Messages.Navigation,
        onChangeLocale: s,
        openNavAriaLabel: g,
        hideNavAriaLabel: m
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && u.default.setLocale(e.locale), p = t => (0, n.jsx)(r.default, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}