n.r(t), n.d(t, {
    QuestsRewardModalUnverified: function () {
        return E;
    },
    openRewardModalUnverified: function () {
        return f;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(893776), l = n(594174), u = n(918701), c = n(689938), d = n(171327), _ = n(800010);
function E(e) {
    let {
            transitionState: t,
            onClose: n
        } = e, E = (0, a.e7)([l.default], () => {
            var e;
            return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email;
        }), [f, h] = i.useState({ status: 'unknown' });
    i.useEffect(() => {
        h({ status: 'loading' }), s.Z.verifyResend().then(() => h({ status: 'success' }), e => {
            h({ status: 'error' }), (0, u.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
        });
    }, []);
    let p = () => (0, r.jsx)(o.ModalFooter, {
        className: d.modalFooter,
        children: (0, r.jsx)(o.Button, {
            color: o.Button.Colors.BRAND,
            size: o.Button.Sizes.MEDIUM,
            onClick: n,
            children: c.Z.Messages.CLOSE
        })
    });
    return (0, r.jsxs)(o.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: d.headerImage,
                src: _
            }),
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                    (0, r.jsx)(o.Heading, {
                        className: d.title,
                        variant: 'heading-xl/bold',
                        children: c.Z.Messages.QUESTS_REWARD_VERIFICATION_TITLE
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: d.modalCloseButton
                    })
                ]
            }),
            'loading' === f.status && (0, r.jsx)(o.ModalContent, {
                className: d.content,
                children: (0, r.jsx)(o.Spinner, {})
            }),
            'error' === f.status && (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.ModalContent, {
                        className: d.content,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: c.Z.Messages.QUESTS_REWARD_VERIFICATION_ERROR
                        })
                    }),
                    p()
                ]
            }),
            'success' === f.status && (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.ModalContent, {
                        className: d.content,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: c.Z.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
                                emailAddress: E,
                                emailAddressLink: 'mailto:'.concat(E)
                            })
                        })
                    }),
                    (0, r.jsx)(o.ModalContent, {
                        className: d.content,
                        children: (0, r.jsxs)('div', {
                            className: d.tooltip,
                            children: [
                                (0, r.jsx)(o.CircleInformationIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: d.infoFilledIcon
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: d.tooltipText,
                                    variant: 'text-sm/normal',
                                    children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
                                })
                            ]
                        })
                    }),
                    p()
                ]
            })
        ]
    });
}
function f() {
    (0, o.openModalLazy)(async () => {
        let {QuestsRewardModalUnverified: e} = await Promise.resolve().then(n.bind(n, 669041));
        return t => (0, r.jsx)(e, { ...t });
    });
}
