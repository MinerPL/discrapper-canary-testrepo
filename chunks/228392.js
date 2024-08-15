n.d(t, {
	B: function () {
		return y;
	},
	B5: function () {
		return O;
	},
	Do: function () {
		return C;
	},
	GX: function () {
		return M;
	},
	HR: function () {
		return k;
	},
	Hr: function () {
		return v;
	},
	Je: function () {
		return A;
	},
	Js: function () {
		return h;
	},
	KR: function () {
		return R;
	},
	MO: function () {
		return U;
	},
	N3: function () {
		return P;
	},
	Oq: function () {
		return S;
	},
	P_: function () {
		return m;
	},
	Vn: function () {
		return g;
	},
	ab: function () {
		return N;
	},
	e5: function () {
		return D;
	},
	e7: function () {
		return I;
	},
	lN: function () {
		return x;
	},
	nE: function () {
		return w;
	},
	nH: function () {
		return T;
	},
	qs: function () {
		return f;
	},
	qz: function () {
		return G;
	},
	ws: function () {
		return L;
	},
	xI: function () {
		return b;
	},
	zI: function () {
		return p;
	}
});
var r = n(367907),
	i = n(731429),
	a = n(188471),
	s = n(592125),
	o = n(703558),
	l = n(626135),
	u = n(358085),
	c = n(660189),
	d = n(208970),
	_ = n(6496),
	E = n(981631);
function f(e) {
	let { guildId: t, channelId: n, sessionId: i, postIds: a, additionalTimes: s } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEEN_BATCH, {
		...(0, _.xl)({
			channelId: n,
			sessionId: i
		}),
		guild_id: t,
		channel_id: n,
		post_ids: a,
		additional_seen_time_millis: s
	});
}
function h(e) {
	let { guildId: t, channelId: n, numSearchResults: i } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEARCHED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n,
		num_search_results: i
	});
}
function p(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SEARCH_CLEARED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n
	});
}
function I(e) {
	let { guildId: t, channelId: n, tagId: i, filterTagIds: a, added: s, location: o } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n,
		tag_id: i,
		filter_tag_ids: a,
		added: s,
		location: o
	});
}
function m(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n
	});
}
function T(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n
	});
}
function g(e) {
	var t, n, i, a;
	let { guildId: l, channelId: u } = e,
		c = s.Z.getChannel(u);
	if (null == c) return;
	let d = o.Z.getThreadSettings(u),
		f = null === (t = c.template) || void 0 === t ? void 0 : t.trim(),
		h = o.Z.getDraft(u, o.d.FirstThreadMessage),
		p = null == h || 0 === h.length || (null == h ? void 0 : h.trim()) === f,
		I =
			(null == d ? void 0 : d.appliedTags) == null ||
			(null == d ? void 0 : null === (n = d.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
		m =
			(null == d ? void 0 : d.name) == null ||
			(null == d
				? void 0
				: null === (a = d.name) || void 0 === a
					? void 0
					: null === (i = a.trim()) || void 0 === i
						? void 0
						: i.length) === 0;
	if (!p || !I || !m)
		r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
			...(0, _.xl)({ channelId: u }),
			guild_id: l,
			channel_id: u,
			applied_tag_ids: (0, _.q8)(u),
			num_attachments: (0, _.RR)(u)
		});
}
function S(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n
	});
}
function A(e) {
	let { guildId: t, channelId: n, postId: i } = e;
	function a() {
		r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POST_CREATED, {
			...(0, _.n4)({ channelId: i }),
			guild_id: t,
			channel_id: n
		});
	}
	c.Z.isLoading(i) ? c.Z.addConditionalChangeListener(() => !!c.Z.isLoading(i) || (a(), !1)) : a();
}
function N(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_SCROLLED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n
	});
}
function v(e) {
	let { guildId: t, channelId: n, numArchivedThreads: i, hasMoreThreads: a, filterTagIds: o, sortOrder: u } = e;
	l.default.track(E.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED, {
		...(0, r.hH)(t),
		...(0, r.v_)(s.Z.getChannel(n)),
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n,
		num_archived_threads: i,
		num_active_threads: (0, _.bE)(t, n),
		has_more_threads: a,
		filter_tag_ids: o,
		sort_order: u
	});
}
function O(e) {
	let { guildId: t, channelId: n, postId: i, location: a } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POST_CLICKED, {
		...(0, _.n4)({ channelId: i }),
		guild_id: t,
		channel_id: n,
		is_search_result: null != d.Z.getSearchResults(n),
		location: a
	});
}
function R(e) {
	let { guildId: t, channelId: n, sortOrder: i } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_POSTS_SORTED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n,
		sort_type: (0, _.t$)(i),
		sort_order: i,
		forum_channel_sort_order: i
	});
}
function C(e) {
	let { guildId: t, channelId: n, forumLayout: i } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_LAYOUT_UPDATED, {
		...(0, _.xl)({ channelId: n }),
		guild_id: t,
		channel_id: n,
		forum_channel_layout: i
	});
}
function y(e) {
	let { postId: t, location: n } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_POST_LINK_COPIED, {
		forum_post_id: t,
		location: n
	});
}
function D(e) {
	let { onboardingCTA: t } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function L(e) {
	let { forumDemoId: t } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function b(e) {
	let { added: t } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function M(e) {
	let { readGuideCta: t } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function P(e) {
	let { isMobile: t } = e;
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function U() {
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function w() {
	r.ZP.trackWithMetadata(E.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function x(e) {
	r.ZP.trackWithMetadata(E.rMx.CHANNEL_OPENED, {
		...(0, r.hH)(e.guild_id),
		...(0, r.v_)(e),
		...(0, i.K)(e, !0),
		...(0, r.$H)(e.id),
		channel_view: 'Split View',
		platform: (0, u.getPlatform)()
	}),
		(0, a.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function G() {
	r.ZP.trackWithMetadata(E.rMx.OPEN_MODAL, {
		type: 'Forum Channel Upsell Modal',
		location: { section: E.jXE.CHANNEL_WELCOME_CTA }
	});
}
function k(e) {
	let { guildId: t, channelId: n } = e;
	r.ZP.trackWithMetadata(E.rMx.THREAD_CREATION_STARTED, {
		...(0, i.K)(s.Z.getChannel(n)),
		channel_id: n,
		guild_id: t
	});
}
