"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var i = s("37983");
s("884691");
var n = s("917351"),
  a = s.n(n),
  l = s("446674"),
  r = s("77078"),
  d = s("320954"),
  o = s("679653"),
  u = s("419830"),
  c = s("233069"),
  h = s("42203"),
  N = s("245997"),
  S = s("27618"),
  g = s("697218"),
  f = s("612434"),
  E = s("49111"),
  m = s("782340"),
  T = s("772681");
let _ = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, c.isGuildSelectableChannelType)(t) || t === E.ChannelTypes.GUILD_CATEGORY
};

function x(e) {
  var t;
  let {
    guildId: s,
    onSelected: n
  } = e;
  let {
    channels: c,
    categories: x
  } = (t = s, (0, l.useStateFromStoresObject)([N.default], () => {
    let e = N.default.getCategories(t);
    return {
      channels: (0, d.default)(e._categories, e, _),
      categories: e
    }
  })), I = a(c).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== E.ChannelTypes.GUILD_CATEGORY || null != x[t.id] && x[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, o.computeChannelName)(t, g.default, S.default)
    }
  }).value();
  return (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      children: m.default.Messages.ADD_CHANNEL_TO_OVERRIDE
    }), (0, i.jsx)("div", {
      className: T.input,
      children: (0, i.jsx)(r.SearchableSelect, {
        value: E.EMPTY_STRING_SNOWFLAKE_ID,
        onChange: n,
        options: I,
        renderOptionLabel: e => {
          let t = h.default.getChannel(e.value);
          if (null == t) return e.label;
          let s = h.default.getChannel(t.parent_id),
            n = null != s ? s.name : null;
          return (0, i.jsx)(f.default, {
            icon: (0, u.getChannelIconComponent)(t),
            title: e.label,
            subtitle: n
          })
        },
        placeholder: m.default.Messages.SELECT_CHANNEL_OR_CATEGORY
      })
    })]
  })
}