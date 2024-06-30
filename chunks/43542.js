t.d(n, {
    y: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var r = t(481060), o = t(689938), a = t(936307);
function s(e) {
    let {
            selectedGuildId: n,
            onGuildChange: t,
            eligibleApplicationSubscriptionGuilds: s
        } = e, l = s.map(e => ({
            value: e.id,
            label: e.name
        }));
    return (0, i.jsx)(r.SearchableSelect, {
        className: a.select,
        maxVisibleItems: 5,
        value: n,
        placeholder: o.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
        options: l,
        onChange: e => {
            t(e);
        }
    });
}
