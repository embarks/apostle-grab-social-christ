
import React from 'react';
import UserAvatar from './UserAvatar';
import { Calendar, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostProps {
  user: {
    name: string;
    username: string;
    avatar?: string;
    isDivine?: boolean;
    apostles: number;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

const Post: React.FC<PostProps> = ({
  user,
  content,
  timestamp,
  likes,
  comments,
  shares,
  image
}) => {
  return (
    <div className="divine-card mb-4">
      <div className="flex items-start space-x-3">
        <UserAvatar 
          name={user.name} 
          src={user.avatar} 
          status={user.isDivine ? 'divine' : 'online'} 
        />
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="font-semibold">{user.name}</h3>
            <span className="ml-2 text-sm text-divine-500">@{user.username}</span>
            {user.isDivine && (
              <div className="ml-2 px-2 py-0.5 text-xs rounded-full bg-divine-300 text-white">
                Blessed
              </div>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-0.5">
            <Calendar className="w-3 h-3 mr-1" /> {timestamp}
            <span className="mx-1">•</span>
            <span className="apostles-count">{user.apostles} Apostles</span>
          </div>
          <p className="mt-2 text-gray-800">{content}</p>
          {image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img src={image} alt="Post" className="w-full h-auto" />
            </div>
          )}
          <div className="flex justify-between mt-4">
            <button className="flex items-center text-gray-500 hover:text-divine-400">
              <Heart className="w-5 h-5 mr-1" /> {likes}
            </button>
            <button className="flex items-center text-gray-500 hover:text-divine-400">
              <MessageCircle className="w-5 h-5 mr-1" /> {comments}
            </button>
            <button className="flex items-center text-gray-500 hover:text-divine-400">
              <Share2 className="w-5 h-5 mr-1" /> {shares}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
