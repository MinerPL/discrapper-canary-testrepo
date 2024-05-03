"use strict";
n.r(t), n.d(t, {
  useIframeModalState: function() {
    return y
  },
  useIsFirstTextInputInModal: function() {
    return h
  },
  useModalState: function() {
    return v
  }
}), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var l = n("470079"),
  u = n("512722"),
  a = n.n(u),
  o = n("442837"),
  i = n("544891"),
  r = n("570140"),
  d = n("911969"),
  s = n("81897"),
  c = n("155268"),
  E = n("603721"),
  T = n("314897"),
  f = n("592125"),
  p = n("271383"),
  C = n("914010"),
  S = n("768581"),
  m = n("70956"),
  I = n("709054"),
  _ = n("970184"),
  N = n("471073"),
  O = n("892902"),
  g = n("981631"),
  M = n("689938");
let A = e => {
  let t = !0;
  return e.forEach(e => {
    !e() && (t = !1)
  }), t
};

function h(e) {
  var t;
  let n = (0, _.useComponentStateContext)(),
    l = null == n ? void 0 : null === (t = n.modal) || void 0 === t ? void 0 : t.components[0];
  return (null == l ? void 0 : l.type) === d.ComponentType.ACTION_ROW && l.components[0].id === e
}

function R(e) {
  return l.useMemo(() => {
    let t = C.default.getGuildId(),
      n = null != t && null != e.bot ? p.default.getMember(t, e.bot.id) : void 0,
      l = S.default.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: !0,
        bot: null != n ? e.bot : void 0
      }),
      u = null != n && null != e.bot ? e.bot.username : e.name;
    return {
      applicationIconURL: l,
      applicationName: u,
      applicationBaseUrl: (0, c.default)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function v(e, t) {
  let {
    application: n,
    customId: u,
    components: c
  } = e, p = (0, s.default)(), [C, S] = l.useState(null), [_, O] = l.useState(null), h = (0, o.useStateFromStores)([N.default], () => N.default.getModalState(_), [_]), v = l.useRef(new Set), y = l.useCallback(() => {
    S(null), O(null), A(v.current) && O(function(e, t) {
      let n = I.default.fromTimestamp(Date.now()),
        l = e.channelId,
        u = f.default.getChannel(l);
      a()(null != u, "expected channel");
      let o = L(e.customId, e.components);
      (0, E.addQueued)(n, {
        data: {
          interactionType: d.InteractionTypes.MODAL_SUBMIT
        }
      });
      let r = () => {
        (null == t || !t.aborted) && i.HTTP.post({
          url: g.Endpoints.INTERACTIONS,
          body: {
            type: d.InteractionTypes.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: u.id,
            guild_id: u.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: o
            },
            session_id: T.default.getSessionId(),
            nonce: n
          },
          signal: t
        }).catch(e => {
          429 === e.status ? setTimeout(r, e.body.retry_after * m.default.Millis.SECOND) : (0, E.setFailed)(n)
        })
      };
      return r(), n
    }(e, p))
  }, [p, e]);
  l.useEffect(() => {
    h === N.InteractionModalState.SUCCEEDED && (r.default.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: u
    }), t()), h === N.InteractionModalState.ERRORED && S(M.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
  }, [_, h, t, u]);
  let {
    applicationIconURL: b,
    applicationName: U
  } = R(n);
  return {
    components: c,
    applicationIconURL: b,
    applicationName: U,
    submissionState: h,
    error: C,
    validators: v.current,
    onSubmit: y
  }
}

function y(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: u,
    applicationBaseUrl: o
  } = R(t), i = f.default.getChannel(e.channelId);
  a()(null != i, "channel should not be null");
  let r = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != i.guild_id && "" !== i.guild_id && (r.guild_id = i.guild_id);
  let d = new URL(null != o ? o : "");
  return d.pathname = e.iframePath, {
    applicationIconURL: l,
    applicationName: u,
    applicationBaseUrl: o,
    queryParams: r,
    iframeUrl: d.toString()
  }
}
let L = (e, t) => t.map(t => {
  switch (t.type) {
    case d.ComponentType.ACTION_ROW:
      return {
        type: t.type, components: L(e, t.components)
      };
    case d.ComponentType.INPUT_TEXT: {
      let n = O.default.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? void 0 : n.type) === t.type ? n.value : null
      }
    }
    case d.ComponentType.STRING_SELECT: {
      let n = O.default.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? void 0 : n.type) === t.type ? n.values : null
      }
    }
    default:
      a()(!1, "unreachable")
  }
})