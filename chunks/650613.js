n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(390547);
var r = n(735250),
    a = n(442837),
    l = n(481060),
    i = n(100527),
    o = n(171368),
    s = n(594174),
    c = n(719247),
    u = n(71585),
    d = n(146282),
    h = n(897674),
    m = n(561308),
    x = n(206583),
    f = n(454477);
function g(e) {
    let { id: t } = e,
        n = (0, a.e7)([s.default], () => s.default.getUser(t));
    return null == n
        ? null
        : (0, r.jsx)(l.Clickable, {
              className: f.entryAuthor,
              onClick: function () {
                  (0, o.openUserProfileModal)({
                      sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
                      userId: t
                  });
              },
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-md/semibold',
                  children: n.username
              })
          });
}
function p() {
    var e;
    let t = (0, a.e7)([d.Z], () => d.Z.getFeed(x.YN.GLOBAL_FEED)),
        n = (0, a.e7)([d.Z], () => d.Z.getFilters()),
        i = (0, a.cj)(
            [c.Z],
            () => {
                var e;
                let n = {};
                for (let r of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : []) n[(0, c.T)(r.content)] = c.Z.canRenderContent(r.content);
                return n;
            },
            [t]
        ),
        o = (0, a.e7)([u.Z], () => u.Z.getImpressionCappedItemIds());
    if (null == n) return null;
    let s =
        null == t
            ? void 0
            : null === (e = t.entries) || void 0 === e
              ? void 0
              : e.flatMap((e) => {
                    let { content: t } = e;
                    if (!(0, h.g)(n, t)) return [];
                    let a = i[(0, c.T)(t)];
                    return (0, r.jsxs)(
                        'li',
                        {
                            className: f.locatorEntry,
                            children: [
                                (0, r.jsx)(g, {
                                    type: t.author_type,
                                    id: t.author_id
                                }),
                                !a &&
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Expired or no matching presence'
                                    }),
                                (0, m.n2)(t) &&
                                    (0, r.jsxs)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: ['Expired at ', t.expires_at]
                                    }),
                                o.has(t.id) &&
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Impression capped'
                                    })
                            ]
                        },
                        t.id
                    );
                });
    return (0, r.jsxs)(l.FormSection, {
        children: [(0, r.jsx)(l.FormTitle, { children: 'Selected Content' }), null != s ? (0, r.jsx)('ul', { children: s }) : (0, r.jsx)('div', { children: '(none?)' })]
    });
}
