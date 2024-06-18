"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(433355),
  _ = n(944486),
  d = n(581364);
let c = {};

function E() {
  return c = {}, !0
}

function I(e) {
  return !(e in c) && (c[e] = {
    activeCommand: null,
    activeCommandSection: null,
    activeOptionName: null,
    preferredCommandId: null,
    optionStates: {},
    initialValues: {}
  }), c[e]
}

function T(e) {
  var t;
  let {
    channelId: n,
    command: i,
    section: r,
    initialValues: s,
    location: o,
    triggerSection: a,
    queryLength: l
  } = e, u = I(n);
  if ((null == i ? void 0 : i.id) === (null === (t = u.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
  u.activeCommand = i, u.activeCommandSection = r, u.activeOptionName = null, u.preferredCommandId = null, u.initialValues = null != s ? s : {};
  let _ = {};
  return (null == i ? void 0 : i.options) != null && i.options.forEach(e => {
    _[e.name] = {
      isActive: !1,
      hasValue: !1,
      lastValidationResult: null,
      optionValue: null
    }
  }), u.optionStates = _, null != i && (0, d.qJ)({
    command: i,
    location: o,
    triggerSection: a,
    queryLength: l
  }), !0
}

function h(e) {
  var t, n;
  let {
    channelId: i,
    commandId: r
  } = e, s = I(i);
  return r !== s.preferredCommandId && (null !== s.preferredCommandId || r !== (null !== (n = null === (t = s.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (s.activeCommand = null, s.activeOptionName = null, s.preferredCommandId = r, s.optionStates = {}, !0)
}

function S(e) {
  let {
    channelId: t,
    changedOptionStates: n
  } = e, i = I(t), r = {
    ...i.optionStates
  };
  for (let [e, t] of Object.entries(n)) {
    var s, o, a;
    if (!(e in i.optionStates)) continue;
    if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
      r[e] = {
        hasValue: !1,
        isActive: !1,
        lastValidationResult: null,
        optionValue: null,
        location: void 0,
        length: void 0
      }, i.activeOptionName === e && (i.activeOptionName = null);
      continue
    }
    let n = r[e];
    r[e] = {
      hasValue: !0,
      isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
      lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
      optionValue: null !== (s = t.optionValue) && void 0 !== s ? s : n.optionValue,
      location: null !== (o = t.location) && void 0 !== o ? o : n.location,
      length: null !== (a = t.length) && void 0 !== a ? a : n.length
    }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (r[i.activeOptionName] = {
      ...r[i.activeOptionName]
    }, r[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
  }
  return i.optionStates = r, !0
}
class f extends(i = a.ZP.Store) {
  initialize() {
    u.ZP.addChangeListener(() => {
      let e = _.Z.getChannelId();
      if (null == e) return c = {}, !0;
      let t = u.ZP.getCurrentSidebarChannelId(e);
      if (null != t && t in c) return !1;
      c = e in c ? {
        [e]: c[e]
      } : {}
    })
  }
  getActiveCommand(e) {
    return I(e).activeCommand
  }
  getActiveCommandSection(e) {
    return I(e).activeCommandSection
  }
  getActiveOptionName(e) {
    return I(e).activeOptionName
  }
  getActiveOption(e) {
    var t, n, i;
    let r = I(e);
    return null !== (i = null === (n = r.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === r.activeOptionName)) && void 0 !== i ? i : null
  }
  getPreferredCommandId(e) {
    return I(e).preferredCommandId
  }
  getOptionStates(e) {
    return I(e).optionStates
  }
  getOptionState(e, t) {
    return I(e).optionStates[t]
  }
  getOption(e, t) {
    var n, i;
    return null === (i = I(e).activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
  }
  getState(e) {
    return {
      ...I(e)
    }
  }
}
o = "ApplicationCommandStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let N = new f(l.Z, {
  CONNECTION_OPEN: E,
  CHANNEL_SELECT: E,
  LOGOUT: E,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: T,
  APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
  APPLICATION_COMMAND_UPDATE_OPTIONS: S,
  APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
    let {
      channelId: t,
      preferredCommandId: n,
      command: i,
      section: r,
      location: s,
      changedOptionStates: o
    } = e, a = T({
      type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
      channelId: t,
      command: i,
      section: r,
      location: s
    }), l = h({
      type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
      channelId: t,
      commandId: n
    }), u = S({
      type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
      channelId: t,
      changedOptionStates: o
    });
    return a || l || u
  }
});
t.Z = N