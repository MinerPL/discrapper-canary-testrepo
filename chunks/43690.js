n.d(t, {
    D: function () {
        return l;
    },
    h: function () {
        return r;
    }
});
var i = n(873011), a = n(192720), s = n(115219);
function l(e) {
    (0, a.L9)([{
            type: i.J.BOOKMARK,
            messageId: e.id,
            channelId: e.channel_id,
            savedAt: new Date(),
            ...(0, a.sd)(e)
        }], []);
}
function r(e) {
    let t = s.Z.getMessageBookmarks();
    (0, a.L9)([], t.filter(t => t.messageId === e));
}
