n.d(t, {
	B0: function () {
		return c;
	},
	Nt: function () {
		return u;
	},
	RV: function () {
		return h;
	},
	VP: function () {
		return N;
	},
	X: function () {
		return A;
	},
	ZD: function () {
		return _;
	},
	fw: function () {
		return E;
	},
	hs: function () {
		return m;
	},
	k8: function () {
		return S;
	},
	ox: function () {
		return d;
	},
	qJ: function () {
		return p;
	},
	yL: function () {
		return f;
	}
}),
	n(411104),
	n(724458),
	n(47120);
var r = n(544891),
	i = n(570140),
	a = n(367907),
	s = n(432877),
	o = n(82554),
	l = n(981631);
async function u(e, t) {
	var n;
	let i = T(e),
		a = await r.tn.get({
			url: l.ANM.GET_REPORT_MENU(i),
			query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
		});
	return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function c(e, t) {
	var n;
	let i = I(e),
		a = await r.tn.get({
			url: l.ANM.GET_UNAUTHENTICATED_REPORT_MENU(i),
			query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0
		});
	return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function d(e, t) {
	let n = T(e),
		i = await u(e, t);
	await r.tn.post({
		url: l.ANM.SUBMIT_REPORT_MENU(n),
		body: g(i, e, [
			{
				nodeRef: i.root_node_id,
				destination: ['', i.success_node_id]
			}
		])
	});
}
function _(e, t, n) {
	return s.ZP.get('iar_skip_api_report_submit')
		? Promise.resolve()
		: r.tn.post({
				url: l.ANM.SUBMIT_REPORT_MENU(T(t)),
				body: g(e, t, n)
			});
}
function E(e, t, n, i) {
	if (s.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
	let a = I(t);
	return r.tn.post({
		url: l.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
		body: g(e, t, n, i)
	});
}
function f(e, t) {
	return r.tn.post({
		url: l.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
		body: {
			name: e,
			email: t
		}
	});
}
async function h(e, t, n) {
	return (
		await r.tn.post({
			url: l.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
			body: {
				name: e,
				email: t,
				code: n
			}
		})
	).body;
}
async function p() {
	return await r.tn.get({ url: l.ANM.DSA_EXPERIMENT_UNAUTHENTICATED });
}
async function m(e) {
	return (
		await r.tn.post({
			url: l.ANM.SUBMIT_REPORT_SECOND_LOOK,
			body: { token: e }
		})
	).body;
}
function I(e) {
	let t = e.name;
	if (!Object.values(o.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
	return t;
}
function T(e) {
	let t = e.name;
	if (!Object.values(o.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
	return t;
}
let g = (e, t, n, r) => {
	let { version: i, variant: a, language: s } = e,
		l = {
			channel_id: void 0,
			message_id: void 0,
			stage_instance_id: void 0,
			guild_id: void 0,
			guild_scheduled_event_id: void 0,
			user_id: void 0,
			email_token: void 0
		},
		u = {
			version: i,
			variant: a,
			language: null != s ? s : 'en',
			breadcrumbs: n.map((e) => e.nodeRef),
			elements: n.reduce((e, t) => {
				let { multiSelect: n, textInput: r } = t;
				return {
					...e,
					...(null != n && { [n.name]: Object.keys(n.state) }),
					...Object.fromEntries(
						Object.entries(null != r ? r : {}).map((e) => {
							let [t, { value: n }] = e;
							return [t, n];
						})
					)
				};
			}, {})
		};
	if (t.name === o.b.MESSAGE || t.name === o.b.FIRST_DM) {
		let { channel_id: e, id: n } = t.record;
		return {
			...u,
			...l,
			name: t.name,
			channel_id: e,
			message_id: n
		};
	}
	if (t.name === o.b.GUILD || t.name === o.b.GUILD_DISCOVERY) {
		let { id: e } = t.record;
		return {
			...u,
			...l,
			name: t.name,
			guild_id: e
		};
	}
	if (t.name === o.b.GUILD_DIRECTORY_ENTRY) {
		let { guildId: e, channelId: n } = t.record;
		return {
			...u,
			...l,
			name: t.name,
			channel_id: n,
			guild_id: e
		};
	} else if (t.name === o.b.STAGE_CHANNEL) {
		let { id: e, guild_id: n, channel_id: r } = t.record;
		return {
			...u,
			...l,
			name: t.name,
			channel_id: r,
			guild_id: n,
			stage_instance_id: e
		};
	} else if (t.name === o.b.GUILD_SCHEDULED_EVENT) {
		let { id: e, guild_id: n } = t.record;
		return {
			...u,
			...l,
			name: t.name,
			guild_id: n,
			guild_scheduled_event_id: e
		};
	} else if (t.name === o.b.USER)
		return {
			...u,
			...l,
			name: t.name,
			user_id: t.record.id,
			guild_id: t.contextualGuildId
		};
	else if (t.name === o.BM.USER)
		return {
			...u,
			...l,
			name: t.name,
			user_id: t.record.id,
			guild_id: t.contextualGuildId,
			email_token: r
		};
	else if (t.name === o.BM.MESSAGE)
		return {
			...u,
			...l,
			name: t.name,
			message_id: t.record.id,
			email_token: r
		};
	return null;
};
function S(e, t, n) {
	a.ZP.trackWithMetadata(l.rMx.IAR_MODAL_CLOSE, {
		report_type: e.name,
		report_id: n,
		navigation_history: t,
		message_id: e.name === o.b.MESSAGE || e.name === o.b.FIRST_DM ? e.record.id : void 0,
		stage_instance_id: e.name === o.b.STAGE_CHANNEL ? e.record.id : void 0,
		guild_scheduled_event_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
		guild_id: e.name === o.b.GUILD || e.name === o.b.GUILD_DISCOVERY ? e.record.id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
		channel_id: e.name === o.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === o.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
	});
}
function A(e, t) {
	i.Z.dispatch({
		type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
		reportId: t,
		reportType: e.name
	});
}
function N(e, t, n, r, i) {
	return (
		e.some((e) => {
			var t;
			return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid));
		}) ||
		t.some((e) => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) ||
		((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
	);
}
