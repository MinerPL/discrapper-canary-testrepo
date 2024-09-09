s.r(a),
    s.d(a, {
        default: function () {
            return E;
        }
    });
var t = s(735250);
s(470079);
var o = s(481060),
    d = s(688465),
    n = s(547972),
    r = s(63063),
    l = s(981631),
    N = s(332325),
    c = s(689938),
    i = s(552269),
    _ = s(83173);
function E(e) {
    let { transitionState: a, onClose: s } = e;
    return (0, t.jsxs)(o.ModalRoot, {
        transitionState: a,
        size: o.ModalSize.DYNAMIC,
        className: i.modalRoot,
        children: [
            (0, t.jsxs)(o.ModalHeader, {
                separator: !1,
                className: i.modalHeader,
                children: [
                    (0, t.jsx)('div', {
                        className: i.imageFrame,
                        children: (0, t.jsx)('img', {
                            alt: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
                            src: _,
                            className: i.heroImage
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: i.headerWrapper,
                        children: [
                            (0, t.jsx)(o.Heading, {
                                variant: 'heading-xl/bold',
                                children: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
                            }),
                            (0, t.jsx)(d.Z, { className: i.betaTag })
                        ]
                    })
                ]
            }),
            (0, t.jsxs)(o.ModalContent, {
                className: i.modalContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: i.modalContentFrame,
                        children: [
                            (0, t.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
                            }),
                            (0, t.jsx)(m, {})
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: i.modalFooter,
                        children: [
                            (0, t.jsx)(o.Button, {
                                onClick: s,
                                className: i.button,
                                children: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                className: i.disclosureText,
                                children: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
                                    recentActivityURL: r.Z.getArticleURL(l.BhN.MEMBER_LIST_ACTIVITY_FEED),
                                    handleActivityPrivacyClick: () => {
                                        s(), (0, n.Z)(N.Z.ACTIVITY_PRIVACY);
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
let m = () => {
    let e = [
        {
            icon: (0, t.jsx)(o.FriendsIcon, { className: i.icon }),
            text: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
        },
        {
            icon: (0, t.jsx)(o.GameControllerIcon, { className: i.icon }),
            text: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
        },
        {
            icon: (0, t.jsx)(o.ChatIcon, { className: i.icon }),
            text: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
        },
        {
            icon: (0, t.jsx)(o.UserCircleIcon, { className: i.icon }),
            text: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_MANAGE_NOTE
        }
    ];
    return (0, t.jsx)('div', {
        className: i.notes,
        children: e.map((e, a) => {
            let { icon: s, text: d } = e;
            return (0, t.jsxs)(
                'div',
                {
                    className: i.badgeNote,
                    children: [
                        (0, t.jsx)('div', {
                            className: i.badge,
                            children: s
                        }),
                        (0, t.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            children: d
                        })
                    ]
                },
                'memberlist-learn-more-note-'.concat(a)
            );
        })
    });
};
