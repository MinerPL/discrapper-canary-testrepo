n.d(t, {
    y: function () {
        return Z;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(392711), o = n.n(r), c = n(442837), u = n(704215), d = n(481060), h = n(788307), p = n(605236), m = n(594174), _ = n(768581), f = n(906605), E = n(106301), C = n(833858), g = n(866071), I = n(223135), x = n(981631), T = n(231338), N = n(689938), v = n(362759);
let S = e => {
        let {
            style: t,
            className: n,
            name: a,
            icon: l
        } = e;
        return (0, i.jsx)(d.Tooltip, {
            text: a,
            children: e => (0, i.jsx)('div', {
                className: s()(n, v.iconWidget),
                style: t,
                ...e,
                children: null != l && l
            })
        });
    }, Z = e => {
        let {
                currentStatus: t,
                channel: l
            } = e, r = a.useRef(E.Z.getRecentCustomStatuses()), Z = a.useRef((0, p.un)(u.z.HANG_STATUS_NEW_BADGE)).current, A = (0, C.V)(), [M, b] = a.useState(null != t ? t : null), R = (0, c.e7)([m.default], () => m.default.getCurrentUser()), j = () => {
                !Z && (0, p.EW)(u.z.HANG_STATUS_NEW_BADGE);
            }, L = (e, t) => {
                e.stopPropagation(), (0, f.Zx)(t, !0), j();
            }, P = (e, t) => {
                e.stopPropagation(), (0, f._s)(t.status, t.emoji, !0), j();
            }, O = a.useCallback(e => {
                e.stopPropagation(), (0, f.Sc)(!0);
            }, []), y = e => {
                e.stopPropagation(), (0, d.openModalLazy)(async () => {
                    let {default: e} = await n.e('1631').then(n.bind(n, 333541));
                    return t => (0, i.jsx)(e, { ...t });
                }), j();
            }, D = a.useCallback(e => {
                b({
                    type: x.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []), k = a.useCallback(e => {
                b({
                    type: x.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: T.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, i.jsxs)('div', {
            className: v.popout,
            children: [
                !Z && (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: v.popoutBackground }),
                        (0, i.jsxs)('div', {
                            className: v.onboarding,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.title,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: N.Z.Messages.ACTIVITY_STATUS
                                        }),
                                        (0, i.jsx)(d.TextBadge, {
                                            text: N.Z.Messages.BETA,
                                            disableColor: !0,
                                            className: v.newBadge
                                        })
                                    ]
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: v.helpText,
                                    children: N.Z.Messages.HANG_STATUS_HELP
                                }),
                                (0, i.jsxs)('div', {
                                    className: v.iconGroup,
                                    children: [
                                        null != R && (0, i.jsxs)('div', {
                                            className: v.avatarWrapper,
                                            children: [
                                                (0, i.jsx)(d.Avatar, {
                                                    className: v.avatar,
                                                    size: d.AvatarSizes.SIZE_40,
                                                    src: (0, _.ov)(R),
                                                    'aria-hidden': !0
                                                }),
                                                (0, i.jsx)('div', { className: v.outline })
                                            ]
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            className: v.statusIcon,
                                            hangStatusActivity: M
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: v.options,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.iconsContainer,
                            children: [
                                Object.entries(A).map(e => {
                                    let [n, a] = e;
                                    return (0, i.jsx)(d.Clickable, {
                                        'aria-label': a.title,
                                        onMouseEnter: () => D(n),
                                        onClick: e => L(e, n),
                                        children: (0, i.jsx)(S, {
                                            className: s()(v.iconWidget, { [v.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                            name: a.title,
                                            icon: (0, i.jsx)('img', {
                                                src: a.icon,
                                                alt: '',
                                                className: v.icon
                                            }),
                                            style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != a.color ? a.color : void 0 } : {}
                                        })
                                    }, n);
                                }),
                                (0, i.jsx)(d.Clickable, {
                                    'aria-label': N.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                    onClick: O,
                                    onMouseEnter: () => b(null),
                                    children: (0, i.jsx)(S, {
                                        className: v.optionButton,
                                        name: N.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                        icon: (0, i.jsx)(d.DenyIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: v.editIcon,
                                            colorClass: v.editIconColor
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: v.divider }),
                        (0, i.jsxs)('div', {
                            className: v.iconsContainer,
                            children: [
                                r.current.map((e, n) => {
                                    let a = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji), r = null != e.emoji && !(0, g.K)(e.emoji, l);
                                    return (0, i.jsxs)(d.Clickable, {
                                        'aria-label': e.status,
                                        onMouseEnter: () => k(e),
                                        onClick: r ? void 0 : t => P(t, e),
                                        className: v.statusOptionContainer,
                                        children: [
                                            (0, i.jsx)(S, {
                                                className: s()(v.iconWidget, { [v.selectedWidget]: a }),
                                                name: e.status,
                                                icon: null != e.emoji ? (0, i.jsx)(h.I, {
                                                    className: v.customIcon,
                                                    emoji: e.emoji,
                                                    hideTooltip: !0
                                                }) : null,
                                                style: a ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                            }),
                                            r ? (0, i.jsx)('div', {
                                                className: v.emojiLockIconContainer,
                                                children: (0, i.jsx)(d.LockIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: v.emojiLockIcon
                                                })
                                            }) : null
                                        ]
                                    }, 'custom-status-'.concat(n));
                                }),
                                r.current.length > 0 ? (0, i.jsx)(d.Clickable, {
                                    'aria-label': null != t ? N.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : N.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                    onClick: y,
                                    children: (0, i.jsx)(S, {
                                        className: v.optionButton,
                                        name: null != t ? N.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : N.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                        icon: (0, i.jsx)(d.PencilIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 20,
                                            height: 20,
                                            colorClass: v.editIconColor
                                        })
                                    })
                                }, 'custom-status-edit') : (0, i.jsxs)(d.Clickable, {
                                    'aria-label': N.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                    onClick: y,
                                    className: v.setCustomButton,
                                    children: [
                                        (0, i.jsx)(d.PencilIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: v.editIcon,
                                            colorClass: v.editIconColor
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'interactive-active',
                                            children: N.Z.Messages.STATUS_POPOUT_SET_CUSTOM
                                        })
                                    ]
                                }, 'custom-status-edit-full')
                            ]
                        })
                    ]
                })
            ]
        });
    };
