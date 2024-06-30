n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(470079), a = n(399606), l = n(570140), s = n(607070), r = n(222677), o = n(695346), c = n(960020), u = n(566006);
function d() {
    let e = o.Yk.useSetting(), t = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    i.useEffect(() => {
        function n(n) {
            let {
                messageId: i,
                channelId: a,
                emoji: l,
                optimistic: s,
                reactionType: o
            } = n;
            if (!s && o === u.O.BURST && !!e && !t)
                (0, r.T6)({
                    channelId: a,
                    messageId: i,
                    emoji: l,
                    key: c.I.EXTERNAL
                });
        }
        return l.Z.subscribe('MESSAGE_REACTION_ADD', n), () => {
            l.Z.unsubscribe('MESSAGE_REACTION_ADD', n);
        };
    }, [
        e,
        t
    ]);
}
