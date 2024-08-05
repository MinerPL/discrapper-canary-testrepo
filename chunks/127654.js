n.d(t, {
  G: function() {
return I;
  },
  d: function() {
return x;
  }
}), n(653041), n(47120), n(411104);
var i = n(475179),
  a = n(166459),
  s = n(966390),
  l = n(531643),
  r = n(476326),
  o = n(367907),
  c = n(358221),
  u = n(117530),
  d = n(594174),
  h = n(626135),
  p = n(403182),
  m = n(74538),
  _ = n(979956),
  f = n(981631),
  E = n(959517),
  g = n(474936),
  C = n(689938);

function I(e, t) {
  let n = d.default.getCurrentUser(),
i = e.getGuildId(),
a = p.dg(i),
s = [],
r = 0,
c = 0,
u = 0,
h = [];
  for (let e of t)
u += 1, r += e.size, s.push(e.size), e.size > c && (c = e.size), null != e.type ? h.push(e.type) : h.push('unknown');
  if (c > a) {
(0, o.yw)(f.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
  channel_id: e.id,
  guild_id: i,
  user_individual_file_size_limit: a,
  pre_compression_file_sizes: s,
  pre_compression_aggregate_file_size: r,
  num_attachments: u,
  error_type: E.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
  attachment_mimetypes: h
}), (0, l.openUploadError)({
  title: C.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
  help: (0, _.BK)(n, i),
  showPremiumUpsell: !(0, m.M5)(n, g.p9.TIER_2),
  fileSize: c
});
return;
  }
  (0, l.openUploadError)({
title: C.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
help: C.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
  maxSize: p.Ng(p.OC())
})
  });
}

function x(e, t, n) {
  let {
filesMetadata: o,
requireConfirm: d = !0,
showLargeMessageDialog: p = !1,
isThumbnail: m = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1)
return;
  if (null != o && o.length !== e.length)
throw Error('Unexpected mismatch between files and file metadata');
  let E = t.getGuildId();
  if ((0, _.Bf)(e, E)) {
I(t, e);
return;
  }
  if (u.Z.getUploadCount(t.id, n) + e.length > f.dN1) {
(0, l.openUploadError)({
  title: C.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
  help: C.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
    limit: f.dN1
  })
}), h.default.track(f.rMx.UPLOAD_FILE_LIMIT_ERROR, {
  existing_count: u.Z.getUploadCount(t.id, n),
  new_count: e.length
});
return;
  }
  if ((t.type === f.d4z.GUILD_VOICE || t.type === f.d4z.GUILD_STAGE_VOICE) && !c.Z.getChatOpen(t.id) && i.Z.updateChatOpen(t.id, !0), d) {
let i = Array.from(e).map((e, t) => ({
  file: e,
  platform: r.ow.WEB,
  isThumbnail: m,
  ...null == o ? void 0 : o[t]
}));
a.Z.addFiles({
  files: i,
  channelId: t.id,
  showLargeMessageDialog: p,
  draftType: n
});
  } else
s.Z.instantBatchUpload({
  channelId: t.id,
  files: e,
  draftType: n,
  isThumbnail: m,
  filesMetadata: o
});
}