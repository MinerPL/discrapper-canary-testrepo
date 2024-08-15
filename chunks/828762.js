t.d(A, {
	Z: function () {
		return v;
	}
}),
	t(411104),
	t(47120);
var a = t(470079),
	n = t(399606),
	r = t(780384),
	s = t(570140),
	o = t(881052),
	l = t(141795),
	i = t(476326),
	d = t(983544),
	c = t(9874),
	u = t(710845),
	C = t(430824),
	g = t(277985),
	T = t(240864),
	p = t(863663),
	h = t(981631),
	m = t(689938);
function I(e, A, t) {
	return (
		A in e
			? Object.defineProperty(e, A, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[A] = t),
		e
	);
}
let U = new u.Z('ProductAttachmentManager');
class f {
	addAttachment(e, A) {
		let t = this.target.getMaxAttachmentsCount();
		if (this.uploads.length >= t) throw (r.uv.announce(m.Z.Messages.GUILD_PRODUCT_A11Y_TOO_MANY_ATTACHMENTS.format({ maxAttachmentsCount: t })), Error('Too many attachments'));
		e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
		let a = new l.n(e, this.guildId);
		a.upload(),
			a.on('error', (t) => {
				var n;
				t === h.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
				let s = 'number' == typeof t && t > 0 ? -t : -1,
					o = (0, p.kg)(s),
					l = null === (n = e.file) || void 0 === n ? void 0 : n.name;
				null != l
					? r.uv.announce(
							m.Z.Messages.GUILD_PRODUCT_A11Y_NAMED_UPLOAD_FAILED.format({
								filename: l,
								reason: o
							})
						)
					: r.uv.announce(m.Z.Messages.GUILD_PRODUCT_A11Y_UPLOAD_FAILED.format({ reason: o })),
					A((e) => ({
						...e,
						[a.id]: s
					}));
			}),
			a.on('progress', (e, t) => {
				A((A) => ({
					...A,
					[a.id]: e / t
				}));
			}),
			(this.uploads = [...this.uploads, a]);
	}
	deleteAttachment(e) {
		let A = this.uploads.findIndex((A) => A.id === e);
		return -1 !== A && ((this.uploads = [...this.uploads]), this.uploads.splice(A, 1)[0].cancel(), !0);
	}
	cancelUnusedUploads() {
		for (let e of this.uploads) e.cancel();
		this.uploads = [];
	}
	async saveProductWithAttachments(e) {
		let A,
			{ priceTier: t, createNewRole: a, imageName: n, ...r } = e;
		if (this.uploads.some((e) => e.status === l.m.ERROR)) throw Error('Cannot create product with failed attachments');
		'unlinkRole' in r && (A = r.unlinkRole);
		let o = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
			i = this.uploads
				.filter((e) => this.existingAttachmentIds.has(e.id))
				.map((e) => {
					var A;
					return {
						filename: null === (A = e.item.file) || void 0 === A ? void 0 : A.name,
						id: e.id
					};
				}),
			d = await this.createCloudUploader().uploadFiles(
				o,
				{
					...r,
					price_tier: t,
					create_new_role: a,
					image_name: n,
					unlink_role: A,
					attachments: i.length > 0 ? i : void 0
				},
				{ addFilesTo: 'attachments' }
			);
		return (
			U.log('Created/updated product:', d),
			null != d &&
				(this.isEdit
					? await s.Z.dispatch({
							type: 'GUILD_PRODUCT_UPDATE',
							product: d
						})
					: await s.Z.dispatch({
							type: 'GUILD_PRODUCT_CREATE',
							product: d
						})),
			d
		);
	}
	constructor({ guildId: e, editSkuId: A, onFileSizeError: t }) {
		var a;
		I(this, 'guildId', void 0),
			I(this, 'isEdit', void 0),
			I(this, 'target', new g.Z()),
			I(this, 'createCloudUploader', void 0),
			I(this, 'onFileSizeError', void 0),
			I(this, 'existingAttachmentIds', new Set()),
			I(this, 'uploads', []),
			I(this, 'generateInitialProgresses', () => {
				let e = {};
				for (let A of this.uploads) e[A.id] = 1;
				return e;
			}),
			(this.isEdit = null != A);
		let n = null == A ? h.ANM.GUILD_PRODUCTS(e) : h.ANM.GUILD_PRODUCT_LISTINGS(e, A),
			r = null == A ? 'POST' : 'PATCH';
		(this.createCloudUploader = () => (0, c.F)(n, r)), (this.guildId = e), (this.onFileSizeError = t);
		let s = null === (a = T.Z.getGuildProduct(null != A ? A : '')) || void 0 === a ? void 0 : a.attachments;
		null != s &&
			(this.uploads = s.map((A) => {
				var t;
				this.existingAttachmentIds.add(A.id);
				let a = new l.n(
					{
						id: A.id,
						platform: i.ow.WEB,
						file: {
							name: A.filename,
							lastModified: 0,
							size: null !== (t = A.size) && void 0 !== t ? t : 0
						}
					},
					e
				);
				return (a.status = l.m.COMPLETED), a;
			}));
	}
}
function v(e, A) {
	var t;
	let { editSkuId: r, onFileSizeError: s } = A,
		l = (0, n.e7)([C.Z], () => C.Z.getGuild(e)),
		[i, d] = a.useState({
			editSkuId: r,
			onFileSizeError: s
		}),
		c = a.useMemo(
			() =>
				new f({
					guildId: e,
					...i
				}),
			[e, i]
		),
		[u, g] = a.useState(c.generateInitialProgresses),
		[, T] = a.useState(null);
	a.useLayoutEffect(() => {
		g(c.generateInitialProgresses());
	}, [c]);
	let [p, m] = a.useState(),
		[I, U] = a.useState(),
		v = a.useCallback(
			(e) => {
				c.deleteAttachment(e) && T({});
			},
			[c]
		),
		q = a.useCallback(
			(e) => {
				c.addAttachment(e, g), T({});
			},
			[c]
		),
		E = a.useCallback(
			async (e) => {
				try {
					m(e), U(void 0);
					let A = await c.saveProductWithAttachments(e);
					return (
						null != A &&
							d({
								editSkuId: A.id,
								onFileSizeError: s
							}),
						T({}),
						A
					);
				} catch (e) {
					U(
						e instanceof o.Hx
							? e
							: new o.Hx({
									status: 400,
									body: { attachments: [e.message] }
								})
					);
				} finally {
					m(void 0);
				}
			},
			[c, s]
		),
		N = a.useCallback(() => {
			c.cancelUnusedUploads(), T({});
		}, [c]);
	a.useEffect(
		() => () => {
			c.cancelUnusedUploads();
		},
		[c]
	);
	let { uploads: D } = c,
		O = !D.every((e) => c.existingAttachmentIds.has(e.id)) || D.length !== c.existingAttachmentIds.size;
	return {
		addAttachment: q,
		cancelUnusedUploads: N,
		deleteAttachment: v,
		fileUploadProgresses: u,
		uploads: D,
		saveProductWithAttachments: E,
		isSaving: null != p,
		changesSaving: p,
		saveError: I,
		hasUnsavedAttachmentChanges: O,
		canAttachFiles: D.length < c.target.getMaxAttachmentsCount(),
		canAttachArchives: null !== (t = null == l ? void 0 : l.hasFeature(h.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
	};
}
