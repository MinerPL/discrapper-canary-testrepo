n(47120);
var s = n(735250), a = n(470079), r = n(512722), i = n.n(r), l = n(399606), o = n(481060), c = n(626135), d = n(709054), _ = n(914788), u = n(546791), E = n(259756), T = n(785681), I = n(985002), R = n(858719), C = n(780985), p = n(880257), g = n(631885), A = n(240351), m = n(792258), N = n(657825), f = n(198952), S = n(329242), h = n(895328), M = n(292352), x = n(981631), O = n(689938), b = n(270285);
function P() {
    let e = a.useCallback(() => {
        (0, o.openModalLazy)(async () => {
            let {default: e} = await n.e('66462').then(n.bind(n, 756226));
            return t => (0, s.jsx)(e, { ...t });
        });
    }, []);
    return (0, s.jsx)(o.Clickable, {
        className: b.tooltip,
        onClick: e,
        children: (0, s.jsx)(o.CircleInformationIcon, {
            size: 'custom',
            color: 'currentColor',
            className: b.icon,
            width: 15,
            height: 15
        })
    });
}
function L(e) {
    let {displayType: t} = e, n = a.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(O.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE));
        }, []), r = (0, p.Z)(), l = (0, R.ws)(t), c = (0, R.C7)(t), {
            loadMore: _,
            isMoreLoading: T
        } = (0, I.G)({ onError: n }), C = M.tx.get(t), [g, A] = a.useState(M.iB), f = (0, E.Xi)({ location: 'family_center_activity_section_web' }), S = a.useCallback(() => {
            A(e => e + M.iB), _(t);
        }, [
            t,
            _
        ]);
    i()(C, 'No text for action type');
    let h = C.sectionHeader(c), x = a.useCallback(e => {
            let {row: t} = e, n = l[t];
            return (0, u.iB)(n) ? (0, s.jsx)(N.Z, {
                userId: n.entity_id,
                timestamp: d.default.extractTimestamp(n.event_id),
                timestampFormatter: C.timestampFormatter
            }, n.event_id) : (0, u.f0)(n) ? (0, s.jsx)(m.Z, { guildId: n.entity_id }, n.event_id) : void 0;
        }, [
            l,
            C.timestampFormatter
        ]), P = a.useCallback(() => (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(o.Text, {
                    className: b.sectionHeader,
                    variant: 'eyebrow',
                    color: 'header-secondary',
                    children: h
                }),
                void 0 !== C.sectionDescription ? (0, s.jsx)(o.Text, {
                    className: b.sectionDescription,
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: C.sectionDescription(null != r && r, f)
                }) : null
            ]
        }), [
            h,
            C,
            r,
            f
        ]);
    if (0 === l.length)
        return null;
    let L = l.slice(0, g);
    return (0, s.jsxs)('div', {
        className: b.actionSection,
        children: [
            P(),
            (0, s.jsx)('div', {
                className: b.actions,
                style: { maxHeight: 65 * L.length },
                children: L.map((e, t) => x({ row: t }))
            }),
            L.length !== c ? (0, s.jsx)(o.Clickable, {
                className: b.loadMoreBar,
                onClick: S,
                role: 'button',
                children: T ? (0, s.jsx)(o.Spinner, {
                    type: o.Spinner.Type.PULSING_ELLIPSIS,
                    className: b.spinner
                }) : (0, s.jsx)(o.Text, {
                    className: b.loadMore,
                    variant: 'text-sm/bold',
                    children: O.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({ pageSize: Math.min(c - L.length, M.iB) })
                })
            }) : null
        ]
    });
}
let v = () => {
        let e = (0, p.Z)(), t = (0, g.mq)(M.ne.ACTIVE), n = (0, T.o)(O.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({ activeLinks: t.length }), O.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT), a = (0, u.Qr)(!!e), r = (0, g.Rd)(a);
        return e && t.length > 1 ? (0, s.jsx)(o.Text, {
            variant: 'eyebrow',
            children: r
        }) : (0, s.jsxs)(s.Fragment, {
            children: [
                e ? null : (0, s.jsx)(o.EyeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.icon
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'eyebrow',
                    children: n
                })
            ]
        });
    }, Z = e => {
        let {
                userId: t,
                subText: n,
                avatarSize: a = o.AvatarSizes.SIZE_40
            } = e, r = (0, C.I)(t);
        return void 0 === r ? null : (0, s.jsxs)('div', {
            className: b.accountRow,
            children: [
                (0, s.jsx)(f.r, {
                    user: r,
                    avatarSize: a
                }),
                (0, s.jsxs)('div', {
                    className: b.headerText,
                    children: [
                        (0, s.jsx)(S.Z, { user: r }),
                        void 0 !== n ? (0, s.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-muted',
                            children: n
                        }) : null
                    ]
                })
            ]
        });
    }, D = () => {
        let e = (0, g.mq)(M.ne.ACTIVE), t = (0, l.e7)([_.Z], () => _.Z.getSelectedTeenId()), {selectTeenUser: n} = (0, I.G)({}), r = e.map(e => ({
                label: e.id,
                value: e.id
            })), i = a.useCallback(e => (0, s.jsx)(Z, {
                userId: e.value,
                avatarSize: o.AvatarSizes.SIZE_24
            }), []);
        return (0, s.jsx)(o.Select, {
            className: b.select,
            renderOptionLabel: i,
            renderOptionValue: e => {
                let [t] = e;
                return i(t);
            },
            serialize: e => e,
            select: e => {
                n(e), c.default.track(x.rMx.FAMILY_CENTER_ACTION, { action: M.YC.SelectTeen });
            },
            isSelected: e => e === t,
            options: r
        });
    }, B = e => {
        let {userId: t} = e, n = (0, p.Z)(), a = (0, g.mq)(M.ne.ACTIVE), r = (0, u.Qr)(!!n), i = (0, g.Rd)(r);
        return n && 1 !== a.length ? (0, s.jsx)(D, {}) : (0, s.jsx)(Z, {
            userId: t,
            subText: i
        });
    };
t.Z = e => {
    let {user: t} = e, n = Array.from(M.tx.entries()), a = (0, R.kE)(), r = (0, u.t3)(), i = (0, g.Rd)(r);
    return (0, s.jsxs)('div', {
        className: b.container,
        children: [
            (0, s.jsxs)('div', {
                className: b.connectedCounter,
                children: [
                    (0, s.jsx)(v, {}),
                    (0, s.jsx)(P, {})
                ]
            }),
            (0, s.jsxs)('div', {
                className: b.card,
                children: [
                    (0, s.jsx)('div', {
                        className: b.header,
                        children: (0, s.jsx)(B, { userId: t.id })
                    }),
                    (0, s.jsxs)('div', {
                        className: b.content,
                        children: [
                            (0, s.jsx)('div', {
                                className: b.activityCounterRow,
                                children: n.map(e => {
                                    let [t, n] = e;
                                    return (0, s.jsx)(A.Z, {
                                        displayType: t,
                                        header: n.tooltipHeader()
                                    }, 'counter-'.concat(t));
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: b.activityOverview,
                                children: a ? n.map(e => {
                                    let [t] = e;
                                    return (0, s.jsx)(L, { displayType: t }, ''.concat(t, '-list'));
                                }) : (0, s.jsx)(h.Z, {
                                    className: b.emptyActivity,
                                    text: null != i ? i : ''
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
