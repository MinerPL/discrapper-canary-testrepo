n.d(t, {
    $p: function () {
        return e7;
    },
    BB: function () {
        return e0;
    },
    ZP: function () {
        return e1;
    }
}), n(47120), n(789020), n(411104), n(390547);
var i, a = n(735250), s = n(470079), l = n(120356), r = n.n(l), o = n(275726), c = n(442837), d = n(377108), u = n(902704), _ = n(481060), E = n(904245), m = n(637374), I = n(626799), T = n(911969), h = n(624367), N = n(433074), f = n(421474), p = n(603270), C = n(222709), g = n(960904), S = n(161314), A = n(163268), x = n(25610), O = n(703751), R = n(761538), M = n(674611), v = n(346610), L = n(868643), Z = n(394779), P = n(294734), b = n(426275), D = n(715903), j = n(71619), U = n(637618), y = n(225890), B = n(364097), k = n(495129), G = n(954654), F = n(41776), w = n(628238), V = n(454585), H = n(768494), Y = n(976853), W = n(346013), z = n(977683), K = n(128435), Q = n(98278), q = n(614825), X = n(265299), J = n(699833), $ = n(344997), ee = n(378233), et = n(374425), en = n(665906), ei = n(432147), ea = n(695346), es = n(314897), el = n(271383), er = n(607744), eo = n(496675), ec = n(594174), ed = n(529815), eu = n(261922), e_ = n(941797), eE = n(52824), em = n(727779), eI = n(310043), eT = n(69750), eh = n(592256), eN = n(626135), ef = n(70956), ep = n(408433), eC = n(630388), eg = n(823379), eS = n(709054), eA = n(591759), ex = n(169525), eO = n(161010), eR = n(461157), eM = n(901461), ev = n(432376), eL = n(384203), eZ = n(633957), eP = n(29909), eb = n(782658), eD = n(219797), ej = n(453687), eU = n(128854), ey = n(101578), eB = n(524444), ek = n(319323), eG = n(920888), eF = n(817384), ew = n(981631), eV = n(474936), eH = n(689938), eY = n(105461), eW = n(928959), ez = n(680674);
function eK(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function eQ() {
    return (0, a.jsxs)('div', {
        className: eW.nitroFileSizeUpsell,
        children: [
            (0, a.jsx)('img', {
                src: ez,
                className: eW.nitroBadgeSvg,
                alt: ''
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eH.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, Q.z)() })
            })
        ]
    });
}
let eq = 15 * ef.Z.Millis.MINUTE, eX = new Set([
        'discord-developers',
        'discord-testers',
        'discord-townhall',
        'discordgameslab'
    ]), eJ = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i)
            return null;
        let {
            url: s,
            proxyURL: l,
            width: r,
            height: o
        } = i;
        return (0, a.jsx)(eP.Z, {
            width: r,
            height: o,
            src: null != l && '' !== l ? l : s,
            url: null != e && '' !== e ? e : null != l && '' !== l ? l : s,
            format: null != n ? d.EO.VIDEO : d.EO.IMAGE,
            className: eW.gifFavoriteButton
        });
    }, e$ = e => () => {
        let {
            url: t,
            proxyUrl: n,
            width: i,
            height: s
        } = e;
        return null != i && null != s && eu.u.test(n) ? (0, a.jsx)(eP.Z, {
            width: i,
            height: s,
            src: n,
            url: t,
            format: d.EO.IMAGE,
            className: eW.gifFavoriteButton
        }) : null;
    };
class e0 extends (i = s.Component) {
    shouldRenderInvite(e) {
        let {channel: t} = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eX.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let {
                channel: a,
                message: s,
                poll: l
            } = this.props, {
                channel: r,
                message: o,
                poll: c
            } = e;
        return !(0, u.Z)(this.state, t) || !(0, u.Z)(this.props, e, [
            'message',
            'channel'
        ]) || a.type !== r.type || c !== l || o.codedLinks !== s.codedLinks || o.flags !== s.flags || o.giftCodes !== s.giftCodes || o.attachments !== s.attachments || o.embeds !== s.embeds || o.components !== s.components || o.activity !== s.activity || (n = o.reactions, n !== (i = s.reactions) && (n.length !== i.length || !!n.some((e, t) => {
            let {
                    emoji: n,
                    count: a,
                    burst_count: s
                } = e, {
                    emoji: l,
                    count: r,
                    burst_count: o
                } = i[t];
            return s !== o || a !== r || n.id !== l.id || n.name !== l.name;
        })));
    }
    renderCtaButton() {
        let {
            message: e,
            channel: t,
            shouldRenderCtaButton: n
        } = this.props;
        return n ? (0, a.jsx)('div', {
            className: eW.ctaButtonContainer,
            children: (0, a.jsx)(M.Z, {
                messageId: e.id,
                channelId: t.id
            })
        }) : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some(e => e.size > eV.Lw);
        return (0, eO.M)('attachment') && t ? (0, a.jsx)(eQ, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
            let {
                type: n,
                code: i
            } = t;
            if (n === g.g.INVITE)
                return this.shouldRenderInvite(i) ? (0, a.jsx)(eb.Z, {
                    code: i,
                    author: e.author,
                    getAcceptInviteContext: this.getAcceptInviteContext
                }, i) : null;
            if (n === g.g.TEMPLATE)
                return (0, a.jsx)(B.Z, { code: i }, i);
            if (n === g.g.EVENT)
                return (0, a.jsx)(y.Z, { code: i }, i);
            else if (n === g.g.CHANNEL_LINK)
                return (0, a.jsx)(eL.Z, {
                    code: i,
                    messageData: e
                }, i);
            else if (n === g.g.APP_DIRECTORY_PROFILE)
                return (0, a.jsx)(N.Z, {
                    code: i,
                    message: e
                }, i);
            else if (n === g.g.ACTIVITY_BOOKMARK)
                return (0, a.jsx)(h.Z, {
                    applicationId: i,
                    message: e
                }, i);
            else if (n === g.g.GUILD_PRODUCT)
                return (0, a.jsx)(U.Z, { code: i }, i);
            else if (n === g.g.SERVER_SHOP)
                return (0, a.jsx)(S.Z, { guildId: i }, i);
            else if (n === g.g.QUESTS_EMBED)
                return (0, a.jsx)(X.Z, { questId: i }, i);
            else if (n === g.g.APP_DIRECTORY_STOREFRONT)
                return (0, a.jsx)(p.P, {
                    appId: i,
                    message: e
                }, i);
            else if (n === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
                let t = (0, f.Q)(i);
                return null == t ? null : (0, a.jsx)(p.F, {
                    skuId: t.skuId,
                    message: e
                }, i);
            } else
                throw Error('Unknown coded link type: '.concat(n));
        });
    }
    renderGiftCodes(e) {
        let {
                giftCodes: t,
                author: n,
                channel_id: i,
                type: s,
                content: l,
                giftInfo: r
            } = e, o = ec.default.getCurrentUser();
        return null != o && t.length > 0 ? t.map(e => (0, a.jsx)('div', {
            className: eW.giftCodeContainer,
            children: (0, a.jsx)(m.Z, {
                code: e,
                author: n,
                channelId: i,
                currentUser: o,
                type: s,
                content: l,
                giftInfo: r
            })
        }, e)) : null;
    }
    renderReferralTrial(e) {
        let {
                referralTrialOfferId: t,
                type: n
            } = e, {canRenderReferralEmbed: i} = this.props;
        return n !== o.u.PREMIUM_REFERRAL || null == t ? null : (0, a.jsx)('div', {
            className: eW.referralContainer,
            children: (0, a.jsx)(q.Z, {
                userTrialOfferId: t,
                canRenderReferralEmbed: null != i && i
            })
        }, t);
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: i,
            isLurking: s,
            isGuest: l,
            isPendingMember: r,
            channel: o,
            forceAddReactions: c
        } = this.props;
        return n ? null : (0, a.jsx)(eG.Z, {
            message: e,
            channel: o,
            disableReactionCreates: t,
            disableReactionUpdates: i,
            isLurking: s,
            isGuest: l,
            isPendingMember: r,
            forceAddReactions: c,
            useChatFontScaling: !0
        });
    }
    renderAttachments(e) {
        let {
                attachments: t,
                flags: n
            } = e, {
                channel: i,
                shouldRedactExplicitContent: s,
                hasInlineForwardButton: l
            } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents())
            return null;
        let r = t.filter(e => null == e.flags || !(0, eC.yE)(e.flags, ew.J0y.IS_THUMBNAIL));
        if (0 === r.length)
            return null;
        let {
                gifAutoPlay: o,
                canDeleteAttachments: c,
                inlineAttachmentMedia: d,
                onMediaItemContextMenu: u,
                shouldHideMediaOptions: _
            } = this.props, E = r.map(t => (0, eh.j9)(t, (0, Z.s)(e, {
                type: 'attachment',
                attachmentId: t.id
            }), _, s)).filter(eg.lm), m = {
                source: 'Media Mosaic',
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            }, I = E.length > 1 ? (0, eh.Cx)(E, m) : {}, T = (0, eC.yE)(n, ew.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, ex.dn)(e.originalItem, t);
        }
        let N = r.map(t => {
                let n = (0, H.VY)(t), a = {
                        message: e,
                        item: (0, eT.OB)(t, d),
                        autoPlayGif: o,
                        canRemoveItem: c && (r.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eW.embedWrapper,
                        getObscureReason: h,
                        onContextMenu: null != u ? e => {
                            e.stopPropagation(), e.preventDefault(), u(e, n);
                        } : void 0,
                        renderAudioComponent: T ? eD.jY : eD.q7,
                        renderImageComponent: eD.dS,
                        renderVideoComponent: eD.vZ,
                        renderPlaintextFilePreview: eD.d4,
                        renderGenericFileComponent: eD.ZK,
                        renderMosaicItemFooter: eD.L9,
                        onPlay: (e, n, a) => {
                            eN.default.track(ew.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: i.guild_id,
                                channel_id: i.id,
                                channel_type: i.type,
                                type: t.content_type,
                                flags: t.flags,
                                size: t.size,
                                duration: a
                            });
                        },
                        gifFavoriteButton: e$(n)
                    }, s = (0, eE.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return s in I && (a.onClick = I[s]), a;
            }), f = l ? (0, a.jsx)(b.Z, {
                className: eY.hideIfMessageNotFocused,
                messageId: e.id,
                channelId: i.id,
                targetKind: 'media'
            }) : void 0;
        return (0, a.jsx)(eI.Z, {
            items: N,
            inlineForwardButton: f
        });
    }
    renderEmbeds(e) {
        let {renderEmbeds: t} = this.props;
        return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
            if (eF.b.has(t.type) || (0, ep.l3)(t))
                return null;
            let i = {
                renderImageComponent: eB.Yi,
                renderVideoComponent: eB.lV,
                renderLinkComponent: eB.iT,
                renderForwardComponent: (0, Z.s)(e, {
                    type: 'embed',
                    embedIndex: n
                })
            };
            if (t.type === ew.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                let s = eA.Z.safeParseWithQuery(t.url);
                if (null != s && null != s.pathname) {
                    let l = s.pathname.split('/')[3];
                    if (null != l)
                        return (0, a.jsx)(I.Z, {
                            skuId: l,
                            renderFallback: () => this.renderEmbed(t, n, i, e.id, e.channel_id)
                        }, t.id);
                }
            }
            return this.renderEmbed(t, n, i, e.id, e.channel_id);
        }) : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory)
            return null;
        let {
            gifAutoPlay: t,
            shouldRedactExplicitContent: n,
            shouldHideMediaOptions: i,
            onMediaItemContextMenu: s
        } = this.props;
        return (0, a.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e$,
            getOnMediaItemContextMenu: null == s ? void 0 : e => t => {
                t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
            },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, a.jsx)(G.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity)
            return null;
        let {channel: t} = this.props;
        return (0, a.jsx)(ey.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ew.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, a.jsx)(C.Z, {
            channelId: e.channel_id,
            messageId: e.id
        });
    }
    renderEphemeralAccessories(e) {
        return (0, eC.yE)(e.flags, ew.iLy.EPHEMERAL) ? (0, a.jsx)(em.Z, {
            message: e,
            onDeleteMessage: () => {
                E.Z.dismissAutomatedMessage(e);
            }
        }) : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ee.cv)(e), {
                channel: n,
                isInteracting: i
            } = this.props;
        return 0 === t.length ? null : t.map(e => (0, a.jsx)(et.Z, {
            channel: n,
            isInteracting: i,
            renderableSticker: e
        }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(ew.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(ei.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(ew.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eS.default.extractTimestamp(e.id) >= eq))
                return (0, a.jsx)('div', {
                    className: eW.threadRoleMentionFailure,
                    children: eH.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let {
            channel: e,
            message: t
        } = this.props;
        return (0, a.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eH.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eH.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eH.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eW.confirmText,
                    children: eH.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eH.Z.Messages.SUPPRESS_EMBED_TIP
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let {
                channel: e,
                message: t
            } = this.props, {attachmentToDelete: n} = this.state;
        if (null == n) {
            this.setState({ showRemoveAttachmentModal: !1 });
            return;
        }
        return (0, a.jsx)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eH.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eH.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eH.Z.Messages.CANCEL,
            onCancel: () => this.setState({
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            onConfirm: () => {
                let i = t.attachments.filter(e => e.id !== n.id);
                E.Z.patchMessageAttachments(e.id, t.id, i), this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                });
            },
            children: (0, a.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eW.confirmText,
                children: eH.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(ek.Z, {
            applicationId: t,
            guildId: this.props.channel.guild_id
        });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let {
            application: t,
            activityInstance: n,
            interaction: i
        } = e;
        return null == t || null == n || (null == i ? void 0 : i.type) !== T.B8.APPLICATION_COMMAND ? null : (0, a.jsx)(eZ.Z, {
            application: t,
            channelId: this.props.channel.id,
            guildId: this.props.channel.guild_id
        });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap(t => t.type !== ew.hBH.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(W.Z, {
            embedUrl: t.url,
            message: e,
            channel: this.props.channel
        }, t.id));
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ew.hBH.SAFETY_POLICY_NOTICE ? (0, a.jsx)(J.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ew.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)($.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === ew.hBH.VOICE_CHANNEL)
            return (0, a.jsx)(k.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length)
            return null;
        let {
            obscuredAttachments: t,
            obscuredEmbeds: n
        } = (0, A.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(R.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, a.jsx)(K.Z, {
                message: e,
                poll: t,
                className: eW.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(P.Z, { message: e });
    }
    render() {
        let {
                className: e,
                message: t,
                channel: n,
                poll: i
            } = this.props, {
                showSuppressModal: s,
                showRemoveAttachmentModal: l
            } = this.state, o = this.renderCodedLinks(t), c = this.renderGiftCodes(t), d = this.renderReferralTrial(t), u = this.renderAttachments(t), _ = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), m = this.renderEmbeds(t), I = this.renderActivityInvite(t), T = this.renderReactions(t), h = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), f = this.renderStickersAccessories(t), p = this.renderThreadAccessories(t), C = this.renderComponentAccessories(t), g = this.renderThreadRoleMentionWarning(t), S = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), x = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), M = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), L = this.renderPoll(t, i), Z = this.renderForwardedMessage(t);
        return null == o && null == u && null == m && null == I && null == T && null == c && null == d && null == h && null == N && null == f && null == p && null == C && null == S && null == g && null == x && null == O && null != A && null == L && null == M && null == Z ? null : (0, a.jsxs)('div', {
            id: (0, ej.bX)(t),
            className: r()(e, eW.container),
            children: [
                Z,
                g,
                L,
                o,
                c,
                d,
                x,
                u,
                _,
                m,
                v,
                I,
                f,
                C,
                S,
                A,
                E,
                T,
                h,
                N,
                s && this.renderSuppressConfirmModal(),
                l && this.renderRemoveAttachmentConfirmModal(),
                p,
                O,
                R,
                M
            ]
        });
    }
    constructor(...e) {
        super(...e), eK(this, 'state', {
            showSuppressModal: !1,
            showRemoveAttachmentModal: !1,
            attachmentToDelete: null
        }), eK(this, 'getAcceptInviteContext', e => {
            let {
                channel: t,
                message: n
            } = this.props;
            return {
                location: e,
                location_guild_id: t.getGuildId(),
                location_channel_id: t.id,
                location_channel_type: t.type,
                location_message_id: n.id
            };
        }), eK(this, 'renderEmbed', (e, t, n, i, s) => {
            let {
                    gifAutoPlay: l,
                    inlineEmbedMedia: r,
                    canSuppressEmbeds: o,
                    hasSpoilerEmbeds: c,
                    shouldRedactExplicitContent: d,
                    hasInlineForwardButton: u
                } = this.props, _ = (0, ex.BP)(e, s, i, c, d);
            if (e.type === ew.hBH.GIFT)
                return null;
            let E = (0, a.jsx)(e_.h.Provider, {
                value: eJ(e.url, e.image, e.video),
                children: (0, a.jsx)(ed.ZP, {
                    className: eW.embedWrapper,
                    embed: e,
                    obscureReason: null != _ ? _ : void 0,
                    autoPlayGif: l,
                    hideMedia: !r,
                    onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    messageId: i,
                    channelId: s,
                    ...n
                })
            }, e.id);
            return u ? (0, a.jsxs)('div', {
                className: eW.embedContainer,
                children: [
                    E,
                    (0, a.jsx)(b.Z, {
                        className: eY.hideIfMessageNotFocused,
                        messageId: i,
                        channelId: s,
                        targetKind: 'embed',
                        embedIndex: t
                    })
                ]
            }) : E;
        }), eK(this, 'renderEmbedTitle', (e, t) => e.type === ew.hBH.RICH ? V.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t), eK(this, 'renderEmbedDescription', (e, t, n) => e.type === ew.hBH.RICH ? V.Z.parse(t, !0, {
            channelId: this.props.channel.id,
            allowLinks: !0,
            allowEmojiLinks: !0,
            allowList: this.props.showListsAndHeaders,
            allowHeading: !n && this.props.showListsAndHeaders,
            previewLinkTarget: this.props.showMaskedLinks
        }) : t), eK(this, 'handleEmbedSuppressed', e => {
            let {
                channel: t,
                message: n
            } = this.props;
            e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
        }), eK(this, 'handleRemoveAttachment', e => {
            let t = e.originalItem;
            this.setState({
                showRemoveAttachmentModal: !0,
                attachmentToDelete: t
            });
        });
    }
}
function e1(e) {
    var t;
    let {
            channel: n,
            message: i,
            renderSuppressEmbeds: s,
            isMessageSnapshot: l
        } = e, r = (0, c.e7)([es.default], () => es.default.getId()), o = ea.x4.useSetting(), d = ea.RS.useSetting(), u = ea.NA.useSetting() && !(0, eM.Z)(e.message), _ = ea.nc.useSetting(), E = ea.QK.useSetting(), m = (0, c.e7)([er.Z], () => null == n.guild_id || er.Z.canChatInGuild(n.guild_id), [n]), I = (0, c.e7)([F.Z], () => null != n.guild_id && F.Z.isLurking(n.guild_id), [n]), T = (0, c.e7)([el.ZP], () => el.ZP.isCurrentUserGuest(n.guild_id), [n]), h = (0, c.e7)([
            el.ZP,
            ec.default
        ], () => {
            var e, t;
            let i = ec.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? null === (e = el.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
        }), {
            canAddNewReactions: N,
            canManageMessages: f
        } = (0, c.cj)([eo.Z], () => ({
            canAddNewReactions: m && eo.Z.can(ew.Plq.ADD_REACTIONS, n),
            canManageMessages: eo.Z.can(ew.Plq.MANAGE_MESSAGES, n)
        }), [
            m,
            n
        ]), p = (0, D.ux)(n.guild_id), [, C] = (0, j.AB)(n.guild_id), g = (0, en.$R)(n), S = (r === i.author.id || f) && i.author.id !== ew.LAt && !1 !== s && !(0, eC.yE)(i.flags, ew.iLy.EPHEMERAL) && g && 1 === (0, eR.Z)(i), A = r === i.author.id && g && !l, R = i.author.id === r, M = i.isFirstMessageInForumPost(n), Z = (0, ev.Z)({
            channel: n,
            canChat: m,
            renderReactions: _,
            canAddNewReactions: N,
            isLurking: I,
            isGuest: T,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: p
        }), P = (0, w.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), b = (0, Y.Z)(null == n ? void 0 : n.id), U = (0, z.Z)(i), y = (0, x.V)(n.id, i.author.id), B = (0, O.r)(i.id), {hasInlineForwardButton: k} = v.w.useExperiment({ location: 'MessageAccessories' }), G = (0, L.a)(i) && k;
    return (0, a.jsx)(e0, {
        canSuppressEmbeds: S,
        canDeleteAttachments: A,
        ...Z,
        disableReactionReads: !!M || Z.disableReactionReads,
        ...e,
        isLurking: I && m,
        isGuest: T && m,
        isPendingMember: h && m,
        isCurrentUser: R,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: d,
        renderEmbeds: u,
        gifAutoPlay: E,
        canRenderReferralEmbed: n.isDM(),
        poll: U,
        showListsAndHeaders: P,
        showMaskedLinks: P,
        shouldHideMediaOptions: b,
        shouldRedactExplicitContent: y,
        shouldRenderCtaButton: B,
        hasInlineForwardButton: G
    });
}
eK(e0, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e7 = e => {
    var t;
    let {
            message: n,
            channel: i,
            disableReactionReads: s = !1,
            renderComponentAccessory: l = !1,
            renderThreadAccessory: r = !1,
            disableReactionCreates: o = !0,
            disableReactionUpdates: c = !0,
            ...d
        } = e, u = ea.x4.useSetting(), _ = ea.RS.useSetting(), E = ea.NA.useSetting(), m = ea.QK.useSetting(), I = (0, w.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, Y.Z)(null == i ? void 0 : i.id), h = (0, x.V)(i.id, n.author.id), N = (0, O.r)(n.id), f = (0, z.Z)(n);
    return (0, a.jsx)(e0, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: s,
        disableReactionCreates: o,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: l,
        renderThreadAccessory: r,
        inlineAttachmentMedia: u,
        inlineEmbedMedia: _,
        renderEmbeds: E,
        gifAutoPlay: m,
        poll: f,
        showListsAndHeaders: I,
        showMaskedLinks: I,
        shouldHideMediaOptions: T,
        shouldRedactExplicitContent: h,
        shouldRenderCtaButton: N,
        hasInlineForwardButton: !1
    });
};
