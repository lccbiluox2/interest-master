<template>
  <div id="body_top">
    <div id="top">
      <div class="top_left"></div>
      <div class="item1"><a href="/indexController/welcome">首 页</a></div>
      <div class="item1"><a href="/newsIndexController/getAllNews">新闻</a></div>
      <div class="item1"><a href="">租房</a></div>
      <div class="item1"><a href="/rentIndexController/getAllRent">出租</a></div>
      <div class="item1"><a href="">求租</a></div>
      <div class="item1"><a href="/rentIndexController/getRentByHstate?h_state=1">出售</a></div>
      <div class="item1"><a href="">求购</a></div>
      <div class="item1"><a href="/messageIndexController/preAddMessagePage?currentPage=0">留言板</a></div>


      <div class="item2">
        <router-link tag="a" to="/login">用户登录</router-link>
      </div>
      <div class="item2"><a href="/userController/userRegister">注册 </a></div>
      <div class="item2"> <router-link tag="a" to="/write">写博客</router-link> </div>
    </div>


    <div id="content"  >

      <div id="imgRol">
        <div id="run" style="width:100%;background-color:red;float:left;">
          <div>
            <img src="../assets/index/run1.png" style="display:block;" class="run1"/>
            <img src="../assets/index/run2.png"  class="run1"/>
            <img src="../assets/index/run3.png"  class="run1"/>
            <img src="../assets/index/run4.png"  class="run1"/>
            <img src="../assets/index/run5.png"  class="run1"/>
          </div>
          <div id="run_bt"   v-bind:class="actived" v-on:click.prevent >
            <div class="show_img_index1 show_img_index_a"  ><a href="#"  v-on:click="showImgIndex(0)"  >1</a></div>
            <div class="show_img_index2 show_img_index_a" ><a href="#"  v-on:click="showImgIndex(1)"  >2</a></div>
            <div class="show_img_index3  show_img_index_a" ><a href="#"  v-on:click="showImgIndex(2)"   >3</a></div>
            <div class="show_img_index4  show_img_index_a" ><a href="#" v-on:click="showImgIndex(3)"  >4</a></div>
            <div class="show_img_index5  show_img_index_a " ><a href="#" v-on:click="showImgIndex(4)"  >5</a></div>

            <div class="show_img_index6  " ><a href="#" >网站被访问了  {{actived}}   次</a></div>
          </div>
        </div>
      </div>

      <div id="showChart">

      </div>



      <div class="bottom2">
        <img alt="" src="../assets/index/foot.png">
      </div>


      <div class="bottom">
        <a href="#" rel="nofollow">关于我们</a>|
        <a href="#" rel="nofollow">广告服务</a>|
        <a href="#" rel="nofollow">联系我们</a>|
        <a href="#" rel="nofollow">法律声明</a>|
        <a href="#" rel="nofollow">网站地图</a>|
        <a target="_blank" href="#">版权声明</a>|
        <a href="#" rel="nofollow">帮助中心</a>
        <br />
        版权所有　&copy; 2005-2020　豫ICP备25555555号
      </div>


    </div>

  </div>



</template>


<script type="text/ecmascript-6">


  import $ from 'jquery'

  export default {
    name : "index",
    // 定义属性，并设置初始值
    data() {
      return {
        actived: 'home'
      }
    },

    // 点击菜单使用的函数
    methods: {
      showImgIndex: function(item){
        // 模型改变，视图会自动更新
        for(var i=0;i<=4;i++){
          if(item  == i){
            $(".run1").eq(i).css("display","block");
          }else{
            $(".run1").eq(i).css("display","none");
          }
        }
        this.actived = item;
      }
    }
  }


</script>


<style>

  body{
    width:100%;
    height:900px;
    margin:0 auto;
    font-family:"LiSu";
  }

  a{
    TEXT-DECORATION:none
  }
  #body_top{
    width:100%;
    margin:0 auto;
    font-family:"LiSu";
  }
  #top{
    position:relative;
    float:left;
    height:40px;
    width:100%;
    background-color:black;
  }
  .top_left{
    position:relative;
    float:left;
    height:40px;
    width:30px;

  }
  .item1{
    position:relative;
    float:left;
    height:40px;
    width:5%;
    color:#F00;
    text-align:center;
    line-height:40px;
    display:block;
  }
  .item1 a{
    color:#FFF;
  }
  .item1:hover{
    background-color:green;
  }

  .item2{
    position:relative;
    float:right;
    height:40px;
    width:7%;
    text-align:center;
    line-height:40px;
    display:block;
  }
  .item2 a{
    color:#FFF;
  }
  .item2:hover{
    background-color:green;
  }








  #mybody{
    width:1200px;
    height:900px;
    margin:0 auto;
  }
  #content{
    width:100%;

    float:left;
    background:#3E3A39;
  }




  #imgRol{
    width:100%;
    float:left;
    background:green;
    text-align:center;
  }

  #run img{
    width:100%;
    display:none;
    z-index:1;

  }
  #run_bt{
    width:100%;
    height:30px;
    position:absolute;
    margin-top:-30px;
    z-index:30;

    background-color:black;


  }
  .show_img_index1{
    margin-left:400px;
  }
  .show_img_index2{
    margin-left:440px;
  }
  .show_img_index3{
    margin-left:480px;
  }
  .show_img_index4{
    margin-left:520px;
  }
  .show_img_index5{
    margin-left:560px;
  }

  .show_img_index6{
    margin-left:760px;
    position:absolute;
    color:#FFFFFF;
    display:block;
    height:30px;
    line-height:30px;
  }
  .show_img_index6 a{
    color:#FFFFFF;
  }


  .show_img_index_a a{
    position:absolute;
    color:#FFFFFF;
    display:block;
    width:30px;
    height:30px;
    line-height:30px;

  }




  .bottom2{
    float:left;
    margin-top:20px;
    margin-bottom:20px;
    height:120px;
    background:red;
    width:100%;
  }
  .bottom2 img{
    height:100%;
    width:100%;
  }



  .bottom{clear:both;margin:10px auto;text-align:center;padding:10px 0;line-height:25px;color:#666;border-top:#ddd 1px solid;background:#3E3A39;}
  .bottom a{margin:0 7px;color:#666;}
  .bottom a:hover{color:#000;text-decoration:underline;}

</style>





