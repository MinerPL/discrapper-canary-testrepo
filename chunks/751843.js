var i, a, l = n(735250);
n(470079);
var s = n(120356), r = n.n(s), o = n(481060), c = n(871499), u = n(400639);
function d(e) {
    let {
        direction: t,
        className: n,
        themeable: i,
        ...a
    } = e;
    return (0, l.jsx)(c.Z, {
        className: r()(n, u.arrow, { [u.up]: 0 === t }),
        iconComponent: o.ChevronSmallDownIcon,
        themeable: i,
        ...a
    });
}
(i = a || (a = {}))[i.UP = 0] = 'UP', i[i.DOWN = 1] = 'DOWN', d.Directions = a, t.Z = d;
