n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(91192), l = n(481060), u = n(880949), c = n(806966), d = n(254494), _ = n(593618), E = n(697426), f = n(689938), h = n(192275);
let p = [
    8,
    8,
    8,
    8
];
function m(e) {
    let {
        icon: t,
        isSelected: n,
        onClick: i,
        listItemProps: a,
        ...s
    } = e;
    return (0, r.jsx)(l.Clickable, {
        ...a,
        ...s,
        onClick: i,
        className: o()(h.categoryIcon, { [h.selected]: n }),
        children: (0, r.jsx)(t, {
            className: h.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function I(e) {
    let {
            category: t,
            categoryIndex: n,
            onClick: i,
            isSelected: a
        } = e, o = (0, s.JA)('soundboard_guild_'.concat(n));
    return (0, r.jsx)(l.Tooltip, {
        text: function (e) {
            switch (e.categoryInfo.type) {
            case E.bg.FAVORITES:
                return f.Z.Messages.FAVORITES;
            case E.bg.RECENTLY_HEARD:
                return f.Z.Messages.RECENTLY_HEARD;
            case E.bg.FREQUENTLY_USED:
                return f.Z.Messages.FREQUENTLY_USED;
            case E.bg.GUILD:
                return (0, r.jsx)(_.K, {
                    guild: e.categoryInfo.guild,
                    includeActivity: !1
                });
            case E.bg.DEFAULTS:
                return f.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
            }
        }(t),
        'aria-label': function (e) {
            switch (e.categoryInfo.type) {
            case E.bg.FAVORITES:
                return f.Z.Messages.FAVORITES;
            case E.bg.RECENTLY_HEARD:
                return f.Z.Messages.RECENTLY_HEARD;
            case E.bg.FREQUENTLY_USED:
                return f.Z.Messages.FREQUENTLY_USED;
            case E.bg.GUILD:
                return e.categoryInfo.guild.name;
            case E.bg.DEFAULTS:
                return f.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
            }
        }(t),
        position: 'right',
        children: e => function (e, t, n, i, a) {
            switch (e.categoryInfo.type) {
            case E.bg.FAVORITES:
                return (0, r.jsx)(m, {
                    ...i,
                    icon: l.StarIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }, e.key);
            case E.bg.RECENTLY_HEARD:
                return (0, r.jsx)(m, {
                    ...i,
                    icon: l.ClockIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }, e.key);
            case E.bg.FREQUENTLY_USED:
                return (0, r.jsx)(m, {
                    ...i,
                    icon: l.AnalyticsIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }, e.key);
            case E.bg.GUILD:
                return (0, r.jsx)(l.Clickable, {
                    ...a,
                    ...i,
                    className: h.category,
                    onClick: t,
                    children: (0, r.jsx)(u.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n
                    })
                }, e.key);
            case E.bg.DEFAULTS:
                return (0, r.jsx)(m, {
                    ...i,
                    icon: l.ClydeIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }, e.key);
            default:
                return null;
            }
        }(t, i, a, e, o)
    });
}
function T(e) {
    let {
            soundboardListRef: t,
            categories: n,
            listPadding: a = p
        } = e, o = i.useRef(null), s = i.useCallback((e, t, n, i) => (0, r.jsx)(I, {
            category: e,
            categoryIndex: t,
            onClick: n,
            isSelected: i
        }), []);
    return (0, r.jsx)(d.Z, {
        className: h.categoryList,
        categoryListRef: o,
        expressionsListRef: t,
        store: c.Wq,
        categories: n,
        listPadding: a,
        renderCategoryListItem: s,
        rowCount: n.length,
        categoryHeight: 40
    });
}
