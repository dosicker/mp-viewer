# 微信小程序自定义简洁图片预览组件
## 食用方式

1.下载 **imageViewer** 到本地，或者copy下来到项目，放置 **components**;

2.应用于页面下，json文件引入：
**"usingComponents": {
							......
    "imageViewer": "....../imageViewer/imageViewer"
  }**;
  
3.页面模板写入：
```javascript
<imageViewer onShow="{{onShow}}" onClass="{{onClass}}" imgUrl="{{imgUrl}}" bind:hideViewer="hideQRCode"></imageViewer>
```

## 其中
onShow 控制dom

onClass 控制效果

imgUrl 预览图链接


## 废话少说，看图
![Alt](assents/demo.gif)
