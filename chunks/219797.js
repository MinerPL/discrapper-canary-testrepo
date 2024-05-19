"use strict";
n.r(t), n.d(t, {
  AudioComponentForMessageAttachment: function() {
    return v
  },
  GenericFileComponentForMessageAttachment: function() {
    return M
  },
  ImageComponentForMessageAttachment: function() {
    return A
  },
  MosaicItemFooterForMessageAttachment: function() {
    return P
  },
  PlaintextFilePreviewForMessageAttachment: function() {
    return S
  },
  VideoComponentForMessageAttachment: function() {
    return h
  },
  VoiceMessageAudioComponentForMessageAttachment: function() {
    return I
  }
}), n("789020");
var r = n("735250"),
  i = n("470079"),
  a = n("442837"),
  l = n("993365"),
  o = n("981729"),
  s = n("543651"),
  u = n("519320"),
  c = n("592125"),
  d = n("529653"),
  f = n("52824"),
  m = n("630388"),
  _ = n("591759"),
  g = n("524444"),
  p = n("981631"),
  C = n("689938"),
  E = n("978577");

function A(e) {
  let t = e.item.originalItem;
  return (0, g.renderImageComponent)({
    ...e,
    alt: t.description,
    src: (0, f.getBestEffortSrcUrl)({
      proxyURL: t.proxy_url,
      url: t.url
    }),
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version
  })
}

function h(e) {
  let t = e.item.originalItem,
    n = i.useCallback(() => {
      var e;
      return (0, m.hasFlag)(null !== (e = t.flags) && void 0 !== e ? e : 0, p.MessageAttachmentFlags.IS_CLIP) ? (0, r.jsxs)(o.TooltipContainer, {
        text: C.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: E.clipPill,
        children: [(0, r.jsx)(d.default, {}), (0, r.jsx)(l.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: C.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [t]),
    a = _.default.toURLSafe(t.proxy_url);
  return null == a ? null : (a.searchParams.append("format", "jpeg"), (0, g.renderVideoComponent)({
    ...e,
    alt: t.description,
    poster: a.toString(),
    fileSize: t.size,
    fileName: t.filename,
    src: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholder_version,
    renderOverlayContent: n
  }))
}

function v(e) {
  let t = e.item.originalItem;
  return (0, g.renderAudioComponent)({
    ...e,
    fileSize: t.size,
    fileName: t.filename,
    src: t.url
  })
}

function I(e) {
  let {
    message: t,
    item: n
  } = e, r = n.originalItem, a = i.useCallback((e, n, i) => {
    var a;
    (0, u.logVoiceMessagePlaybackStarted)(t.id, null !== (a = r.duration_secs) && void 0 !== a ? a : null, n, t.author.id)
  }, [t, r.duration_secs]), l = i.useCallback((e, n) => {
    var i;
    (0, u.logVoiceMessagePlaybackEnded)(t.id, null !== (i = r.duration_secs) && void 0 !== i ? i : null, e, t.author.id, n)
  }, [t, r.duration_secs]), o = i.useCallback(e => {
    var n;
    (0, u.logVoiceMessagePlaybackFailed)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null)
  }, [t]);
  return (0, g.renderVoiceMessageAudioComponent)({
    ...e,
    fileSize: r.size,
    fileName: r.filename,
    src: r.url,
    durationSecs: r.duration_secs,
    waveform: r.waveform,
    onPlay: a,
    onPause: l,
    onError: o
  })
}

function S(e) {
  let t = e.item.originalItem;
  return (0, g.renderPlaintextFilePreview)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size,
    contentType: t.content_type
  })
}

function M(e) {
  let t = e.item.originalItem;
  return (0, g.renderGenericFileComponent)({
    ...e,
    url: t.url,
    fileName: t.filename,
    fileSize: t.size
  })
}

function P(e) {
  if ("CLIP" === e.item.type) return (0, r.jsx)(F, {
    attachment: e.item.originalItem,
    message: e.message
  });
  return null
}

function F(e) {
  var t;
  let {
    attachment: n,
    message: i
  } = e, l = i.channel_id, o = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getBasicChannel(l)) || void 0 === e ? void 0 : e.guild_id
  }), {
    clip_created_at: u,
    clip_participants: d,
    title: f,
    application: m
  } = n;
  return (0, r.jsx)(s.default, {
    createdAt: null != u ? Date.parse(u) : void 0,
    participantIds: null !== (t = null == d ? void 0 : d.map(e => {
      let {
        id: t
      } = e;
      return t
    })) && void 0 !== t ? t : [],
    applicationId: null == m ? void 0 : m.id,
    title: f,
    guildId: o
  })
}