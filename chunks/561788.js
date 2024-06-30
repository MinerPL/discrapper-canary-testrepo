n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var l = n(442837), r = n(481060), a = n(471445), s = n(430824), o = n(777443);
function c(e) {
    let {channel: t} = e, n = (0, l.e7)([s.Z], () => s.Z.getGuild(t.guild_id)), c = (0, a.KS)(t, n);
    return null == c ? null : (0, i.jsxs)('div', {
        className: o.popoutHeader,
        children: [
            (0, i.jsx)(c, { className: o.channelIcon }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                className: o.channelName,
                children: t.name
            })
        ]
    });
}
