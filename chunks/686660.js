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
  s = n(981631),
  o = n(490897),
  l = n(689938);

function u(e, t) {
  return (0, a.EQ)([
t,
e
  ]).with([
s.bL.ALL_MESSAGES,
o.i.ALL_MESSAGES
  ], () => 'all_messages').with([
s.bL.ONLY_MENTIONS,
o.i.UNSET
  ], () => 'mentions').with([
s.bL.ONLY_MENTIONS,
o.i.ONLY_MENTIONS
  ], () => 'mentions').with([
s.bL.NO_MESSAGES,
o.i.UNSET
  ], () => 'nothing').with([
s.bL.NO_MESSAGES,
o.i.ONLY_MENTIONS
  ], () => 'nothing').otherwise(() => 'custom');
}

function c(e) {
  return (0, a.EQ)(e).with('all_messages', () => l.Z.Messages.NOTIFICATION_PRESET_1).with('mentions', () => l.Z.Messages.NOTIFICATION_PRESET_2).with('nothing', () => l.Z.Messages.NOTIFICATION_PRESET_3).with('custom', () => l.Z.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive();
}
(i = r || (r = {})).ALL_MESSAGES = 'all_messages', i.MENTIONS = 'mentions', i.NOTHING = 'nothing', i.CUSTOM = 'custom';