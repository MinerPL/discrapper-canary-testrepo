n.d(t, {
	Nx: function () {
		return c;
	},
	lW: function () {
		return d;
	},
	tK: function () {
		return a;
	}
});
var s,
	a,
	i = n(367907),
	r = n(626135),
	l = n(63063),
	o = n(981631);
((s = a || (a = {})).DESCRIPTION = 'description'),
	(s.CATEGORIES = 'categories'),
	(s.TAGS = 'tags'),
	(s.AGREE_TO_RULES = 'agree_to_rules');
let c = (e, t, n) => {
		r.default.track(o.rMx.USER_FLOW_TRANSITION, {
			flow_type: o.jXE.DISCOVERY_SETUP_MODAL,
			from_step: e,
			to_step: t,
			...(0, i.hH)(n)
		});
	},
	d = (e) => {
		let { articleId: t, guildId: n, modalStep: s = null, pageView: a = null } = e;
		open(l.Z.getArticleURL(t)),
			r.default.track(o.rMx.DISCOVERY_SETUP_CTA_CLICKED, {
				cta_name: o.b8q,
				discovery_settings_view: a,
				help_center_article_id: t,
				modal_step: s,
				...(0, i.hH)(n)
			});
	};
