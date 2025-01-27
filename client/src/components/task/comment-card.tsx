import { useGetAllUsers } from "@/hooks/useGetAllUsers";

export default function CommentCard({ content, userId }: { content: string, userId: string }) {
    const { data: usersData } = useGetAllUsers()
    const users = usersData?.data?.data || []
    const user = users.find((user: { userId: string }) => user.userId === userId) as { name: string, email: string }
    return <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex flex-col gap-1.5 justify-between">
            <div className="flex items-center gap-2">
                <div 
                    title={user?.name} 
                    className="w-6 h-6 rounded-full flex items-center justify-center uppercase text-xs font-bold border-2 border-white"
                    style={{
                        backgroundColor: `hsl(${user?.name?.length * 30}, 70%, 80%)`
                    }}
                >
                    {user?.name?.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
            </div>
        </div>
        <div className="mt-2 text-sm text-gray-600"> {content} </div>
    </div>;
}
