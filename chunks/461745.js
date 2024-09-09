n.d(t, {
    BK: function () {
        return I;
    },
    Fj: function () {
        return r;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s = n(735250),
    o = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(565138),
    _ = n(981631),
    E = n(689938),
    f = n(484667);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = Object.freeze({
    SMALL: f.small,
    MEDIUM: f.medium,
    LARGE: f.large
});
((a = r || (r = {})).MEMBER = 'MEMBER'), (a.ROLE = 'ROLE'), (a.CHANNEL = 'CHANNEL'), (a.GUILD = 'GUILD'), (a.USER = 'USER');
let I = (e) => {
    let { hasContent: t, onClear: n, className: r, themeOverride: i, size: a = p.SMALL } = e;
    return (0, s.jsx)(c.ThemeProvider, {
        theme: i,
        children: (e) =>
            (0, s.jsx)(c.Clickable, {
                className: u()(r, f.iconLayout, a, e, { [f.clear]: t }),
                onClick: (e) => {
                    e.stopPropagation(), null != n && n(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                tabIndex: t ? 0 : -1,
                'aria-hidden': !t,
                'aria-label': E.Z.Messages.SEARCH_CLEAR,
                focusProps: { offset: 4 },
                children: (0, s.jsxs)('div', {
                    className: f.iconContainer,
                    children: [
                        (0, s.jsx)(c.MagnifyingGlassIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u()({
                                [f.icon]: !0,
                                [f.visible]: !t
                            })
                        }),
                        (0, s.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u()({
                                [f.icon]: !0,
                                [f.visible]: t
                            })
                        })
                    ]
                })
            })
    });
};
class m extends (i = o.Component) {
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        t && !e.isReady && n && this.focus();
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: n, sections: r, query: i, tags: a, onSelectionChange: s, onSelect: o, onRemoveTag: l, preventEscapePropagation: u } = this.props;
        if (0 !== r.length) {
            switch (e.keyCode) {
                case _.yXg.BACKSPACE:
                    (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                    break;
                case _.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (n = 0)) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case _.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1);
                    break;
                case _.yXg.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case _.yXg.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1)));
                    break;
                case _.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t])) return;
                    null != o && o(t, n, e);
                    return;
                case _.yXg.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                    return;
                default:
                    return;
            }
            null != s && s(t, n);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: n, selectedRow: r, onSelect: i, onSelectionChange: a, query: s, tags: o, preventEscapePropagation: l } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.keyCode) {
                case _.yXg.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != o && o.length > 0) {
                        var c, d;
                        e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, o.length - 1);
                    }
                    break;
                case _.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)), null == a || a(n, r);
                    break;
                case _.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)), null == a || a(n, r);
                    break;
                case _.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e));
                    break;
                case _.yXg.ESCAPE:
                    e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), u.blur();
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: n = E.Z.Messages.DM_SEARCH_PLACEHOLDER, themeOverride: r, disabled: i, onClear: a, size: o, maxHeight: l, tags: _, onActivate: h, className: p, inputProps: m, focusAfterReady: T } = this.props,
            S = null != t && t.length > 0,
            g = !1,
            A = [];
        return (
            null != _ &&
                _.length > 0 &&
                ('string' == typeof _[0]
                    ? _.forEach((e, t) =>
                          A.push(
                              (0, s.jsxs)(
                                  c.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: f.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, s.jsx)(c.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: f.close,
                                              'aria-label': E.Z.Messages.REMOVE
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((g = !0),
                      _.forEach((e, t) =>
                          A.push(
                              (0, s.jsxs)(
                                  c.Anchor,
                                  {
                                      className: u()(f.tag, f.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, s.jsx)(c.Avatar, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: c.AvatarSizes.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, s.jsx)('span', {
                                                  className: f.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, s.jsx)(d.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: d.Z.Sizes.SMOL
                                              }),
                                          (0, s.jsx)('span', {
                                              className: f.tagLabel,
                                              children: e.label
                                          }),
                                          (0, s.jsx)(c.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: f.close,
                                              'aria-label': E.Z.Messages.REMOVE
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, s.jsx)(c.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)(c.ThemeProvider, {
                    theme: r,
                    children: (d) =>
                        (0, s.jsx)('div', {
                            ref: this.containerRef,
                            className: u()(p, f.container, o, d, { [f.disabled]: i }),
                            children: (0, s.jsxs)(c.ScrollerThin, {
                                className: f.inner,
                                style: { maxHeight: l },
                                children: [
                                    A,
                                    (0, s.jsx)('input', {
                                        className: u()(f.input, { [f.richTagInput]: g }),
                                        type: 'text',
                                        ref: this.ref,
                                        spellCheck: 'false',
                                        placeholder: n,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: i,
                                        'aria-disabled': i,
                                        autoFocus: !T && e,
                                        onMouseDown: h,
                                        ...this.defaultInputProps,
                                        ...m
                                    }),
                                    null != a
                                        ? (0, s.jsx)(I, {
                                              size: o,
                                              themeOverride: r,
                                              hasContent: S,
                                              onClear: this.handleClear
                                          })
                                        : null
                                ]
                            })
                        })
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            h(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            h(this, 'ref', o.createRef()),
            h(this, 'containerRef', o.createRef()),
            h(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== _.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === _.yXg.ESCAPE && null != a.value && '' !== a.value && a.value.length > 0) {
                    (a.value = ''), null != r && r('');
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            h(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            h(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            h(this, 'handleClear', () => {
                let { onClear: e } = this.props,
                    { current: t } = this.ref;
                null != e && e(), null != t && t.focus();
            }),
            h(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            h(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
h(m, 'Sizes', p),
    h(m, 'defaultProps', {
        size: p.SMALL,
        query: '',
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    }),
    (t.ZP = m);
