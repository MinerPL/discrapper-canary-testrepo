n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120),
    n(733860);
var a = n(735250),
    s = n(470079),
    r = n(120356),
    l = n.n(r),
    i = n(512722),
    o = n.n(i),
    c = n(143927),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    _ = n(481060),
    g = n(430742),
    x = n(166459),
    f = n(541716),
    C = n(67158),
    p = n(893718),
    T = n(472243),
    I = n(436660),
    E = n(284182),
    N = n(795639),
    b = n(957730),
    v = n(25015),
    S = n(252032),
    M = n(913663),
    A = n(268350),
    j = n(456077),
    R = n(488131),
    O = n(602034),
    Z = n(23750),
    L = n(703558),
    P = n(496675),
    w = n(300429),
    y = n(117530),
    D = n(594174),
    F = n(459273),
    U = n(838440),
    k = n(127654),
    H = n(681154),
    B = n(883429),
    G = n(945141),
    z = n(456269),
    V = n(103921),
    W = n(228392),
    q = n(259637),
    K = n(76451),
    Y = n(470623),
    X = n(479099),
    J = n(399894),
    Q = n(81490),
    $ = n(710352),
    ee = n(981631),
    et = n(176505),
    en = n(689938),
    ea = n(605996);
let es = f.I.CREATE_FORUM_POST;
function er(e) {
    let { parentChannel: t, isSearchLoading: n, onChange: r, canCreatePost: i, inputRef: o } = e,
        {
            textAreaState: d,
            formOpen: u,
            previewing: m
        } = (0, Y.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: a } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: a
            };
        }, c.Z),
        [g, x] = s.useState(null),
        f = s.useContext(F.oo),
        C = s.useCallback(() => {
            f.bumpDispatchPriority();
        }, [f]),
        p = (0, h.e7)([P.Z], () => P.Z.can(ee.Plq.ATTACH_FILES, t)),
        T = (0, h.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)),
        I = u && p && i,
        v = (null == t ? void 0 : t.isMediaChannel()) === !0,
        S = (function (e, t) {
            let n = (0, Y.AF)(),
                a = (0, z.ql)(e);
            return s.useCallback(() => {
                let { formOpen: s, setFormOpenFromUserAction: r, name: l, textAreaState: i, hasClickedForm: o } = n.getState();
                !s &&
                    (setTimeout(() => {
                        if (t.current instanceof _.TextAreaAutosize) {
                            var e, n, a, s;
                            null === (n = t.current) || void 0 === n || null === (e = n._textArea) || void 0 === e || e.setSelectionRange(l.length, l.length), null === (s = t.current) || void 0 === s || null === (a = s._textArea) || void 0 === a || a.focus();
                        }
                    }, 0),
                    ((o && l.length > 0) || (i.textValue.trim().length > 0 && i.textValue.trim() !== a) || y.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) && r());
            }, [n, e.id, a, t]);
        })(t, o),
        j = (function (e) {
            let { formOpen: t } = (0, Y.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.Z),
                n = (0, Y.AF)(),
                a = (0, O.r)({ parentChannel: e });
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let r = s.useCallback(
                (t, a, s) => {
                    let { name: r, textAreaState: l } = n.getState();
                    null == t && (t = l.textValue), (t = t.trim());
                    let { content: i } = b.ZP.parse(e, t);
                    if (((t = i), null == a || 0 === a.length)) {
                        var o;
                        a = null === (o = M.Z.getStickerPreview(e.id, es.drafts.type)) || void 0 === o ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == s || 0 === s.length) && (s = y.Z.getUploads(e.id, L.d.FirstThreadMessage)), null != s && s.length > 0 && e.isMediaChannel())) {
                        let e = s.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = s[e];
                            s.splice(e, 1), s.unshift(t);
                        }
                    }
                    let c = 0 === r.length,
                        d = (null == t || 0 === t.length) && (null == a || 0 === a.length) && 0 === s.length;
                    return {
                        content: t,
                        stickers: a,
                        uploads: s,
                        hasNameError: c,
                        hasMessageError: d
                    };
                },
                [e, n]
            );
            return s.useCallback(
                async (t, s, l) => {
                    let { setNameError: i, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: _, setGuidelinesOpen: g } = n.getState(),
                        x = G.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, W.P_)({
                                guildId: e.guild_id,
                                channelId: e.id
                            }),
                            !x && n.getState().setGuidelinesOpen(!0),
                            _(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        );
                    let { content: f, stickers: C, uploads: p, hasNameError: T, hasMessageError: I } = r(t, s, l);
                    if ((i(T ? (0, H.V_)() : null), o(I ? (0, H.T4)() : null), T || I))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, U.v)({
                            content: f,
                            stickers: C,
                            uploads: p,
                            type: es,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await a(f, C, p);
                        return (
                            (0, R.ok)(n),
                            B.Z.resort(e.id),
                            (0, A.qB)(e.id, es.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            G.Z.markAsSeen(e.id),
                            g(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var E, N;
                        return (
                            (null === (E = t.body) || void 0 === E ? void 0 : E.code) === ee.evJ.AUTOMOD_TITLE_BLOCKED ? i((0, H.Gx)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === ee.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, H.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [a, r, e, n]
            );
        })(t);
    return (
        s.useLayoutEffect(r, [u, d, T, r]),
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)('div', {
                'aria-label': i ? en.Z.Messages.NEW_FORUM_POST : en.Z.Messages.SEARCH,
                className: l()(ea.container, { [ea.collapsed]: !u }),
                onClick: !u && i ? S : void 0,
                children: (0, a.jsxs)('form', {
                    onMouseDown: C,
                    onFocus: C,
                    onSubmit: (e) => {
                        if ((e.preventDefault(), !!i)) j();
                    },
                    children: [
                        (0, a.jsxs)('div', {
                            className: ea.formContainer,
                            children: [
                                (0, a.jsx)(el, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: o
                                }),
                                (0, a.jsxs)('div', {
                                    className: m ? ea.previewForm : ea.form,
                                    children: [
                                        (0, a.jsx)(ei, {
                                            editorRef: g,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            inputRef: o,
                                            canCreatePost: i
                                        }),
                                        u &&
                                            (0, a.jsx)(ed, {
                                                editorRef: g,
                                                setEditorRef: x,
                                                parentChannel: t,
                                                submit: j,
                                                disabled: !i
                                            }),
                                        m && (0, a.jsx)(eu, {})
                                    ]
                                }),
                                I && (v ? (0, a.jsx)(N._, { parentChannel: t }) : (0, a.jsx)(K.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: ea.form,
                            children: [
                                I && v && (0, a.jsx)(E.Z, { parentChannel: t }),
                                u &&
                                    (0, a.jsx)(eh, {
                                        className: ea.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: i
                                    })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
let el = s.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: r } = e,
            {
                formOpen: l,
                name: i,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, Y.xH)((e) => {
                let { formOpen: t, nameError: n, name: a, previewing: s, textAreaState: r, hasClickedForm: l, submitting: i } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: r,
                    previewing: s,
                    hasClickedForm: l,
                    submitting: i
                };
            }, c.Z),
            m = (0, Y.AF)(),
            h = (0, z.ql)(t),
            f = s.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    g.Z.clearDraft(t.id, L.d.ThreadSettings),
                    g.Z.clearDraft(t.id, L.d.FirstThreadMessage),
                    x.Z.clearAll(t.id, L.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null === (e = r.current) || void 0 === e || e.blur(),
                    (0, W.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    });
            }, [m, t.id, t.guild_id, r]),
            C = s.useMemo(() => {
                if (n && !l) return (0, a.jsx)(ef, {});
                if (!n && !l && (0 === o.textValue.trim().length || o.textValue.trim() === h))
                    return (0, a.jsx)(_.MagnifyingGlassIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: ea.searchIcon
                    });
                if (!l && (i.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || y.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) && d)
                    return (0, a.jsx)(_.PencilIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: ea.pencilIcon
                    });
                else
                    return u
                        ? (0, a.jsx)(_.CircleXIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ea.closeIconDisabled
                          })
                        : (0, a.jsx)(_.Tooltip, {
                              text: en.Z.Messages.FORUM_CLEAR_ALL,
                              children: (e) =>
                                  (0, a.jsx)(_.Clickable, {
                                      ...e,
                                      onClick: f,
                                      children: (0, a.jsx)(_.CircleXIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: ea.closeIcon
                                      })
                                  })
                          });
            }, [n, l, d, i, o.textValue, f, t.id, h, u]);
        return (0, a.jsx)('div', {
            className: ea.prefixElement,
            children: C
        });
    }),
    ei = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: r, editorRef: l } = e,
            {
                formOpen: i,
                nameError: d,
                name: u,
                textAreaState: m,
                previewing: g
            } = (0, Y.xH)((e) => {
                let { formOpen: t, nameError: n, name: a, previewing: s, textAreaState: r, hasClickedForm: l, submitting: i } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: a,
                    textAreaState: r,
                    previewing: s,
                    hasClickedForm: l,
                    submitting: i
                };
            }, c.Z),
            x = (0, Y.AF)(),
            f = null != t.topic && 0 !== t.topic.length,
            C = G.Z.hasSeen(t.id),
            p = (0, z.ql)(t),
            T = (0, h.e7)([D.default], () => D.default.getCurrentUser());
        o()(null != T, 'current user cannot be null');
        (0, F.yp)({
            event: ee.CkL.FOCUS_COMPOSER_TITLE,
            handler: () => {
                var e;
                let t = n.current instanceof _.TextAreaAutosize ? (null === (e = n.current) || void 0 === e ? void 0 : e._textArea) : n.current;
                null == t || t.focus(), x.getState().setTitleFocused(!0), x.getState().setFormOpen(!0), x.getState().setHasClickedForm(!0);
            }
        });
        let I = s.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, k.d)([n], t, L.d.FirstThreadMessage), x.getState().setFormOpenFromUserAction());
                },
                [t, x]
            ),
            E = (0, H.Op)(d, { content: u });
        return (0, a.jsxs)('div', {
            className: ea.titleContainer,
            onPaste: I,
            children: [
                i && g
                    ? (0, a.jsx)(_.Heading, {
                          variant: 'heading-md/semibold',
                          className: ea.title,
                          children: u
                      })
                    : (0, a.jsx)(_.TextArea, {
                          value: u,
                          placeholder: r ? (i || (m.textValue.length > 0 && m.textValue.trim() !== p) ? en.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : en.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH) : en.Z.Messages.SEARCH,
                          flex: !0,
                          autosize: i,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: ee.HN8,
                          onChange: (e) => {
                              let n = (0, j.Z)(e, !1);
                              x.getState().setName(n);
                              let a = 0 === n.trim().length,
                                  s = 0 === m.textValue.trim().length,
                                  r = m.textValue.trim() === p;
                              a && (s || r) && x.getState().setHasClickedForm(!1), !i && B.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              x.getState().setTitleFocused(!0), x.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              x.getState().setTitleFocused(!1);
                              let e = (0, j.Z)(u, !0);
                              e !== u && (x.getState().setName(e), !i && B.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var a, s;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  i && u.length > 0
                                      ? null == l || l.focus()
                                      : r &&
                                        e.shiftKey &&
                                        ((0, W.nH)({
                                            guildId: t.guild_id,
                                            channelId: t.id
                                        }),
                                        f && !C && x.getState().setGuidelinesOpen(!0),
                                        x.getState().setFormOpenFromUserAction(),
                                        u.trim().length > 0 && (x.getState().setBodyFocused(!0), null == l || l.focus())));
                              let o = n.current instanceof _.TextAreaAutosize ? (null === (a = n.current) || void 0 === a ? void 0 : a._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) o.setSelectionRange(0, 0);
                                  else {
                                      let e = u.length;
                                      o.setSelectionRange(e, e);
                                  }
                              }
                              'Escape' === e.key && !x.getState().submitting && (null === (s = n.current) || void 0 === s || s.blur(), x.getState().setFormOpen(!1), x.getState().setTitleFocused(!1), x.getState().setBodyFocused(!1), x.getState().setPreviewing(!1));
                          },
                          error: E,
                          className: ea.title,
                          inputRef: n
                      }),
                i
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(eo, { parentChannel: t }),
                              (0, a.jsx)(e_, {
                                  parentChannel: t,
                                  canCreatePost: r
                              })
                          ]
                      })
            ]
        });
    });
function eo(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, Y.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }),
        s = (0, Y.AF)(),
        r = null != t.topic && 0 !== t.topic.length,
        i = () => {
            s.getState().setGuidelinesOpen(!n);
        };
    return r
        ? (0, a.jsx)(_.Tooltip, {
              text: en.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
              children: (e) =>
                  (0, a.jsx)(_.Clickable, {
                      ...e,
                      onClick: i,
                      className: l()(ea.forumPostFormButton, { [ea.forumPostFormButtonActive]: n }),
                      children: (0, a.jsx)(_.BookCheckIcon, {
                          size: 'md',
                          color: 'currentColor',
                          ...e
                      })
                  })
          })
        : null;
}
let ec = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            s = new Z.ZP({
                channelId: t.id,
                content: n
            }),
            { content: r } = (0, v.Z)(s, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0
            }),
            i = (0, S.Z)(
                {
                    message: s,
                    channel: t
                },
                r,
                !1
            );
        return (0, a.jsx)('div', {
            className: l()(ea.channelTextAreaInner, ea.previewTextArea),
            children: i
        });
    }),
    ed = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: r = !1, editorRef: i, setEditorRef: d } = e,
            u = (0, h.e7)([D.default], () => D.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: g,
                textAreaState: x,
                bodyFocused: f,
                formOpen: C
            } = (0, Y.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: a, bodyFocused: s, formOpen: r } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: a,
                    bodyFocused: s,
                    formOpen: r
                };
            }, c.Z),
            T = (0, Y.AF)();
        s.useEffect(
            () => () =>
                (0, W.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let E = s.useCallback(() => {
                T.getState().setBodyFocused(!0);
            }, [T]),
            N = s.useCallback(() => {
                T.getState().setBodyFocused(!1);
            }, [T]),
            b = s.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: a } = T.getState();
                    a({
                        textValue: t,
                        richValue: n
                    });
                },
                [T]
            ),
            v = s.useCallback(
                (e) => {
                    let { value: t, uploads: a, stickers: s } = e;
                    return n(t, s, a);
                },
                [n]
            );
        (0, F.yp)({
            event: ee.CkL.TEXTAREA_FOCUS,
            handler: E
        }),
            (0, F.yp)({
                event: ee.CkL.TEXTAREA_BLUR,
                handler: N
            });
        let S = (0, H.Op)(m, { content: x.textValue });
        return (0, a.jsx)('div', {
            className: ea.bodyContainer,
            children: (0, a.jsxs)('div', {
                className: ea.contentContainer,
                children: [
                    g
                        ? (0, a.jsx)(ec, {
                              parentChannel: t,
                              textValue: x.textValue
                          })
                        : (0, a.jsx)('div', {
                              onClick: E,
                              children: (0, a.jsx)(p.Z, {
                                  type: es,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: en.Z.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: f,
                                  className: ea.channelTextArea,
                                  innerClassName: l()(ea.channelTextAreaInner, { [ea.channelTextAreaInnerError]: null != S }),
                                  onChange: b,
                                  onSubmit: v,
                                  promptToUpload: k.d,
                                  disabled: r,
                                  onKeyDown: (e) => {
                                      if ((('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), 'Home' === e.key || 'End' === e.key)) {
                                          if (null == i) return;
                                          e.preventDefault(), e.stopPropagation();
                                          let t = i.getSlateEditor();
                                          if (null == t) return;
                                          'Home' === e.key ? I.Q.resetSelectionToStart(t) : I.Q.resetSelectionToEnd(t);
                                      }
                                      C && 'Escape' === e.key && !T.getState().submitting && (null == i || i.blur(), T.getState().setFormOpen(!1), T.getState().setTitleFocused(!1), T.getState().setBodyFocused(!1), T.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, a.jsx)(_.InputError, { error: S })
                ]
            })
        });
    });
function eu() {
    return (0, a.jsx)('div', {
        className: ea.previewModeIndicator,
        children: (0, a.jsx)(_.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: en.Z.Messages.PREVIEW_MODE
        })
    });
}
function em() {
    let e = (0, V.C)(),
        { previewing: t } = (0, Y.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }),
        n = (0, Y.AF)(),
        r = s.useCallback(() => {
            n.getState().setPreviewing(!t), (0, W.nE)();
        }, [t, n]);
    return e
        ? (0, a.jsx)(_.Tooltip, {
              text: t ? en.Z.Messages.EXIT_PREVIEW : en.Z.Messages.PREVIEW,
              children: (e) =>
                  (0, a.jsx)(_.Clickable, {
                      ...e,
                      onClick: r,
                      className: l()(ea.forumPostFormButton, { [ea.forumPostFormButtonActive]: t }),
                      children: t
                          ? (0, a.jsx)(_.EyeSlashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...e
                            })
                          : (0, a.jsx)(_.EyeIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...e
                            })
                  })
          })
        : null;
}
let eh = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: r } = e,
        {
            textAreaState: l,
            appliedTags: i,
            name: o
        } = (0, Y.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: a } = e;
            return {
                textAreaState: t,
                appliedTags: n,
                name: a
            };
        }),
        { rateLimitPerUser: c } = t,
        d = c > 0,
        u = (0, h.e7)([w.Z], () => w.Z.getSlowmodeCooldownGuess(t.id, w.S.CreateThread)),
        m = (0, h.e7)([P.Z], () => P.Z.can(ee.Plq.MANAGE_THREADS, t) || P.Z.can(ee.Plq.MANAGE_CHANNELS, t)),
        g = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === i.size && o.length > 0 && l.textValue.length > 0,
        x = (0, Y.AF)(),
        f = s.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        p = s.useMemo(() => '' !== o.trim() && '' !== l.textValue.trim(), [o, l.textValue]);
    return (
        s.useEffect(() => {
            !p && x.getState().setPreviewing(!1);
        }, [p, x]),
        (0, a.jsxs)('div', {
            className: r,
            children: [
                (0, a.jsx)(ex, { parentChannel: t }),
                (0, a.jsx)('div', { className: ea.tagsDivider }),
                (0, a.jsxs)('div', {
                    className: ea.controlsContainer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: ea.controls,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: ea.wrappedControls,
                                    children: [
                                        g &&
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-danger',
                                                children: en.Z.Messages.FORUM_POST_TAG_REQUIRED_ERROR
                                            }),
                                        (0, a.jsx)(T.Z, {
                                            type: es,
                                            textValue: l.textValue,
                                            className: ea.characterCount
                                        }),
                                        d &&
                                            (0, a.jsx)(J.Z, {
                                                rateLimitPerUser: c,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, a.jsx)(eo, { parentChannel: t }),
                                p && (0, a.jsx)(em, {}),
                                (0, a.jsx)(e_, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0
                                })
                            ]
                        }),
                        (0, a.jsx)(
                            C.Z,
                            {
                                type: es,
                                className: ea.expressionPicker,
                                onClick: f
                            },
                            'expression'
                        )
                    ]
                })
            ]
        })
    );
});
function e_(e) {
    let { parentChannel: t, canCreatePost: n, disabled: s, disableIfInvalid: r = !1 } = e,
        {
            submitting: l,
            textAreaState: i,
            name: o,
            appliedTags: c,
            formOpen: d
        } = (0, Y.xH)((e) => {
            let { submitting: t, textAreaState: n, name: a, appliedTags: s, formOpen: r } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: a,
                appliedTags: s,
                formOpen: r
            };
        }),
        u = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === c.size && o.length > 0 && i.textValue.length > 0,
        m = (0, h.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)),
        g = i.textValue.trim().length > 0 || m.length > 0,
        x = !u && g && o.trim().length > 0;
    if (__OVERLAY__) return null;
    let f = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.jsxs)(_.Button, {
            ...e,
            size: _.Button.Sizes.SMALL,
            className: ea.submitButton,
            innerClassName: ea.submitButtonInner,
            type: 'submit',
            submitting: l,
            disabled: (r && !x) || s || !n,
            children: [
                (0, a.jsx)(_.ChatIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: ea.submitIcon
                }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'none',
                    children: d ? en.Z.Messages.SUBMIT_POST : en.Z.Messages.NEW_FORUM_POST_NEW
                })
            ]
        });
    };
    return n
        ? f()
        : (0, a.jsx)(_.Tooltip, {
              text: en.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
              children: (e) => f(e)
          });
}
function eg() {
    return Promise.resolve();
}
function ex(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: r,
            setPopoutOpen: i
        } = (0, Y.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: a
            };
        }, c.Z),
        o = n.size >= $.Cn,
        h = (0, d.ZP)({
            id: ''.concat(t.id, '-post-form-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eg,
            scrollToEnd: eg,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: g, containerWidth: x } = (0, Q.Z)(),
        f = s.useRef(null),
        [C, p] = s.useState(!0),
        T = (0, z.Vm)(t),
        [I, E] = s.useState(0);
    return (s.useLayoutEffect(() => {
        var e;
        let t = f.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
            a = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((a !== C && p(a), a && null != g.current && null != n && null != n.children)) {
            let { left: e, top: t } = g.current.getBoundingClientRect(),
                a = 0;
            for (let s of n.children) {
                let { right: n, top: r, height: l } = s.getBoundingClientRect();
                if (r - t > l) break;
                n - e > a && (a = n - e);
            }
            E(a);
        }
    }, [T, C, g, x]),
    0 === T.length)
        ? null
        : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)('div', {
                  className: ea.tagsContainer,
                  ref: g,
                  children: [
                      (0, a.jsx)(_.TagIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: ea.tagsIcon
                      }),
                      (0, a.jsx)('div', {
                          className: ea.tagList,
                          ref: f,
                          children: (0, a.jsx)(u.bG, {
                              navigator: h,
                              children: (0, a.jsx)(u.SJ, {
                                  children: (e) => {
                                      let { ref: t, ...s } = e;
                                      return (0, a.jsx)('div', {
                                          className: ea.tagListInner,
                                          ref: t,
                                          ...s,
                                          children: T.map((e) =>
                                              (0, a.jsx)(
                                                  X.Z,
                                                  {
                                                      ariaLabel: en.Z.Messages.FORUM_TAG_A11Y_ADD_TAG.format({ tagName: e.name }),
                                                      tag: e,
                                                      onClick: o && !n.has(e.id) ? void 0 : () => r(e.id),
                                                      disabled: !n.has(e.id) && n.size >= $.Cn,
                                                      selected: n.has(e.id),
                                                      size: X.Z.Sizes.SMALL
                                                  },
                                                  e.id
                                              )
                                          )
                                      });
                                  }
                              })
                          })
                      }),
                      C &&
                          (0, a.jsx)(_.Popout, {
                              onRequestOpen: () => i(!0),
                              onRequestClose: () => i(!1),
                              renderPopout: (e) => {
                                  let { closePopout: s } = e;
                                  return (0, a.jsx)(q.Z, {
                                      parentChannel: t,
                                      appliedTags: n,
                                      maxTagsApplied: o,
                                      onSelectTag: r,
                                      onClose: s
                                  });
                              },
                              position: 'bottom',
                              align: 'center',
                              children: (e) =>
                                  (0, a.jsxs)(_.Button, {
                                      ...e,
                                      size: _.Button.Sizes.TINY,
                                      className: ea.tagsButton,
                                      innerClassName: ea.tagsButtonInner,
                                      style: { left: I },
                                      look: _.Button.Looks.LINK,
                                      'aria-label': en.Z.Messages.ADD_TAG_FORUM_POST,
                                      children: [
                                          en.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                          (0, a.jsx)(_.ChevronSmallDownIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16
                                          })
                                      ]
                                  })
                          }),
                      (0, a.jsxs)(_.Button, {
                          size: _.Button.Sizes.TINY,
                          className: l()(ea.tagsButton, ea.tagsButtonPlaceholder),
                          innerClassName: ea.tagsButtonInner,
                          look: _.Button.Looks.LINK,
                          'aria-label': en.Z.Messages.ADD_TAG_FORUM_POST,
                          children: [
                              en.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                              (0, a.jsx)(_.ChevronSmallDownIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16
                              })
                          ]
                      })
                  ]
              })
          });
}
function ef(e) {
    let { style: t, className: n } = e;
    return (0, a.jsx)('div', {
        className: n,
        style: t,
        children: (0, a.jsx)('div', { className: ea.loader })
    });
}
