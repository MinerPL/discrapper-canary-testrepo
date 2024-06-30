s.d(l, {
    Z: function () {
        return o;
    }
});
var a = s(735250), i = s(470079), n = s(442837), t = s(481060), c = s(249842), d = s(838367), r = s(83474);
function o(e) {
    let {
            guildId: l,
            channelId: s,
            messageId: o,
            ...u
        } = e, {
            unavailable: h,
            guild: m
        } = (0, n.cj)([d.Z], () => ({
            guild: d.Z.getGuild(l),
            unavailable: d.Z.hasFetchFailed(l)
        }), [l]), x = null != m, g = i.useCallback(async () => {
            try {
                !x && await (0, c.P)(l);
            } catch {
            }
        }, [
            x,
            l
        ]);
    return h ? (0, a.jsx)(t.Popout, {
        position: 'right',
        renderPopout: e => (0, a.jsx)(r.SK, {}),
        ...u
    }) : (0, a.jsx)(t.Popout, {
        position: 'right',
        preload: g,
        renderPopout: e => null == m ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)(r.sK, {
            ...e,
            guild: m,
            channelId: s,
            messageId: o
        }),
        ...u
    });
}
