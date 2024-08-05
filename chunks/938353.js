n.d(t, {
  $p: function() {
return e3;
  },
  BB: function() {
return e1;
  },
  ZP: function() {
return e7;
  }
}), n(47120), n(789020), n(411104), n(390547);
var i, s = n(735250),
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
  T = n(911969),
  h = n(624367),
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
  j = n(715903),
  U = n(71619),
  y = n(637618),
  B = n(225890),
  k = n(364097),
  G = n(495129),
  F = n(939170),
  w = n(954654),
  V = n(41776),
  H = n(628238),
  Y = n(454585),
  W = n(768494),
  K = n(124347),
  z = n(976853),
  Q = n(346013),
  q = n(977683),
  X = n(128435),
  J = n(98278),
  $ = n(614825),
  ee = n(265299),
  et = n(699833),
  en = n(344997),
  ei = n(378233),
  es = n(374425),
  ea = n(665906),
  er = n(432147),
  el = n(695346),
  eo = n(314897),
  ec = n(271383),
  eu = n(607744),
  ed = n(496675),
  e_ = n(594174),
  eE = n(941797),
  eI = n(52824),
  em = n(592256),
  eT = n(626135),
  eh = n(70956),
  eN = n(408433),
  eC = n(630388),
  ef = n(823379),
  ep = n(709054),
  eg = n(591759),
  eS = n(169525),
  eA = n(161010),
  eR = n(461157),
  eO = n(901461),
  ex = n(432376),
  eM = n(384203),
  ev = n(633957),
  eL = n(530472),
  eZ = n(29909),
  eP = n(782658),
  eD = n(219797),
  eb = n(453687),
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
  eW = n(848509),
  eK = n(738779),
  ez = n(680674);

function eQ(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function eq() {
  return (0, s.jsxs)('div', {
className: eK.nitroFileSizeUpsell,
children: [
  (0, s.jsx)('img', {
    src: ez,
    className: eK.nitroBadgeSvg,
    alt: ''
  }),
  (0, s.jsx)(_.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: eY.Z.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
      onClick: () => (0, J.z)()
    })
  })
]
  });
}
let eX = 15 * eh.Z.Millis.MINUTE,
  eJ = new Set([
'discord-developers',
'discord-testers',
'discord-townhall',
'discordgameslab'
  ]),
  e$ = (e, t, n) => () => {
let i = null != t ? t : n;
if (null == i)
  return null;
let {
  url: a,
  proxyURL: r,
  width: l,
  height: o
} = i;
return (0, s.jsx)(eZ.Z, {
  width: l,
  height: o,
  src: null != r && '' !== r ? r : a,
  url: null != e && '' !== e ? e : null != r && '' !== r ? r : a,
  format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
  className: eK.gifFavoriteButton
});
  },
  e0 = e => () => {
let {
  url: t,
  proxyUrl: n,
  width: i,
  height: a
} = e;
return null != i && null != a && K.u.test(n) ? (0, s.jsx)(eZ.Z, {
  width: i,
  height: a,
  src: n,
  url: t,
  format: u.EO.IMAGE,
  className: eK.gifFavoriteButton
}) : null;
  };
class e1 extends(i = a.Component) {
  shouldRenderInvite(e) {
let {
  channel: t
} = this.props;
return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eJ.has(e));
  }
  shouldComponentUpdate(e, t) {
var n, i;
let {
  channel: s,
  message: a,
  poll: r
} = this.props, {
  channel: l,
  message: o,
  poll: c
} = e;
return !(0, d.Z)(this.state, t) || !(0, d.Z)(this.props, e, [
  'message',
  'channel'
]) || s.type !== l.type || c !== r || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (i = a.reactions) && (n.length !== i.length || !!n.some((e, t) => {
  let {
    emoji: n,
    count: s,
    burst_count: a
  } = e, {
    emoji: r,
    count: l,
    burst_count: o
  } = i[t];
  return a !== o || s !== l || n.id !== r.id || n.name !== r.name;
})));
  }
  renderCtaButton() {
let {
  message: e,
  channel: t,
  shouldRenderCtaButton: n
} = this.props;
return n ? (0, s.jsx)('div', {
  className: eK.ctaButtonContainer,
  children: (0, s.jsx)(v.Z, {
    messageId: e.id,
    channelId: t.id
  })
}) : null;
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
let t = e.attachments.some(e => e.size > eH.Lw);
return (0, eA.M)('attachment') && t ? (0, s.jsx)(eq, {}) : null;
  }
  renderCodedLinks(e) {
return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
  let {
    type: n,
    code: i
  } = t;
  if (n === S.g.INVITE)
    return this.shouldRenderInvite(i) ? (0, s.jsx)(eP.Z, {
      code: i,
      author: e.author,
      getAcceptInviteContext: this.getAcceptInviteContext
    }, i) : null;
  if (n === S.g.TEMPLATE)
    return (0, s.jsx)(k.Z, {
      code: i
    }, i);
  if (n === S.g.EVENT)
    return (0, s.jsx)(B.Z, {
      code: i
    }, i);
  else if (n === S.g.CHANNEL_LINK)
    return (0, s.jsx)(eM.Z, {
      code: i,
      messageData: e
    }, i);
  else if (n === S.g.APP_DIRECTORY_PROFILE)
    return (0, s.jsx)(N.Z, {
      code: i,
      message: e
    }, i);
  else if (n === S.g.ACTIVITY_BOOKMARK)
    return (0, s.jsx)(h.Z, {
      applicationId: i,
      message: e
    }, i);
  else if (n === S.g.GUILD_PRODUCT)
    return (0, s.jsx)(y.Z, {
      code: i
    }, i);
  else if (n === S.g.SERVER_SHOP)
    return (0, s.jsx)(A.Z, {
      guildId: i
    }, i);
  else if (n === S.g.QUESTS_EMBED)
    return (0, s.jsx)(ee.Z, {
      questId: i
    }, i);
  else if (n === S.g.APP_DIRECTORY_STOREFRONT)
    return (0, s.jsx)(f.P, {
      appId: i,
      message: e
    }, i);
  else if (n === S.g.APP_DIRECTORY_STOREFRONT_SKU) {
    let t = (0, C.Q)(i);
    return null == t ? null : (0, s.jsx)(f.F, {
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
  type: a,
  content: r,
  giftInfo: l
} = e, o = e_.default.getCurrentUser();
return null != o && t.length > 0 ? t.map(e => (0, s.jsx)('div', {
  className: eK.giftCodeContainer,
  children: (0, s.jsx)(I.Z, {
    code: e,
    author: n,
    channelId: i,
    currentUser: o,
    type: a,
    content: r,
    giftInfo: l
  })
}, e)) : null;
  }
  renderReferralTrial(e) {
let {
  referralTrialOfferId: t,
  type: n
} = e, {
  canRenderReferralEmbed: i
} = this.props;
return n !== o.u.PREMIUM_REFERRAL || null == t ? null : (0, s.jsx)('div', {
  className: eK.referralContainer,
  children: (0, s.jsx)($.Z, {
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
  isLurking: a,
  isGuest: r,
  isPendingMember: l,
  channel: o,
  forceAddReactions: c
} = this.props;
return n ? null : (0, s.jsx)(eF.Z, {
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
let {
  attachments: t,
  flags: n
} = e, {
  channel: i,
  shouldRedactExplicitContent: a,
  hasInlineForwardButton: r
} = this.props;
if (0 === t.length || e.isPoll() || e.isUIKitComponents())
  return null;
let l = t.filter(e => null == e.flags || !(0, eC.yE)(e.flags, eV.J0y.IS_THUMBNAIL));
if (0 === l.length)
  return null;
let {
  gifAutoPlay: o,
  canDeleteAttachments: c,
  inlineAttachmentMedia: u,
  onMediaItemContextMenu: d,
  shouldHideMediaOptions: _
} = this.props, E = l.map(t => (0, em.j9)(t, (0, P.s)(e, {
  type: 'attachment',
  attachmentId: t.id
}), _, a)).filter(ef.lm), I = {
  source: 'Media Mosaic',
  guild_id: i.guild_id,
  channel_id: i.id,
  channel_type: i.type
}, m = E.length > 1 ? (0, em.Cx)(E, I) : {}, T = (0, eC.yE)(n, eV.iLy.IS_VOICE_MESSAGE);

function h(e, t) {
  return (0, eS.dn)(e.originalItem, t);
}
let N = l.map(t => {
    let n = (0, W.VY)(t),
      s = {
        message: e,
        item: (0, eG.OB)(t, u),
        autoPlayGif: o,
        canRemoveItem: c && (l.length > 1 || '' !== e.content),
        onRemoveItem: this.handleRemoveAttachment,
        className: eK.embedWrapper,
        getObscureReason: h,
        onContextMenu: null != d ? e => {
          e.stopPropagation(), e.preventDefault(), d(e, n);
        } : void 0,
        renderAudioComponent: T ? eD.jY : eD.q7,
        renderImageComponent: eD.dS,
        renderVideoComponent: eD.vZ,
        renderPlaintextFilePreview: eD.d4,
        renderGenericFileComponent: eD.ZK,
        renderMosaicItemFooter: eD.L9,
        onPlay: (e, n, s) => {
          eT.default.track(eV.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
            guild_id: i.guild_id,
            channel_id: i.id,
            channel_type: i.type,
            type: t.content_type,
            flags: t.flags,
            size: t.size,
            duration: s
          });
        },
        gifFavoriteButton: e0(n)
      },
      a = (0, eI.q)({
        proxyURL: t.proxy_url,
        url: t.url
      });
    return a in m && (s.onClick = m[a]), s;
  }),
  C = r ? (0, s.jsx)(b.Z, {
    className: eW.hideIfMessageNotFocused,
    messageId: e.id,
    channelId: i.id,
    targetKind: 'media'
  }) : void 0;
return (0, s.jsx)(ek.Z, {
  items: N,
  inlineForwardButton: C
});
  }
  renderEmbeds(e) {
let {
  renderEmbeds: t
} = this.props;
return 0 !== e.embeds.length && t ? e.embeds.map((t, n) => {
  if (ew.b.has(t.type) || (0, eN.l3)(t) || (0, F.b)(t))
    return null;
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
    let a = eg.Z.safeParseWithQuery(t.url);
    if (null != a && null != a.pathname) {
      let r = a.pathname.split('/')[3];
      if (null != r)
        return (0, s.jsx)(m.Z, {
          skuId: r,
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
  onMediaItemContextMenu: a
} = this.props;
return (0, s.jsx)(ej.F, {
  gifAutoPlay: t,
  getGifFavButton: e0,
  getOnMediaItemContextMenu: null == a ? void 0 : e => t => {
    t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
  },
  shouldHideMediaOptions: i,
  shouldRedactExplicitContent: n,
  children: (0, s.jsx)(w.ZP, {
    message: e
  })
});
  }
  renderActivityInvite(e) {
if (null == e.activity)
  return null;
let {
  channel: t
} = this.props;
return (0, s.jsx)(eU.Z, {
  channel: t,
  message: e,
  hideParty: !1
});
  }
  renderPublishBump(e) {
return this.props.channel.type !== eV.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot ? null : (0, s.jsx)(p.Z, {
  channelId: e.channel_id,
  messageId: e.id
});
  }
  renderEphemeralAccessories(e) {
return (0, eC.yE)(e.flags, eV.iLy.EPHEMERAL) ? (0, s.jsx)(eL.Z, {
  message: e,
  onDeleteMessage: () => {
    E.Z.dismissAutomatedMessage(e);
  }
}) : null;
  }
  renderStickersAccessories(e) {
let t = (0, ei.cv)(e),
  {
    channel: n,
    isInteracting: i
  } = this.props;
return 0 === t.length ? null : t.map(e => (0, s.jsx)(es.Z, {
  channel: n,
  isInteracting: i,
  renderableSticker: e
}, e.id));
  }
  renderThreadAccessories(e) {
if (e.hasFlag(eV.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
  return (0, s.jsx)(er.Z, {
    message: e,
    compact: this.props.compact
  });
  }
  renderThreadRoleMentionWarning(e) {
if (!!e.hasFlag(eV.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
  if (!(Date.now() - ep.default.extractTimestamp(e.id) >= eX))
    return (0, s.jsx)('div', {
      className: eK.threadRoleMentionFailure,
      children: eY.Z.Messages.THREAD_ROLE_MENTION_FAILURE
    });
}
  }
  renderSuppressConfirmModal() {
let {
  channel: e,
  message: t
} = this.props;
return (0, s.jsxs)(_.DeclarativeConfirmModal, {
  dismissable: !0,
  header: eY.Z.Messages.SUPPRESS_EMBED_TITLE,
  confirmText: eY.Z.Messages.SUPPRESS_EMBED_CONFIRM,
  cancelText: eY.Z.Messages.CANCEL,
  onCancel: () => this.setState({
    showSuppressModal: !1
  }),
  onConfirm: () => {
    E.Z.suppressEmbeds(e.id, t.id), this.setState({
      showSuppressModal: !1
    });
  },
  children: [
    (0, s.jsx)(_.Text, {
      variant: 'text-md/normal',
      color: 'text-normal',
      className: eK.confirmText,
      children: eY.Z.Messages.SUPPRESS_EMBED_BODY
    }),
    (0, s.jsx)(_.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: eY.Z.Messages.SUPPRESS_EMBED_TIP
    })
  ]
});
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
  return;
}
return (0, s.jsx)(_.DeclarativeConfirmModal, {
  dismissable: !0,
  header: eY.Z.Messages.REMOVE_ATTACHMENT_TITLE,
  confirmText: eY.Z.Messages.REMOVE_ATTACHMENT_CONFIRM,
  cancelText: eY.Z.Messages.CANCEL,
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
  children: (0, s.jsx)(_.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    className: eK.confirmText,
    children: eY.Z.Messages.REMOVE_ATTACHMENT_BODY
  })
});
  }
  renderInteractionPremiumUpsell(e) {
let t = e.applicationId;
return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eB.Z, {
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
return null == t || null == n || (null == i ? void 0 : i.type) !== T.B8.APPLICATION_COMMAND ? null : (0, s.jsx)(ev.Z, {
  application: t,
  channelId: this.props.channel.id,
  guildId: this.props.channel.guild_id
});
  }
  renderMediaPostEmbeds(e) {
return e.embeds.flatMap(t => t.type !== eV.hBH.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(Q.Z, {
  embedUrl: t.url,
  message: e,
  channel: this.props.channel
}, t.id));
  }
  renderSafetyPolicyNotice(e) {
return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_POLICY_NOTICE ? (0, s.jsx)(et.i, {
  message: e
}) : null;
  }
  renderSafetySystemNotification(e) {
return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(en.g, {
  embed: e.embeds[0]
}) : null;
  }
  renderVoiceChannelInvite(e, t) {
if (1 === e.embeds.length && e.embeds[0].type === eV.hBH.VOICE_CHANNEL)
  return (0, s.jsx)(G.H, {
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
} = (0, R.Tw)(e);
return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(M.Z, {
  message: e
});
  }
  renderPoll(e, t) {
if (null != t)
  return (0, s.jsx)(X.Z, {
    message: e,
    poll: t,
    className: eK.pollContainer
  });
  }
  renderForwardedMessage(e) {
return 0 === e.messageSnapshots.length ? null : (0, s.jsx)(D.Z, {
  message: e
});
  }
  render() {
let {
  className: e,
  message: t,
  channel: n,
  poll: i
} = this.props, {
  showSuppressModal: a,
  showRemoveAttachmentModal: r
} = this.state, o = this.renderCodedLinks(t), c = this.renderGiftCodes(t), u = this.renderReferralTrial(t), d = this.renderAttachments(t), _ = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), I = this.renderEmbeds(t), m = this.renderActivityInvite(t), T = this.renderReactions(t), h = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), C = this.renderStickersAccessories(t), f = this.renderThreadAccessories(t), p = this.renderComponentAccessories(t), g = this.renderThreadRoleMentionWarning(t), S = this.renderEmbeddedApplicationInstanceEmbed(t), A = this.renderInteractionPremiumUpsell(t), R = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), x = this.renderSafetySystemNotification(t), M = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), L = this.renderPoll(t, i), Z = this.renderForwardedMessage(t);
return null == o && null == d && null == I && null == m && null == T && null == c && null == u && null == h && null == N && null == C && null == f && null == p && null == S && null == g && null == R && null == O && null != A && null == L && null == M && null == Z ? null : (0, s.jsxs)('div', {
  id: (0, eb.bX)(t),
  className: l()(e, eK.container),
  children: [
    Z,
    g,
    L,
    o,
    c,
    u,
    R,
    d,
    _,
    I,
    v,
    m,
    C,
    p,
    S,
    A,
    E,
    T,
    h,
    N,
    a && this.renderSuppressConfirmModal(),
    r && this.renderRemoveAttachmentConfirmModal(),
    f,
    O,
    x,
    M
  ]
});
  }
  constructor(...e) {
super(...e), eQ(this, 'state', {
  showSuppressModal: !1,
  showRemoveAttachmentModal: !1,
  attachmentToDelete: null
}), eQ(this, 'getAcceptInviteContext', e => {
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
}), eQ(this, 'renderEmbed', (e, t, n, i, a) => {
  let {
    gifAutoPlay: r,
    inlineEmbedMedia: l,
    canSuppressEmbeds: o,
    hasSpoilerEmbeds: c,
    shouldRedactExplicitContent: u,
    hasInlineForwardButton: d
  } = this.props, _ = (0, eS.BP)(e, a, i, c, u);
  if (e.type === eV.hBH.GIFT)
    return null;
  let E = (0, s.jsx)(eE.h.Provider, {
    value: e$(e.url, e.image, e.video),
    children: (0, s.jsx)(g.ZP, {
      className: eK.embedWrapper,
      embed: e,
      obscureReason: null != _ ? _ : void 0,
      autoPlayGif: r,
      hideMedia: !l,
      onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
      renderTitle: this.renderEmbedTitle,
      renderDescription: this.renderEmbedDescription,
      messageId: i,
      channelId: a,
      ...n
    })
  }, e.id);
  return d ? (0, s.jsxs)('div', {
    className: eK.embedContainer,
    children: [
      E,
      (0, s.jsx)(b.Z, {
        className: eW.hideIfMessageNotFocused,
        messageId: i,
        channelId: a,
        targetKind: 'embed',
        embedIndex: t
      })
    ]
  }) : E;
}), eQ(this, 'renderEmbedTitle', (e, t) => e.type === eV.hBH.RICH ? Y.Z.parseEmbedTitle(t, !0, {
  channelId: this.props.channel.id
}) : t), eQ(this, 'renderEmbedDescription', (e, t, n) => e.type === eV.hBH.RICH ? Y.Z.parse(t, !0, {
  channelId: this.props.channel.id,
  allowLinks: !0,
  allowEmojiLinks: !0,
  allowList: this.props.showListsAndHeaders,
  allowHeading: !n && this.props.showListsAndHeaders,
  previewLinkTarget: this.props.showMaskedLinks
}) : t), eQ(this, 'handleEmbedSuppressed', e => {
  let {
    channel: t,
    message: n
  } = this.props;
  e.shiftKey ? E.Z.suppressEmbeds(t.id, n.id) : this.setState({
    showSuppressModal: !0
  });
}), eQ(this, 'handleRemoveAttachment', e => {
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
  let {
channel: n,
message: i,
renderSuppressEmbeds: a,
isMessageSnapshot: r
  } = e, l = (0, c.e7)([eo.default], () => eo.default.getId()), o = el.x4.useSetting(), u = el.RS.useSetting(), d = el.NA.useSetting() && !(0, eO.Z)(e.message), _ = el.nc.useSetting(), E = el.QK.useSetting(), I = (0, c.e7)([eu.Z], () => null == n.guild_id || eu.Z.canChatInGuild(n.guild_id), [n]), m = (0, c.e7)([V.Z], () => null != n.guild_id && V.Z.isLurking(n.guild_id), [n]), T = (0, c.e7)([ec.ZP], () => ec.ZP.isCurrentUserGuest(n.guild_id), [n]), h = (0, c.e7)([
ec.ZP,
e_.default
  ], () => {
var e, t;
let i = e_.default.getCurrentUser();
return null !== (t = null != n.guild_id && null != i ? null === (e = ec.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }), {
canAddNewReactions: N,
canManageMessages: C
  } = (0, c.cj)([ed.Z], () => ({
canAddNewReactions: I && ed.Z.can(eV.Plq.ADD_REACTIONS, n),
canManageMessages: ed.Z.can(eV.Plq.MANAGE_MESSAGES, n)
  }), [
I,
n
  ]), f = (0, j.ux)(n.guild_id), [, p] = (0, U.AB)(n.guild_id), g = (0, ea.$R)(n), S = (l === i.author.id || C) && i.author.id !== eV.LAt && !1 !== a && !(0, eC.yE)(i.flags, eV.iLy.EPHEMERAL) && g && 1 === (0, eR.Z)(i), A = l === i.author.id && g && !r, R = i.author.id === l, M = i.isFirstMessageInForumPost(n), v = (0, ex.Z)({
channel: n,
canChat: I,
renderReactions: _,
canAddNewReactions: N,
isLurking: m,
isGuest: T,
communicationDisabled: p,
isActiveChannelOrUnarchivableThread: g,
isAutomodQuarantined: f
  }), P = (0, H.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), D = (0, z.Z)(null == n ? void 0 : n.id), b = (0, q.Z)(i), y = (0, O.V)(n.id, i.author.id), B = (0, x.r)(i.id), {
hasInlineForwardButton: k
  } = (0, L.yk)({
location: 'MessageAccessories'
  }), G = (0, Z.a)(i) && k;
  return (0, s.jsx)(e1, {
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
shouldRedactExplicitContent: y,
shouldRenderCtaButton: B,
hasInlineForwardButton: G
  });
}
eQ(e1, 'defaultProps', {
  renderEmbeds: !0,
  compact: !1
});
let e3 = e => {
  var t;
  let {
message: n,
channel: i,
disableReactionReads: a = !1,
renderComponentAccessory: r = !1,
renderThreadAccessory: l = !1,
disableReactionCreates: o = !0,
disableReactionUpdates: c = !0,
...u
  } = e, d = el.x4.useSetting(), _ = el.RS.useSetting(), E = el.NA.useSetting(), I = el.QK.useSetting(), m = (0, H.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), T = (0, z.Z)(null == i ? void 0 : i.id), h = (0, O.V)(i.id, n.author.id), N = (0, x.r)(n.id), C = (0, q.Z)(n);
  return (0, s.jsx)(e1, {
...u,
message: n,
channel: i,
disableReactionReads: a,
disableReactionCreates: o,
disableReactionUpdates: c,
canSuppressEmbeds: !1,
canDeleteAttachments: !1,
renderComponentAccessory: r,
renderThreadAccessory: l,
inlineAttachmentMedia: d,
inlineEmbedMedia: _,
renderEmbeds: E,
gifAutoPlay: I,
poll: C,
showListsAndHeaders: m,
showMaskedLinks: m,
shouldHideMediaOptions: T,
shouldRedactExplicitContent: h,
shouldRenderCtaButton: N,
hasInlineForwardButton: !1
  });
};