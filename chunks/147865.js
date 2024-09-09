n.d(t, {
    ZP: function () {
        return i;
    },
    lY: function () {
        return l;
    }
});
var a = n(689938);
function i(e) {
    return e > 0 ? a.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({ count: e }) : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
}
function l(e) {
    return e > 0 ? '1-'.concat(e) : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
}
