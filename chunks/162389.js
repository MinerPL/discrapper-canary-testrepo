"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var l = s("735250"),
  a = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("442837"),
  o = s("692547"),
  d = s("481060"),
  u = s("787014"),
  c = s("603211"),
  h = s("710344"),
  m = s("496675"),
  E = s("729285"),
  f = s("479099"),
  g = s("710352"),
  S = s("981631"),
  T = s("689938"),
  N = s("106576");

function _(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.can(S.Permissions.MANAGE_CHANNELS, t), [t]), c = t.availableTags.length >= g.MAX_FORUM_TAGS, f = t.availableTags.length > 0, _ = a.useCallback(() => {
    let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
    n && !e && (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("21971")]).then(s.bind(s, "201049"));
      return s => (0, l.jsx)(e, {
        ...s,
        channelId: t.id,
        guildId: t.guild_id
      })
    })
  }, [t, n]), C = a.useCallback(e => {
    n && (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([s.e("99387"), s.e("21971")]).then(s.bind(s, "201049"));
      return s => (0, l.jsx)(a, {
        ...s,
        channelId: t.id,
        guildId: t.guild_id,
        tag: e
      })
    })
  }, [n, t]), {
    handleDragStart: x,
    handleDragReset: M,
    handleDragComplete: I
  } = (0, h.default)(t.availableTags, e => {
    (0, u.updateChannel)({
      availableTags: e
    })
  });
  return (0, l.jsxs)("div", {
    className: N.tags,
    children: [f ? t.availableTags.map(e => (0, l.jsx)(p, {
      tag: e,
      availableTags: t.availableTags,
      canManageChannels: n,
      onTagClick: C,
      onDragComplete: I,
      onDragReset: M,
      onDragStart: x
    }, e.id)) : null, f ? (0, l.jsx)(d.Clickable, {
      onClick: _,
      className: i()(N.addTags, {
        [N.disabled]: !n || c
      }),
      children: (0, l.jsx)(E.default, {
        "aria-label": T.default.Messages.FORUM_TAG_CREATE,
        color: o.default.unsafe_rawColors.WHITE_500.css,
        width: 20,
        height: 20
      })
    }) : (0, l.jsx)(d.Button, {
      disabled: !n,
      onClick: _,
      children: T.default.Messages.FORUM_TAG_CREATE
    })]
  })
}

function p(e) {
  let {
    tag: t,
    availableTags: s,
    canManageChannels: a,
    onTagClick: n,
    onDragComplete: r,
    onDragStart: o,
    onDragReset: d
  } = e, u = s.findIndex(e => e.id === t.id), {
    drag: h,
    dragSourcePosition: m,
    drop: E,
    setIsDraggable: g
  } = (0, c.default)({
    type: "CHANNEL_SETTINGS_FORUM_TAGS",
    index: u,
    optionId: t.id,
    onDragStart: o,
    onDragComplete: r,
    onDragReset: d
  });
  return (0, l.jsx)("div", {
    className: i()(N.container, {
      [N.dropIndicatorBefore]: null != m && u < m,
      [N.dropIndicatorAfter]: null != m && u > m
    }),
    ref: e => h(E(e)),
    onMouseEnter: () => g(a),
    onMouseLeave: () => g(!1),
    children: (0, l.jsx)(f.default, {
      tag: t,
      disabled: !a,
      ariaLabel: T.default.Messages.FORUM_TAG_EDIT_LABEL.format({
        name: t.name
      }),
      onClick: a ? () => n(t) : void 0
    })
  })
}