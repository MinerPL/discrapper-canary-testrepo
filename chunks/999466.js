t.r(n), t.d(n, {
    default: function () {
        return d;
    }
});
var a = t(735250);
t(470079);
var u = t(442837), r = t(481060), s = t(239091), o = t(547972), i = t(435064), c = t(621781), l = t(39604), S = t(332325), I = t(689938);
function d(e) {
    let {onSelect: n} = e, {clipsLength: t} = (0, u.cj)([i.Z], () => i.Z.getSettings()), d = (0, c.Z)();
    return (0, a.jsxs)(r.Menu, {
        navId: 'clips-context',
        'aria-label': I.Z.Messages.CLIPS_SETTINGS,
        onClose: s.Zy,
        onSelect: n,
        children: [
            (0, a.jsx)(r.MenuGroup, {
                children: (0, a.jsx)(r.MenuItem, {
                    id: 'clips-duration',
                    label: I.Z.Messages.CLIPS_SETTINGS_LENGTH,
                    children: d.map(e => {
                        let {
                            value: n,
                            label: u
                        } = e;
                        return (0, a.jsx)(r.MenuRadioItem, {
                            id: 'clips-duration-'.concat(n),
                            group: 'clips-duration',
                            label: u,
                            action: () => (0, l.eU)(n),
                            checked: n === t
                        }, n);
                    })
                })
            }),
            (0, a.jsx)(r.MenuGroup, {
                children: (0, a.jsx)(r.MenuItem, {
                    id: 'clips-settings',
                    label: I.Z.Messages.CLIPS_SETTINGS,
                    action: () => (0, o.Z)(S.Z.CLIPS)
                })
            })
        ]
    });
}
