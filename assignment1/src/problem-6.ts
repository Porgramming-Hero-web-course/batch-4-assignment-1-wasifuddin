interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    var updatedProfile: Profile = {
      name: profile.name,
      age: profile.age,
      email: profile.email,
    };
  
    if (updates.name !== undefined) {
      updatedProfile.name = updates.name;
    }
    if (updates.age !== undefined) {
      updatedProfile.age = updates.age;
    }
    if (updates.email !== undefined) {
      updatedProfile.email = updates.email;
    }
  
    return updatedProfile;
  }
  
  var myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
  

  