"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(531643),
  i = t(403182),
  l = t(689938);

function a(e) {
  (0, n.openUploadError)({
    title: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, i.Ng)(e)
    })
  })
}