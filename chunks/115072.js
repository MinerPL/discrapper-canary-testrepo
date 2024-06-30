n.r(t), n.d(t, {
    default: function () {
        return C;
    }
}), n(47120);
var a = n(735250), r = n(470079), i = n(772848), o = n(442837), s = n(780384), l = n(481060), c = n(53281), m = n(476326), u = n(273031), d = n(898463), _ = n(210887), h = n(154921), p = n(404975), v = n(768581), I = n(358085), R = n(223356), x = n(225452), f = n(689938), T = n(803437), g = n(289575), E = n(371411);
let j = [
    'Android',
    'iOS',
    'Windows Mobile',
    'Windows',
    'Linux',
    'Mac OS X'
].map(e => ({
    label: e,
    value: e
}));
function C(e) {
    var t, C, O, P, N;
    let {
            transitionState: S,
            onClose: B
        } = e, M = r.useRef(null), b = r.useRef(null), [Z, y] = r.useState(''), [G, U] = r.useState(''), [L, A] = r.useState(), [D, w] = r.useState(''), [F, k] = r.useState([]), [V, Y] = r.useState(), [W, H] = r.useState(), [z, X] = r.useState(!1), [Q, q] = r.useState(''), [K, J] = r.useState(function (e) {
            switch (e) {
            case 'windows':
                return 'Windows';
            case 'macos':
                return 'Mac OS X';
            case 'linux':
                return 'Linux';
            }
            return '';
        }((0, I.getOS)())), [$, ee] = r.useState(''), [et, en] = r.useState(''), [ea, er] = r.useState(''), [ei, eo] = r.useState(''), [es, el] = r.useState(!1), [ec, em] = r.useState(!1), [eu, ed] = r.useState(!1), e_ = () => {
            null == B || B();
        }, eh = e => {
            k(F.filter(t => t.id !== e));
        };
    async function ep() {
        var e;
        if (ed(!1), '' === Z || null == L) {
            el(!0);
            return;
        }
        let t = null == V ? void 0 : null === (e = V.features) || void 0 === e ? void 0 : e.find(e => (0, R.pD)(e) === W);
        em(!0), el(!1);
        let r = (0, x.D)(F.map(e => {
                let {item: t} = e;
                return t;
            })), i = !0 === z ? {
                overridePlatformInformation: z,
                device: Q,
                operatingSystem: K,
                operatingSystemVersion: $,
                clientVersion: et,
                clientBuildNumber: ea,
                locale: ei
            } : { overridePlatformInformation: z }, o = await (0, R.ZD)({
                name: Z,
                description: G,
                priority: L,
                feature: t,
                url: D
            }, i, r).catch(() => ed(!0));
        em(!1), null != o && o.ok ? (window.open(o.body.permalink_url, '_blank'), e_(), (0, l.openModalLazy)(async () => {
            let {default: e} = await n.e('64648').then(n.bind(n, 81155));
            return t => (0, a.jsx)(e, {
                ...t,
                asanaTask: o.body
            });
        })) : ed(!0);
    }
    r.useEffect(() => {
        (async function e() {
            Y(await (0, R.WG)());
        }());
    }, []), r.useEffect(() => {
        if (F.length > 0) {
            var e;
            null === (e = b.current) || void 0 === e || e.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }
    }, [F]);
    let ev = (0, o.e7)([_.Z], () => _.Z.theme), eI = (0, s.wj)(ev) ? g : E;
    return (0, a.jsx)(l.ModalRoot, {
        className: T.modalRoot,
        transitionState: S,
        'aria-label': f.Z.Messages.SUBMIT_BUG,
        children: (0, a.jsx)(l.ModalContent, {
            className: T.modalContent,
            paddingFix: !1,
            children: (0, a.jsx)('div', {
                className: T.container,
                children: (0, a.jsx)(l.HeadingLevel, {
                    forceLevel: 1,
                    component: (0, a.jsx)('div', {
                        className: T.sidebarContainer,
                        children: (0, a.jsx)(h.Z, {
                            strong: !0,
                            color: h.Z.Colors.HEADER_PRIMARY,
                            size: h.Z.Sizes.SIZE_24,
                            children: (0, a.jsx)(l.H, { children: f.Z.Messages.BUG_REPORT_TITLE })
                        })
                    }),
                    children: (0, a.jsxs)('div', {
                        className: T.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: T.contentIcon,
                                alt: '',
                                src: eI
                            }),
                            (0, a.jsxs)('form', {
                                className: T.form,
                                onSubmit: ep,
                                children: [
                                    (0, a.jsx)(l.FormItem, {
                                        error: es && '' === Z ? f.Z.Messages.REQUIRED : null,
                                        title: f.Z.Messages.BUG_REPORT_NAME,
                                        className: T.formInput,
                                        children: (0, a.jsx)(l.TextInput, {
                                            placeholder: 'Something is broken on this screen.',
                                            type: 'text',
                                            value: Z,
                                            maxLength: 100,
                                            onChange: y
                                        })
                                    }),
                                    (0, a.jsxs)(l.FormItem, {
                                        title: f.Z.Messages.BUG_REPORT_DESCRIPTION,
                                        className: T.formInput,
                                        children: [
                                            (0, a.jsx)(l.TextArea, {
                                                placeholder: 'What did you expect to see?',
                                                value: G,
                                                onChange: U
                                            }),
                                            (0, a.jsx)(l.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'info-help-text',
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)(l.FormItem, {
                                        error: es && void 0 === L ? f.Z.Messages.REQUIRED : null,
                                        title: f.Z.Messages.BUG_REPORT_PRIORITY,
                                        className: T.formInput,
                                        children: (0, a.jsx)(l.SingleSelect, {
                                            renderOptionLabel: e => function (e) {
                                                let t = e.priority;
                                                return (0, a.jsxs)('div', {
                                                    className: T.formPriorityImageContainer,
                                                    children: [
                                                        (0, a.jsxs)('div', {
                                                            className: T.formPriorityTitleContainer,
                                                            children: [
                                                                (0, a.jsx)('img', {
                                                                    alt: '',
                                                                    className: T.formPriorityImage,
                                                                    src: (0, v.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }),
                                                                (0, a.jsx)(l.Text, {
                                                                    color: 'header-primary',
                                                                    variant: 'text-sm/semibold',
                                                                    className: T.formPriorityTitle,
                                                                    children: t.title
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsx)(l.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            className: T.formPriorityDescription,
                                                            children: t.description
                                                        })
                                                    ]
                                                });
                                            }(e),
                                            onChange: A,
                                            options: (0, R.Tj)().map(e => ({
                                                priority: e,
                                                value: e.value,
                                                label: e.title
                                            })),
                                            value: L,
                                            maxVisibleItems: 3,
                                            closeOnSelect: !0
                                        })
                                    }),
                                    (0, a.jsx)(l.FormItem, {
                                        title: f.Z.Messages.BUG_REPORT_FEATURE_AREA,
                                        className: T.formInput,
                                        children: (0, a.jsx)(l.SearchableSelect, {
                                            value: W,
                                            options: null !== (N = null == (t = V) ? void 0 : null === (P = t.features) || void 0 === P ? void 0 : null === (O = P.filter(e => '' !== (0, R.pD)(e))) || void 0 === O ? void 0 : null === (C = O.map(e => {
                                                var t;
                                                return {
                                                    label: null !== (t = e.name) && void 0 !== t ? t : '',
                                                    value: (0, R.pD)(e)
                                                };
                                            })) || void 0 === C ? void 0 : C.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== N ? N : [],
                                            isDisabled: null == V,
                                            onChange: e => H(e)
                                        })
                                    }),
                                    (0, a.jsx)(l.FormItem, {
                                        title: f.Z.Messages.BUG_REPORT_URL,
                                        className: T.formInput,
                                        children: (0, a.jsx)(l.TextInput, {
                                            placeholder: f.Z.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                                            type: 'text',
                                            value: D,
                                            maxLength: 5000,
                                            onChange: w
                                        })
                                    }),
                                    (0, a.jsx)(l.FormItem, {
                                        className: T.formInput,
                                        children: (0, a.jsx)(l.Checkbox, {
                                            value: z,
                                            onChange: (e, t) => X(t),
                                            children: (0, a.jsx)(l.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'info-help-text',
                                                children: f.Z.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                                            })
                                        })
                                    }),
                                    z ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_DEVICE,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.TextInput, {
                                                    placeholder: 'Device',
                                                    value: Q,
                                                    onChange: e => q(e)
                                                })
                                            }),
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_OS,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.SingleSelect, {
                                                    value: K,
                                                    options: j,
                                                    onChange: e => J(e)
                                                })
                                            }),
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_OS_VERSION,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.TextInput, {
                                                    placeholder: 'Operating System Version',
                                                    value: $,
                                                    onChange: e => ee(e)
                                                })
                                            }),
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_CLIENT_VERSION,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.TextInput, {
                                                    placeholder: 'Client Version',
                                                    value: et,
                                                    onChange: e => en(e)
                                                })
                                            }),
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.TextInput, {
                                                    placeholder: 'Client Build Number',
                                                    value: ea,
                                                    onChange: e => er(e)
                                                })
                                            }),
                                            (0, a.jsx)(l.FormItem, {
                                                title: f.Z.Messages.BUG_REPORT_LOCALE,
                                                className: T.formInput,
                                                children: (0, a.jsx)(l.TextInput, {
                                                    placeholder: 'Locale',
                                                    value: ei,
                                                    onChange: e => eo(e)
                                                })
                                            })
                                        ]
                                    }) : null,
                                    (0, a.jsxs)(l.Button, {
                                        className: T.uploadButton,
                                        children: [
                                            f.Z.Messages.BUG_REPORT_ADD_ATTACHMENTS,
                                            (0, a.jsx)(c.Z, {
                                                ref: M,
                                                onChange: e => {
                                                    var t, n;
                                                    (null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null && k([
                                                        ...F,
                                                        ...Array.from(e.currentTarget.files).map(e => new m.ZP({
                                                            id: (0, i.Z)(),
                                                            file: e,
                                                            platform: m.ow.WEB
                                                        }))
                                                    ]);
                                                },
                                                multiple: !0
                                            })
                                        ]
                                    }),
                                    F.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: T.imageOptionsContainer,
                                                children: (0, a.jsx)(l.FormTitle, { children: 'Preview' })
                                            }),
                                            (0, a.jsx)('div', {
                                                ref: b,
                                                className: T.attachmentsGrid,
                                                children: F.length > 0 && F.map(e => (0, a.jsxs)('div', {
                                                    className: T.attachmentsGridItem,
                                                    children: [
                                                        (0, a.jsx)(l.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: e.filename
                                                        }),
                                                        (0, a.jsxs)('div', {
                                                            className: T.attachmentContainer,
                                                            children: [
                                                                (0, a.jsx)(d.r, { upload: e }),
                                                                (0, a.jsx)('div', {
                                                                    className: T.toolBar,
                                                                    children: (0, a.jsx)(p.ZP, {
                                                                        children: (0, a.jsx)(u.Z, {
                                                                            tooltip: f.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                                                            onClick: () => eh(e.id),
                                                                            dangerous: !0,
                                                                            children: (0, a.jsx)(l.TrashIcon, {
                                                                                size: 'md',
                                                                                color: 'currentColor'
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, e.id))
                                            })
                                        ]
                                    }) : null,
                                    eu ? (0, a.jsx)(l.Text, {
                                        color: 'text-danger',
                                        variant: 'text-sm/normal',
                                        children: 'Something went wrong, try again!'
                                    }) : null
                                ]
                            }),
                            (0, a.jsxs)(l.ModalFooter, {
                                className: T.submitContainer,
                                children: [
                                    (0, a.jsx)(l.Button, {
                                        className: T.formButton,
                                        look: l.ButtonLooks.BLANK,
                                        onClick: e_,
                                        children: (0, a.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            children: f.Z.Messages.CANCEL
                                        })
                                    }),
                                    (0, a.jsx)(l.Button, {
                                        submitting: ec,
                                        className: T.formButton,
                                        onClick: ep,
                                        children: 'Submit and Open Report'
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
