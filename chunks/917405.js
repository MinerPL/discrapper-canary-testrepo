e(47120);
var i = e(200651),
    s = e(192379),
    r = e(120356),
    o = e.n(r),
    l = e(481060),
    a = e(72416),
    c = e(476221),
    u = e(873596),
    E = e(423516),
    d = e(981631),
    N = e(700883);
let C = {
        [d.IE4.UNKNOWN]: l.Tooltip.Colors.BLACK,
        [d.IE4.BAD]: l.Tooltip.Colors.RED,
        [d.IE4.AVERAGE]: l.Tooltip.Colors.YELLOW,
        [d.IE4.FINE]: l.Tooltip.Colors.GREEN
    },
    T = {
        [d.QKv.CONNECTED]: N.rtcConnectionStatusConnected,
        [d.QKv.CONNECTING]: N.rtcConnectionStatusConnecting,
        [d.QKv.ERROR]: N.rtcConnectionStatusError
    },
    g = {
        [d.IE4.FINE]: N.rtcConnectionQualityFine,
        [d.IE4.AVERAGE]: N.rtcConnectionQualityAverage,
        [d.IE4.BAD]: N.rtcConnectionQualityBad,
        [d.IE4.UNKNOWN]: null
    };
class h extends s.PureComponent {
    renderPopoutTarget(t) {
        let n = this.props.channelId;
        return null == n
            ? t({})
            : (0, i.jsx)(l.Popout, {
                  renderPopout: this.renderPopout(n),
                  position: 'top',
                  children: t
              });
    }
    renderStatus() {
        let { hasVideo: t, state: n, channelId: e } = this.props,
            { connectionStatus: s, connectionStatusText: r } = c.Z.getStatus(n, t);
        return this.renderPopoutTarget((t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(l.Button, {
                look: l.Button.Looks.BLANK,
                size: l.Button.Sizes.NONE,
                onClick: n,
                children: (0, i.jsx)(E.Z, {
                    text: r,
                    hasVideo: this.props.hasVideo,
                    className: T[s],
                    hasConnectedChannel: null != e
                })
            });
        });
    }
    render() {
        let t;
        let { quality: n, smallPing: e, lastPing: s, state: r, className: a, children: c } = this.props;
        return (
            r === d.hes.RTC_CONNECTED &&
                (t = (0, i.jsx)(l.Tooltip, {
                    text: n !== d.IE4.UNKNOWN && null != s ? ''.concat(s.toFixed(0), ' ms') : null,
                    color: C[n],
                    children: (t) =>
                        (0, i.jsx)(I, {
                            quality: n,
                            smallPing: e,
                            ...t
                        })
                })),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: o()(N.rtcConnectionStatus, g[n], a),
                        children: [
                            t,
                            (0, i.jsx)('div', {
                                className: N.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    c
                ]
            })
        );
    }
    constructor(...t) {
        var n, e, s;
        super(...t),
            (n = this),
            (e = 'renderPopout'),
            (s = (t) => (n) =>
                (0, i.jsx)(u.Z, {
                    ...n,
                    channelId: t
                })),
            e in n
                ? Object.defineProperty(n, e, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (n[e] = s);
    }
}
function I(t) {
    let { quality: n, smallPing: e, ...s } = t;
    if (!(0, l.useRedesignIconContext)().enabled)
        return (0, i.jsx)(a.Z, {
            className: o()(N.ping, { [N.smallPing]: e }),
            foreground: N.pingForeground
        });
    {
        let t = {
            [d.IE4.FINE]: l.ConnectionFineIcon,
            [d.IE4.AVERAGE]: l.ConnectionAverageIcon,
            [d.IE4.BAD]: l.ConnectionBadIcon,
            [d.IE4.UNKNOWN]: l.ConnectionUnknownIcon
        }[n];
        return (0, i.jsx)(t, {
            className: o()(N.ping, { [N.smallPing]: e }),
            ...s
        });
    }
}
n.Z = h;
