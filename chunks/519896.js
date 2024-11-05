t.r(e),
    t.d(e, {
        SubscriptionDetailsModal: function () {
            return x;
        }
    });
var l = t(200651),
    i = t(192379),
    r = t(269210),
    o = t(752843),
    a = t(481060),
    s = t(757746),
    u = t(930155),
    c = t(889989),
    d = t(696906),
    p = t(73346),
    f = t(591759),
    v = t(886253),
    m = t(680005),
    h = t(938337);
function x(n) {
    var e, t;
    let { appId: x, subscriptionType: S, onClose: I, skuId: g, guildId: Z, transitionState: T, onHeaderTitleClick: N } = n,
        { data: b } = (0, u.H)(g),
        j = b[0],
        { data: E } = (0, s.Z)(g),
        C = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null && null !== (n = f.Z.toURLSafe((0, p._W)(x, E.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [x, null == E ? void 0 : E.thumbnail]),
        k = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, c.n)(x, n.icon)
                }));
        }, [x, null == E ? void 0 : E.benefits]),
        { openModal: R, cannotOpenReason: _ } = (0, d.ZP)({
            skuId: g,
            subscribeForGuild: null != Z ? Z : void 0
        });
    return null == E
        ? null
        : (0, l.jsx)(v.A, {
              appId: x,
              skuId: g,
              transitionState: T,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, l.jsx)(m.p, {
                  onClick: R,
                  appId: x,
                  subscriptionType: S,
                  skuId: g,
                  subscriptionPlan: j,
                  cannotOpenReason: _
              }),
              children: (0, l.jsx)(h.i, {
                  appId: x,
                  skuId: g,
                  benefits:
                      null != k
                          ? k.map((n) =>
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
                  title: null !== (t = null == j ? void 0 : j.name) && void 0 !== t ? t : E.summary,
                  tag: (0, l.jsx)(o.Z, { type: S }),
                  FallbackIcon: a.BadgeIcon
              })
          });
}
