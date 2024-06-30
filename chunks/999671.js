n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(235820), r = n(592125), o = n(944486), c = n(455199);
n(288552);
var d = n(981631), u = n(689938);
function _(e) {
    let {
            closePopout: t,
            onSelect: n
        } = e, _ = (0, a.e7)([
            r.Z,
            o.Z
        ], () => r.Z.getChannel(o.Z.getChannelId())), {
            everyoneFilter: E,
            roleFilter: m,
            guildFilter: I
        } = (0, a.cj)([c.Z], () => {
            let {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            } = c.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, i.jsxs)(s.Menu, {
        navId: 'mentions-filter',
        'aria-label': u.Z.Messages.FILTER,
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(s.MenuCheckboxItem, {
                id: 'Everyone',
                label: u.Z.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                action: function () {
                    l.Z.setGuildFilter({ everyoneFilter: !E });
                },
                checked: E
            }),
            (0, i.jsx)(s.MenuCheckboxItem, {
                id: 'Roles',
                label: u.Z.Messages.RECENT_MENTIONS_FILTER_ROLES,
                action: function () {
                    l.Z.setGuildFilter({ roleFilter: !m });
                },
                checked: m
            }),
            null == _ || _.isPrivate() ? null : (0, i.jsx)(s.MenuCheckboxItem, {
                id: 'All Servers',
                label: u.Z.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                action: function () {
                    l.Z.setGuildFilter({ guildFilter: I === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER });
                },
                checked: I === d.NgX.ALL_SERVERS
            })
        ]
    });
}
function E() {
    return (0, i.jsx)(s.Popout, {
        align: 'right',
        animation: s.Popout.Animation.NONE,
        position: 'bottom',
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, i.jsx)(_, { closePopout: t });
        },
        children: e => {
            let {onClick: t} = e;
            return (0, i.jsx)(s.CircleIconButton, {
                tooltip: u.Z.Messages.FILTER,
                color: s.CircleIconButtonColors.SECONDARY,
                icon: (0, i.jsx)(s.FiltersHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
