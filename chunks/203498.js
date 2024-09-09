n.d(t, {
    Z: function () {
        return a;
    }
});
var s = n(2070);
function a() {
    let { createGuildApplication: e, submitting: t, error: n } = (0, s.Z)();
    return {
        enableGuildMonetizationForTeam: (t, n, s) => e(t, n, s, 'guildcr'.concat(t.id)),
        submitting: t,
        error: n
    };
}
