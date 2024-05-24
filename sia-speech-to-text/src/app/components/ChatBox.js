'use client'
import { useChatHistoryStore } from "@/store"
import { ScrollArea } from "@/components/ui/scroll-area"
const ChatBox = () => {
    const messages = useChatHistoryStore(state => state.messages)
    return (
        <div className="flex flex-col h-full">
            <h2 className="text-3xl font-semibold text-center mb-6 basis-[10%]">Chat History</h2>
            <ScrollArea className="p-4 basis-full">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type == 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className="bg-gray-200 p-2 rounded-lg m-2 flex space-x-2">
                            {message.type == 'user' ? 'User' : "SIA"}: {message.text}
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    )
}

export default ChatBox