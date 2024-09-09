t(47120);
var a = t(735250),
    r = t(470079),
    i = t(442837),
    s = t(481060),
    o = t(496675),
    l = t(246364),
    c = t(983736),
    d = t(5056),
    u = t(565321),
    m = t(297619),
    _ = t(456935),
    f = t(446945),
    C = t(700833),
    h = t(592286),
    x = t(981631),
    g = t(689938);
n.Z = function (e) {
    let { guild: n, submittedGuildJoinRequestsCount: t, onFormFieldUpdate: p, hideVerificationLevelField: T, isClanContext: E, formDescription: I, onFieldsSave: b, onDescriptionSave: N } = e,
        v = r.useRef(!1),
        [y, S] = r.useState(null),
        [A, M] = r.useState(e.formFields);
    r.useEffect(() => M(e.formFields), [e.formFields]);
    let j = r.useRef(e.formFields),
        R = r.useMemo(() => A.filter(c.kT), [A]),
        L = r.useMemo(() => A.filter(c._C), [A]),
        O = L.length,
        Z = r.useMemo(() => A.length === h.nx, [A]),
        k = r.useMemo(() => A.some(l.J), [A]),
        D = r.useMemo(() => A.some((e) => !(0, l.J)(e)), [A]),
        P = O > 0,
        w = n.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || E,
        F = r.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(g.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
        }, []),
        G = (0, i.e7)([o.Z], () => o.Z.can(x.Plq.MANAGE_GUILD, n)),
        B = r.useCallback(
            async (e) => {
                if (!v.current) {
                    (v.current = !0), E && (e = e.filter((e) => e.field_type !== l.QJ.TERMS));
                    try {
                        await b(n.id, e), p(), M(e), (j.current = e);
                    } catch (e) {
                        throw (M(j.current), e);
                    } finally {
                        null != y && S(null), (v.current = !1);
                    }
                }
            },
            [y, n.id, p, b, E]
        ),
        U = r.useCallback(
            async (e) => {
                let n = e.field_type === l.QJ.TERMS ? [e, ...A] : [...A, e];
                await B(n);
            },
            [A, B]
        ),
        H = r.useCallback(
            async (e, n) => {
                if (A[e] === n) return;
                let t = [...A];
                (t[e] = n), await B(t);
            },
            [A, B]
        ),
        V = r.useCallback(
            async (e, n, t) => {
                let a = A.indexOf(e),
                    r = [...A];
                if ((null != n && n !== a && (r.splice(a, 1), r.splice(n, 0, e), M(r)), t))
                    try {
                        await B(r), null !== y && S(null);
                    } catch (e) {
                        F();
                    }
                else y !== n && S(n);
            },
            [y, A, B, F]
        ),
        W = r.useCallback(
            async (e) => {
                try {
                    await B([...A.slice(0, e), ...A.slice(e + 1)]);
                } catch (e) {
                    F();
                }
            },
            [A, B, F]
        ),
        Y = G ? (E ? 'side' : 'footer') : 'none',
        K = (0, a.jsxs)(a.Fragment, {
            children: [
                !T && (0, a.jsx)(_.ZP, { guild: n }),
                (0, a.jsx)(u.Z, {
                    formDescription: I,
                    guildId: n.id,
                    onSave: N,
                    disable: !G
                }),
                G &&
                    !k &&
                    !Z &&
                    (0, a.jsx)(m.Z, {
                        addFormField: U,
                        guild: n
                    }),
                R.map((e) =>
                    (0, C.a0)({
                        dropHoveredIndex: y,
                        formField: e,
                        guild: n,
                        index: A.indexOf(e),
                        isDragEnabled: !1,
                        submittedGuildJoinRequestsCount: t,
                        removeFormField: W,
                        updateFormField: H,
                        updateFormFieldOrder: V,
                        canRemove: !0,
                        actionsLocation: Y
                    })
                )
            ]
        });
    return w
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  !E && K,
                  !D &&
                      (0, a.jsx)(d.Z, {
                          addFormField: U,
                          showManualApprovalWarning: !E && !P,
                          guild: n,
                          showHeader: !E
                      }),
                  L.map((e) =>
                      (0, C.a0)({
                          dropHoveredIndex: y,
                          formField: e,
                          guild: n,
                          index: A.indexOf(e),
                          isDragEnabled: P && G,
                          submittedGuildJoinRequestsCount: t,
                          removeFormField: W,
                          updateFormField: H,
                          updateFormFieldOrder: V,
                          canRemove: !(E && L.length <= 1) && G,
                          actionsLocation: Y
                      })
                  ),
                  D &&
                      !Z &&
                      G &&
                      (0, a.jsx)(f.Z, {
                          addFormField: U,
                          guild: n
                      })
              ]
          })
        : K;
};
