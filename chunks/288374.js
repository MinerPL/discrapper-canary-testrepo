var m = a(261168),
	d = {
		date: (0, m.Z)({
			formats: {
				full: 'EEEE, d MMMM yyyy',
				long: 'd MMMM yyyy',
				medium: 'd MMM yyyy',
				short: 'dd/MM/yyyy'
			},
			defaultWidth: 'full'
		}),
		time: (0, m.Z)({
			formats: {
				full: 'HH:mm:ss zzzz',
				long: 'HH:mm:ss z',
				medium: 'HH:mm:ss',
				short: 'HH:mm'
			},
			defaultWidth: 'full'
		}),
		dateTime: (0, m.Z)({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: '{{date}}, {{time}}',
				short: '{{date}}, {{time}}'
			},
			defaultWidth: 'full'
		})
	};
e.Z = d;
