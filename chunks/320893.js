n.d(t, {
    Z: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var a = n(780384), i = n(481060), r = n(410030), l = n(293810), o = n(689938), c = n(854832), d = n(934961), u = n(568294), _ = n(867861), E = n(860790), I = n(268953), T = n(487703), m = n(458050), N = n(334364), S = n(431712);
function h(e) {
    return (0, a.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight;
}
function g() {
    let e = (0, r.ZP)(), t = { backgroundColor: (0, a.wj)(e) ? '#2e3638' : 'var(--background-primary)' };
    return (0, s.jsxs)('div', {
        className: c.earningsPreviewContainer,
        style: t,
        children: [
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_NEW_SUBS
                    }),
                    (0, s.jsx)(i.Spacer, { size: 8 }),
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-md/bold',
                        className: h(e),
                        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_REVENUE_INCREASE
                    })
                ]
            }),
            (0, s.jsx)('img', {
                className: c.roundAvatar,
                src: T,
                alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_PREVIEW_IMG_ALT
            })
        ]
    });
}
function C() {
    let e = (0, r.ZP)();
    function t(e) {
        let {
            length: t,
            horizontal: n
        } = e;
        return (0, s.jsx)('div', {
            className: n ? c.horizontalConnector : c.verticalConnector,
            style: {
                ...n ? { width: t } : { height: t },
                border: '1px solid #49494933'
            }
        });
    }
    return (0, s.jsxs)('div', {
        className: c.avatarGridContainer,
        'aria-label': o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_GRID_ARIA_LABEL,
        children: [
            (0, s.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, s.jsx)(t, { length: 24 }),
                    (0, s.jsx)('img', {
                        className: c.roundAvatar,
                        src: (0, a.wj)(e) ? d : u,
                        alt: ''
                    }),
                    (0, s.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, s.jsx)(t, { length: 24 }),
                    (0, s.jsx)('img', {
                        className: c.roundAvatar,
                        src: _,
                        alt: ''
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, s.jsx)(t, { length: 12 }),
                    (0, s.jsx)('img', {
                        className: c.roundAvatar,
                        src: E,
                        alt: ''
                    }),
                    (0, s.jsx)(t, {
                        horizontal: !0,
                        length: 12
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: c.avatarCard,
                children: [
                    (0, s.jsx)(t, { length: 12 }),
                    (0, s.jsx)('img', {
                        className: c.roundAvatar,
                        src: I,
                        alt: ''
                    })
                ]
            })
        ]
    });
}
function x() {
    return (0, s.jsxs)('div', {
        className: c.earningBenefitCard,
        children: [
            (0, s.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1
            }),
            (0, s.jsx)(i.Spacer, { size: 32 }),
            (0, s.jsx)(g, {}),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsx)(C, {})
        ]
    });
}
function p() {
    return (0, s.jsxs)('div', {
        className: c.followerBenefitCard,
        children: [
            (0, s.jsx)(i.Text, {
                className: c.followerBenefitText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2
            }),
            (0, s.jsx)('img', {
                className: c.roleSubscriptionSocial,
                src: S,
                alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_1_ALT
            }),
            (0, s.jsx)('img', {
                className: c.roleSubscriptionLanyardIllo,
                src: N,
                alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_2_ALT
            })
        ]
    });
}
function R() {
    let e = (0, r.ZP)();
    return (0, s.jsxs)('div', {
        className: c.revenueShareBenefitCard,
        children: [
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsxs)(i.Heading, {
                        className: h(e),
                        style: {
                            fontSize: '50px',
                            lineHeight: '52px'
                        },
                        variant: 'heading-xxl/extrabold',
                        children: [
                            l.NT,
                            '%'
                        ]
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3
                    })
                ]
            }),
            (0, s.jsx)('img', {
                className: c.roleSubscriptionEarningIllo,
                src: m,
                alt: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3_IMG_ALT
            })
        ]
    });
}
function f() {
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(i.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFITS_FOR_CREATORS_TITLE
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsxs)('div', {
                className: c.creatorBenefitsContainer,
                children: [
                    (0, s.jsx)(x, {}),
                    (0, s.jsx)(p, {}),
                    (0, s.jsx)(R, {})
                ]
            })
        ]
    });
}
