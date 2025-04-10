
import React from 'react';
import Navigation from '@/components/Navigation';
import DivineLeaderboard from '@/components/DivineLeaderboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-100/50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cinzel font-bold text-center text-divine-600 mb-8">
          Divine Leaderboard
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="alltime">All Time</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily">
              <DivineLeaderboard />
            </TabsContent>
            
            <TabsContent value="weekly">
              <DivineLeaderboard />
            </TabsContent>
            
            <TabsContent value="alltime">
              <DivineLeaderboard />
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 p-6 divine-card text-center">
            <h3 className="font-cinzel text-xl mb-2">Your Divine Status</h3>
            <p className="text-sm text-gray-600 mb-4">
              You're currently ranked <span className="font-bold text-divine-500">#78</span>
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="text-4xl font-bold apostles-count">12</div>
              <div className="text-lg">Apostles</div>
            </div>
            <p className="mt-4 text-sm">Gather 13 more apostles to rise into the top 50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
