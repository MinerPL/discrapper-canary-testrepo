n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(91192), o = n(286379), c = n(481060), d = n(183126), u = n(209613), _ = n(797614), E = n(151827), h = n(626135), I = n(26373), m = n(486622), p = n(922409), g = n(727813), T = n(355350), S = n(307947), C = n(125855), N = n(687683), f = n(981631), A = n(689938), Z = n(964058);
function L() {
    let e = s.useRef(null), t = (0, g.Z)(), n = (0, T.w)(), a = (0, I.V)(), L = (0, d.N)(), v = (0, u.Z)('message-requests-spam-list'), {channelId: O} = (0, p._)(), R = s.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(A.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE));
        }, []), {rejectAll: x} = (0, m.m)({ onError: R }), P = s.useCallback(() => {
            x(t.map(e => e.channel.id));
        }, [
            t,
            x
        ]);
    s.useEffect(() => {
        h.default.track(f.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), _.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    }, []);
    let b = s.useCallback(e => {
            var n, s;
            let {row: l} = e, o = t[l], c = null === (s = t[l + 1]) || void 0 === s ? void 0 : null === (n = s.channel) || void 0 === n ? void 0 : n.id, d = o.channel.id;
            return (0, i.jsx)(C.Z, {
                index: l,
                className: r()({
                    [Z.selected]: null != O && O === d,
                    [Z.siblingSelected]: null != O && O === c
                }),
                channel: o.channel,
                user: o.user,
                hasSingleMessageRequest: a
            }, d);
        }, [
            t,
            a,
            O
        ]), M = s.useCallback(() => (0, i.jsxs)(E.Z, {
            className: Z.sectionTitle,
            children: [
                A.Z.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({ count: n }),
                L && n > 0 ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: Z.titleDivider,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            tag: 'span',
                            children: '\u2022'
                        }),
                        (0, i.jsx)(c.Button, {
                            onClick: P,
                            look: c.ButtonLooks.LINK,
                            color: c.ButtonColors.LINK,
                            size: c.ButtonSizes.SMALL,
                            className: Z.clearAllButton,
                            'aria-label': A.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
                            children: A.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
                        })
                    ]
                }) : null
            ]
        }, 'message-requests-spam-title'), [
            n,
            P,
            L
        ]);
    return 0 === t.length ? (0, i.jsx)(S.Z, { section: N.pS.SPAM }) : (0, i.jsx)(l.bG, {
        navigator: v,
        children: (0, i.jsx)(l.SJ, {
            children: n => {
                let {
                    ref: s,
                    role: a,
                    ...r
                } = n;
                return (0, i.jsx)(c.List, {
                    className: Z.list,
                    innerRole: a,
                    innerAriaLabel: A.Z.Messages.MESSAGE_REQUESTS,
                    ref: t => {
                        var n;
                        e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null;
                    },
                    paddingTop: 24,
                    paddingBottom: 24,
                    sectionHeight: N.oi,
                    rowHeight: N.WN,
                    renderSection: M,
                    renderRow: b,
                    sections: [t.length],
                    chunkSize: 30,
                    fade: !0,
                    ...r
                }, 'message-requests-spam-list');
            }
        })
    });
}
