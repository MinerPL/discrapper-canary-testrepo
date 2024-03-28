"use strict";
n.r(t), n.d(t, {
  EmptyMessageBody: function() {
    return p
  },
  EmptyMessageHeader: function() {
    return m
  },
  EmptyMessageIcon: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("176743"),
  r = n("352903"),
  o = n("646827"),
  u = n("481060"),
  d = n("534091"),
  c = n("981631"),
  f = n("111030");

function h(e) {
  let {
    locked: t = !1,
    channelType: n
  } = e, l = (0, u.useRedesignIconContext)().enabled, d = n === c.ChannelTypes.GUILD_VOICE || n === c.ChannelTypes.GUILD_STAGE_VOICE;
  if (!l) return (0, a.jsx)("div", {
    className: s()(f.emptyChannelIcon, f.emptyChannelIconSvg, {
      [f.locked]: t,
      [f.voiceChat]: d
    })
  });
  {
    let e = d ? i.ChatIcon : t ? o.TextLockIcon : r.TextIcon;
    return (0, a.jsx)("div", {
      className: s()(f.emptyChannelIcon, f.emptyChannelIconComponent),
      children: (0, a.jsx)(e, {
        color: u.tokens.colors.WHITE,
        width: 42,
        height: 42
      })
    })
  }
}

function m(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, a.jsx)(u.Heading, {
    "aria-hidden": "true",
    className: s()(n, f.header),
    variant: "heading-xxl/extrabold",
    children: t
  })
}

function p(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "none",
    className: f.description,
    children: t
  })
}
t.default = function(e) {
  let {
    className: t,
    channelId: n,
    children: l,
    ...i
  } = e;
  return (0, a.jsx)("div", {
    className: s()(t, f.container),
    id: (0, d.getMessageDOMId)(n, n),
    ...i,
    children: l
  })
}