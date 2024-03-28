"use strict";
n.r(t), n.d(t, {
  useAcceptedRequestsCount: function() {
    return h
  },
  useActivityWindowTimeStamp: function() {
    return _
  },
  useHasMaxConnections: function() {
    return f
  },
  useLinkTimestampText: function() {
    return C
  },
  usePendingRequestCount: function() {
    return E
  },
  useUserForLinkStatus: function() {
    return d
  },
  useUserQRLinkUrl: function() {
    return c
  }
});
var a = n("399606"),
  s = n("594174"),
  l = n("914788"),
  i = n("546791"),
  r = n("652262"),
  o = n("880257"),
  u = n("292352");

function d(e) {
  let t = Object.values((0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
    var t;
    return null !== (t = e.user_id) && void 0 !== t ? t : void 0
  }).filter(e => null != e);
  return (0, a.useStateFromStoresArray)([s.default], () => t.map(e => s.default.getUser(e))).filter(e => null != e)
}

function c() {
  let e = (0, a.useStateFromStores)([l.default], () => l.default.getLinkCode()),
    t = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser());
  return null == e || null == t ? null : (0, u.FAMILY_CENTER_REQUEST_QR_CODE_URL)(t.id, e)
}

function f() {
  let e = (0, o.default)(),
    t = d(u.UserLinkStatus.ACTIVE),
    n = e ? u.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : u.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
  return t.length >= n
}

function E() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === u.UserLinkStatus.PENDING && e.id !== t.requestor_id).length
}

function h() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === u.UserLinkStatus.ACTIVE).length
}

function _(e) {
  let t = (0, r.useSelectedTeenId)(),
    n = (0, a.useStateFromStores)([l.default], () => null == t ? null : l.default.getRangeStartTimestamp());
  return null == n ? null : (0, i.formatUserActivityTimestamp)(new Date(n).getTime(), () => e, 7)
}

function C(e, t) {
  let n = (0, a.useStateFromStores)([l.default], () => l.default.getLinkTimestamp(e));
  return null != n ? (0, i.formatLinkTimestamp)(Date.parse(n), t === u.UserLinkStatus.PENDING ? u.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER : u.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER) : null
}