n.d(o, {
    Z: function () {
        return e;
    }
});
function e(l, o) {
    if (l.score === o.score) {
        var n, e, r, t, i, u;
        let c = null !== (t = null !== (r = l.sortable) && void 0 !== r ? r : null === (n = l.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== t ? t : '',
            a = null !== (u = null !== (i = l.sortable) && void 0 !== i ? i : null === (e = o.comparator) || void 0 === e ? void 0 : e.toLocaleLowerCase()) && void 0 !== u ? u : '';
        if (c < a) return -1;
        if (c > a) return 1;
    }
    return o.score - l.score;
}
