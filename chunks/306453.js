a.d(s, {
    D: function () {
        return d;
    },
    Z: function () {
        return u;
    }
});
var E = a(735250);
a(470079);
var _ = a(120356), n = a.n(_), r = a(481060), t = a(388905), L = a(797717), l = a(875307), i = a(837748), M = a(58346), c = a(689938), T = a(275020), C = a(331651);
function A() {
    return (0, E.jsx)(L.Z, {
        className: T.verifiedIcon,
        children: (0, E.jsx)('div', {
            className: T.verifiedCheckContainer,
            children: (0, E.jsx)(r.CheckmarkSmallIcon, {
                size: 'xs',
                color: 'currentColor',
                className: T.verifiedCheck
            })
        })
    });
}
function o(e) {
    let {
        verified: s,
        text: a
    } = e;
    return s ? (0, E.jsxs)('div', {
        className: T.verifiedNameContainer,
        children: [
            (0, E.jsx)(A, {}),
            a
        ]
    }) : (0, E.jsx)(E.Fragment, { children: a });
}
function d(e) {
    let {
        className: s,
        count: a,
        creator: _,
        verifiedName: r
    } = e;
    return (0, E.jsx)('div', {
        className: n()(T.usagePill, s, T.userText),
        children: null != _ || null != r ? c.Z.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
            usageCount: a,
            creator: null != r ? r : _,
            creatorHook: (e, s) => (0, E.jsx)(o, {
                text: e,
                verified: null != r
            }, s)
        }) : c.Z.Messages.GUILD_TEMPLATE_USAGES.format({ usageCount: a })
    });
}
function u(e) {
    var s;
    let {
        guildTemplate: a,
        error: _,
        tall: L,
        pillClassName: A
    } = e;
    if (null != _ && '' !== _)
        return (0, E.jsxs)('div', {
            className: T.container,
            children: [
                (0, E.jsx)(t.Dx, { children: c.Z.Messages.INVITE_MODAL_ERROR_TITLE }),
                (0, E.jsx)(t.DK, { children: _ })
            ]
        });
    if (a.state === M.Rj.RESOLVING)
        return (0, E.jsx)('div', {
            className: T.container,
            children: (0, E.jsx)(r.Spinner, {})
        });
    let o = (0, i.Z)(a.code).header;
    if (!L)
        return (0, E.jsxs)('div', {
            className: T.container,
            children: [
                (0, E.jsx)(t.Dx, {
                    className: T.title,
                    children: o
                }),
                (0, E.jsx)(t.DK, {
                    className: n()(T.subtitle, T.userText),
                    children: a.name
                })
            ]
        });
    return (0, E.jsxs)('div', {
        className: T.container,
        children: [
            (0, E.jsx)(t.Dx, {
                className: T.title,
                children: o
            }),
            (0, E.jsx)(t.DK, {
                className: n()(T.subtitle, C.__invalid_marginTop2),
                children: c.Z.Messages.GUILD_TEMPLATE_BASED_ON
            }),
            (0, E.jsx)(t.Dx, {
                className: n()(T.title, T.userText),
                children: a.name
            }),
            null != a.description && '' !== a.description && (0, E.jsx)(t.DK, {
                className: n()(T.subtitle, T.userText, C.marginTop8),
                children: a.description
            }),
            (0, E.jsx)(d, {
                className: A,
                count: null !== (s = a.usageCount) && void 0 !== s ? s : 0,
                creator: a.creator.username,
                verifiedName: (0, l.R)(a.code)
            })
        ]
    });
}
