n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(873128),
    o = n(704041),
    l = n(463031),
    u = n(383177);
function c(e) {
    let { guild: t, message: n } = e,
        [c, d] = i.useState(!1),
        _ = i.useRef(!1),
        E = (0, s.Z)({
            guildId: t.id,
            leaderboardId: l._,
            intervalOffset: 0
        });
    return i.useMemo(() => {
        if (null == E) return !1;
        let e = E.users[0];
        return n.author.id === (null == e ? void 0 : e.user_id);
    }, [E, n])
        ? (0, r.jsx)('div', {
              className: u.badge,
              onMouseEnter: () => {
                  (_.current = !0), d(!0);
              },
              onMouseLeave: () => {
                  (_.current = !1),
                      setTimeout(() => {
                          !_.current && d(!1);
                      }, 100);
              },
              children: (0, r.jsx)(a.Popout, {
                  animation: a.Popout.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'top',
                  shouldShow: c,
                  renderPopout: () =>
                      (0, r.jsx)(o.Z, {
                          guildId: t.id,
                          previewMode: !0
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
