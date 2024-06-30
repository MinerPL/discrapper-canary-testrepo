t.d(n, {
    Z: function () {
        return Z;
    },
    d: function () {
        return D;
    }
});
var r = t(735250);
t(470079);
var i = t(120356), o = t.n(i), l = t(442837), u = t(692547), s = t(481060), a = t(549817), c = t(819553), d = t(17181), _ = t(303737), f = t(434404), E = t(703656), I = t(944486), g = t(914010), p = t(671533), C = t(259580), T = t(358085), S = t(962086), m = t(160404), h = t(889695), N = t(981631), A = t(176505), v = t(302463), R = t(293810), L = t(689938), b = t(583105);
function M(e) {
    let {
        className: n,
        onClick: t,
        children: i
    } = e;
    return (0, r.jsx)(s.Button, {
        className: o()(b.button, n),
        innerClassName: b.buttonInner,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.WHITE,
        size: s.Button.Sizes.NONE,
        onClick: t,
        children: i
    });
}
function O(e) {
    let {onClick: n} = e;
    return (0, r.jsx)(M, {
        onClick: n,
        children: L.Z.Messages.DISABLE
    });
}
function Z() {
    let e = (0, l.e7)([g.Z], () => g.Z.getGuildId()), n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)), {
            viewingRoles: t,
            backNavigationSection: i,
            isFullServerPreview: o,
            isServerShopPreview: T
        } = (0, l.cj)([m.Z], () => ({
            viewingRoles: null != e ? m.Z.getViewingRoles(e) : null,
            backNavigationSection: m.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && m.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && m.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e)
        return null;
    let Z = function (e) {
            switch (e) {
            case N.pNK.INTEGRATIONS:
                return L.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
            case N.pNK.ROLE_SUBSCRIPTIONS:
                return L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
            case N.pNK.ONBOARDING:
                return L.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
            default:
                return L.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
        }(i), D = i === N.pNK.ROLE_SUBSCRIPTIONS ? L.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.Z.Messages.VIEWING_AS_ROLES_SELECT, P = n === A.oC.GUILD_ONBOARDING, U = n => {
            let {backToSettings: t} = n;
            null != e && (m.Z.isFullServerPreview(e) && (0, E.uL)(N.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, S.mL)(e), t && f.Z.open(e, i), i === N.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
        };
    return (0, r.jsxs)(s.Notice, {
        color: s.NoticeColors.BRAND,
        className: b.notice,
        children: [
            (0, r.jsxs)(M, {
                onClick: () => U({ backToSettings: !0 }),
                className: b.backButton,
                children: [
                    (0, r.jsx)(p.Z, {
                        width: 16,
                        height: 16,
                        direction: p.Z.Directions.LEFT,
                        className: b.backArrow
                    }),
                    Z
                ]
            }),
            P && o ? (0, r.jsx)('div', {
                className: b.noticeContents,
                children: (0, r.jsx)('div', {
                    className: b.noticeText,
                    children: L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
                })
            }) : (0, r.jsxs)('div', {
                className: b.noticeContents,
                children: [
                    (0, r.jsx)('div', {
                        className: b.noticeText,
                        children: o ? L.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(t).length }) : L.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(t).length })
                    }),
                    (0, r.jsx)(s.Popout, {
                        position: 'bottom',
                        renderPopout: () => (0, r.jsx)(h.Z, { guildId: e }),
                        children: e => {
                            let {onClick: n} = e;
                            return (0, r.jsxs)(M, {
                                onClick: n,
                                children: [
                                    D,
                                    (0, r.jsx)(C.Z, {
                                        width: 16,
                                        height: 16,
                                        direction: C.Z.Directions.DOWN,
                                        className: b.selectCaret
                                    })
                                ]
                            });
                        }
                    }),
                    o && (0, r.jsx)(s.TooltipContainer, {
                        className: b.previewWarning,
                        text: L.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, r.jsx)(s.CircleExclamationPointIcon, {
                            size: 'xs',
                            color: u.Z.unsafe_rawColors.YELLOW_300.css
                        })
                    }),
                    T && (0, r.jsx)(s.TooltipContainer, {
                        className: b.previewWarning,
                        text: L.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
                            maxTiers: R.fF,
                            maxProducts: v.dD
                        }),
                        children: (0, r.jsx)(s.CircleExclamationPointIcon, {
                            size: 'xs',
                            color: u.Z.unsafe_rawColors.YELLOW_300.css
                        })
                    })
                ]
            }),
            o || i === N.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(O, { onClick: () => U({ backToSettings: !1 }) })
        ]
    });
}
function D(e) {
    let {guildId: n} = e;
    return (0, l.e7)([m.Z], () => m.Z.isViewingRoles(n)) ? (0, r.jsx)('div', {
        className: o()(b.settingsWrapper, {
            [b.windows]: (0, T.isWindows)(),
            [b.osx]: (0, T.isMac)()
        }),
        children: (0, r.jsx)(Z, {})
    }) : null;
}
