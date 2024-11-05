n.d(t, {
    M: function () {
        return a;
    }
}),
    n(47120);
var i = n(876215),
    r = n(911969);
let l = new Set([i.s.TOP_ARTIST, i.s.TOP_GAME, i.s.PLAYED_GAME, i.s.WATCHED_MEDIA, i.s.LISTENED_SESSION, i.s.LAUNCHED_ACTIVITY]);
function a(e) {
    var t;
    let n = (null !== (t = e.components) && void 0 !== t ? t : []).filter((e) => e.type === r.re.CONTENT_INVENTORY_ENTRY);
    return (
        0 === n.length ||
        n.some((e) => {
            let { contentInventoryEntry: t } = e;
            return !l.has(t.content_type);
        })
    );
}
