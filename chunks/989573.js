n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(399606),
    i = n(592125),
    a = n(594174);
function s(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([i.Z], () => i.Z.getChannel(t));
    return (0, r.e7)([a.default], () => {
        var e;
        return null != n && n.isDM() && 1 === n.recipients.length && (null === (e = a.default.getUser(n.recipients[0])) || void 0 === e ? void 0 : e.bot) === !0;
    });
}
