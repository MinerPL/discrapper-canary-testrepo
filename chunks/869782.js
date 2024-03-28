"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("904245"),
  o = n("541716"),
  u = n("419922"),
  d = n("665906"),
  c = n("271383"),
  f = n("496675"),
  E = n("594174"),
  _ = n("626135"),
  T = n("709054"),
  m = n("838440"),
  I = n("981631"),
  p = n("365004");

function h(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, a = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[a]
}

function N(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: d,
    stickers: c,
    event: f,
    eventProperties: E
  } = e, [T, I] = a.useState(!1), N = a.useMemo(() => h({
    assets: c,
    currentUser: t,
    message: l
  }), [c, t, l]), S = a.useMemo(() => h({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), C = a.useCallback(async () => {
    let {
      valid: e
    } = await (0, m.applyChatRestrictions)({
      type: o.ChatInputTypes.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: s
      } = e;
      r.default.sendGreetMessage(t.id, s.id, r.default.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: !0,
        showMentionToggle: !0
      }))
    }({
      channel: n,
      message: l,
      sticker: N
    }), ! function(e) {
      let {
        sticker: t,
        event: n,
        eventProperties: s
      } = e;
      null != n && _.default.track(n, {
        ...s,
        sticker_id: t.id
      })
    }({
      sticker: N,
      event: f,
      eventProperties: E
    }))
  }, [n, l, N, f, E]);
  return (0, s.jsxs)(i.Button, {
    className: p.CTAMessageButtonOuter,
    innerClassName: p.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => I(!0),
    onMouseLeave: () => I(!1),
    onClick: C,
    children: [(0, s.jsx)(u.default, {
      className: p.CTAMessageSticker,
      isInteracting: T,
      sticker: N,
      size: 28
    }), S]
  })
}

function S(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: a,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = E.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, l.useStateFromStores)([f.default, c.default], () => {
      var e;
      let a = t.guild_id;
      if (null == s || null == a) return !1;
      let l = (0, d.computeIsReadOnlyThread)(t),
        i = f.default.can(I.Permissions.SEND_MESSAGES, t),
        r = null === (e = c.default.getMember(a, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !l && !r && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: u
  });
  return null != u && _ ? (0, s.jsx)("div", {
    className: p.CTAMessage,
    children: (0, s.jsx)(N, {
      currentUser: u,
      channel: t,
      message: n,
      buttonLabels: a,
      stickers: i,
      event: r,
      eventProperties: o
    })
  }) : null
}