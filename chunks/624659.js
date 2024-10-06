n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    i = n.n(r),
    c = n(481060),
    u = n(110924),
    E = n(600164),
    d = n(313201),
    _ = n(237617),
    b = n(572539),
    C = n(111810),
    m = n(63063),
    I = n(957115),
    f = n(531578),
    h = n(689938),
    x = n(214859),
    A = n(112003);
function N() {
    return (0, a.jsx)(c.Text, {
        className: x.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: m.Z.getSubmitRequestURL() })
    });
}
function D(e) {
    var t, n;
    let { header: s, body: r, problems: m, transitionState: D, feedbackProblems: T = {}, otherKey: L, hasCloseButton: B, onSubmit: p, onClose: R, canDismissForever: S = !0, showHelpdeskLink: Z = !0 } = e,
        M = (0, u.Z)(m),
        [O, g] = o.useState(!1),
        [j, v] = o.useState(null),
        [F, U] = o.useState(i().shuffle(m)),
        [V, k] = o.useState(''),
        [G, y] = o.useState(!1),
        K = (0, d.Dt)(),
        H = (0, _.Z)(O),
        P = (0, _.Z)(j),
        z = (0, _.Z)(p),
        w = (0, _.Z)(V),
        W = (0, _.Z)(G),
        Y = null != j ? T[j] : null,
        q = null != Y;
    return (
        o.useEffect(() => {
            !i().isEqual(M, m) && U((0, I.B)(m, L));
        }, [m, M, L]),
        o.useEffect(
            () => () => {
                z.current({
                    problem: P.current,
                    dontShowAgain: H.current,
                    feedback: w.current,
                    closeClicked: W.current
                });
            },
            []
        ),
        (0, a.jsxs)(c.ModalRoot, {
            transitionState: D,
            'aria-labelledby': K,
            children: [
                (0, a.jsx)(C.Z, {}),
                (0, a.jsxs)(c.ModalHeader, {
                    separator: !1,
                    className: l()(x.headerContainer, A.headerContainer),
                    children: [
                        (0, a.jsx)(c.Heading, {
                            id: K,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: x.header,
                            children: s
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: l()(x.ratingBody, A.headerBody),
                            children: null !== (t = null == Y ? void 0 : Y.subheader) && void 0 !== t ? t : r
                        }),
                        B
                            ? (0, a.jsx)(c.ModalCloseButton, {
                                  className: x.modalCloseButton,
                                  onClick: function () {
                                      y(!0), R();
                                  }
                              })
                            : null
                    ]
                }),
                (0, a.jsxs)(c.ModalContent, {
                    className: A.modalContent,
                    children: [
                        q
                            ? null
                            : (0, a.jsx)(c.FormItem, {
                                  className: x.problemInfo,
                                  children: (0, a.jsx)(b.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          v(t), !Object.keys(T).includes(t) && R();
                                      }
                                  })
                              }),
                        q
                            ? (0, a.jsxs)(c.FormItem, {
                                  className: x.problemInfo,
                                  children: [
                                      (0, a.jsx)(c.TextArea, {
                                          value: V,
                                          maxLength: f.iF,
                                          onChange: k,
                                          className: A.textArea,
                                          placeholder: null !== (n = Y.hint) && void 0 !== n ? n : h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE
                                      }),
                                      Z ? (0, a.jsx)(N, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                S || q
                    ? (0, a.jsx)(c.ModalFooter, {
                          className: l()(x.footer, q ? A.submitFooter : A.modalFooter),
                          direction: E.Z.Direction.HORIZONTAL,
                          children: q
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Button, {
                                            className: A.backButton,
                                            size: c.Button.Sizes.NONE,
                                            look: c.Button.Looks.LINK,
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                v(null), k('');
                                            },
                                            children: h.Z.Messages.BACK
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            size: c.Button.Sizes.SMALL,
                                            onClick: R,
                                            children: h.Z.Messages.SUBMIT
                                        })
                                    ]
                                })
                              : S
                                ? (0, a.jsx)(c.Checkbox, {
                                      size: 24,
                                      type: c.Checkbox.Types.INVERTED,
                                      value: O,
                                      onChange: () => g(!O),
                                      children: (0, a.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: h.Z.Messages.FEEDBACK_DONT_SHOW_AGAIN
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
