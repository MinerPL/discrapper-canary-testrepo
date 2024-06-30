s.r(t), s.d(t, {
    AddMembers: function () {
        return ee;
    },
    ChannelTypeBadge: function () {
        return J;
    }
}), s(653041), s(47120), s(411104);
var n, a, r = s(735250), l = s(470079), i = s(120356), o = s.n(i), d = s(512722), c = s.n(d), h = s(392711), u = s.n(h), E = s(990547), N = s(831209), C = s(442837), p = s(481060), m = s(333848), _ = s(749210), g = s(332063), A = s(620123), I = s(911969), T = s(367907), M = s(812206), L = s(933557), S = s(605436), O = s(185413), R = s(688465), x = s(456269), D = s(312146), Z = s(703656), j = s(146085), v = s(60222), b = s(388131), P = s(131704), G = s(592125), f = s(271383), H = s(430824), U = s(496675), y = s(699516), B = s(594174), z = s(474333), F = s(153124), w = s(934415), k = s(823379), Y = s(63063), V = s(981631), K = s(71080), W = s(710352), X = s(231338), q = s(689938), Q = s(324837);
function $(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
function J(e) {
    let {
            isNew: t,
            isBeta: s
        } = e, n = null;
    return !0 === t ? n = (0, r.jsx)(p.TextBadge, {
        text: q.Z.Messages.CHANNEL_TYPE_NEW,
        className: Q.newBadge,
        color: N.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
    }) : !0 === s && (n = (0, r.jsx)(R.Z, { className: Q.newBadge })), n;
}
function ee(e) {
    let {
            onChange: t,
            guildId: s,
            channelType: n,
            description: a
        } = e, [i, o] = l.useState({}), d = (0, C.e7)([H.Z], () => H.Z.getGuild(s)), c = n === V.d4z.GUILD_STAGE_VOICE;
    return (l.useEffect(() => {
        t(i);
    }, [
        i,
        t
    ]), null == d) ? null : (0, r.jsx)(p.ModalContent, {
        className: Q.addMembersContainer,
        children: (0, r.jsx)(O.AddMembersBody, {
            guild: d,
            channel: null,
            permission: c ? j.yP : (0, P.CG)(n),
            pendingAdditions: i,
            setPendingAdditions: o,
            isStageChannel: c,
            description: a
        })
    });
}
(a = n || (n = {})).CHANNEL_INFO = 'CHANNEL_INFO', a.ADD_MEMBERS = 'ADD_MEMBERS';
class et extends l.PureComponent {
    componentDidMount() {
        let {_input: e} = this;
        null != e && e.select();
        let {
            guildId: t,
            applications: s,
            canCreateStoreChannel: n
        } = this.props;
        n && null == s && _.Z.fetchApplications(t), T.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, { type: 'Create Channel' }), x.O2.trackExposure({
            guildId: t,
            location: '45d324_1'
        });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === V.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: V.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && T.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let {
                canViewChannels: e,
                canConnect: t
            } = this.props, {
                isPrivate: s,
                channelType: n,
                skuId: a,
                name: r
            } = this.state;
        return '' !== r && '' !== r.trim() && (!s || !!(0, S.nT)(n, e, t)) && (n !== V.d4z.GUILD_STORE || null != a) && !0;
    }
    getIconComponent() {
        let {
            isPrivate: e,
            channelType: t
        } = this.state;
        switch (t) {
        case V.d4z.GUILD_TEXT:
            return e ? p.TextLockIcon : p.TextIcon;
        case V.d4z.GUILD_FORUM:
            return p.ForumIcon;
        case V.d4z.GUILD_MEDIA:
            return p.ImageIcon;
        case V.d4z.GUILD_VOICE:
            return e ? p.VoiceLockIcon : p.VoiceNormalIcon;
        case V.d4z.GUILD_STORE:
            return p.TagIcon;
        case V.d4z.GUILD_ANNOUNCEMENT:
            return p.AnnouncementsIcon;
        case V.d4z.GUILD_STAGE_VOICE:
            return p.StageIcon;
        default:
            return (0, P.zi)(t) ? p.TextIcon : X.Vq;
        }
    }
    renderHeader() {
        var e, t, s;
        let n;
        let {
                cloneChannel: a,
                categoryId: l,
                onClose: i
            } = this.props, {channelType: o} = this.state;
        let d = (e = a, t = o, null != e ? q.Z.Messages.CLONE_CHANNEL : t === V.d4z.GUILD_CATEGORY ? q.Z.Messages.CREATE_CATEGORY : q.Z.Messages.CREATE_CHANNEL);
        if (null != l) {
            ;
            let e = G.Z.getChannel(l);
            n = (0, r.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: Q.subtitle,
                children: q.Z.Messages.IN_CATEGORY.format({ categoryName: null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : '' })
            });
        }
        return (0, r.jsxs)(p.ModalHeader, {
            separator: !1,
            children: [
                (0, r.jsxs)('div', {
                    className: Q.header,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: Q.title,
                            children: d
                        }),
                        n
                    ]
                }),
                (0, r.jsx)(p.ModalCloseButton, {
                    onClick: i,
                    className: Q.closeButton
                })
            ]
        });
    }
    renderName() {
        let e;
        let {
                cloneChannel: t,
                guildId: n
            } = this.props, {
                errors: a,
                channelType: l
            } = this.state;
        (null == a ? void 0 : a.name) != null && (e = (0, r.jsx)(p.Text, {
            variant: 'text-xs/normal',
            color: 'text-danger',
            className: Q.error,
            children: a.name
        }));
        let i = l === V.d4z.GUILD_CATEGORY, o = i ? q.Z.Messages.CATEGORY_NAME : q.Z.Messages.FORM_LABEL_CHANNEL_NAME, d = null != t ? (0, r.jsx)(p.FormText, {
                className: Q.channelNameNote,
                type: p.FormText.Types.DESCRIPTION,
                children: q.Z.Messages.CLONE_CHANNEL_HELP.format({ name: (0, L.F6)(t, B.default, y.Z, !0) })
            }) : l === V.d4z.GUILD_FORUM ? (0, r.jsx)(p.FormText, {
                className: Q.channelNameNote,
                type: p.FormText.Types.DESCRIPTION,
                children: q.Z.Messages.FORUM_CHANNEL_NAME_NOTE.format({
                    forumUpsellHook: (e, t) => (0, r.jsx)(p.Anchor, {
                        onClick: () => (0, p.openModalLazy)(async () => {
                            let {default: e} = await s.e('18417').then(s.bind(s, 740696));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                guildId: n
                            });
                        }),
                        children: e
                    }, t)
                })
            }) : null, c = this.getIconComponent();
        return (0, r.jsx)(F.FG, {
            children: t => (0, r.jsxs)(p.FormItem, {
                title: o,
                tag: 'label',
                htmlFor: t,
                titleClassName: Q.sectionTitle,
                className: Q.name,
                children: [
                    (0, r.jsx)(p.TextInput, {
                        value: this.state.name,
                        onChange: this.handleNameChange,
                        id: t,
                        inputRef: this.setInputRef,
                        maxLength: 100,
                        placeholder: function (e) {
                            switch (e) {
                            case V.d4z.GUILD_CATEGORY:
                                return q.Z.Messages.CATEGORY_NAME_PLACEHOLDER;
                            case V.d4z.GUILD_FORUM:
                                return q.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
                            default:
                                return q.Z.Messages.CHANNEL_NAME_PLACEHOLDER;
                            }
                        }(l),
                        className: Q.inputWrapper,
                        inputClassName: i ? void 0 : Q.inputInner,
                        prefixElement: i ? null : (0, r.jsx)(c, {
                            className: Q.inputPrefix,
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        autoFocus: !0
                    }),
                    e,
                    d
                ]
            })
        });
    }
    renderType() {
        let {
                cloneChannel: e,
                applications: t,
                canCreateStoreChannel: s,
                canCreateAnnouncementChannel: n,
                canCreateStageChannel: a,
                canCreateForumChannel: l,
                canCreateMediaChannel: i
            } = this.props, {
                channelType: o,
                isPrivate: d
            } = this.state;
        if (null != e || o === V.d4z.GUILD_CATEGORY)
            return;
        let c = null != t && t.length > 0;
        return (0, r.jsx)(p.FormItem, {
            className: Q.type,
            title: q.Z.Messages.CHANNEL_TYPE,
            children: (0, r.jsx)(p.RadioGroup, {
                options: function (e) {
                    let {
                            isPrivate: t,
                            showStoreChannelOption: s,
                            showAnnouncementChannelOption: n,
                            canCreateStageChannel: a,
                            canCreateForumChannel: l,
                            canCreateMediaChannel: i
                        } = e, o = [{
                                icon: t ? p.TextLockIcon : p.TextIcon,
                                label: q.Z.Messages.TEXT_CHANNEL_TYPE,
                                value: V.d4z.GUILD_TEXT,
                                description: q.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                            }];
                    return o.push({
                        icon: t ? p.VoiceLockIcon : p.VoiceNormalIcon,
                        label: q.Z.Messages.VOICE_CHANNEL_TYPE,
                        value: V.d4z.GUILD_VOICE,
                        description: q.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                    }), l && o.push({
                        icon: t ? p.ForumLockIcon : p.ForumIcon,
                        label: q.Z.Messages.FORUM_CHANNEL_TYPE,
                        value: V.d4z.GUILD_FORUM,
                        description: (0, r.jsxs)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: Q.radioLabelDescription,
                            children: [
                                q.Z.Messages.FORUM_CHANNEL_DESCRIPTION,
                                (0, r.jsx)('br', {}),
                                q.Z.Messages.LEARN_MORE_CLICK.format({
                                    onClick: () => {
                                        open(W.V8);
                                    }
                                })
                            ]
                        })
                    }), i && o.push({
                        icon: t ? p.ImageLockIcon : p.ImageIcon,
                        label: q.Z.Messages.MEDIA_CHANNEL_TYPE,
                        value: V.d4z.GUILD_MEDIA,
                        description: (0, r.jsxs)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: Q.radioLabelDescription,
                            children: [
                                q.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                                (0, r.jsx)('br', {}),
                                q.Z.Messages.LEARN_MORE_CLICK.format({
                                    onClick: () => {
                                        open(Y.Z.getCreatorSupportArticleURL(V.BhN.MEDIA_CHANNEL));
                                    }
                                })
                            ]
                        }),
                        isBeta: !0
                    }), n && o.push({
                        icon: p.AnnouncementsIcon,
                        iconSize: 24,
                        label: q.Z.Messages.NEWS_CHANNEL_TYPE,
                        value: V.d4z.GUILD_ANNOUNCEMENT,
                        description: q.Z.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION
                    }), s && o.push({
                        icon: p.TagIcon,
                        iconSize: 24,
                        label: q.Z.Messages.STORE_CHANNEL_TYPE,
                        value: V.d4z.GUILD_STORE,
                        description: q.Z.Messages.CREATE_STORE_CHANNEL_DESCRIPTION
                    }), a && o.push({
                        icon: p.StageIcon,
                        iconSize: 24,
                        label: q.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                        value: V.d4z.GUILD_STAGE_VOICE,
                        description: q.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                    }), o.map(e => {
                        let {
                            icon: t,
                            iconSize: s,
                            label: n,
                            value: a,
                            description: l,
                            isNew: i,
                            isBeta: o
                        } = e;
                        return {
                            name: (0, r.jsxs)('div', {
                                className: Q.radioItemName,
                                children: [
                                    (0, r.jsx)(t, {
                                        ...null != s ? {
                                            width: s,
                                            height: s,
                                            size: 'custom'
                                        } : { size: 'md' },
                                        color: 'currentColor',
                                        className: Q.icon,
                                        colorClass: Q.foreground
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsxs)(p.Text, {
                                                variant: 'text-md/medium',
                                                className: Q.radioLabelName,
                                                children: [
                                                    n,
                                                    (0, r.jsx)(J, {
                                                        isNew: i,
                                                        isBeta: o
                                                    })
                                                ]
                                            }),
                                            'string' == typeof l ? (0, r.jsx)(p.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-secondary',
                                                className: Q.radioLabelDescription,
                                                children: l
                                            }) : l
                                        ]
                                    })
                                ]
                            }),
                            value: a,
                            radioBarClassName: Q.radioBar,
                            radioItemIconClassName: Q.radioBarIcon
                        };
                    });
                }({
                    isPrivate: d,
                    showStoreChannelOption: s && c,
                    showAnnouncementChannelOption: n,
                    canCreateStageChannel: a,
                    canCreateForumChannel: l,
                    canCreateMediaChannel: i
                }),
                value: o,
                size: p.RadioGroup.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: Q.radioBarLabel
            })
        });
    }
    renderChannelTypeDescription(e) {
        let t;
        return (e === V.d4z.GUILD_ANNOUNCEMENT && (t = q.Z.Messages.FORM_HELP_NEWS.format({ documentationLink: Y.Z.getArticleURL(V.BhN.ANNOUNCEMENT_CHANNELS) })), null == t) ? null : (0, r.jsx)(p.FormText, {
            className: Q.channelTypeDescription,
            type: p.FormText.Types.DESCRIPTION,
            children: t
        });
    }
    renderStoreOptions() {
        let {applications: e} = this.props, {
                applicationId: t,
                skuId: s,
                branchId: n,
                showBranches: a,
                hasBranches: i
            } = this.state;
        if (null == e || 0 === e.length)
            throw Error('Unexpected empty applications');
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(p.FormTitle, {
                    tag: 'h5',
                    children: q.Z.Messages.CREATE_STORE_CHANNEL_APPLICATION
                }),
                (0, r.jsx)(p.SingleSelect, {
                    options: e.map(e => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: q.Z.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: Q.storeChannelOptionSelector
                }),
                null != t ? (0, r.jsxs)(l.Fragment, {
                    children: [
                        (0, r.jsx)(p.FormTitle, {
                            tag: 'h5',
                            children: q.Z.Messages.CREATE_STORE_CHANNEL_SKU
                        }),
                        (0, r.jsx)(A.Z, {
                            applicationId: t,
                            onChange: this.handleSKUChange,
                            selectedSkuId: s,
                            className: Q.storeChannelOptionSelector
                        }, t)
                    ]
                }) : null,
                null != t && i ? (0, r.jsxs)(p.FormSwitch, {
                    hideBorder: !0,
                    onChange: this.handleShowBranchesToggle,
                    value: a,
                    note: q.Z.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({ devPortalUrl: V.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                    children: [
                        (0, r.jsx)(p.KeyIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: Q.switchIcon
                        }),
                        q.Z.Messages.CREATE_STORE_CHANNEL_BETA_TITLE
                    ]
                }) : null,
                null != t ? (0, r.jsxs)(l.Fragment, {
                    children: [
                        a ? (0, r.jsx)(p.FormTitle, {
                            tag: 'h5',
                            children: q.Z.Messages.CREATE_STORE_CHANNEL_BRANCH
                        }) : null,
                        (0, r.jsx)(g.Z, {
                            applicationId: t,
                            onChange: this.handleBranchChange,
                            selectedBranchId: n,
                            hide: !a,
                            onHasBranchesChange: this.handleHasBranchesChange,
                            className: Q.storeChannelOptionSelector
                        }, t)
                    ]
                }) : null
            ]
        });
    }
    renderPrivacyOptions() {
        let {cloneChannel: e} = this.props, {
                channelType: t,
                isPrivate: s
            } = this.state;
        if (null != e || t === V.d4z.GUILD_ANNOUNCEMENT)
            return null;
        let n = t === V.d4z.GUILD_CATEGORY ? q.Z.Messages.PRIVATE_CATEGORY : q.Z.Messages.PRIVATE_CHANNEL, a = t === V.d4z.GUILD_CATEGORY ? q.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION : q.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
        return (0, r.jsx)(p.FormItem, {
            children: (0, r.jsxs)(p.FormSwitch, {
                hideBorder: !0,
                onChange: this.handlePrivacyChange,
                value: s,
                note: a,
                children: [
                    (0, r.jsx)(p.LockIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: Q.switchIcon
                    }),
                    n
                ]
            })
        }, 'privacy-switch');
    }
    renderError(e) {
        let t;
        let {
                channelType: s,
                isPrivate: n,
                errors: a
            } = this.state, {
                canConnect: l,
                canViewChannels: i
            } = this.props;
        if (Object.values(a).length > 0) {
            if (null != a.message && '' !== a.message)
                t = a.message;
            else if (e || null == a.name) {
                let e = Object.values(a)[0];
                e.length > 0 && (t = e);
            }
        } else
            n && !(0, S.nT)(s, i, l) && (t = (0, S.$7)(s));
        if (null != t)
            return (0, r.jsx)('div', {
                className: o()(Q.createError, { [Q.addMemberError]: e }),
                children: (0, r.jsx)(z.Z, {
                    messageType: z.Q.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e;
        let {
                channelType: t,
                onClose: s
            } = this.props, {channelType: n} = this.state, {isPrivate: a} = this.state;
        e = t === V.d4z.GUILD_CATEGORY ? q.Z.Messages.CREATE_CATEGORY : q.Z.Messages.CREATE_CHANNEL;
        let l = a || n === V.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsxs)(p.ModalFooter, {
            className: Q.modalFooter,
            children: [
                l ? (0, r.jsx)(p.Button, {
                    type: 'button',
                    onClick: () => {
                        this.setState({
                            slide: 'ADD_MEMBERS',
                            errors: {}
                        });
                    },
                    disabled: !this.canSubmit(),
                    children: q.Z.Messages.NEXT
                }) : (0, r.jsx)(p.Button, {
                    type: 'submit',
                    disabled: !this.canSubmit(),
                    children: e
                }),
                (0, r.jsx)(p.Button, {
                    onClick: s,
                    look: p.Button.Looks.LINK,
                    color: p.Button.Colors.PRIMARY,
                    children: q.Z.Messages.CANCEL
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e;
        let {channelType: t} = this.props, {pendingPermissionOverwrites: s} = this.state;
        return e = 0 === Object.keys(s).length ? q.Z.Messages.SKIP : t === V.d4z.GUILD_CATEGORY ? q.Z.Messages.CREATE_CATEGORY : q.Z.Messages.CREATE_CHANNEL, (0, r.jsxs)(p.ModalFooter, {
            children: [
                (0, r.jsx)(p.Button, {
                    type: 'submit',
                    disabled: !this.canSubmit(),
                    children: e
                }),
                (0, r.jsx)(p.Button, {
                    onClick: () => {
                        this.setState({ slide: 'CHANNEL_INFO' });
                    },
                    look: p.Button.Looks.LINK,
                    color: p.Button.Colors.PRIMARY,
                    children: q.Z.Messages.BACK
                })
            ]
        });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelContent() {
        let {channelType: e} = this.state;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderHeader(),
                (0, r.jsxs)(p.ModalContent, {
                    className: Q.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === V.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        this.renderChannelTypeDescription(e),
                        e === V.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
                    ]
                }),
                this.renderError(),
                this.renderFooter()
            ]
        });
    }
    renderAddMemberSlideContent() {
        let {
                name: e,
                channelType: t
            } = this.state, {
                guildId: s,
                onClose: n
            } = this.props, a = this.getIconComponent(), l = t === V.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(p.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Q.header,
                            children: [
                                (0, r.jsx)(p.Heading, {
                                    variant: 'heading-lg/semibold',
                                    className: Q.title,
                                    children: l ? q.Z.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE : q.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                }),
                                (0, r.jsxs)(p.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: Q.subtitle,
                                    children: [
                                        (0, r.jsx)(a, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Q.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(p.ModalCloseButton, {
                            onClick: n,
                            className: Q.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, r.jsx)(ee, {
                    onChange: this.handlePermissionOverwriteChange,
                    guildId: s,
                    channelType: t
                }),
                this.renderAddMemberFooter()
            ]
        });
    }
    renderSlides() {
        let {slide: e} = this.state, t = { impression_group: E.ImpressionGroups.CHANNEL_ADD_FLOW };
        return (0, r.jsx)('div', {
            children: (0, r.jsxs)(p.Slides, {
                activeSlide: e,
                width: 460,
                children: [
                    (0, r.jsx)(p.Slide, {
                        id: 'CHANNEL_INFO',
                        impressionName: E.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: t,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, r.jsx)(p.Slide, {
                        id: 'ADD_MEMBERS',
                        impressionName: E.ImpressionNames.CHANNEL_ADD_MEMBERS,
                        impressionProperties: t,
                        children: this.renderAddMemberSlideContent()
                    })
                ]
            })
        });
    }
    render() {
        let {transitionState: e} = this.props;
        return (0, r.jsx)(p.ModalRoot, {
            transitionState: e,
            className: Q.modal,
            'aria-labelledby': this.headerId,
            size: p.ModalSize.DYNAMIC,
            children: (0, r.jsx)('form', {
                onSubmit: this.handleSubmit,
                children: this.renderSlides()
            })
        });
    }
    constructor(e) {
        super(e), $(this, 'headerId', (0, F.hQ)()), $(this, '_input', void 0), $(this, 'setInputRef', e => {
            this._input = e;
        }), $(this, 'handleNameChange', e => {
            let {channelType: t} = this.state;
            P.xL.has(t) && (e = (0, w.Nj)(e)), this.setState({ name: e });
        }), $(this, 'handleTypeChange', e => {
            let {value: t} = e, {name: s} = this.state;
            P.xL.has(t) && (s = (0, w.Nj)(s)), t === V.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }), this.setState({
                channelType: t,
                name: s
            });
        }), $(this, 'handlePrivacyChange', e => {
            this.setState({ isPrivate: e });
        }), $(this, 'handleApplicationChange', e => {
            this.setState({ applicationId: e });
        }), $(this, 'handleSKUChange', e => {
            this.setState({ skuId: e });
        }), $(this, 'handleShowBranchesToggle', e => {
            this.setState({
                showBranches: e,
                branchId: null
            });
        }), $(this, 'handleBranchChange', e => {
            this.setState({ branchId: e });
        }), $(this, 'handleHasBranchesChange', e => {
            this.setState({ hasBranches: e });
        }), $(this, 'handleSubmit', async e => {
            let t, s, n;
            e.preventDefault();
            let {
                    cloneChannel: a,
                    categoryId: r,
                    user: l,
                    memberRoleIds: i,
                    isAdmin: o,
                    onClose: d,
                    owner: c
                } = this.props, {
                    name: h,
                    pendingPermissionOverwrites: E,
                    channelType: N,
                    skuId: C,
                    branchId: p,
                    isPrivate: _
                } = this.state, g = this.getGuildId();
            if (null != g) {
                if (null != a)
                    t = u().values(a.permissionOverwrites), s = a.bitrate, n = a.userLimit;
                else if (N === V.d4z.GUILD_ANNOUNCEMENT)
                    t = (0, w.rt)(g);
                else {
                    if (_) {
                        t = (0, w.oQ)(g, N, [], !0);
                        let e = (0, S.Tj)(E, N);
                        e.length > 0 && (t = t.concat(e));
                        let s = null != c && l.id === c.id;
                        !(t.some(e => i.has(e.id)) || o || s) && t.push((0, w.jZ)(l.id, N));
                    }
                    N === V.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(E).forEach(e => {
                        let {row: s} = e;
                        null != s.id && '' !== s.id && (s.rowType === K.aC.ROLE ? t.push((0, b.createModeratorOverwrite)(s.id, I.BN.ROLE)) : s.rowType === K.aC.MEMBER && t.push((0, b.createModeratorOverwrite)(s.id, I.BN.MEMBER)));
                    }));
                }
                this.setState({ errors: {} });
                try {
                    let e = await m.Z.createChannel({
                        guildId: g,
                        type: N,
                        name: h,
                        permissionOverwrites: t,
                        bitrate: s,
                        userLimit: n,
                        parentId: N !== V.d4z.GUILD_CATEGORY ? r : null,
                        skuId: C,
                        branchId: p
                    });
                    if (null == e || 201 !== e.status)
                        return;
                    let a = e.body;
                    P.xL.has(N) && (0, Z.XU)(a.guild_id, a.id), d();
                } catch (e) {
                    null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: q.Z.Messages.ERROR_OCCURRED_TRY_AGAIN } });
                }
            }
        });
        let {
            channelType: t,
            cloneChannel: s,
            prefillChannelName: n
        } = e;
        this.state = {
            channelType: null != t ? t : V.d4z.GUILD_TEXT,
            name: null != s ? (0, L.F6)(s, B.default, y.Z) : null != n ? n : '',
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: 'CHANNEL_INFO',
            errors: {}
        }, this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this);
    }
}
t.default = l.forwardRef(function (e, t) {
    let {
            channelType: s,
            guildId: n,
            cloneChannelId: a
        } = e, l = (0, C.cj)([
            H.Z,
            B.default,
            U.Z,
            G.Z,
            M.Z,
            f.ZP
        ], () => {
            var e, t, r;
            let l = H.Z.getGuild(n), i = B.default.getCurrentUser();
            c()(null != i, 'CreateChannel: user cannot be undefined');
            let o = null != l && null != l.ownerId ? B.default.getUser(l.ownerId) : null, d = new Set(null !== (t = null === (e = f.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []), h = U.Z.can(V.Plq.ADMINISTRATOR, l), u = G.Z.getChannel(a);
            return {
                guild: l,
                applications: M.Z.getGuildApplicationIds(n).map(e => M.Z.getApplication(e)).filter(k.lm),
                canCreateStoreChannel: null != l && l.hasFeature(V.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.hasFeature(V.oNc.NEWS),
                user: i,
                owner: o,
                memberRoleIds: d,
                canViewChannels: U.Z.can(V.Plq.VIEW_CHANNEL, l),
                canConnect: U.Z.can(V.Plq.CONNECT, l),
                isAdmin: h,
                cloneChannel: u,
                channelType: null !== (r = null == u ? void 0 : u.type) && void 0 !== r ? r : s,
                canManageRoles: U.Z.can(V.Plq.MANAGE_ROLES, l),
                canManageChannels: U.Z.can(V.Plq.MANAGE_CHANNELS, l)
            };
        }), {
            canManageRoles: i,
            canManageChannels: o
        } = l, d = (0, v.m)(n) && i && o, h = (0, x.W3)(n), u = (0, D.Ui)(null == l ? void 0 : l.guild);
    return (0, r.jsx)(et, {
        ...e,
        ...l,
        canCreateStageChannel: d,
        canCreateForumChannel: h,
        canCreateMediaChannel: u,
        ref: t
    });
});
