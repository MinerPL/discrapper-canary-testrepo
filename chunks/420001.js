"use strict";
n(757143);
var i = n(911969),
  r = n(10718),
  s = n(367790),
  o = n(895924),
  a = n(826298),
  l = n(695346),
  u = n(594174),
  _ = n(156361),
  d = n(5192),
  c = n(417574),
  E = n(877565),
  I = n(590921),
  T = n(126226),
  h = n(689938);

function S(e) {
  let t = c.X.exec(e);
  if (null != t) {
    let n = t[1],
      i = u.default.getUser(n);
    return null == i || !i.bot || i.isClyde() ? null : {
      type: "mention",
      cleanedQuery: e.substring(t[0].length).trim(),
      user: i
    }
  }
  return null
}
let f = {
  ...T.Z,
  sentinel: void 0,
  focusMode: I.QZ.MANUAL,
  matches(e, t, n, i, r) {
    if (r.commands === I.L8.DISABLED || r.commands === I.L8.OLD_BUILT_INS || n.length < 2 || !l.Xk.getSetting()) return !1;
    let s = S(n);
    return null != s && s.cleanedQuery.length > 0
  },
  queryResults(e, t, n, o, u) {
    if (!l.Xk.getSetting()) return T.K;
    let _ = S(n);
    if (null == _) return T.K;
    let d = (0, a.hV)(e, _.cleanedQuery),
      {
        commands: c,
        sections: E
      } = r.JT(e, {
        commandType: i.yU.CHAT,
        text: d.text
      }, {
        limit: I.AQ,
        placeholderCount: I.YP,
        scoreMethod: s.p.COMMAND_OR_APPLICATION,
        allowFetch: u
      });
    if (null == c) return T.K;
    let h = c;
    if (d.hasSpaceTerminator) {
      let e = d.text.trim(),
        t = e + " ";
      h = h.filter(n => n.name === e || n.name.startsWith(t))
    }
    return 0 === h.length ? T.K : {
      results: {
        entries: h.slice(0, I.AQ).map(e => ({
          command: e,
          section: null == E ? void 0 : E.find(t => t.id === e.applicationId)
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
      guild: i,
      channel: r,
      query: s,
      options: o,
      onHover: a,
      onClick: l
    } = e;
    return (0, E.HI)({
      query: s,
      selectedIndex: n,
      autocompletes: t,
      onHover: a,
      onClick: l,
      titleWithQuery: h.Z.Messages.COMMANDS_MATCHING,
      titleWithoutQuery: h.Z.Messages.COMMANDS,
      Component: o.commands === I.L8.OLD_BUILT_INS ? _.ZP.Command : _.ZP.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: r,
          guildId: r.guild_id,
          showImage: !0,
          section: n
        }
      },
      getQuery: e => {
        let t = S(e);
        if ("mention" !== t.type) return e;
        let n = d.ZP.getName(null == i ? void 0 : i.id, r.id, t.user);
        return e.replace(c.X, "@".concat(n))
      },
      key: "commands"
    })
  },
  onSelect(e) {
    let {
      results: t,
      index: n,
      type: i,
      options: r,
      channel: s
    } = e, a = T.Z.onSelect({
      results: t,
      index: n,
      type: i,
      options: r,
      channel: s,
      location: o.Vh.SUGGESTION
    });
    return null == a ? null : {
      ...a,
      type: I.z2.COMMAND_SUGGESTION
    }
  }
};
t.Z = f