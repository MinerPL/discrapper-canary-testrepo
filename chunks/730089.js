"use strict";
t.d(s, {
  G: function() {
    return N
  }
});
var n = t(668781),
  i = t(80932),
  l = t(197712),
  a = t(426642),
  r = t(626135),
  o = t(176354),
  c = t(956664),
  d = t(185923),
  u = t(981631),
  E = t(689938),
  _ = t(413135).Buffer;
let I = (e, s, t, n) => (r.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    guild_id: t,
    file_size: s,
    upload_id: n
  }), a.d.TOO_BIG),
  T = (e, s, t) => {
    r.default.track(u.rMx.EMOJI_FILE_RESIZED, {
      is_animated: !1,
      file_type: e.type.split("/").pop(),
      original_file_size_bytes: e.size,
      resized_file_size_bytes: (0, c.QB)(s),
      resized_file_too_big: t
    })
  },
  N = async e => {
    let {
      data: s,
      file: t,
      guildId: c,
      uploadId: N,
      roles: m,
      image: S,
      hideErrorModal: h
    } = e, g = o.ZP.sanitizeEmojiName(t.name.split(".")[0]);
    if (o.ZP.isFileTooBig(t)) {
      if ("image/gif" === t.type) return I(t.name, t.size, c, N);
      if (null != S) {
        let e;
        s = (0, l.Ae)(S, 128, 128);
        try {
          e = o.ZP.isDataTooBig(s)
        } catch (e) {
          return I(t.name, t.size, c, N)
        }
        if (T(t, s, e), e) return I(t.name, t.size, c, N)
      }
    }
    try {
      await (0, i.rS)({
        guildId: c,
        image: s,
        name: g,
        roles: m
      }), r.default.track(u.rMx.EMOJI_UPLOAD_COMPLETED, {
        guild_id: c,
        upload_id: N
      })
    } catch (o) {
      let e, t;
      let {
        body: i,
        status: l
      } = o;
      return null != i && (i.code === u.evJ.TOO_MANY_EMOJI ? (e = E.Z.Messages.TOO_MANY_EMOJI, t = a.d.TOO_MANY_EMOJI) : i.code === u.evJ.TOO_MANY_ANIMATED_EMOJI ? (e = E.Z.Messages.TOO_MANY_ANIMATED_EMOJI, t = a.d.TOO_MANY_ANIMATED_EMOJI) : null != i.image || i.code === u.evJ.INVALID_FILE_ASSET_SIZE ? (r.default.track(u.rMx.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        guild_id: c,
        file_size: _.byteLength(s),
        upload_id: N
      }), e = E.Z.Messages.EMOJI_TOO_BIG.format({
        maxSize: d.xG
      }), t = a.d.TOO_BIG) : (null != i.image || i.code === u.evJ.INVALID_FILE_ASSET_SIZE_RESIZE_GIF) && (t = a.d.RESIZE_GIF)), 429 === l && (e = E.Z.Messages.RATE_LIMITED, t = a.d.RATE_LIMIT), null != e && !h && n.Z.show({
        title: E.Z.Messages.GENERIC_ERROR_TITLE,
        body: e
      }), t
    }
  }