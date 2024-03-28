"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("904245"),
  d = n("268350"),
  c = n("926491"),
  f = n("419922"),
  h = n("314897"),
  m = n("375954"),
  p = n("594174"),
  E = n("626135"),
  C = n("51144"),
  g = n("901461"),
  S = n("981631"),
  _ = n("689938"),
  T = n("830938");
let I = "749054660769218631";

function A(e) {
  var t;
  let {
    channel: n
  } = e, [s, A] = l.useState("");
  l.useEffect(() => {
    (0, d.fetchStickerPack)("847199849233514549", !0)
  }, []);
  let v = (0, r.useStateFromStores)([m.default, h.default], () => !!i()(m.default.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === S.MessageStates.SENT && !(0, g.default)(e))),
    N = (0, r.useStateFromStores)([p.default], () => p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    x = null !== (t = C.default.useName(N)) && void 0 !== t ? t : _.default.Messages.WAVE_DEFAULT_RECIPIENT,
    M = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(I)),
    R = l.useCallback(async () => {
      if (null == s || "" === s) try {
        await u.default.sendGreetMessage(n.id, I), E.default.track(S.AnalyticEvents.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        !e.ok && 429 === e.status && A(_.default.Messages.RATE_LIMITED)
      }
    }, [n.id, n.type, s]),
    L = _.default.Messages.WAVE_TO.format({
      username: x
    }),
    y = null != s && "" !== s ? (0, a.jsx)(o.Text, {
      className: T.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: s
    }) : null;
  return v ? (0, a.jsxs)("div", {
    className: T.containerCompact,
    children: [(0, a.jsxs)(o.Clickable, {
      className: null != s && "" !== s ? T.compactButtonDisabled : T.compactButton,
      "aria-label": _.default.Messages.SEND_WAVE,
      onClick: R,
      children: [(0, a.jsx)(f.default, {
        sticker: M,
        size: 24
      }), (0, a.jsx)(o.Text, {
        className: T.text,
        variant: "text-md/medium",
        children: L
      })]
    }), y]
  }) : (0, a.jsxs)("div", {
    className: T.containerExpanded,
    children: [(0, a.jsx)(f.default, {
      sticker: M,
      size: 160
    }), (0, a.jsx)(o.Button, {
      className: T.button,
      onClick: R,
      disabled: !!s,
      children: L
    }), y]
  })
}