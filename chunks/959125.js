n.d(t, {
    $: function () {
        return i;
    }
});
var r = n(239700);
function i(e = {}) {
    let [t, n] = (0, r.zk)(e.value, e.defaultValue || [], e.onChange);
    return {
        value: t,
        setValue(t) {
            !e.isReadOnly && !e.isDisabled && n(t);
        },
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isSelected: (e) => t.includes(e),
        addValue(r) {
            !e.isReadOnly && !e.isDisabled && !t.includes(r) && n(t.concat(r));
        },
        removeValue(r) {
            !e.isReadOnly && !e.isDisabled && t.includes(r) && n(t.filter((e) => e !== r));
        },
        toggleValue(r) {
            !e.isReadOnly && !e.isDisabled && (t.includes(r) ? n(t.filter((e) => e !== r)) : n(t.concat(r)));
        },
        validationState: e.validationState,
        isInvalid: e.isInvalid || 'invalid' === e.validationState
    };
}
