t.d(n, {
  Bm: function() {
return g;
  },
  P7: function() {
return I;
  },
  ae: function() {
return x;
  }
});
var i = t(470079),
  a = t(392711),
  l = t.n(a),
  o = t(25209),
  r = t(481060),
  s = t(2052),
  c = t(542094),
  u = t(513202),
  d = t(367907),
  m = t(691424),
  p = t(428595),
  _ = t(364458),
  C = t(499254),
  f = t(541099),
  h = t(827498),
  A = t(981631),
  E = t(689938);
let N = {
...p.Z.RULES.commandMention,
parse: (e, n, t) => ({
  content: p.Z.RULES.commandMention.parse(e, n, t).content
})
  },
  v = l().pick((0, _.Z)([
p.Z.RULES,
{
  commandMention: N
},
(0, m.Z)({
  enableBuildOverrides: !1,
  enableEmojiClick: !1
})
  ]), [
'commandMention',
'customEmoji',
'em',
'emoji',
'emoticon',
'highlight',
'inlineCode',
'looseEm',
's',
'strong',
'text',
'timestamp',
'u',
'spoiler'
  ]),
  x = o.w4(v);

function I(e) {
  var n;
  let {
channel: t,
application: i,
location: a,
sectionName: l,
commandName: o
  } = e, m = (0, s.O)(), p = (0, c.Qv)({
applicationId: i.id,
channelId: t.id
  }), _ = (0, c.w1)({
applicationId: i.id,
embeddedActivitiesManager: u.Z,
channelId: t.id,
guildId: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
locationObject: m.location,
onActivityItemSelectedProp: e => {
  let {
    applicationId: n
  } = e, t = f.Z.entrypoint();
  C.y(h.ti.ACTIVITY), (0, d.yw)(A.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
    location: a,
    application_id: n,
    section_name: l,
    action: p,
    source: t
  });
}
  }), N = r.ButtonColors.BRAND, v = null != o ? o : E.Z.Messages.LAUNCH;
  return p === c.JS.JOIN ? (N = r.ButtonColors.GREEN, v = E.Z.Messages.JOIN_ACTIVITY) : p === c.JS.LEAVE && (N = r.ButtonColors.RED, v = E.Z.Messages.LEAVE), {
onActivityItemSelected: _,
activityAction: p,
buttonColor: N,
buttonText: v
  };
}

function g(e, n) {
  let t = f.Z.entrypoint(),
l = i.useMemo(() => (0, a.debounce)((e, n) => {
  (0, d.yw)(A.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
    type: e,
    source: n
  });
}, 400, {
  leading: !1,
  trailing: !0
}), []);
  i.useEffect(() => {
null != e && l(e, t);
  }, [
e,
n,
t,
l
  ]);
}