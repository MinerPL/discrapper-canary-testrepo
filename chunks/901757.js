"use strict";
var i, r, s = n(544891),
  o = n(689938);
(i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (r || (r = {})).ASSET = "asset";
class a extends s.sX {
  constructor(e, t) {
    var n;
    super(e, t, o.Z.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
    let i = this.getFieldErrors("asset");
    null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = o.Z.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
  }
}
t.Z = a