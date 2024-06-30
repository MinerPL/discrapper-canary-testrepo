n.d(t, {
    Z: function () {
        return T;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(749210), c = n(63063), d = n(714939), u = n(494831), _ = n(981631), E = n(689938), I = n(292955);
function T(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: i,
            setEditRoleId: r,
            query: o,
            setQuery: c,
            setHeaderHeight: d
        } = e, _ = a.useRef(null);
    a.useEffect(() => {
        var e, t;
        d(null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : u.Cl);
    }, [d]);
    let T = a.useCallback(() => {
        r(n.id);
    }, [
        r,
        n.id
    ]);
    return (0, s.jsxs)('div', {
        ref: _,
        children: [
            (0, s.jsx)(l.FormTitle, {
                tag: l.FormTitleTags.H1,
                children: E.Z.Messages.ROLES
            }),
            (0, s.jsx)(l.Text, {
                className: I.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: E.Z.Messages.ROLE_OVERVIEW_DESCRIPTION
            }),
            (0, s.jsx)(m, {
                guild: t,
                everyoneRole: n,
                filteredRoles: i,
                query: o,
                setQuery: c,
                onEveryoneRoleClick: T
            })
        ]
    });
}
function m(e) {
    let {
        guild: t,
        everyoneRole: n,
        filteredRoles: a,
        query: i,
        setQuery: o,
        onEveryoneRoleClick: u
    } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(d.Z, {
                role: n,
                onClick: u
            }),
            (0, s.jsx)(N, {
                guild: t,
                query: i,
                setQuery: o
            }),
            (0, s.jsx)(l.Text, {
                className: I.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: E.Z.Messages.ROLE_LIST_BODY_WITH_HELP.format({ articleURL: c.Z.getArticleURL(_.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, s.jsx)('div', {
                className: I.rolesTable,
                children: (0, s.jsxs)('div', {
                    className: I.tableHeader,
                    children: [
                        (0, s.jsx)('div', { className: I.dragSpacing }),
                        (0, s.jsx)(l.Text, {
                            className: r()(I.tableTitle, I.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: E.Z.Messages.ROLE_LIST_HEADER.format({ numRoles: String(a.length) })
                        }),
                        (0, s.jsx)(l.Text, {
                            className: r()(I.tableTitle, I.memberSpacing),
                            variant: 'text-sm/normal',
                            children: E.Z.Messages.MEMBERS
                        }),
                        (0, s.jsx)('div', { className: I.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function N(e) {
    let {
            guild: t,
            query: n,
            setQuery: i
        } = e, [r, c] = a.useState(!1), d = a.useCallback(e => {
            i(e);
        }, [i]), u = a.useCallback(() => {
            i('');
        }, [i]), _ = async () => {
            c(!0), await o.Z.createRole(t.id), c(!1);
        };
    return (0, s.jsx)('div', {
        className: I.__invalid_rolesList,
        children: (0, s.jsxs)('div', {
            className: I.searchContainer,
            children: [
                (0, s.jsx)(l.SearchBar, {
                    size: l.SearchBar.Sizes.MEDIUM,
                    query: n,
                    onChange: d,
                    onClear: u,
                    placeholder: E.Z.Messages.SEARCH_ROLES,
                    'aria-label': E.Z.Messages.SEARCH_ROLES
                }),
                (0, s.jsx)(l.Button, {
                    className: I.createButton,
                    size: l.Button.Sizes.SMALL,
                    onClick: _,
                    submitting: r,
                    children: E.Z.Messages.ROLE_CREATE_CTA
                })
            ]
        })
    });
}
