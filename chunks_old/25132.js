"use strict";
n.r(t), n.d(t, {
  useUserForLinkStatus: function() {
    return d
  },
  useUserQRLinkUrl: function() {
    return c
  },
  useHasMaxConnections: function() {
    return f
  },
  usePendingRequestCount: function() {
    return E
  },
  useAcceptedRequestsCount: function() {
    return h
  },
  useActivityWindowTimeStamp: function() {
    return _
  },
  useLinkTimestampText: function() {
    return C
  }
});
var a = n("65597"),
  s = n("697218"),
  l = n("822825"),
  i = n("117933"),
  r = n("771783"),
  o = n("775032"),
  u = n("922832");

function d(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers()),
    n = Object.values(t).filter(t => null != t && t.link_status === e),
    i = n.sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
      var t;
      return null !== (t = e.user_id) && void 0 !== t ? t : void 0
    }).filter(e => null != e);
  return (0, a.useStateFromStoresArray)([s.default], () => i.map(e => s.default.getUser(e))).filter(e => null != e)
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
  if (null == e) return 0;
  let n = Object.values(t).filter(t => null != t && t.link_status === u.UserLinkStatus.PENDING && e.id !== t.requestor_id);
  return n.length
}

function h() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  if (null == e) return 0;
  let n = Object.values(t).filter(e => null != e && e.link_status === u.UserLinkStatus.ACTIVE);
  return n.length
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