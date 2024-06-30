t.d(A, {
    Z: function () {
        return C;
    }
}), t(47120);
var n = t(735250), a = t(470079), r = t(120356), s = t.n(r), o = t(481060), l = t(813197), i = t(689938), d = t(713774);
let c = 'custom-image', u = a.forwardRef(function (e, A) {
        let {
                selectedImageName: t,
                onChange: a,
                disabled: r = !1,
                name: l,
                alt: i,
                data: c
            } = e, u = l === t, C = (0, o.useRadioItem)({
                isSelected: u,
                label: i
            }), g = r ? void 0 : () => {
                a(c, l);
            };
        return (0, n.jsx)(o.Clickable, {
            ref: A,
            className: s()(d.radioOption, {
                [d.selected]: u,
                [d.disabled]: r
            }),
            onClick: g,
            'aria-disabled': r,
            ...C,
            children: (0, n.jsx)('img', {
                src: c,
                alt: i,
                className: d.radioOptionImage
            })
        });
    });
function C(e) {
    let {
            presetImages: A,
            image: t,
            imageName: r,
            savedImageName: C,
            onChange: g,
            uploadButtonLabel: T = i.Z.Messages.UPLOAD_IMAGE,
            radioGroupAriaLabel: p = i.Z.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
            disabled: h = !1
        } = e, m = r === c, [I, U] = a.useState(m ? t : null), [f, v] = a.useState(null), q = a.useRef(null), E = a.useRef(null);
    a.useEffect(() => {
        C !== c && (U(null), v(null));
    }, [C]);
    let N = null != f ? i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({ filename: f }) : i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE, D = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: h
        }), O = () => {
            var e;
            return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        }, x = () => {
            r === c && g(A[0].data, A[0].name), U(null), v(null);
        };
    return a.useEffect(() => {
        if (m && null != f) {
            var e, A;
            null === (A = E.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus();
        }
    }, [
        m,
        f
    ]), (0, n.jsxs)('div', {
        className: d.imageSelectionContainer,
        children: [
            (0, n.jsx)(o.FocusRing, {
                within: !0,
                children: (0, n.jsxs)('div', {
                    className: s()(d.uploadButton, {
                        [d.disabled]: h,
                        [d.hidden]: null != I
                    }),
                    'aria-disabled': h,
                    children: [
                        (0, n.jsx)(o.ImagePlusIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-muted',
                            'aria-hidden': !0,
                            children: T
                        }),
                        (0, n.jsx)(l.ZP, {
                            ref: q,
                            tabIndex: 0,
                            onChange: (e, A) => {
                                null != A && (v(A.name), U(e), g(e, c));
                            },
                            'aria-label': T
                        })
                    ]
                })
            }),
            null != I && (0, n.jsxs)('div', {
                className: d.customImageActionContainer,
                children: [
                    (0, n.jsx)(o.Tooltip, {
                        text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
                        hideOnClick: !0,
                        children: e => (0, n.jsx)(o.Clickable, {
                            ...e,
                            className: d.customImageAction,
                            onClick: O,
                            'aria-label': i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({ filename: f }),
                            children: (0, n.jsx)(o.PencilIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: d.editIcon
                            })
                        })
                    }),
                    (0, n.jsx)(o.Tooltip, {
                        text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
                        hideOnClick: !0,
                        children: e => (0, n.jsx)(o.Clickable, {
                            ...e,
                            className: d.customImageAction,
                            onClick: x,
                            'aria-label': i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({ filename: f }),
                            children: (0, n.jsx)(o.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: d.deleteIcon
                            })
                        })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                'aria-label': p,
                ...D,
                className: d.radioGroup,
                children: [
                    null != I && (0, n.jsx)(u, {
                        ref: E,
                        selectedImageName: r,
                        onChange: g,
                        disabled: h,
                        name: c,
                        alt: N,
                        data: I
                    }),
                    A.map(e => (0, n.jsx)(u, {
                        selectedImageName: r,
                        onChange: g,
                        disabled: h,
                        ...e
                    }, e.name))
                ]
            })
        ]
    });
}
