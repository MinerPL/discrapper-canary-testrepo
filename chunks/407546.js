n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(149765),
    a = n(993365),
    s = n(481060),
    o = n(981631),
    l = n(689938),
    u = n(507119);
function c(e) {
    let { error: t, selectedGuildId: n, onGuildChange: c, guilds: d, disabled: _ = !1 } = e,
        E = d
            .filter((e) => i.e$(e.permissions, o.Plq.MANAGE_GUILD))
            .map((e) => ({
                value: e.id,
                label: e.name
            }));
    return (0, r.jsxs)('div', {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: u.sectionLabel,
                children: l.Z.Messages.OAUTH2_ADD_TO_GUILD
            }),
            null != t && '' !== t
                ? (0, r.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(s.SearchableSelect, {
                wrapperClassName: u.select,
                maxVisibleItems: 5,
                placeholder: l.Z.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: E,
                onChange: c,
                isDisabled: _,
                value: n
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: u.label,
                children: l.Z.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })
        ]
    });
}
