n.d(t, {
	C: function () {
		return E;
	},
	u: function () {
		return h;
	}
}),
	n(47120);
var r = n(149765),
	i = n(668781),
	a = n(434404),
	s = n(430824),
	o = n(745752),
	l = n(45966),
	u = n(637853),
	c = n(290511),
	d = n(981631),
	_ = n(689938);
async function E(e, t) {
	return (
		null == e ||
		(await f(e, t, {
			removingView: !0,
			removingChat: !0
		}))
	);
}
async function f(e, t, n) {
	var r;
	let i = s.Z.getGuild(e);
	if (null == i) return !0;
	let a = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(d.oNc.GUILD_ONBOARDING));
	if (!a) return !0;
	a && l.Z.shouldFetchPrompts(e) && (await (0, o.eM)(e));
	let _ = l.Z.getDefaultChannelIds(e),
		[E, f] = (0, u.d9)(e, _);
	if (!_.includes(t)) return !0;
	let h = n.removingView && f.length - 1 < c.md,
		p = (n.removingChat || n.removingView) && E.length - 1 < c.X;
	return !h && !p;
}
async function h(e, t, n) {
	let s = e.getGuildId();
	if (null == s) return !0;
	null != n && (t = r.hX(t, r.U_(n)));
	let o = e.permissionOverwrites[s],
		l = null != o ? r.hX(o.deny, r.U_(o.allow)) : r.vB(0),
		u = {
			removingView: r.e$(t, d.Plq.VIEW_CHANNEL) && !r.e$(l, d.Plq.VIEW_CHANNEL),
			removingChat: !1
		};
	return (
		e.isForumLikeChannel() ? (u.removingChat = r.e$(t, d.Plq.SEND_MESSAGES_IN_THREADS) && !r.e$(l, d.Plq.SEND_MESSAGES_IN_THREADS)) : (u.removingChat = r.e$(t, d.Plq.SEND_MESSAGES) && !r.e$(l, d.Plq.SEND_MESSAGES)),
		(!u.removingChat && !u.removingView) ||
			!!(await f(s, e.id, u)) ||
			(i.Z.show({
				title: _.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
				body: _.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
					onClick: () => {
						i.Z.close(), a.Z.open(s, d.pNK.ONBOARDING);
					}
				})
			}),
			!1)
	);
}
