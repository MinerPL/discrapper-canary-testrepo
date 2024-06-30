t.d(n, {
    Z: function () {
        return s;
    }
});
var o = t(735250);
t(470079);
var r = t(442837), a = t(481060), c = t(857595), i = t(607070), l = t(689938);
function s() {
    let {
            saturation: e,
            useReducedMotion: n,
            roleStyle: t
        } = (0, r.cj)([i.Z], () => ({
            saturation: i.Z.saturation,
            useReducedMotion: i.Z.useReducedMotion,
            roleStyle: i.Z.roleStyle
        })), s = [
            {
                name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
                value: 'username'
            },
            {
                name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
                value: 'dot'
            },
            {
                name: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
                value: 'hidden'
            }
        ];
    return [
        (0, o.jsx)(a.MenuGroup, {
            children: (0, o.jsx)(a.MenuCheckboxItem, {
                id: 'reduced-motion',
                label: l.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
                checked: n,
                action: () => (0, c.Zt)(n ? 'no-preference' : 'reduce')
            })
        }, 'reduced-motion'),
        (0, o.jsx)(a.MenuGroup, {
            children: (0, o.jsx)(a.MenuControlItem, {
                id: 'input',
                label: l.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
                control: (n, t) => (0, o.jsx)(a.MenuSliderControl, {
                    ...n,
                    ref: t,
                    value: 100 * e,
                    onChange: e => (0, c.o2)(e / 100),
                    'aria-label': l.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
                })
            })
        }, 'input'),
        (0, o.jsx)(a.MenuGroup, {
            children: (0, o.jsx)(a.MenuItem, {
                id: 'role-colors',
                label: l.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
                children: s.map(e => {
                    let {
                        name: n,
                        value: r
                    } = e;
                    return (0, o.jsx)(a.MenuRadioItem, {
                        id: r,
                        group: 'role-colors',
                        checked: r === t,
                        label: n,
                        action: () => (0, c.u1)(r)
                    }, r);
                })
            })
        }, 'role-colors')
    ];
}
