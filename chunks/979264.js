n.d(t, {
    KQ: function () {
        return I;
    },
    aG: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(645896),
    d = n(353093),
    _ = n(954138),
    E = n(426964),
    f = n(308083),
    h = n(689938),
    p = n(755150);
let I = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: a = f.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: h.Z.Messages.CLAN_BADGE_ALT.format({ tag: n }),
                  className: s()(p.badge, i),
                  width: a,
                  height: a
              });
    }),
    m = i.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: E, textVariant: h = 'text-xs/semibold', textColor: m = 'text-normal', badgeSize: T = f.NC.SIZE_12, inline: S = !0 } = e;
        return (0, _.Z)('base_clan_tag_chiplet')
            ? (0, r.jsx)(l.Clickable, {
                  tag: 'span',
                  tabIndex: null == c ? -1 : void 0,
                  onClick: c,
                  onMouseEnter: E,
                  className: s()(p.chipletContainerInner, S && p.chipletContainerInline, null != c && p.clickable, a),
                  children: (0, r.jsxs)(l.Text, {
                      variant: h,
                      color: m,
                      tag: 'span',
                      className: s()(p.text, o),
                      children: [
                          null != i && 'string' == typeof i
                              ? (0, r.jsx)(I, {
                                    src: (0, d.ky)(t, i, T),
                                    tag: null == n ? void 0 : n.toString(),
                                    size: T,
                                    className: u
                                })
                              : i,
                          (0, r.jsx)('span', {
                              className: p.unselectable,
                              children: n
                          })
                      ]
                  })
              })
            : null;
    }),
    T = i.memo(function (e) {
        var t, n;
        let { clan: a, userId: d, className: _, children: f, profileViewedAnalytics: h } = e,
            I = (0, o.e7)([u.default], () => u.default.getUser(d), [d]),
            m = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : a,
            [T, S] = (0, c.L_)(null !== (n = null == m ? void 0 : m.identityGuildId) && void 0 !== n ? n : null),
            g = i.useCallback(() => {
                S();
            }, [S]);
        return (0, r.jsx)(l.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(E.Z, {
                    isLoading: T,
                    clan: m,
                    onClose: t,
                    profileViewedAnalytics: h
                });
            },
            position: 'top',
            animationPosition: 'top',
            spacing: 16,
            children: (e) =>
                (0, r.jsx)(l.Clickable, {
                    className: s()(p.clickable, _),
                    tag: 'span',
                    ...e,
                    onClick: (t) => {
                        var n;
                        null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
                    },
                    onMouseEnter: () => {
                        var t;
                        g(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    children: f
                })
        });
    });
t.ZP = i.memo(function (e) {
    var t;
    let { clan: n, userId: i, contextGuildId: a, className: l, containerClassName: c, textVariant: _, textColor: E, badgeSize: f, disableGuildProfile: h = !1, inline: I = !0, profileViewedAnalytics: S } = e,
        g = (0, o.e7)([u.default], () => u.default.getUser(i), [i]),
        A = null !== (t = null == g ? void 0 : g.clan) && void 0 !== t ? t : n,
        { tag: N, badge: O, guildId: R } = (0, d.vh)(A);
    return (0, d.p0)(i, a) && null != R
        ? h
            ? (0, r.jsx)(m, {
                  guildId: R,
                  clanTag: N,
                  clanBadge: O,
                  className: s()(p.noTooltip, l),
                  textVariant: _,
                  textColor: E,
                  badgeSize: f,
                  inline: I
              })
            : (0, r.jsx)(T, {
                  clan: A,
                  userId: i,
                  profileViewedAnalytics: S,
                  className: c,
                  children: (0, r.jsx)(m, {
                      guildId: R,
                      clanTag: N,
                      clanBadge: O,
                      className: l,
                      textVariant: _,
                      textColor: E,
                      badgeSize: f,
                      inline: I
                  })
              })
        : null;
});
