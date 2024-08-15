n.d(t, {
	m: function () {
		return s;
	}
}),
	n(47120);
var i = n(243814),
	a = n(103964);
let s = {
		[a.Q5.INITIATE_IMAGE_UPLOAD]: {
			request: void 0,
			response: (e) => e.object({ image_url: e.string().required() })
		},
		[a.Q5.OPEN_SHARE_MOMENT_DIALOG]: {
			response: void 0,
			request: (e) => (0, a.C5)(e.object({ mediaUrl: e.string().required().max(1024) }))
		},
		[a.Q5.AUTHENTICATE]: {
			request: (e) => (0, a.C5)(e.object({ access_token: e.string().allow(null).optional() })),
			response: (e) =>
				e.object({
					access_token: e.string().required(),
					user: e
						.object({
							username: e.string().required(),
							discriminator: e.string().required(),
							id: e.string().required(),
							avatar: e.string().allow(null),
							public_flags: e.number().required(),
							global_name: e.string().allow(null)
						})
						.required(),
					scopes: e
						.array()
						.items(e.string().valid(...(0, a.no)(i.x)))
						.required(),
					expires: e.string().required(),
					application: e
						.object({
							description: e.string().required(),
							icon: e.string().allow(null),
							id: e.string().required(),
							rpc_origins: e.array().items(e.string()).optional(),
							name: e.string().required()
						})
						.required()
				})
		},
		[a.Q5.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
			request: void 0,
			response: (e) =>
				e
					.object({
						participants: e
							.array()
							.items(
								r(e)
									.keys({ nickname: e.string().description('Server nickname. Not unique.') })
									.required()
							)
							.required()
					})
					.required()
		}
	},
	r = (e) =>
		e
			.object({
				id: e.string().required().description('User ID'),
				username: e.string().required(),
				global_name: e.string().allow(null).description('Global Discord name. Not unique.'),
				discriminator: e.string().required().description('Global name discriminator. Will be 0 if a unique username'),
				avatar: e.string().allow(null).description('User Avatar ID'),
				flags: e.number().required().description('Public user flags'),
				bot: e.bool().required().description('If a bot user.'),
				avatar_decoration_data: e
					.object({
						asset: e.string().required(),
						skuId: e.string()
					})
					.allow(null)
					.description('Details about avatar decoration'),
				premium_type: e.number().allow(null).description('Nitro premium type')
			})
			.description('Discord User');
