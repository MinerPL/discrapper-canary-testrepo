n.d(t, {
    p: function () {
        return i;
    }
});
var l = n(904245),
    a = n(957730);
function i(e) {
    let { channel: t, content: n, entry: i, whenReady: r } = e,
        s = a.ZP.parse(t, n);
    return l.Z.sendMessage(t.id, s, r, { contentInventoryEntry: { unverified_content: i } });
}
