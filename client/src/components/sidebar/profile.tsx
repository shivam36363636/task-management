import { FC, useState } from 'react';
import { useGetProfile } from '@/hooks/useGetProfile';
import { Edit } from 'lucide-react';
import ProfileForm from './profile-form';

interface ProfileData {
  name: string;
  jobProfile: string;
  location: string;
  team: string;
  bio: string;
  skills: string[];
  department: string;
  role: string;
  email: string;
  phone: string;
  timezone: string;
  status: string;
  lastActive: Date;
  joinedAt: Date;
}

const Profile: FC = () => {
    const [isEdit,setIsEdit] = useState(false);
  const { data: profileData, isLoading, error } = useGetProfile();

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading profile</div>;
  }

    const profile: ProfileData = profileData?.data?.data;
    
    if(isEdit){
        return <ProfileForm isProfile={profile === null} profile={{...profile,user:typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user") || "{}")?.userId : null}} afterSubmit={()=>setIsEdit(false)} />
    }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              {profile?.name ? profile.name[0].toUpperCase() : 'N'}
            </div>
            <div>
              <h2 className="text-xl font-bold truncate">{profile?.name || <span className="text-gray-400">Name Not Available</span>}</h2>
              <p className="text-gray-600 mt-1 text-sm truncate">{profile?.jobProfile || <span className="text-gray-400">Job Profile Not Available</span>}</p>
            </div>
          </div>
          <button onClick={() => setIsEdit(true)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Edit className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Location</p>
            <p className="text-gray-700 text-sm truncate">{profile?.location || <span className="text-gray-400">Location Not Available</span>}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Department</p>
            <p className="text-gray-700 text-sm truncate">{profile?.department || <span className="text-gray-400">Department Not Available</span>}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Team</p>
            <p className="text-gray-700 text-sm truncate">{profile?.team || <span className="text-gray-400">Team Not Available</span>}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className="text-gray-700 text-sm truncate">{profile?.status || <span className="text-gray-400">Status Not Available</span>}</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Bio</p>
          <p className="text-gray-700 leading-relaxed text-sm truncate">{profile?.bio || <span className="text-gray-400">Bio Not Available</span>}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-500">Skills</p>
          <div className="flex flex-wrap gap-2">
            {profile?.skills?.length > 0 ? (
              profile.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs truncate">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No Skills Listed</p>
            )}
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <p className="text-sm font-medium text-gray-500">Contact Information</p>
          <div className="space-y-2">
            <p className="text-gray-700 text-sm truncate">{profile?.email || <span className="text-gray-400">Email Not Available</span>}</p>
            <p className="text-gray-700 text-sm truncate">{profile?.phone || <span className="text-gray-400">Phone Not Available</span>}</p>
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <p className="text-sm font-medium text-gray-500">Time Information</p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700 truncate">Timezone: {profile?.timezone || <span className="text-gray-400">Timezone Not Available</span>}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
