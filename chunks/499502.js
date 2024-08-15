t.d(e, {
	Z: function () {
		return s;
	}
});
var i = t(735250);
t(470079);
var a = t(481060),
	l = t(695346),
	r = t(572004),
	d = t(689938);
function s(n, e) {
	let t = e.primarySkuId,
		s = l.Sb.useSetting();
	return !__OVERLAY__ && s && r.wS
		? (0, i.jsxs)(a.MenuItem, {
				id: 'application-dev',
				label: d.Z.Messages.COPY,
				action: () => (0, r.JG)(e.id),
				children: [
					(0, i.jsx)(a.MenuItem, {
						id: 'app-id',
						label: d.Z.Messages.APPLICATION_CONTEXT_MENU_APPLICATION_ID,
						action: () => (0, r.JG)(e.id)
					}),
					null != n
						? (0, i.jsx)(a.MenuItem, {
								id: 'branch-id',
								label: d.Z.Messages.APPLICATION_CONTEXT_MENU_BRANCH_ID,
								action: () => (0, r.JG)(n.branchId)
							})
						: null,
					null != t
						? (0, i.jsx)(a.MenuItem, {
								id: 'sku-id',
								label: d.Z.Messages.APPLICATION_CONTEXT_MENU_SKU_ID,
								action: () => (0, r.JG)(t)
							})
						: null
				]
			})
		: null;
}
