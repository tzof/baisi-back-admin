import axios from "utils/request.js";
// 请求登录接口
// /store/login
export default async function getLogin(option) {
    return await axios({ method: 'post', url: "/store/login", data: option })
}