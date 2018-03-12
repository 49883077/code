package internal

import (
	"github.com/name5566/leaf/log"
	"github.com/name5566/leaf/gate"
	"server/msg"
	"reflect"
)

func init() {
	// 向当前模块（game 模块）注册 Hello 消息的消息处理函数 handleHello
	handler(&msg.C2S_AddUser{}, handleAddUser)
	handler(&msg.Hello{}, handleHello)
}

func handler(m interface{}, h interface{}) {
	skeleton.RegisterChanRPC(reflect.TypeOf(m), h)
}

func handleHello(args []interface{}) {
	log.Debug("handleHello------")
	// 收到的 Hello 消息
	m := args[0].(*msg.Hello)
	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("hello %v", m.Name)

	// 给发送者回应一个 Hello 消息
	a.WriteMsg(&msg.Hello{
		Name: "client",
	})
}

func handleAddUser(args []interface{}) {
	log.Debug("handleAddUser------")
	// 收到的 Hello 消息
	m := args[0].(*msg.C2S_AddUser)
	// 消息的发送者
	a := args[1].(gate.Agent)

	// 输出收到的消息的内容
	log.Debug("hello %v", m.Name)

	// 给发送者回应一个 Hello 消息
	a.WriteMsg(&msg.S2C_AddUser{
		Name: "Hello" + m.Name,
	})
}