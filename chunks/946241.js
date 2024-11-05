n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(100527),
    o = n(873128),
    l = n(704041),
    u = n(463031),
    c = n(383177);
function d(e) {
    let { guild: t, message: n } = e,
        [d, f] = i.useState(!1),
        _ = i.useRef(!1),
        h = (0, o.Z)({
            guildId: t.id,
            leaderboardId: u._,
            intervalOffset: 0
        });
    return i.useMemo(() => {
        var e;
        if ((null == h ? void 0 : null === (e = h.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
        let t = h.users[0];
        return n.author.id === (null == t ? void 0 : t.user_id);
    }, [h, n])
        ? (0, r.jsx)('div', {
              className: c.badge,
              onMouseEnter: () => {
                  (_.current = !0), f(!0);
              },
              onMouseLeave: () => {
                  (_.current = !1),
                      setTimeout(() => {
                          !_.current && f(!1);
                      }, 100);
              },
              children: (0, r.jsx)(a.Popout, {
                  animation: a.Popout.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: d,
                  renderPopout: () =>
                      (0, r.jsx)(l.Z, {
                          guildId: t.id,
                          previewMode: !0,
                          source: s.Z.MEMBER_LIST
                      }),
                  children: () =>
                      (0, r.jsx)(a.LeagueOfLegendsBrandIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20
                      })
              })
          })
        : null;
}
