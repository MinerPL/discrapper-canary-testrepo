"use strict";
n.d(t, {
  Eq: function() {
    return o
  },
  Uj: function() {
    return s
  },
  gx: function() {
    return l
  },
  qO: function() {
    return a
  }
});
var i = n(544891),
  r = n(981631);

function s(e, t, n, s) {
  return i.tn.post({
    url: r.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      embed_ids: s
    }
  })
}

function o(e, t, n, s) {
  return i.tn.post({
    url: r.ANM.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      filenames: s
    }
  })
}

function a(e, t) {
  return i.tn.patch({
    url: r.ANM.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
    body: {
      message_ids: t
    }
  })
}

function l(e) {
  let t = e.map(e => ({
    channel_id: e.channel_id,
    message_id: e.id
  }));
  return i.tn.patch({
    url: r.ANM.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
    body: {
      messages: t
    }
  })
}