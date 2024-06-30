t.d(n, {
    Z: function () {
        return f;
    }
}), t(653041);
var a = t(735250);
t(470079);
var l = t(442837), s = t(481060), i = t(594174), r = t(311888), o = t(63063), c = t(5192), d = t(431328), u = t(501655), _ = t(659972), E = t(981631), h = t(765305), T = t(689938), m = t(39898);
function I(e) {
    let {icon: n} = e;
    return (0, a.jsx)('div', {
        className: m.iconContainer,
        children: (0, a.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function N(e) {
    let {
        icon: n,
        text: t
    } = e;
    return (0, a.jsxs)('div', {
        className: m.listItemContainer,
        children: [
            (0, a.jsx)('div', {
                className: m.listItemIconContainer,
                children: n
            }),
            (0, a.jsx)(s.Text, {
                className: m.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function x(e) {
    var n;
    let {
            guild: t,
            channel: s,
            stageData: r
        } = e, o = (0, l.e7)([i.default], () => i.default.getCurrentUser(), []), E = {
            id: '1337',
            guild_id: t.id,
            channel_id: s.id,
            topic: r.topic,
            description: r.description,
            privacy_level: null !== (n = r.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC
        }, T = (0, d.w8)(s.id, u.pV.SPEAKER), I = (0, d.Rk)(s.id, u.pV.AUDIENCE), N = T.slice(0, 5);
    return null == N.find(e => {
        var n;
        return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id);
    }) && N.push({
        user: o,
        userNick: c.ZP.getName(t.id, s.id, o)
    }), (0, a.jsx)('div', {
        className: m.previewCardContainer,
        children: (0, a.jsx)('div', {
            className: m.previewCard,
            children: (0, a.jsx)(_.Z, {
                guild: t,
                stageInstance: E,
                showGuildPopout: !1,
                setShowGuildPopout: () => {
                },
                source: _.k.UNSPECIFIED,
                speakers: N,
                speakerCount: T.length,
                audienceCount: Math.max(1337, I),
                channelName: s.name
            })
        })
    });
}
function f(e) {
    let {
        guild: n,
        channel: t,
        stageData: l,
        headerId: i,
        loading: c,
        onNext: d,
        onCancel: u,
        onBack: _
    } = e;
    return null == n || null == t || null == l ? null : (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(x, {
                guild: n,
                channel: t,
                stageData: l
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: m.container,
                children: [
                    (0, a.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, a.jsx)(s.Heading, {
                                id: i,
                                className: m.__invalid_title,
                                variant: 'heading-xl/semibold',
                                children: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }),
                            (0, a.jsx)(s.Text, {
                                className: m.subtitle,
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: m.__invalid_list,
                        children: [
                            (0, a.jsx)(N, {
                                icon: (0, a.jsx)(I, { icon: s.CompassIcon }),
                                text: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }),
                            (0, a.jsx)(N, {
                                icon: (0, a.jsx)(I, { icon: s.FriendsIcon }),
                                text: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }),
                            (0, a.jsx)(N, {
                                icon: (0, a.jsx)(I, { icon: s.PencilIcon }),
                                text: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }),
                            (0, a.jsx)(N, {
                                icon: (0, a.jsx)(r.Z, {
                                    className: m.badgeIconBackground,
                                    foreground: m.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({ articleURL: o.Z.getArticleURL(E.BhN.STAGE_CHANNEL_GUIDELINES) })
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)(s.ModalFooter, {
                children: [
                    (0, a.jsx)(s.Button, {
                        color: s.Button.Colors.GREEN,
                        onClick: d,
                        submitting: c,
                        children: T.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                    }),
                    (0, a.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: m.cancelButton,
                        onClick: u,
                        children: T.Z.Messages.CANCEL
                    }),
                    (0, a.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.LINK,
                        className: m.backButton,
                        onClick: _,
                        size: s.Button.Sizes.MIN,
                        children: T.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}
