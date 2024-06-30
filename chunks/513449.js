n.d(t, {
    Ku: function () {
        return d;
    },
    MV: function () {
        return _;
    }
});
var r = n(470079), i = n(652874), a = n(442837), o = n(496675), s = n(944486), l = n(146085), u = n(643632);
let c = (0, i.Z)(e => ({ isOnStartStageScreen: !0 }));
function d(e) {
    c.setState({ isOnStartStageScreen: e });
}
function _(e) {
    let t = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId() === e.id), n = (0, a.e7)([o.Z], () => o.Z.can(l.yP, e), [e]), i = (0, u.Z)(e.id), c = n && !i;
    r.useEffect(() => {
        t ? !c && d(!1) : d(c);
    }, [
        t,
        c
    ]);
}
t.ZP = c;
