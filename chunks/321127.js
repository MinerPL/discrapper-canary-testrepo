n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(200121);
function s(e) {
    let {
        attributes: t,
        children: n,
        leaf: i,
        text: s
    } = e;
    if (i.commandName) {
        let e = a()(o.commandName, { [o.emptyText]: '' === s.text });
        return (0, r.jsx)('span', {
            ...t,
            className: e,
            spellCheck: !1,
            children: n
        });
    }
    return null;
}
