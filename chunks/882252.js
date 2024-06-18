"use strict";
n.d(t, {
  FS: function() {
    return _
  },
  Uw: function() {
    return E
  },
  nC: function() {
    return d
  },
  nU: function() {
    return I
  },
  yv: function() {
    return T
  }
}), n(47120);
var i = n(683860),
  r = n(592125),
  s = n(430824),
  o = n(306680),
  a = n(710352),
  l = n(176505),
  u = n(689938);

function _(e, t) {
  let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.ZP];
  return {
    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
  }
}

function d(e) {
  let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, s.Z, o.ZP], a = t.getChannel(e);
  if (null == a) return null;
  let l = n.getGuild(a.guild_id);
  return null == l ? null : _(a, l, [i])
}
let c = () => ({
  minutes: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
  hours: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
  days: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
  month: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
});

function E(e, t) {
  if (t === a.R6.POSTED_DURATION_AGO && e === i.z.CREATION_DATE) return c
}

function I(e, t) {
  let [n] = t, i = n.hasTrackedUnread(e), r = n.hasOpenedThread(e), s = null != n.getTrackedAckMessageId(e);
  return i && r && s
}

function T(e) {
  var t;
  return (null === (t = r.Z.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(l.zZ.PINNED)) === !0
}