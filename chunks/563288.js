n.r(t), n.d(t, {
    default: function () {
        return g;
    }
});
var a = n(735250), i = n(470079), s = n(442837), o = n(704215), r = n(481060), l = n(607070), d = n(434404), c = n(430824), m = n(153124), u = n(810090), _ = n(626135), h = n(150340), N = n(721012), x = n(819866), I = n(981631), C = n(921944), f = n(689938), L = n(984674);
function g(e) {
    let {
            guildId: t,
            transitionState: n,
            onClose: g
        } = e, j = (0, m.Dt)(), v = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), D = (0, s.e7)([c.Z], () => c.Z.getGuild(t));
    return (i.useEffect(() => {
        _.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
            type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
            guild_id: t
        });
    }, [t]), null == D) ? null : (0, a.jsxs)(r.ModalRoot, {
        transitionState: n,
        'aria-labelledby': j,
        size: r.ModalSize.LARGE,
        className: L.modal,
        children: [
            (0, a.jsxs)('div', {
                className: L.content,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: L.header,
                        children: f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({ guildName: D.name })
                    }),
                    (0, a.jsxs)('div', {
                        className: L.testimonials,
                        children: [
                            (0, a.jsx)('div', {
                                className: L.__invalid_designBuddiesContainer,
                                children: (0, a.jsx)(N.Z, {
                                    message: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                                    adminTitle: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                                    profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                    emphasisColor: 'text-positive',
                                    arrowPosition: 'right'
                                })
                            }),
                            (0, a.jsx)('div', {
                                className: L.__invalid_valorantContainer,
                                children: (0, a.jsx)(N.Z, {
                                    message: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                                    adminTitle: f.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                                    profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                    emphasisColor: 'text-warning',
                                    arrowPosition: 'left'
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: L.buttonContainer,
                        children: [
                            (0, a.jsx)(r.Button, {
                                onClick: () => g(),
                                look: r.Button.Looks.OUTLINED,
                                color: r.Button.Colors.PRIMARY,
                                children: f.Z.Messages.CLOSE
                            }),
                            (0, a.jsx)(r.Button, {
                                onClick: () => {
                                    _.default.track(I.rMx.UPSELL_CLICKED, {
                                        type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                                        action: 'primary'
                                    }), d.Z.open(t, I.pNK.ONBOARDING), g(C.L.PRIMARY), (0, h.G)(D.id, o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
                                },
                                children: f.Z.Messages.CHECK_IT_OUT
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: L.videoContainer,
                children: (0, a.jsx)(u.Z, {
                    className: L.video,
                    loop: !v,
                    autoPlay: !v,
                    playsInline: !0,
                    'data-testid': 'onboarding-demo',
                    children: (0, a.jsx)('source', {
                        src: x,
                        type: 'video/mp4'
                    }, 'hevc')
                })
            })
        ]
    });
}
