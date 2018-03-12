package gate

import (
	"server/msg"
	"server/game"
)

func init() {
	msg.Processor.SetRouter(&msg.C2S_AddUser{}, game.ChanRPC)

	msg.Processor.SetRouter(&msg.Hello{}, game.ChanRPC)
}
