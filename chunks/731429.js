"use strict";
n.d(t, {
  K: function() {
    return _
  }
});
var i = n(703656),
  r = n(260483),
  s = n(144140),
  o = n(131704),
  a = n(496675),
  l = n(709054),
  u = n(981631);

function _(e) {
  var t, n, _, d, c;
  let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && o.Ec.has(e.type) ? {
    location: E ? (0, i.At)() : void 0,
    thread_approximate_member_count: r.Z.getMemberCount(e.id),
    thread_approximate_message_count: s.Z.getCount(e.id),
    thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
    thread_locked: null !== (d = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== d && d,
    thread_auto_archive_duration_minutes: null !== (c = null === (_ = e.threadMetadata) || void 0 === _ ? void 0 : _.autoArchiveDuration) && void 0 !== c ? c : 0,
    thread_approximate_creation_date: l.default.extractTimestamp(e.id),
    can_send_message: a.Z.can(u.Plq.SEND_MESSAGES, e),
    parent_channel_type: e.parentChannelThreadType
  } : null
}