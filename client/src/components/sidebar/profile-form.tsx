"use client";

import { CreateProfileData, useCreateProfile } from '@/hooks/useCreateProfile';
import { FC, useState } from 'react';
import InputField from '../fields/input-field';
import SingleSelectField from '../fields/single-select-field';
import TextareaField from '../fields/textarea-field';
import MultiSelectField from '../fields/multi-select-field';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';


const ProfileForm: FC<{
  afterSubmit: () => void;
  profile?: CreateProfileData & { _id?: string };
  isProfile?: boolean;
}> = ({ afterSubmit, profile, isProfile }) => {
  const [formData, setFormData] = useState<CreateProfileData>({
    name:
      profile?.name || JSON.parse(localStorage.getItem("user") || "{}")?.name,
    jobProfile: profile?.jobProfile || "",
    location: profile?.location || "",
    team: profile?.team || "",
    bio: profile?.bio || "",
    skills: profile?.skills || [],
    department: profile?.department || "",
    role: profile?.role || "",
    email:
      profile?.email || JSON.parse(localStorage.getItem("user") || "{}")?.email,
    phone: profile?.phone || "",
    timezone: profile?.timezone || "",
    status: profile?.status || "",
    user: profile?.user || "",
  });

    const { mutate: createProfile, isPending } = useCreateProfile();
    const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (isProfile) {
          createProfile(
              { ...formData, user: user?.userId },
              {
                  onSuccess: () => {
                      afterSubmit();
                  },
              }
          );
      }else{
        updateProfile(
            { ...formData, user: user?.userId, id: profile?._id || "" },
            {
                onSuccess: () => {
                    afterSubmit();
                },
            }
        );
      } 
    };
    
    console.log(isProfile);

  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold">Create Profile</h2>

      <InputField
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
      />
      <InputField
        label="Job Profile"
        placeholder="Enter your job profile"
        value={formData.jobProfile}
        onChange={(value) => setFormData({ ...formData, jobProfile: value })}
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />
      <InputField
        label="Phone"
        placeholder="Enter your phone"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />
      <InputField
        label="Location"
        placeholder="Enter your location"
        value={formData.location}
        onChange={(value) => setFormData({ ...formData, location: value })}
      />
      <SingleSelectField
        label="Team"
        value={formData.team}
        onChange={(value) => setFormData({ ...formData, team: value })}
        options={[
          { label: "Select Team", value: "" },
          { label: "Development", value: "development" },
          { label: "Design", value: "design" },
          { label: "Marketing", value: "marketing" },
          { label: "Sales", value: "sales" },
          { label: "Support", value: "support" },
          { label: "Finance", value: "finance" },
          { label: "Legal", value: "legal" },
          { label: "HR", value: "hr" },
          { label: "Product", value: "product" },
          { label: "Engineering", value: "engineering" },
          { label: "Customer Success", value: "customer_success" },
          { label: "Other", value: "other" },
        ]}
      />

      <TextareaField
        label="Bio"
        placeholder="Enter your bio"
        value={formData.bio}
        onChange={(value) => setFormData({ ...formData, bio: value })}
      />

      <MultiSelectField
        label="Skills"
        value={formData.skills}
        onChange={(value) => setFormData({ ...formData, skills: value })}
        options={[
          { label: "Select Skills", value: "" },
          { label: "React", value: "react" },
          { label: "TypeScript", value: "typescript" },
          { label: "Node.js", value: "nodejs" },
          { label: "Next.js", value: "nextjs" },
          { label: "Vue.js", value: "vuejs" },
          { label: "Angular", value: "angular" },
          { label: "Svelte", value: "svelte" },
          { label: "Tailwind CSS", value: "tailwindcss" },
          { label: "Bootstrap", value: "bootstrap" },
        ]}
      />
      <SingleSelectField
        label="Department"
        value={formData.department}
        onChange={(value) => setFormData({ ...formData, department: value })}
        options={[
          { label: "Select Department", value: "" },
          { label: "Engineering", value: "engineering" },
          { label: "Design", value: "design" },
          { label: "Marketing", value: "marketing" },
          { label: "Sales", value: "sales" },
          { label: "Support", value: "support" },
          { label: "Finance", value: "finance" },
          { label: "Legal", value: "legal" },
          { label: "HR", value: "hr" },
        ]}
      />
      <SingleSelectField
        label="Role"
        value={formData.role}
        onChange={(value) => setFormData({ ...formData, role: value })}
        options={[
          { label: "Select Role", value: "" },
          { label: "Developer", value: "developer" },
          { label: "Designer", value: "designer" },
        ]}
      />
      <SingleSelectField
        label="Status"
        value={formData.status}
        onChange={(value) => setFormData({ ...formData, status: value })}
        options={[
          { label: "Select Status", value: "" },
          { label: "Available", value: "available" },
          { label: "Busy", value: "busy" },
          { label: "Away", value: "away" },
          { label: "Offline", value: "offline" },
        ]}
      />
      <SingleSelectField
        label="Timezone"
        value={formData.timezone}
        onChange={(value) => setFormData({ ...formData, timezone: value })}
        options={[
          { label: "Select Timezone", value: "" },
          { label: "UTC-12", value: "UTC-12" },
          { label: "UTC-11", value: "UTC-11" },
          { label: "UTC-10", value: "UTC-10" },
          { label: "UTC-9", value: "UTC-9" },
          { label: "UTC-8", value: "UTC-8" },
          { label: "UTC-7", value: "UTC-7" },
          { label: "UTC-6", value: "UTC-6" },
          { label: "UTC-5", value: "UTC-5" },
          { label: "UTC-4", value: "UTC-4" },
        ]}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md"
        disabled={isPending || isUpdating}
      >
        {isPending || isUpdating ? !isProfile ? "Updating Profile..." : "Creating Profile..." : !isProfile ? "Update Profile" : "Create Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;
