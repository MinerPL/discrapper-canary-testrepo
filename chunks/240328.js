n.d(t, {
    Ao: function () {
        return y;
    }
}), n(47120), n(627341);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(278074), l = n(399606), u = n(481060), c = n(393238), d = n(607070), _ = n(100527), E = n(906732), f = n(1585), h = n(125988), p = n(335131), m = n(597688), I = n(884697), T = n(731896), g = n(594174), S = n(74538), A = n(436478), N = n(921944), v = n(689938), O = n(530086), R = n(174492);
function C(e) {
    let {onClick: t} = e;
    return (0, r.jsx)(u.Clickable, {
        className: O.closeButton,
        onClick: t,
        'aria-label': v.Z.Messages.DISMISS,
        children: (0, r.jsx)(u.CloseSmallIcon, {
            size: 'sm',
            color: 'currentColor',
            className: O.closeIcon
        })
    });
}
let y = 76, D = e => (0, r.jsx)(u.Text, {
        variant: 'text-sm/normal',
        color: 'text-normal',
        tag: 'span',
        className: O.ctaLink,
        children: e
    }), L = e => {
        let {
                user: t,
                onClick: n
            } = e, {avatarDecorationSrc: i} = (0, h.Z)({
                user: t,
                size: (0, f.y9)(u.AvatarSizes.SIZE_48)
            });
        return (0, r.jsx)(u.Clickable, {
            className: O.avatarButton,
            onClick: n,
            'aria-label': v.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
            children: (0, r.jsx)(u.Avatar, {
                src: R,
                avatarDecoration: i,
                size: u.AvatarSizes.SIZE_48,
                'aria-hidden': !0
            })
        });
    };
t.ZP = e => {
    var t;
    let {
            user: n,
            displayProfile: a,
            onClose: f,
            onDismiss: h,
            isInSidebar: R = !1,
            canShowAvatarDecorationUpsell: b = !1,
            canShowProfileEffectUpsell: M = !1,
            upsellSource: P
        } = e, {analyticsLocations: U} = (0, E.ZP)(_.Z.COLLECTIBLES_USER_POPOUT_UPSELL), w = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
            ref: x,
            height: G
        } = (0, c.Z)(), k = i.useMemo(() => ({ top: '-'.concat((null != G ? G : y) + 6, 'px') }), [G]), B = (0, l.e7)([g.default], () => g.default.getCurrentUser()), F = S.ZP.canUseCollectibles(B), {
            setUpsellSource: V,
            reset: H
        } = (0, A.k)();
    i.useEffect(() => (V(P), () => {
        H();
    }), [
        V,
        P,
        H
    ]);
    let Z = (0, T.V)(null == a ? void 0 : a.profileEffectId), [Y, j] = (0, l.Wu)([m.Z], () => {
            var e;
            return [
                (0, I.G1)(m.Z.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)),
                (0, I.G1)(m.Z.getProduct(null == Z ? void 0 : Z.skuId))
            ];
        }), W = i.useCallback(() => {
            var e, t, r, i;
            null == h || h(N.L.PRIMARY), null == f || f(), (0, p.mK)({
                analyticsLocations: U,
                analyticsSource: _.Z.COLLECTIBLES_USER_POPOUT_UPSELL,
                initialProductSkuId: Y ? null !== (r = null == Z ? void 0 : Z.skuId) && void 0 !== r ? r : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (i = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : null == Z ? void 0 : Z.skuId
            });
        }, [
            h,
            f,
            U,
            null == Z ? void 0 : Z.skuId,
            null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId,
            Y
        ]), K = i.useCallback(() => {
            null == h || h(N.L.DISMISS);
        }, [h]);
    if (!b && !M)
        return null;
    let z = (0, s.EQ)([
        b,
        M
    ]).with([
        !0,
        !0
    ], () => Y && j && F ? v.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({ openShop: D }) : Y && j ? v.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({ openShop: D }) : v.Z.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({ openShop: D })).with([
        !0,
        !1
    ], () => Y && F ? v.Z.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({ openShop: D }) : v.Z.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({ openShop: D })).with([
        !1,
        !0
    ], () => j && F ? v.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({ openShop: D }) : (j && v.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({ openShop: D }), v.Z.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({ openShop: D }))).otherwise(() => null);
    return (0, r.jsx)('div', {
        style: k,
        className: o()(O.containerWrapper, {
            [O.animation]: !w,
            [O.inSidebar]: R
        }),
        ref: x,
        children: (0, r.jsxs)('div', {
            className: O.container,
            children: [
                b && (0, r.jsx)(L, {
                    user: n,
                    onClick: W
                }),
                (0, r.jsx)(u.Clickable, {
                    className: b ? O.contentWithAvatar : O.content,
                    onClick: W,
                    'aria-label': v.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        tag: 'span',
                        children: z
                    })
                }),
                (0, r.jsx)('div', {
                    className: O.buttons,
                    children: (0, r.jsx)(C, { onClick: K })
                })
            ]
        })
    });
};
