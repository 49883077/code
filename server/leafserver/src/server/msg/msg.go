package msg

import (
	//"github.com/name5566/leaf/network"
	"github.com/name5566/leaf/network/json"
)

//var Processor network.Processor

// 使用默认的 JSON 消息处理器（默认还提供了 protobuf 消息处理器）
var Processor = json.NewProcessor()


func init() {
	Processor.Register(&S2C_AddUser{})
	Processor.Register(&C2S_AddUser{})
	Processor.Register(&Hello{})
}


type Hello struct {
	Name string
}
