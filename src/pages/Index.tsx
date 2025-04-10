
import React from 'react';
import Navigation from '@/components/Navigation';
import Post from '@/components/Post';
import SuggestedApostles from '@/components/SuggestedApostles';
import DivineLeaderboard from '@/components/DivineLeaderboard';
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';

const Index = () => {
  const feedPosts = [
    {
      user: {
        name: "Peter Simon",
        username: "rockfaith",
        apostles: 12
      },
      content: "Just caught the biggest fish of my life, both literally and spiritually! #Fishers #OfMen",
      timestamp: "10m ago",
      likes: 28,
      comments: 5,
      shares: 2
    },
    {
      user: {
        name: "Mary Magdalene",
        username: "marymagdalene",
        apostles: 8
      },
      content: "Sharing wisdom is the greatest gift. Remember that love is patient, love is kind. #DivineWisdom",
      timestamp: "45m ago",
      likes: 42,
      comments: 7,
      shares: 12,
      image: "https://images.unsplash.com/photo-1504993945773-3ae8a0fecb6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      user: {
        name: "John Apostle",
        username: "beloved",
        apostles: 144,
        isDivine: true
      },
      content: "In the beginning was the Word, and the Word was with God, and the Word was God. #Genesis",
      timestamp: "2h ago",
      likes: 365,
      comments: 24,
      shares: 57
    },
    {
      user: {
        name: "Thomas Didymus",
        username: "doubtingthomas",
        apostles: 5
      },
      content: "Unless I see the nail marks in his hands and put my finger where the nails were, I will not believe. #ShowMe #Skeptical",
      timestamp: "3h ago",
      likes: 17,
      comments: 42,
      shares: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-100/50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-6 border border-divine-200">
                <h2 className="font-cinzel font-semibold text-xl mb-3">Your Divine Journey</h2>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Current Status</h3>
                  <p className="text-lg font-bold">Disciple</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Apostles Gathered</h3>
                  <p className="text-2xl font-bold apostles-count">5</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Divine Rank</h3>
                  <p className="text-lg font-medium">#78</p>
                </div>
                <Button className="w-full bg-divine-400 hover:bg-divine-500">
                  View Divine Path
                </Button>
              </div>
              
              <DivineLeaderboard />
            </div>
          </div>
          
          {/* Middle column - Feed */}
          <div className="lg:col-span-2">
            <div className="divine-card mb-6">
              <div className="flex items-center">
                <h2 className="font-cinzel font-semibold text-xl">Divine Feed</h2>
                <Button className="ml-auto bg-divine-400 hover:bg-divine-500">
                  <PenSquare className="h-4 w-4 mr-2" />
                  New Sermon
                </Button>
              </div>
            </div>
            
            {feedPosts.map((post, index) => (
              <Post 
                key={index}
                {...post}
              />
            ))}
          </div>
          
          {/* Right column - Sidebar */}
          <div className="col-span-1">
            <div className="sticky top-20">
              <SuggestedApostles />
              
              <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-divine-200">
                <h3 className="font-cinzel font-semibold text-lg mb-3">Divine Commandments</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-divine-400 font-bold mr-2">1.</span>
                    <span>Gather apostles and spread the word</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-divine-400 font-bold mr-2">2.</span>
                    <span>Post your divine wisdom daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-divine-400 font-bold mr-2">3.</span>
                    <span>Perform miracles to inspire followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-divine-400 font-bold mr-2">4.</span>
                    <span>Engage with other prophets respectfully</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 text-xs text-gray-500 text-center">
                <p>© 33 AD JesusQuest</p>
                <p className="mt-1">Terms · Privacy · Cookies · Divine Guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
