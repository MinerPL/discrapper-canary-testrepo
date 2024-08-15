var t = i(261168),
	n = {
		date: (0, t.Z)({
			formats: {
				full: 'eeee d. MMMM y',
				long: 'd. MMMM y',
				medium: 'd. MMM y',
				short: 'd.M.y'
			},
			defaultWidth: 'full'
		}),
		time: (0, t.Z)({
			formats: {
				full: 'HH.mm.ss zzzz',
				long: 'HH.mm.ss z',
				medium: 'HH.mm.ss',
				short: 'HH.mm'
			},
			defaultWidth: 'full'
		}),
		dateTime: (0, t.Z)({
			formats: {
				full: "{{date}} 'klo' {{time}}",
				long: "{{date}} 'klo' {{time}}",
				medium: '{{date}} {{time}}',
				short: '{{date}} {{time}}'
			},
			defaultWidth: 'full'
		})
	};
e.Z = n;
