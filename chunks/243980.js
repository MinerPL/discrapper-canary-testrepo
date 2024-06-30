a.d(t, {
    Z: function () {
        return d;
    }
});
var n = a(735250);
a(470079);
var l = a(120356), s = a.n(l), r = a(481060), i = a(971628), o = a(689938), c = a(171785);
function d(e) {
    let {
        selectedTags: t,
        title: a,
        hintText: l,
        placeholderText: d,
        expanded: u,
        setExpanded: m,
        users: h,
        guilds: S,
        query: x,
        maxCount: T,
        onQueryChange: g,
        onClickRow: f,
        onRemoveTag: v
    } = e;
    return (0, n.jsx)(r.Collapsible, {
        className: c.collapsible,
        isExpanded: u,
        collapsibleContent: (0, n.jsx)('div', {
            className: s()(c.collapsibleContent, { [c.visible]: u }),
            children: (0, n.jsx)(i.Z, {
                listClassName: c.list,
                pendingAdditions: t,
                query: x,
                onQueryChange: g,
                onClickRow: f,
                onRemovePendingAddition: v,
                users: h,
                guilds: S,
                renderEmptyText: e => o.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({ query: e }),
                hintText: l,
                placeholderText: d,
                disabledText: o.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                maxCount: T,
                hideRowLabel: !0
            })
        }),
        children: e => {
            let {onClick: t} = e;
            return (0, n.jsxs)(r.Clickable, {
                className: c.content,
                onClick: e => {
                    m(!u), t(e);
                },
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'text-sm/normal',
                        children: a
                    }),
                    u ? (0, n.jsx)(r.ChevronSmallUpIcon, {
                        size: 'md',
                        color: 'currentColor'
                    }) : (0, n.jsx)(r.ChevronSmallDownIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                ]
            });
        }
    });
}
