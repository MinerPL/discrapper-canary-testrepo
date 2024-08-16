t.d(s, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(173511),
    r = t(481060);
function o() {
    let [e, s] = a.useState('');
    return (0, n.jsxs)(r.FormSection, {
        title: 'Text components',
        tag: r.FormTitleTags.H1,
        children: [
            (0, n.jsx)(r.TextInput, {
                placeholder: 'Enter custom text...',
                onChange: (e) => s(e)
            }),
            (0, n.jsx)(r.FormDivider, { style: { margin: '10px 0' } }),
            i.O.map((s) =>
                'code' === s
                    ? null
                    : (0, n.jsx)(
                          r.Text,
                          {
                              variant: s,
                              children: '' !== e ? ''.concat(e, ' (').concat(s, ')') : s
                          },
                          s
                      )
            )
        ]
    });
}
