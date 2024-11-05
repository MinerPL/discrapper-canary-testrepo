n.d(t, {
    d: function () {
        return s;
    }
});
var r = n(932143),
    i = n(155263),
    a = n(192379);
function s(e) {
    let t = (0, r.W)(e),
        n = (0, i.BA)({
            ...e,
            onSelectionChange: (n) => {
                null != e.onSelectionChange && e.onSelectionChange(n), t.close();
            }
        }),
        [s, o] = (0, a.useState)(!1);
    return {
        ...n,
        ...t,
        open() {
            0 !== n.collection.size && t.open();
        },
        toggle(e) {
            0 !== n.collection.size && t.toggle(e);
        },
        isFocused: s,
        setFocused: o
    };
}
