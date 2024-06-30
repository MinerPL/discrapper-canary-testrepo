a.d(t, {
    h: function () {
        return h;
    }
});
var n = a(735250), i = a(470079), r = a(557533), l = a.n(r), o = a(794010), s = a(653371), c = a(388755), d = a(330711), u = a(681206);
let p = null;
class h extends i.PureComponent {
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: r,
            mobileClassName: o,
            avoidRouter: h,
            authRedirectTo: m,
            openNavAriaLabel: N,
            hideNavAriaLabel: k,
            skipToContentLabel: _
        } = this.props;
        return null == p ? null : (0, n.jsxs)(i.Fragment, {
            children: [
                (0, n.jsx)(s.a, {
                    className: l()(u.desktopHeader, t),
                    TrackClick: p,
                    token: e,
                    avoidRouter: h,
                    authRedirectTo: m,
                    NavigationMessages: d.Z.Messages.Navigation,
                    onChangeLocale: a,
                    mainContentId: r,
                    skipToContentLabel: _
                }),
                (0, n.jsx)(c.D, {
                    className: l()(u.mobileHeader, o),
                    token: e,
                    avoidRouter: h,
                    TrackClick: p,
                    NavigationMessages: d.Z.Messages.Navigation,
                    onChangeLocale: a,
                    openNavAriaLabel: N,
                    hideNavAriaLabel: k
                })
            ]
        });
    }
    constructor(e) {
        super(e), null != e.locale && d.Z.setLocale(e.locale), p = t => (0, n.jsx)(o.Z, {
            track: e.track,
            trackOutboundLink: e.trackOutboundLink,
            ...t
        });
    }
}
