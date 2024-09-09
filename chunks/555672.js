n.d(t, {
    Hs: function () {
        return _;
    },
    qy: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(317261),
    s = n(379357),
    o = n(442550),
    l = n(561308),
    u = n(297781),
    c = n(443487),
    d = n(182022);
let _ = [u.E6],
    E = [a._.WEEK];
function f(e) {
    return null != e && E.includes(e);
}
t.ZP = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: a } = (0, s.rv)({ entry: t }),
        E = (0, l.Nq)(t);
    return null != E && f(E)
        ? (0, r.jsxs)(c.Zb, {
              selected: i,
              children: [
                  (0, r.jsxs)(c.e$, {
                      children: [
                          (0, r.jsx)(c.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, r.jsx)(c.ll, { children: t.extra.game_name }),
                          (0, r.jsx)(u.Gk, {
                              location: u.Gt.CARD,
                              children: _.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                          })
                      ]
                  }),
                  (0, r.jsx)(o.f, {
                      src: null == a ? void 0 : a.src,
                      size: 48,
                      className: d.thumbnail,
                      alt: null == a ? void 0 : a.alt
                  })
              ]
          })
        : null;
});
