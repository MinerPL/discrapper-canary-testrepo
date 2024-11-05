var a = r(599295),
    n = r(383237),
    o = r(192379),
    s = r(639519),
    i = r.n(s),
    c = r(247595),
    u = ['data'];
function l(e) {
    var t = Object.getOwnPropertyNames(e).length;
    return ''.concat(t, ' ').concat(1 !== t ? 'keys' : 'key');
}
var f = function (e) {
    var t = e.data,
        r = (0, n.Z)(e, u);
    return o.createElement(
        c.Z,
        (0, a.Z)({}, r, {
            data: t,
            nodeType: 'Object',
            nodeTypeIndicator: 'Error' === r.nodeType ? 'Error()' : '{}',
            createItemString: l,
            expandable: Object.getOwnPropertyNames(t).length > 0
        })
    );
};
(f.propTypes = {
    data: i().object,
    nodeType: i().string.isRequired
}),
    (t.Z = f);
