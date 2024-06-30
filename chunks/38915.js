s.d(t, {
    Z: function () {
        return c;
    }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(442837), i = s(481060), r = s(536442), o = s(650434);
function l(e) {
    let {hotspotLocation: t} = e, [s, l] = (0, a.Wu)([r.qc], () => [
            r.qc.hasHotspot(t, !0),
            r.qc.getHotspotOverride(t)
        ]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(i.FormItem, {
                title: t,
                className: o.hotspotSwitch,
                children: [
                    s ? (0, n.jsx)(i.TooltipContainer, {
                        className: o.iconContainer,
                        element: 'span',
                        text: 'Active',
                        children: (0, n.jsx)(i.CheckmarkLargeIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: o.checkmark
                        })
                    }) : (0, n.jsx)(i.TooltipContainer, {
                        className: o.iconContainer,
                        element: 'span',
                        text: 'Inactive',
                        children: (0, n.jsx)(i.CloseSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: o.xmark
                        })
                    }),
                    (0, n.jsx)(i.SingleSelect, {
                        className: o.overrideSelect,
                        value: l,
                        options: [
                            {
                                value: void 0,
                                label: 'No Override'
                            },
                            {
                                value: !0,
                                label: 'Force Active'
                            },
                            {
                                value: !1,
                                label: 'Force Inactive'
                            }
                        ],
                        onChange: e => null != e ? (0, r.hv)(t, e) : (0, r.Po)(t)
                    })
                ]
            }),
            (0, n.jsx)(i.FormDivider, {})
        ]
    });
}
function c(e) {
    let {className: t} = e;
    return (0, n.jsxs)(i.FormSection, {
        title: 'Hotspots',
        tag: i.FormTitleTags.H1,
        className: t,
        children: [
            (0, n.jsx)(i.Text, {
                className: o.helpText,
                tag: 'p',
                variant: 'text-sm/normal',
                children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
            }),
            Object.keys(r.v6).sort((e, t) => e.localeCompare(t)).map(e => (0, n.jsx)(l, { hotspotLocation: e }, e))
        ]
    });
}
