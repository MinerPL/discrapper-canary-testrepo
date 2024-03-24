"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eF
  },
  default: function() {
    return ek
  },
  SimpleMessageAccessories: function() {
    return ew
  }
}), n("222007"), n("702976"), n("70102"), n("881410");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("637612"),
  o = n("446674"),
  u = n("713349"),
  d = n("233736"),
  c = n("77078"),
  E = n("819689"),
  f = n("710306"),
  _ = n("501076"),
  T = n("798609"),
  I = n("627697"),
  m = n("527088"),
  N = n("222650"),
  p = n("139514"),
  S = n("810044"),
  A = n("447435"),
  C = n("963119"),
  h = n("45476"),
  g = n("925685"),
  M = n("84849"),
  O = n("406043"),
  R = n("294519"),
  v = n("477558"),
  L = n("812224"),
  P = n("249393"),
  D = n("383247"),
  x = n("267567"),
  y = n("634807"),
  U = n("367376"),
  j = n("467475"),
  b = n("801177"),
  G = n("985883"),
  B = n("311830"),
  F = n("626301"),
  k = n("428786"),
  w = n("170898"),
  H = n("993735"),
  V = n("705423"),
  Y = n("315021"),
  W = n("24373"),
  K = n("943508"),
  z = n("300322"),
  Q = n("415829"),
  Z = n("845579"),
  J = n("271938"),
  X = n("26989"),
  q = n("88093"),
  $ = n("957255"),
  ee = n("697218"),
  et = n("560176"),
  en = n("952368"),
  es = n("328620"),
  el = n("688622"),
  ea = n("124297"),
  ei = n("377502"),
  er = n("323273"),
  eo = n("599110"),
  eu = n("718517"),
  ed = n("240873"),
  ec = n("568734"),
  eE = n("449008"),
  ef = n("299039"),
  e_ = n("253981"),
  eT = n("605160"),
  eI = n("865446"),
  em = n("913491"),
  eN = n("583022"),
  ep = n("125247"),
  eS = n("885968"),
  eA = n("476714"),
  eC = n("808440"),
  eh = n("865343"),
  eg = n("5982"),
  eM = n("933629"),
  eO = n("600536"),
  eR = n("592707"),
  ev = n("49111"),
  eL = n("646718"),
  eP = n("782340"),
  eD = n("278603"),
  ex = n("872364");

function ey() {
  return (0, s.jsxs)("div", {
    className: eD.nitroFileSizeUpsell,
    children: [(0, s.jsx)("img", {
      src: ex,
      className: eD.nitroBadgeSvg,
      alt: ""
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eD.nitroFileSizeUpsellText,
      children: eP.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, F.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eU = new Set([ev.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, ev.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, ev.MessageEmbedTypes.APPLICATION_NEWS, ev.MessageEmbedTypes.POST_PREVIEW, ev.MessageEmbedTypes.SAFETY_POLICY_NOTICE, ev.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, ev.MessageEmbedTypes.VOICE_CHANNEL]),
  ej = 15 * eu.default.Millis.MINUTE,
  eb = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eG = (e, t, n) => () => {
    let l = null != t ? t : n;
    if (null == l) return null;
    let {
      url: a,
      proxyURL: i,
      width: r,
      height: o
    } = l;
    return (0, s.jsx)(eA.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : a,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : a,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: eD.gifFavoriteButton
    })
  },
  eB = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: l
    } = e;
    return en.IMAGE_GIF_RE.test(e.filename) && null != n && null != l ? (0, s.jsx)(eA.default, {
      width: n,
      height: l,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: eD.gifFavoriteButton
    }) : null
  };
class eF extends l.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eb.has(e))
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
    return !(0, d.default)(this.state, t) || !(0, d.default)(this.props, e, ["message", "channel"]) || l.type !== r.type || u !== i || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (s = a.reactions) && (n.length !== s.length || !!n.some((e, t) => {
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
    return n ? (0, s.jsx)("div", {
      className: eD.ctaButtonContainer,
      children: (0, s.jsx)(M.default, {
        messageId: e.id,
        channelId: t.id
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eL.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eI.shouldShowNitroUpsell)("attachment") && t ? (0, s.jsx)(ey, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: l
      } = t;
      if (n === p.CodedLinkType.INVITE) return this.shouldRenderInvite(l) ? (0, s.jsx)(eC.default, {
        code: l,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, l) : null;
      if (n === p.CodedLinkType.TEMPLATE) return (0, s.jsx)(L.default, {
        code: l
      }, l);
      if (n === p.CodedLinkType.EVENT) return (0, s.jsx)(v.default, {
        code: l
      }, l);
      else if (n === p.CodedLinkType.CHANNEL_LINK) return (0, s.jsx)(ep.default, {
        code: l,
        messageData: e
      }, l);
      else if (n === p.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, s.jsx)(m.default, {
        code: l,
        message: e
      }, l);
      else if (n === p.CodedLinkType.CLYDE_PROFILE) return;
      else if (n === p.CodedLinkType.ACTIVITY_BOOKMARK) return (0, s.jsx)(I.default, {
        applicationId: l,
        message: e
      }, l);
      else if (n === p.CodedLinkType.GUILD_PRODUCT) return (0, s.jsx)(R.default, {
        code: l
      }, l);
      else if (n === p.CodedLinkType.SERVER_SHOP) return (0, s.jsx)(S.default, {
        guildId: l
      }, l);
      else if (n === p.CodedLinkType.QUESTS_EMBED) return (0, s.jsx)(H.default, {
        questId: l
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
    } = e, o = ee.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, s.jsx)("div", {
      className: eD.giftCodeContainer,
      children: (0, s.jsx)(f.default, {
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
      className: eD.referralContainer,
      children: (0, s.jsx)(k.default, {
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
    return n ? null : (0, s.jsx)(eR.default, {
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
    let i = t.filter(e => null == e.flags || !(0, ec.hasFlag)(e.flags, ev.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, E = i.map(e => (0, er.carouselAssetFromAttachment)(e, c, a)).filter(eE.isNotNullish), f = {
      source: "Media Mosaic",
      guild_id: l.guild_id,
      channel_id: l.id,
      channel_type: l.type
    }, _ = E.length > 1 ? (0, er.createMediaOnClickOverrides)(E, f) : {}, T = (0, ec.hasFlag)(n, ev.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eD.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eM.renderVoiceMessageAudioComponent : eM.renderAudioComponent,
          renderImageComponent: eM.renderImageComponent,
          renderPlaintextFilePreview: eM.renderPlaintextFilePreview,
          renderVideoComponent: eM.renderVideoComponent,
          onPlay: (e, n, s) => {
            eo.default.track(ev.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: l.guild_id,
              channel_id: l.id,
              channel_type: l.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: s
            })
          },
          gifFavoriteButton: eB(t)
        },
        s = (0, el.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return s in _ && (n.onClick = _[s]), n
    });
    return (0, s.jsx)(w.default, {
      attachmentProps: I,
      channelType: l.type,
      children: (0, s.jsx)(ei.default, {
        attachments: I
      })
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eU.has(t.type) || (0, ed.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eM.renderImageComponent,
        renderVideoComponent: eM.renderVideoComponent,
        renderLinkComponent: eM.renderMaskedLinkComponent
      };
      if (t.type === ev.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = e_.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let a = l.pathname.split("/")[3];
          if (null != a) return (0, s.jsx)(_.default, {
            skuId: a,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, s.jsx)(D.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, s.jsx)(eg.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== ev.ChannelTypes.GUILD_ANNOUNCEMENT || (0, ec.hasFlag)(e.flags, ev.MessageFlags.EPHEMERAL) ? null : (0, s.jsx)(N.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e, t) {
    return (0, ec.hasFlag)(e.flags, ev.MessageFlags.EPHEMERAL) ? (0, s.jsx)(ea.default, {
      message: e,
      channel: t,
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
    return 0 === t.length ? null : t.map(e => (0, s.jsx)(K.default, {
      channel: n,
      isInteracting: l,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(ev.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, s.jsx)(Q.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(ev.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - ef.default.extractTimestamp(e.id);
    if (!(t >= ej)) return (0, s.jsx)("div", {
      className: eD.threadRoleMentionFailure,
      children: eP.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, s.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eP.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eP.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eP.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        E.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eD.confirmText,
        children: eP.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eP.default.Messages.SUPPRESS_EMBED_TIP
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
    return (0, s.jsx)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eP.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eP.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eP.default.Messages.CANCEL,
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
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eD.confirmText,
        children: eP.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eO.default, {
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
    return null == t || null == n || (null == l ? void 0 : l.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, s.jsx)(eS.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== ev.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(b.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, s.jsx)(V.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(Y.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === ev.MessageEmbedTypes.VOICE_CHANNEL) return (0, s.jsx)(P.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, A.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(g.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, s.jsx)(B.default, {
      message: e,
      poll: t,
      className: eD.pollContainer
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), E = this.renderCtaButton(), f = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t, n), p = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), A = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationInstanceEmbed(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), v = this.renderVoiceChannelInvite(t, n), L = this.renderMediaObscureNotice(t), P = this.renderPoll(t, l);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == S && null == A && null == h && null == C && null == M && null == O && null != g && null == P && null == v ? null : (0, s.jsxs)("div", {
      id: (0, eh.getMessageAccessoriesId)(t),
      className: i(e, eD.container),
      children: [C, P, o, u, d, M, c, E, _, L, T, p, A, h, g, f, I, m, N, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), S, O, R, v]
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
      } = this.props, d = (0, eT.getObscureReasonForEmbed)(e, l, n, o, u);
      return e.type === ev.MessageEmbedTypes.GIFT ? null : (0, s.jsx)(es.GIFAccessoryContext.Provider, {
        value: eG(e.url, e.image, e.video),
        children: (0, s.jsx)(et.default, {
          className: eD.embedWrapper,
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
    }, this.renderEmbedTitle = (e, t) => e.type === ev.MessageEmbedTypes.RICH ? U.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === ev.MessageEmbedTypes.RICH ? U.default.parse(t, !0, {
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

function ek(e) {
  var t;
  let {
    channel: n,
    message: l,
    renderSuppressEmbeds: a
  } = e, i = (0, o.useStateFromStores)([J.default], () => J.default.getId()), r = Z.InlineAttachmentMedia.useSetting(), u = Z.InlineEmbedMedia.useSetting(), d = Z.RenderEmbeds.useSetting(), c = d && !(0, em.default)(e.message), E = Z.RenderReactions.useSetting(), f = Z.GifAutoPlay.useSetting(), _ = (0, o.useStateFromStores)([q.default], () => null == n.guild_id || q.default.canChatInGuild(n.guild_id), [n]), T = (0, o.useStateFromStores)([x.default], () => null != n.guild_id && x.default.isLurking(n.guild_id), [n]), I = (0, o.useStateFromStores)([X.default], () => X.default.isCurrentUserGuest(n.guild_id), [n]), m = (0, o.useStateFromStores)([X.default, ee.default], () => {
    var e, t;
    let s = ee.default.getCurrentUser();
    return null !== (t = null != n.guild_id && null != s ? null === (e = X.default.getMember(n.guild_id, s.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: N,
    canManageMessages: p
  } = (0, o.useStateFromStoresObject)([$.default], () => ({
    canAddNewReactions: _ && $.default.can(ev.Permissions.ADD_REACTIONS, n),
    canManageMessages: $.default.can(ev.Permissions.MANAGE_MESSAGES, n)
  }), [_, n]), [, S] = (0, O.useCurrentUserCommunicationDisabled)(n.guild_id), A = (0, z.useIsActiveChannelOrUnarchivableThread)(n), g = (i === l.author.id || p) && l.author.id !== ev.LOCAL_BOT_ID && !1 !== a && !(0, ec.hasFlag)(l.flags, ev.MessageFlags.EPHEMERAL) && A, M = i === l.author.id && A, R = l.author.id === i, v = l.isFirstMessageInForumPost(n), L = (0, eN.default)({
    channel: n,
    canChat: _,
    renderReactions: E,
    canAddNewReactions: N,
    isLurking: T,
    isGuest: I,
    communicationDisabled: S,
    isActiveChannelOrUnarchivableThread: A
  }), P = (0, y.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()), D = (0, j.default)(null == n ? void 0 : n.id), U = (0, G.default)(l), b = (0, C.useShouldRedactExplicitContent)(n.id, l.author.id), B = (0, h.useShouldRenderReportFalsePositiveButton)(l.id);
  return (0, s.jsx)(eF, {
    canSuppressEmbeds: g,
    canDeleteAttachments: M,
    ...L,
    disableReactionReads: !!v || L.disableReactionReads,
    ...e,
    isLurking: T && _,
    isGuest: I && _,
    isPendingMember: m && _,
    isCurrentUser: R,
    inlineAttachmentMedia: r,
    inlineEmbedMedia: u,
    renderEmbeds: c,
    gifAutoPlay: f,
    canRenderReferralEmbed: n.isDM(),
    poll: U,
    showListsAndHeaders: P,
    showMaskedLinks: P,
    shouldHideMediaOptions: D,
    shouldRedactExplicitContent: b,
    shouldRenderCtaButton: B
  })
}
eF.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let ew = e => {
  var t;
  let {
    message: n,
    channel: l,
    disableReactionReads: a = !1,
    renderComponentAccessory: i = !1,
    renderThreadAccessory: r = !1,
    disableReactionCreates: o = !0,
    disableReactionUpdates: u = !0,
    ...d
  } = e, c = Z.InlineAttachmentMedia.useSetting(), E = Z.InlineEmbedMedia.useSetting(), f = Z.RenderEmbeds.useSetting(), _ = Z.GifAutoPlay.useSetting(), T = (0, y.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), I = (0, j.default)(null == l ? void 0 : l.id), m = (0, C.useShouldRedactExplicitContent)(l.id, n.author.id), N = (0, h.useShouldRenderReportFalsePositiveButton)(n.id), p = (0, G.default)(n);
  return (0, s.jsx)(eF, {
    ...d,
    message: n,
    channel: l,
    disableReactionReads: a,
    disableReactionCreates: o,
    disableReactionUpdates: u,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: i,
    renderThreadAccessory: r,
    inlineAttachmentMedia: c,
    inlineEmbedMedia: E,
    renderEmbeds: f,
    gifAutoPlay: _,
    poll: p,
    showListsAndHeaders: T,
    showMaskedLinks: T,
    shouldHideMediaOptions: I,
    shouldRedactExplicitContent: m,
    shouldRenderCtaButton: N
  })
}