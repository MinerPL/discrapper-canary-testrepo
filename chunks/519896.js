t.r(e),
    t.d(e, {
        SubscriptionDetailsModal: function () {
            return S;
        }
    });
var l = t(735250),
    i = t(470079),
    r = t(269210),
    a = t(752843),
    o = t(481060),
    s = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    f = t(73346),
    p = t(591759),
    m = t(886253),
    v = t(680005),
    I = t(938337);
function S(n) {
    var e;
    let { appId: t, subscriptionType: S, onClose: h, skuId: x, guildId: N, transitionState: g, onHeaderTitleClick: T } = n,
        { data: Z } = (0, u.H)(x),
        { data: E } = (0, s.Z)(x),
        C = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null && null !== (n = p.Z.toURLSafe((0, f._W)(t, E.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [t, null == E ? void 0 : E.thumbnail]),
        _ = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(t, n.icon)
                }));
        }, [t, null == E ? void 0 : E.benefits]),
        {
            openModal: A,
            canOpenModal: O,
            cannotOpenReason: R
        } = (0, d.Z)({
            skuId: x,
            guildId: N,
            showBenefitsFirst: !1
        });
    return null == E || null == Z || 0 === Z.length
        ? null
        : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: g,
              onHeaderTitleClick: null != T ? T : h,
              onClose: h,
              footer: (0, l.jsx)(v.p, {
                  onClick: A,
                  appId: t,
                  subscriptionType: S,
                  skuId: x,
                  subscriptionPlan: Z[0],
                  canPurchase: O,
                  cannotPurchaseReason: R
              }),
              children: (0, l.jsx)(I.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != _
                          ? _.map((n) =>
                                (0, l.jsx)(
                                    r.G,
                                    {
                                        name: n.title,
                                        icon: n.icon,
                                        description: n.description
                                    },
                                    n.id
                                )
                            )
                          : void 0,
                  description: null !== (e = E.description) && void 0 !== e ? e : void 0,
                  imgSrc: C,
                  title: Z[0].name,
                  tag: (0, l.jsx)(a.Z, { type: S }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}
