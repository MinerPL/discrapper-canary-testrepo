"use strict";
n.r(t), n.d(t, {
  useModalState: function() {
    return A
  },
  useIframeModalState: function() {
    return O
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var l = n("884691"),
  a = n("627445"),
  u = n.n(a),
  o = n("446674"),
  r = n("872717"),
  s = n("913144"),
  i = n("798609"),
  c = n("763898"),
  d = n("711562"),
  f = n("274800"),
  I = n("271938"),
  p = n("42203"),
  m = n("26989"),
  T = n("162771"),
  C = n("315102"),
  h = n("718517"),
  M = n("299039"),
  E = n("812684"),
  N = n("470055"),
  S = n("524094"),
  R = n("49111"),
  _ = n("782340");
let v = e => {
  let t = !0;
  return e.forEach(e => {
    !e() && (t = !1)
  }), t
};

function g(e) {
  return l.useMemo(() => {
    let t = T.default.getGuildId(),
      n = null != t && null != e.bot ? m.default.getMember(t, e.bot.id) : void 0,
      l = C.default.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: !0,
        bot: null != n ? e.bot : void 0
      }),
      a = null != n && null != e.bot ? e.bot.username : e.name,
      u = (0, d.default)(e.id);
    return {
      applicationIconURL: l,
      applicationName: a,
      applicationBaseUrl: u
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function A(e, t) {
  var n;
  let {
    application: a,
    customId: d,
    components: m,
    channelId: T
  } = e, C = null === (n = p.default.getChannel(T)) || void 0 === n ? void 0 : n.guild_id, S = (0, c.default)(), [A, O] = l.useState(null), [y, D] = l.useState(null), b = (0, o.useStateFromStores)([N.default], () => N.default.getModalState(y), [y]), j = l.useMemo(() => (0, E.createComponents)(m, a.id, C), [m, a.id, C]), L = l.useRef(new Set), w = l.useCallback(() => {
    O(null), D(null), v(L.current) && D(function(e, t) {
      let n = M.default.fromTimestamp(Date.now()),
        l = e.channelId,
        a = p.default.getChannel(l);
      u(null != a, "expected channel");
      let o = x(e.customId, e.components, []);
      (0, f.addQueued)(n, {
        data: {
          interactionType: i.InteractionTypes.MODAL_SUBMIT
        }
      });
      let s = () => {
        (null == t || !t.aborted) && r.HTTP.post({
          url: R.Endpoints.INTERACTIONS,
          body: {
            type: i.InteractionTypes.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: o
            },
            session_id: I.default.getSessionId(),
            nonce: n
          },
          signal: t
        }).catch(e => {
          429 === e.status ? setTimeout(s, e.body.retry_after * h.default.Millis.SECOND) : (0, f.setFailed)(n)
        })
      };
      return s(), n
    }(e, S))
  }, [S, e]);
  l.useEffect(() => {
    b === N.InteractionModalState.SUCCEEDED && (s.default.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      id: d
    }), t()), b === N.InteractionModalState.ERRORED && O(_.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
  }, [y, b, t, d]);
  let {
    applicationIconURL: U,
    applicationName: B
  } = g(a);
  return {
    components: j,
    applicationIconURL: U,
    applicationName: B,
    submissionState: b,
    error: A,
    validators: L.current,
    onSubmit: w
  }
}

function O(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: o
  } = g(t), r = p.default.getChannel(e.channelId);
  u(null != r, "channel should not be null");
  let s = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    i = {
      instance_id: s,
      custom_id: n,
      channel_id: e.channelId
    };
  null != r.guild_id && "" !== r.guild_id && (i.guild_id = r.guild_id);
  let c = new URL(null != o ? o : "");
  c.pathname = e.iframePath;
  let d = c.toString();
  return {
    applicationIconURL: l,
    applicationName: a,
    applicationBaseUrl: o,
    queryParams: i,
    iframeUrl: d
  }
}
let x = (e, t, n) => t.map((t, l) => {
  let a = [...n, l];
  switch (t.type) {
    case i.ComponentType.ACTION_ROW:
      var o;
      return {
        type: t.type, components: x(e, null !== (o = t.components) && void 0 !== o ? o : [], a)
      };
    case i.ComponentType.INPUT_TEXT: {
      let n = S.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        value: (null == n ? void 0 : n.type) === t.type ? n.value : null
      }
    }
    case i.ComponentType.STRING_SELECT: {
      let n = S.default.getInteractionComponentState(e, a);
      return {
        type: t.type,
        custom_id: t.custom_id,
        values: (null == n ? void 0 : n.type) === t.type ? n.values : null
      }
    }
    default:
      u(!1, "unreachable")
  }
})