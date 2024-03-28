"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
});
var a = l("531643"),
  i = l("403182"),
  s = l("689938");

function n(e) {
  (0, a.openUploadError)({
    title: s.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: s.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, i.sizeString)(e)
    })
  })
}