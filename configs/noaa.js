module.exports = {
	baseDir: 'http://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_1p00.pl',
	qs: {
		file: 'gfs.t' + '06' + 'z.pgrb2.1p00.f000',
		lev_10_m_above_ground: 'on',
		lev_surface: 'on',
		var_TMP: 'on',
		var_UGRD: 'on',
		var_VGRD: 'on',
		leftlon: 0,
		rightlon: 360,
		toplat: 90,
		bottomlat: -90,
		dir: '/gfs.' + '20200916' + '/06',
	},
};
