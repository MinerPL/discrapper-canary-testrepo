n.d(t, {
    S: function () {
        return a;
    }
}), n(653041);
var r = n(285651), i = n(138421);
let a = (e, t, n) => {
    if ('' === e)
        return null;
    let a = [], o = [];
    return (0, i.WL)(e).forEach(e => {
        let i = (0, r.cO)(e, t, n);
        i === r.eb.SENDABLE ? a.push(e) : i === r.eb.SENDABLE_WITH_PREMIUM && o.push(e);
    }), {
        sendable: a,
        sendableWithPremium: o
    };
};
