n.d(t, {
  q: function() {
return D;
  },
  r: function() {
return y;
  }
});
var r = n(302454),
  i = n.n(r),
  a = n(668781),
  o = n(45986),
  s = n(782568),
  l = n(704133),
  u = n(139674),
  c = n(702321),
  d = n(900460),
  _ = n(627714),
  E = n(364640),
  f = n(772096),
  h = n(982806),
  p = n(540709),
  m = n(881706),
  I = n(592125),
  T = n(430824),
  g = n(20303),
  S = n(902676),
  A = n(375954),
  N = n(699516),
  v = n(944486),
  O = n(626135),
  R = n(981631),
  C = n(689938);

function y(e, t) {
  var n;
  let r = I.Z.getChannel(v.Z.getChannelId());
  return !!(null == r || r.type !== R.d4z.DM || N.Z.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : '')) && e === t;
}

function D(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
{
  trusted: N,
  onClick: v,
  onConfirm: y,
  shouldConfirm: D,
  messageId: L,
  channelId: b
} = e,
M = i().sanitizeUrl(e.href);
  if (null == M) {
null != t && t.preventDefault(), a.Z.show({
  title: C.Z.Messages.HOLD_UP,
  body: C.Z.Messages.MALFORMED_LINK_BODY.format({
    url: e.href
  }),
  isDismissable: !0
});
return;
  }
  let P = null,
U = !1,
w = L,
x = b,
G = null;
  if (null != L && null != b) {
var k, B, F;
let e = A.Z.getMessage(b, L),
  t = I.Z.getBasicChannel(b);
P = null !== (F = null == t ? void 0 : t.guild_id) && void 0 !== F ? F : null;
let n = T.Z.getGuild(P),
  r = (null == e ? void 0 : null === (k = e.messageReference) || void 0 === k ? void 0 : k.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(R.iLy.IS_CROSSPOST)) && null != P;
r && (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null ? (w = e.messageReference.message_id, x = e.messageReference.channel_id, G = e.messageReference.guild_id) : G = P;
let i = (null == t ? void 0 : t.type) === R.d4z.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(R.oNc.COMMUNITY)) === !0,
  a = (null == e ? void 0 : e.hasFlag(R.iLy.EPHEMERAL)) === !0;
U = null != e && !a && (r || i);
  }
  if (null != b) {
let e = I.Z.getChannel(b),
  t = T.Z.getGuild(null == e ? void 0 : e.getGuildId());
null != e && null != t && t.hasFeature(R.oNc.DISCOVERABLE) && O.default.track(R.rMx.URL_CLICKED, {
  url_domain: (0, S.F)(M),
  guild_id: t.id,
  channel_id: e.id
}), (0, c.Z)(b) && O.default.track(R.rMx.CHANGE_LOG_CTA_CLICKED, {
  cta_type: 'inline_link',
  target: M
});
  }
  if (E.Z.trackLinkClicked(M), null != v) {
if (v(t))
  return;
  } else {
let {
  default: e
} = n(315263), i = e(M, {
  skipExtensionCheck: void 0,
  analyticsLocations: r
});
if (null != i && i(t))
  return;
  }
  let V = () => {
if (U && E.Z.trackAnnouncementMessageLinkClicked({
    messageId: w,
    channelId: b,
    guildId: P,
    sourceChannelId: x,
    sourceGuildId: G
  }), null != y) {
  y();
  return;
}
(0, s.Z)(M);
  };
  if (null !== u.Z.isBlockedDomain(M)) {
null == t || t.preventDefault(), l.Z.show(M);
return;
  }
  if (null != (0, m.v)(M)) {
null == t || t.preventDefault(), p.Z.show(M);
return;
  }
  if ((0, _.I)(M)) {
null == t || t.preventDefault(), d.Z.show(M);
return;
  }
  let H = 'function' == typeof N ? N() : N,
Z = (0, S.E)(M),
Y = !('http:' === Z || 'https:' === Z);
  if (!Y && (H || g.Z.isTrustedDomain(M)) || Y && g.Z.isTrustedProtocol(M)) {
null == t || null != D && D ? V() : U && E.Z.trackAnnouncementMessageLinkClicked({
  messageId: w,
  channelId: b,
  guildId: P,
  sourceChannelId: x,
  sourceGuildId: G
});
return;
  }
  if (null != t && t.preventDefault(), Y)
h.Z.show({
  url: M,
  trustUrl: o.u,
  onConfirm: V,
  isProtocol: !0
});
  else {
let e = (0, f.yw)(M),
  t = null != e ? e.displayTarget : M;
h.Z.show({
  url: t,
  trustUrl: o.o,
  onConfirm: V,
  isProtocol: !1
});
  }
}