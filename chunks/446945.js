var a = t(735250);
t(470079);
var r = t(481060), i = t(239091), s = t(838221), o = t(246364), l = t(700833), c = t(689938), d = t(383354);
function u(e) {
    let {
        addFormField: n,
        onSelect: t,
        guild: u
    } = e;
    return (0, a.jsx)(r.Menu, {
        navId: 'add-questions',
        className: d.menu,
        onClose: i.Zy,
        'aria-label': c.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: (0, a.jsxs)(r.MenuGroup, {
            children: [
                (0, a.jsx)(r.MenuItem, {
                    id: 'text-input',
                    icon: (0, r.makeIconCompat)(s.Z),
                    label: c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                    action: () => (0, l.Md)(o.QJ.TEXT_INPUT, n, u)
                }),
                (0, a.jsx)(r.MenuItem, {
                    id: 'paragraph',
                    icon: r.ChannelListIcon,
                    label: c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                    action: () => (0, l.Md)(o.QJ.PARAGRAPH, n, u)
                }),
                (0, a.jsx)(r.MenuItem, {
                    id: 'multiple-choice',
                    icon: r.ListBulletsIcon,
                    label: c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                    action: () => (0, l.Md)(o.QJ.MULTIPLE_CHOICE, n, u)
                })
            ]
        })
    });
}
n.Z = function (e) {
    let {
            addFormField: n,
            guild: t
        } = e, s = e => {
            (0, i.vq)(e, e => (0, a.jsx)(u, {
                ...e,
                addFormField: n,
                guild: t
            }), {
                position: 'top',
                align: 'center'
            });
        };
    return (0, a.jsx)(r.Tooltip, {
        text: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
        children: e => (0, a.jsxs)(r.Clickable, {
            ...e,
            className: d.container,
            onClick: s,
            children: [
                (0, a.jsx)(r.PlusSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.icon
                }),
                (0, a.jsx)(r.Text, {
                    color: 'interactive-active',
                    variant: 'text-md/semibold',
                    children: c.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTION
                })
            ]
        })
    });
};
