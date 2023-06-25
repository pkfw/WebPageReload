function minZeroReload() {
	fetch(window.location.host).then(r=>{
		const serverTime = new Date(r.headers.get('Date'));
		const reloadMin = 0;
		const isMinZero = serverTime.getMinutes() == reloadMin;
		isMinZero ? location.reload() : console.log('현재시간:: ', serverTime);
	});
}

setInterval(() => {
	minZeroReload();
}, 100);
