n.d(t, {
    KQ: function () {
        return g;
    },
    aG: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(645896),
    d = n(353093),
    f = n(954138),
    _ = n(426964),
    h = n(308083),
    p = n(388032),
    m = n(162685);
let g = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: a = h.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: p.intl.formatToPlainString(p.t.PShNVV, { tag: n }),
                  className: s()(m.badge, i),
                  width: a,
                  height: a
              });
    }),
    E = i.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: _, textVariant: p = 'text-xs/semibold', textColor: E = 'text-normal', badgeSize: v = h.NC.SIZE_12, inline: I = !0 } = e;
        return (0, f.Z)('base_clan_tag_chiplet')
            ? (0, r.jsx)(l.Clickable, {
                  tag: 'span',
                  tabIndex: null == c ? -1 : void 0,
                  onClick: c,
                  onMouseEnter: _,
                  className: s()(m.chipletContainerInner, I && m.chipletContainerInline, null != c && m.clickable, a),
                  children: (0, r.jsxs)(l.Text, {
                      variant: p,
                      color: E,
                      tag: 'span',
                      className: s()(m.text, o),
                      children: [
                          null != i && 'string' == typeof i
                              ? (0, r.jsx)(g, {
                                    src: (0, d.ky)(t, i, v),
                                    tag: null == n ? void 0 : n.toString(),
                                    size: v,
                                    className: u
                                })
                              : i,
                          (0, r.jsx)('span', {
                              className: m.unselectable,
                              children: n
                          })
                      ]
                  })
              })
            : null;
    }),
    v = i.memo(function (e) {
        var t, n;
        let { clan: a, userId: d, className: f, children: h, profileViewedAnalytics: p } = e,
            g = (0, o.e7)([u.default], () => u.default.getUser(d), [d]),
            E = null !== (t = null == g ? void 0 : g.clan) && void 0 !== t ? t : a,
            [v, I] = (0, c.L_)(null !== (n = null == E ? void 0 : E.identityGuildId) && void 0 !== n ? n : null),
            S = i.useCallback(() => {
                I();
            }, [I]);
        return (0, r.jsx)(l.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(_.Z, {
                    isLoading: v,
                    clan: E,
                    onClose: t,
                    profileViewedAnalytics: p,
                    userId: d
                });
            },
            position: 'top',
            animationPosition: 'top',
            spacing: 16,
            children: (e) =>
                (0, r.jsx)(l.Clickable, {
                    className: s()(m.clickable, f),
                    tag: 'span',
                    ...e,
                    onClick: (t) => {
                        var n;
                        null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
                    },
                    onMouseEnter: () => {
                        var t;
                        S(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    children: h
                })
        });
    });
t.ZP = i.memo(function (e) {
    var t;
    let { clan: n, userId: i, contextGuildId: a, className: l, containerClassName: c, textVariant: f, textColor: _, badgeSize: h, disableGuildProfile: p = !1, inline: g = !0, profileViewedAnalytics: I } = e,
        S = (0, o.e7)([u.default], () => u.default.getUser(i), [i]),
        T = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : n,
        { tag: b, badge: y, guildId: A } = (0, d.vh)(T);
    return (0, d.p0)(i, a) && null != A
        ? p
            ? (0, r.jsx)(E, {
                  guildId: A,
                  clanTag: b,
                  clanBadge: y,
                  className: s()(m.noTooltip, l),
                  textVariant: f,
                  textColor: _,
                  badgeSize: h,
                  inline: g
              })
            : (0, r.jsx)(v, {
                  clan: T,
                  userId: i,
                  profileViewedAnalytics: I,
                  className: c,
                  children: (0, r.jsx)(E, {
                      guildId: A,
                      clanTag: b,
                      clanBadge: y,
                      className: l,
                      textVariant: f,
                      textColor: _,
                      badgeSize: h,
                      inline: g
                  })
              })
        : null;
});
