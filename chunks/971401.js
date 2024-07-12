a.d(s, {
  Z: function() {
return t;
  }
}), a(653041);
var E = a(470079),
  _ = a(626135),
  n = a(58346),
  r = a(981631);

function t(e) {
  let s = E.useRef([]);
  E.useEffect(() => {
if (null != e && e.state !== n.Rj.RESOLVING)
  !s.current.includes(e.code) && (s.current.push(e.code), _.default.track(r.rMx.CREATE_GUILD_VIEWED, {
    guild_template_code: e.code,
    guild_template_name: e.name,
    guild_template_description: e.description,
    guild_template_guild_id: e.sourceGuildId
  }));
  });
}