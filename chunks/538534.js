n.d(t, {
    Ee: function () {
        return C;
    },
    Fj: function () {
        return T;
    },
    ar: function () {
        return A;
    },
    xU: function () {
        return N;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(372817),
    u = n(1561),
    c = n(57260),
    d = n(15127),
    f = n(993365),
    _ = n(981729),
    h = n(481060),
    p = n(540059),
    m = n(186523),
    g = n(553826),
    E = n(981631),
    v = n(780994);
function I(e, t, n) {
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
let S = {
    NOT_SET: '',
    NONE: '0',
    SMALL: '7px 10px',
    MEDIUM: '10px'
};
function T(e) {
    let { checked: t, radioItemIconClassName: n, icon: r } = e;
    return (0, p.Q)('RadioGroup')
        ? (0, i.jsxs)('svg', {
              className: o()(v.radioIndicator, n),
              viewBox: '0 0 24 24',
              children: [
                  (0, i.jsx)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '12',
                      fill: t ? h.tokens.colors.REDESIGN_INPUT_CONTROL_SELECTED.css : 'transparent'
                  }),
                  (0, i.jsx)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '12',
                      strokeWidth: 2,
                      stroke: t ? 'rgba(255, 255, 255, 0.1)' : 'var(--__temp-input-border)',
                      fill: 'none'
                  }),
                  t
                      ? (0, i.jsx)('circle', {
                            cx: '12',
                            cy: '12',
                            r: '5',
                            fill: 'white'
                        })
                      : null
              ]
          })
        : (0, i.jsxs)('div', {
              className: n,
              children: [
                  t ? (0, i.jsx)(g.Z, { foreground: v.radioIconForeground }) : (0, i.jsx)(m.Z, {}),
                  null != r &&
                      (0, i.jsx)(r, {
                          className: v.icon,
                          size: 'md',
                          color: 'currentColor'
                      })
              ]
          });
}
function b(e) {
    var t;
    let { disabled: n, checked: r, option: a, size: s, onClick: l, infoClassName: c, titleClassName: d, radioItemClassName: _, radioItemIconClassName: h, radioBarClassName: p, hasSelection: m, radioPosition: g = 'left', icon: E, withTransparentBackground: I } = e,
        S = null !== (t = a.color) && void 0 !== t ? t : '',
        b = r || !m,
        y = (0, i.jsx)(T, {
            checked: r,
            radioItemIconClassName: h,
            icon: E
        });
    return (0, i.jsx)(u.P, {
        role: 'radio',
        'aria-checked': r,
        onClick: n ? void 0 : l,
        tabIndex: !n && b ? 0 : -1,
        className: o()(
            null != a.collapsibleContent ? v.collapsibleItem : v.item,
            {
                [v.disabled]: n,
                [v.itemFilled]: !I
            },
            _
        ),
        children: (0, i.jsxs)('div', {
            style: {
                '--radio-bar-accent-color': S,
                padding: s
            },
            className: o()(
                v.radioBar,
                {
                    [v.radioPositionLeft]: 'left' === g,
                    [v.radioPositionRight]: 'right' === g
                },
                p
            ),
            children: [
                'left' === g ? y : null,
                (0, i.jsxs)('div', {
                    className: o()(v.info, c),
                    children: [
                        (0, i.jsx)(f.x, {
                            variant: 'text-md/medium',
                            className: d,
                            color: 'none',
                            children: a.name
                        }),
                        null != a.desc && '' !== a.desc
                            ? (0, i.jsx)(f.x, {
                                  color: 'none',
                                  variant: 'text-sm/normal',
                                  children: a.desc
                              })
                            : null
                    ]
                }),
                'right' === g ? y : null
            ]
        })
    });
}
class y extends (r = a.PureComponent) {
    render() {
        let { checked: e, disabled: t, option: n, size: r, infoClassName: a, hasSelection: s, titleClassName: o, radioItemClassName: l, radioItemIconClassName: u, radioBarClassName: d, collapsibleClassName: f, withTransparentBackground: h, radioPosition: p } = this.props,
            m = t || n.disabled,
            { tooltipText: g, tooltipPosition: E, icon: I } = n,
            S =
                null != n.collapsibleContent
                    ? (0, i.jsx)(c.z, {
                          className: f,
                          isExpanded: e,
                          collapsibleContent: n.collapsibleContent,
                          children: (t) => {
                              let { onClick: c } = t;
                              return (0, i.jsx)(b, {
                                  disabled: !!m,
                                  checked: e,
                                  hasSelection: s,
                                  option: n,
                                  onClick: (e) => {
                                      this.handleClick(e), c(e);
                                  },
                                  size: r,
                                  infoClassName: a,
                                  titleClassName: o,
                                  radioItemClassName: l,
                                  radioItemIconClassName: u,
                                  radioBarClassName: d,
                                  radioPosition: p,
                                  icon: I,
                                  withTransparentBackground: h
                              });
                          }
                      })
                    : (0, i.jsx)(b, {
                          disabled: !!m,
                          checked: e,
                          hasSelection: s,
                          option: n,
                          onClick: this.handleClick,
                          size: r,
                          infoClassName: a,
                          titleClassName: o,
                          radioItemClassName: l,
                          radioItemIconClassName: u,
                          radioBarClassName: d,
                          radioPosition: p,
                          icon: I,
                          withTransparentBackground: h
                      });
        return null != g
            ? (0, i.jsx)(_.u, {
                  text: g,
                  position: null != E ? E : 'top',
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: v.tooltipWrapper,
                          children: S
                      })
              })
            : S;
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: t, option: n } = this.props;
                return null == t ? void 0 : t(n);
            });
    }
}
function A() {
    let { orientation: e = 'vertical', isDisabled: t = !1, labelledBy: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = a.useRef(null),
        i = a.useMemo(
            () =>
                (0, l.E)({
                    getFocusableElements() {
                        let e = r.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="radio"]')) : [];
                    },
                    getActiveElement() {
                        var e;
                        return null === (e = r.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    }
                }),
            []
        );
    return {
        role: 'radiogroup',
        onKeyDown: a.useCallback(
            async (t) => {
                if (null == r.current) return;
                let n = 'vertical' === e ? E.yXg.ARROW_UP : E.yXg.ARROW_LEFT,
                    a = 'vertical' === e ? E.yXg.ARROW_DOWN : E.yXg.ARROW_RIGHT;
                switch (t.which) {
                    case a: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await i.getNextFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                    case n: {
                        t.stopPropagation(), t.preventDefault();
                        let e = await i.getPreviousFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                }
            },
            [i, e]
        ),
        ref: r,
        'aria-labelledby': n,
        'aria-orientation': e,
        'aria-disabled': t
    };
}
function N(e) {
    let { isSelected: t, label: n } = e;
    return {
        role: 'radio',
        tabIndex: t ? 0 : -1,
        'aria-label': n,
        'aria-checked': t
    };
}
function C(e) {
    let { itemInfoClassName: t, itemTitleClassName: n, radioItemClassName: r, collapsibleClassName: a, className: s, value: o = null, size: l = S.MEDIUM, radioPosition: u = 'left', onChange: c = E.dG4, disabled: f = !1, options: _ = [], 'aria-labelledby': h, orientation: p, withTransparentBackground: m } = e,
        g = (0, d.Gc)(),
        v = A({
            labelledBy: null != h ? h : g.titleId,
            orientation: p,
            isDisabled: f
        }),
        I = _.some((e) => e.value === o);
    return (0, i.jsx)('div', {
        ...v,
        className: s,
        children: _.map((e) =>
            (0, i.jsx)(
                y,
                {
                    hasSelection: I,
                    disabled: f,
                    checked: o === e.value,
                    option: e,
                    onClick: c,
                    radioPosition: u,
                    size: l,
                    infoClassName: t,
                    titleClassName: n,
                    radioItemClassName: r,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: a,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: m
                },
                e.value
            )
        )
    });
}
I(y, 'defaultProps', {
    withTransparentBackground: !1,
    radioPosition: 'left'
}),
    (C.Sizes = S);
