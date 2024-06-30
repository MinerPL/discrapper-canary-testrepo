t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), s = t(63063), l = t(285952), o = t(901524), r = t(153124), c = t(689938), d = t(331651);
function u(e) {
    let {
            value: n,
            onChange: t,
            children: u,
            note: I,
            helpdeskArticleId: m,
            style: _,
            disabled: N = !1,
            hideBorder: E = !1,
            className: T = d.marginBottom20
        } = e, h = (0, r.Dt)();
    return (0, i.jsxs)(l.Z, {
        style: _,
        className: T,
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(l.Z, {
                children: [
                    (0, i.jsx)(l.Z.Child, {
                        children: (0, i.jsx)(a.FormTitle, {
                            id: h,
                            className: d.marginReset,
                            tag: a.FormTitleTags.H3,
                            disabled: N,
                            children: u
                        })
                    }),
                    (0, i.jsx)(l.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Z, {
                            value: n,
                            onChange: t,
                            disabled: N,
                            labelledBy: h
                        })
                    })
                ]
            }),
            null != I && (0, i.jsx)(l.Z.Child, {
                className: d.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                    type: a.FormTextTypes.DESCRIPTION,
                    children: I
                })
            }),
            null != m && (0, i.jsx)(l.Z.Child, {
                className: d.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                    disabled: N,
                    type: a.FormTextTypes.DESCRIPTION,
                    children: (0, i.jsx)(a.Anchor, {
                        href: s.Z.getArticleURL(m),
                        children: c.Z.Messages.LEARN_MORE
                    })
                })
            }),
            !E && (0, i.jsx)(l.Z.Child, {
                className: d.marginTop20,
                children: (0, i.jsx)(a.FormDivider, {})
            })
        ]
    });
}
o.Z.Types, u.Types = o.Z.Types;
