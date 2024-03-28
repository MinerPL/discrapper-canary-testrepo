"use strict";
l.r(t), l.d(t, {
  filesExceedUploadLimits: function() {
    return u
  },
  getErrorHelp: function() {
    return o
  },
  getWebUploadFiles: function() {
    return d
  }
}), l("724458"), l("653041");
var a = l("476326"),
  i = l("403182"),
  n = l("74538"),
  s = l("474936"),
  r = l("689938");

function o(e, t) {
  let l = i.sizeString(i.maxFileSize(t));
  return n.default.isPremium(e, s.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: l
  }) : n.default.isPremium(e, s.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: l
  }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: l
  })
}

function u(e, t) {
  return i.anyFileTooLarge(e, t) || i.uploadSumTooLarge(e)
}

function d(e) {
  return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
}