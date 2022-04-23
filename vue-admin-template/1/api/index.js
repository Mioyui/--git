// 将产品的四个模块接口函数 统一暴露

import * as trademark from './product/tradeMark';
import * as attr from './product/attr';
import * as sku from './product/sku';
import * as spu from './product/spu';
import role from './acl/role';
import permission  from './acl/permission';
import * as user from './acl/user'


// 对外暴露

export default{
    trademark,
    attr,
    sku,
    spu,
    permission,
    role,
    user,
}