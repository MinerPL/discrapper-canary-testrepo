n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(223245),
    c = n(230711),
    d = n(921801),
    u = n(246946),
    m = n(358085),
    h = n(726985),
    g = n(981631),
    p = n(388032),
    x = n(414068),
    S = n(113207);
function T() {
    let { enabled: e, autoToggle: t, hideInstantInvites: s, hidePersonalInformation: T, disableSounds: C, disableNotifications: _, enableContentProtection: E } = (0, l.cj)([u.Z], () => ({ ...u.Z.getSettings() })),
        f = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, i.jsxs)(a.FormSection, {
        className: x.container,
        tag: a.FormTitleTags.H1,
        title: p.intl.string(p.t.S5GfOT),
        children: [
            (0, i.jsx)(d.F, {
                setting: h.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, i.jsx)(a.FormNotice, {
                    className: S.marginBottom40,
                    iconClassName: x.noticeIcon,
                    type: a.FormNoticeTypes.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: a.FormNoticeImagePositions.RIGHT
                    },
                    title: p.intl.string(p.t.bxGbHB),
                    body: p.intl.format(p.t['4rmZn5'], { streamkitURL: g.EYA.STREAMKIT })
                })
            }),
            (0, i.jsxs)(d.F, {
                setting: h.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, i.jsx)(a.FormSwitch, {
                        value: e,
                        onChange: (e) => f('enabled', e),
                        note: p.intl.format(p.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(g.oAB.KEYBINDS);
                            }
                        }),
                        children: p.intl.string(p.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, i.jsx)(a.FormSwitch, {
                                value: t,
                                onChange: (e) => f('autoToggle', e),
                                note: p.intl.string(p.t.ZPi4lJ),
                                children: p.intl.string(p.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        className: r()(S.marginTop40, S.marginBottom8, x.sectionLabel),
                        children: p.intl.string(p.t['+1H47u'])
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, i.jsx)(a.FormSwitch, {
                            value: T,
                            onChange: (e) => f('hidePersonalInformation', e),
                            note: p.intl.string(p.t['+9Lra2']),
                            children: p.intl.string(p.t.UpQziI)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            value: s,
                            onChange: (e) => f('hideInstantInvites', e),
                            note: p.intl.string(p.t.m7mS2d),
                            children: p.intl.string(p.t.q7WNGh)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            value: C,
                            onChange: (e) => f('disableSounds', e),
                            note: p.intl.string(p.t.eAkaio),
                            children: p.intl.string(p.t.o56OZm)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, i.jsx)(a.FormSwitch, {
                            value: _,
                            onChange: (e) => f('disableNotifications', e),
                            note: p.intl.string(p.t.ZAmpQ0),
                            children: p.intl.string(p.t.qmYiYW)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, i.jsx)(a.FormSwitch, {
                            value: E,
                            onChange: (e) => f('enableContentProtection', e),
                            note: p.intl.string(p.t.P4vj0t),
                            children: p.intl.string(p.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
