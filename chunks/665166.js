t.d(s, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(65084),
    r = t(481060),
    o = t(855018),
    l = t(641145),
    c = t(388032);
function d() {
    a.useSyncExternalStore(c.intl.onLocaleChange, () => c.intl.currentLocale);
    let [, e] = a.useState({});
    return (
        a.useEffect(() => {
            (0, i.waitForAllDefaultIntlMessagesLoaded)().then(() => {
                e({});
            });
        }, []),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(r.Select, {
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
                    isSelected: (e) => e === c.intl.currentLocale,
                    select: (e) => c.intl.setLocale(e),
                    serialize: (e) => e
                }),
                (0, n.jsx)(r.Spacer, { size: 32 }),
                (0, n.jsxs)(r.FormSection, {
                    tag: r.FormTitleTags.H1,
                    children: [
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'heading-lg/bold',
                            children: c.intl.format(l.Z.JJ0wpK, {})
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.swfLzc, {})
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z['rmps8/'], {})
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z.uczI4u, { linkTarget: console.log })
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z.rdfRys, {})
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z['Q+eyqq'], { count: 1 })
                        }),
                        (0, n.jsx)(r.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z.XOdbAw, {
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
        })
    );
}
