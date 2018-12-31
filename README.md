# castle-baidu-tj
百度统计Api 封装

```typescript
/**
 * 安装代码
 * @param id
 */
export declare function install(id: string): void;
/**
 * 设置网站编号，用于直接加载数据
 * @param id
 */
export declare function site(id: string): void;
/**
 * PV统计
 * @param url 地址以/开头
 */
export declare function pv(url?: string): void;
/**
 * 事件统计
 * @param category 类型
 * @param action 动作
 * @param label 标签
 * @param value 值
 */
export declare function event(category: string, action: string, label?: string, value?: number): void;
/**
 * 自定义参数
 * @param index
 * @param name
 * @param value
 * @param scope
 */
export declare function custom(index: number, name: string, value: string, scope?: number): void;
/**
 * 订单追踪
 * @param id 订单号
 * @param total 总金额
 * @param items 商品明细
 */
export declare function order(id: string, total: number, items: item[]): void;
/**
 * 商品信息
 */
export declare class item {
    /**
     * 商品编号
     */
    skuId: string;
    /**
     * 商品名称
     */
    skuName: string;
    /**
     * 商品分类，需要以 > 分割
     */
    category: string;
    /**
     * 商品价格
     */
    Price: number;
    /**
     * 商品数量
     */
    Quantity: number;
    /**
     * 设置分类，数组，自动按照规则分组
     * @param category
     */
    setCategory(category: string[]): void;
}
```