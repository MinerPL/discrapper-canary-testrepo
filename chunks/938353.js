n.d(t, {
    $p: function () {
        return e5;
    },
    BB: function () {
        return e2;
    },
    ZP: function () {
        return e4;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(390547);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(275726),
    c = n(442837),
    d = n(377108),
    u = n(902704),
    _ = n(481060),
    E = n(904245),
    I = n(637374),
    m = n(626799),
    T = n(624367),
    N = n(433074),
    h = n(421474),
    C = n(603270),
    p = n(547682),
    f = n(162297),
    g = n(222709),
    A = n(446411),
    S = n(960904),
    M = n(161314),
    x = n(163268),
    O = n(25610),
    R = n(703751),
    v = n(761538),
    L = n(674611),
    Z = n(346610),
    P = n(868643),
    D = n(394779),
    b = n(294734),
    j = n(426275),
    U = n(947849),
    y = n(715903),
    B = n(71619),
    k = n(637618),
    G = n(225890),
    F = n(364097),
    w = n(495129),
    V = n(939170),
    H = n(505104),
    Y = n(954654),
    W = n(41776),
    K = n(628238),
    z = n(454585),
    X = n(768494),
    Q = n(124347),
    J = n(976853),
    q = n(346013),
    $ = n(780088),
    ee = n(977683),
    et = n(128435),
    en = n(98278),
    ei = n(614825),
    ea = n(265299),
    es = n(699833),
    el = n(344997),
    er = n(378233),
    eo = n(374425),
    ec = n(665906),
    ed = n(432147),
    eu = n(695346),
    e_ = n(314897),
    eE = n(271383),
    eI = n(607744),
    em = n(496675),
    eT = n(594174),
    eN = n(52824),
    eh = n(626135),
    eC = n(70956),
    ep = n(408433),
    ef = n(630388),
    eg = n(823379),
    eA = n(709054),
    eS = n(591759),
    eM = n(169525),
    ex = n(786761),
    eO = n(161010),
    eR = n(461157),
    ev = n(901461),
    eL = n(432376),
    eZ = n(384203),
    eP = n(633957),
    eD = n(530472),
    eb = n(29909),
    ej = n(782658),
    eU = n(219797),
    ey = n(453687),
    eB = n(128854),
    ek = n(101578),
    eG = n(524444),
    eF = n(319323),
    ew = n(884182),
    eV = n(546432),
    eH = n(920888),
    eY = n(817384),
    eW = n(981631),
    eK = n(474936),
    ez = n(689938),
    eX = n(916315),
    eQ = n(287847),
    eJ = n(680674);
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
function e$() {
    return (0, a.jsxs)('div', {
        className: eQ.nitroFileSizeUpsell,
        children: [
            (0, a.jsx)('img', {
                src: eJ,
                className: eQ.nitroBadgeSvg,
                alt: ''
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: ez.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({ onClick: () => (0, en.z)() })
            })
        ]
    });
}
let e0 = 15 * eC.Z.Millis.MINUTE,
    e1 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e7 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: s, proxyURL: l, width: r, height: o } = i;
        return (0, a.jsx)(eb.Z, {
            width: r,
            height: o,
            src: null != l && '' !== l ? l : s,
            url: null != e && '' !== e ? e : null != l && '' !== l ? l : s,
            format: null != n ? d.EO.VIDEO : d.EO.IMAGE,
            className: eQ.gifFavoriteButton
        });
    },
    e3 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: s } = e;
        return null != i && null != s && Q.uo.test(n)
            ? (0, a.jsx)(eb.Z, {
                  width: i,
                  height: s,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eQ.gifFavoriteButton
              })
            : null;
    };
class e2 extends (i = s.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e1.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: a, message: s, poll: l } = this.props,
            { channel: r, message: o, poll: c } = e;
        return (
            !(0, u.Z)(this.state, t) ||
            !(0, u.Z)(this.props, e, ['message', 'channel']) ||
            a.type !== r.type ||
            c !== l ||
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
                            { emoji: l, count: r, burst_count: o } = i[t];
                        return s !== o || a !== r || n.id !== l.id || n.name !== l.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, a.jsx)('div', {
                  className: eQ.ctaButtonContainer,
                  children: (0, a.jsx)(L.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eK.Lw);
        return (0, eO.M)('attachment') && t ? (0, a.jsx)(e$, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i } = t;
                  if (n === S.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, a.jsx)(
                                ej.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === S.g.TEMPLATE) return (0, a.jsx)(F.Z, { code: i }, i);
                  if (n === S.g.EVENT) return (0, a.jsx)(G.Z, { code: i }, i);
                  else if (n === S.g.CHANNEL_LINK)
                      return (0, a.jsx)(
                          eZ.Z,
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
                  else if (n === S.g.GUILD_PRODUCT) return (0, a.jsx)(k.Z, { code: i }, i);
                  else if (n === S.g.SERVER_SHOP) return (0, a.jsx)(M.Z, { guildId: i }, i);
                  else if (n === S.g.QUESTS_EMBED) return (0, a.jsx)(ea.Z, { questId: i }, i);
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
                      let t = (0, h.Q)(i);
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
                  } else if (n === S.g.DISCOVERY_GAME) return null;
                  else if (n === S.g.APP_OAUTH2_LINK) {
                      let { enabled: e } = p.I.getCurrentConfig({ location: 'MessageAccessories' }, { autoTrackExposure: !1 });
                      return e ? (0, a.jsx)(f.Z, { applicationId: i }, i) : null;
                  } else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: s, content: l, giftInfo: r } = e,
            o = eT.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, a.jsx)(
                      'div',
                      {
                          className: eQ.giftCodeContainer,
                          children: (0, a.jsx)(I.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: s,
                              content: l,
                              giftInfo: r
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
                      className: eQ.referralContainer,
                      children: (0, a.jsx)(ei.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: s, isGuest: l, isPendingMember: r, channel: o, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, a.jsx)(eH.Z, {
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
        let { attachments: t, flags: n } = e,
            { channel: i, shouldRedactExplicitContent: s, hasInlineForwardButton: l } = this.props;
        if (0 === t.length || e.isPoll() || e.isUIKitComponents()) return null;
        let r = t.filter((e) => null == e.flags || !(0, ef.yE)(e.flags, eW.J0y.IS_THUMBNAIL));
        if (0 === r.length) return null;
        let { gifAutoPlay: o, canDeleteAttachments: c, inlineAttachmentMedia: d, onMediaItemContextMenu: u, shouldHideMediaOptions: _ } = this.props,
            E = r
                .map((t) =>
                    (0, $.j9)(
                        t,
                        (0, D.s)(e, {
                            type: 'attachment',
                            attachmentId: t.id
                        }),
                        _,
                        s
                    )
                )
                .filter(eg.lm),
            I = {
                source: 'Media Mosaic',
                guild_id: i.guild_id,
                channel_id: i.id,
                channel_type: i.type
            },
            m = E.length > 1 ? (0, $.Cx)(E, I) : {},
            T = (0, ef.yE)(n, eW.iLy.IS_VOICE_MESSAGE);
        function N(e, t) {
            return (0, eM.dn)(e.originalItem, t);
        }
        let h = r.map((t) => {
                let n = (0, X.VY)(t),
                    a = {
                        message: e,
                        item: (0, eV.O)(t, d),
                        autoPlayGif: o,
                        canRemoveItem: c && (r.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eQ.embedWrapper,
                        getObscureReason: N,
                        onContextMenu:
                            null != u
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), u(e, n);
                                  }
                                : void 0,
                        renderAudioComponent: T ? eU.jY : eU.q7,
                        renderImageComponent: eU.dS,
                        renderVideoComponent: eU.vZ,
                        renderPlaintextFilePreview: eU.d4,
                        renderGenericFileComponent: eU.ZK,
                        renderMosaicItemFooter: eU.L9,
                        onPlay: (e, n, a) => {
                            eh.default.track(eW.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: i.guild_id,
                                channel_id: i.id,
                                channel_type: i.type,
                                type: t.content_type,
                                flags: t.flags,
                                size: t.size,
                                duration: a
                            });
                        },
                        gifFavoriteButton: e3(n),
                        isSearchResult: this.props.isSearchResult
                    },
                    s = (0, eN.q)({
                        proxyURL: t.proxy_url,
                        url: t.url
                    });
                return s in m && (a.onClick = m[s]), a;
            }),
            C = l
                ? (0, a.jsx)(j.Z, {
                      className: eX.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: i.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, a.jsx)(ew.Z, {
            items: h,
            inlineForwardButton: C
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eY.b.has(t.type) || (0, ep.l3)(t) || ((0, V.b)(t) && !(0, H.M)(e))) return null;
                  let i = {
                      renderImageComponent: eG.Yi,
                      renderVideoComponent: eG.lV,
                      renderLinkComponent: eG.iT,
                      renderForwardComponent: (0, D.s)(e, {
                          type: 'embed',
                          embedIndex: n
                      })
                  };
                  if (t.type === eW.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let s = eS.Z.safeParseWithQuery(t.url);
                      if (null != s && null != s.pathname) {
                          let l = s.pathname.split('/')[3];
                          if (null != l)
                              return (0, a.jsx)(
                                  m.Z,
                                  {
                                      skuId: l,
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
        return (0, a.jsx)(eB.F, {
            gifAutoPlay: t,
            getGifFavButton: e3,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, a.jsx)(Y.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, a.jsx)(ek.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eW.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, a.jsx)(g.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ex.Pv)(e)
            ? (0, a.jsx)(eD.Z, {
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
                  (0, a.jsx)(
                      eo.Z,
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
        if (e.hasFlag(eW.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, a.jsx)(ed.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eW.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eA.default.extractTimestamp(e.id) >= e0))
                return (0, a.jsx)('div', {
                    className: eQ.threadRoleMentionFailure,
                    children: ez.Z.Messages.THREAD_ROLE_MENTION_FAILURE
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, a.jsxs)(_.DeclarativeConfirmModal, {
            dismissable: !0,
            header: ez.Z.Messages.SUPPRESS_EMBED_TITLE,
            confirmText: ez.Z.Messages.SUPPRESS_EMBED_CONFIRM,
            cancelText: ez.Z.Messages.CANCEL,
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                E.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eQ.confirmText,
                    children: ez.Z.Messages.SUPPRESS_EMBED_BODY
                }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: ez.Z.Messages.SUPPRESS_EMBED_TIP
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
            header: ez.Z.Messages.REMOVE_ATTACHMENT_TITLE,
            confirmText: ez.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
            cancelText: ez.Z.Messages.CANCEL,
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
                className: eQ.confirmText,
                children: ez.Z.Messages.REMOVE_ATTACHMENT_BODY
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, a.jsx)(eF.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, a.jsx)(eP.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eW.hBH.POST_PREVIEW || null == t.url
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
        return 1 === e.embeds.length && e.embeds[0].type === eW.hBH.SAFETY_POLICY_NOTICE ? (0, a.jsx)(es.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eW.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(el.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eW.hBH.VOICE_CHANNEL)
            return (0, a.jsx)(w.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, x.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(v.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, a.jsx)(et.Z, {
                message: e,
                poll: t,
                className: eQ.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, a.jsx)(b.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: s, showRemoveAttachmentModal: l } = this.state,
            o = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            u = this.renderAttachments(t),
            _ = this.renderCtaButton(),
            E = this.renderSocialProofingFileSizeNitroUpsell(t),
            I = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            T = this.renderReactions(t),
            N = this.renderPublishBump(t),
            h = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            p = this.renderThreadAccessories(t),
            f = this.renderComponentAccessories(t),
            g = this.renderThreadRoleMentionWarning(t),
            A = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            M = this.renderMediaPostEmbeds(t),
            x = this.renderSafetyPolicyNotice(t),
            O = this.renderSafetySystemNotification(t),
            R = this.renderVoiceChannelInvite(t, n),
            v = this.renderMediaObscureNotice(t),
            L = this.renderPoll(t, i),
            Z = this.renderForwardedMessage(t);
        return null == o && null == u && null == I && null == m && null == T && null == c && null == d && null == N && null == h && null == C && null == p && null == f && null == A && null == g && null == M && null == x && null != S && null == L && null == R && null == Z
            ? null
            : (0, a.jsxs)('div', {
                  id: (0, ey.bX)(t),
                  className: r()(e, eQ.container),
                  children: [Z, g, L, o, c, d, M, u, _, I, v, m, C, f, A, S, E, T, N, h, s && this.renderSuppressConfirmModal(), l && this.renderRemoveAttachmentConfirmModal(), p, x, O, R]
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
            eq(this, 'renderEmbed', (e, t, n, i, s) => {
                let { gifAutoPlay: l, inlineEmbedMedia: r, canSuppressEmbeds: o, hasSpoilerEmbeds: c, shouldRedactExplicitContent: d, hasInlineForwardButton: u, isSearchResult: _ } = this.props,
                    E = (0, eM.BP)(e, s, i, c, d);
                if (e.type === eW.hBH.GIFT) return null;
                let I = (0, a.jsx)(
                    U.h.Provider,
                    {
                        value: e7(e.url, e.image, e.video),
                        children: (0, a.jsx)(A.ZP, {
                            className: eQ.embedWrapper,
                            embed: e,
                            obscureReason: null != E ? E : void 0,
                            autoPlayGif: l,
                            hideMedia: !r,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            messageId: i,
                            channelId: s,
                            showImageRecs: !1,
                            isSearchResult: _,
                            ...n
                        })
                    },
                    e.id
                );
                return u
                    ? (0, a.jsxs)('div', {
                          className: eQ.embedContainer,
                          children: [
                              I,
                              (0, a.jsx)(j.Z, {
                                  className: eX.hideIfMessageNotFocused,
                                  messageId: i,
                                  channelId: s,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : I;
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === eW.hBH.RICH ? z.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eW.hBH.RICH
                    ? z.Z.parse(t, !0, {
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
function e4(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: s, isMessageSnapshot: l } = e,
        r = (0, c.e7)([e_.default], () => e_.default.getId()),
        o = eu.x4.useSetting(),
        d = eu.RS.useSetting(),
        u = eu.NA.useSetting() && !(0, ev.Z)(e.message),
        _ = eu.nc.useSetting(),
        E = eu.QK.useSetting(),
        I = (0, c.e7)([eI.Z], () => null == n.guild_id || eI.Z.canChatInGuild(n.guild_id), [n]),
        m = (0, c.e7)([W.Z], () => null != n.guild_id && W.Z.isLurking(n.guild_id), [n]),
        T = (0, c.e7)([eE.ZP], () => eE.ZP.isCurrentUserGuest(n.guild_id), [n]),
        N = (0, c.e7)([eE.ZP, eT.default], () => {
            var e, t;
            let i = eT.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = eE.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: h, canManageMessages: C } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: I && em.Z.can(eW.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eW.Plq.MANAGE_MESSAGES, n)
            }),
            [I, n]
        ),
        p = (0, y.ux)(n.guild_id),
        [, f] = (0, B.AB)(n.guild_id),
        g = (0, ec.$R)(n),
        A = (r === i.author.id || C) && i.author.id !== eW.LAt && !1 !== s && !(0, ef.yE)(i.flags, eW.iLy.EPHEMERAL) && g && 1 === (0, eR.Z)(i),
        S = r === i.author.id && g && !l,
        M = i.author.id === r,
        x = i.isFirstMessageInForumPost(n),
        v = (0, eL.Z)({
            channel: n,
            canChat: I,
            renderReactions: _,
            canAddNewReactions: h,
            isLurking: m,
            isGuest: T,
            communicationDisabled: f,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: p
        }),
        L = (0, K.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        D = (0, J.Z)(null == n ? void 0 : n.id),
        b = (0, ee.Z)(i),
        j = (0, O.V)(n.id, i.author.id),
        U = (0, R.r)(i.id),
        { hasInlineForwardButton: k } = (0, Z.yk)({ location: 'MessageAccessories' }),
        G = (0, P.a)(i) && k;
    return (0, a.jsx)(e2, {
        canSuppressEmbeds: A,
        canDeleteAttachments: S,
        ...v,
        disableReactionReads: !!x || v.disableReactionReads,
        ...e,
        isLurking: m && I,
        isGuest: T && I,
        isPendingMember: N && I,
        isCurrentUser: M,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: d,
        renderEmbeds: u,
        gifAutoPlay: E,
        canRenderReferralEmbed: n.isDM(),
        poll: b,
        showListsAndHeaders: L,
        showMaskedLinks: L,
        shouldHideMediaOptions: D,
        shouldRedactExplicitContent: j,
        shouldRenderCtaButton: U,
        hasInlineForwardButton: G
    });
}
eq(e2, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e5 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: s = !1, renderComponentAccessory: l = !1, renderThreadAccessory: r = !1, disableReactionCreates: o = !0, disableReactionUpdates: c = !0, isSearchResult: d = !1, ...u } = e,
        _ = eu.x4.useSetting(),
        E = eu.RS.useSetting(),
        I = eu.NA.useSetting(),
        m = eu.QK.useSetting(),
        T = (0, K.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        N = (0, J.Z)(null == i ? void 0 : i.id),
        h = (0, O.V)(i.id, n.author.id),
        C = (0, R.r)(n.id),
        p = (0, ee.Z)(n);
    return (0, a.jsx)(e2, {
        ...u,
        message: n,
        channel: i,
        disableReactionReads: s,
        disableReactionCreates: o,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: l,
        renderThreadAccessory: r,
        inlineAttachmentMedia: _,
        inlineEmbedMedia: E,
        renderEmbeds: I,
        gifAutoPlay: m,
        poll: p,
        showListsAndHeaders: T,
        showMaskedLinks: T,
        shouldHideMediaOptions: N,
        shouldRedactExplicitContent: h,
        shouldRenderCtaButton: C,
        hasInlineForwardButton: !1,
        isSearchResult: d
    });
};
