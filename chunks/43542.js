n.d(t, {
    y: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var a = n(481060),
    i = n(689938),
    l = n(829870);
function s(e) {
    let { selectedGuildId: t, onGuildChange: n, eligibleApplicationSubscriptionGuilds: s } = e,
        o = s.map((e) => ({
            value: e.id,
            label: e.name
        }));
    return (0, r.jsx)(a.SearchableSelect, {
        className: l.select,
        maxVisibleItems: 5,
        value: t,
        placeholder: i.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
        options: o,
        onChange: (e) => {
            n(e);
        }
    });
}
