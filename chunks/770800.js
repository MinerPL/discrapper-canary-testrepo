n(571269), n(298267);
var r = n(735250),
    a = n(470079),
    i = n(392711),
    o = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(600164),
    d = n(19780),
    u = n(226961),
    m = n(914010),
    p = n(959457),
    h = n(246946),
    g = n(594174),
    f = n(5192),
    C = n(476221),
    y = n(481250),
    S = n(206314),
    R = n(513547),
    D = n(65154),
    v = n(689938),
    b = n(876975),
    E = n(224499);
class Z extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: n, hostname: a } = this.props;
        if (null == e) return (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            s = o().map(i, (e, t) => {
                if ('receiverReports' !== t && (!n || 'localAddress' !== t))
                    return (0, r.jsx)(
                        R.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            d = o().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (o = e.bitrate.at(-1)) || void 0 === o ? void 0 : o.value) : e,
                    n = (0, r.jsxs)(c.Z, {
                        id: 'bitrate-'.concat(e.id),
                        justify: c.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)('span', { children: 'Bitrate:' }),
                            (0, r.jsxs)('span', {
                                children: [(t / 1000).toFixed(2), ' Kbps']
                            })
                        ]
                    }),
                    a = (0, r.jsxs)(c.Z, {
                        id: 'lost-'.concat(e.id),
                        justify: c.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)('span', { children: 'Packet Loss:' }),
                            (0, r.jsxs)('span', {
                                children: [((100 * e.fractionLost) / 256).toFixed(0), '%']
                            })
                        ]
                    }),
                    i = g.default.getUser(e.id);
                var o,
                    s = f.ZP.getNickname(m.Z.getGuildId(), void 0, i);
                return (
                    null == s && (s = null != i ? i.username : e.id),
                    (0, r.jsx)(
                        S.Z,
                        {
                            label: e.id,
                            valueRendered: [n, a],
                            children: s
                        },
                        e.id
                    )
                );
            });
        return (0, r.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: v.Z.Messages.RTC_DEBUG_TRANSPORT + (null != t ? ' - ' + t : ''),
            className: b.allowSelection,
            children: [(0, y.a)(s), 0 === d.length ? null : (0, r.jsx)(l.FormDivider, { className: E.marginBottom20 }), (0, y.a)(d)]
        });
    }
}
t.Z = s.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    let { context: t, index: n } = e,
        r = u.ZP.getAllStats(t)[n],
        a = t === D.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : d.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != r ? r.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: C.Z.getShortHostname(a)
    };
})(Z);
