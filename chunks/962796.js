n.d(t, {
  HG: function() {
return l;
  },
  Mf: function() {
return u;
  },
  Y_: function() {
return c;
  },
  bn: function() {
return o;
  }
}), n(47120);
var i = n(873011),
  s = n(570140),
  a = n(192720),
  r = n(768943);

function l(e) {
  (0, a.gL)({
type: i.J.REMINDER,
...e
  });
}

function o(e) {
  (0, a.ep)({
type: i.J.REMINDER,
...e
  });
}

function c(e, t) {
  s.Z.dispatch({
type: 'MESSAGE_REMINDER_TOGGLE',
messageId: e,
complete: t
  });
}

function u() {
  let e = r.Z.getMessageReminders().filter(e => e.complete);
  if (e.length > 0)
for (let t of e)
  o(t.saveData);
}