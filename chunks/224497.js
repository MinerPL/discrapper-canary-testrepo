"use strict";
var i = n(512722),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(830496);
t.Z = {
  getUploadPayload: function(e) {
    var t, n;
    let i = e.item.file;
    return r()(null != i, "file data must not be empty"), {
      filename: i.name,
      file_size: i.size,
      id: o().uniqueId(),
      is_clip: null != e.clip,
      title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
      application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
      clip_created_at: null != e.clip ? (0, a.U)(e.clip.id) : void 0,
      clip_participant_ids: null != e.clip ? (0, a.Z)(e.clip.users) : void 0
    }
  }
}