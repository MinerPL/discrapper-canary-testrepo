t.r(s),
	t.d(s, {
		default: function () {
			return h;
		}
	});
var n = t(735250);
t(470079);
var a = t(266067),
	c = t(765717),
	o = t(384666),
	r = t(69580),
	u = t(397394),
	i = t(981631);
function h() {
	return (0, n.jsxs)(a.rs, {
		children: [
			(0, n.jsx)(c.Z, {
				path: i.Z5c.OAUTH2_AUTHORIZED,
				component: u.Xg
			}),
			(0, n.jsx)(c.Z, {
				path: i.Z5c.OAUTH2_AUTHORIZE,
				component: r.OAuth2AuthorizePage
			}),
			(0, n.jsx)(c.Z, {
				path: i.Z5c.OAUTH2_ERROR,
				component: u.j3
			}),
			(0, n.jsx)(c.Z, {
				path: [i.Z5c.OAUTH2_WHITELIST_ACCEPT, '/oauth2/whitelist/accept'],
				component: o.Z
			})
		]
	});
}
