n.d(a, {
    I: function () {
        return v;
    }
}),
    n(47120);
var t = n(735250),
    r = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(263568),
    i = n(442837),
    c = n(481060),
    u = n(166459),
    d = n(596454),
    _ = n(273031),
    m = n(313201),
    E = n(907040),
    A = n(906411),
    f = n(592125),
    C = n(703558),
    L = n(117530),
    h = n(358085),
    R = n(79390),
    I = n(885001),
    x = n(35463),
    p = n(489887),
    O = n(185923),
    g = n(957825),
    T = n(689938),
    N = n(754118);
let P = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function v(e) {
    let { hasUpload: a, mediaUrl: n, mediaFilename: r, imageClassName: l, emoji: s, emojiClassName: o, fallback: i } = e;
    return a
        ? (0, t.jsx)('img', {
              src: n,
              alt: r,
              className: l
          })
        : null != s
          ? (0, t.jsx)(d.Z, {
                className: o,
                emojiId: s.id,
                emojiName: s.type === A.B.UNICODE ? s.optionallyDiverseSequence : s.name,
                animated: s.animated
            })
          : (0, t.jsx)(t.Fragment, { children: i });
}
function j(e) {
    let { onSelect: a, onEditMedia: n, onDeleteMedia: r, closePopout: l } = e;
    return (0, t.jsx)('div', {
        className: N.menuContainer,
        children: (0, t.jsx)(c.Menu, {
            navId: 'poll-media-edit-menu',
            onClose: l,
            'aria-label': T.Z.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
            onSelect: a,
            children: (0, t.jsxs)(c.MenuGroup, {
                children: [
                    (0, t.jsx)(c.MenuItem, {
                        id: 'poll-media-replace',
                        label: T.Z.Messages.CREATE_POLL_REPLACE_EMOJI,
                        action: n
                    }),
                    (0, t.jsx)(c.MenuItem, {
                        id: 'poll-media-delete',
                        label: T.Z.Messages.CREATE_POLL_REMOVE_EMOJI,
                        action: r,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function D(e) {
    let { channelId: a, localCreationAnswerId: n, buttonImage: l, layout: u, onEmojiSelect: d, onEmojiRemove: _, answerIndex: m, shouldShowEmojiPicker: A, toggleEmojiPicker: C } = e,
        L = (0, i.e7)([f.Z], () => f.Z.getChannel(a)),
        {
            emoji: h,
            isLoadingMedia: I,
            hasUpload: p,
            mediaUrl: P,
            mediaFilename: D
        } = (0, x.Z)({
            channelId: a,
            localCreationAnswerId: n,
            image: l
        }),
        M = u === o.C.DEFAULT,
        w = p || null != h,
        S = r.useCallback(() => {
            _(m);
        }, [_, m]),
        b = r.useMemo(
            () =>
                p
                    ? T.Z.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                          imageName: (0, R.fw)(D),
                          answerNumber: m + 1
                      })
                    : null != h
                      ? T.Z.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
                            emojiName: h.name,
                            answerNumber: m + 1
                        })
                      : T.Z.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({ answerNumber: m + 1 }),
            [p, h, m, D]
        ),
        k = r.useCallback(
            (e) => {
                let { closePopout: a } = e;
                return (0, t.jsx)('div', {
                    className: N.emojiPicker,
                    children: (0, t.jsx)(E.Z, {
                        channel: L,
                        pickerIntention: O.Hz.POLLS,
                        closePopout: a,
                        onNavigateAway: a,
                        onSelectEmoji: (e, n) => {
                            null != e && d(e, m), n && a();
                        }
                    })
                });
            },
            [L, d, m]
        ),
        Z = r.useCallback(
            (e) => {
                let { closePopout: a } = e;
                return (0, t.jsx)(j, {
                    onSelect: a,
                    onEditMedia: C,
                    onDeleteMedia: S,
                    closePopout: a
                });
            },
            [S, C]
        ),
        y = I
            ? (0, t.jsx)(c.Spinner, { className: M ? N.spinnerWrapperDefault : N.spinnerWrapperImageOnly })
            : (0, t.jsx)(v, {
                  hasUpload: p,
                  mediaUrl: P,
                  mediaFilename: D,
                  imageClassName: s()(N.media, M ? N.gifDefault : N.gifJumbo),
                  emoji: h,
                  emojiClassName: s()(N.media, M ? N.emojiDefault : N.emojiJumbo),
                  fallback: (0, t.jsx)(c.ReactionIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: M ? N.expressionPickerIconDefault : N.expressionPickerIconImageOnly
                  })
              }),
        B = s()(g.CT, u === o.C.IMAGE_ONLY_ANSWERS ? N.expressionPickerButtonImageOnly : N.expressionPickerButtonDefault, { [N.canEditMedia]: w });
    return (0, t.jsx)(c.Popout, {
        renderPopout: k,
        shouldShow: A,
        onRequestClose: C,
        animation: c.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            let { 'aria-controls': a, 'aria-expanded': n, ...r } = e;
            return (0, t.jsx)(c.Popout, {
                animation: c.Popout.Animation.NONE,
                position: 'bottom',
                renderPopout: Z,
                children: (e) => {
                    let { onClick: r, 'aria-controls': l, 'aria-expanded': s, ...o } = e;
                    return (0, t.jsxs)(c.Clickable, {
                        ...o,
                        className: B,
                        onClick: w && !A ? r : C,
                        'aria-label': b,
                        'aria-controls': null != a ? a : l,
                        'aria-expanded': n || s,
                        children: [
                            y,
                            w &&
                                (0, t.jsx)(c.PencilIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: N.editIcon,
                                    'aria-hidden': !0
                                })
                        ]
                    });
                }
            });
        }
    });
}
function M(e) {
    var a;
    let { value: n, id: r } = e,
        l = (() => {
            var e;
            let a = null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0;
            return p.WA - a;
        })();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: s()(N.characterCount),
                'aria-hidden': 'true',
                children: [null !== (a = null == n ? void 0 : n.length) && void 0 !== a ? a : 0, ' / ', p.WA]
            }),
            (0, t.jsxs)(c.HiddenVisually, {
                id: r,
                children: [T.Z.Messages.CHARACTER_COUNT_A11Y_LABEL.format({ remainingCharacters: l }), ' ', T.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: p.WA })]
            })
        ]
    });
}
a.Z = r.forwardRef(function (e, a) {
    let { channelId: l, answer: d, index: E, layout: A, isLastAnswer: f, onAnswerTextChange: x, onEmojiSelect: O, onEmojiRemove: g, canRemoveAnswer: v, onRemoveAnswer: j, addAnswer: w, submitPoll: S, answerTextInputRefs: b, error: k, inputRef: Z, deleteButtonRef: y } = e,
        B = (0, m.Dt)(),
        U = (0, m.Dt)(),
        W = null != k && k.length > 0,
        H = (0, i.e7)([L.Z], () => L.Z.getUpload(l, d.localCreationAnswerId, C.d.Poll)),
        [Y, F] = r.useState(!1),
        G = () => {
            function e(e) {
                u.Z.update(l, d.localCreationAnswerId, C.d.Poll, { description: e });
            }
            (0, c.openModalLazy)(async () => {
                let { default: a } = await n.e('2538').then(n.bind(n, 92254));
                return (n) =>
                    (0, t.jsx)(a, {
                        channelId: l,
                        answer: d,
                        onSave: e,
                        ...n
                    });
            });
        },
        z = r.useCallback(() => {
            F((e) => !e);
        }, []),
        K = r.useCallback(
            (e) => {
                let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var t;
                        f && (e.preventDefault(), ((0, R.cS)(d, A) || 'macos' !== (0, h.getOS)() ? a : n) ? (e.stopPropagation(), S()) : w()), null === (t = b.current[E + 1]) || void 0 === t || t.focus();
                        break;
                    case 'e':
                        ('macos' === (0, h.getOS)() ? n : a) && (e.preventDefault(), e.stopPropagation(), z());
                }
            },
            [w, d, b, E, f, A, S, z]
        ),
        V = (0, t.jsx)(D, {
            channelId: l,
            buttonImage: d.image,
            layout: A,
            onEmojiSelect: O,
            onEmojiRemove: g,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: E,
            shouldShowEmojiPicker: Y,
            toggleEmojiPicker: z
        }),
        J = null != H && null != H.description && H.description.length > 0;
    return (0, t.jsx)(t.Fragment, {
        children:
            A === o.C.DEFAULT
                ? (0, t.jsxs)('div', {
                      className: s()(N.answerRow, { [N.hasDeleteButton]: v }),
                      children: [
                          (0, t.jsxs)('div', {
                              className: s()(N.defaultTextInputWrapper, { [N.hasError]: W }),
                              ref: a,
                              children: [
                                  V,
                                  (0, t.jsx)(c.TextInput, {
                                      'aria-label': T.Z.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({ answerNumber: E + 1 }),
                                      placeholder: T.Z.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                      value: d.text,
                                      className: N.defaultTextInput,
                                      inputClassName: N.defaultTextInput,
                                      onChange: (e) =>
                                          x({
                                              text: e,
                                              index: E,
                                              localCreationAnswerId: d.localCreationAnswerId
                                          }),
                                      onKeyDown: K,
                                      maxLength: p.WA,
                                      'aria-invalid': W,
                                      'aria-describedby': W ? B : U,
                                      focusProps: P,
                                      inputRef: Z
                                  }),
                                  (0, t.jsx)(M, {
                                      value: d.text,
                                      id: U
                                  })
                              ]
                          }),
                          v &&
                              (0, t.jsx)(c.Clickable, {
                                  onClick: () => j(E),
                                  className: N.removeAnswerButtonDefault,
                                  'aria-label': T.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({ answerNumber: E + 1 }),
                                  ref: y,
                                  children: (0, t.jsx)(c.TrashIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: N.trashIcon,
                                      'aria-hidden': !0
                                  })
                              }),
                          W &&
                              (0, t.jsx)(c.Text, {
                                  id: B,
                                  variant: 'text-xs/medium',
                                  color: 'text-danger',
                                  className: N.__invalid_errorText,
                                  children: k
                              })
                      ]
                  })
                : (0, t.jsxs)('div', {
                      className: N.imageOnlyContainer,
                      ref: a,
                      children: [
                          (0, t.jsxs)('div', {
                              className: N.imagePreviewContainer,
                              children: [
                                  V,
                                  J &&
                                      (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(c.Text, {
                                                  variant: 'text-xs/semibold',
                                                  className: N.altBadge,
                                                  'aria-hidden': !0,
                                                  children: T.Z.Messages.IMAGE_ALT
                                              }),
                                              (0, t.jsxs)('div', {
                                                  onClick: G,
                                                  children: [
                                                      (0, t.jsx)(c.HiddenVisually, { children: T.Z.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT }),
                                                      (0, t.jsx)(c.Text, {
                                                          variant: 'text-xxs/medium',
                                                          className: N.altTextPreview,
                                                          children: H.description
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              ]
                          }),
                          (0, t.jsxs)('div', {
                              className: N.imageOnlyAnswerActionBar,
                              children: [
                                  null != H
                                      ? (0, t.jsx)(_.Z, {
                                            tooltip: T.Z.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                            'aria-label': J ? T.Z.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({ answerNumber: E + 1 }) : T.Z.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({ answerNumber: E + 1 }),
                                            onClick: G,
                                            children: (0, t.jsx)(I.N, { 'aria-hidden': !0 })
                                        })
                                      : null,
                                  (0, t.jsx)(_.Z, {
                                      tooltip: T.Z.Messages.CREATE_POLL_REMOVE_ANSWER,
                                      'aria-label': T.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({ answerNumber: E + 1 }),
                                      onClick: () => j(E),
                                      dangerous: !0,
                                      children: (0, t.jsx)(c.TrashIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          'aria-hidden': !0
                                      })
                                  })
                              ]
                          })
                      ]
                  })
    });
});
