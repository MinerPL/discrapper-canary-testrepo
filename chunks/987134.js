t.d(n, {
    Z: function () {
        return S;
    },
    v: function () {
        return m;
    }
}), t(47120);
var i, r, o, a = t(735250), s = t(470079), l = t(120356), c = t.n(l), d = t(536640), u = t(481060), _ = t(981631), p = t(689938), f = t(362004);
function I(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
(o = i || (i = {})).TOP = 'top', o.BOTTOM = 'bottom';
let m = {
    container: (e, n) => {
        let {isDisabled: t} = n;
        return {
            ...e,
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, n) => {
        let {
            isDisabled: t,
            menuIsOpen: i
        } = n;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: t ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    singleValue: (e, n) => {
        let {isDisabled: t} = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            opacity: t ? 0.5 : 1
        };
    },
    input: e => ({
        ...e,
        color: 'var(--interactive-normal)'
    }),
    menu: e => ({
        ...e,
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--background-tertiary)',
        borderRadius: '0 0 4px 4px',
        color: 'var(--interactive-normal)',
        marginTop: -1,
        marginBottom: -1
    }),
    clearIndicator: (e, n) => {
        let {isDisabled: t} = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: t ? void 0 : 'pointer',
            opacity: 0.3,
            padding: '8px 0',
            transform: 'scale(0.8)',
            ':hover': {
                color: 'var(--text-danger)',
                opacity: 1
            }
        };
    },
    indicatorsContainer: e => ({
        ...e,
        alignItems: 'flex-start'
    }),
    dropdownIndicator: (e, n) => {
        let {isDisabled: t} = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: t ? void 0 : 'pointer',
            opacity: t ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: t ? 0.3 : 1
            }
        };
    },
    menuList: e => ({
        ...e,
        padding: 0,
        '&::-webkit-scrollbar': {
            width: 8,
            padding: '0px 2px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--scrollbar-thin-thumb)',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: 4
        },
        '&::-webkit-scrollbar-track-piece': {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        }
    }),
    option: (e, n) => {
        let {
            isSelected: t,
            isFocused: i
        } = n;
        return {
            ...e,
            ...t ? {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            } : i ? {
                backgroundColor: 'var(--background-modifier-hover)',
                color: 'var(--interactive-hover)'
            } : {
                backgroundColor: 'transparent',
                color: 'var(--interactive-normal)'
            },
            cursor: 'pointer',
            display: 'flex',
            padding: 12,
            alignItems: 'center',
            minHeight: 40,
            '&:active': {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            }
        };
    },
    placeholder: e => ({
        ...e,
        color: 'var(--text-muted)'
    })
};
class S extends (r = s.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let {
                className: n,
                selectClassName: t,
                error: i,
                valueRenderer: r,
                optionRenderer: o,
                multiValueRenderer: s,
                options: l,
                value: _,
                autofocus: I,
                disabled: S,
                clearable: C,
                searchable: T,
                styleOverrides: h,
                isMulti: b,
                placeholder: g,
                filterOption: E,
                closeMenuOnSelect: N = !0,
                ...P
            } = this.props, O = { ...P };
        null != I && (O.autoFocus = I), null != S && (O.isDisabled = S), null != C && (O.isClearable = C), null != T && (O.isSearchable = T);
        let A = { IndicatorSeparator: () => null };
        null != o && (A.Option = e => (0, a.jsx)(d.wx.Option, {
            ...e,
            children: o(e.data)
        })), null != r && (A.SingleValue = e => (0, a.jsx)(d.wx.SingleValue, {
            ...e,
            children: r(e.data)
        })), null != s && (A.MultiValue = e => s(e.data));
        if (b && Array.isArray(_)) {
            let n = {};
            l.forEach(e => {
                n[String(e.value)] = e;
            }), e = _.map(e => n[String(e)]);
        } else
            e = null != _ ? l.find(e => e.value === _) : null;
        return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: c()(f.select, n, { [f.error]: null != i }),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(d.ZP, {
                        ...O,
                        className: t,
                        ref: this._selectRef,
                        isMulti: b,
                        components: A,
                        options: l,
                        styles: null != h ? h : m,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: N,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != g ? g : p.Z.Messages.SELECT,
                        noOptionsMessage: () => p.Z.Messages.NO_RESULTS_FOUND,
                        filterOption: E
                    }),
                    null != i ? (0, a.jsx)('div', {
                        className: f.errorMessage,
                        children: i
                    }) : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e), I(this, '_selectRef', s.createRef()), I(this, '_containerRef', s.createRef()), I(this, 'state', {
            isFocused: !1,
            isOpen: !1
        }), I(this, 'handleFocus', e => {
            var n, t;
            this.setState({ isFocused: !0 }), null === (n = (t = this.props).onFocus) || void 0 === n || n.call(t, e);
        }), I(this, 'handleBlur', e => {
            var n, t;
            this.setState({ isFocused: !1 }), null === (n = (t = this.props).onBlur) || void 0 === n || n.call(t, e);
        }), I(this, 'handleKeyDown', e => {
            e.which === _.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
        }), I(this, 'handleMenuOpen', () => {
            this.setState({ isOpen: !0 });
        }), I(this, 'handleMenuClose', () => {
            this.setState({ isOpen: !1 });
        });
    }
}
I(S, 'MenuPlacements', i);
