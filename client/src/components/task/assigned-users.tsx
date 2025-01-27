import { useGetAllUsers } from "@/hooks/useGetAllUsers";

export default function AssignedUsers({assignedUsers}: {assignedUsers: string[]}) {
    const { data, isLoading, error } = useGetAllUsers();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const formattedUsers = data?.data?.data?.filter((user: { userId: string }) => assignedUsers.includes(user.userId));
    return <>
    {formattedUsers?.length > 0 && (
   <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Assigned to</p>
        <div className="flex items-center mt-1">
            {formattedUsers?.slice(0, 4).map((user: { userId: string, name: string }, index: number) => (
                <div 
                    title={user.name} 
                    key={user.userId} 
                    className="w-6 h-6 rounded-full flex items-center cursor-pointer justify-center uppercase text-xs font-bold -ml-1 first:ml-0 border-2 border-white"
                    style={{
                        backgroundColor: `hsl(${index * 50}, 70%, 80%)`,
                    }}
                >
                    {user.name?.split(' ').map(word => word[0]).join('')}
                </div>
            ))}
            {formattedUsers?.length > 4 && (
                <div className="w-6 h-6 rounded-full flex items-center cursor-pointer justify-center text-xs font-bold -ml-1 border-2 border-white bg-gray-200">
                    +{formattedUsers.length - 4}
                </div>
            )}
        </div>
    </div>
    )}
    </>
}