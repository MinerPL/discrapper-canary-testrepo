n.d(t, {
	Tj: function () {
		return d;
	},
	WG: function () {
		return m;
	},
	ZD: function () {
		return _;
	},
	pD: function () {
		return u;
	}
}),
	n(653041);
var a = n(990547);
n(804098);
var r = n(544891),
	i = n(729345),
	o = n(210887);
n(358085);
var s = n(573261),
	l = n(981631),
	c = n(689938);
async function m() {
	return (await r.tn.get({ url: l.ANM.BUG_REPORTS })).body;
}
function u(e) {
	var t, n;
	return null !==
		(n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '' + (null == e ? void 0 : e.squad)) &&
		void 0 !== n
		? n
		: '';
}
function d() {
	return [
		{
			title: c.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
			description: c.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
			emoji: '801497159479722084',
			value: 0
		},
		{
			title: c.Z.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
			description: c.Z.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
			emoji: '410336837563973632',
			value: 1
		},
		{
			title: c.Z.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
			description: c.Z.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
			emoji: '841420679643529296',
			value: 2
		},
		{
			title: c.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
			description: c.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
			emoji: '827645852352512021',
			value: 3
		}
	];
}
async function _(e, t, n) {
	var r, c;
	let m = [
		{
			name: 'name',
			value: e.name
		},
		{
			name: 'priority',
			value: ''.concat(e.priority)
		},
		{
			name: 'override_platform_information',
			value: ''.concat(t.overridePlatformInformation)
		},
		{
			name: 'theme',
			value: o.Z.theme
		}
	];
	'' !== e.description &&
		m.push({
			name: 'description',
			value: e.description
		}),
		'' !== e.url &&
			m.push({
				name: 'external_url',
				value: e.url
			});
	let u = null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
	null != u &&
		'' !== u &&
		m.push({
			name: 'asana_inbox_id',
			value: ''.concat(u)
		});
	let d = null === (c = e.feature) || void 0 === c ? void 0 : c.name;
	null != d &&
		'' !== d &&
		m.push({
			name: 'feature_name',
			value: d
		}),
		t.overridePlatformInformation &&
			(m.push({
				name: 'device',
				value: t.device
			}),
			m.push({
				name: 'os',
				value: t.operatingSystem
			}),
			m.push({
				name: 'os_version',
				value: t.operatingSystemVersion
			}),
			m.push({
				name: 'client_version',
				value: t.clientVersion
			}),
			m.push({
				name: 'client_build_number',
				value: t.clientBuildNumber
			}),
			m.push({
				name: 'release_channel',
				value: window.GLOBAL_ENV.RELEASE_CHANNEL
			}),
			m.push({
				name: 'locale',
				value: t.locale
			})),
		(0, i.E)(l.GU0.WEB_APP);
	try {
		return await s.Z.post({
			url: l.ANM.BUG_REPORTS,
			attachments: n,
			fields: m,
			trackedActionData: {
				event: a.NetworkActionNames.BUG_REPORT_SUBMIT,
				properties: {
					priority: e.priority,
					asana_inbox_id: u
				}
			}
		});
	} catch (e) {
		return e;
	}
}
