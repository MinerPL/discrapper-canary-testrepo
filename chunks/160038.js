n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(46973),
    o = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    p = n(626135),
    _ = n(572004),
    f = n(63063),
    g = n(476221),
    m = n(981631),
    C = n(65154),
    I = n(689938),
    E = n(574519);
let N = () => {
    h.Z.getMediaEngine().once(s.aB.ConnectionStats, (e) => {
        let t = Object.values(C.Yn)
            .map((t) => {
                let n = e
                    .filter((e) => {
                        let { connection: n } = e;
                        return n.context === t;
                    })
                    .map((e, n) => {
                        let i = e.stats;
                        return (i.context = t), (i.index = n), i;
                    });
                for (let e of n) {
                    var i;
                    (null == e ? void 0 : null === (i = e.transport) || void 0 === i ? void 0 : i.localAddress) != null && (e.transport.localAddress = '(redacted)');
                }
                return n;
            })
            .filter((e) => e.length > 0);
        (0, _.JG)(JSON.stringify(t, null, 2)), (0, o.showToast)((0, o.createToast)(I.Z.Messages.COPIED, o.ToastType.SUCCESS));
    });
};
t.Z = function (e) {
    (0, l.useEffect)(() => {
        p.default.track(m.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
    }, []);
    let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
        }, [e]),
        n = (0, l.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: s } = e,
                o = d.Sb.getSetting();
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    o &&
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)('div', {
                                    className: E.graphContainer,
                                    children: (0, i.jsx)(u.Z, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: E.popoutText,
                                    children: (0, i.jsx)('strong', { children: g.Z.getShortHostname(t) })
                                })
                            ]
                        }),
                    (0, i.jsx)('div', {
                        className: E.popoutText,
                        children: I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format({ averagePing: n.toFixed(0) })
                    }),
                    null != r
                        ? (0, i.jsx)('div', {
                              className: E.popoutText,
                              children: I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format({ lastPing: r.toFixed(0) })
                          })
                        : null,
                    null != s
                        ? (0, i.jsx)('div', {
                              className: E.popoutText,
                              children: I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format({ outboundLossRate: s.toFixed(1) })
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: a()(E.popoutText, E.popoutTextDetails),
                        children: [
                            null == s ? I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format({ badPing: 250 }) : null,
                            null != s
                                ? I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format({
                                      badPing: 250,
                                      badLossRate: 10
                                  })
                                : null
                        ]
                    })
                ]
            });
        }, [e]),
        { connectionState: r, connectionTypeText: s } = e,
        _ = d.Sb.getSetting(),
        x = {
            [m.hes.AWAITING_ENDPOINT]: I.Z.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({ url: m.yXt.STATUS }),
            [m.hes.CONNECTING]: I.Z.Messages.RTC_CONNECTION_STATE_CONNECTING,
            [m.hes.AUTHENTICATING]: I.Z.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
            [m.hes.DISCONNECTED]: I.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
            [m.hes.RTC_CONNECTING]: I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
            [m.hes.ICE_CHECKING]: I.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({ url: f.Z.getArticleURL(m.BhN.VOICE_CONNECTION_ERRORS) }),
            [m.hes.DTLS_CONNECTING]: I.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({ url: f.Z.getArticleURL(m.BhN.VOICE_CONNECTION_ERRORS) }),
            [m.hes.RTC_CONNECTED]: n,
            [m.hes.NO_ROUTE]: I.Z.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({ url: f.Z.getArticleURL(m.BhN.VOICE_CONNECTION_ERRORS) }),
            [m.hes.RTC_DISCONNECTED]: I.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED
        }[r];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            'function' == typeof x
                ? x()
                : (0, i.jsx)('p', {
                      className: a()(E.popoutText, E.popoutTextDetails),
                      children: x
                  }),
            (0, i.jsx)('hr', { className: E.separator }),
            (0, i.jsxs)('div', {
                className: E.popoutBottom,
                children: [
                    (0, i.jsxs)('span', {
                        className: a()(E.secured, E.textWithIcon),
                        children: [
                            (0, i.jsx)(o.LockIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_POSITIVE.css,
                                className: E.__invalid_icon
                            }),
                            s
                        ]
                    }),
                    _ &&
                        h.Z.supports(C.AN.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(o.Anchor, {
                                    className: a()(E.debugButton, E.textWithIcon),
                                    onClick: t,
                                    children: [
                                        I.Z.Messages.DEBUG,
                                        (0, i.jsx)(o.WindowLaunchIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: E.__invalid_icon
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(o.Anchor, {
                                    className: a()(E.copyStatsButton, E.textWithIcon),
                                    onClick: N,
                                    title: 'Copy to clipboard',
                                    children: [
                                        I.Z.Messages.COPY_STATS,
                                        (0, i.jsx)(o.CopyIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: E.__invalid_icon
                                        })
                                    ]
                                })
                            ]
                        }),
                    !_ &&
                        !__OVERLAY__ &&
                        (0, i.jsx)(o.Anchor, {
                            className: E.debugButton,
                            href: f.Z.getArticleURL(m.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                            children: I.Z.Messages.LEARN_MORE
                        })
                ]
            })
        ]
    });
};
