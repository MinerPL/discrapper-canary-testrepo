t.d(s, {
    Z: function () {
        return l;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(476115),
    r = t(18451),
    o = t(836864);
function l() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a.Select, {
                options: [
                    {
                        value: 'en-US',
                        label: 'English'
                    },
                    {
                        value: 'fr',
                        label: 'French'
                    }
                ],
                isSelected: (e) => e === o.N.currentLocale,
                select: (e) => o.N.setLocale(e),
                serialize: (e) => e
            }),
            (0, n.jsx)(a.Spacer, { size: 32 }),
            (0, n.jsxs)(a.FormSection, {
                tag: a.FormTitleTags.H1,
                children: [
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'heading-lg/bold',
                        children: o.N.format(r.Z.JJ0wpK)
                    }),
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'text-md/normal',
                        children: o.N.format(i.Z.swfLzc)
                    }),
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'text-md/normal',
                        children: o.N.format(r.Z['rmps8/'])
                    }),
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'text-md/normal',
                        children: o.N.format(r.Z.uczI4u, { linkTarget: console.log })
                    }),
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'text-md/normal',
                        children: o.N.format(r.Z.rdfRys)
                    }),
                    (0, n.jsx)(a.Text, {
                        tag: 'div',
                        variant: 'text-md/normal',
                        children: o.N.format(r.Z.XOdbAw, {
                            username: 'some user',
                            usernameHook: (e) =>
                                (0, n.jsx)('span', {
                                    style: {
                                        backgroundColor: 'green',
                                        color: 'white',
                                        borderRadius: 4,
                                        paddingInline: 6,
                                        paddingBlock: 0,
                                        lineHeight: 1,
                                        fontSize: '0.85em'
                                    },
                                    children: e
                                })
                        })
                    })
                ]
            })
        ]
    });
}
