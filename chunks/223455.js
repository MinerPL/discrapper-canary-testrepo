t.r(e), t.d(e, {
    default: function () {
        return w;
    }
});
var i = t(735250);
t(470079);
var a = t(512722), l = t.n(a), d = t(399606), r = t(721037), s = t(561472), c = t(372900), o = t(238246), u = t(592125), h = t(703558), p = t(677601);
function w(n) {
    let {
            windowKey: e,
            channelId: t
        } = n, a = (0, d.e7)([u.Z], () => u.Z.getChannel(t));
    return l()(null != a, 'channel cannot be null for popout'), (0, i.jsx)(o.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: a.name,
        channelId: a.id,
        children: (0, i.jsxs)(c.Z.Provider, {
            value: a.guild_id,
            children: [
                (0, i.jsx)(s.Z, {
                    channel: a,
                    draftType: h.d.ChannelMessage
                }),
                (0, i.jsx)(p.Z, { channel: a }),
                (0, i.jsx)(r.Z, {
                    showInPopoutWindow: !0,
                    disallowTextActivity: !0
                })
            ]
        })
    });
}
