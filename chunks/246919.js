"use strict";
n.r(t);
var a = n("470079"),
  l = n("442837"),
  s = n("445384"),
  i = n("420438"),
  r = n("271383"),
  o = n("594174"),
  u = n("981631"),
  d = n("440493");
t.default = e => {
  let t = (0, l.useStateFromStores)([i.default], () => (null == e ? void 0 : e.hasFeature(u.GuildFeatures.HUB)) ? i.default.hasViewedPrompt(d.GuildPrompts.REAL_NAME_PROMPT, e.id) : null),
    n = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    c = (0, l.useStateFromStores)([r.default], () => (null == e ? void 0 : e.id) != null && null != n ? r.default.getMember(null == e ? void 0 : e.id, n.id) : null),
    f = (null == c ? void 0 : c.nick) != null;
  return a.useEffect(() => {
    f && null != e && !1 === t && s.default.viewPrompt(d.GuildPrompts.REAL_NAME_PROMPT, e.id)
  }, [f, e, t]), !1 === t && !f
}