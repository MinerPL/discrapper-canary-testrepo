n.d(t, {
    ZP: function () {
        return r;
    }
});
var i = n(829750), l = n(981631);
function r(e) {
    let {
        channel: t,
        locked: n,
        video: r,
        selected: a
    } = e;
    return function (e) {
        let {
                channel: t,
                video: n,
                considerMaxStageVoiceUserLimit: r = !0
            } = e, {limit: a} = (0, i.Z)(t), s = -1;
        return (t.userLimit > 0 && (s = t.userLimit), n && a > 0 && (s = s > 0 ? Math.min(s, a) : a), r && s === l.xGv) ? 0 : s;
    }({
        channel: t,
        video: r
    }) > 0 && !n && !a;
}
