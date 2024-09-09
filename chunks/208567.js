l.d(n, {
    S: function () {
        return N;
    }
}),
    l(47120);
var s,
    a = l(735250),
    t = l(470079),
    i = l(120356),
    r = l.n(i),
    o = l(512722),
    d = l.n(o),
    c = l(481060),
    u = l(624138),
    E = l(813197),
    _ = l(981631),
    x = l(689938),
    I = l(953752);
function m(e, n, l) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = l),
        e
    );
}
function N(e) {
    let { className: n, icon: l = null } = e;
    return (0, a.jsx)(c.ThemeProvider, {
        theme: _.BRd.LIGHT,
        children: (e) =>
            (0, a.jsx)('div', {
                className: r()(I.imageUploaderIcon, n, e),
                children: l
            })
    });
}
class T extends (s = t.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let n, l, s, t;
        let { image: i, hint: o, name: d, makeURL: m, disabled: T, onChange: h, showIcon: g, showIconDisabled: v, className: S, imageClassName: C, iconClassName: L, iconWrapperClassName: A, icon: Z, hideSize: f, imageStyle: j, showRemoveButton: M, maxFileSizeBytes: D, onFileSizeError: R, onOpenImageSelectModal: p, 'aria-label': V } = this.props;
        if (
            (null != (n = null != i && /^data:/.test(i) ? i : m(i))
                ? (l = 'url("'.concat(n, '")'))
                : null != d &&
                  (s = (0, a.jsx)(c.Heading, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: I.imageUploaderAcronym,
                      children: (0, u.Zg)(d)
                  })),
            T)
        )
            return (0, a.jsx)('div', {
                className: r()(I.imageUploader, I.disabled, S),
                children: (0, a.jsxs)('div', {
                    className: r()(I.imageUploaderInner, C),
                    style: {
                        ...j,
                        backgroundImage: l
                    },
                    children: [
                        s,
                        v &&
                            (0, a.jsx)('div', {
                                className: r()(I.imageUploaderIcon, I.imageUploaderIconDisabled, L),
                                children: Z
                            })
                    ]
                })
            });
        null != i
            ? (t = (0, a.jsx)(c.Anchor, {
                  className: I.removeButton,
                  onClick: this.handleRemove,
                  children: x.Z.Messages.REMOVE
              }))
            : !f &&
              (t = (0, a.jsx)('small', {
                  className: I.sizeInfo,
                  children: x.Z.Messages.MINIMUM_SIZE.format({ size: _.IXf })
              }));
        let G = null !== (e = null != V ? V : o) && void 0 !== e ? e : x.Z.Messages.CHANGE_AVATAR;
        return (0, a.jsxs)('div', {
            className: r()(I.imageUploader, S),
            children: [
                (0, a.jsx)(c.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)('div', {
                        className: g ? r()(I.imageUploaderIconWrapper, A) : void 0,
                        children: [
                            (0, a.jsxs)('div', {
                                className: r()(I.imageUploaderInner, C),
                                style: {
                                    ...j,
                                    backgroundImage: l
                                },
                                children: [
                                    (0, a.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: s
                                    }),
                                    null != p
                                        ? (0, a.jsx)(c.Clickable, {
                                              className: I.imageUploaderFileInput,
                                              'aria-label': G,
                                              onClick: p
                                          })
                                        : (0, a.jsx)(E.ZP, {
                                              ref: this.inputRef,
                                              onChange: h,
                                              className: I.imageUploaderFileInput,
                                              'aria-label': G,
                                              tabIndex: 0,
                                              maxFileSizeBytes: D,
                                              onFileSizeError: R
                                          })
                                ]
                            }),
                            null != o &&
                                (0, a.jsx)('div', {
                                    className: I.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            g &&
                                (0, a.jsx)(N, {
                                    className: L,
                                    icon: Z
                                })
                        ]
                    })
                }),
                M ? t : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'inputRef', t.createRef()),
            m(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
m(T, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
}),
    (n.Z = T);
