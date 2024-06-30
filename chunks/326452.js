n.d(t, {
    E: function () {
        return m;
    }
}), n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(1561), u = n(84735), c = n(922770), d = n(481060), _ = n(689938), E = n(923764);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let h = Object.freeze({
        SMALL: E.small,
        MEDIUM: E.medium,
        LARGE: E.large
    }), p = e => {
        let {
            hasContent: t,
            onClear: n,
            className: r,
            isLoading: o,
            size: u = h.SMALL
        } = e;
        return (0, i.jsx)(l.P, {
            className: s()(r, E.iconLayout, u, { [E.pointer]: t }),
            onClick: e => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: e => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, i.jsx)('div', {
                className: E.iconContainer,
                children: o ? (0, i.jsx)(c.$, {
                    type: c.$.Type.SPINNING_CIRCLE,
                    className: s()(E.icon, E.visible)
                }) : (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(d.MagnifyingGlassIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s()(E.icon, { [E.visible]: !t }),
                            'aria-label': _.Z.Messages.SEARCH
                        }),
                        (0, i.jsx)(d.CloseSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s()(E.clear, { [E.visible]: t }),
                            'aria-label': _.Z.Messages.CLEAR
                        })
                    ]
                })
            })
        });
    };
p.Sizes = h;
class m extends (r = a.PureComponent) {
    focus() {
        let {current: e} = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let {current: e} = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let {
            query: e,
            autoFocus: t,
            onClear: n,
            className: r,
            placeholder: a = _.Z.Messages.SEARCH,
            iconClassName: o,
            onKeyDown: l,
            onKeyUp: c,
            onKeyPress: d,
            isLoading: f,
            size: h,
            disabled: m,
            onChange: I,
            onBlur: T,
            onFocus: g,
            autoComplete: S,
            inputProps: A,
            hideSearchIcon: N,
            'aria-label': v = _.Z.Messages.SEARCH,
            ...O
        } = this.props;
        return (0, i.jsx)(u.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: s()(r, E.container, h, { [E.disabled]: m }),
                ref: this.containerRef,
                ...O,
                children: (0, i.jsxs)('div', {
                    className: E.inner,
                    children: [
                        (0, i.jsx)('input', {
                            ...A,
                            onFocus: g,
                            onBlur: T,
                            className: E.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: c,
                            onKeyPress: d,
                            placeholder: a,
                            disabled: m,
                            autoFocus: t,
                            autoComplete: S,
                            'aria-label': v,
                            ref: this.inputRef
                        }),
                        !N && (0, i.jsx)(p, {
                            size: h,
                            hasContent: e.length > 0,
                            onClear: n,
                            className: o,
                            isLoading: f
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e), f(this, 'inputRef', a.createRef()), f(this, 'containerRef', a.createRef()), f(this, 'handleOnChange', e => {
            let {onChange: t} = this.props;
            null == t || t(e.currentTarget.value);
        });
    }
}
f(m, 'Sizes', h), f(m, 'defaultProps', {
    size: h.SMALL,
    isLoading: !1,
    disabled: !1
});
