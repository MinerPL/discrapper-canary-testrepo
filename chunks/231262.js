"use strict";
n.r(t), n.d(t, {
  Header: function() {
    return h
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("557533"),
  i = n.n(a),
  r = n("794010"),
  o = n("653371"),
  c = n("388755"),
  u = n("330711"),
  d = n("975639");
let p = null;
class h extends l.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: n,
      mainContentId: a,
      mobileClassName: r,
      avoidRouter: h,
      authRedirectTo: N,
      openNavAriaLabel: g,
      hideNavAriaLabel: m,
      skipToContentLabel: k
    } = this.props;
    return null == p ? null : (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(o.DesktopHeader, {
        className: i()(d.desktopHeader, t),
        TrackClick: p,
        token: e,
        avoidRouter: h,
        authRedirectTo: N,
        NavigationMessages: u.default.Messages.Navigation,
        onChangeLocale: n,
        mainContentId: a,
        skipToContentLabel: k
      }), (0, s.jsx)(c.MobileHeader, {
        className: i()(d.mobileHeader, r),
        token: e,
        avoidRouter: h,
        TrackClick: p,
        NavigationMessages: u.default.Messages.Navigation,
        onChangeLocale: n,
        openNavAriaLabel: g,
        hideNavAriaLabel: m
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && u.default.setLocale(e.locale), p = t => (0, s.jsx)(r.default, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}