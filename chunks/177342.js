n.d(t, {
    Q: function () {
        return h;
    }
});
var i = n(735250), a = n(470079), l = n(286379), s = n(481060), r = n(797614), o = n(473092), c = n(689938), u = n(370826), d = n(560580);
function h(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: h,
        warningType: p,
        header: m,
        description: _,
        onDismiss: f,
        buttons: E
    } = e;
    a.useEffect(() => {
        r.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, []);
    let C = a.useCallback(() => {
        null == f || f(), (0, o.qc)({
            channelId: t,
            warningId: n,
            senderId: h,
            warningType: p,
            cta: o.NM.USER_BANNER_DISMISS
        });
    }, [
        f,
        t,
        n,
        h,
        p
    ]);
    return (0, i.jsxs)('div', {
        className: u.strangerDangerBanner,
        children: [
            (0, i.jsxs)('div', {
                className: u.shieldAndHeading,
                children: [
                    (0, i.jsx)('img', {
                        className: u.safetyShieldIcon,
                        src: d,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: m
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: _
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.buttons,
                children: null == E ? void 0 : E.map((e, t) => (0, i.jsx)(s.Button, {
                    size: s.Button.Sizes.SMALL,
                    color: e.color,
                    'aria-label': e.text,
                    onClick: e.onclick,
                    className: u.ctaButton,
                    children: e.text
                }, t))
            }),
            (0, i.jsx)(s.Clickable, {
                className: u.closeButton,
                onClick: C,
                role: 'button',
                'aria-label': c.Z.Messages.DISMISS,
                children: (0, i.jsx)(s.CloseSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.closeButton
                })
            })
        ]
    });
}
