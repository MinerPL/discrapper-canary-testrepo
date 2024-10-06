n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(553795),
    l = n(425128),
    u = n(981631),
    c = n(689938),
    d = n(288984);
function _(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS)),
        n = (0, i.e7)([o.Z], () => o.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS)),
        _ =
            null != n && null != t
                ? () => {
                      (0, l._)({
                          riotConnectionId: t.id,
                          lolConnectionId: n.id
                      });
                  }
                : u.dG4;
    return (0, r.jsx)(a.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, s.Zy)(), t();
                },
                'aria-label': c.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(a.MenuGroup, {
                        children: (0, r.jsx)(a.MenuItem, {
                            id: 'refresh-my-data',
                            label: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                            action: _
                        })
                    })
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(a.Tooltip, {
                text: c.Z.Messages.MORE,
                children: (t) =>
                    (0, r.jsx)(a.Clickable, {
                        ...t,
                        className: d.menuIcon,
                        ...e,
                        children: (0, r.jsx)(a.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
