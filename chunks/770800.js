n(571269), n(298267);
var r = n(735250), a = n(470079), i = n(392711), o = n.n(i), s = n(442837), l = n(481060), c = n(19780), d = n(226961), u = n(914010), m = n(959457), p = n(246946), h = n(594174), g = n(285952), f = n(5192), C = n(476221), y = n(481250), R = n(206314), S = n(513547), D = n(65154), v = n(689938), b = n(16281), E = n(331651);
class Z extends a.PureComponent {
    render() {
        let {
            transport: e,
            mediaSessionId: t,
            hidePersonalInformation: n,
            hostname: a
        } = this.props;
        if (null == e)
            return (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            }, s = o().map(i, (e, t) => {
                if ('receiverReports' !== t && (!n || 'localAddress' !== t))
                    return (0, r.jsx)(S.ck, {
                        label: t,
                        value: e
                    }, t);
            }), c = o().map(i.receiverReports, e => {
                let t = Array.isArray(e.bitrate) ? null === (o = e.bitrate.at(-1)) || void 0 === o ? void 0 : o.value : e, n = (0, r.jsxs)(g.Z, {
                        id: 'bitrate-'.concat(e.id),
                        justify: g.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)('span', { children: 'Bitrate:' }),
                            (0, r.jsxs)('span', {
                                children: [
                                    (t / 1000).toFixed(2),
                                    ' Kbps'
                                ]
                            })
                        ]
                    }), a = (0, r.jsxs)(g.Z, {
                        id: 'lost-'.concat(e.id),
                        justify: g.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)('span', { children: 'Packet Loss:' }),
                            (0, r.jsxs)('span', {
                                children: [
                                    (100 * e.fractionLost / 256).toFixed(0),
                                    '%'
                                ]
                            })
                        ]
                    }), i = h.default.getUser(e.id);
                var o, s = f.ZP.getNickname(u.Z.getGuildId(), void 0, i);
                return null == s && (s = null != i ? i.username : e.id), (0, r.jsx)(R.Z, {
                    label: e.id,
                    valueRendered: [
                        n,
                        a
                    ],
                    children: s
                }, e.id);
            });
        return (0, r.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: v.Z.Messages.RTC_DEBUG_TRANSPORT + (null != t ? ' - ' + t : ''),
            className: b.allowSelection,
            children: [
                (0, y.a)(s),
                0 === c.length ? null : (0, r.jsx)(l.FormDivider, { className: E.marginBottom20 }),
                (0, y.a)(c)
            ]
        });
    }
}
t.Z = s.ZP.connectStores([
    d.ZP,
    c.Z,
    p.Z,
    m.Z
], e => {
    let {
            context: t,
            index: n
        } = e, r = d.ZP.getAllStats(t)[n], a = t === D.Yn.STREAM ? m.Z.getHostname(m.Z.getActiveStreamKey()) : c.Z.getHostname();
    return {
        hidePersonalInformation: p.Z.hidePersonalInformation,
        transport: null != r ? r.transport : null,
        mediaSessionId: c.Z.getMediaSessionId(),
        hostname: C.Z.getShortHostname(a)
    };
})(Z);
