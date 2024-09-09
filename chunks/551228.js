n.d(t, {
    pi: function () {
        return f;
    },
    te: function () {
        return E;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(594174),
    o = n(379357),
    l = n(719247),
    u = n(442550),
    c = n(297781),
    d = n(443487),
    _ = n(182022);
let E = [c.XF];
function f(e) {
    var t, n, r, i;
    let o = (0, a.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
        u = (0, a.e7)([s.default], () => s.default.getUser(e.author_id));
    if (null == o || null == u) return {};
    let c = e.extra.entries[0],
        d = null !== (r = null !== (n = o.state) && void 0 !== n ? n : null === (t = c.media.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : c.media.title,
        _ = null !== (i = o.details) && void 0 !== i ? i : c.media.title;
    return {
        activity: o,
        artist: d,
        currentEntry: c,
        title: _,
        user: u
    };
}
t.ZP = i.memo(function (e) {
    let { entry: t, channel: n, selected: i } = e,
        { activity: a, artist: s } = f(t),
        { largeImage: l } = (0, o.rv)({ entry: t });
    return null == a
        ? (0, r.jsx)(d.cA, {})
        : (0, r.jsxs)(d.Zb, {
              selected: i,
              children: [
                  (0, r.jsxs)(d.e$, {
                      children: [
                          (0, r.jsx)(d.F9, {
                              entry: t,
                              channelId: n.id,
                              guildId: n.guild_id
                          }),
                          (0, r.jsx)(d.ll, { children: s }),
                          (0, r.jsx)(c.Gk, {
                              location: c.Gt.CARD,
                              children: E.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                          })
                      ]
                  }),
                  (0, r.jsx)(u.f, {
                      src: null == l ? void 0 : l.src,
                      size: 48,
                      className: _.thumbnail
                  })
              ]
          });
});
