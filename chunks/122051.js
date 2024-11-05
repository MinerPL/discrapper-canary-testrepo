t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(11265),
    d = t(863249),
    u = t(944163),
    m = t(246364),
    f = t(571728),
    h = t(755340),
    x = t(449226),
    p = t(388032),
    g = t(176981),
    C = t(13441);
function b(e) {
    let { guild: n, isExpanded: i, emptyFormFields: s, hasTermsField: o } = e,
        c = n.hasVerificationGate(),
        [u, m] = a.useState(c),
        f = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        h = async (e) => {
            try {
                m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
                m(u);
            }
        },
        b = (e) => {
            e && s
                ? (0, l.openModalLazy)(async () => {
                      let { ConfirmModal: n } = await Promise.resolve().then(t.bind(t, 481060));
                      return (t) =>
                          (0, r.jsx)(n, {
                              ...t,
                              header: p.intl.string(p.t.eSlxe3),
                              cancelText: p.intl.string(p.t.BvmRe3),
                              confirmText: p.intl.string(p.t.PYcfmp),
                              onConfirm: () => h(e),
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: p.intl.string(p.t.uknrnp)
                              })
                          });
                  })
                : h(e);
        },
        v = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e('80026'), t.e('36869')]).then(t.bind(t, 645264));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        guildId: n.id,
                        isPreview: !0
                    });
            });
        };
    return (0, r.jsxs)('div', {
        className: g.itemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: g.itemContent,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: p.intl.string(p.t.NEXim5)
                    }),
                    (i || (s && !u)) &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: p.intl.string(p.t['7W5uVl'])
                        }),
                    !i &&
                        (0, r.jsx)('div', {
                            className: C.pillRow,
                            children:
                                o &&
                                (0, r.jsxs)(l.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-xs/medium',
                                    className: g.valuePill,
                                    children: [
                                        (0, r.jsx)(l.BookCheckIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16
                                        }),
                                        p.intl.string(p.t.A2v22t)
                                    ]
                                })
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: C.previewAndEnable,
                children:
                    i || u || !s
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(l.Clickable, {
                                      onMouseDown: f,
                                      onMouseUp: f,
                                      onClick: (e) => {
                                          f(e), v();
                                      },
                                      children: (0, r.jsx)(l.Tooltip, {
                                          tooltipContentClassName: C.__invalid_tooltip,
                                          text: p.intl.string(p.t.SKNnqq),
                                          children: (e) =>
                                              (0, r.jsx)(l.EyeIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: C.previewIcon,
                                                  ...e
                                              })
                                      })
                                  }),
                                  (0, r.jsx)(x.Z, {
                                      checked: u,
                                      onChange: () => b(!u)
                                  })
                              ]
                          })
                        : (0, r.jsx)(l.Button, {
                              size: l.Button.Sizes.SMALL,
                              children: p.intl.string(p.t.oRs6mJ)
                          })
            })
        ]
    });
}
async function v(e, n) {
    await d.ZP.updateVerificationForm(e, n);
}
async function _(e, n) {
    await d.ZP.updateVerificationFormDescription(e, n);
}
function y(e) {
    var n, t, i;
    let { guild: l, isClanContext: x = !1, onFieldsSave: p, onDescriptionSave: y, verificationForm: T } = e,
        [I, j] = a.useState(x),
        N = a.useRef(!1),
        S = a.useCallback(() => {
            N.current = !0;
        }, []),
        E = null !== (n = (0, f.A)({ guildId: l.id })) && void 0 !== n ? n : 0,
        k = (0, o.e7)([u.Z], () => (null != T ? T : u.Z.get(l.id))),
        A = null !== (t = null == k ? void 0 : k.formFields) && void 0 !== t ? t : [];
    a.useEffect(() => {
        d.ZP.fetchVerificationForm(l.id);
    }, [l.id]);
    let w = null != k,
        M = !x;
    return (0, r.jsx)(c.Z, {
        renderHeader: M
            ? (0, r.jsx)(b, {
                  guild: l,
                  isExpanded: I,
                  emptyFormFields: (null == A ? void 0 : A.length) == null || (null == A ? void 0 : A.length) === 0,
                  hasTermsField: null == A ? void 0 : A.some((e) => e.field_type === m.QJ.TERMS)
              })
            : null,
        isExpanded: I,
        onExpand: () => j(!I),
        disableAnimation: x,
        disableBackground: !M,
        children: (0, r.jsx)('div', {
            className: s()(g.itemBodyContainer, {
                [g.noPadding]: !M,
                [C.rulesScreeningItemsNoBorder]: !M
            }),
            children:
                w &&
                (0, r.jsx)(h.Z, {
                    guild: l,
                    submittedGuildJoinRequestsCount: E,
                    formFields: A,
                    onFormFieldUpdate: S,
                    hideVerificationLevelField: !0,
                    isClanContext: x,
                    onFieldsSave: null != p ? p : v,
                    onDescriptionSave: null != y ? y : _,
                    formDescription: null !== (i = null == k ? void 0 : k.description) && void 0 !== i ? i : ''
                })
        })
    });
}
