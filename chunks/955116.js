s.r(n),
    s.d(n, {
        default: function () {
            return c;
        }
    });
var a = s(735250),
    t = s(481060),
    u = s(239091),
    i = s(299206),
    r = s(689938);
function c(e) {
    let { tag: n } = e;
    return (0, a.jsx)(t.Menu, {
        navId: 'forum-tag',
        onClose: u.Zy,
        'aria-label': r.Z.Messages.FORUM_TAG_ACTIONS_MENU_LABEL,
        onSelect: void 0,
        className: 'context-menu',
        children: (0, a.jsx)(t.MenuGroup, {
            children: (0, i.Z)({
                id: n.id,
                label: r.Z.Messages.COPY_ID_FORUM_TAG
            })
        })
    });
}
