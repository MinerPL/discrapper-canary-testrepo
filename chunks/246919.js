var i = n(470079),
  a = n(442837),
  l = n(445384),
  s = n(420438),
  r = n(271383),
  o = n(594174),
  c = n(981631),
  d = n(440493);
t.Z = e => {
  let t = (0, a.e7)([s.Z], () => (null == e ? void 0 : e.hasFeature(c.oNc.HUB)) ? s.Z.hasViewedPrompt(d.r.REAL_NAME_PROMPT, e.id) : null),
n = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
u = (0, a.e7)([r.ZP], () => (null == e ? void 0 : e.id) != null && null != n ? r.ZP.getMember(null == e ? void 0 : e.id, n.id) : null),
h = (null == u ? void 0 : u.nick) != null;
  return i.useEffect(() => {
h && null != e && !1 === t && l.Z.viewPrompt(d.r.REAL_NAME_PROMPT, e.id);
  }, [
h,
e,
t
  ]), !1 === t && !h;
};