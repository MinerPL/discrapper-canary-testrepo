n.d(t, {
    Z: function () {
        return i;
    }
}), n(47120), n(653041);
var r = n(887490);
function i(e, t) {
    if (r.bN.areStylesDisabled(e))
        return [];
    let [n, i] = t, a = [];
    if (!r.LC.isText(n))
        return a;
    let [o] = r.bN.node(e, r.C0.parent(i));
    return r.aj.isType(o, 'applicationCommand') ? (n === o.children[0] && a.push({
        anchor: {
            path: i,
            offset: 0
        },
        focus: {
            path: i,
            offset: 0 + o.command.displayName.length + 1
        },
        commandName: !0
    }), a) : a;
}
