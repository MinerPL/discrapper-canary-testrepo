n.d(t, {
    n3: function () {
        return l;
    }
});
var i = n(823379),
    a = n(44136),
    s = n(354459);
function l(e, t, n) {
    return null == t || t.type === s.fO.ACTIVITY ? [] : [t.type === s.fO.STREAM ? e.find((e) => e.type === s.fO.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, a.ZP)(e)) : null, t.type === s.fO.USER ? e.find((e) => e.type === s.fO.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find((e) => e.type === s.fO.USER && e.id === n && (0, a.ZP)(e)) : null].filter(i.lm);
}
