"use strict";
s.r(t), s.d(t, {
  uploadEmojiFile: function() {
    return S
  }
});
var a = s("668781"),
  l = s("80932"),
  n = s("197712"),
  i = s("426642"),
  r = s("626135"),
  o = s("176354"),
  d = s("956664"),
  u = s("185923"),
  c = s("981631"),
  E = s("689938"),
  _ = s("413135").Buffer;
let I = (e, t, s, a) => (r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: s,
    file_size: t,
    upload_id: a
  }), i.ImageInputUploadErrors.TOO_BIG),
  T = (e, t, s) => {
    r.default.track(c.AnalyticEvents.EMOJI_FILE_RESIZED, {
      is_animated: !1,
      file_type: e.type.split("/").pop(),
      original_file_size_bytes: e.size,
      resized_file_size_bytes: (0, d.dataUriFileSize)(t),
      resized_file_too_big: s
    })
  },
  S = async e => {
    let {
      data: t,
      file: s,
      guildId: d,
      uploadId: S,
      roles: f,
      image: m,
      hideErrorModal: N
    } = e, g = o.default.sanitizeEmojiName(s.name.split(".")[0]);
    if (o.default.isFileTooBig(s)) {
      if ("image/gif" === s.type) return I(s.name, s.size, d, S);
      if (null != m) {
        let e;
        t = (0, n.downsizeImage)(m, 128, 128);
        try {
          e = o.default.isDataTooBig(t)
        } catch (e) {
          return I(s.name, s.size, d, S)
        }
        if (T(s, t, e), e) return I(s.name, s.size, d, S)
      }
    }
    try {
      await (0, l.uploadEmoji)({
        guildId: d,
        image: t,
        name: g,
        roles: f
      }), r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_COMPLETED, {
        guild_id: d,
        upload_id: S
      })
    } catch (o) {
      let e, s;
      let {
        body: l,
        status: n
      } = o;
      return null != l && (l.code === c.AbortCodes.TOO_MANY_EMOJI ? (e = E.default.Messages.TOO_MANY_EMOJI, s = i.ImageInputUploadErrors.TOO_MANY_EMOJI) : l.code === c.AbortCodes.TOO_MANY_ANIMATED_EMOJI ? (e = E.default.Messages.TOO_MANY_ANIMATED_EMOJI, s = i.ImageInputUploadErrors.TOO_MANY_ANIMATED_EMOJI) : null != l.image || l.code === c.AbortCodes.INVALID_FILE_ASSET_SIZE ? (r.default.track(c.AnalyticEvents.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: d,
        file_size: _.byteLength(t),
        upload_id: S
      }), e = E.default.Messages.EMOJI_TOO_BIG.format({
        maxSize: u.EMOJI_MAX_FILESIZE_KB
      }), s = i.ImageInputUploadErrors.TOO_BIG) : (null != l.image || l.code === c.AbortCodes.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (s = i.ImageInputUploadErrors.RESIZE_GIF)), 429 === n && (e = E.default.Messages.RATE_LIMITED, s = i.ImageInputUploadErrors.RATE_LIMIT), null != e && !N && a.default.show({
        title: E.default.Messages.GENERIC_ERROR_TITLE,
        body: e
      }), s
    }
  }