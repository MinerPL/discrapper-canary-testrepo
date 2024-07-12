n.d(t, {
  gs: function() {
return u;
  },
  p1: function() {
return c;
  },
  s8: function() {
return r;
  }
}), n(627341);
var r, i, a = n(278074),
  o = n(981631),
  s = n(490897),
  l = n(689938);

function u(e, t) {
  return (0, a.EQ)([
t,
e
  ]).with([
o.bL.ALL_MESSAGES,
s.i.ALL_MESSAGES
  ], () => 'all_messages').with([
o.bL.ONLY_MENTIONS,
s.i.UNSET
  ], () => 'mentions').with([
o.bL.ONLY_MENTIONS,
s.i.ONLY_MENTIONS
  ], () => 'mentions').with([
o.bL.NO_MESSAGES,
s.i.UNSET
  ], () => 'nothing').with([
o.bL.NO_MESSAGES,
s.i.ONLY_MENTIONS
  ], () => 'nothing').otherwise(() => 'custom');
}

function c(e) {
  return (0, a.EQ)(e).with('all_messages', () => l.Z.Messages.NOTIFICATION_PRESET_1).with('mentions', () => l.Z.Messages.NOTIFICATION_PRESET_2).with('nothing', () => l.Z.Messages.NOTIFICATION_PRESET_3).with('custom', () => l.Z.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive();
}
(i = r || (r = {})).ALL_MESSAGES = 'all_messages', i.MENTIONS = 'mentions', i.NOTHING = 'nothing', i.CUSTOM = 'custom';