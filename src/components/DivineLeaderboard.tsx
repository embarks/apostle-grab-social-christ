
import React from 'react';
import UserAvatar from './UserAvatar';
import { Crown, ArrowUp } from 'lucide-react';

interface LeaderboardUserProps {
  rank: number;
  user: {
    name: string;
    username: string;
    avatar?: string;
    isDivine?: boolean;
    apostles: number;
    change?: number;
  };
}

const LeaderboardUser: React.FC<LeaderboardUserProps> = ({ rank, user }) => {
  return (
    <div className={`flex items-center p-3 rounded-lg mb-2 ${rank === 1 ? 'bg-divine-100 divine-glow' : 'hover:bg-divine-100'}`}>
      <span className="font-cinzel font-bold w-6 text-divine-500">{rank}</span>
      <UserAvatar 
        name={user.name} 
        src={user.avatar} 
        status={rank === 1 ? 'divine' : 'online'} 
        size="md"
        className="mx-3"
      />
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className="font-semibold">{user.name}</h4>
          {rank === 1 && (
            <Crown className="h-4 w-4 ml-1 text-yellow-500" />
          )}
        </div>
        <p className="text-xs text-divine-500">@{user.username}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-lg apostles-count">{user.apostles}</p>
        <div className="flex items-center text-xs text-green-500">
          {user.change && user.change > 0 && (
            <>
              <ArrowUp className="h-3 w-3 mr-0.5" />
              <span>+{user.change}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const DivineLeaderboard: React.FC = () => {
  const leaderboardData = [
    {
      name: "John Apostle",
      username: "beloved",
      apostles: 144,
      change: 12,
      isDivine: true
    },
    {
      name: "James Thunder",
      username: "sonofthunder",
      apostles: 120,
      change: 3
    },
    {
      name: "Matthew Tax",
      username: "taxcollector",
      apostles: 95,
      change: 5
    },
    {
      name: "Luke Physician",
      username: "dearfriend",
      apostles: 84,
      change: 2
    },
    {
      name: "Mark Evangelist",
      username: "lionmark",
      apostles: 72,
      change: 7
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-divine-200">
      <h3 className="font-cinzel font-semibold text-lg mb-3">Divine Leaderboard</h3>
      <p className="text-sm text-gray-500 mb-4">Those closest to divinity this week</p>
      
      {leaderboardData.map((user, index) => (
        <LeaderboardUser key={index} rank={index + 1} user={user} />
      ))}
    </div>
  );
};

export default DivineLeaderboard;
