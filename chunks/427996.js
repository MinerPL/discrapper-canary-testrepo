n.d(t, {
    W: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(399606), l = n(481060), s = n(337682), r = n(115130), o = n(689938), c = n(545661);
function d() {
    let {
        activityUrlOverride: e,
        useActivityUrlOverride: t,
        filter: n
    } = (0, a.cj)([r.Z], () => ({
        activityUrlOverride: r.Z.getActivityUrlOverride(),
        useActivityUrlOverride: r.Z.getUseActivityUrlOverride(),
        filter: r.Z.getFilter()
    }), []);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)(l.Checkbox, {
                type: l.Checkbox.Types.INVERTED,
                className: c.__invalid_checkbox,
                value: t,
                onClick: s.Y$,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/semibold',
                    children: o.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
                })
            }),
            (0, i.jsx)(l.FormItem, {
                className: c.__invalid_urlOverride,
                title: o.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                children: (0, i.jsx)(l.TextInput, {
                    disabled: !t,
                    value: null != e ? e : void 0,
                    onChange: s.jS,
                    placeholder: 'http://localhost:3000'
                })
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.SearchBar, {
                    className: c.searchBar,
                    query: n,
                    onChange: s.a8,
                    onClear: function () {
                        s.a8('');
                    }
                })
            })
        ]
    });
}
