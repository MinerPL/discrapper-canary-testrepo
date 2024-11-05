n.d(t, {
    Z: function () {
        return m;
    },
    c: function () {
        return p;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(998698),
    o = n(824203),
    l = n(713583),
    u = n(920455),
    c = n(931981),
    d = n(898188),
    f = n(541716),
    _ = n(407661),
    h = n(703130);
function p(e) {
    let { channel: t, type: n, activeCommand: p, pendingReply: m } = e,
        { activeCommandOption: g, activeCommandOptionStates: E } = (0, a.cj)([s.Z], () => ({
            activeCommandOption: s.Z.getActiveOption(t.id),
            activeCommandOptionStates: s.Z.getOptionStates(t.id)
        })),
        v = (0, c.e)(t),
        I = (0, o.__)(p, t, { location: 'ChannelTextAreaBars' });
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n !== f.I.SIDEBAR &&
                i.push(
                    (0, r.jsx)(d.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: h.newMemberActionBar
                    })
                ),
            null != p &&
                (I && e.push((0, r.jsx)(u.Z, { activeCommand: p })),
                e.push(
                    (0, r.jsx)(l.Z, {
                        activeCommand: p,
                        activeOption: null != g ? g : null,
                        optionStates: E,
                        channelId: t.id
                    })
                )),
            null != m &&
                e.push(
                    (0, r.jsx)(_.Z, {
                        reply: m,
                        chatInputType: n
                    })
                ),
            v && e.push((0, r.jsx)(c.V, {})),
            {
                stacked: e,
                floating: i
            }
        );
    }, [p, g, E, t, m, v, I, n]);
}
function m(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)('div', { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.floatingBars,
                          children: a
                      }),
                  n.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.stackedBars,
                          children: n
                      })
              ]
          });
}
