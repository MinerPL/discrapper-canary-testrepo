t.d(s, {
    f: function () {
        return x;
    }
}), t(47120);
var n = t(735250), i = t(470079), l = t(481060), a = t(92114), r = t(225433), o = t(933557), d = t(471445), c = t(592125), u = t(324067), h = t(699516), N = t(594174), S = t(285952), E = t(621600), m = t(981631), g = t(689938), _ = t(329007);
function T(e, s, t) {
    return s in e ? Object.defineProperty(e, s, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[s] = t, e;
}
class x extends i.PureComponent {
    highlight() {
        this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1000);
        });
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    setMessageNotification(e, s, t) {
        let {channel: n} = this.props, i = n.getGuildId();
        null != i && a.Z.updateChannelOverrideSettings(i, n.id, {
            message_notifications: e,
            muted: null != s && s
        }, t);
    }
    handleRadioChange(e) {
        this.setMessageNotification(e, void 0, E.UE.notifications(e));
    }
    renderMessageNotificationsRadioOption(e) {
        let {
                messageNotifications: s,
                guildMuted: t,
                muted: i,
                guildMessageNotifications: a,
                checkboxColor: r
            } = this.props, o = s === e;
        (null == s || s === m.bL.NULL) && e === a && (o = !0);
        let d = l.Checkbox.Types.INVERTED;
        return (i || s === m.bL.NULL || null == s) && (d = l.Checkbox.Types.GHOST), (0, n.jsx)(l.Checkbox, {
            value: !t && o,
            disabled: t,
            shape: l.Checkbox.Shapes.ROUND,
            color: r,
            type: d,
            onChange: this.handleRadioChange.bind(this, e)
        });
    }
    renderName() {
        let e, s;
        let {channel: t} = this.props;
        null != t.parent_id && (e = c.Z.getChannel(t.parent_id));
        let i = (0, d.KS)(t);
        if (t.type === m.d4z.GUILD_CATEGORY && null != t.guild_id && '' !== t.guild_id) {
            let e = u.Z.getCategories(t.guild_id);
            s = g.Z.Messages.NUM_CHANNELS.format({ num: null != e[t.id] ? e[t.id].length : 0 });
        } else
            s = null != e ? g.Z.Messages.IN_CATEGORY.format({ categoryName: (0, o.F6)(e, N.default, h.Z) }) : g.Z.Messages.NO_CATEGORY;
        return (0, n.jsxs)(S.Z, {
            grow: 1,
            className: _.nameContainer,
            children: [
                null != i ? (0, n.jsx)(i, { className: _.icon }) : null,
                (0, n.jsxs)('div', {
                    className: _.channelNameContainer,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            className: _.channelName,
                            children: (0, o.F6)(t, N.default, h.Z)
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: _.channelNameByline,
                            children: s
                        })
                    ]
                })
            ]
        });
    }
    renderOptions() {
        let {
            muted: e,
            guildMuted: s
        } = this.props;
        return (0, n.jsxs)(S.Z, {
            grow: 0,
            shrink: 0,
            className: _.checkboxGroup,
            justify: S.Z.Justify.AROUND,
            align: S.Z.Align.CENTER,
            children: [
                (0, n.jsx)(S.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(m.bL.ALL_MESSAGES)
                }),
                (0, n.jsx)(S.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(m.bL.ONLY_MENTIONS)
                }),
                (0, n.jsx)(S.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                    children: this.renderMessageNotificationsRadioOption(m.bL.NO_MESSAGES)
                }),
                (0, n.jsx)(S.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: _.checkboxMute,
                    children: (0, n.jsx)(l.Checkbox, {
                        value: e,
                        shape: l.Checkbox.Shapes.BOX,
                        type: l.Checkbox.Types.INVERTED,
                        onChange: this.handleMute
                    })
                })
            ]
        });
    }
    render() {
        let {highlight: e} = this.state;
        return (0, n.jsxs)(l.Card, {
            outline: !0,
            editable: !0,
            className: e ? _.overrideHighlight : _.override,
            children: [
                this.renderName(),
                this.renderOptions(),
                (0, n.jsx)(r.Z, {
                    className: _.removeOverride,
                    onClick: this.handleDelete
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), T(this, '_timeout', void 0), T(this, 'state', { highlight: !1 }), T(this, 'unhighlight', () => {
            this.setState({ highlight: !1 });
        }), T(this, 'handleMute', (e, s) => {
            let {messageNotifications: t} = this.props;
            this.setMessageNotification(null != t ? t : m.bL.NULL, s, E.UE.muted(s));
        }), T(this, 'handleDelete', () => {
            let {
                onDelete: e,
                channel: s
            } = this.props;
            this.setMessageNotification(m.bL.NULL, !1, E.ZB.OverrideDeleted), null != e && e(s.id);
        });
    }
}
