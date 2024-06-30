n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(592125), i = n(981631);
function a(e) {
    if (null == e.parent_id)
        return e.type === i.d4z.GUILD_CATEGORY ? (e.position + 1) * 1000 : e.position;
    {
        var t, n;
        let i = ((null !== (n = null === (t = r.Z.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1) * 1000;
        return e.isGuildVocal() ? i + e.position + 500 : i + e.position;
    }
}
function o(e, t) {
    var n, r, i, o, s, l;
    if (e.score !== t.score)
        return t.score - e.score;
    let u = a(e.record), c = a(t.record);
    if (u !== c)
        return u - c;
    let d = null !== (o = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== o ? o : '', _ = null !== (l = null !== (s = e.sortable) && void 0 !== s ? s : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== l ? l : '';
    return d < _ ? -1 : d > _ ? 1 : 0;
}
