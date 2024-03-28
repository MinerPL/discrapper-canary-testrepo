"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return u
  },
  clearMessageRequestState: function() {
    return l
  },
  fetchUserCountryCode: function() {
    return d
  },
  markAsMessageRequest: function() {
    return c
  },
  rejectMessageRequest: function() {
    return E
  },
  rejectMessageRequestBatch: function() {
    return T
  }
});
var n = s("544891"),
  a = s("570140"),
  r = s("893776"),
  o = s("290323"),
  i = s("981631");
async function u(e) {
  await n.HTTP.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: o.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), a.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function l(e) {
  return n.HTTP.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: o.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function c(e) {
  return n.HTTP.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: o.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function E(e) {
  return n.HTTP.del({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function T(e) {
  return n.HTTP.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function d() {
  r.default.getLocationMetadata()
}