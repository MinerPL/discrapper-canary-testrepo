l.d(n, {
    q: function () {
        return r;
    }
}), l(724458), l(653041);
var s = l(442837), a = l(146085), t = l(984933), i = l(496675);
function r(e) {
    var n;
    let l = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
    return (0, s.Wu)([
        t.ZP,
        i.Z
    ], () => t.ZP.getChannels(l)[t.Zb].reduce((e, n) => {
        let l = n.channel;
        return l.isGuildStageVoice() ? (function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
            return !!e.isGuildStageVoice() && n.can(a.yP, e);
        }(n.channel, i.Z) && e.push(l), e) : e;
    }, []), [l]);
}
