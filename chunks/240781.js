n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(481060),
    u = n(884697),
    c = n(449217),
    d = n(81245),
    _ = n(706454),
    E = n(158776),
    f = n(55935),
    h = n(74538),
    p = n(204418),
    I = n(689938),
    m = n(828136);
let T = [
        {
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: l.AvatarSizes.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: l.AvatarSizes.SIZE_32,
            showStatus: !0
        }
    ],
    S = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([_.default], () => _.default.locale),
            i = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, f.TD)(Date.now(), t.expiresAt) : null;
        return (0, r.jsxs)('div', {
            className: m.purchaseInfo,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: t.name
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != a &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: I.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: a.days.toString() })
                    }),
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        I.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    I.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
                                        date: t.expiresAt.toLocaleDateString(n, {
                                            minute: 'numeric',
                                            hour: 'numeric',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    })
                                ]
                            })
                    ]
                }),
                i &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: I.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
                    })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guildId: n, avatarDecorationOverride: i, className: _ } = e,
        f = (0, o.e7)([E.Z], () => E.Z.getStatus(t.id)),
        { product: g, purchase: A } = (0, c.Z)(null == i ? void 0 : i.skuId),
        N = h.ZP.canUseCollectibles(t),
        O = (0, u.qS)(A),
        R = (0, u.G1)(g),
        v = !N && O,
        C = (0, d.Mu)('ProfileEffectDescription', !R || N);
    return null != g && (null == A || v)
        ? (0, r.jsxs)('div', {
              className: a()(m.modalPreview, m.shopPreviewContainer, _),
              children: [
                  (0, r.jsx)('div', {
                      className: m.shopPreviewBanner,
                      children: (0, r.jsx)(p.Z, {
                          user: t,
                          guildId: n,
                          avatarDecorationOverride: i
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: m.shopPreviewTextContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/semibold',
                              children: g.name
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              children: v
                                  ? I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED
                                  : (0, s.EQ)([R, N, C])
                                        .with([!0, !0, !1], () => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM)
                                        .with([!0, !1, !0], () => I.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_INLINE_UPSELL_DESCRIPTION)
                                        .with([!0, !1, !1], () => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER)
                                        .otherwise(() => I.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(m.modalPreview, _),
              children: [
                  (0, r.jsxs)('div', {
                      className: m.previewSections,
                      children: [
                          (0, r.jsx)('div', {
                              className: m.decorationPreview,
                              children: (0, r.jsx)(p.Z, {
                                  user: t,
                                  guildId: n,
                                  avatarDecorationOverride: i
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: m.smallDecorationPreviewsContainer,
                              children: T.map((e) => {
                                  let { avatarSize: a, showStatus: s } = e;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: m.smallDecorationPreview,
                                          children: (0, r.jsx)(p.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: a,
                                              avatarDecorationOverride: i,
                                              status: s ? f : void 0,
                                              'aria-hidden': !0
                                          })
                                      },
                                      ''.concat(a).concat(s)
                                  );
                              })
                          })
                      ]
                  }),
                  null != A && (0, r.jsx)(S, { purchase: A })
              ]
          });
};
