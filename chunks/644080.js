var a = l(735250), r = l(470079), i = l(120356), t = l.n(i), s = l(442837), d = l(692547), o = l(481060), c = l(410030), u = l(637853), h = l(434404), m = l(159300), g = l(496675), C = l(705600), x = l(346656), f = l(709586), I = l(768581), Z = l(981631), _ = l(689938), v = l(211737), p = l(63190), N = l(102219);
let j = e => {
    let n = r.useMemo(() => null == e ? null : I.ZP.getGuildHomeHeaderURL({
        id: e.id,
        homeHeader: e.homeHeader
    }), [e]);
    return {
        homeHeaderImage: n,
        isHomeHeaderImageSet: null != n,
        homeHeaderScroll: null != n ? 200 : 0
    };
};
function b(e) {
    let {guild: n} = e, l = () => {
            h.Z.open(n.id, Z.pNK.ONBOARDING, void 0, Z.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(Z.oNc.BANNER) ? (0, a.jsxs)(o.Button, {
        className: v.editButton,
        innerClassName: v.editButtonInner,
        type: 'button',
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: l,
        children: [
            (0, a.jsx)(o.ImagePlusIcon, {
                size: 'xs',
                color: d.Z.unsafe_rawColors.WHITE_500.css
            }),
            _.Z.Messages.EDIT_IMAGE
        ]
    }) : (0, a.jsxs)(o.ShinyButton, {
        color: o.Button.Colors.GREEN,
        className: v.editButton,
        innerClassName: v.editButtonInner,
        onClick: l,
        children: [
            (0, a.jsx)(f.Z, {
                height: 16,
                width: 16
            }),
            _.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
        ]
    });
}
let E = r.memo(function (e) {
    let {
            guild: n,
            titleClassName: r
        } = e, {
            homeHeaderImage: i,
            isHomeHeaderImageSet: d
        } = j(n), h = (0, u.b$)(n.id), f = (0, s.e7)([g.Z], () => (0, m.b)(g.Z, n)), I = (0, c.ZP)();
    return (0, a.jsxs)('div', {
        className: v.header,
        children: [
            (0, a.jsxs)('div', {
                className: v.headerArtWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: t()(v.headerArt, { [v.headerArtPlaceholder]: !d }),
                        style: { backgroundImage: 'url('.concat(d ? i : 'dark' === I ? p : N, ')') }
                    }),
                    h && (0, a.jsx)(b, { guild: n })
                ]
            }),
            (0, a.jsx)('div', {
                className: v.titleWrapper,
                children: (0, a.jsxs)('div', {
                    className: r,
                    children: [
                        (0, a.jsx)(x.Z, {
                            className: v.headerIcon,
                            guild: n,
                            size: x.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, a.jsx)(o.HeadingLevel, {
                            children: (0, a.jsxs)('div', {
                                className: v.headerName,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        className: v.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, a.jsx)(C.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: o.Tooltip.Colors.PRIMARY
                                    }),
                                    f && (0, a.jsx)(o.Button, {
                                        className: v.inviteButton,
                                        size: o.Button.Sizes.MEDIUM,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: () => (0, o.openModalLazy)(async () => {
                                            let {default: e} = await Promise.all([
                                                l.e('7654'),
                                                l.e('30135')
                                            ]).then(l.bind(l, 560114));
                                            return l => (0, a.jsx)(e, {
                                                ...l,
                                                guild: n,
                                                source: Z.t4x.GUILD_HOME
                                            });
                                        }),
                                        children: _.Z.Messages.INSTANT_INVITE
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
});
n.Z = E;
