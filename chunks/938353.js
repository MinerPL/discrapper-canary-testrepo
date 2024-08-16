n.d(t, {
    $p: function () {
        return e3;
    },
    BB: function () {
        return e1;
    },
    ZP: function () {
        return e7;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(390547);
var i,
    a = n(735250),
    s = n(470079),
    r = n(120356),
    l = n.n(r),
    o = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    _ = n(481060),
    E = n(904245),
    I = n(637374),
    m = n(626799),
    T = n(624367),
    h = n(162609),
    N = n(433074),
    f = n(421474),
    C = n(603270),
    p = n(222709),
    g = n(446411),
    S = n(960904),
    A = n(161314),
    R = n(163268),
    x = n(25610),
    O = n(703751),
    M = n(761538),
    v = n(674611),
    L = n(346610),
    Z = n(868643),
    P = n(394779),
    b = n(294734),
    D = n(426275),
    j = n(947849),
    U = n(715903),
    y = n(71619),
    B = n(637618),
    k = n(225890),
    G = n(364097),
    F = n(495129),
    w = n(939170),
    V = n(954654),
    H = n(41776),
    Y = n(628238),
    W = n(454585),
    K = n(768494),
    z = n(124347),
    Q = n(976853),
    q = n(346013),
    X = n(780088),
    J = n(977683),
    $ = n(128435),
    ee = n(98278),
    et = n(614825),
    en = n(265299),
    ei = n(699833),
    ea = n(344997),
    es = n(378233),
    er = n(374425),
    el = n(665906),
    eo = n(432147),
    ec = n(695346),
    eu = n(314897),
    ed = n(271383),
    e_ = n(607744),
    eE = n(496675),
    eI = n(594174),
    em = n(52824),
    eT = n(626135),
    eh = n(70956),
    eN = n(408433),
    ef = n(630388),
    eC = n(823379),
    ep = n(709054),
    eg = n(591759),
    eS = n(169525),
    eA = n(161010),
    eR = n(461157),
    ex = n(901461),
    eO = n(432376),
    eM = n(384203),
    ev = n(633957),
    eL = n(530472),
    eZ = n(29909),
    eP = n(782658),
    eb = n(219797),
    eD = n(453687),
    ej = n(128854),
    eU = n(101578),
    ey = n(524444),
    eB = n(319323),
    ek = n(884182),
    eG = n(546432),
    eF = n(920888),
    ew = n(817384),
    eV = n(981631),
    eH = n(474936),
    eY = n(689938),
    eW = n(58755),
    eK = n(736514),
    ez = n(680674);
function eQ(e, t, n) {
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
function eq() {
    return (0, a.jsxs)('div', {
        className: eK.nitroFileSizeUpsell,
        children: [
            (0, a.jsx)('img', {
                src: ez,
                className: eK.nitroBadgeSvg,
                alt: ''
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eY.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, ee.z)() })
            })
        ]
    });
}
let eX = 15 * eh.Z.Millis.MINUTE,
    eJ = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e$ = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: s, proxyURL: r, width: l, height: o } = i;
        return (0, a.jsx)(eZ.Z, {
            width: l,
            height: o,
            src: null != r && '' !== r ? r : s,
            url: null != e && '' !== e ? e : null != r && '' !== r ? r : s,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eK.gifFavoriteButton
        });
    },
    e0 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s } = e;
        return null != i && null != s && z.u.test(n)
            ? (0, a.jsx)(eZ.Z, {
                  width: i,
                  height: s,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eK.gifFavoriteButton
              })
            : null;
    };
class e1 extends (i = s.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eJ.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: a, message: s, poll: r } = this.props,
            { channel: l, message: o, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            a.type !== l.type ||
            c !== r ||
            o.codedLinks !== s.codedLinks ||
            o.flags !== s.flags ||
            o.giftCodes !== s.giftCodes ||
            o.attachments !== s.attachments ||
            o.embeds !== s.embeds ||
            o.components !== s.components ||
            o.activity !== s.activity ||
            ((n = o.reactions),
            n !== (i = s.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: a, burst_count: s } = e,
                            { emoji: r, count: l, burst_count: o } = i[t];
                        return s !== o || a !== l || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, a.jsx)('div', {
                  className: eK.ctaButtonContainer,
                  children: (0, a.jsx)(v.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eH.Lw);
        return (0, eA.M)('attachment') && t ? (0, a.jsx)(eq, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, a.jsx)(
                                eP.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, a.jsx)(G.Z, { code: i }, i);
                  if (n === S.g.EVENT) return (0, a.jsx)(k.Z, { code: i }, i);
                  else if (n === S.g.CHANNEL_LINK)
                      return (0, a.jsx)(
                          eM.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_PROFILE)
                      return (0, a.jsx)(
                          N.Z,
                          {
                              code: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.ACTIVITY_BOOKMARK)
                      return (0, a.jsx)(
                          T.Z,
                          {
                              applicationId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.GUILD_PRODUCT) return (0, a.jsx)(B.Z, { code: i }, i);
                  else if (n === S.g.SERVER_SHOP) return (0, a.jsx)(A.Z, { guildId: i }, i);
                  else if (n === S.g.QUESTS_EMBED) return (0, a.jsx)(en.Z, { questId: i }, i);
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
                      return (0, a.jsx)(
                          C.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, f.Q)(i);
                      return null == t
                          ? null
                          : (0, a.jsx)(
                                C.F,
                                {
                                    skuId: t.skuId,
                                    message: e
                                },
                                i
                            );
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: s, content: r, giftInfo: l } = e,
            o = eI.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, a.jsx)(
                      'div',
                      {
                          className: eK.giftCodeContainer,
                          children: (0, a.jsx)(I.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: s,
                              content: r,
                              giftInfo: l
                          })
                      },
                      e
                  )
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: i } = this.props;
        return n !== o.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, a.jsx)(
                  'div',
                  {
                      className: eK.referralContainer,
                      children: (0, a.jsx)(et.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: s, isGuest: r, isPendingMember: l, channel: o, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, a.jsx)(eF.Z, {
                  message: e,
                  channel: o,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: s,
                  isGuest: r,
                  isPendingMember: l,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { attachments: t, flags: n } = e,
            { channel: i, shouldRedactExplicitContent: s, hasInlineForwardButton: r } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
        let l = t.filter((e) => null == e.flags || !(0, ef.yE)(e.flags, eV.J0y.IS_THUMBNAIL));
        if (0 === l.length) return null;
        let { gifAutoPlay: o, canDeleteAttachments: c, inlineAttachmentMedia: u, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = l
                .map((t) =>
                    (0, X.j9)(
                        t,
                        (0, P.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        s
                    )
                )
                .filter(eC.lm),
            I = {
                source: 'Media Mosaic',
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            },
            m = E.length > 1 ? (0, X.Cx)(E, I) : {},
            T = (0, ef.yE)(n, eV.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, eS.dn)(e.originalItem, t);
        }
        let N = l.map((t) => {
                let n = (0, K.VY)(t),
                    a = {
                        message: e,
                        item: (0, eG.OB)(t, u),
                        autoPlayGif: o,
                        canRemoveItem: c && (l.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eK.embedWrapper,
                        getObscureReason: h,
                        onContextMenu:
                            null != d
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), d(e, n);
                                  }
                                : void 0,
                        renderAudioComponent: T ? eb.jY : eb.q7,
                        renderImageComponent: eb.dS,
                        renderVideoComponent: eb.vZ,
                        renderPlaintextFilePreview: eb.d4,
                        renderGenericFileComponent: eb.ZK,
                        renderMosaicItemFooter: eb.L9,
                        onPlay: (e, n, a) => {
                            eT.default.track(eV.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: i.guild_id,
                                channel_id: i.id,
                                channel_type: i.type,
                                type: t.content_type,
                                flags: t.flags,
                                size: t.size,
                                duration: a
                            });
                        },
                        gifFavoriteButton: e0(n),
                        isSearchResult: this.props.isSearchResult
                    },
                    s = (0, em.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return s in m && (a.onClick = m[s]), a;
            }),
            f = r
                ? (0, a.jsx)(D.Z, {
                      className: eW.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: i.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, a.jsx)(ek.Z, {
            items: N,
            inlineForwardButton: f
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (ew.b.has(t.type) || (0, eN.l3)(t) || (0, w.b)(t)) return null;
                  let i = {
                      renderImageComponent: ey.Yi,
                      renderVideoComponent: ey.lV,
                      renderLinkComponent: ey.iT,
                      renderForwardComponent: (0, P.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eV.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let s = eg.Z.safeParseWithQuery(t.url);
                      if (null != s && null != s.pathname) {
                          let r = s.pathname.split('/')[3];
                          if (null != r)
                              return (0, a.jsx)(
                                  m.Z,
                                  {
                                      skuId: r,
                                      renderFallback: () => this.renderEmbed(t, n, i, e.id, e.channel_id)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, i, e.id, e.channel_id);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: s } = this.props;
        return (0, a.jsx)(ej.F, {
            gifAutoPlay: t,
            getGifFavButton: e0,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, a.jsx)(V.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, a.jsx)(eU.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eV.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, a.jsx)(p.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ef.yE)(e.flags, eV.iLy.EPHEMERAL)
            ? (0, a.jsx)(eL.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      E.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, es.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, a.jsx)(
                      er.Z,
                      {
                          channel: n,
                          isInteracting: i,
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eV.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(eo.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eV.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - ep.default.extractTimestamp(e.id) >= eX))
                return (0, a.jsx)('div', {
                    className: eK.threadRoleMentionFailure,
                    children: eY.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, a.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eY.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eY.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eY.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eK.confirmText,
                    children: eY.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eY.Z.Messages.SUPPRESS_EMBED_TIP
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        if (null == n) {
            this.setState({ showRemoveAttachmentModal: !1 });
            return;
        }
        return (0, a.jsx)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eY.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eY.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eY.Z.Messages.CANCEL,
            onCancel: () =>
                this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                }),
            onConfirm: () => {
                let i = t.attachments.filter((e) => e.id !== n.id);
                E.Z.patchMessageAttachments(e.id, t.id, i),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, a.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eK.confirmText,
                children: eY.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, a.jsx)(eB.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, a.jsx)(ev.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eV.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, a.jsx)(
                      q.Z,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel
                      },
                      t.id
                  )
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_POLICY_NOTICE ? (0, a.jsx)(ei.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(ea.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eV.hBH.VOICE_CHANNEL)
            return (0, a.jsx)(F.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, R.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(M.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, a.jsx)($.Z, {
                message: e,
                poll: t,
                className: eK.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(b.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: r } = this.state,
            o = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            d = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            E = this.renderSocialProofingFileSizeNitroUpsell(t),
            I = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            T = this.renderReactions(t),
            h = this.renderPublishBump(t),
            N = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            C = this.renderThreadAccessories(t),
            p = this.renderComponentAccessories(t),
            g = this.renderThreadRoleMentionWarning(t),
            S = this.renderEmbeddedApplicationInstanceEmbed(t),
            A = this.renderInteractionPremiumUpsell(t),
            R = this.renderMediaPostEmbeds(t),
            x = this.renderSafetyPolicyNotice(t),
            O = this.renderSafetySystemNotification(t),
            M = this.renderVoiceChannelInvite(t, n),
            v = this.renderMediaObscureNotice(t),
            L = this.renderPoll(t, i),
            Z = this.renderForwardedMessage(t);
        return null == o && null == d && null == I && null == m && null == T && null == c && null == u && null == h && null == N && null == f && null == C && null == p && null == S && null == g && null == R && null == x && null != A && null == L && null == M && null == Z
            ? null
            : (0, a.jsxs)('div', {
                  id: (0, eD.bX)(t),
                  className: l()(e, eK.container),
                  children: [Z, g, L, o, c, u, R, d, _, I, v, m, f, p, S, A, E, T, h, N, s && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), C, x, O, M]
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eQ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eQ(this, 'renderEmbed', (e, t, n, i, s) => {
                let { gifAutoPlay: r, inlineEmbedMedia: l, canSuppressEmbeds: o, hasSpoilerEmbeds: c, shouldRedactExplicitContent: u, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, eS.BP)(e, s, i, c, u),
                    I = h.P.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !0 }).imageRecsEnabled;
                if (e.type === eV.hBH.GIFT) return null;
                let m = (0, a.jsx)(
                    j.h.Provider,
                    {
                        value: e$(e.url, e.image, e.video),
                        children: (0, a.jsx)(g.ZP, {
                            className: eK.embedWrapper,
                            embed: e,
                            obscureReason: null != E ? E : void 0,
                            autoPlayGif: r,
                            hideMedia: !l,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            messageId: i,
                            channelId: s,
                            showImageRecs: I,
                            isSearchResult: _,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, a.jsxs)('div', {
                          className: eK.embedContainer,
                          children: [
                              m,
                              (0, a.jsx)(D.Z, {
                                  className: eW.hideIfMessageNotFocused,
                                  messageId: i,
                                  channelId: s,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : m;
            }),
            eQ(this, 'renderEmbedTitle', (e, t) => (e.type === eV.hBH.RICH ? W.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eQ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eV.hBH.RICH
                    ? W.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eQ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eQ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e7(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: s, isMessageSnapshot: r } = e,
        l = (0, c.e7)([eu.default], () => eu.default.getId()),
        o = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, ex.Z)(e.message),
        _ = ec.nc.useSetting(),
        E = ec.QK.useSetting(),
        I = (0, c.e7)([e_.Z], () => null == n.guild_id || e_.Z.canChatInGuild(n.guild_id), [n]),
        m = (0, c.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        T = (0, c.e7)([ed.ZP], () => ed.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([ed.ZP, eI.default], () => {
            var e, t;
            let i = eI.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = ed.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: N, canManageMessages: f } = (0, c.cj)(
            [eE.Z],
            () => ({
                canAddNewReactions: I && eE.Z.can(eV.Plq.ADD_REACTIONS, n),
                canManageMessages: eE.Z.can(eV.Plq.MANAGE_MESSAGES, n)
            }),
            [I, n]
        ),
        C = (0, U.ux)(n.guild_id),
        [, p] = (0, y.AB)(n.guild_id),
        g = (0, el.$R)(n),
        S = (l === i.author.id || f) && i.author.id !== eV.LAt && !1 !== s && !(0, ef.yE)(i.flags, eV.iLy.EPHEMERAL) && g && 1 === (0, eR.Z)(i),
        A = l === i.author.id && g && !r,
        R = i.author.id === l,
        M = i.isFirstMessageInForumPost(n),
        v = (0, eO.Z)({
            channel: n,
            canChat: I,
            renderReactions: _,
            canAddNewReactions: N,
            isLurking: m,
            isGuest: T,
            communicationDisabled: p,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: C
        }),
        P = (0, Y.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        b = (0, Q.Z)(null == n ? void 0 : n.id),
        D = (0, J.Z)(i),
        j = (0, x.V)(n.id, i.author.id),
        B = (0, O.r)(i.id),
        { hasInlineForwardButton: k } = (0, L.yk)({ location: 'MessageAccessories' }),
        G = (0, Z.a)(i) && k;
    return (0, a.jsx)(e1, {
        canSuppressEmbeds: S,
        canDeleteAttachments: A,
        ...v,
        disableReactionReads: !!M || v.disableReactionReads,
        ...e,
        isLurking: m && I,
        isGuest: T && I,
        isPendingMember: h && I,
        isCurrentUser: R,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: u,
        renderEmbeds: d,
        gifAutoPlay: E,
        canRenderReferralEmbed: n.isDM(),
        poll: D,
        showListsAndHeaders: P,
        showMaskedLinks: P,
        shouldHideMediaOptions: b,
        shouldRedactExplicitContent: j,
        shouldRenderCtaButton: B,
        hasInlineForwardButton: G
    });
}
eQ(e1, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e3 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: s = !1, renderComponentAccessory: r = !1, renderThreadAccessory: l = !1, disableReactionCreates: o = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        _ = ec.x4.useSetting(),
        E = ec.RS.useSetting(),
        I = ec.NA.useSetting(),
        m = ec.QK.useSetting(),
        T = (0, Y.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        h = (0, Q.Z)(null == i ? void 0 : i.id),
        N = (0, x.V)(i.id, n.author.id),
        f = (0, O.r)(n.id),
        C = (0, J.Z)(n);
    return (0, a.jsx)(e1, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: s,
        disableReactionCreates: o,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: r,
        renderThreadAccessory: l,
        inlineAttachmentMedia: _,
        inlineEmbedMedia: E,
        renderEmbeds: I,
        gifAutoPlay: m,
        poll: C,
        showListsAndHeaders: T,
        showMaskedLinks: T,
        shouldHideMediaOptions: h,
        shouldRedactExplicitContent: N,
        shouldRenderCtaButton: f,
        hasInlineForwardButton: !1,
        isSearchResult: u
    });
};
