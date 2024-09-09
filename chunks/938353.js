n.d(t, {
    $p: function () {
        return e4;
    },
    BB: function () {
        return e7;
    },
    ZP: function () {
        return e3;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(390547);
var i,
    s = n(735250),
    a = n(470079),
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
    C = n(421474),
    f = n(603270),
    p = n(222709),
    g = n(446411),
    S = n(960904),
    A = n(161314),
    R = n(163268),
    O = n(25610),
    x = n(703751),
    M = n(761538),
    v = n(674611),
    L = n(346610),
    Z = n(868643),
    P = n(394779),
    D = n(294734),
    b = n(426275),
    j = n(947849),
    U = n(715903),
    y = n(71619),
    B = n(637618),
    k = n(225890),
    G = n(364097),
    F = n(495129),
    w = n(939170),
    V = n(505104),
    H = n(954654),
    Y = n(41776),
    W = n(628238),
    K = n(454585),
    z = n(768494),
    Q = n(124347),
    q = n(976853),
    X = n(346013),
    J = n(780088),
    $ = n(977683),
    ee = n(128435),
    et = n(98278),
    en = n(614825),
    ei = n(265299),
    es = n(699833),
    ea = n(344997),
    er = n(378233),
    el = n(374425),
    eo = n(665906),
    ec = n(432147),
    eu = n(695346),
    ed = n(314897),
    e_ = n(271383),
    eE = n(607744),
    eI = n(496675),
    em = n(594174),
    eT = n(52824),
    eh = n(626135),
    eN = n(70956),
    eC = n(408433),
    ef = n(630388),
    ep = n(823379),
    eg = n(709054),
    eS = n(591759),
    eA = n(169525),
    eR = n(161010),
    eO = n(461157),
    ex = n(901461),
    eM = n(432376),
    ev = n(384203),
    eL = n(633957),
    eZ = n(530472),
    eP = n(29909),
    eD = n(782658),
    eb = n(219797),
    ej = n(453687),
    eU = n(128854),
    ey = n(101578),
    eB = n(524444),
    ek = n(319323),
    eG = n(884182),
    eF = n(546432),
    ew = n(920888),
    eV = n(817384),
    eH = n(981631),
    eY = n(474936),
    eW = n(689938),
    eK = n(58755),
    ez = n(736514),
    eQ = n(680674);
function eq(e, t, n) {
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
function eX() {
    return (0, s.jsxs)('div', {
        className: ez.nitroFileSizeUpsell,
        children: [
            (0, s.jsx)('img', {
                src: eQ,
                className: ez.nitroBadgeSvg,
                alt: ''
            }),
            (0, s.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eW.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, et.z)() })
            })
        ]
    });
}
let eJ = 15 * eN.Z.Millis.MINUTE,
    e$ = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e0 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: a, proxyURL: r, width: l, height: o } = i;
        return (0, s.jsx)(eP.Z, {
            width: l,
            height: o,
            src: null != r && '' !== r ? r : a,
            url: null != e && '' !== e ? e : null != r && '' !== r ? r : a,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: ez.gifFavoriteButton
        });
    },
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: a } = e;
        return null != i && null != a && Q.u.test(n)
            ? (0, s.jsx)(eP.Z, {
                  width: i,
                  height: a,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: ez.gifFavoriteButton
              })
            : null;
    };
class e7 extends (i = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e$.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: s, message: a, poll: r } = this.props,
            { channel: l, message: o, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            s.type !== l.type ||
            c !== r ||
            o.codedLinks !== a.codedLinks ||
            o.flags !== a.flags ||
            o.giftCodes !== a.giftCodes ||
            o.attachments !== a.attachments ||
            o.embeds !== a.embeds ||
            o.components !== a.components ||
            o.activity !== a.activity ||
            ((n = o.reactions),
            n !== (i = a.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: s, burst_count: a } = e,
                            { emoji: r, count: l, burst_count: o } = i[t];
                        return a !== o || s !== l || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, s.jsx)('div', {
                  className: ez.ctaButtonContainer,
                  children: (0, s.jsx)(v.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eY.Lw);
        return (0, eR.M)('attachment') && t ? (0, s.jsx)(eX, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, s.jsx)(
                                eD.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, s.jsx)(G.Z, { code: i }, i);
                  if (n === S.g.EVENT) return (0, s.jsx)(k.Z, { code: i }, i);
                  else if (n === S.g.CHANNEL_LINK)
                      return (0, s.jsx)(
                          ev.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_PROFILE)
                      return (0, s.jsx)(
                          N.Z,
                          {
                              code: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.ACTIVITY_BOOKMARK)
                      return (0, s.jsx)(
                          T.Z,
                          {
                              applicationId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.GUILD_PRODUCT) return (0, s.jsx)(B.Z, { code: i }, i);
                  else if (n === S.g.SERVER_SHOP) return (0, s.jsx)(A.Z, { guildId: i }, i);
                  else if (n === S.g.QUESTS_EMBED) return (0, s.jsx)(ei.Z, { questId: i }, i);
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
                      return (0, s.jsx)(
                          f.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, C.Q)(i);
                      return null == t
                          ? null
                          : (0, s.jsx)(
                                f.F,
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
        let { giftCodes: t, author: n, channel_id: i, type: a, content: r, giftInfo: l } = e,
            o = em.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      'div',
                      {
                          className: ez.giftCodeContainer,
                          children: (0, s.jsx)(I.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: a,
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
            : (0, s.jsx)(
                  'div',
                  {
                      className: ez.referralContainer,
                      children: (0, s.jsx)(en.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: a, isGuest: r, isPendingMember: l, channel: o, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, s.jsx)(ew.Z, {
                  message: e,
                  channel: o,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: a,
                  isGuest: r,
                  isPendingMember: l,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { attachments: t, flags: n } = e,
            { channel: i, shouldRedactExplicitContent: a, hasInlineForwardButton: r } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
        let l = t.filter((e) => null == e.flags || !(0, ef.yE)(e.flags, eH.J0y.IS_THUMBNAIL));
        if (0 === l.length) return null;
        let { gifAutoPlay: o, canDeleteAttachments: c, inlineAttachmentMedia: u, onMediaItemContextMenu: d, shouldHideMediaOptions: _ } = this.props,
            E = l
                .map((t) =>
                    (0, J.j9)(
                        t,
                        (0, P.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        a
                    )
                )
                .filter(ep.lm),
            I = {
                source: 'Media Mosaic',
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            },
            m = E.length > 1 ? (0, J.Cx)(E, I) : {},
            T = (0, ef.yE)(n, eH.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, eA.dn)(e.originalItem, t);
        }
        let N = l.map((t) => {
                let n = (0, z.VY)(t),
                    s = {
                        message: e,
                        item: (0, eF.OB)(t, u),
                        autoPlayGif: o,
                        canRemoveItem: c && (l.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: ez.embedWrapper,
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
                        onPlay: (e, n, s) => {
                            eh.default.track(eH.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: i.guild_id,
                                channel_id: i.id,
                                channel_type: i.type,
                                type: t.content_type,
                                flags: t.flags,
                                size: t.size,
                                duration: s
                            });
                        },
                        gifFavoriteButton: e1(n),
                        isSearchResult: this.props.isSearchResult
                    },
                    a = (0, eT.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return a in m && (s.onClick = m[a]), s;
            }),
            C = r
                ? (0, s.jsx)(b.Z, {
                      className: eK.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: i.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, s.jsx)(eG.Z, {
            items: N,
            inlineForwardButton: C
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eV.b.has(t.type) || (0, eC.l3)(t) || ((0, w.b)(t) && !(0, V.M)(e))) return null;
                  let i = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT,
                      renderForwardComponent: (0, P.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eH.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let a = eS.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let r = a.pathname.split('/')[3];
                          if (null != r)
                              return (0, s.jsx)(
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
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: a } = this.props;
        return (0, s.jsx)(eU.F, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, s.jsx)(H.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, s.jsx)(ey.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eH.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(p.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ef.yE)(e.flags, eH.iLy.EPHEMERAL)
            ? (0, s.jsx)(eZ.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      E.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, er.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, s.jsx)(
                      el.Z,
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
        if (e.hasFlag(eH.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(ec.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eH.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eg.default.extractTimestamp(e.id) >= eJ))
                return (0, s.jsx)('div', {
                    className: ez.threadRoleMentionFailure,
                    children: eW.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eW.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: eW.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: eW.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, s.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: ez.confirmText,
                    children: eW.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, s.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eW.Z.Messages.SUPPRESS_EMBED_TIP
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
        return (0, s.jsx)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eW.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: eW.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: eW.Z.Messages.CANCEL,
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
            children: (0, s.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: ez.confirmText,
                children: eW.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(ek.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(eL.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eH.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(
                      X.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_POLICY_NOTICE ? (0, s.jsx)(es.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(ea.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eH.hBH.VOICE_CHANNEL)
            return (0, s.jsx)(F.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, R.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(M.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, s.jsx)(ee.Z, {
                message: e,
                poll: t,
                className: ez.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, s.jsx)(D.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: r } = this.state,
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
            C = this.renderStickersAccessories(t),
            f = this.renderThreadAccessories(t),
            p = this.renderComponentAccessories(t),
            g = this.renderThreadRoleMentionWarning(t),
            S = this.renderEmbeddedApplicationInstanceEmbed(t),
            A = this.renderInteractionPremiumUpsell(t),
            R = this.renderMediaPostEmbeds(t),
            O = this.renderSafetyPolicyNotice(t),
            x = this.renderSafetySystemNotification(t),
            M = this.renderVoiceChannelInvite(t, n),
            v = this.renderMediaObscureNotice(t),
            L = this.renderPoll(t, i),
            Z = this.renderForwardedMessage(t);
        return null == o && null == d && null == I && null == m && null == T && null == c && null == u && null == h && null == N && null == C && null == f && null == p && null == S && null == g && null == R && null == O && null != A && null == L && null == M && null == Z
            ? null
            : (0, s.jsxs)('div', {
                  id: (0, ej.bX)(t),
                  className: l()(e, ez.container),
                  children: [Z, g, L, o, c, u, R, d, _, I, v, m, C, p, S, A, E, T, h, N, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), f, O, x, M]
              });
    }
    constructor(...e) {
        super(...e),
            eq(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eq(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eq(this, 'renderEmbed', (e, t, n, i, a) => {
                let { gifAutoPlay: r, inlineEmbedMedia: l, canSuppressEmbeds: o, hasSpoilerEmbeds: c, shouldRedactExplicitContent: u, hasInlineForwardButton: d, isSearchResult: _ } = this.props,
                    E = (0, eA.BP)(e, a, i, c, u),
                    I = h.P.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !0 }).imageRecsEnabled;
                if (e.type === eH.hBH.GIFT) return null;
                let m = (0, s.jsx)(
                    j.h.Provider,
                    {
                        value: e0(e.url, e.image, e.video),
                        children: (0, s.jsx)(g.ZP, {
                            className: ez.embedWrapper,
                            embed: e,
                            obscureReason: null != E ? E : void 0,
                            autoPlayGif: r,
                            hideMedia: !l,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            messageId: i,
                            channelId: a,
                            showImageRecs: I,
                            isSearchResult: _,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, s.jsxs)('div', {
                          className: ez.embedContainer,
                          children: [
                              m,
                              (0, s.jsx)(b.Z, {
                                  className: eK.hideIfMessageNotFocused,
                                  messageId: i,
                                  channelId: a,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : m;
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === eH.hBH.RICH ? K.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eH.hBH.RICH
                    ? K.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eq(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eq(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e3(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: a, isMessageSnapshot: r } = e,
        l = (0, c.e7)([ed.default], () => ed.default.getId()),
        o = eu.x4.useSetting(),
        u = eu.RS.useSetting(),
        d = eu.NA.useSetting() && !(0, ex.Z)(e.message),
        _ = eu.nc.useSetting(),
        E = eu.QK.useSetting(),
        I = (0, c.e7)([eE.Z], () => null == n.guild_id || eE.Z.canChatInGuild(n.guild_id), [n]),
        m = (0, c.e7)([Y.Z], () => null != n.guild_id && Y.Z.isLurking(n.guild_id), [n]),
        T = (0, c.e7)([e_.ZP], () => e_.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([e_.ZP, em.default], () => {
            var e, t;
            let i = em.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = e_.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: N, canManageMessages: C } = (0, c.cj)(
            [eI.Z],
            () => ({
                canAddNewReactions: I && eI.Z.can(eH.Plq.ADD_REACTIONS, n),
                canManageMessages: eI.Z.can(eH.Plq.MANAGE_MESSAGES, n)
            }),
            [I, n]
        ),
        f = (0, U.ux)(n.guild_id),
        [, p] = (0, y.AB)(n.guild_id),
        g = (0, eo.$R)(n),
        S = (l === i.author.id || C) && i.author.id !== eH.LAt && !1 !== a && !(0, ef.yE)(i.flags, eH.iLy.EPHEMERAL) && g && 1 === (0, eO.Z)(i),
        A = l === i.author.id && g && !r,
        R = i.author.id === l,
        M = i.isFirstMessageInForumPost(n),
        v = (0, eM.Z)({
            channel: n,
            canChat: I,
            renderReactions: _,
            canAddNewReactions: N,
            isLurking: m,
            isGuest: T,
            communicationDisabled: p,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: f
        }),
        P = (0, W.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        D = (0, q.Z)(null == n ? void 0 : n.id),
        b = (0, $.Z)(i),
        j = (0, O.V)(n.id, i.author.id),
        B = (0, x.r)(i.id),
        { hasInlineForwardButton: k } = (0, L.yk)({ location: 'MessageAccessories' }),
        G = (0, Z.a)(i) && k;
    return (0, s.jsx)(e7, {
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
        poll: b,
        showListsAndHeaders: P,
        showMaskedLinks: P,
        shouldHideMediaOptions: D,
        shouldRedactExplicitContent: j,
        shouldRenderCtaButton: B,
        hasInlineForwardButton: G
    });
}
eq(e7, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e4 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: a = !1, renderComponentAccessory: r = !1, renderThreadAccessory: l = !1, disableReactionCreates: o = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        _ = eu.x4.useSetting(),
        E = eu.RS.useSetting(),
        I = eu.NA.useSetting(),
        m = eu.QK.useSetting(),
        T = (0, W.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        h = (0, q.Z)(null == i ? void 0 : i.id),
        N = (0, O.V)(i.id, n.author.id),
        C = (0, x.r)(n.id),
        f = (0, $.Z)(n);
    return (0, s.jsx)(e7, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: a,
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
        poll: f,
        showListsAndHeaders: T,
        showMaskedLinks: T,
        shouldHideMediaOptions: h,
        shouldRedactExplicitContent: N,
        shouldRenderCtaButton: C,
        hasInlineForwardButton: !1,
        isSearchResult: u
    });
};
