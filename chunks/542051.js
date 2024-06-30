n.d(t, {
    M: function () {
        return I;
    }
}), n(411104);
var i, a, s, l, r = n(735250), o = n(470079), c = n(120356), d = n.n(c), u = n(481060), _ = n(689938), E = n(634936);
function m(e) {
    e.stopPropagation(), e.preventDefault();
}
function I(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class T extends (i = o.PureComponent) {
    renderQuery(e) {
        let {
            query: t,
            navId: n,
            focusedIndex: i,
            onSelectQuery: a,
            onSelectSearchEverywhere: s,
            onHighlightQuery: l,
            hideQuery: o,
            searchFavorites: c
        } = this.props;
        if (e || o)
            return null;
        let m = -1 === i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(u.Clickable, {
                    className: d()(E.queryContainer, { [E.focused]: m }),
                    ...I(n, -1, m),
                    onMouseEnter: l,
                    onClick: a,
                    children: [
                        (0, r.jsx)('div', {
                            className: E.queryText,
                            children: c ? _.Z.Messages.SEARCH_FAVORITES : _.Z.Messages.SEARCH_FOR_VALUE.format({ value: t })
                        }),
                        (0, r.jsx)('div', {
                            className: E.queryShortcut,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(u.KeyCombo, {
                                shortcut: 'return',
                                dim: !0,
                                className: E.keyCombo
                            })
                        })
                    ]
                }),
                c && (0, r.jsxs)(u.Clickable, {
                    className: d()(E.queryContainer, { [E.focused]: m }),
                    ...I(n, -1, m),
                    onMouseEnter: l,
                    onClick: s,
                    children: [
                        (0, r.jsx)('div', {
                            className: E.queryText,
                            children: _.Z.Messages.SEARCH_EVERYWHERE
                        }),
                        (0, r.jsx)('div', {
                            className: E.queryShortcut,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(u.KeyCombo, {
                                shortcut: 'shift+return',
                                dim: !0,
                                className: E.keyCombo
                            })
                        })
                    ]
                })
            ]
        });
    }
    renderResults(e) {
        let {
            numResults: t,
            renderNoResults: n,
            renderInitialState: i,
            renderResult: a,
            renderCustomResults: s
        } = this.props;
        if (e)
            return i();
        if (0 === t)
            return n();
        if (null != a)
            return Array.from({ length: t }).map((e, t) => a(t));
        if (null != s)
            return s();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let {
                query: e,
                focusedIndex: t,
                navId: n,
                width: i
            } = this.props, a = '' === e.trim();
        return (0, r.jsxs)('div', {
            className: E.container,
            style: { width: i },
            onMouseDown: m,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [
                this.renderQuery(a),
                this.renderResults(a)
            ]
        });
    }
}
l = {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
}, (s = 'defaultProps') in (a = T) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = T;
