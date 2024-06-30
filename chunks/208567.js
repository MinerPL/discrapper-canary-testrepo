l.d(n, {
    S: function () {
        return m;
    }
}), l(47120);
var s, a = l(735250), t = l(470079), i = l(120356), r = l.n(i), o = l(512722), d = l.n(o), c = l(481060), u = l(624138), E = l(813197), _ = l(981631), I = l(689938), x = l(974695);
function N(e, n, l) {
    return n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = l, e;
}
function m(e) {
    let {
        className: n,
        icon: l = null
    } = e;
    return (0, a.jsx)('div', {
        className: r()(x.imageUploaderIcon, n),
        children: l
    });
}
class T extends (s = t.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let n, l, s, t;
        let {
            image: i,
            hint: o,
            name: d,
            makeURL: N,
            disabled: T,
            onChange: h,
            showIcon: g,
            showIconDisabled: v,
            className: S,
            imageClassName: C,
            iconClassName: L,
            iconWrapperClassName: A,
            icon: Z,
            hideSize: f,
            imageStyle: j,
            showRemoveButton: M,
            maxFileSizeBytes: D,
            onFileSizeError: p,
            onOpenImageSelectModal: R,
            'aria-label': V
        } = this.props;
        if (null != (n = null != i && /^data:/.test(i) ? i : N(i)) ? l = 'url("'.concat(n, '")') : null != d && (s = (0, a.jsx)('div', {
                className: x.imageUploaderAcronym,
                children: (0, u.Zg)(d)
            })), T)
            return (0, a.jsx)('div', {
                className: r()(x.imageUploader, x.disabled, S),
                children: (0, a.jsxs)('div', {
                    className: r()(x.imageUploaderInner, C),
                    style: {
                        ...j,
                        backgroundImage: l
                    },
                    children: [
                        s,
                        v && (0, a.jsx)('div', {
                            className: r()(x.imageUploaderIcon, x.imageUploaderIconDisabled, L),
                            children: Z
                        })
                    ]
                })
            });
        null != i ? t = (0, a.jsx)(c.Anchor, {
            className: x.removeButton,
            onClick: this.handleRemove,
            children: I.Z.Messages.REMOVE
        }) : !f && (t = (0, a.jsx)('small', {
            className: x.sizeInfo,
            children: I.Z.Messages.MINIMUM_SIZE.format({ size: _.IXf })
        }));
        let G = null !== (e = null != V ? V : o) && void 0 !== e ? e : I.Z.Messages.CHANGE_AVATAR;
        return (0, a.jsxs)('div', {
            className: r()(x.imageUploader, S),
            children: [
                (0, a.jsx)(c.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)('div', {
                        className: g ? r()(x.imageUploaderIconWrapper, A) : void 0,
                        children: [
                            (0, a.jsxs)('div', {
                                className: r()(x.imageUploaderInner, C),
                                style: {
                                    ...j,
                                    backgroundImage: l
                                },
                                children: [
                                    (0, a.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: s
                                    }),
                                    null != R ? (0, a.jsx)(c.Clickable, {
                                        className: x.imageUploaderFileInput,
                                        'aria-label': G,
                                        onClick: R
                                    }) : (0, a.jsx)(E.ZP, {
                                        ref: this.inputRef,
                                        onChange: h,
                                        className: x.imageUploaderFileInput,
                                        'aria-label': G,
                                        tabIndex: 0,
                                        maxFileSizeBytes: D,
                                        onFileSizeError: p
                                    })
                                ]
                            }),
                            null != o && (0, a.jsx)('div', {
                                className: x.imageUploaderHint,
                                'aria-hidden': 'true',
                                children: o
                            }),
                            g && (0, a.jsx)(m, {
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
        super(...e), N(this, 'inputRef', t.createRef()), N(this, 'handleRemove', () => {
            this.props.onChange(null);
        });
    }
}
N(T, 'defaultProps', {
    name: '',
    makeURL: e => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
}), n.Z = T;
