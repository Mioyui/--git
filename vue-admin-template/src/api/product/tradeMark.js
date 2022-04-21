//获取商品品牌列表
// 接口：/admin/product/baseTrademark/{page}/{limit} get
//http://39.98.123.211:8216/swagger-ui.html
// 该接口需要两个参数 page 和 limit
import request from '@/utils/request'

export const reqTradeMarkList=(page,limit)=>request(
    {
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get',
}
)

// 新增品牌访问的接口
// 接口：/admin/product/baseTrademark/save post
// 两个参数 tmName logoUrl 品牌名称和logo


// 修改品牌访问的接口
// 接口：/admin/product/baseTrademark/update put
// 三个参数 id tmName logoUrl  品牌id 名称 和 logo 


// 修改和添加访问差不多 所以写在一起

export const reqAddOrUpdateTradeMark=(tradeMark)=>{
    if(tradeMark.id){
        // 访问接口携带id 说明是update操作
        return request({
            url: '/admin/product/baseTrademark/update',
            method: 'put',
            data:tradeMark
        })
    }else{
        return request({
            url: '/admin/product/baseTrademark/save',
            method: 'post',
            data:tradeMark
        })
    }
}

// 删除品牌访问的接口
// 接口：/admin/product/baseTrademark/remove/{id} delete
// 一个参数 id
export const reqDeleteTradeMark=(id)=>request({
    url:`/admin/product/baseTrademark/remove/${id}`,
    method:'delete',
})
