var a = r(599295),
    n = r(383237),
    o = r(192379),
    s = r(639519),
    i = r.n(s),
    c = r(247595),
    u = ['data'];
function l(e) {
    return ''.concat(e.length, ' ').concat(1 !== e.length ? 'items' : 'item');
}
var f = function (e) {
    var t = e.data,
        r = (0, n.Z)(e, u);
    return o.createElement(
        c.Z,
        (0, a.Z)({}, r, {
            data: t,
            nodeType: 'Array',
            nodeTypeIndicator: '[]',
            createItemString: l,
            expandable: t.length > 0
        })
    );
};
(f.propTypes = { data: i().array }), (t.Z = f);
