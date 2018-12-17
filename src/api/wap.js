import jsonp from 'common/js/jsonp'
import{ commonParams , options } from './config'

export function wap() {
    const url = "https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1E5AC81F7D4267&cp=5C1764A216A7FE1&min_behot_time=1545028080&_signature=-53VBQAAp5RRspWFZ2T0Jvud1R&i=1545026764"

    const data = Object.assign({}, commonParams, {
        tag: '__all__',
        ac: 'wap',
        count: 20,
        format: 'json_raw',
    })

    return jsonp(url, data, options)
}