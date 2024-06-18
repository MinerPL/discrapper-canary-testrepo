"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(845537),
  a = n(653309),
  l = n(453875),
  u = n(697692),
  _ = n(946278);

function d(e, t, n) {
  var r, u;
  let {
    attributes: d,
    children: E,
    element: I,
    decorations: T
  } = e, h = function(e) {
    return Object.entries(e).filter(e => {
      let [t] = e;
      return "anchor" !== t && "focus" !== t
    }).map(e => {
      let [t, n] = e;
      return !0 === n && t in a.U ? a.U[t] : null
    }).filter(e => null != e).join(" ")
  }(null !== (r = null == T ? void 0 : T[0]) && void 0 !== r ? r : {});
  switch (I.type) {
    case "line":
      if (null === (u = I.codeBlockState) || void 0 === u ? void 0 : u.isInCodeBlock) return (0, i.jsx)("div", {
        className: l.codeLine,
        spellCheck: null == I.codeBlockState || null == I.codeBlockState.lang,
        ...d,
        children: E
      });
      return (0, i.jsx)("div", {
        ...d,
        children: E
      });
    case "blockQuote": {
      let e = s()(_.blockquoteContainer, _.slateBlockquoteContainer);
      return (0, i.jsxs)("div", {
        ...d,
        className: e,
        children: [(0, i.jsx)("span", {
          contentEditable: !1,
          className: _.blockquoteDivider
        }), (0, i.jsx)("blockquote", {
          children: E
        })]
      })
    }
    case "emoji":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.dy, {
          emoji: I.emoji
        }), E]
      });
    case "customEmoji":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.wP, {
          emoji: I.emoji
        }), E]
      });
    case "textMention":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.Ox, {
          text: I.name,
          channelId: n,
          guildId: t
        }), E]
      });
    case "userMention":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.cB, {
          id: I.userId,
          channelId: n,
          guildId: t
        }), E]
      });
    case "roleMention":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.Vq, {
          id: I.roleId,
          guildId: t
        }), E]
      });
    case "channelMention":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.Io, {
          id: I.channelId
        }), E]
      });
    case "staticRouteLink":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.NY, {
          id: I.channelId
        }), E]
      });
    case "soundboard":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.mb, {
          id: I.soundId
        }), E]
      });
    case "commandMention":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.Wf, {
          text: I.commandName,
          id: I.commandId
        }), E]
      });
    case "timestamp":
      return (0, i.jsxs)(c, {
        attributes: d,
        className: h,
        children: [(0, i.jsx)(o.EK, {
          timestamp: I.parsed
        }), E]
      });
    default:
      return null
  }
}
let c = e => {
  let {
    className: t,
    attributes: n,
    children: r
  } = e, o = s()(u.inlineElement, u.inlineVoid, t);
  return (0, i.jsx)("span", {
    ...n,
    className: o,
    contentEditable: !1,
    children: r
  })
}