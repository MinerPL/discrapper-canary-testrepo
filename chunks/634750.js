n.d(t, {
    G: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(990547),
    r = n(481060),
    o = n(213609),
    c = n(626135),
    u = n(738672),
    d = n(981631),
    h = n(689938),
    m = n(231202);
function p(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, o.Z)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.HD_STREAMING_POPOUT
            },
            { disableTrack: t },
            [t]
        ),
        (0, i.jsxs)('div', {
            className: a()(m.popoutContainer, { [m.hidden]: t }),
            children: [
                (0, i.jsx)('img', {
                    className: m.image,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                    alt: 'HD Streaming Nitro Perk'
                }),
                (0, i.jsx)(r.Button, {
                    className: m.closeButton,
                    'aria-label': h.Z.Messages.CLOSE,
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.NONE,
                    onClick: () => {
                        n(), c.default.track(d.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        className: m.closeIcon,
                        color: 'white'
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.infoContainerParent,
                    children: (0, i.jsxs)('div', {
                        className: m.infoContainer,
                        children: [
                            (0, i.jsx)(r.Text, {
                                className: m.infoText,
                                variant: 'text-sm/medium',
                                children: h.Z.Messages.PREMIUM_REVERSE_TRIAL_HD_STREAMING_POPOUT_BODY.format()
                            }),
                            (0, i.jsxs)('div', {
                                className: m.poweredByNitroContainer,
                                children: [
                                    (0, i.jsx)(r.NitroWheelIcon, { size: 'xs' }),
                                    (0, i.jsx)(r.Text, {
                                        className: m.infoText,
                                        variant: 'text-sm/medium',
                                        children: h.Z.Messages.POWERED_BY_NITRO
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function _(e) {
    let { ...t } = e;
    return (0, i.jsx)(u.h, {
        ...t,
        renderComponent: (e) => (0, i.jsx)(p, { ...e })
    });
}
