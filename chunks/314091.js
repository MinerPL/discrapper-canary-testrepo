n.d(t, {
    b6: function () {
        return m;
    },
    j3: function () {
        return p;
    },
    xC: function () {
        return _;
    }
}),
    n(47120);
var i = n(866442),
    s = n(503438),
    a = n(420660),
    l = n(168631),
    r = n(621853),
    o = n(981631),
    c = n(689938);
let u = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
    d = (e) => {
        let t = Date.now() / 1000;
        return null != e.end
            ? h(t, u(e.end) / 1000)
            : null != e.start
              ? h(u(e.start) / 1000, t)
              : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
    },
    h = (e, t) => {
        let n = Math.max(t - e, 0),
            i = Math.floor(n) % 60,
            s = Math.floor(n / 60) % 60;
        return {
            hours: Math.floor(n / 3600) % 24,
            minutes: s,
            seconds: i
        };
    },
    m = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    p = (e, t) => {
        var n;
        let s = r.Z.getUserProfile(e.id),
            [a, o] = null !== (n = null == s ? void 0 : s.themeColors) && void 0 !== n ? n : [],
            c = (0, l.V3)(a),
            u = null != o ? (0, i.Rf)(o) : t;
        return {
            color: u,
            theme: u === t ? 'dark' : c
        };
    },
    _ = (e, t) =>
        (0, s.Z)(t)
            ? c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
                  username: e.username,
                  song: t.details,
                  artist: t.state
              })
            : t.type === o.IIU.PLAYING
              ? c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
                    username: e.username,
                    activity: t.name
                })
              : t.type === o.IIU.WATCHING
                ? c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
                      username: e.username,
                      activity: t.name
                  })
                : t.type === o.IIU.LISTENING
                  ? c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                        username: e.username,
                        activity: t.name
                    })
                  : (0, a.Z)(t) || t.type === o.IIU.STREAMING
                    ? c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
                          username: e.username,
                          activity: t.name
                      })
                    : c.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
                          username: e.username,
                          activity: t.name
                      });
