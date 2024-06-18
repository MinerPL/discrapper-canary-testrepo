"use strict";
n.d(t, {
  K: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var r = n(693789),
  s = n(952265),
  o = n(911969),
  a = n(555573),
  l = n(254711),
  u = n(213459),
  _ = n(10718),
  d = n(367790),
  c = n(998698),
  E = n(895924),
  I = n(581364),
  T = n(826298),
  h = n(496675),
  S = n(156361),
  f = n(226951),
  N = n(877565),
  A = n(590921),
  m = n(665692),
  O = n(689079),
  R = n(689938),
  C = n(442630);
let p = {
  results: {
    entries: []
  }
};

function g() {
  (0, s.ZD)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("87549")]).then(n.bind(n, 913962));
    return t => (0, i.jsx)(e, {
      ...t
    })
  })
}
let L = {
  sentinel: m.GI,
  stores: [c.Z, u.ZP, h.Z],
  matches: (e, t, n, i, r) => r.commands !== A.L8.DISABLED && null == c.Z.getActiveCommand(e.id) && (i || r.commands !== A.L8.OLD_BUILT_INS),
  queryResults(e, t, n, i, r) {
    if (0 === n.length && i.commands !== A.L8.OLD_BUILT_INS) return p;
    if (i.commands === A.L8.OLD_BUILT_INS) {
      let i = (0, l.Kh)(o.yU.CHAT, !1, !1),
        r = RegExp("^".concat(f.Z.escape(n)), "i"),
        s = (0, I.Dd)(i, r, {
          channel: e,
          guild: t
        }, A.AQ),
        a = l.Tm[O.bi.BUILT_IN];
      return 0 === s.length ? p : {
        results: {
          entries: s.map(e => ({
            command: e,
            section: a
          }))
        }
      }
    }
    let s = (0, T.hV)(e, n),
      {
        commands: a,
        sections: u
      } = _.JT(e, {
        commandType: o.yU.CHAT,
        text: s.text
      }, {
        limit: A.AQ,
        placeholderCount: A.YP,
        scoreMethod: d.p.COMMAND_OR_APPLICATION,
        allowFetch: r
      });
    if (null == a) return p;
    let c = a;
    if (s.hasSpaceTerminator) {
      let e = s.text.trim(),
        t = e + " ";
      c = c.filter(n => n.name === e || n.name.startsWith(t))
    }
    return 0 === c.length ? p : {
      results: {
        entries: c.slice(0, A.AQ).map(e => ({
          command: e,
          section: null == u ? void 0 : u.find(t => t.id === e.applicationId)
        }))
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        entries: t
      },
      selectedIndex: n,
      channel: s,
      query: o,
      options: a,
      onHover: l,
      onClick: u
    } = e, _ = (0, T.hV)(s, o), d = a.commands === A.L8.OLD_BUILT_INS;
    return (0, N.HI)({
      query: _.text,
      selectedIndex: n,
      autocompletes: t,
      onHover: l,
      onClick: u,
      titleWithQuery: R.Z.Messages.COMMANDS_MATCHING,
      titleWithoutQuery: R.Z.Messages.COMMANDS,
      getQuery: e => "".concat(m.GI).concat(e),
      Component: d ? S.ZP.Command : S.ZP.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: s,
          guildId: s.guild_id,
          showImage: !0,
          section: n
        }
      },
      key: "commands",
      headerClassName: d ? C.legacyInputCommandHeader : null,
      headerTrailingContent: d ? (0, i.jsx)(r.zx, {
        type: "button",
        look: r.zx.Looks.LINK,
        color: r.zx.Colors.BRAND,
        size: r.zx.Sizes.MIN,
        onClick: g,
        children: R.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
      }) : null
    })
  },
  onSelect(e) {
    let {
      results: {
        entries: t
      },
      index: n,
      queryText: i,
      options: r,
      channel: s,
      location: o,
      tabOrEnter: l
    } = e, {
      command: u,
      section: _
    } = t[n];
    if (u.inputType === E.iw.PLACEHOLDER) return null;
    if (r.commands === A.L8.OLD_BUILT_INS) r.insertText(function(e) {
      return "".concat(m.GI).concat(e.name)
    }(u));
    else {
      let e = o;
      null == e && (e = l ? E.Vh.QUERY : E.Vh.DISCOVERY), a.Po({
        channelId: s.id,
        command: u,
        section: null != _ ? _ : null,
        location: e,
        queryLength: null == i ? void 0 : i.length
      })
    }
    return {
      type: A.z2.COMMAND
    }
  }
};
t.Z = L