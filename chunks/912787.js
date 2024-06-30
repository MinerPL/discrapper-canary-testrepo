n.d(t, {
    Z: function () {
        return o;
    },
    i: function () {
        return s;
    }
});
var r = n(442837), i = n(592125), a = n(126134);
function o(e) {
    let t = s(e);
    return (0, r.e7)([i.Z], () => i.Z.getChannel(t));
}
function s(e) {
    let {category: t} = e;
    return t === a.L.HANGOUT || t === a.L.GAMING ? e.channelId : t === a.L.EVENT ? e.event.channel_id : t === a.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
}
