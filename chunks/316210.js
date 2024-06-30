a.r(s), a.d(s, {
    default: function () {
        return T;
    }
});
var t = a(735250), o = a(470079), n = a(481060), r = a(285952), c = a(63063), l = a(497505), i = a(918701), d = a(46140), S = a(981631), _ = a(689938), m = a(988094), E = a(708901);
function T(e) {
    let {
            transitionState: s,
            onClose: a,
            questContent: T,
            quest: u
        } = e, g = (0, i.zK)(u, d.S7.IN_HOUSE_CONSOLE_QUEST), x = o.useMemo(() => g ? T === l.jn.QUEST_BAR || T === l.jn.QUEST_BAR_V2 ? _.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : _.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE : T === l.jn.QUEST_BAR || T === l.jn.QUEST_BAR_V2 ? _.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: g ? 'Discord' : u.config.messages.gamePublisher }) : _.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
            gamePublisher: u.config.messages.gamePublisher,
            gameTitle: u.config.messages.gameTitle
        }), [
            u,
            T,
            g
        ]);
    return (0, t.jsxs)(n.ModalRoot, {
        transitionState: s,
        size: n.ModalSize.DYNAMIC,
        className: m.modalRoot,
        children: [
            (0, t.jsxs)(n.ModalHeader, {
                direction: r.Z.Direction.VERTICAL,
                separator: !1,
                className: m.modalHeader,
                children: [
                    (0, t.jsxs)('div', {
                        className: m.modalTop,
                        children: [
                            (0, t.jsx)('div', {
                                className: m.iconFrame,
                                children: (0, t.jsx)('img', {
                                    className: m.icon,
                                    alt: '',
                                    src: E
                                })
                            }),
                            (0, t.jsx)(n.ModalCloseButton, {
                                className: m.closeBtn,
                                onClick: a
                            })
                        ]
                    }),
                    (0, t.jsx)(n.Heading, {
                        variant: 'heading-xl/bold',
                        children: _.Z.Messages.QUESTS_DISCLOSURE_LABEL
                    })
                ]
            }),
            (0, t.jsxs)(n.ModalContent, {
                className: m.modalContent,
                children: [
                    (0, t.jsx)(n.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: m.upperBodyText,
                        children: x
                    }),
                    (0, t.jsx)(U, { questContent: T }),
                    (0, t.jsx)(n.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: _.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({ privacySettingsUrl: c.Z.getArticleURL(S.BhN.QUESTS_PRIVACY_CONTROLS) })
                    })
                ]
            }),
            (0, t.jsx)(n.ModalFooter, {
                className: m.footer,
                children: (0, t.jsx)(n.Button, {
                    onClick: a,
                    children: _.Z.Messages.CLOSE
                })
            })
        ]
    });
}
function U(e) {
    let {questContent: s} = e;
    switch (s) {
    case l.jn.QUEST_BAR:
    case l.jn.QUEST_BAR_V2:
        return (0, t.jsxs)('ul', {
            className: m.targetList,
            children: [
                (0, t.jsx)(u, {
                    icon: n.GlobeEarthIcon,
                    children: _.Z.Messages.QUESTS_DISCLOSURE_LOCATION
                }),
                (0, t.jsx)(u, {
                    icon: n.UserIcon,
                    children: _.Z.Messages.QUESTS_DISCLOSURE_AGE
                }),
                (0, t.jsx)(u, {
                    icon: n.GameControllerIcon,
                    children: _.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
                })
            ]
        });
    case l.jn.ACTIVITY_PANEL:
    case l.jn.QUESTS_EMBED:
    case l.jn.QUEST_LIVE_STREAM:
        return (0, t.jsx)('ul', {
            className: m.targetList,
            children: (0, t.jsx)(u, {
                icon: n.GameControllerIcon,
                children: _.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
            })
        });
    default:
        return null;
    }
}
function u(e) {
    let {
        icon: s,
        children: a
    } = e;
    return (0, t.jsxs)(n.Text, {
        variant: 'text-sm/medium',
        tag: 'li',
        className: m.targetItem,
        children: [
            (0, t.jsx)(s, {
                size: 'xs',
                color: 'currentColor'
            }),
            a
        ]
    });
}
