n.d(t, {
    l: function () {
        return i;
    }
});
var r = n(697898);
function i(e = {}) {
    let { isReadOnly: t } = e,
        [n, i] = (0, r.zk)(e.isSelected, e.defaultSelected || !1, e.onChange);
    return {
        isSelected: n,
        setSelected: function (e) {
            !t && i(e);
        },
        toggle: function () {
            !t && i(!n);
        }
    };
}
