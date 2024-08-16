n.d(t, {
    w: function () {
        return o;
    }
});
var r = n(697898),
    i = n(470079);
let a = Math.round(10000000000 * Math.random()),
    s = 0;
function o(e) {
    let t = (0, i.useMemo)(() => e.name || `radio-group-${a}-${++s}`, [e.name]),
        [n, o] = (0, r.zk)(e.value, e.defaultValue, e.onChange),
        [l, u] = (0, i.useState)(null);
    return {
        name: t,
        selectedValue: n,
        setSelectedValue: (t) => {
            !e.isReadOnly && !e.isDisabled && o(t);
        },
        lastFocusedValue: l,
        setLastFocusedValue: u,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || null,
        isInvalid: e.isInvalid || 'invalid' === e.validationState
    };
}
