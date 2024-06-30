r.d(t, {
    Z: function () {
        return f;
    }
}), r(47120), r(390547);
var a = r(735250), n = r(442837), i = r(481060), o = r(100527), l = r(171368), c = r(594174), s = r(719247), d = r(71585), u = r(146282), h = r(897674), m = r(561308), g = r(206583), p = r(705269);
function b(e) {
    let {id: t} = e, r = (0, n.e7)([c.default], () => c.default.getUser(t));
    return null == r ? null : (0, a.jsx)(i.Clickable, {
        className: p.entryAuthor,
        onClick: function () {
            (0, l.openUserProfileModal)({
                sourceAnalyticsLocations: [o.Z.DEV_TOOLS],
                userId: t
            });
        },
        children: (0, a.jsx)(i.Text, {
            variant: 'text-md/semibold',
            children: r.username
        })
    });
}
function f() {
    var e;
    let t = (0, n.e7)([u.Z], () => u.Z.getFeed(g.YN.GLOBAL_FEED)), r = (0, n.e7)([u.Z], () => u.Z.getFilters()), o = (0, n.cj)([s.Z], () => {
            var e;
            let r = {};
            for (let a of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : [])
                r[(0, s.T)(a.content)] = s.Z.canRenderContent(a.content);
            return r;
        }, [t]), l = (0, n.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
    if (null == r)
        return null;
    let c = null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.flatMap(e => {
        let {content: t} = e;
        if (!(0, h.g)(r, t))
            return [];
        let n = o[(0, s.T)(t)];
        return (0, a.jsxs)('li', {
            className: p.locatorEntry,
            children: [
                (0, a.jsx)(b, {
                    type: t.author_type,
                    id: t.author_id
                }),
                !n && (0, a.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'Expired or no matching presence'
                }),
                (0, m.n2)(t) && (0, a.jsxs)(i.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Expired at ',
                        t.expires_at
                    ]
                }),
                l.has(t.id) && (0, a.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'Impression capped'
                })
            ]
        });
    });
    return (0, a.jsxs)(i.FormSection, {
        children: [
            (0, a.jsx)(i.FormTitle, { children: 'Selected Content' }),
            null != c ? (0, a.jsx)('ul', { children: c }) : (0, a.jsx)('div', { children: '(none?)' })
        ]
    });
}
