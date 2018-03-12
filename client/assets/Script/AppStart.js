
function initManager()
{
    cc.me = {};
    var Utils = require("Utils/Utils");
    cc.me.utils = new Utils();
}


cc.Class({
    extends: cc.Component,

    

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },



    // use this for initialization
    onLoad: function () {
        initManager();
        let self = this;

        // this.btn_login = cc.find("Canvas/background/btn_login");
        // this.btn_login.node.on('click', this.callback, this);
        var node = cc.find("Canvas/background/btn_login");  
        cc.me.utils.addClickEvent(node,this.node,"AppStart","myCallback")
        // var clickEventHandler = new cc.Component.EventHandler();
        // clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        // clickEventHandler.component = "AppStart";//这个是代码文件名
        // clickEventHandler.handler = "myCallback";
        // clickEventHandler.customEventData = "test";

        // var button = node.getComponent(cc.Button);
        // button.clickEvents.push(clickEventHandler);


        /*
        var ws = new WebSocket('ws://127.0.0.1:3653')
        ws.onopen = function() {
            // 发送 Hello 消息
            ws.send(JSON.stringify({Hello:{
                Name:'test1'
            }}))
            ws.send(JSON.stringify({C2S_AddUser:{
                Name:'test2'
            }}))
            
            console.log("ws.onopen---------222")
        }

        ws.onmessage = function(evt) {
            console.log( "Received Message: " + evt.data);      
            //var obj = evt.data.parseJSON();  
            var size = evt.data.size

            console.log( "Received Message: size = " + size);   
            
            var reader = new FileReader();
            reader.onload = function(event){
                var content = reader.result;//内容就在这里
                console.log( "Received Message: reader.result = " + reader.result);  
                var obj = JSON.parse(content)

                 if (obj.S2C_AddUser){
                    console.log("obj S2C_AddUser name= " + obj.S2C_AddUser.Name)
                }

                if (obj.Hello){
                    console.log("obj Hello name= " + obj.Hello.Name)
                }

               

             };
            reader.readAsText(evt.data);

             
        };

        ws.onclose = function(evt) {
            console.log("Connection closed.");
        };  

           */ 
     
    },

    myCallback:function (event) {
    
       console.log("onbtnclick---------------11")

    },



    // called every frame
    update: function (dt) {
       // console.log("ws.onopen---------333")
    },
});
