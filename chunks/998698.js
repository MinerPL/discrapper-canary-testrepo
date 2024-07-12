n(47120);
var r, i, a, o, s = n(442837),
  l = n(570140),
  u = n(433355),
  c = n(944486),
  d = n(581364);
let _ = {};

function E() {
  return _ = {}, !0;
}

function f(e) {
  return !(e in _) && (_[e] = {
activeCommand: null,
activeCommandSection: null,
activeOptionName: null,
preferredCommandId: null,
optionStates: {},
initialValues: {},
commandOrigin: null
  }), _[e];
}

function h(e) {
  var t;
  let {
channelId: n,
command: r,
section: i,
initialValues: a,
location: o,
triggerSection: s,
queryLength: l,
sectionName: u,
query: c,
searchResultsPosition: _,
source: E,
commandOrigin: h
  } = e, p = f(n);
  if ((null == r ? void 0 : r.id) === (null === (t = p.activeCommand) || void 0 === t ? void 0 : t.id))
return !1;
  p.activeCommand = r, p.activeCommandSection = i, p.activeOptionName = null, p.preferredCommandId = null, p.initialValues = null != a ? a : {}, p.commandOrigin = null != h ? h : null;
  let m = {};
  return (null == r ? void 0 : r.options) != null && r.options.forEach(e => {
m[e.name] = {
  isActive: !1,
  hasValue: !1,
  lastValidationResult: null,
  optionValue: null
};
  }), p.optionStates = m, null != r && (0, d.qJ)({
command: r,
location: o,
triggerSection: s,
queryLength: l,
sectionName: u,
query: c,
searchResultsPosition: _,
source: E
  }), !0;
}

function p(e) {
  var t, n;
  let {
channelId: r,
commandId: i
  } = e, a = f(r);
  return i !== a.preferredCommandId && (null !== a.preferredCommandId || i !== (null !== (n = null === (t = a.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (a.activeCommand = null, a.activeOptionName = null, a.preferredCommandId = i, a.optionStates = {}, !0);
}

function m(e) {
  let {
channelId: t,
changedOptionStates: n
  } = e, r = f(t), i = {
...r.optionStates
  };
  for (let [e, t] of Object.entries(n)) {
var a, o, s;
if (!(e in r.optionStates))
  continue;
if (!(void 0 !== t.hasValue ? t.hasValue : i[e].hasValue)) {
  i[e] = {
    hasValue: !1,
    isActive: !1,
    lastValidationResult: null,
    optionValue: null,
    location: void 0,
    length: void 0
  }, r.activeOptionName === e && (r.activeOptionName = null);
  continue;
}
let n = i[e];
i[e] = {
  hasValue: !0,
  isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
  lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
  optionValue: null !== (a = t.optionValue) && void 0 !== a ? a : n.optionValue,
  location: null !== (o = t.location) && void 0 !== o ? o : n.location,
  length: null !== (s = t.length) && void 0 !== s ? s : n.length
}, void 0 !== t.isActive && (t.isActive ? (null != r.activeOptionName && r.activeOptionName !== e && (i[r.activeOptionName] = {
  ...i[r.activeOptionName]
}, i[r.activeOptionName].isActive = !1), r.activeOptionName = e) : e === r.activeOptionName && (r.activeOptionName = null));
  }
  return r.optionStates = i, !0;
}
class I extends(r = s.ZP.Store) {
  initialize() {
u.ZP.addChangeListener(() => {
  let e = c.Z.getChannelId();
  if (null == e)
    return _ = {}, !0;
  let t = u.ZP.getCurrentSidebarChannelId(e);
  if (null != t && t in _)
    return !1;
  _ = e in _ ? {
    [e]: _[e]
  } : {};
});
  }
  getActiveCommand(e) {
return f(e).activeCommand;
  }
  getActiveCommandSection(e) {
return f(e).activeCommandSection;
  }
  getActiveOptionName(e) {
return f(e).activeOptionName;
  }
  getActiveOption(e) {
var t, n, r;
let i = f(e);
return null !== (r = null === (n = i.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === i.activeOptionName)) && void 0 !== r ? r : null;
  }
  getPreferredCommandId(e) {
return f(e).preferredCommandId;
  }
  getOptionStates(e) {
return f(e).optionStates;
  }
  getOptionState(e, t) {
return f(e).optionStates[t];
  }
  getCommandOrigin(e) {
return f(e).commandOrigin;
  }
  getOption(e, t) {
var n, r;
return null === (r = f(e).activeCommand) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(e => e.name === t);
  }
  getState(e) {
return {
  ...f(e)
};
  }
}
o = 'ApplicationCommandStore', (a = 'displayName') in(i = I) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o;
let T = new I(l.Z, {
  CONNECTION_OPEN: E,
  CHANNEL_SELECT: E,
  LOGOUT: E,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: h,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: p,
  APPLICATION_COMMAND_UPDATE_OPTIONS: m,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
let {
  channelId: t,
  preferredCommandId: n,
  command: r,
  section: i,
  location: a,
  changedOptionStates: o
} = e, s = h({
  type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
  channelId: t,
  command: r,
  section: i,
  location: a
}), l = p({
  type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
  channelId: t,
  commandId: n
}), u = m({
  type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
  channelId: t,
  changedOptionStates: o
});
return s || l || u;
  }
});
t.Z = T;