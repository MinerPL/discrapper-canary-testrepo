n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(218887),
    c = n.n(u),
    d = n(729594),
    f = n(873546),
    _ = n(430742),
    h = n(166459),
    p = n(911969),
    m = n(476326),
    g = n(998698),
    E = n(710845),
    v = n(117530),
    I = n(459273),
    S = n(403182),
    T = n(541716),
    b = n(752305),
    y = n(30465),
    A = n(140963),
    N = n(4484),
    C = n(925994),
    R = n(981631),
    O = n(388032),
    D = n(703130);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
new E.Z('ChannelEditor.tsx');
let x = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    },
    w = {
        12: D.fontSize12Padding,
        14: D.fontSize14Padding,
        15: D.fontSize15Padding,
        16: D.fontSize16Padding,
        18: D.fontSize18Padding,
        20: D.fontSize20Padding,
        24: D.fontSize24Padding
    };
class M extends i.Component {
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener('selectionchange', this.handleSelectionChange), window.addEventListener('beforeunload', this.handleBeforeUnload);
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var t, n;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, C.sk)(this.props.richValue, { mode: 'plain' })), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, b.JM)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        var e;
        this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener('beforeunload', this.handleBeforeUnload), document.removeEventListener('selectionchange', this.handleSelectionChange), (this._focusBlurQueue = null), (this._unsubscribe = null);
    }
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        var t;
        null === (t = this.ref.current) || void 0 === t || t.submit(e);
    }
    insertEmoji(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { textValue: r } = this.props,
            i = this.ref.current;
        null != e && null != i && (n && !r.endsWith(' ') && i.insertText(' ', void 0, !1), i.insertEmoji(e, t), t && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (!t.endsWith(' ') && n.insertText(' ', void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (!t.endsWith(' ') && n.insertText(' ', void 0, !1), n.insertText('<sound:' + e.soundId + '>', void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({
            focused: !0,
            submitting: !1
        }),
            _.Z.saveDraft(e.id, '', t.drafts.type);
    }
    getCurrentWord() {
        var e;
        let t = this.ref.current;
        return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e
            ? e
            : {
                  word: null,
                  isAtStart: !1
              };
    }
    insertAutocomplete(e, t, n) {
        let r = this.ref.current;
        return null == r ? void 0 : r.insertAutocomplete(e, t, n);
    }
    getCurrentCommandOption() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null;
    }
    getCurrentCommandOptionValue() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : [];
    }
    getCommandOptionValues() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {};
    }
    getFirstText() {
        var e;
        let t = this.ref.current;
        return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null;
    }
    getSlateEditor() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        var n;
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, r);
    }
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n } = this.props;
        return e && !n ? O.intl.string(O.t.IYKTTU) : t;
    }
    render() {
        var e, t, n, i, a, o;
        let { textValue: l, richValue: u, disabled: c, onChange: d, onKeyDown: _, onResize: h, onSubmit: p, channel: m, type: g, fontSize: E, useSlate: v, spellcheckEnabled: S, useNewSlashCommands: y, canOnlyUseTextCommands: C, className: O, id: L, required: x, maxCharacterCount: M, allowNewLines: P, 'aria-describedby': k, 'aria-labelledby': U, accessibilityLabel: G } = this.props,
            { submitting: B, popup: Z } = this.state,
            F = {
                channel: m,
                className: s()(O, D.textArea, {
                    [D.textAreaSlate]: v,
                    [D.textAreaDisabled]: c || B
                }),
                id: L,
                placeholder: this.getPlaceholder(),
                required: x,
                accessibilityLabel: G,
                disabled: c || !1,
                submitting: B,
                isEdit: g === T.I.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: P,
                onChange: d,
                onResize: h,
                onKeyDown: _,
                onSubmit: p,
                textAreaPaddingClassName: s()(w[E], {
                    [D.textAreaWithoutAttachmentButton]: g !== T.I.NORMAL && g !== T.I.OVERLAY && g !== T.I.THREAD_CREATION && g !== T.I.SIDEBAR,
                    [D.textAreaForPostCreation]: g === T.I.CREATE_FORUM_POST,
                    [D.textAreaCustomGift]: g === T.I.CUSTOM_GIFT,
                    [D.textAreaForUserProfile]: g === T.I.USER_PROFILE,
                    [D.textAreaForOverlayInlineReply]: g === T.I.OVERLAY_INLINE_REPLY
                }),
                spellcheckEnabled: S,
                useNewSlashCommands: y,
                disableAutoFocus: f.tq || (null !== (n = g.disableAutoFocus) && void 0 !== n && n),
                disableEnterToSubmit: null !== (i = null === (e = g.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== i && i,
                'aria-controls': null !== (a = Z.id) && void 0 !== a ? a : void 0,
                'aria-haspopup': 'listbox',
                'aria-expanded': null !== Z.id || void 0,
                'aria-activedescendant': null !== (o = Z.activeDescendant) && void 0 !== o ? o : void 0,
                'aria-invalid': l.length > M,
                'aria-describedby': k,
                'aria-labelledby': U,
                'aria-autocomplete': 'list'
            },
            V = v
                ? (0, r.jsx)(N.Z, {
                      ref: this.ref,
                      ...F,
                      type: g,
                      value: c ? (0, b.JM)('') : u,
                      canUseCommands: null === (t = g.commands) || void 0 === t ? void 0 : t.enabled,
                      canOnlyUseTextCommands: C
                  })
                : (0, r.jsx)(A.Z, {
                      ref: this.ref,
                      ...F,
                      value: c ? '' : l
                  });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.d9, {
                    event: R.CkL.INSERT_TEXT,
                    handler: this.handleInsertText
                }),
                (0, r.jsx)(I.d9, {
                    event: R.CkL.CLEAR_TEXT,
                    handler: this.handleClearText
                }),
                V
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            L(this, 'ref', i.createRef()),
            L(this, '_focusBlurQueue', Promise.resolve()),
            L(this, '_unsubscribe', void 0),
            L(this, 'handleSelectionChange', () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString());
                }
            }),
            L(this, 'focus', () => {
                var e;
                null === (e = this._focusBlurQueue) ||
                    void 0 === e ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            L(this, 'saveCurrentText', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: n, channel: r } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id));
            }),
            L(this, 'handleBeforeUnload', () => this.saveCurrentText()),
            L(this, 'saveCurrentTextThrottled', l().throttle(this.saveCurrentText.bind(this, !1), 500)),
            L(this, 'handleEnter', (e) => {
                var t, n;
                return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e);
            }),
            L(this, 'handleTab', () => {
                var e, t;
                return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t);
            }),
            L(this, 'handleMoveSelection', (e) => {
                var t, n;
                return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e);
            }),
            L(this, 'maybeShowAutocomplete', () => {
                var e, t;
                return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t);
            }),
            L(this, 'hideAutocomplete', () => {
                var e, t;
                return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t);
            }),
            L(this, 'handleSaveCurrentText', (e) => {
                _.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            L(this, 'handleClearText', () => {
                var e, t;
                null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, '', (0, b.JM)(''));
            }),
            L(this, 'handleInsertText', (e) => {
                let { plainText: t, rawText: n, addSpace: r = !1 } = e;
                !this.props.disabled && (this.appendText(t, n, r), this.focus());
            }),
            L(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), !n && this.setState({ focused: !0 });
            }),
            L(this, 'handleBlur', (e) => {
                let { onBlur: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n && this.setState({ focused: !1 });
            }),
            L(this, 'handlePaste', (e) => {
                let { channel: t, canPasteFiles: n, uploadPromptCharacterCount: r, promptToUpload: i, maxCharacterCount: a, type: s } = this.props;
                if (null == i || (!t.isPrivate() && !n) || (t.isPrivate() && t.isManaged())) return !1;
                let { files: o } = (function (e, t) {
                    let n = [],
                        r = [],
                        i = null,
                        a = null;
                    for (let t of e.items)
                        if ('file' === t.kind) {
                            let e = t.getAsFile();
                            if (null == e) continue;
                            null != e.path && e.path.length > 0 ? n.push(e) : r.push(e);
                        } else 'string' === t.kind && ('text/plain' === t.type && null == i ? (i = t) : 'text/html' === t.type && null == a && (a = t));
                    if (n.length > 0) return { files: n };
                    if (r.length > 0) {
                        if (1 === r.length && 'image/png' === r[0].type && null != a) {
                            var s;
                            let t = r[0],
                                n =
                                    null !==
                                        (s = (function (e) {
                                            let t = new DOMParser().parseFromString(e, 'text/html').querySelector('img');
                                            if (null != t) {
                                                let e;
                                                try {
                                                    let { pathname: n } = d.parse(t.src);
                                                    null != n && n.length > 0 && (e = c().basename(n).split('.')[0]);
                                                } catch (e) {}
                                                if (null != e && e.length > 0) return ''.concat(e, '.png');
                                            }
                                        })(e.getData(a.type))) && void 0 !== s
                                        ? s
                                        : t.name;
                            return { files: [(0, S.dp)(t, n, t.type)] };
                        }
                        return { files: r };
                    }
                    if (null != i && null != t) {
                        let n = e.getData(i.type);
                        if (n.length > t) {
                            let e = new Blob([n], { type: 'text/plain' });
                            return {
                                files: [(0, S.dp)(e, 'message.txt')],
                                convertedStringToFile: !0
                            };
                        }
                    }
                    return { files: [] };
                })(e.clipboardData, s.uploadLongMessages ? (null != r ? r : a) : null);
                return (
                    x(
                        'onPaste',
                        [...e.clipboardData.items].map((e) => {
                            if ('file' !== e.kind)
                                return {
                                    kind: e.kind,
                                    type: e.type
                                };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                };
                            }
                        })
                    ),
                    0 !== o.length &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        this.saveCurrentText(),
                        ((e, n) => {
                            var r, a;
                            let o = g.Z.getActiveCommand(t.id);
                            if (null == o)
                                return i(e, t, s.drafts.type, {
                                    requireConfirm: !0,
                                    showLargeMessageDialog: n
                                });
                            let l = null !== (r = s.drafts.commandType) && void 0 !== r ? r : s.drafts.type,
                                u = null,
                                c = g.Z.getActiveOption(t.id);
                            if (
                                null !=
                                (u =
                                    (null == c ? void 0 : c.type) === p.jw.ATTACHMENT
                                        ? c
                                        : null === (a = o.options) || void 0 === a
                                          ? void 0
                                          : a.find((e) => {
                                                if (e.type === p.jw.ATTACHMENT) return null == v.Z.getUpload(t.id, e.name, l);
                                            }))
                            )
                                h.Z.setFile({
                                    channelId: t.id,
                                    id: u.name,
                                    draftType: l,
                                    file: {
                                        id: u.name,
                                        platform: m.ow.WEB,
                                        file: e[0]
                                    }
                                });
                        })(o),
                        this.focus(),
                        !0)
                );
            }),
            (this._unsubscribe = y.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: y.p8.getState()
            });
    }
}
