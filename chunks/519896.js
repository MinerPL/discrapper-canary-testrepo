t.r(n),
    t.d(n, {
        SubscriptionDetailsModal: function () {
            return I;
        }
    });
var i = t(735250),
    l = t(470079),
    r = t(269210),
    s = t(752843),
    o = t(481060),
    a = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(73346),
    f = t(591759),
    p = t(886253),
    m = t(680005),
    v = t(938337);
function I(e) {
    var n;
    let { appId: t, groupListingId: I, subscriptionType: S, guildId: g, onClose: h, skuId: x, transitionState: E, onHeaderTitleClick: _ } = e,
        { data: N } = (0, u.H)(x),
        { data: T } = (0, a.Z)(x),
        Z = l.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null && null !== (e = f.Z.toURLSafe((0, d._W)(t, T.thumbnail, 256))) && void 0 !== e ? e : void 0;
        }, [t, null == T ? void 0 : T.thumbnail]),
        C = l.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.n)(t, e.icon)
                }));
        }, [t, null == T ? void 0 : T.benefits]);
    return null == T || null == N || 0 === N.length
        ? null
        : (0, i.jsx)(p.A, {
              appId: t,
              skuId: x,
              transitionState: E,
              onHeaderTitleClick: null != _ ? _ : h,
              onClose: h,
              footer: (0, i.jsx)(m.p, {
                  appId: t,
                  groupListingId: I,
                  subscriptionType: S,
                  guildId: g,
                  skuId: x,
                  subscriptionPlan: N[0]
              }),
              children: (0, i.jsx)(v.i, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != C
                          ? C.map((e) =>
                                (0, i.jsx)(
                                    r.G,
                                    {
                                        name: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null !== (n = T.description) && void 0 !== n ? n : void 0,
                  imgSrc: Z,
                  title: N[0].name,
                  tag: (0, i.jsx)(s.Z, { type: S }),
                  FallbackIcon: o.BadgeIcon
              })
          });
}
