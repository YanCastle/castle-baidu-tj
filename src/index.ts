window._hmt = window._hmt || []
/**
 * 安装代码
 * @param id 
 */
export function install(id: string) {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + id;
    var s: any = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
}
/**
 * 设置网站编号，用于直接加载数据
 * @param id 
 */
export function site(id: string) {
    window._hmt.push(['_setAccount', id])
}
/**
 * PV统计
 * @param url 地址以/开头
 */
export function pv(url: string = "") {
    if (!url) {
        url = window.location.hash.substr(1)
    }
    window._hmt.push(['_trackPageview', url])
}
/**
 * 事件统计
 * @param category 类型
 * @param action 动作
 * @param label 标签
 * @param value 值
 */
export function event(category: string, action: string, label: string = '-', value: number = 0) {
    window._hmt.push(['_trackEvent', category, action, label, value])
}
/**
 * 自定义参数
 * @param index 
 * @param name 
 * @param value 
 * @param scope 
 */
export function custom(index: number, name: string, value: string, scope: number = 3) {
    window._hmt.push(['_setCustomVar', index, name, value, scope])
}
/**
 * 订单追踪
 * @param id 订单号
 * @param total 总金额
 * @param items 商品明细
 */
export function order(id: string, total: number, items: item[]) {
    window._hmt.push(['_trackOrder', {
        orderId: id,
        orderTotal: total,
        item: items
    }])
}
/**
 * 商品信息
 */
export class item {
    /**
     * 商品编号
     */
    skuId: string = ""
    /**
     * 商品名称
     */
    skuName: string = ''
    /**
     * 商品分类，需要以 > 分割
     */
    category: string = ""
    /**
     * 商品价格
     */
    Price: number = 0
    /**
     * 商品数量
     */
    Quantity: number = 0
    /**
     * 设置分类，数组，自动按照规则分组
     * @param category 
     */
    setCategory(category: string[]) {
        this.category = category.join(' > ')
    }
}