n.d(t, {
  x: function() {
return a;
  }
});
var r = n(367907),
  i = n(981631);

function a(e) {
  var t, n;
  let a = null != e.fileItems ? function(e) {
  return e.map(e => {
    var t;
    return null !== (t = e.mimeType) && void 0 !== t ? t : 'unknown';
  });
}(e.fileItems) : [],
s = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
o = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
  (0, r.yw)(i.rMx.SEND_MESSAGE_FAILURE, {
failure_code: o,
error_message: s,
attachment_mimetypes: a
  });
}