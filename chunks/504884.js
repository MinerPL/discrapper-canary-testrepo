n.d(t, {
    c: function () {
        return s;
    }
}), n(47120);
var s, i, r = n(735250), o = n(470079), l = n(120356), a = n.n(l), d = n(879443), u = n.n(d), c = n(392711), h = n.n(c), m = n(481060), p = n(13140), g = n(285952), _ = n(689938), E = n(156186);
function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(i = s || (s = {})).DEFAULT = 'DEFAULT', i.RECORDING = 'RECORDING';
let R = {
    DEFAULT: E.__invalid_default,
    RECORDING: E.recording
};
class b extends o.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let {mode: t} = this.props, {mode: n} = e;
        if (n === t)
            return;
        let {_inputRef: s} = this;
        if (null == s.current)
            return;
        let {activeElement: i} = document;
        'DEFAULT' === t && s.current === i && s.current.blur(), 'RECORDING' === t && s.current !== i && s.current.focus();
    }
    render() {
        let e;
        let {
                mode: t,
                value: n,
                disabled: s
            } = this.props, i = (0, p.BB)(n, !0);
        e = 'RECORDING' === t ? _.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? _.Z.Messages.SHORTCUT_RECORDER_BUTTON : _.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
        let o = 'DEFAULT' === t && n.length > 0;
        return (0, r.jsx)(m.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: a()(E.recorderContainer, R[t], {
                    [E.hasValue]: o,
                    [E.containerDisabled]: s
                }),
                children: (0, r.jsxs)(g.Z, {
                    className: E.recorderLayout,
                    children: [
                        (0, r.jsx)(g.Z.Child, {
                            className: E.keybindInput,
                            children: (0, r.jsx)('input', {
                                id: this._inputId,
                                placeholder: _.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: i,
                                disabled: 'RECORDING' !== this.props.mode || s
                            })
                        }),
                        (0, r.jsx)(g.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, r.jsxs)(m.Button, {
                                className: E.addKeybindButton,
                                disabled: s,
                                onClick: e => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: m.Button.Sizes.MIN,
                                color: m.ButtonColors.PRIMARY,
                                children: [
                                    (0, r.jsx)('span', {
                                        className: E.text,
                                        children: e
                                    }),
                                    (0, r.jsx)('span', { className: E.editIcon })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e), C(this, '_inputId', h().uniqueId('key-recorder-')), C(this, '_unregisterNativeRecorder', null), C(this, '_mousedownMode', null), C(this, '_inputRef', o.createRef()), C(this, '_containerRef', o.createRef()), C(this, 'setInputRef', e => {
            var t;
            let {
                registerNativeRecorder: n,
                onChange: s
            } = this.props;
            this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != n && null != s ? this._unregisterNativeRecorder = n(e.id, s) : null != s && (new (u())(e).handleKey = s));
        }), C(this, 'handleClick', e => {
            e.stopPropagation(), e.preventDefault();
            let {
                onClick: t,
                disableOnClickWhileRecording: n
            } = this.props;
            if (!n || 'RECORDING' !== this._mousedownMode)
                t();
        }), C(this, 'handleMouseDown', () => {
            this._mousedownMode = this.props.mode;
        });
    }
}
t.Z = b;
