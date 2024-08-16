a.d(n, {
    T: function () {
        return i;
    }
});
var t = a(470079),
    s = a(127255);
function i(e, n) {
    let a = (0, s.Z)({ guildId: e });
    return t.useMemo(() => {
        var e;
        return null !== (e = a.find((e) => e.application.id === n)) && void 0 !== e ? e : null;
    }, [a, n]);
}
