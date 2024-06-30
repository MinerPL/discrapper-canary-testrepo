i.r(t);
var n = i(735250), s = i(470079), c = i(481060), a = i(239091), l = i(547280), o = i(689938);
t.default = function (e) {
    let {
            signupTarget: t,
            onSelect: i
        } = e, d = s.useCallback(() => {
            (0, l.b)(t.key, t.dismissibleContent);
        }, [t]);
    return (0, n.jsx)(c.Menu, {
        navId: 'signup-button-context',
        onClose: a.Zy,
        'aria-label': o.Z.Messages.DISMISS,
        onSelect: i,
        children: (0, n.jsx)(c.MenuGroup, {
            children: (0, n.jsx)(c.MenuItem, {
                id: 'dismiss',
                label: o.Z.Messages.DISMISS,
                action: d
            })
        })
    });
};
