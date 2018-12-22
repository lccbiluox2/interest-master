<template>
  <div  id="mybody" >
    <div id="top" >
      <div id="top_title"><input v-model='title' type="text" id="title"  ></div>
      <div id="top_add"><input  type="button" id="button" value="发表文章"  ></div>
      <div id="top_head"><img id="head_img" src="../../assets/blog/head.png" ></div>
    </div>
    <div id="menu">
      <div class="item1"><a href="#" > &lt;博客 </a></div>
      <div class="item1"><a href="#" > 撤回 </a></div>
      <div class="item1"><a href="#" > 前进 </a></div>
      <div class="item1"><a href="#" > B </a></div>
      <div class="item1"><a href="#" > I </a></div>
      <div class="item1"><a href="#" > H </a></div>
      <div class="item1"><a href="#" > &lt; &gt; </a></div>
      <div class="item1"><a href="#" > TABLE </a></div>
      <div class="item1"><a href="#" > URL </a></div>
      <div class="item1"><a href="#" > IMG </a></div>
    </div>
    <div id="content_div" >
      <!-- textarea之间不要有空格 -->
      <textarea v-model='content' id="content_text" ></textarea>
    </div>
    <div  id="show_div"   >
      <div id="show-content"   ></div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">

  import $ from 'jquery'

  export default {

    data () {
      return {
        'content':'',
        'converter':null
      }
    },
    watch:{
      'content':'contentChanged'
    },
    mounted(){ this.init(); },
    methods: {
      init(){
        var showdown  = require('showdown');
        var converter = new showdown.Converter();
        this.converter = converter;
      },
      contentChanged(){
        var html = this.converter.makeHtml(this.content);
        alert(html);
        var htmls = $.parseHTML( html );
        htmls = parseTable(htmls);
        alert(htmls);
        document.getElementById('show-content').innerHTML = html;
      }
    }
  }

  // 解析表格
  function parseTable( htmls) {
    var newHtml = "";
    // $.each( htmls, function( i, el ) {
    //   var nodeValue = el.innerText;
    //   // 不是一个有效的行，空行
    //   if(!nodeValue.undefined){
    //     // 如果是表格
    //     if(nodeValue.startsWith("|") && (nodeValue.indexOf("|--|") != -1) ){
    //       // 分割表格按行读取
    //       var tables = nodeValue.split("\n");
    //       var newTable = "<table>";
    //       alert(newTable);
    //       var lineCount = 0;
    //       // for(var j=0;i<tables.length;j++){
    //       //   // var line = tables[j];
    //       //   // if(!line.undefined){
    //       //   //   if(lineCount == 0){
    //       //   //     var reg = new RegExp("\\|","g"); //g,表示全部替换。
    //       //   //     line = line.replace(reg,"</th><th>");
    //       //   //     line = line.substring(5,line.length - 4);
    //       //   //     line = "<tr>"+line+"</tr>";
    //       //   //   }else  if(lineCount == 1){
    //       //   //   }else {
    //       //   //     var reg = new RegExp("\\|","g"); //g,表示全部替换。
    //       //   //     line = line.replace(reg,"</td><td>");
    //       //   //     line = line.substring(5,line.length - 4);
    //       //   //     line = "<tr>"+line+"</tr>";
    //       //   //   }
    //       //   //   lineCount++;
    //       //   //
    //       //   //   newTable = newTable + line;
    //       //   //   alert("newTable1"+newTable);
    //       //   // }else {
    //       //   //   break;
    //       //   // }
    //       // }
    //
    //       newTable = newTable +"</table>";
    //       newHtml = newHtml+"<p>"+newTable+"</p>";
    //
    //       alert("newHtml"+newHtml);
    //     }else {
    //       // 如果不是表格数据加回去
    //       newHtml = newHtml+"<p>"+nodeValue+"</p>";
    //     }
    //   }else {
    //     newHtml = newHtml+"</br>";
    //   }
    //
    // });
    return newHtml;
  }
</script>
<style>

  a{
    TEXT-DECORATION:none
  }

  #mybody{
    float:left;
    height:1000px;
    width:1200px;
  }
  #top{
    float: left;
    width:100%;
    height: 50px;
    background-color: #f3f3f3;
  }
  #top_title{
    float: left;
    width: 85%;
    height: 100%;
  }

  #top_add{
    float: left;
    width: 10%;
    height: 100%;
  }
  #top_head{
    float: left;
    width: 5%;
    height: 100%;

  }

  #title{
    float: left;
    width: 98%;
    height: 98%;
    border: 0px;
    font-size: 20px;
    background-color: #f3f3f3;
  }

  #button{
    border-radius: 10px;
    padding: 20px;
    float: left;
    width: 98%;
    height: 98%;
    background-color: #CC3623;
    border: 0px;
    color: #FFFFFF;
    font-size: 15px;
    line-height: 10px;
    text-align: center;
  }

  #head_img{
    float: left;
    width: 100%;
    height: 100%;
  }

  #menu{
    float: left;
    width: 100%;
    height: 50px;
    background-color: #e0e0e0;
    border: 0px;
  }
  .item1{
    float:left;
    height:100%;
    text-align:center;
    line-height:50px;
    display:block;
    padding-left: 10px;
    padding-right: 10px;
  }
  .item1 a{
    color: #999999;
  }
  .item1:hover{
    background-color: #5c636a;
  }


  #content_div{
    float: left;
    width: 50%;
    height: 100%;
    border: 0px;
  }

  #content_text{
    float: left;
    width:98%;
    height: 98%;
    background-color: #f5f5f5;
    font-size: 20px;
    text-align: left;
    border: 0px;
  }

  #show_div{
    float: left;
    width:50%;
    height: 100%;
  }
  #show-content{
    float: left;
    width:100%;
    height: 100%;
    background-color: #ffffff;
    text-align: left;
    border: 0px;
    verflow-x:hidden;
    overflow-y:auto;
  }

</style>
