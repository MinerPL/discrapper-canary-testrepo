"use strict";
n.d(t, {
  x: function() {
    return s
  }
});
var i = n(367907),
  r = n(981631);

function s(e) {
  var t, n;
  let s = null != e.fileItems ? function(e) {
      return e.map(e => {
        var t;
        return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
      })
    }(e.fileItems) : [],
    o = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
    a = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
  (0, i.yw)(r.rMx.SEND_MESSAGE_FAILURE, {
    failure_code: a,
    error_message: o,
    attachment_mimetypes: s
  })
}