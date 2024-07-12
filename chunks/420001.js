n(757143);
var r = n(911969),
  i = n(10718),
  a = n(367790),
  o = n(895924),
  s = n(826298),
  l = n(695346),
  u = n(594174),
  c = n(156361),
  d = n(5192),
  _ = n(417574),
  E = n(877565),
  f = n(590921),
  h = n(126226),
  p = n(689938);

function m(e) {
  let t = _.X.exec(e);
  if (null != t) {
let n = t[1],
  r = u.default.getUser(n);
return null == r || !r.bot || r.isClyde() ? null : {
  type: 'mention',
  cleanedQuery: e.substring(t[0].length).trim(),
  user: r
};
  }
  return null;
}
let I = {
  ...h.Z,
  sentinel: void 0,
  focusMode: f.QZ.MANUAL,
  matches(e, t, n, r, i) {
if (i.commands === f.L8.DISABLED || i.commands === f.L8.OLD_BUILT_INS || n.length < 2 || !l.Xk.getSetting())
  return !1;
let a = m(n);
return null != a && a.cleanedQuery.length > 0;
  },
  queryResults(e, t, n, o, u) {
if (!l.Xk.getSetting())
  return h.K;
let c = m(n);
if (null == c)
  return h.K;
let d = (0, s.hV)(e, c.cleanedQuery),
  {
    commands: _,
    sections: E
  } = i.JT(e, {
    commandType: r.yU.CHAT,
    text: d.text
  }, {
    limit: f.AQ,
    placeholderCount: f.YP,
    scoreMethod: a.p.COMMAND_OR_APPLICATION,
    allowFetch: u
  });
if (null == _)
  return h.K;
let p = _;
if (d.hasSpaceTerminator) {
  let e = d.text.trim(),
    t = e + ' ';
  p = p.filter(n => n.name === e || n.name.startsWith(t));
}
return 0 === p.length ? h.K : {
  results: {
    entries: p.slice(0, f.AQ).map(e => ({
      command: e,
      section: null == E ? void 0 : E.find(t => t.id === e.applicationId)
    }))
  }
};
  },
  renderResults(e) {
let {
  results: {
    entries: t
  },
  selectedIndex: n,
  guild: r,
  channel: i,
  query: a,
  options: o,
  onHover: s,
  onClick: l
} = e;
return (0, E.HI)({
  query: a,
  selectedIndex: n,
  autocompletes: t,
  onHover: s,
  onClick: l,
  titleWithQuery: p.Z.Messages.COMMANDS_MATCHING,
  titleWithoutQuery: p.Z.Messages.COMMANDS,
  Component: o.commands === f.L8.OLD_BUILT_INS ? c.ZP.Command : c.ZP.NewCommand,
  getProps: e => {
    let {
      command: t,
      section: n
    } = e;
    return {
      key: t.id,
      command: t,
      channel: i,
      guildId: i.guild_id,
      showImage: !0,
      section: n
    };
  },
  getQuery: e => {
    let t = m(e);
    if ('mention' !== t.type)
      return e;
    let n = d.ZP.getName(null == r ? void 0 : r.id, i.id, t.user);
    return e.replace(_.X, '@'.concat(n));
  },
  key: 'commands'
});
  },
  onSelect(e) {
let {
  results: t,
  index: n,
  type: r,
  options: i,
  channel: a
} = e, s = h.Z.onSelect({
  results: t,
  index: n,
  type: r,
  options: i,
  channel: a,
  location: o.Vh.SUGGESTION
});
return null == s ? null : {
  ...s,
  type: f.z2.COMMAND_SUGGESTION
};
  }
};
t.Z = I;