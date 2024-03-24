"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return u
  },
  clearMessageRequestState: function() {
    return l
  },
  markAsMessageRequest: function() {
    return c
  },
  rejectMessageRequest: function() {
    return E
  },
  rejectMessageRequestBatch: function() {
    return T
  },
  fetchUserCountryCode: function() {
    return d
  }
});
var n = s("872717"),
  a = s("913144"),
  r = s("437822"),
  o = s("773163"),
  i = s("49111");
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