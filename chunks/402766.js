n.d(t, {
    Z: function () {
        return o;
    }
}), n(411104);
var s = n(735250);
n(470079);
var a = n(67523), i = n(865267), r = n(125664), l = n(981631);
function o(e) {
    let {
        tier: t,
        ...n
    } = e;
    switch (t) {
    case l.Eu4.TIER_1:
        return (0, s.jsx)(a.Z, { ...n });
    case l.Eu4.TIER_2:
        return (0, s.jsx)(i.Z, { ...n });
    case l.Eu4.TIER_3:
        return (0, s.jsx)(r.Z, { ...n });
    case l.Eu4.NONE:
        return null;
    default:
        throw Error('Not a valid tier type');
    }
}
