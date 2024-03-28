"use strict";
l.r(t), l.d(t, {
  promptToUpload: function() {
    return E
  },
  showUploadFileSizeExceededError: function() {
    return h
  }
}), l("653041"), l("47120"), l("411104");
var a = l("475179"),
  i = l("166459"),
  n = l("966390"),
  s = l("531643"),
  r = l("476326"),
  o = l("367907"),
  u = l("358221"),
  d = l("117530"),
  c = l("594174"),
  m = l("626135"),
  f = l("403182"),
  _ = l("74538"),
  p = l("979956"),
  g = l("981631"),
  x = l("959517"),
  A = l("474936"),
  M = l("689938");

function h(e, t) {
  let l = c.default.getCurrentUser(),
    a = e.getGuildId(),
    i = f.maxFileSize(a),
    n = [],
    r = 0,
    u = 0,
    d = 0,
    m = [];
  for (let e of t) d += 1, r += e.size, n.push(e.size), e.size > u && (u = e.size), null != e.type ? m.push(e.type) : m.push("unknown");
  if (u > i) {
    (0, o.trackWithMetadata)(g.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: i,
      pre_compression_file_sizes: n,
      pre_compression_aggregate_file_size: r,
      num_attachments: d,
      error_type: x.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: m
    }), (0, s.openUploadError)({
      title: M.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, p.getErrorHelp)(l, a),
      showPremiumUpsell: !(0, _.isPremiumExactly)(l, A.PremiumTypes.TIER_2),
      fileSize: u
    });
    return
  }(0, s.openUploadError)({
    title: M.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: M.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: f.sizeString(f.getMaxRequestSize())
    })
  })
}

function E(e, t, l) {
  let {
    filesMetadata: o,
    requireConfirm: c = !0,
    showLargeMessageDialog: f = !1,
    isThumbnail: _ = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != o && o.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let x = t.getGuildId();
  if ((0, p.filesExceedUploadLimits)(e, x)) {
    h(t, e);
    return
  }
  if (d.default.getUploadCount(t.id, l) + e.length > g.MAX_UPLOAD_COUNT) {
    (0, s.openUploadError)({
      title: M.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: M.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: g.MAX_UPLOAD_COUNT
      })
    }), m.default.track(g.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: d.default.getUploadCount(t.id, l),
      new_count: e.length
    });
    return
  }
  if ((t.type === g.ChannelTypes.GUILD_VOICE || t.type === g.ChannelTypes.GUILD_STAGE_VOICE) && !u.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), c) {
    let a = Array.from(e).map((e, t) => ({
      file: e,
      platform: r.UploadPlatform.WEB,
      isThumbnail: _,
      ...null == o ? void 0 : o[t]
    }));
    i.default.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: f,
      draftType: l
    })
  } else n.default.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: l,
    isThumbnail: _,
    filesMetadata: o
  })
}