n.d(t, {
  JH: function() {
return s;
  },
  O7: function() {
return u;
  },
  Z0: function() {
return c;
  },
  x7: function() {
return l;
  }
});
var r = n(57132),
  i = n(215355),
  a = n(289551),
  o = n(981631);

function s() {
  return (0, r.cn)();
}

function l() {
  return (0, r.cn)() && !(0, i.LI)({
location: 'isSplitMessagesTab'
  }).mergeTabs;
}

function u() {
  if (!l())
return !1;
  let e = (0, a.Z)();
  return (null == e ? void 0 : e.name) === 'messages';
}

function c(e) {
  return !!s() && (!l() || null != e && e !== o.ME);
}