n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250), s = n(470079), a = n(442837), r = n(481060), l = n(541716), o = n(910611), c = n(355298), d = n(333984), u = n(26373), _ = n(486622), E = n(718538), h = n(359110), I = n(6025), m = n(433355), p = n(502568), g = n(933557), T = n(287746), S = n(689938), C = n(415412), N = n(231110);
function f(e) {
    let {
            channel: t,
            baseChannelId: n
        } = e, f = (0, g.ZP)(t), A = (0, u.K)(), Z = (0, u.V)(), L = (0, a.e7)([c.Z], () => c.Z.isMessageRequest(t.id)), v = (0, a.e7)([d.Z], () => d.Z.isSpam(t.id)), O = (0, E.V)(t.id, t.getRecipientId()), R = s.useCallback(() => {
            I.Z.closeChannelSidebar(m.uZ), L && A && (0, h.Kh)(t.id), v && Z && (0, h.Kh)(t.id);
        }, [
            t.id,
            v,
            Z,
            L,
            A
        ]), x = s.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(S.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE));
        }, []), {markAsNotSpam: P} = (0, _.m)({
            onAcceptSuccess: R,
            onError: x
        });
    if (null == t || !t.isDM())
        return null;
    let b = [(0, i.jsx)(p.ZP.Icon, {
            icon: r.CloseSmallIcon,
            tooltip: S.Z.Messages.CLOSE,
            onClick: () => I.Z.closeChannelSidebar(n)
        }, 'close')];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.ZP, {
                toolbar: b,
                'aria-label': S.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                children: (0, o.ud)({
                    channel: t,
                    channelName: f,
                    inSidebar: !0
                })
            }),
            v && (0, i.jsxs)('div', {
                className: N.hamBanner,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: N.__invalid_hamBannerText,
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
                    }),
                    (0, i.jsx)(r.Button, {
                        className: N.hamBannerButton,
                        size: r.ButtonSizes.SMALL,
                        onClick: () => P(t, O),
                        children: S.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: C.chat,
                children: (0, i.jsx)(T.Z, {
                    channel: t,
                    guild: null,
                    chatInputType: l.I.SIDEBAR
                }, t.id)
            })
        ]
    });
}
