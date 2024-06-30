n.d(t, {
    C: function () {
        return M;
    },
    Z: function () {
        return R;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(512722), l = n.n(s), r = n(442837), o = n(481060), c = n(131388), d = n(357352), u = n(353254), _ = n(695346), E = n(271383), m = n(594174), I = n(346656), T = n(671533), h = n(810090), N = n(51144), f = n(506071), p = n(696014), C = n(847033), g = n(544978), S = n(893182), A = n(689938), x = n(828406);
function O(e) {
    let {onClick: t} = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: x.showMoreButton,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: A.Z.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
            }),
            (0, i.jsx)(o.Spacer, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(T.Z, {
                direction: T.Z.Directions.RIGHT,
                className: x.showMoreArrow
            })
        ]
    });
}
function R(e) {
    let {
            coverImageAsset: t,
            isPreview: n = !1
        } = e, a = _.QK.useSetting(), s = (0, f.n)() && a, [l, r] = (0, u.Z)(t, s), o = s ? (0, i.jsx)(h.Z, {
            autoPlay: !0,
            loop: !0,
            className: x.coverImage,
            width: 655,
            poster: (0, d.b)('server_products/storefront/default-header.png'),
            src: (0, d.b)('server_products/storefront/default-header.mov')
        }) : (0, i.jsx)('img', {
            src: (0, d.b)('server_products/storefront/default-header.png'),
            alt: '',
            className: x.coverImage
        });
    return (0, i.jsx)('div', {
        ref: l,
        className: x.coverImageContainer,
        children: null == r || n ? o : (0, i.jsx)('img', {
            src: r,
            alt: '',
            className: x.coverImage
        })
    });
}
function M(e) {
    var t, n, s;
    let {
            guild: u,
            subscriptionsSettings: _
        } = e, T = u.id;
    let {
            nickname: h,
            nickcolor: f
        } = (s = T, (0, r.cj)([
            E.ZP,
            m.default
        ], () => {
            var e, t;
            let n = m.default.getCurrentUser();
            l()(null != n, 'user cannot be null');
            let i = E.ZP.getMember(s, n.id);
            return {
                nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : N.ZP.getName(n),
                nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
            };
        }, [s])), {
            isTruncated: M,
            ExpandableTextContainer: v
        } = (0, p.s)(), L = (null !== (n = null == _ ? void 0 : null === (t = _.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [Z, P] = a.useState(1), b = (0, c.Z)('(max-width: 1439px)'), {
            selectedTab: D,
            isPhantomPreview: j
        } = (0, C.m)(), U = D === g.y.GUILD_PRODUCTS_PREVIEW ? A.Z.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : A.Z.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, y = L ? (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v, {
                    lineClamp: b || 2 === Z ? 2 : 3,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        children: null == _ ? void 0 : _.description
                    })
                }),
                M && (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Spacer, { size: 4 }),
                        (0, i.jsx)(O, { onClick: () => (0, S.Z)({ guildId: T }) })
                    ]
                })
            ]
        }) : (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: j ? U : A.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
        });
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)('div', {
                className: x.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(I.Z, {
                            guild: u,
                            size: I.Z.Sizes.LARGER,
                            iconSrc: null == u.icon || j ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(o.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: e => {
                                    null != e && e.clientHeight > 30 && P(2);
                                },
                                children: (0, i.jsx)(o.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: j ? A.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : A.Z.Messages.GUILD_STORE_HERO_TITLE.format({ guildName: u.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.Spacer, { size: 8 }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: A.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
                                            username: h,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)('span', {
                                                    style: { color: f },
                                                    children: e
                                                }, t);
                                            }
                                        })
                                    }),
                                    (0, i.jsx)(o.Spacer, { size: 9 }),
                                    y
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(R, {
                coverImageAsset: null == _ ? void 0 : _.cover_image_asset,
                isPreview: j
            })
        ]
    });
}
