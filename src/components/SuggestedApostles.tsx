
import React from 'react';
import UserAvatar from './UserAvatar';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

interface ApostleCardProps {
  user: {
    name: string;
    username: string;
    avatar?: string;
    isDivine?: boolean;
    apostles: number;
    bio: string;
  };
}

const ApostleCard: React.FC<ApostleCardProps> = ({ user }) => {
  return (
    <div className="divine-card mb-3">
      <div className="flex items-center">
        <UserAvatar 
          name={user.name} 
          src={user.avatar} 
          status={user.isDivine ? 'divine' : 'online'} 
          size="md"
        />
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-sm">{user.name}</h4>
              <p className="text-xs text-divine-500">@{user.username}</p>
              <p className="text-xs mt-1 line-clamp-1">{user.bio}</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="h-8 px-3 text-divine-400 border-divine-300 hover:bg-divine-100 hover:text-divine-500"
            >
              <UserPlus className="h-4 w-4 mr-1" />
              <span className="text-xs">Gather</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-divine-500 font-medium">
        {user.apostles} Apostles
      </div>
    </div>
  );
};

const SuggestedApostles: React.FC = () => {
  const suggestedUsers = [
    {
      name: "Peter Simon",
      username: "rockfaith",
      apostles: 12,
      bio: "Fisherman turned follower. The rock upon which I build my church."
    },
    {
      name: "Mary Magdalene",
      username: "marymagdalene",
      apostles: 8,
      bio: "Loyal disciple and witness. First to see the risen Lord."
    },
    {
      name: "Thomas Didymus",
      username: "doubtingthomas",
      apostles: 5,
      bio: "Skeptic who needed proof. Blessed are those who believe without seeing."
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-divine-200">
      <h3 className="font-cinzel font-semibold text-lg mb-3">Potential Apostles</h3>
      {suggestedUsers.map((user, index) => (
        <ApostleCard key={index} user={user} />
      ))}
      <Button className="w-full mt-2 bg-divine-300 hover:bg-divine-400 text-white">
        Find More Apostles
      </Button>
    </div>
  );
};

export default SuggestedApostles;
