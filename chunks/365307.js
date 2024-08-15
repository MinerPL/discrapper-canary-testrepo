n.d(t, {
	Z: function () {
		return I;
	},
	j: function () {
		return E;
	}
});
var s = n(735250);
n(470079);
var a = n(442837),
	i = n(139387),
	r = n(852860),
	l = n(490655),
	o = n(434404),
	c = n(360606),
	d = n(999382),
	u = n(821864),
	_ = n(905753);
function I(e) {
	let { refToScroller: t } = e,
		n = (0, a.e7)([d.Z], () => d.Z.getGuild()),
		{
			section: i,
			sectionId: r,
			integrations: o,
			editedIntegration: u,
			webhooks: _,
			editedWebhook: I,
			isFetching: E,
			errors: T
		} = (0, a.cj)([c.Z], () => ({
			editedIntegration: c.Z.editedIntegration,
			editedWebhook: c.Z.editedWebhook,
			errors: c.Z.getErrors(),
			integrations: c.Z.integrations,
			isFetching: c.Z.isFetching(),
			section: c.Z.getSection(),
			sectionId: c.Z.getSectionId(),
			webhooks: c.Z.webhooks
		}));
	return null == n
		? null
		: (0, s.jsx)(l.Z, {
				guild: n,
				section: i,
				sectionId: r,
				integrations: o,
				webhooks: _,
				editedIntegration: u,
				editedWebhook: I,
				isFetching: E,
				hasChanges: c.Z.hasChanges,
				errors: T,
				refToScroller: t
			});
}
function E() {
	let { guild: e, submitting: t } = (0, a.cj)([d.Z], () => ({
		guild: d.Z.getGuild(),
		submitting: d.Z.isSubmitting()
	}));
	return (0, s.jsx)(r.Z, {
		submitting: t,
		onReset: () => {
			i.Z.init(), u.Ui(), null != e && o.Z.init(e.id);
		},
		onSave: () => {
			if (null != e) {
				if (null != c.Z.editedIntegration) i.Z.saveIntegration(e.id, c.Z.editedIntegration);
				else if (null != c.Z.editedWebhook) i.Z.saveWebhook(e.id, c.Z.editedWebhook);
				else if (null != c.Z.editedCommandId) {
					let t = c.Z.getSectionId(),
						n = _.Z.getEditedApplication();
					if (null == t || null == n) return;
					i.Z.saveApplicationPermissions(t, e.id, Object.values(n));
				}
				d.Z.hasChanges() && o.Z.saveGuild(e.id, { features: e.features });
			}
		}
	});
}
