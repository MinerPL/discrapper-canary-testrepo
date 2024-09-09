n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var s = n(470079),
    a = n(768581),
    i = n(776155),
    r = n(981631);
function l(e, t, n) {
    var l, o;
    let { isLoading: c, error: d, highlightedCreatorDetails: u } = (0, i.Z)(e),
        _ = null == u ? void 0 : u.store_page,
        I = s.useMemo(() => {
            var e, t;
            let n = (function (e) {
                    let t = new Set();
                    return (
                        null == e ||
                            e.forEach((e) => {
                                var n;
                                null === (n = e.subscription_listings) ||
                                    void 0 === n ||
                                    n.forEach((e) => {
                                        t.add(e.role_id);
                                    });
                            }),
                        t
                    );
                })(null == _ ? void 0 : null === (e = _.role_subscription) || void 0 === e ? void 0 : e.group_listings),
                s = null == _ ? void 0 : null === (t = _.role_subscription) || void 0 === t ? void 0 : t.benefit_emojis;
            return null == s ? void 0 : s.filter((e) => e.roles.some((e) => n.has(e)));
        }, [null == _ ? void 0 : _.role_subscription]),
        E = null == _ ? void 0 : _.guild.icon_hash,
        T = a.ZP.getGuildIconURL({
            id: e,
            icon: E,
            size: n
        }),
        m = s.useMemo(() => (null != I && I.length > t ? I.slice(0, t) : I), [I, t]),
        N = null != I && I.length > t ? I.length - t : null,
        S = null == u ? void 0 : u.slug,
        h = null != S ? r.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(S) : void 0,
        g = null == _ ? void 0 : null === (l = _.guild) || void 0 === l ? void 0 : l.name,
        C = null == _ ? void 0 : null === (o = _.role_subscription) || void 0 === o ? void 0 : o.subscriber_count,
        x = !c && null != g && null != E && null != T;
    return x
        ? {
              hasAllImperativeDetails: x,
              isLoading: c,
              details: {
                  guildName: g,
                  guildIcon: E,
                  guildAvatarUrl: T,
                  storePageUrl: h,
                  subscriberCount: C,
                  emojisToShow: m,
                  notShownEmojiCount: N
              }
          }
        : {
              hasAllImperativeDetails: x,
              isLoading: c,
              error: d
          };
}
