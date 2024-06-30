var i = n(735250), s = n(470079), a = n(266067), r = n(410575), l = n(765717), o = n(252618), c = n(108427), d = n(895991), u = n(993977), _ = n(981631), E = n(689938), h = n(799847);
function I() {
    return (0, i.jsxs)(a.rs, {
        children: [
            (0, i.jsx)(l.Z, {
                path: _.Z5c.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, i.jsxs)(r.Z, {
                    page: _.ZY5.LIBRARY_SETTINGS,
                    root: !0,
                    children: [
                        (0, i.jsx)(o.yY, { subsection: E.Z.Messages.SETTINGS }),
                        (0, i.jsx)(u.Z, {})
                    ]
                })
            }),
            (0, i.jsx)(l.Z, {
                path: _.Z5c.APPLICATION_LIBRARY,
                children: (0, i.jsxs)(r.Z, {
                    page: _.ZY5.LIBRARY,
                    root: !0,
                    children: [
                        (0, i.jsx)(o.yY, { subsection: E.Z.Messages.APPLICATION_LIBRARY_MY_GAMES }),
                        (0, i.jsx)(d.Z, {})
                    ]
                })
            })
        ]
    });
}
t.Z = s.memo(function () {
    return s.useEffect(() => {
        (0, c.e)('application_library');
    }, []), (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(o.yY, { location: E.Z.Messages.LIBRARY }),
            (0, i.jsx)(I, {})
        ]
    });
});
