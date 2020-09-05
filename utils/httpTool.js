
function sendRequest(param) {
	var tid = '522700'
	let params = {
		"loccoordinate": "loccoordinate",
		"chltype": "1000",
		"msgid": "20200427wt161000000019406",
		"chlno": "300200",
		"body": {
			"tid": tid,
			"appCode": "cms",
			"invokeCode": "cms.findNewsInfo",
			"txCode": param.transcode,
			"entity": param.data
		},
		"version": "1.0.0",
		"temip": "ip",
		"temtype": "10",
		"checksum": "checksum",
		"locaddr": "locaddr",
		"msgtype": "ZHFC00000001",
		"appcitycode": "1111"
	}

	let url = 'http://103.126.126.119:8040/host/gjj/trans'
	let showLoading = param.showLoading || false
	if (showLoading) {
		console.log(9999999)
		uni.showLoading({
			title: '疯狂加载中...'
		})
	}
	uni.request({
		url: url,
		data: params,
		header: param.header || {
			'content-type': "application/json"
		},
		method: param.method || 'POST',
		dataType: param.dataType || 'JSON',
		success: data => {
			console.log('data ===> ' + data )
			if (data.statusCode && data.statusCode != 200) {
				//api错误
				uni.showModal({
					content: "" + data.errMsg
				});
				return;
			}
			var resultData = data.data
			// #ifdef MP-WEIXIN
			resultData = JSON.parse(data.data)
			// #endif

			if (resultData.resultcode != '000000') {

				uni.showModal({
					title: 'Error',
					content: 'error:' + resultData['message'],
					showCancel: false
				})
				return
			}

			let res = resultData.body
			if (typeof param.success === 'function') {

				param.success(res)
			}
		},
		fail: (data) => {
			console.log('fail...' + JSON.stringify(data));
			uni.showModal({
				title: 'Error',
				content: '请求发送失败，请检查您的网络连接' + JSON.stringify(data),
				showCancel: false
			})
			if (typeof param.fail === 'function') {
				param.fail(data)
			}
		},
		complete() {
			// Alert.hideLoading()
			if (showLoading) {
				uni.hideLoading()
			}
			if (typeof param.complete === 'function') {
				param.complete()
			}
		}
	})
}

export default {
	sendRequest
}
