n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(470079), a = n(442837), i = n(80932), r = n(110924), l = n(471613), o = n(889564);
let c = [];
function d(e) {
    let {
            revision: t,
            emojis: n
        } = (0, a.cj)([l.Z], () => ({
            revision: l.Z.getEmojiRevision(e),
            emojis: l.Z.getEmojis(e)
        })), d = (0, r.Z)(t);
    return s.useEffect(() => {
        (0, i.OQ)(e);
    }, [e]), s.useEffect(() => {
        null != d && d < t && (0, i.OQ)(e);
    }, [
        t,
        d,
        e
    ]), s.useMemo(() => null == n ? c : n.filter(t => (0, o.Kt)(t, e)), [
        n,
        e
    ]);
}
