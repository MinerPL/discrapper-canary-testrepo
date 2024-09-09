t.d(n, {
    Z: function () {
        return o;
    }
});
var u = t(735250);
t(470079);
var s = t(442837),
    r = t(481060),
    c = t(45114),
    i = t(306680),
    a = t(490897),
    d = t(689938);
function o(e) {
    let n = (0, s.e7)([i.ZP], () => i.ZP.hasUnread(e, a.W.GUILD_EVENT), [e]);
    return (0, u.jsx)(r.MenuItem, {
        id: 'mark-events-read',
        label: d.Z.Messages.MARK_AS_READ,
        action: function () {
            (0, c.Ju)(e, a.W.GUILD_EVENT);
        },
        disabled: !n
    });
}
