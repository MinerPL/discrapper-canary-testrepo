e.d(t, {
    Z: function () {
        return E;
    },
    x: function () {
        return r;
    }
}),
    e(653041);
var r,
    i,
    o = e(200651),
    l = e(192379),
    c = e(120356),
    u = e.n(c),
    a = e(442837),
    s = e(477690),
    d = e(481060),
    p = e(686546),
    h = e(706454),
    I = e(768581),
    f = e(624138),
    m = e(388032),
    g = e(488107);
((i = r || (r = {}))[(i.SMALL = (0, f.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, f.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let L = {
        [r.SMALL]: g.moreGuildsSmall,
        [r.LARGE]: g.moreGuildsLarge
    },
    A = {
        [r.SMALL]: g.iconSmall,
        [r.LARGE]: g.iconLarge
    };
function E(n) {
    var t, e, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: f = 4, className: E, textVariant: T = 'text-sm/normal', compact: _, guildIconSize: R = r.LARGE, guildsClassName: O } = n,
        w = (0, a.e7)([h.default], () => h.default.locale),
        C = new Intl.ListFormat(w),
        N = null !== (e = null === (t = c.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== e ? e : 0,
        P = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        v = Math.max(0, N - P),
        { shownMutualGuilds: S, hiddenMutualGuilds: D } = l.useMemo(() => {
            let n = [],
                t = [];
            return (
                null == s ||
                    s.forEach((e) => {
                        n.length < f && null != e.icon ? n.push(e) : t.push(e);
                    }),
                n.length === f && t.length > 0 && (t.push(n[f - 1]), (n = n.slice(0, f - 1))),
                {
                    shownMutualGuilds: n,
                    hiddenMutualGuilds: t
                }
            );
        }, [s, f]),
        G = D.length,
        y = (function (n, t, e, r, i) {
            if (0 === t && 0 === n) return null;
            if (t > 0 && 0 === e) return m.intl.formatToPlainString(m.t.pnzE1t, { mutualGuildCount: t });
            let o = t > 0 ? m.t.YR8PSE : m.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return m.intl.formatToPlainString(o, {
                guildCount: l.format(n),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(e)
            });
        })(N, P, v, w, _);
    return 0 === S.length && null == y
        ? null
        : (0, o.jsxs)('div', {
              className: u()(E, g.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: u()(g.icons, O),
                      children:
                          S.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        S.map((n, t) => {
                                            let e = t === S.length - 1 && 0 === G,
                                                r = I.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: R,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(d.Tooltip, {
                                                    text: n.name,
                                                    position: 'top',
                                                    children: (n) =>
                                                        (0, o.jsx)('img', {
                                                            ...n,
                                                            className: u()(g.icon, A[R]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return e
                                                ? (0, o.jsx)(l.Fragment, { children: i }, n.id)
                                                : (0, o.jsx)(
                                                      p.ZP,
                                                      {
                                                          className: g.iconMask,
                                                          height: R,
                                                          width: R,
                                                          mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      n.id
                                                  );
                                        }),
                                        G > 0
                                            ? (0, o.jsx)(d.Tooltip, {
                                                  text: m.intl.formatToPlainString(m.t.m6oRrK, { appNames: C.format(D.map((n) => n.name)) }),
                                                  position: 'top',
                                                  children: (n) =>
                                                      (0, o.jsxs)('div', {
                                                          ...n,
                                                          className: u()(g.moreGuilds, L[R]),
                                                          children: ['+', G]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(d.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: R,
                                    height: R,
                                    className: g.defaultIcon
                                })
                  }),
                  null != y
                      ? (0, o.jsx)(d.Text, {
                            variant: T,
                            color: 'header-secondary',
                            children: y
                        })
                      : null
              ]
          });
}
