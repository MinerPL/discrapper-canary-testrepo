i.d(t, {
    Z: function () {
        return l;
    }
}), i(47120);
var n = i(470079), a = i(434650), r = i(626135), o = i(132871), s = i(981631);
function l(e) {
    let {collection: t} = e, [i, l] = n.useState(!1), c = (0, o.useApplicationDirectoryHistory)(e => e.guildId), d = (0, a.O)(e => {
            e && l(!0);
        });
    return n.useEffect(() => {
        i && r.default.track(s.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
            collection_id: t.id,
            guild_id: c
        });
    }, [
        i,
        t,
        c
    ]), d;
}
