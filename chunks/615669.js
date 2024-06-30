t.d(n, {
    Z: function () {
        return s;
    },
    z: function () {
        return i;
    }
}), t(653041);
var i, a, r = t(442837), l = t(314897);
(a = i || (i = {}))[a.END_EARLY = 0] = 'END_EARLY';
let o = [];
function s(e) {
    let n = (0, r.e7)([l.default], () => l.default.getId()), {poll: t} = e;
    if (!e.isPoll() || null == t)
        return o;
    let i = [];
    return !t.expiry.isSameOrBefore(Date.now()) && e.author.id === n && i.push(0), i;
}
