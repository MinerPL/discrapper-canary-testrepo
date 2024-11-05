n.d(t, {
    QR: function () {
        return v;
    },
    Yj: function () {
        return _;
    },
    iz: function () {
        return m;
    }
});
var i,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(294033),
    d = n(388032),
    u = n(157004),
    h = n(113207);
function p(e, t, n) {
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
let f = (e) => e.stopPropagation(),
    g = () =>
        (0, r.jsx)('div', {
            className: u.clickBlocker,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f
        }),
    m = () => (0, r.jsx)('div', { className: u.divider }),
    v = (e, t, n) =>
        (0, r.jsx)('div', {
            className: u.keybindMessage,
            children: d.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, r.jsx)(
                        c.Z,
                        {
                            keybind: t,
                            className: u.keybind
                        },
                        n
                    )
            })
        }),
    _ = (e, t) =>
        (0, r.jsx)('div', {
            className: u.hintSubtleText,
            children: t
        });
class E extends (i = s.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { expand: n } = e,
            { expanded: i } = t;
        return !i && n ? { expanded: !0 } : null;
    }
    componentDidMount() {
        let { onNotificationShow: e } = this.props;
        null == e || e();
    }
    componentDidUpdate(e) {
        let { onNotificationShow: t } = this.props;
        null != t && null == e.onNotificationShow && t();
    }
    renderCloseButton() {
        return (0, r.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: u.dismissButton,
            'aria-label': d.intl.string(d.t.LnEgqa),
            children: (0, r.jsx)(o.XSmallIcon, {
                size: 'xs',
                color: 'currentColor',
                className: u.dismissIcon
            })
        });
    }
    renderHint() {
        let {
            props: { hint: e },
            state: { expanded: t }
        } = this;
        if (null == e) return null;
        if ('function' == typeof e) {
            let n = e(t);
            return null != n
                ? (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(m, {}), n]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, r.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, r.jsx)(m, {}),
                    (0, r.jsx)(
                        'div',
                        {
                            className: 'string' == typeof e ? u.hintText : void 0,
                            children: e
                        },
                        'hint-text'
                    )
                ]
            },
            'hint-text'
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: a },
            state: { expanded: l }
        } = this;
        if (!l) return null != a ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(l);
            return null != e
                ? (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(m, {}), e]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != n || null != i) {
            let a = o.Button.Colors.GREEN,
                l = o.Button.Colors.PRIMARY,
                c = o.Button.Looks.FILLED;
            return (0, r.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, r.jsx)(m, {}),
                        (0, r.jsxs)('div', {
                            className: u.buttonContainer,
                            children: [
                                null != n
                                    ? (0, r.jsx)(o.Button, {
                                          fullWidth: !0,
                                          size: o.Button.Sizes.SMALL,
                                          color: a,
                                          onClick: this.handleConfirmClick,
                                          className: u.button,
                                          innerClassName: u.innerText,
                                          children: null != t ? t : d.intl.string(d.t.BddRzc)
                                      })
                                    : null,
                                null != i
                                    ? (0, r.jsx)(o.Button, {
                                          fullWidth: !0,
                                          size: o.Button.Sizes.SMALL,
                                          look: c,
                                          color: l,
                                          onClick: this.handleCancelClick,
                                          className: u.button,
                                          children: null != e ? e : d.intl.string(d.t['ETE/oK'])
                                      })
                                    : null
                            ]
                        })
                    ]
                },
                'footer-button-content'
            );
        }
        return this.renderHint();
    }
    renderIcon() {
        let { icon: e } = this.props;
        return null == e
            ? null
            : 'string' == typeof e
              ? (0, r.jsx)(o.Avatar, {
                    src: e,
                    size: o.AvatarSizes.SIZE_40,
                    className: u.avatar,
                    'aria-hidden': !0
                })
              : (0, r.jsx)('div', {
                    className: u.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, r.jsxs)('div', {
            className: u.content,
            children: [
                this.renderIcon(),
                (0, r.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.title,
                            children: t
                        }),
                        null != e
                            ? (0, r.jsx)('div', {
                                  className: l()(u.body, h.marginTop4),
                                  style: {
                                      WebkitLineClamp: n,
                                      lineClamp: n
                                  },
                                  children: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
    render() {
        let {
                props: { onNotificationClick: e, disabled: t },
                state: { expanded: n }
            } = this,
            i = null != e ? o.Clickable : 'div';
        return (0, r.jsxs)(i, {
            onMouseOver: n ? null : this.handleMouseEnter,
            onFocus: n ? null : this.handleMouseEnter,
            onClick: e,
            className: l()(u.container, {
                [u.themePrimary]: !0,
                [u.clickable]: null != e && !t
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, r.jsx)(g, {}) : null]
        });
    }
    constructor(e) {
        super(e),
            p(this, 'handleDismiss', (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleConfirmClick', (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleCancelClick', (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleMouseEnter', () => {
                !this.props.disabled && this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
p(E, 'defaultProps', {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1
}),
    (t.ZP = E);
