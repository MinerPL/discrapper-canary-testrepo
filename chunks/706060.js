t.d(s, {
    Z: function () {
        return u;
    }
}),
    t(47120),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(772848),
    r = t(481060),
    o = t(259580),
    l = t(394644),
    c = t(245795);
function d(e) {
    let { setting: s, hasChildren: t } = e;
    return (0, n.jsx)(r.Text, {
        variant: t ? 'text-md/bold' : 'text-md/normal',
        children: s
    });
}
function _(e) {
    let { setting: s, children: t, depth: l } = e,
        [u, E] = a.useState(1 === l),
        T = a.useCallback(() => {
            E(!u);
        }, [u, E]);
    if (0 === t.length)
        return (0, n.jsx)(
            'div',
            {
                style: { marginLeft: 8 * l },
                className: c.settingNode,
                children: (0, n.jsx)(d, {
                    setting: s,
                    hasChildren: !1
                })
            },
            (0, i.Z)()
        );
    let S = u
        ? (0, n.jsx)('div', {
              className: c.settingNodeChildren,
              children: t
                  .sort((e, s) => e.setting.localeCompare(s.setting))
                  .sort((e, s) => e.children.length - s.children.length)
                  .map((e) =>
                      (0, n.jsx)(
                          _,
                          {
                              setting: e.setting,
                              children: e.children,
                              depth: l + 1
                          },
                          (0, i.Z)()
                      )
                  )
          })
        : null;
    return (0, n.jsxs)(
        'div',
        {
            style: { marginLeft: 8 * l },
            className: c.settingNode,
            children: [
                (0, n.jsxs)(r.Clickable, {
                    className: c.headerBar,
                    onClick: T,
                    children: [
                        (0, n.jsx)(d, {
                            setting: s,
                            hasChildren: t.length > 0
                        }),
                        (0, n.jsx)(o.Z, {
                            direction: u ? o.Z.Directions.DOWN : o.Z.Directions.RIGHT,
                            className: c.headerCaret
                        })
                    ]
                }),
                S
            ]
        },
        (0, i.Z)()
    );
}
function u() {
    let e = (0, l.Pt)(),
        s = [],
        t = Object.keys(e)
            .filter((s) => {
                let t = e[s];
                return null == t.predicate || (null != t.predicate && t.predicate());
            })
            .map((s) => {
                var t;
                return {
                    setting: s,
                    parent: null !== (t = e[s].parent) && void 0 !== t ? t : null
                };
            });
    t.filter((e) => null === e.parent).forEach((e) => {
        s.push({
            setting: e.setting,
            children: []
        });
    });
    let a = [...s];
    for (; a.length > 0; ) {
        let e = a.shift();
        if (null == e) continue;
        let s = t
            .filter((s) => s.parent === e.setting)
            .map((e) => ({
                setting: e.setting,
                children: []
            }));
        (e.children = s), a.push(...s);
    }
    return (0, n.jsxs)('div', {
        className: c.root,
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'heading-lg/bold',
                children: 'Settings Tree'
            }),
            (0, n.jsx)('div', {
                className: c.tree,
                children: s
                    .sort((e, s) => e.setting.localeCompare(s.setting))
                    .map((e) =>
                        (0, n.jsx)(
                            _,
                            {
                                setting: e.setting,
                                children: e.children,
                                depth: 1
                            },
                            (0, i.Z)()
                        )
                    )
            })
        ]
    });
}
