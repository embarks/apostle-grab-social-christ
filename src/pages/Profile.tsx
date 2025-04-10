
import React from 'react';
import Navigation from '@/components/Navigation';
import UserAvatar from '@/components/UserAvatar';
import Post from '@/components/Post';
import { Button } from '@/components/ui/button';
import { Calendar, Edit, MapPin, UserPlus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const posts = [
    {
      content: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. #DailyWisdom",
      timestamp: "2h ago",
      likes: 42,
      comments: 7,
      shares: 12
    },
    {
      content: "Just performed my first miracle! Water into wine at a wedding. The host was impressed! #MiracleMaker",
      timestamp: "1d ago",
      likes: 365,
      comments: 24,
      shares: 57,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      content: "When you're feeling lost, remember that even the most divine among us sometimes need 40 days in the wilderness to find our path. #Reflection",
      timestamp: "3d ago",
      likes: 123,
      comments: 9,
      shares: 4
    }
  ];

  const user = {
    name: "Jesus Christ",
    username: "thetruejesus",
    bio: "Spreading love and gathering apostles one miracle at a time. Walking on water since 30 AD.",
    location: "Nazareth, Galilee",
    joined: "December 25, 25 AD",
    apostles: 12,
    following: 1,
    isDivine: true
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-100/50 to-white">
      <Navigation />
      
      <div className="relative">
        {/* Cover image */}
        <div className="h-64 bg-gradient-to-r from-divine-300 to-divine-500 relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        </div>
        
        {/* Profile header */}
        <div className="container mx-auto px-4">
          <div className="relative -mt-20 mb-4 flex justify-between">
            <UserAvatar 
              name={user.name} 
              size="xl" 
              status="divine" 
              className="divine-float"
            />
            <Button className="mt-auto bg-divine-400 hover:bg-divine-500">
              <UserPlus className="h-4 w-4 mr-2" />
              Follow Jesus
            </Button>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-cinzel font-bold">{user.name}</h1>
                <p className="text-divine-500">@{user.username}</p>
              </div>
              <Button variant="outline" className="h-9 border-divine-300">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            
            <p className="mt-3 text-gray-700">{user.bio}</p>
            
            <div className="flex flex-wrap mt-3 text-sm text-gray-500">
              <div className="flex items-center mr-4">
                <MapPin className="h-4 w-4 mr-1" />
                {user.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Joined {user.joined}
              </div>
            </div>
            
            <div className="flex mt-4 space-x-5">
              <div>
                <span className="font-bold">{user.apostles}</span>
                <span className="text-gray-500 ml-1">Apostles</span>
              </div>
              <div>
                <span className="font-bold">{user.following}</span>
                <span className="text-gray-500 ml-1">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-10">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="posts">Sermons</TabsTrigger>
            <TabsTrigger value="miracles">Miracles</TabsTrigger>
            <TabsTrigger value="apostles">Apostles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            {posts.map((post, index) => (
              <Post 
                key={index}
                user={{
                  name: user.name,
                  username: user.username,
                  apostles: user.apostles,
                  isDivine: user.isDivine
                }}
                {...post}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="miracles">
            <div className="divine-card text-center py-10">
              <h3 className="font-cinzel text-xl mb-3">Miracle Archive</h3>
              <p className="text-gray-600 mb-4">
                Record your divine acts and share them with your apostles
              </p>
              <Button className="bg-divine-400 hover:bg-divine-500">
                Record New Miracle
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="apostles">
            <div className="divine-card text-center py-10">
              <h3 className="font-cinzel text-xl mb-3">Your Apostles</h3>
              <p className="text-gray-600 mb-4">
                You have {user.apostles} faithful apostles following your divine journey
              </p>
              <Button className="bg-divine-400 hover:bg-divine-500">
                Gather More Apostles
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
