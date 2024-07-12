n.d(t, {
  FS: function() {
return c;
  },
  Uw: function() {
return E;
  },
  nC: function() {
return d;
  },
  nU: function() {
return f;
  },
  yv: function() {
return h;
  }
}), n(47120);
var r = n(683860),
  i = n(592125),
  a = n(430824),
  o = n(306680),
  s = n(710352),
  l = n(176505),
  u = n(689938);

function c(e, t) {
  let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.ZP];
  return {
isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
  };
}

function d(e) {
  let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
i.Z,
a.Z,
o.ZP
  ], s = t.getChannel(e);
  if (null == s)
return null;
  let l = n.getGuild(s.guild_id);
  return null == l ? null : c(s, l, [r]);
}
let _ = () => ({
  minutes: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
  hours: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
  days: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
  month: u.Z.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
});

function E(e, t) {
  if (t === s.R6.POSTED_DURATION_AGO && e === r.z.CREATION_DATE)
return _;
}

function f(e, t) {
  let [n] = t, r = n.hasTrackedUnread(e), i = n.hasOpenedThread(e), a = null != n.getTrackedAckMessageId(e);
  return r && i && a;
}

function h(e) {
  var t;
  return (null === (t = i.Z.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(l.zZ.PINNED)) === !0;
}