n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(772848),
    l = n(442837),
    r = n(570140),
    o = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    h = n(963838),
    m = n(39127),
    p = n(981631),
    _ = n(396793);
function E(e) {
    let { channelId: t, guildId: n, userId: E, containerDimensions: f } = e,
        C = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        [g, I] = a.useState([]),
        x = g.length < 50;
    a.useEffect(() => {
        function e(e) {
            var i;
            let { channelId: a, userId: l, emoji: r, animationType: o, animationId: m } = e;
            if ((null != E && E !== l) || (u.Z.getEnabled() && (0, d.Z)(null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : ''))) return;
            let _ = null != r && null != o && null != m;
            if (a === t && !C && x && _) {
                let e = (0, h._r)(r),
                    i = null != r.id && !r.animated,
                    a = {
                        id: (0, s.Z)(),
                        animationType: o,
                        animationId: m,
                        shouldResize: i,
                        url: e,
                        userId: l
                    };
                I((e) => [...e, a]),
                    c.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    });
            }
        }
        return (
            r.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                r.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, E, C, x]);
    let T = a.useCallback((e) => {
        I((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return C
        ? null
        : (0, i.jsx)('div', {
              className: _.effectsWrapper,
              style: { width: f.width },
              children: (0, i.jsx)('div', {
                  className: _.effects,
                  children: g.map((e) =>
                      (0, i.jsx)(
                          m.Z,
                          {
                              containerDimensions: f,
                              effect: e,
                              onComplete: T
                          },
                          e.id
                      )
                  )
              })
          });
}
