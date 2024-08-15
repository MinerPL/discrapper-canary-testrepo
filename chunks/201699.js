var r = n(384111),
	i = r.define('Time', function () {
		this.choice({
			utcTime: this.utctime(),
			generalTime: this.gentime()
		});
	}),
	a = r.define('AttributeTypeValue', function () {
		this.seq().obj(this.key('type').objid(), this.key('value').any());
	}),
	s = r.define('AlgorithmIdentifier', function () {
		this.seq().obj(
			this.key('algorithm').objid(),
			this.key('parameters').optional(),
			this.key('curve').objid().optional()
		);
	}),
	o = r.define('SubjectPublicKeyInfo', function () {
		this.seq().obj(this.key('algorithm').use(s), this.key('subjectPublicKey').bitstr());
	}),
	l = r.define('RelativeDistinguishedName', function () {
		this.setof(a);
	}),
	u = r.define('RDNSequence', function () {
		this.seqof(l);
	}),
	c = r.define('Name', function () {
		this.choice({ rdnSequence: this.use(u) });
	}),
	d = r.define('Validity', function () {
		this.seq().obj(this.key('notBefore').use(i), this.key('notAfter').use(i));
	}),
	_ = r.define('Extension', function () {
		this.seq().obj(this.key('extnID').objid(), this.key('critical').bool().def(!1), this.key('extnValue').octstr());
	}),
	E = r.define('TBSCertificate', function () {
		this.seq().obj(
			this.key('version').explicit(0).int().optional(),
			this.key('serialNumber').int(),
			this.key('signature').use(s),
			this.key('issuer').use(c),
			this.key('validity').use(d),
			this.key('subject').use(c),
			this.key('subjectPublicKeyInfo').use(o),
			this.key('issuerUniqueID').implicit(1).bitstr().optional(),
			this.key('subjectUniqueID').implicit(2).bitstr().optional(),
			this.key('extensions').explicit(3).seqof(_).optional()
		);
	}),
	f = r.define('X509Certificate', function () {
		this.seq().obj(
			this.key('tbsCertificate').use(E),
			this.key('signatureAlgorithm').use(s),
			this.key('signatureValue').bitstr()
		);
	});
e.exports = f;
