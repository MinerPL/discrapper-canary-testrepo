"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("789020"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("904245"),
  r = n("257559"),
  o = n("541716"),
  u = n("893718"),
  d = n("314897"),
  c = n("323873"),
  f = n("430824"),
  h = n("496675"),
  m = n("113039"),
  p = n("703316"),
  E = n("585483"),
  C = n("630388"),
  g = n("838440"),
  S = n("981631"),
  _ = n("264558");

function T(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.applyChatRestrictions)({
    type: o.ChatInputTypes.EDIT,
    content: t,
    channel: n,
    restrictMentions: !1,
    respectCooldown: !1
  })
}

function I(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: o
  } = t, {
    id: u
  } = n, m = t.getGuildId(), E = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(m), [m]), g = t.type === S.ChannelTypes.GUILD_ANNOUNCEMENT, I = null != E && E.hasFeature(S.GuildFeatures.NEWS), v = g && I, {
    editingMessage: N,
    editingTextValue: x,
    editingRichValue: M
  } = (0, s.useStateFromStoresObject)([c.default], () => ({
    editingMessage: c.default.getEditingMessage(o),
    editingTextValue: c.default.getEditingTextValue(o),
    editingRichValue: c.default.getEditingRichValue(o)
  }), [o]), R = (0, s.useStateFromStores)([d.default], () => d.default.getId()), L = l.useCallback((e, n, a) => {
    let {
      content: l
    } = a, s = h.default.can(S.Permissions.MANAGE_MESSAGES, t), o = null != N && null != N.author ? N.author.id : null;
    return v && (o === R || s) && null != N && (0, C.hasFlag)(N.flags, S.MessageFlags.CROSSPOSTED) ? r.default.confirmEdit(e, n, l) : i.default.editMessage(e, n, {
      content: l
    }), Promise.resolve()
  }, [N, v, R, t]), y = l.useCallback(e => (0, l.createElement)(A, {
    ...e,
    className: _.channelTextArea,
    key: u
  }), [u]);
  return null != x && null != M ? (0, a.jsx)(p.default, {
    ref: void 0,
    channel: t,
    message: n,
    textValue: x,
    richValue: M,
    onCancel: i.default.endEditMessage,
    onChange: i.default.updateEditMessage,
    onConfirmDelete: r.default.confirmDelete,
    saveMessage: L,
    validateEdit: T,
    children: y
  }) : null
}

function A(e) {
  let {
    textValue: t,
    richValue: n,
    message: s,
    channel: i,
    onChange: r,
    onSubmit: d,
    onKeyDown: c
  } = e, [f, h] = l.useState(!0), m = l.useCallback(() => h(!0), []), p = l.useCallback(() => h(!1), []);
  return l.useEffect(() => (E.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_FOCUS, m), E.ComponentDispatch.subscribe(S.ComponentActions.TEXTAREA_BLUR, p), () => {
    E.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_FOCUS, m), E.ComponentDispatch.unsubscribe(S.ComponentActions.TEXTAREA_BLUR, p)
  }), [m, p]), (0, a.jsx)(u.default, {
    className: _.channelTextArea,
    textValue: t,
    richValue: n,
    channel: i,
    type: o.ChatInputTypes.EDIT,
    onChange: r,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return d(t)
    },
    onKeyDown: c,
    focused: f,
    onFocus: m,
    onBlur: p
  }, s.id)
}

function v(e, t, n) {
  let {
    message: l,
    channel: s
  } = e;
  return n ? (0, a.jsx)(I, {
    channel: s,
    message: l
  }) : (0, a.jsx)(m.default, {
    message: l,
    content: t
  })
}