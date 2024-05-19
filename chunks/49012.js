"use strict";
n.r(t), n.d(t, {
  handleClick: function() {
    return D
  },
  isLinkTrusted: function() {
    return v
  }
});
var i = n("302454"),
  r = n.n(i),
  a = n("668781"),
  s = n("45986"),
  o = n("782568"),
  l = n("704133"),
  u = n("139674"),
  d = n("702321"),
  _ = n("900460"),
  c = n("627714"),
  E = n("364640"),
  I = n("772096"),
  T = n("982806"),
  f = n("540709"),
  S = n("881706"),
  h = n("592125"),
  A = n("430824"),
  m = n("20303"),
  N = n("902676"),
  p = n("375954"),
  O = n("699516"),
  C = n("944486"),
  R = n("626135"),
  g = n("981631"),
  L = n("689938");

function v(e, t) {
  var n;
  let i = h.default.getChannel(C.default.getChannelId());
  return !!(null == i || i.type !== g.ChannelTypes.DM || O.default.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
}

function D(e, t) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    {
      trusted: O,
      onClick: C,
      onConfirm: v,
      shouldConfirm: D,
      messageId: M,
      channelId: y
    } = e,
    P = r().sanitizeUrl(e.href);
  if (null == P) {
    null != t && t.preventDefault(), a.default.show({
      title: L.default.Messages.HOLD_UP,
      body: L.default.Messages.MALFORMED_LINK_BODY.format({
        url: e.href
      }),
      isDismissable: !0
    });
    return
  }
  let U = null,
    b = !1,
    G = M,
    w = y,
    k = null;
  if (null != M && null != y) {
    var B, V, x;
    let e = p.default.getMessage(y, M),
      t = h.default.getBasicChannel(y);
    U = null !== (x = null == t ? void 0 : t.guild_id) && void 0 !== x ? x : null;
    let n = A.default.getGuild(U),
      i = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(g.MessageFlags.IS_CROSSPOST)) && null != U;
    i && (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null ? (G = e.messageReference.message_id, w = e.messageReference.channel_id, k = e.messageReference.guild_id) : k = U;
    let r = (null == t ? void 0 : t.type) === g.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(g.GuildFeatures.COMMUNITY)) === !0,
      a = (null == e ? void 0 : e.hasFlag(g.MessageFlags.EPHEMERAL)) === !0;
    b = null != e && !a && (i || r)
  }
  if (null != y) {
    let e = h.default.getChannel(y),
      t = A.default.getGuild(null == e ? void 0 : e.getGuildId());
    null != e && null != t && t.hasFeature(g.GuildFeatures.DISCOVERABLE) && R.default.track(g.AnalyticEvents.URL_CLICKED, {
      url_domain: (0, N.getHostname)(P),
      guild_id: t.id,
      channel_id: e.id
    }), (0, d.default)(y) && R.default.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
      cta_type: "inline_link",
      target: P
    })
  }
  if (E.default.trackLinkClicked(P), null != C) {
    if (C(t)) return
  } else {
    let {
      default: e
    } = n("315263"), r = e(P, {
      skipExtensionCheck: void 0,
      analyticsLocations: i
    });
    if (null != r && r(t)) return
  }
  let F = () => {
    if (b && E.default.trackAnnouncementMessageLinkClicked({
        messageId: G,
        channelId: y,
        guildId: U,
        sourceChannelId: w,
        sourceGuildId: k
      }), null != v) {
      v();
      return
    }(0, o.default)(P)
  };
  if (null !== u.default.isBlockedDomain(P)) {
    null == t || t.preventDefault(), l.default.show(P);
    return
  }
  if (null != (0, S.isSuspiciousDownload)(P)) {
    null == t || t.preventDefault(), f.default.show(P);
    return
  }
  if ((0, c.shouldShowLinkNotDiscordWarning)(P)) {
    null == t || t.preventDefault(), _.default.show(P);
    return
  }
  let H = "function" == typeof O ? O() : O,
    Y = (0, N.getProtocol)(P),
    j = !("http:" === Y || "https:" === Y);
  if (!j && (H || m.default.isTrustedDomain(P)) || j && m.default.isTrustedProtocol(P)) {
    null == t || null != D && D ? F() : b && E.default.trackAnnouncementMessageLinkClicked({
      messageId: G,
      channelId: y,
      guildId: U,
      sourceChannelId: w,
      sourceGuildId: k
    });
    return
  }
  if (null != t && t.preventDefault(), j) T.default.show({
    url: P,
    trustUrl: s.trustProtocol,
    onConfirm: F,
    isProtocol: !0
  });
  else {
    let e = (0, I.punycodeLink)(P),
      t = null != e ? e.displayTarget : P;
    T.default.show({
      url: t,
      trustUrl: s.trustDomain,
      onConfirm: F,
      isProtocol: !1
    })
  }
}