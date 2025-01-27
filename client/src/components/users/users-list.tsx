
import { useGetAllUsers } from "@/hooks/useGetAllUsers";

export default function UsersList() {
    const { data, isLoading, error } = useGetAllUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;    
    const formattedUsers = data?.data?.data?.map((user: { userId: string, name: string }) => ({
        id: user.userId,
        name: user.name,
    }));

    console.log(formattedUsers);

    return <div className="flex items-center">
        {formattedUsers.map((user: { id: string, name: string }, index: number) => (
            <div 
                title={user.name} 
                key={user.id} 
                className="w-8 h-8 rounded-full flex items-center cursor-pointer justify-center uppercase text-sm font-bold -ml-2 first:ml-0 border-2 border-white"
                style={{
                    backgroundColor: `hsl(${index * 50}, 70%, 80%)`,
                }}
            >
                {user.name?.split(' ').map(word => word[0]).join('')}
            </div>
        ))}
    </div>;
}