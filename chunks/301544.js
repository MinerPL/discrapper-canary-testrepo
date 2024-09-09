n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(686546),
    c = n(778045),
    d = n(355932),
    u = n(852786),
    _ = n(621453);
function h(e) {
    let { traits: t } = e,
        n = a.useCallback(
            (e) =>
                (0, i.jsx)(
                    u.Z,
                    {
                        width: 64,
                        height: 16
                    },
                    e
                ),
            []
        );
    return (0, i.jsx)(d.ZP, {
        className: _.traitsContainer,
        items: t,
        renderItem: n,
        maxLines: 2,
        itemGapPx: 4
    });
}
function E(e) {
    let { className: t, style: n } = e;
    return (0, i.jsx)('div', {
        className: r()(_.nonClickableCard, t),
        style: n,
        children: (0, i.jsxs)('div', {
            className: r()(_.card, _.skeletonCard),
            children: [
                (0, i.jsx)('div', {
                    className: _.cardBrandingHeader,
                    children: (0, i.jsx)(u.Z, {
                        width: '100%',
                        height: 100
                    })
                }),
                (0, i.jsxs)('div', {
                    className: _.cardContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.cardContentTitleSection,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: _.cardNameAndTagWrapper,
                                    children: [
                                        (0, i.jsx)(o.ZP, {
                                            mask: o.QS.CLAN_ICON,
                                            width: 70,
                                            height: 70,
                                            className: _.clanIconMask,
                                            children: (0, i.jsx)('div', {
                                                className: _.skeletonIconInner,
                                                children: (0, i.jsx)(u.Z, {
                                                    width: 64,
                                                    height: 64,
                                                    delayMs: 10,
                                                    className: _.skeletonIcon
                                                })
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: _.clanTagChipletWrapper,
                                            children: (0, i.jsxs)('div', {
                                                className: _.clanTagChiplet,
                                                children: [
                                                    (0, i.jsx)(u.Z, {
                                                        width: 16,
                                                        height: 16,
                                                        delayMs: 20
                                                    }),
                                                    (0, i.jsx)(u.Z, {
                                                        width: 30,
                                                        height: 16,
                                                        delayMs: 25
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(u.Z, {
                                        className: _.nameText,
                                        width: 120,
                                        height: 24,
                                        delayMs: 20
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: _.clanInfoRow,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-xxs/normal',
                                            className: _.clanInfoItem,
                                            children: (0, i.jsx)(u.Z, {
                                                width: 40,
                                                height: 16,
                                                delayMs: 100
                                            })
                                        }),
                                        (0, i.jsx)('span', {
                                            className: _.wildCardText,
                                            children: (0, i.jsx)(u.Z, {
                                                width: 40,
                                                height: 16,
                                                delayMs: 50
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: _.cardContentDescriptionSection,
                            style: { gap: '4px' },
                            children: [
                                (0, i.jsx)(u.Z, {
                                    width: '85%',
                                    height: 20,
                                    delayMs: 80
                                }),
                                (0, i.jsx)(u.Z, {
                                    width: '92%',
                                    height: 20,
                                    delayMs: 80
                                }),
                                (0, i.jsx)(u.Z, {
                                    width: '43%',
                                    height: 20,
                                    delayMs: 80
                                })
                            ]
                        }),
                        (0, i.jsx)(h, {
                            traits: ['1', '2', '3']
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: _.cardFooter,
                    children: [
                        (0, i.jsx)('div', {
                            className: _.cardFooterInfo,
                            children: (0, i.jsx)('div', {
                                className: _.cardFooterMembers,
                                children: (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: (0, i.jsx)(u.Z, {
                                        width: 120,
                                        height: 20,
                                        delayMs: 200
                                    })
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: _.cardFooterGames,
                            children: [(0, i.jsx)(c.P, { delayMs: 35 }), (0, i.jsx)(c.P, { delayMs: 25 }), (0, i.jsx)(c.P, { delayMs: 55 })]
                        })
                    ]
                })
            ]
        })
    });
}
