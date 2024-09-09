a.d(t, {
    h: function () {
        return _;
    }
});
var n,
    i,
    r,
    l,
    o = a(735250),
    s = a(470079),
    c = a(476400),
    d = a.n(c),
    u = a(948789),
    h = a(982905),
    m = a(66037),
    p = a(231338),
    N = a(522095);
let k = p.j_.MAIN_NAVIGATION_MENU;
class _ extends (l = s.PureComponent) {
    render() {
        let e = (0, u.fQ)(this.context.router),
            { isOpen: t, dropdownLinks: a, TrackClick: n, avoidRouter: i, id: r, 'aria-label': l } = this.props,
            s = a.map((t, a) =>
                t.divider
                    ? (0, o.jsx)('hr', { className: N.divider }, 'divider-'.concat(a))
                    : t.external
                      ? (0, o.jsx)(
                            'li',
                            {
                                className: N.moreListItemInactive,
                                children: (0, o.jsx)(n, {
                                    className: N.moreListLink,
                                    eventName: k,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, o.jsx)('span', {
                                        className: N.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, o.jsx)(
                            'li',
                            {
                                className: (0, h.l)(N, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, o.jsx)(m.Z, {
                                    avoidRouter: i,
                                    className: N.moreListLink,
                                    to: t.route,
                                    from: p.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, o.jsx)(n, {
                                        tag: 'span',
                                        className: N.moreListLinkCopy,
                                        eventName: k,
                                        data: { linkClicked: t.linkClicked },
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
            );
        return (0, o.jsx)('ul', {
            id: r,
            className: (0, h.l)(N, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': l,
            children: s
        });
    }
}
(n = _),
    (i = 'contextTypes'),
    (r = { router: d().object.isRequired }),
    i in n
        ? Object.defineProperty(n, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[i] = r);
