n.d(t, {
    C: function () {
        return i;
    }
}),
    n(47120);
var i,
    o,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    u = n(399606),
    c = n(239091),
    d = n(40851),
    h = n(352978),
    f = n(27457),
    p = n(199902),
    m = n(592125),
    v = n(944486),
    g = n(981631),
    E = n(705617);
let _ = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
function C(e) {
    let { participant: t, width: i, locked: o, channel: l } = e,
        s = (0, d.bp)(),
        a = (0, u.e7)([p.Z], () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
        m = null != a && _.has(a.state);
    return !(null != a) || m
        ? null
        : (0, r.jsx)('div', {
              className: E.tileContainer,
              children: (0, r.jsx)(f.ZP, {
                  participant: t,
                  width: i,
                  className: E.tile,
                  fit: h.L.COVER,
                  inPopout: !0,
                  inCall: !0,
                  focused: o,
                  forceIdle: o,
                  channel: l,
                  onContextMenu: o
                      ? void 0
                      : (e, t) => {
                            (0, c.jW)(t, async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, r.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        exitFullscreen: () => {},
                                        appContext: s
                                    });
                            });
                        }
              })
          });
}
((o = i || (i = {})).HORIZONTAL = 'horizontal'),
    (o.VERTICAL = 'vertical'),
    (t.Z = l.memo(function (e) {
        let { tileWidth: t, layout: n, locked: i, streamParticipants: o, participantsVersion: l } = e,
            s = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            c = (0, u.e7)([m.Z], () => m.Z.getChannel(s), [s]);
        return (0, r.jsx)('div', {
            className: a()({
                [E.gridContainer]: !0,
                [E.vertical]: 'vertical' === n,
                [E.horizontal]: 'horizontal' === n
            }),
            children:
                null == c
                    ? []
                    : o.map((e) =>
                          (0, r.jsx)(
                              C,
                              {
                                  participant: e,
                                  width: t,
                                  locked: i,
                                  channel: c
                              },
                              e.user.id
                          )
                      )
        });
    }));
