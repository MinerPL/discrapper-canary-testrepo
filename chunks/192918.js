t.d(n, {
    Z: function () {
        return u;
    }
}), t(47120);
var l = t(470079), a = t(442837), r = t(594174), o = t(823379);
let i = [];
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, t = (0, a.Wu)([r.default], () => {
            let n = e.participants.map(e => r.default.getUser(e)).filter(o.lm), t = n.find(n => n.id === e.author_id), l = n.filter(n => n.id !== e.author_id);
            return null == t ? i : [
                ...l,
                t
            ];
        }, [e]), u = l.useMemo(() => t.slice(-n), [
            n,
            t
        ]), s = u[u.length - 1], c = u[u.length - 2], d = t.length - 1;
    return {
        orderedParticipants: t,
        displayParticipants: u,
        participant1: s,
        participant2: c,
        numOtherParticipants: d
    };
}
