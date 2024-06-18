"use strict";
n.d(t, {
  GV: function() {
    return f
  },
  Po: function() {
    return E
  },
  Sg: function() {
    return I
  },
  VP: function() {
    return h
  },
  dh: function() {
    return S
  },
  g7: function() {
    return T
  }
}), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(911969),
  l = n(314897),
  u = n(709054),
  _ = n(174212),
  d = n(895924),
  c = n(981631);

function E(e) {
  let {
    channelId: t,
    command: n,
    section: i,
    location: s,
    initialValues: a,
    triggerSection: l,
    queryLength: u
  } = e;
  null != n && r()(n.inputType !== d.iw.PLACEHOLDER, "command should not be placeholder"), o.Z.dispatch({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId: t,
    command: n,
    section: i,
    initialValues: a,
    location: s,
    triggerSection: l,
    queryLength: u
  })
}

function I(e, t) {
  o.Z.dispatch({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: e,
    commandId: t
  })
}

function T(e, t) {
  o.Z.dispatch({
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId: e,
    changedOptionStates: t
  })
}

function h(e, t) {
  T(e, Object.fromEntries(Object.entries(t).map(e => {
    let [t, n] = e;
    return [t, {
      lastValidationResult: n
    }]
  })))
}

function S(e, t, n, i) {
  return s.tn.put({
    body: {
      permissions: i
    },
    url: c.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
  })
}

function f(e, t, n) {
  var i;
  r()(null != t.autocomplete, "Missing autocomplete context");
  let {
    query: d,
    name: E
  } = t.autocomplete, I = u.default.fromTimestamp(Date.now());
  if (o.Z.dispatch({
      type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
      nonce: I,
      channelId: t.channel.id,
      query: d,
      name: E
    }), null == _.Z.getAutocompleteChoices(t.channel.id, E, d)) s.tn.post({
    url: c.ANM.INTERACTIONS,
    body: {
      type: a.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
      application_id: e.applicationId,
      guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
      channel_id: t.channel.id,
      session_id: l.default.getSessionId(),
      data: n,
      nonce: I
    },
    timeout: 3e3
  }).catch(() => {
    o.Z.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: I
    })
  })
}