<template>
  <div>
    <el-button type="primary"  @click="showDialog" style="margin:20px"><i class="el-icon-plus">添加</i></el-button>
    


    <el-table :data="lists" border style="width: 100%">
        <el-table-column
        type="index" label="序号" width="80">
        </el-table-column>

        <el-table-column
        prop="tmName" label="品牌名称" width="width" align="center">
        </el-table-column>

        <el-table-column
        prop="logoUrl" label="品牌logo" width="width" align="center">
        <template slot-scope="{row,$index}">
            <img :src="row.logoUrl" alt="" style="width:100px;height:100px">
      </template>
        </el-table-column>

        <el-table-column label="操作" width="width" align="center">
        <template slot-scope="{row,$index}">
            <el-button size="mini" type="warning" icon="el-icon-edit" @click="updateTradeMark(row)">修改</el-button>
            <el-button size="mini" type="danger"  icon="el-icon-delete" @click="deleteTradeMark(row)">删除</el-button>
      </template>
        </el-table-column>
    </el-table>
    <!-- 分页器 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    -->
    <div class="block">
        <el-pagination
        style="margin-top:20px"
        :current-page="page"
        :page-sizes="[3, 5, 7]"
        :page-size="limit"
        :pager-count="3"
        layout=" prev, pager, next, jumper,->, sizes,total"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="getPageList">
        </el-pagination>
    </div>

    <!-- 
        添加按钮的对话框 
        visible.sync 控制对话框显示与隐藏     
    -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
        <!-- 表单验证规则 rules   要在需要验证的字段添加prop属性-->
        <el-form style="width:80%" :model="tmForm" :rules="rules" ref="ruleForm">
            <el-form-item label="品牌名称" label-width="100px" prop="tmName">
            <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
            </el-form-item>

            <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
            <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
            </el-upload>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addOrUpdateTradeMark">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'tradeMark',
    data(){
        return{
            // 控制添加按钮对话框的显示隐藏
            dialogFormVisible:false,
            //page 代表当前第几页
            page:1,
            //limit 代表一页显示多少数据
            limit:7,
            // 获取总共数据
            total:0,
            // 获取到的列表数据
            lists:[],
            imageUrl: '',
            // 接收表单的数据 属性名需要按照发送请求数据名称进行书写
            tmForm:{
                tmName:'',
                logoUrl:'',
            },
            // 对话框类型
            dialogTitle:'',
            // 表单验证数据
            rules:{
                tmName: [
                    { required: true, message: '请输入品牌名称', trigger: 'blur' },
                    { min: 2, max: 7, message: '长度在 2到  7个字符', trigger: 'change' }
                ],
                logoUrl: [
                    { required: true, message: '请选择品牌logo'}
                ],
            },
        }
    },
    // 一挂载 就要发请求 调用接口
    mounted(){
        //获取列表数据方法
        this.getPageList()
    },
    methods:{
        async getPageList(pager=1){
            this.page=pager
            // 解构参数
            const {page,limit}=this;
            let result=await this.$API.trademark.reqTradeMarkList(page,limit);
            if(result.code===200){
                this.total=result.data.total;
                this.lists=result.data.records;
            }
        },
        // size-change 当分页器改变时 事件触发  每页展示的数据改变
        handleSizeChange(limit){
            this.limit=limit;
            this.getPageList();
        },
        showDialog(){
            this.dialogTitle='添加品牌';
            this.dialogFormVisible=true;
            // 没有提交数据 关闭对话框要进行清空
            this.tmForm={
                tmName:'',
                logoUrl:'',
            }
        },
        // 修改品牌列表数据弹出对话框 
        updateTradeMark(row){
            this.dialogTitle='修改品牌';
            this.dialogFormVisible=true;
            // 浅拷贝 对话框点击取消 不改值
            this.tmForm={...row}
        },
        // 上传logo图片调用的方法
        // 图片上传成功回调
        handleAvatarSuccess(res, file) {
        // res返回上传成功的数据（data里面放着图片地址）
        // file 返回上传成功 服务器给的数据
        // 存储图片地址 到时候进行修改添加 需要带给服务器
        this.tmForm.logoUrl=res.data
        },
        // 图片上传之前回调
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        // 添加或者修改列表品牌数据 上传有id 则提示修改成功 无id 则提示添加成功
        addOrUpdateTradeMark(){
            // 对表单进行校验 如果通过 则进行接口访问 调用ele的validate
            this.$refs.ruleForm.validate(async(valid)=>{
                // 通过校验 valid为true 否则为false
                if(valid){
                    this.dialogFormVisible=false;
                    // 发送请求
                    let result=await this.$API.trademark.reqAddOrUpdateTradeMark(this.tmForm);
                    if(result.code===200){
                        this.$message({
                            type:'success',
                            message:this.tmForm.id?'修改品牌成功':'添加品牌成功'
                        });
                        // 修改添加操作后 重新获得数据列表
                        // 如果是修改 则修改后需要显示的页面为当前页面 而非第一页
                        
                        this.getPageList(this.tmForm.id?this.page:1);
                    }
                }else{
                    this.$message({
                            type:'failed',
                            message:'数据存在问题 请重新输入'
                        })
                }
            })
            
        },
        // 删除列表品牌数据
        deleteTradeMark(row){
            // 弹框是否删除
            this.$confirm(`此操作将永久删除${row.tmName}, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                // 用户点击确定 触发删除请求
                let result=await this.$API.trademark.reqDeleteTradeMark(row.id);
                if(result.code===200){
                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                    });
                    // 对列表进行操作后 重新获取列表
                    // 如果当前页面数据只有一条 那么删除后应该跳到上一页
                    this.getPageList(this.lists.length>1?this.page:this.page-1);
                }
            
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
    },
}
</script>

<style>
  .block{
    text-align: center;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>