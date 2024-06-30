n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(987170);
function i(e) {
    let t = (0, r.Z)({
        ...e,
        id: ''.concat(e.id, '_existing_users'),
        label: ''.concat(e.label, ' - Existing Users')
    });
    return {
        existingUsers: t,
        newUsers: (0, r.Z)({
            ...e,
            id: ''.concat(e.id, '_new_users'),
            label: ''.concat(e.label, ' - New Users')
        })
    };
}
