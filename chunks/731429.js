n.d(t, {
  K: function() {
return c;
  }
});
var r = n(703656),
  i = n(260483),
  a = n(144140),
  s = n(131704),
  o = n(496675),
  l = n(709054),
  u = n(981631);

function c(e) {
  var t, n, c, d, _;
  let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && s.Ec.has(e.type) ? {
location: E ? (0, r.At)() : void 0,
thread_approximate_member_count: i.Z.getMemberCount(e.id),
thread_approximate_message_count: a.Z.getCount(e.id),
thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
thread_locked: null !== (d = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== d && d,
thread_auto_archive_duration_minutes: null !== (_ = null === (c = e.threadMetadata) || void 0 === c ? void 0 : c.autoArchiveDuration) && void 0 !== _ ? _ : 0,
thread_approximate_creation_date: l.default.extractTimestamp(e.id),
can_send_message: o.Z.can(u.Plq.SEND_MESSAGES, e),
parent_channel_type: e.parentChannelThreadType
  } : null;
}