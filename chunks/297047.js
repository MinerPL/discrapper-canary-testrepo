n.d(t, {
  Z: function() {
return h;
  },
  q: function() {
return f;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(144144),
  s = n(592125),
  l = n(496675),
  u = n(944486),
  c = n(585483),
  d = n(51144),
  _ = n(981631),
  E = n(689938);

function f(e, t) {
  let {
id: n
  } = e, r = '@'.concat(d.ZP.getUserTag(e, {
decoration: 'never'
  }));
  c.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
plainText: r,
rawText: '<@'.concat(n, '>')
  }), null != t && o.Z.startTyping(t);
}

function h(e, t, n) {
  let [o, c] = (0, i.Wu)([
u.Z,
s.Z,
l.Z
  ], () => {
let e = u.Z.getChannelId(t),
  n = s.Z.getChannel(e);
return [
  e,
  null != n && (n.isMultiUserDM() || l.Z.can(_.Plq.SEND_MESSAGES, n))
];
  }, [t]), d = n === _.IlC.POPOUT;
  return !c || d ? null : (0, r.jsx)(a.MenuItem, {
id: 'mention',
label: E.Z.Messages.MENTION,
action: function() {
  f(e, o);
}
  });
}