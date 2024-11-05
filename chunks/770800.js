n(571269), n(298267);
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    c = n(600164),
    d = n(19780),
    u = n(226961),
    m = n(914010),
    p = n(959457),
    h = n(246946),
    g = n(594174),
    f = n(5192),
    y = n(476221),
    b = n(481250),
    S = n(206314),
    v = n(513547),
    C = n(65154),
    D = n(388032),
    F = n(701491),
    R = n(113207);
class E extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: n, hostname: a } = this.props;
        if (null == e) return (0, r.jsx)(s.Spinner, { type: s.Spinner.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            l = o().map(i, (e, t) => {
                if ('receiverReports' !== t && (!n || 'localAddress' !== t))
                    return (0, r.jsx)(
                        v.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            d = o().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (r = e.bitrate.at(-1)) || void 0 === r ? void 0 : r.value) : e.bitrate,
                    n = g.default.getUser(e.id);
                var r,
                    a = f.ZP.getNickname(m.Z.getGuildId(), void 0, n);
                return (
                    null == a && (a = null != n ? n.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256
                    }
                );
            }),
            u = o().sortBy(d, (e) => e.displayName),
            p = o().map(u, (e) =>
                (function (e, t, n) {
                    let a = (0, r.jsxs)(c.Z, {
                            id: 'bitrate-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Bitrate:' }),
                                (0, r.jsxs)('span', {
                                    children: [t.toFixed(2), ' Kbps']
                                })
                            ]
                        }),
                        i = (0, r.jsxs)(c.Z, {
                            id: 'lost-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Packet Loss:' }),
                                (0, r.jsxs)('span', {
                                    children: [n.toFixed(0), '%']
                                })
                            ]
                        });
                    return (0, r.jsx)(
                        S.Z,
                        {
                            label: e,
                            valueRendered: [a, i],
                            children: e
                        },
                        e
                    );
                })(e.displayName, e.bitrate, e.lost)
            );
        return (0, r.jsxs)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: D.intl.string(D.t.wU9INz) + (null != t ? ' - ' + t : ''),
            className: F.allowSelection,
            children: [(0, b.a)(l), 0 === p.length ? null : (0, r.jsx)(s.FormDivider, { className: R.marginBottom20 }), (0, b.a)(p)]
        });
    }
}
t.Z = l.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    let { context: t, index: n } = e,
        r = u.ZP.getAllStats(t)[n],
        a = t === C.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : d.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != r ? r.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: y.Z.getShortHostname(a)
    };
})(E);
