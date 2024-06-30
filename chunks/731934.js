var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(91192), o = n(481060), c = n(209613), d = n(151827), _ = n(785681), u = n(485664), E = n(880257), T = n(631885), I = n(895328), R = n(568671), C = n(419821), p = n(367515), g = n(250285), A = n(292352), m = n(689938), N = n(885342), f = n(331651), S = n(926895);
function h(e) {
    let {
        header: t,
        description: n,
        stepNumber: a
    } = e;
    return (0, s.jsxs)('div', {
        className: N.step,
        children: [
            (0, s.jsx)('div', {
                className: N.stepNumber,
                children: (0, s.jsx)(o.Heading, {
                    variant: 'heading-md/semibold',
                    color: 'text-brand',
                    children: (0, s.jsx)(o.HeadingLevel, { children: a })
                })
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'heading-sm/bold',
                        children: (0, s.jsx)(o.HeadingLevel, { children: t })
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: n
                    })
                ]
            })
        ]
    });
}
function M() {
    return (0, s.jsxs)('div', {
        className: i()(N.box, N.linkingBanner, N.linkingBannerParent),
        children: [
            (0, s.jsxs)('div', {
                className: i()(N.linkingBannerUpper),
                children: [
                    (0, s.jsxs)('div', {
                        className: N.__invalid_header,
                        children: [
                            (0, s.jsx)(o.Heading, {
                                className: f.marginBottom8,
                                variant: 'heading-xl/medium',
                                children: (0, s.jsx)(o.HeadingLevel, { children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT })
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: f.marginBottom20,
                                children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
                            })
                        ]
                    }),
                    (0, s.jsx)('img', {
                        className: N.bannerArt,
                        src: S,
                        alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: N.steps,
                children: [
                    (0, s.jsx)(h, {
                        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
                        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
                        stepNumber: 1
                    }),
                    (0, s.jsx)(h, {
                        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
                        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
                        stepNumber: 2
                    }),
                    (0, s.jsx)(h, {
                        header: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
                        description: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
                        stepNumber: 3
                    })
                ]
            })
        ]
    });
}
function x() {
    let e = (0, T.VM)();
    return (0, s.jsxs)('div', {
        className: i()(N.box, N.linkingBanner),
        children: [
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(o.Heading, {
                        className: f.marginBottom8,
                        variant: 'heading-xl/medium',
                        children: (0, s.jsx)(o.HeadingLevel, { children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN })
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        className: f.marginBottom20,
                        children: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({ link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    e ? null : (0, s.jsx)(R.Z, {})
                ]
            }),
            (0, s.jsx)('img', {
                className: N.bannerArt,
                src: S,
                alt: m.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
            })
        ]
    });
}
function O(e) {
    let {
            sectionType: t,
            sectionTitle: n,
            requests: r
        } = e, i = a.useRef(null), _ = ''.concat(t, '-list'), u = (0, c.Z)(_), E = a.useCallback(e => {
            let {
                    row: n,
                    listIndex: a
                } = e, i = r[n], l = a === r.length;
            return null == i ? null : (0, s.jsx)(g.Z, {
                userId: i.id,
                isLast: l,
                children: () => t === A.ne.ACTIVE ? (0, s.jsx)(C.u, { user: i }) : (0, s.jsx)(p.B, { user: i })
            }, i.id);
        }, [
            r,
            t
        ]), T = a.useCallback(() => (0, s.jsx)(d.Z, {
            className: N.__invalid_sectionTitle,
            children: (0, s.jsx)(o.Text, {
                className: f.marginBottom8,
                variant: 'eyebrow',
                color: 'header-secondary',
                children: n
            })
        }, 'title'), [n]);
    return (0, s.jsx)('div', {
        className: N.section,
        children: (0, s.jsx)(l.bG, {
            navigator: u,
            children: (0, s.jsx)(l.SJ, {
                children: e => {
                    let {
                        ref: t,
                        role: a,
                        ...l
                    } = e;
                    return (0, s.jsx)(o.List, {
                        className: N.__invalid_list,
                        innerRole: a,
                        innerAriaLabel: n,
                        ref: e => {
                            var n;
                            i.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                        },
                        sectionHeight: A.zE,
                        rowHeight: A.ip,
                        renderSection: T,
                        renderRow: E,
                        sections: [r.length],
                        chunkSize: 30,
                        fade: !0,
                        ...l
                    }, _);
                }
            })
        })
    });
}
let b = () => {
        let e = (0, E.Z)(), t = (0, T.mq)(A.ne.ACTIVE), n = e ? A.AG : A.i0, a = {
                count: t.length,
                max: n
            }, r = (0, _.o)(m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(a), m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(a));
        return (0, s.jsx)(s.Fragment, {
            children: t.length > 0 ? (0, s.jsx)(O, {
                sectionType: A.ne.ACTIVE,
                sectionTitle: r,
                requests: t
            }) : (0, s.jsxs)('div', {
                className: N.section,
                children: [
                    (0, s.jsx)(o.Text, {
                        className: f.marginBottom8,
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: r
                    }),
                    (0, s.jsx)('div', {
                        className: N.box,
                        children: (0, s.jsx)(I.Z, { text: m.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION })
                    })
                ]
            })
        });
    }, P = () => {
        let e = (0, T.VM)(), t = (0, E.Z)() ? A.AG : A.i0, n = (0, _.o)(m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({ maxConnections: t }), m.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({ maxConnections: t }));
        return e ? (0, s.jsx)('div', {
            className: N.maxConnectionInfo,
            children: (0, s.jsx)(o.Text, {
                variant: 'text-xxs/medium',
                color: 'text-muted',
                children: n
            })
        }) : null;
    }, L = () => (0, u.o)() ? (0, s.jsxs)('div', {
        className: i()(N.__invalid_helpLineInfo, f.marginTop20),
        children: [
            (0, s.jsx)(o.Heading, {
                className: N.supportHeader,
                variant: 'heading-sm/semibold',
                children: (0, s.jsx)(o.HeadingLevel, { children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_HEADER })
            }),
            (0, s.jsx)(o.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: m.Z.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({ helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line' })
            })
        ]
    }) : null, v = () => {
        let e = (0, T.mq)(A.ne.PENDING), t = (0, _.o)(m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({ count: e.length }), m.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({ count: e.length }));
        return 0 === e.length ? null : (0, s.jsx)(O, {
            sectionType: A.ne.PENDING,
            sectionTitle: t,
            requests: e
        });
    };
t.Z = () => {
    let e = (0, E.Z)();
    return (0, s.jsxs)('div', {
        className: N.container,
        children: [
            e ? (0, s.jsx)(M, {}) : (0, s.jsx)(x, {}),
            (0, s.jsx)(b, {}),
            (0, s.jsx)(v, {}),
            (0, s.jsx)(P, {}),
            (0, s.jsx)(L, {})
        ]
    });
};
