"use strict";
n.d(t, {
  Hf: function() {
    return S
  },
  JT: function() {
    return N
  },
  Nk: function() {
    return T
  },
  Qm: function() {
    return m
  },
  VB: function() {
    return h
  },
  Xq: function() {
    return I
  },
  YZ: function() {
    return A
  },
  wi: function() {
    return f
  }
}), n(47120), n(653041), n(724458);
var i = n(470079),
  r = n(442837),
  s = n(430824),
  o = n(823379),
  a = n(254711),
  l = n(213459),
  u = n(367790),
  _ = n(895924),
  d = n(581364),
  c = n(689079),
  E = n(981631);

function I(e, t) {
  var n, i, r, s;
  if (null == t) return {
    application: void 0,
    command: void 0
  };
  let o = l.ZP.getUserState(),
    a = l.ZP.getContextState(e);
  for (let e of Object.values(null !== (r = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== r ? r : {}).concat(Object.values(null !== (s = null === (i = a.result) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : {}))) {
    let n = e.commands[t];
    if (null != n) return {
      application: e.descriptor.application,
      command: n
    }
  }
  return {
    application: void 0,
    command: void 0
  }
}

function T(e, t, n) {
  var i, r, s, o, a, u, _, d;
  let c = l.ZP.getUserState(),
    E = l.ZP.getContextState(e),
    I = l.ZP.getApplicationState(n),
    T = null !== (d = null !== (_ = null === (r = c.result) || void 0 === r ? void 0 : null === (i = r.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== _ ? _ : null === (o = E.result) || void 0 === o ? void 0 : null === (s = o.sections) || void 0 === s ? void 0 : s[n]) && void 0 !== d ? d : null === (u = I.result) || void 0 === u ? void 0 : null === (a = u.sections) || void 0 === a ? void 0 : a[n];
  return null == T ? void 0 : T.descriptor
}

function h(e, t, n) {
  let i = l.ZP.query(e, {
    commandType: t,
    text: n
  }, {
    scoreMethod: u.p.COMMAND_OR_APPLICATION,
    allowFetch: !1
  });
  return {
    commands: i.commands,
    sections: i.descriptors
  }
}

function S(e) {
  let t = l.ZP.getUserState(),
    n = l.ZP.getContextState(e);
  return [null == t ? void 0 : t.result, null == n ? void 0 : n.result]
}

function f(e, t, n) {
  let o = (0, r.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
    {
      descriptors: u,
      commands: _,
      sectionedCommands: d,
      loading: I
    } = (0, l.JK)(e, o, t, {
      ...n,
      allowFetch: !0
    }),
    [T, h] = i.useState(null),
    S = i.useRef(!1);
  S.current = I;
  let f = i.useMemo(() => {
    let e = [];
    if (null != n.placeholderCount)
      for (let i = 0; i < n.placeholderCount; i++) e.push(R(i, t.commandType));
    return e
  }, [t.commandType, n.placeholderCount]);
  return i.useMemo(() => {
    let e = {
      loading: S,
      commands: _,
      activeSections: u,
      commandsByActiveSection: d,
      filteredSectionId: T,
      hasMoreAfter: !1,
      placeholders: I ? f : [],
      sectionDescriptors: u,
      filterSection: e => {
        h(e)
      },
      scrollDown: E.dG4
    };
    if (null != T) {
      let t = d.find(e => e.section.id === T);
      e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
    }
    if (I) {
      let t = d[0];
      if (null != t) e.commandsByActiveSection = [{
        section: t.section,
        data: [...t.data, ...f]
      }, ...d.slice(1)];
      else {
        let t = a.Tm[c.bi.BUILT_IN];
        e.activeSections = [t], e.commandsByActiveSection = [{
          section: t,
          data: f
        }]
      }
      e.commands = [..._, ...f]
    }
    return e
  }, [_, u, T, d, I, f])
}

function N(e, t, n) {
  let {
    descriptors: i,
    commands: r,
    loading: s
  } = l.ZP.query(e, t, n), o = [];
  if (null != n.placeholderCount && s)
    for (let e = 0; e < n.placeholderCount; e++) o.push(R(e, t.commandType));
  return {
    commands: s ? [...r, ...o] : r,
    sections: s && 0 === i.length ? [a.Tm[c.bi.BUILT_IN]] : i
  }
}

function A(e, t) {
  let n = (0, l.PL)(!0, !0),
    r = (0, l.em)(e, !0, !0);
  return i.useMemo(() => {
    if (null != t) {
      var e, i, s, o;
      for (let a of Object.values(null !== (s = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== s ? s : {}).concat(Object.values(null !== (o = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}))) {
        let e = a.commands[t];
        if (null != e) return {
          command: e,
          application: a.descriptor.application
        }
      }
    }
    return {
      command: void 0,
      application: void 0
    }
  }, [r.result, n.result, t])
}

function m(e, t, n) {
  let r = (0, l.PL)(!0, !0),
    s = (0, l.em)(e, !0, !0);
  return i.useMemo(() => {
    var e, i, a, l, u, _;
    let c = null !== (u = null === (i = r.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (a = s.result) || void 0 === a ? void 0 : a.sections[t],
      E = Object.values(null !== (_ = null == c ? void 0 : c.commands) && void 0 !== _ ? _ : {}).map(e => null == e.rootCommand ? e : (0, d.Z8)({
        rootCommand: e.rootCommand,
        command: e.rootCommand,
        applicationId: e.applicationId
      })).reduce((e, t) => (e[t.id] = t, e), {});
    return {
      application: null == c ? void 0 : null === (l = c.descriptor) || void 0 === l ? void 0 : l.application,
      commands: n.map(e => E[e]).filter(o.lm)
    }
  }, [null == r ? void 0 : r.result, null == s ? void 0 : s.result, t, n])
}
let O = {
  id: "placeholder-section",
  type: _.Qi.APPLICATION,
  name: ""
};

function R(e, t) {
  return {
    type: t,
    inputType: _.iw.PLACEHOLDER,
    id: "placeholder-".concat(e),
    name: "",
    displayName: "",
    description: "",
    displayDescription: "",
    applicationId: "",
    section: O
  }
}