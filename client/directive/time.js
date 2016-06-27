export const formatTime = function(timer) {
	const now = new Date();
	const time = new Date(timer);
	console.log(time)
	const differTime = parseInt((now.getTime() - time.getTime()) / 1000);
	let timeStr = '';
	if (time.getFullYear() == now.getFullYear()) {
		if (time.getMonth() == now.getMonth()) {
			if (differTime < 86400) {
				timeStr = `${time.getHours()}:${time.getMinutes()}`
			} else if (differTime > 172800) {
				timeStr = `${time.getMonth()+1}-${time.getDate()}`
			} else {
				timeStr = '昨天';
			}
		} else {
			timeStr = `${time.getMonth}-${time.getDate()}`
		}
	} else {
		timeStr = `${time.getFullYear()}年`;
	}
	return timeStr;
}