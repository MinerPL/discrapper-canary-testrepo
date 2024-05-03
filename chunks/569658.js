"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var i = s("735250");
s("470079");
var a = s("392711"),
  n = s.n(a),
  l = s("442837"),
  r = s("481060"),
  o = s("740504"),
  d = s("933557"),
  u = s("471445"),
  c = s("131704"),
  h = s("592125"),
  S = s("324067"),
  N = s("699516"),
  g = s("594174"),
  f = s("353872"),
  m = s("981631"),
  E = s("689938"),
  T = s("636907");
let _ = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, c.isGuildSelectableChannelType)(t) || t === m.ChannelTypes.GUILD_CATEGORY
};

function I(e) {
  var t;
  let {
    guildId: s,
    onSelected: a
  } = e;
  let {
    channels: c,
    categories: I
  } = (t = s, (0, l.useStateFromStoresObject)([S.default], () => {
    let e = S.default.getCategories(t);
    return {
      channels: (0, o.default)(e._categories, e, _),
      categories: e
    }
  })), x = n()(c).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== m.ChannelTypes.GUILD_CATEGORY || null != I[t.id] && I[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, d.computeChannelName)(t, g.default, N.default)
    }
  }).value();
  return (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      children: E.default.Messages.ADD_CHANNEL_TO_OVERRIDE
    }), (0, i.jsx)("div", {
      className: T.input,
      children: (0, i.jsx)(r.SearchableSelect, {
        value: m.EMPTY_STRING_SNOWFLAKE_ID,
        onChange: a,
        options: x,
        renderOptionLabel: e => {
          let t = h.default.getChannel(e.value);
          if (null == t) return e.label;
          let s = h.default.getChannel(t.parent_id),
            a = null != s ? s.name : null;
          return (0, i.jsx)(f.default, {
            icon: (0, u.getChannelIconComponent)(t),
            title: e.label,
            subtitle: a
          })
        },
        placeholder: E.default.Messages.SELECT_CHANNEL_OR_CATEGORY
      })
    })]
  })
}