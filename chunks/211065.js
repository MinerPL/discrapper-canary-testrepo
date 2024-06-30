a.r(t), a(47120);
var s = a(735250), n = a(470079), l = a(512722), o = a.n(l), r = a(442837), i = a(481060), u = a(596454), d = a(410575), c = a(907040), S = a(246133), h = a(695346), m = a(293273), p = a(594174), T = a(401227), _ = a(626135), C = a(51144), f = a(720449), g = a(875425), O = a(981631), A = a(185923), j = a(689938), M = a(814157);
function b(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}
let N = Object.values(g.F).filter(e => 'number' == typeof e).sort((e, t) => e - t);
function x(e) {
    return (0, s.jsxs)('div', {
        className: M.statusOptionItem,
        children: [
            (0, s.jsx)(i.Status, {
                status: e.value,
                size: 10,
                className: M.statusIcon
            }),
            e.label
        ]
    });
}
let U = [
    {
        key: 1,
        value: i.StatusTypes.ONLINE,
        label: (0, C.u5)(i.StatusTypes.ONLINE)
    },
    {
        key: 2,
        value: i.StatusTypes.IDLE,
        label: (0, C.u5)(i.StatusTypes.IDLE)
    },
    {
        key: 3,
        value: i.StatusTypes.DND,
        label: (0, C.u5)(i.StatusTypes.DND)
    },
    {
        key: 4,
        value: i.StatusTypes.INVISIBLE,
        label: (0, C.u5)(i.StatusTypes.INVISIBLE)
    }
];
class v extends n.PureComponent {
    componentDidMount() {
        let {
            sourceAnalyticsLocations: e,
            sourceAnalyticsContext: t
        } = this.props;
        _.default.track(O.rMx.OPEN_MODAL, {
            source: null == t ? void 0 : t.location,
            type: O.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == t ? void 0 : t.loadId,
            location_stack: e
        });
    }
    get clearAfterOptions() {
        return [
            {
                key: 1,
                value: g.F.TODAY,
                label: j.Z.Messages.CUSTOM_STATUS_TODAY
            },
            {
                key: 2,
                value: g.F.HOURS_4,
                label: j.Z.Messages.CUSTOM_STATUS_HOURS.format({ hours: 4 })
            },
            {
                key: 3,
                value: g.F.HOURS_1,
                label: j.Z.Messages.CUSTOM_STATUS_HOURS.format({ hours: 1 })
            },
            {
                key: 4,
                value: g.F.MINUTES_30,
                label: j.Z.Messages.CUSTOM_STATUS_MINUTES.format({ minutes: 30 })
            },
            {
                key: 5,
                value: null,
                label: j.Z.Messages.CUSTOM_STATUS_DONT_CLEAR
            }
        ];
    }
    get analyticsLocation() {
        return { page: O.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let {emojiInfo: e} = this.state;
        return null == e ? null : () => (0, s.jsx)(u.Z, {
            className: M.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: !!e.animated
        });
    }
    renderCustomStatusInput() {
        let {user: e} = this.props, {
                text: t,
                emojiInfo: a
            } = this.state;
        return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({ username: e.username }),
            children: (0, s.jsxs)('div', {
                className: M.inputContainer,
                children: [
                    (0, s.jsx)('div', {
                        className: M.emojiButtonContainer,
                        children: (0, s.jsx)(i.Popout, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: i.Popout.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let {isShown: a} = t;
                                return (0, s.jsx)(T.Z, {
                                    ...e,
                                    active: a,
                                    className: M.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, s.jsx)(i.TextInput, {
                        maxLength: g.s,
                        value: t,
                        inputClassName: M.input,
                        placeholder: j.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    t.length > 0 || null != a ? (0, s.jsx)(i.Button, {
                        focusProps: {
                            offset: {
                                top: 8,
                                bottom: 8,
                                left: -2,
                                right: -2
                            }
                        },
                        className: M.clearButton,
                        onClick: this.handleClearStatus,
                        look: i.Button.Looks.BLANK,
                        size: i.Button.Sizes.NONE,
                        children: (0, s.jsx)(i.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: M.clearIcon
                        })
                    }) : null
                ]
            })
        });
    }
    renderClearAfter() {
        let {clearAfter: e} = this.state;
        return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
            children: (0, s.jsx)(i.SingleSelect, {
                placeholder: j.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
                maxVisibleItems: 5,
                value: e,
                options: this.clearAfterOptions,
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let {status: e} = this.state;
        return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,
            children: (0, s.jsx)(i.SingleSelect, {
                maxVisibleItems: 4,
                value: e,
                options: U,
                onChange: this.handleChangeStatus,
                renderOptionLabel: x
            })
        });
    }
    render() {
        let {
            transitionState: e,
            onClose: t
        } = this.props;
        return (0, s.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, s.jsxs)(i.ModalRoot, {
                transitionState: e,
                className: M.modalRoot,
                'aria-label': j.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
                children: [
                    (0, s.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: M.headerContainer,
                        children: [
                            (0, s.jsx)('div', { className: M.art }),
                            (0, s.jsx)('div', {
                                className: M.header,
                                children: (0, s.jsx)(i.H, {
                                    className: M.headerText,
                                    children: j.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
                                })
                            }),
                            (0, s.jsx)(i.ModalCloseButton, {
                                onClick: t,
                                className: M.modalCloseButton
                            })
                        ]
                    }),
                    (0, s.jsxs)(i.ModalContent, {
                        children: [
                            this.renderCustomStatusInput(),
                            this.renderClearAfter(),
                            (0, s.jsx)(i.FormDivider, { className: M.formDivider }),
                            this.renderStatusInput()
                        ]
                    }),
                    (0, s.jsxs)(i.ModalFooter, {
                        children: [
                            (0, s.jsx)(i.Button, {
                                onClick: this.handleSubmit,
                                children: j.Z.Messages.SAVE
                            }),
                            (0, s.jsx)(i.Button, {
                                onClick: t,
                                look: i.Button.Looks.LINK,
                                color: M.cancelButton,
                                children: j.Z.Messages.CANCEL
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e), b(this, 'state', {
            emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
            text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
            clearAfter: function () {
                var e, t, a;
                let s = h.Ok.getSetting();
                if (null == s || '' === s.expiresAtMs)
                    return g.F.TODAY;
                let n = Number(s.expiresAtMs);
                if (isNaN(n))
                    return g.F.TODAY;
                let l = new Date(), o = new Date(n);
                if (t = l, a = o, t.getFullYear() !== a.getFullYear() || t.getMonth() !== a.getMonth() || t.getDate() !== a.getDate())
                    return g.F.TODAY;
                let r = Number(n) - Date.now();
                return null !== (e = N.find(e => r <= e)) && void 0 !== e ? e : g.F.TODAY;
            }(),
            status: function () {
                let e = h.co.getSetting();
                return U.some(t => t.value === e) ? e : i.StatusTypes.ONLINE;
            }()
        }), b(this, 'handleClearStatus', () => {
            this.setState({
                emojiInfo: null,
                text: ''
            });
        }), b(this, 'handleSubmit', e => {
            e.preventDefault(), this.handleSaveStatus();
        }), b(this, 'handleStatusChange', e => {
            this.setState({ text: e });
        }), b(this, 'handleEmojiChange', e => {
            if (null == e)
                return;
            let t = null != e.id ? {
                id: e.id,
                name: e.name,
                animated: e.animated
            } : {
                id: null,
                name: e.optionallyDiverseSequence,
                animated: !1
            };
            this.setState({ emojiInfo: t });
        }), b(this, 'handleChangeClearAfter', e => {
            this.setState({ clearAfter: e });
        }), b(this, 'handleChangeStatus', e => {
            this.setState({ status: e });
        }), b(this, 'handleSaveStatus', () => {
            let {
                    sourceAnalyticsContext: e,
                    onClose: t
                } = this.props, {
                    emojiInfo: a,
                    text: s,
                    clearAfter: n,
                    status: l
                } = this.state, o = h.co.getSetting();
            o !== l && (0, S.Z)(l, o, e), (0, f.Z)(s, a, n, e), t();
        }), b(this, 'handleKeyPress', e => {
            e.which === O.yXg.ENTER && this.handleSaveStatus();
        }), b(this, 'renderEmojiPicker', e => {
            let {closePopout: t} = e, {onClose: a} = this.props;
            return (0, s.jsx)(c.Z, {
                closePopout: t,
                onSelectEmoji: (e, a) => {
                    this.handleEmojiChange(e), a && t();
                },
                pickerIntention: A.Hz.STATUS,
                onNavigateAway: a
            });
        });
    }
}
t.default = r.ZP.connectStores([
    m.Z,
    p.default
], () => {
    let e = p.default.getCurrentUser();
    return o()(null != e, 'CustomStatusModal: user cannot be null'), {
        customStatus: m.Z.getCustomStatusActivity(),
        user: e
    };
}, { forwardRef: !0 })(v);
