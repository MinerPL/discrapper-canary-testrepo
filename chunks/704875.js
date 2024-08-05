n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(845537),
  o = n(653309),
  l = n(434175),
  u = n(551360),
  c = n(153521);

function d(e, t, n) {
  var i, u;
  let {
attributes: d,
children: E,
element: f,
decorations: h
  } = e, p = function(e) {
return Object.entries(e).filter(e => {
  let [t] = e;
  return 'anchor' !== t && 'focus' !== t;
}).map(e => {
  let [t, n] = e;
  return !0 === n && t in o.U ? o.U[t] : null;
}).filter(e => null != e).join(' ');
  }(null !== (i = null == h ? void 0 : h[0]) && void 0 !== i ? i : {});
  switch (f.type) {
case 'line':
  if (null === (u = f.codeBlockState) || void 0 === u ? void 0 : u.isInCodeBlock)
    return (0, r.jsx)('div', {
      className: l.codeLine,
      spellCheck: null == f.codeBlockState || null == f.codeBlockState.lang,
      ...d,
      children: E
    });
  return (0, r.jsx)('div', {
    ...d,
    children: E
  });
case 'blockQuote': {
  let e = a()(c.blockquoteContainer, c.slateBlockquoteContainer);
  return (0, r.jsxs)('div', {
    ...d,
    className: e,
    children: [
      (0, r.jsx)('span', {
        contentEditable: !1,
        className: c.blockquoteDivider
      }),
      (0, r.jsx)('blockquote', {
        children: E
      })
    ]
  });
}
case 'emoji':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.dy, {
        emoji: f.emoji
      }),
      E
    ]
  });
case 'customEmoji':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.wP, {
        emoji: f.emoji
      }),
      E
    ]
  });
case 'textMention':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.Ox, {
        text: f.name,
        channelId: n,
        guildId: t
      }),
      E
    ]
  });
case 'userMention':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.cB, {
        id: f.userId,
        channelId: n,
        guildId: t
      }),
      E
    ]
  });
case 'roleMention':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.Vq, {
        id: f.roleId,
        guildId: t
      }),
      E
    ]
  });
case 'channelMention':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.Io, {
        id: f.channelId
      }),
      E
    ]
  });
case 'staticRouteLink':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.NY, {
        id: f.channelId
      }),
      E
    ]
  });
case 'soundboard':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.mb, {
        id: f.soundId
      }),
      E
    ]
  });
case 'commandMention':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.Wf, {
        text: f.commandName,
        id: f.commandId
      }),
      E
    ]
  });
case 'timestamp':
  return (0, r.jsxs)(_, {
    attributes: d,
    className: p,
    children: [
      (0, r.jsx)(s.EK, {
        timestamp: f.parsed
      }),
      E
    ]
  });
default:
  return null;
  }
}
let _ = e => {
  let {
className: t,
attributes: n,
children: i
  } = e, s = a()(u.inlineElement, u.inlineVoid, t);
  return (0, r.jsx)('span', {
...n,
className: s,
contentEditable: !1,
children: i
  });
};