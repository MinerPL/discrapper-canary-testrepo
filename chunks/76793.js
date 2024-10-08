t.d(s, {
    Z: function () {
        return p;
    },
    q: function () {
        return h;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(232567),
    l = t(700582),
    c = t(718629),
    d = t(615830),
    _ = t(630759),
    u = t(931500),
    E = t(921157),
    T = t(171368),
    S = t(594174),
    I = t(51144),
    N = t(689938),
    A = t(8007),
    C = t(113207);
function m(e) {
    let { userId: s, count: t } = e,
        c = (0, i.e7)([S.default], () => S.default.getUser(s)),
        d = I.ZP.getFormattedName(c),
        u = a.useCallback(() => {
            (0, _.Zn)(s);
        }, [s]),
        E = a.useCallback(() => (0, T.openUserProfileModal)({ userId: s }), [s]);
    return (
        a.useEffect(() => {
            (0, o.PR)(s);
        }, [s]),
        (0, n.jsxs)('div', {
            className: A.section,
            children: [
                null != c &&
                    (0, n.jsx)(l.Z, {
                        className: A.avatar,
                        user: c,
                        size: r.AvatarSizes.SIZE_40
                    }),
                (0, n.jsxs)('div', {
                    className: A.text,
                    children: [
                        (0, n.jsx)(r.Clickable, {
                            className: A.username,
                            onClick: E,
                            children: (0, n.jsx)(r.Text, {
                                variant: 'text-md/semibold',
                                color: 'interactive-active',
                                children: d
                            })
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: N.Z.Messages.E2EE_DEVICES_COUNT.format({ count: t })
                        })
                    ]
                }),
                (0, n.jsx)(r.Clickable, {
                    onClick: u,
                    className: A.sectionIconContainer,
                    children: (0, n.jsx)(r.TrashIcon, { size: 'xs' })
                })
            ]
        })
    );
}
function g(e) {
    let { className: s, userId: t, verification: i, index: o } = e,
        l = (0, _.bo)(i.timestamp),
        c = a.useCallback(() => {
            (0, _.ZU)(t, i.verifiedKey);
        }, [i.verifiedKey, t]);
    return (0, n.jsxs)('div', {
        className: s,
        children: [
            (0, n.jsxs)('div', {
                className: A.text,
                children: [
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        color: 'interactive-active',
                        children: N.Z.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({ index: o + 1 })
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: l
                    })
                ]
            }),
            (0, n.jsx)(r.Clickable, {
                className: A.icon,
                onClick: c,
                children: (0, n.jsx)(r.XSmallIcon, {
                    size: 'md',
                    color: r.tokens.colors.INTERACTIVE_NORMAL
                })
            })
        ]
    });
}
function h(e) {
    let { userId: s } = e,
        t = (0, u._)(s);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m, {
                userId: s,
                count: t.length
            }),
            t.map((e, i) =>
                (0, n.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, n.jsx)(g, {
                                className: A.row,
                                userId: s,
                                index: i,
                                verification: e
                            }),
                            i !== t.length - 1 && (0, n.jsx)('div', { className: A.divider })
                        ]
                    },
                    ''.concat(i, '-').concat(e.timestamp)
                )
            )
        ]
    });
}
function O(e) {
    let { userIds: s } = e;
    return 0 === s.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)(r.FormItem, {
                      className: C.marginBottom20,
                      children: [
                          (0, n.jsx)(r.FormTitle, {
                              tag: r.FormTitleTags.H5,
                              className: C.marginBottom8,
                              children: N.Z.Messages.E2EE_VERIFIED_DEVICES
                          }),
                          (0, n.jsx)(r.FormText, {
                              type: r.FormTextTypes.DESCRIPTION,
                              children: N.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({ helpArticle: (0, _.pL)() })
                          })
                      ]
                  }),
                  s.map((e) =>
                      (0, n.jsx)(
                          'div',
                          {
                              className: A.item,
                              children: (0, n.jsx)(h, { userId: e })
                          },
                          e
                      )
                  )
              ]
          });
}
function p() {
    let e = (0, i.e7)([d.Z], () => d.Z.getPersistentCodesEnabled()),
        s = (0, E.s)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.FormSection, {
                tag: r.FormTitleTags.H1,
                title: N.Z.Messages.E2EE_END_TO_END_ENCRYPTION,
                children: [
                    (0, n.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: C.marginBottom20,
                        children: N.Z.Messages.E2EE_SETTINGS_SUBTITLE.format({ helpArticle: (0, _.uV)() })
                    }),
                    (0, n.jsxs)(r.FormItem, {
                        children: [
                            (0, n.jsx)(r.FormTitle, {
                                tag: r.FormTitleTags.H5,
                                className: C.marginBottom8,
                                children: N.Z.Messages.E2EE_VERIFICATION_CODES
                            }),
                            (0, n.jsx)(r.FormSwitch, {
                                hideBorder: 0 === s.length,
                                value: e,
                                note: N.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({ helpArticle: (0, _.aZ)() }),
                                onChange: c.Z.updatePersistentCodesEnabled,
                                children: N.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(O, { userIds: s })
        ]
    });
}
