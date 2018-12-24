<template>
  <div  id="mybody" >

    <form @submit.prevent="submit" id="myform">
      <div id="top">
        <div id="top_title"><input type="text" id="mytitle"></div>
        <div id="top_add"><input type="submit" id="button" value="发表文章"></div>
        <div id="top_head"><img id="head_img" src="../../assets/blog/head.png"></div>
      </div>
      <div id="menu">
        <div class="item1"><a href="#"> &lt;博客 </a></div>
        <div class="item1"><a href="#"> 撤回 </a></div>
        <div class="item1"><a href="#"> 前进 </a></div>
        <div class="item1"><a href="#"> B </a></div>
        <div class="item1"><a href="#"> I </a></div>
        <div class="item1"><a href="#"> H </a></div>
        <div class="item1"><a href="#"> &lt; &gt; </a></div>
        <div class="item1"><a href="#"> TABLE </a></div>
        <div class="item1"><a href="#"> URL </a></div>
        <div class="item1"><a href="#"> IMG </a></div>
      </div>
      <div id="content_div">
        <!-- textarea之间不要有空格 -->
        <textarea v-model='content' id="content_text"></textarea>
      </div>
      <div id="show_div">
        <input type="text" id="form_content" hidden="true" >
        <div id="show-content"></div>
      </div>
    </form>

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
        var htmls = $.parseHTML( html );
        htmls = parseTable(htmls);
        document.getElementById('show-content').innerHTML = htmls;
        $("#form_content").val(htmls) ;
      }
    }
  }

  // 解析表格
  function parseTable( htmls) {
    var newHtml = "";

    $.each( htmls, function( i, el ) {
      if(el instanceof HTMLParagraphElement ) {
        var nodeValue = el.innerHTML;
        if (nodeValue == "") {
          return true;
        }

        // 不是一个有效的行，空行
        if (typeof (nodeValue) != "undefined") {
          // 如果是表格
          if (nodeValue.startsWith("|") && (nodeValue.indexOf("|--|") != -1)) {
            // 分割表格按行读取
            var tables = nodeValue.split("\n");
            var newTable = "<table>";
            var lineCount = 0;

            for (var j = 0; i < tables.length; j++) {
              lineCount++;
              var line = tables[j];
              // undefine是这么判断的
              if (typeof (line) == "undefined") {
                break;
              }

              if (lineCount == 1) {
                var reg = new RegExp("\\|", "g"); //g,表示全部替换。
                line = line.replace(reg, "</th><th>");
                line = line.substring(5, line.length - 4);
                line = "<tr>" + line + "</tr>";
              } else if (lineCount == 2) {
                continue;
              } else {
                var reg = new RegExp("\\|", "g"); //g,表示全部替换。
                line = line.replace(reg, "</td><td>");
                line = line.substring(5, line.length - 4);
                line = "<tr>" + line + "</tr>";
              }
              newTable = newTable + line;

            }
            newTable = newTable + "</table>";
            newHtml = newHtml + "<p>" + newTable + "</p>";
          } else {
            // 如果不是表格数据加回去
            newHtml = newHtml + "<p>" + nodeValue + "</p>";
          }
        } else {
          newHtml = newHtml + "</br>";
        }
      }else{
        // 原生的html处理
        newHtml = doHtml(el,newHtml)
      }
    });
    return newHtml;
  }


  // 处理所有的html原生信息
  function doHtml( el,newHtml) {
    var nodeValue = el.outerHTML;
    // if(el instanceof HTMLTableElement  ) {
    //   var newTable = "<p><table>" + nodeValue + "</table></p>";
    //   newHtml = newHtml + newTable;
    // }

    newHtml = newHtml + nodeValue;
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
  #myform{
    float: left;
    width:100%;
    height: 100%;
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

  #mytitle{
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


  #show-content table {
    width: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
    border-collapse: collapse;

  }
  #show-content table th{
    padding: 8px 12px;
    text-align: left;
    color: #333;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  #show-content table td{
    padding: 8px 12px;
    text-align: left;
    color: #333;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  #show-content table tr:nth-child(odd){
    background:#F4F4F4;
  }



</style>
