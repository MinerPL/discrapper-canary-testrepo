"use strict";
n.r(t), n.d(t, {
  useIframeModalState: function() {
    return M
  },
  useModalState: function() {
    return h
  }
}), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var l = n("470079"),
  a = n("512722"),
  u = n.n(a),
  i = n("442837"),
  o = n("544891"),
  s = n("570140"),
  d = n("911969"),
  r = n("81897"),
  c = n("155268"),
  E = n("603721"),
  p = n("314897"),
  T = n("592125"),
  f = n("271383"),
  m = n("914010"),
  _ = n("768581"),
  S = n("70956"),
  C = n("709054"),
  I = n("292419"),
  N = n("471073"),
  O = n("892902"),
  y = n("981631"),
  L = n("689938");
let A = e => {
  let t = !0;
  return e.forEach(e => {
    !e() && (t = !1)
  }), t
};

function v(e) {
  return l.useMemo(() => {
    let t = m.default.getGuildId(),
      n = null != t && null != e.bot ? f.default.getMember(t, e.bot.id) : void 0,
      l = _.default.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: !0,
        bot: null != n ? e.bot : void 0
      }),
      a = null != n && null != e.bot ? e.bot.username : e.name;
    return {
      applicationIconURL: l,
      applicationName: a,
      applicationBaseUrl: (0, c.default)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function h(e, t) {
  var n;
  let {
    application: a,
    customId: c,
    components: f,
    channelId: m
  } = e, _ = null === (n = T.default.getChannel(m)) || void 0 === n ? void 0 : n.guild_id, O = (0, r.default)(), [h, M] = l.useState(null), [g, b] = l.useState(null), D = (0, i.useStateFromStores)([N.default], () => N.default.getModalState(g), [g]), U = l.useMemo(() => (0, I.createComponents)(f, a.id, _), [f, a.id, _]), w = l.useRef(new Set), x = l.useCallback(() => {
    M(null), b(null), A(w.current) && b(function(e, t) {
      let n = C.default.fromTimestamp(Date.now()),
        l = e.channelId,
        a = T.default.getChannel(l);
      u()(null != a, "expected channel");
      let i = R(e.customId, e.components, []);
      (0, E.addQueued)(n, {
        data: {
          interactionType: d.InteractionTypes.MODAL_SUBMIT
        }
      });
      let s = () => {
        (null == t || !t.aborted) && o.HTTP.post({
          url: y.Endpoints.INTERACTIONS,
          body: {
            type: d.InteractionTypes.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: i
            },
            session_id: p.default.getSessionId(),
            nonce: n
          },
          signal: t
        }).catch(e => {
          429 === e.status ? setTimeout(s, e.body.retry_after * S.default.Millis.SECOND) : (0, E.setFailed)(n)
        })
      };
      return s(), n
    }(e, O))
  }, [O, e]);
  l.useEffect(() => {
    D === N.InteractionModalState.SUCCEEDED && (s.default.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      id: c
    }), t()), D === N.InteractionModalState.ERRORED && M(L.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
  }, [g, D, t, c]);
  let {
    applicationIconURL: G,
    applicationName: H
  } = v(a);
  return {
    components: U,
    applicationIconURL: G,
    applicationName: H,
    submissionState: D,
    error: h,
    validators: w.current,
    onSubmit: x
  }
}

function M(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: i
  } = v(t), o = T.default.getChannel(e.channelId);
  u()(null != o, "channel should not be null");
  let s = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != o.guild_id && "" !== o.guild_id && (s.guild_id = o.guild_id);
  let d = new URL(null != i ? i : "");
  return d.pathname = e.iframePath, {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: i,
    queryParams: s,
    iframeUrl: d.toString()
  }
}
let R = (e, t, n) => t.map((t, l) => {
  let a = [...n, l];
  switch (t.type) {
    case d.ComponentType.ACTION_ROW:
      var i;
      return {
        type: t.type, components: R(e, null !== (i = t.components) && void 0 !== i ? i : [], a)
      };
    case d.ComponentType.INPUT_TEXT: {
      let n = O.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        value: (null == n ? void 0 : n.type) === t.type ? n.value : null
      }
    }
    case d.ComponentType.STRING_SELECT: {
      let n = O.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        values: (null == n ? void 0 : n.type) === t.type ? n.values : null
      }
    }
    default:
      u()(!1, "unreachable")
  }
})