"use strict";
t.d(s, {
  Z: function() {
    return d
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(273504),
  r = t(689938),
  o = t(789398);

function c(e) {
  let {
    preset: s,
    toggled: t,
    onToggle: i
  } = e, {
    headerText: c,
    subtitleText: d
  } = function(e) {
    let s = null,
      t = null;
    switch (e) {
      case a.Ux.PROFANITY:
        s = r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_HEADER, t = (0, n.jsx)(n.Fragment, {
          children: r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_SUBTITLE
        });
        break;
      case a.Ux.SEXUAL_CONTENT:
        s = r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_HEADER, t = (0, n.jsx)(n.Fragment, {
          children: r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_SUBTITLE
        });
        break;
      case a.Ux.SLURS:
        s = r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_HEADER, t = (0, n.jsx)(n.Fragment, {
          children: r.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_SUBTITLE
        });
        break;
      default:
        s = "Error", t = "Unrecognized list"
    }
    return {
      headerText: s,
      subtitleText: t
    }
  }(s);
  return (0, n.jsxs)("div", {
    className: o.keywordListContainer,
    children: [(0, n.jsxs)("div", {
      className: o.keywordListTextContainer,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: c
      }), (0, n.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: d
      })]
    }), (0, n.jsx)(l.Checkbox, {
      className: o.toggle,
      type: l.Checkbox.Types.INVERTED,
      value: t,
      onChange: () => i(s)
    })]
  })
}

function d(e) {
  var s;
  let {
    rule: t,
    onChangeRule: l
  } = e, [r, o] = i.useState(new Set(null == t ? void 0 : null === (s = t.triggerMetadata) || void 0 === s ? void 0 : s.presets)), d = i.useMemo(() => e => {
    l({
      ...t,
      triggerMetadata: {
        ...t.triggerMetadata,
        presets: e
      }
    })
  }, [l, t]), u = e => {
    let s = new Set(r);
    s.has(e) ? s.delete(e) : s.add(e), o(s), d(Array.from(s))
  };
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(c, {
      preset: a.Ux.PROFANITY,
      toggled: r.has(a.Ux.PROFANITY),
      onToggle: u
    }), (0, n.jsx)(c, {
      preset: a.Ux.SLURS,
      toggled: r.has(a.Ux.SLURS),
      onToggle: u
    }), (0, n.jsx)(c, {
      preset: a.Ux.SEXUAL_CONTENT,
      toggled: r.has(a.Ux.SEXUAL_CONTENT),
      onToggle: u
    })]
  })
}