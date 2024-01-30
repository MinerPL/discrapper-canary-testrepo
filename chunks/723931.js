"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return ew
  },
  default: function() {
    return eH
  },
  SimpleMessageAccessories: function() {
    return eV
  }
}), n("222007"), n("702976"), n("70102"), n("881410");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("637612"),
  o = n("432710"),
  u = n("446674"),
  d = n("713349"),
  c = n("233736"),
  f = n("77078"),
  E = n("819689"),
  _ = n("710306"),
  T = n("501076"),
  I = n("798609"),
  m = n("627697"),
  N = n("527088"),
  p = n("193865"),
  A = n("222650"),
  S = n("576060"),
  C = n("139514"),
  h = n("810044"),
  g = n("447435"),
  M = n("963119"),
  O = n("45476"),
  R = n("925685"),
  L = n("84849"),
  v = n("406043"),
  P = n("294519"),
  D = n("477558"),
  x = n("812224"),
  y = n("249393"),
  U = n("383247"),
  j = n("267567"),
  b = n("367376"),
  G = n("467475"),
  B = n("801177"),
  F = n("155084"),
  k = n("985883"),
  w = n("311830"),
  H = n("626301"),
  V = n("428786"),
  Y = n("705423"),
  K = n("315021"),
  W = n("24373"),
  z = n("943508"),
  Z = n("300322"),
  J = n("415829"),
  Q = n("845579"),
  X = n("271938"),
  q = n("26989"),
  $ = n("88093"),
  ee = n("957255"),
  et = n("697218"),
  en = n("560176"),
  es = n("952368"),
  el = n("328620"),
  ea = n("688622"),
  ei = n("124297"),
  er = n("377502"),
  eo = n("323273"),
  eu = n("599110"),
  ed = n("718517"),
  ec = n("240873"),
  ef = n("568734"),
  eE = n("449008"),
  e_ = n("299039"),
  eT = n("253981"),
  eI = n("605160"),
  em = n("865446"),
  eN = n("913491"),
  ep = n("583022"),
  eA = n("125247"),
  eS = n("885968"),
  eC = n("476714"),
  eh = n("808440"),
  eg = n("865343"),
  eM = n("5982"),
  eO = n("933629"),
  eR = n("600536"),
  eL = n("592707"),
  ev = n("49111"),
  eP = n("646718"),
  eD = n("782340"),
  ex = n("30554"),
  ey = n("872364");

function eU() {
  return (0, s.jsxs)("div", {
    className: ex.nitroFileSizeUpsell,
    children: [(0, s.jsx)("img", {
      src: ey,
      className: ex.nitroBadgeSvg,
      alt: ""
    }), (0, s.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: ex.nitroFileSizeUpsellText,
      children: eD.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, H.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ej = new Set([ev.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, ev.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, ev.MessageEmbedTypes.APPLICATION_NEWS, ev.MessageEmbedTypes.POST_PREVIEW, ev.MessageEmbedTypes.SAFETY_POLICY_NOTICE, ev.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, ev.MessageEmbedTypes.VOICE_CHANNEL]),
  eb = 15 * ed.default.Millis.MINUTE,
  eG = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eB = "web_chat",
  eF = (e, t, n) => () => {
    let l = null != t ? t : n;
    if (null == l) return null;
    let {
      url: a,
      proxyURL: i,
      width: r,
      height: o
    } = l;
    return (0, s.jsx)(eC.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : a,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : a,
      format: null != n ? d.GIFType.VIDEO : d.GIFType.IMAGE,
      className: ex.gifFavoriteButton
    })
  },
  ek = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: l
    } = e;
    return es.IMAGE_GIF_RE.test(e.filename) && null != n && null != l ? (0, s.jsx)(eC.default, {
      width: n,
      height: l,
      src: t,
      url: t,
      format: d.GIFType.IMAGE,
      className: ex.gifFavoriteButton
    }) : null
  };
class ew extends l.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eG.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, s;
    let {
      channel: l,
      message: a,
      poll: i
    } = this.props, {
      channel: r,
      message: o,
      poll: u
    } = e;
    return !(0, c.default)(this.state, t) || !(0, c.default)(this.props, e, ["message", "channel"]) || l.type !== r.type || u !== i || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (s = a.reactions) && (n.length !== s.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: l,
        burst_count: a
      } = e, {
        emoji: i,
        count: r,
        burst_count: o
      } = s[t];
      return a !== o || l !== r || n.id !== i.id || n.name !== i.name
    })))
  }
  renderCtaButton() {
    let {
      message: e,
      channel: t,
      shouldRenderCtaButton: n
    } = this.props;
    return n ? (F.default.increment({
      name: o.MetricEvents.EXPLICIT_MEDIA_SENDER_FP_BUTTON_VIEW
    }), (0, g.trackMediaRedactionAction)({
      action: g.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_VIEWED,
      messageId: e.id,
      channelId: t.id
    }), (0, s.jsx)("div", {
      className: ex.ctaButtonContainer,
      children: (0, s.jsx)(L.default, {
        messageId: e.id,
        channelId: t.id
      })
    })) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eP.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, em.shouldShowNitroUpsell)("attachment") && t ? (0, s.jsx)(eU, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: l
      } = t;
      if (n === C.CodedLinkType.INVITE) return this.shouldRenderInvite(l) ? (0, s.jsx)(eh.default, {
        code: l,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, l) : null;
      if (n === C.CodedLinkType.TEMPLATE) return (0, s.jsx)(x.default, {
        code: l
      }, l);
      if (n === C.CodedLinkType.EVENT) return (0, s.jsx)(D.default, {
        code: l
      }, l);
      else if (n === C.CodedLinkType.CHANNEL_LINK) return (0, s.jsx)(eA.default, {
        code: l,
        messageData: e
      }, l);
      else if (n === C.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, s.jsx)(N.default, {
        code: l,
        message: e
      }, l);
      else if (n === C.CodedLinkType.CLYDE_PROFILE) return (0, s.jsx)(S.default, {
        code: l
      }, l);
      else if (n === C.CodedLinkType.ACTIVITY_BOOKMARK) return (0, s.jsx)(m.default, {
        applicationId: l,
        message: e
      }, l);
      else if (n === C.CodedLinkType.GUILD_PRODUCT) return (0, s.jsx)(P.default, {
        code: l
      }, l);
      else if (n === C.CodedLinkType.SERVER_SHOP) return (0, s.jsx)(h.default, {
        guildId: l
      }, l);
      else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: l,
      type: a,
      content: i,
      giftInfo: r
    } = e, o = et.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, s.jsx)("div", {
      className: ex.giftCodeContainer,
      children: (0, s.jsx)(_.default, {
        code: e,
        author: n,
        channelId: l,
        currentUser: o,
        type: a,
        content: i,
        giftInfo: r
      })
    }, e)) : null
  }
  renderReferralTrial(e) {
    let {
      referralTrialOfferId: t,
      type: n
    } = e, {
      canRenderReferralEmbed: l
    } = this.props;
    return n !== r.MessageTypes.PREMIUM_REFERRAL || null == t ? null : (0, s.jsx)("div", {
      className: ex.referralContainer,
      children: (0, s.jsx)(V.default, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != l && l
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      channel: o,
      forceAddReactions: u
    } = this.props;
    return n ? null : (0, s.jsx)(eL.default, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      forceAddReactions: u,
      useChatFontScaling: !0
    })
  }
  renderAttachments(e) {
    let {
      attachments: t,
      flags: n
    } = e, {
      channel: l,
      shouldRedactExplicitContent: a
    } = this.props;
    if (0 === t.length || e.isPoll()) return null;
    let i = t.filter(e => null == e.flags || !(0, ef.hasFlag)(e.flags, ev.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, eo.carouselAssetFromAttachment)(e, c, a)).filter(eE.isNotNullish), E = {
      source: "Media Mosaic",
      guild_id: l.guild_id,
      channel_id: l.id,
      channel_type: l.type
    }, _ = f.length > 1 ? (0, eo.createMediaOnClickOverrides)(f, E) : {}, T = (0, ef.hasFlag)(n, ev.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: ex.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eO.renderVoiceMessageAudioComponent : eO.renderAudioComponent,
          renderImageComponent: eO.renderImageComponent,
          renderPlaintextFilePreview: eO.renderPlaintextFilePreview,
          renderVideoComponent: eO.renderVideoComponent,
          onPlay: (e, n, s) => {
            eu.default.track(ev.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: l.guild_id,
              channel_id: l.id,
              channel_type: l.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: s
            })
          },
          gifFavoriteButton: ek(t)
        },
        s = (0, ea.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return s in _ && (n.onClick = _[s]), n
    });
    return (0, s.jsx)(er.default, {
      attachments: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ej.has(t.type) || (0, ec.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eO.renderImageComponent,
        renderVideoComponent: eO.renderVideoComponent,
        renderLinkComponent: eO.renderMaskedLinkComponent
      };
      if (t.type === ev.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = eT.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let a = l.pathname.split("/")[3];
          if (null != a) return (0, s.jsx)(T.default, {
            skuId: a,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, s.jsx)(U.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, s.jsx)(eM.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== ev.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ef.hasFlag)(e.flags, ev.MessageFlags.EPHEMERAL) ? null : (0, s.jsx)(A.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, ef.hasFlag)(e.flags, ev.MessageFlags.EPHEMERAL) ? (0, s.jsx)(ei.default, {
      message: e,
      onDeleteMessage: () => {
        E.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, W.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: l
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, s.jsx)(z.default, {
      channel: n,
      isInteracting: l,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ev.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, s.jsx)(J.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(ev.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - e_.default.extractTimestamp(e.id);
    if (!(t >= eb)) return (0, s.jsx)("div", {
      className: ex.threadRoleMentionFailure,
      children: eD.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, s.jsxs)(f.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eD.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eD.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eD.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        E.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, s.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: ex.confirmText,
        children: eD.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, s.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eD.default.Messages.SUPPRESS_EMBED_TIP
      })]
    })
  }
  renderRemoveAttachmentConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props, {
      attachmentToDelete: n
    } = this.state;
    if (null == n) {
      this.setState({
        showRemoveAttachmentModal: !1
      });
      return
    }
    return (0, s.jsx)(f.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eD.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eD.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eD.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        E.default.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, s.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: ex.confirmText,
        children: eD.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eR.default, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationInstanceEmbed(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: l
    } = e;
    return null == t || null == n || (null == l ? void 0 : l.type) !== I.InteractionTypes.APPLICATION_COMMAND ? null : (0, s.jsx)(eS.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ev.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(B.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, s.jsx)(Y.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(K.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.VOICE_CHANNEL) return (0, s.jsx)(y.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, g.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(R.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, s.jsx)(w.default, {
      message: e,
      poll: t,
      className: ex.pollContainer
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: l
    } = this.props, {
      showSuppressModal: a,
      showRemoveAttachmentModal: r
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), p = this.renderStickersAccessories(t), A = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), L = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), P = this.renderPoll(t, l);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == A && null == S && null == h && null == C && null == M && null == O && null != g && null == P && null == L ? null : (0, s.jsxs)("div", {
      id: (0, eg.getMessageAccessoriesId)(t),
      className: i(e, ex.container),
      children: [C, P, o, u, d, M, c, f, _, v, T, p, S, h, g, E, I, m, N, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), A, O, R, L]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }, this.getAcceptInviteContext = e => {
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
      }
    }, this.renderEmbed = (e, t, n, l) => {
      let {
        gifAutoPlay: a,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eI.getObscureReasonForEmbed)(e, l, n, o, u);
      return e.type === ev.MessageEmbedTypes.GIFT ? null : (0, s.jsx)(el.GIFAccessoryContext.Provider, {
        value: eF(e.url, e.image, e.video),
        children: (0, s.jsx)(en.default, {
          className: ex.embedWrapper,
          embed: e,
          obscureReason: null != d ? d : void 0,
          autoPlayGif: a,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: l,
          ...t
        })
      }, e.id)
    }, this.renderEmbedTitle = (e, t) => e.type === ev.MessageEmbedTypes.RICH ? b.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === ev.MessageEmbedTypes.RICH ? b.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t, this.handleEmbedSuppressed = e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? E.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }, this.handleRemoveAttachment = e => {
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: e
      })
    }
  }
}

function eH(e) {
  var t, n, l;
  let {
    channel: a,
    message: i,
    renderSuppressEmbeds: r
  } = e, o = (0, u.useStateFromStores)([X.default], () => X.default.getId()), d = Q.InlineAttachmentMedia.useSetting(), c = Q.InlineEmbedMedia.useSetting(), f = Q.RenderEmbeds.useSetting(), E = f && !(0, eN.default)(e.message), _ = Q.RenderReactions.useSetting(), T = Q.GifAutoPlay.useSetting(), I = (0, u.useStateFromStores)([$.default], () => null == a.guild_id || $.default.canChatInGuild(a.guild_id), [a]), m = (0, u.useStateFromStores)([j.default], () => null != a.guild_id && j.default.isLurking(a.guild_id), [a]), N = (0, u.useStateFromStores)([q.default], () => q.default.isCurrentUserGuest(a.guild_id), [a]), A = (0, u.useStateFromStores)([q.default, et.default], () => {
    var e, t;
    let n = et.default.getCurrentUser();
    return null !== (t = null != a.guild_id && null != n ? null === (e = q.default.getMember(a.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: S,
    canManageMessages: C
  } = (0, u.useStateFromStoresObject)([ee.default], () => ({
    canAddNewReactions: I && ee.default.can(ev.Permissions.ADD_REACTIONS, a),
    canManageMessages: ee.default.can(ev.Permissions.MANAGE_MESSAGES, a)
  }), [I, a]), [, h] = (0, v.useCurrentUserCommunicationDisabled)(a.guild_id), g = (0, Z.useIsActiveChannelOrUnarchivableThread)(a), R = (o === i.author.id || C) && i.author.id !== ev.LOCAL_BOT_ID && !1 !== r && !(0, ef.hasFlag)(i.flags, ev.MessageFlags.EPHEMERAL) && g, L = o === i.author.id && g, P = i.author.id === o, D = i.isFirstMessageInForumPost(a), x = (0, ep.default)({
    channel: a,
    canChat: I,
    renderReactions: _,
    canAddNewReactions: S,
    isLurking: m,
    isGuest: N,
    communicationDisabled: h,
    isActiveChannelOrUnarchivableThread: g
  }), y = (0, p.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), U = (0, p.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = a.guild_id) && void 0 !== n ? n : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), b = (0, G.default)(null == a ? void 0 : a.id), B = (0, k.default)(i), F = (0, M.useShouldRedactExplicitContent)(a.id, i.author.id), w = (0, O.useShouldRenderReportFalsePositiveButton)(i.id, eB);
  return (0, s.jsx)(ew, {
    canSuppressEmbeds: R,
    canDeleteAttachments: L,
    ...x,
    disableReactionReads: !!D || x.disableReactionReads,
    ...e,
    isLurking: m && I,
    isGuest: N && I,
    isPendingMember: A && I,
    isCurrentUser: P,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: c,
    renderEmbeds: E,
    gifAutoPlay: T,
    canRenderReferralEmbed: a.isDM(),
    poll: B,
    showListsAndHeaders: y.showListsAndHeaders || U.showListsAndHeaders,
    showMaskedLinks: y.showMaskedLinks || U.showMaskedLinks,
    shouldHideMediaOptions: b,
    shouldRedactExplicitContent: F,
    shouldRenderCtaButton: w
  })
}
ew.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let eV = e => {
  var t, n, l;
  let {
    message: a,
    channel: i,
    disableReactionReads: r = !1,
    renderComponentAccessory: o = !1,
    renderThreadAccessory: u = !1,
    disableReactionCreates: d = !0,
    disableReactionUpdates: c = !0,
    ...f
  } = e, E = Q.InlineAttachmentMedia.useSetting(), _ = Q.InlineEmbedMedia.useSetting(), T = Q.RenderEmbeds.useSetting() && !a.author.isClyde(), I = Q.GifAutoPlay.useSetting(), m = (0, p.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), N = (0, p.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = i.guild_id) && void 0 !== n ? n : "", (null !== (l = a.editedTimestamp) && void 0 !== l ? l : a.timestamp).valueOf()), A = (0, G.default)(null == i ? void 0 : i.id), S = (0, M.useShouldRedactExplicitContent)(i.id, a.author.id), C = (0, O.useShouldRenderReportFalsePositiveButton)(a.id, eB), h = (0, k.default)(a);
  return (0, s.jsx)(ew, {
    ...f,
    message: a,
    channel: i,
    disableReactionReads: r,
    disableReactionCreates: d,
    disableReactionUpdates: c,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: o,
    renderThreadAccessory: u,
    inlineAttachmentMedia: E,
    inlineEmbedMedia: _,
    renderEmbeds: T,
    gifAutoPlay: I,
    poll: h,
    showListsAndHeaders: m.showListsAndHeaders || N.showListsAndHeaders,
    showMaskedLinks: m.showMaskedLinks || N.showMaskedLinks,
    shouldHideMediaOptions: A,
    shouldRedactExplicitContent: S,
    shouldRenderCtaButton: C
  })
}