
import React from 'react';
import Navigation from '@/components/Navigation';
import UserAvatar from '@/components/UserAvatar';
import { UserPlus, Star, Heart, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NotificationProps {
  user: {
    name: string;
    avatar?: string;
    isDivine?: boolean;
  };
  action: 'follow' | 'like' | 'comment' | 'mention' | 'miracle';
  content?: string;
  timestamp: string;
  read: boolean;
}

const Notification: React.FC<NotificationProps> = ({ user, action, content, timestamp, read }) => {
  const getActionIcon = () => {
    switch (action) {
      case 'follow':
        return <UserPlus className="h-5 w-5 text-divine-400" />;
      case 'like':
        return <Heart className="h-5 w-5 text-red-500" />;
      case 'comment':
      case 'mention':
        return <MessageCircle className="h-5 w-5 text-divine-400" />;
      case 'miracle':
        return <Star className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getActionText = () => {
    switch (action) {
      case 'follow':
        return 'decided to follow you';
      case 'like':
        return 'liked your sermon';
      case 'comment':
        return 'commented on your post';
      case 'mention':
        return 'mentioned you in a sermon';
      case 'miracle':
        return 'witnessed your miracle';
      default:
        return '';
    }
  };

  return (
    <div className={`p-4 border-b ${!read ? 'bg-divine-100/70' : ''}`}>
      <div className="flex items-start">
        <UserAvatar 
          name={user.name} 
          src={user.avatar} 
          status={user.isDivine ? 'divine' : 'online'} 
        />
        <div className="ml-3 flex-1">
          <div className="flex items-center">
            <p className="text-sm">
              <span className="font-semibold">{user.name}</span>{' '}
              {getActionText()}
            </p>
            <div className="ml-auto flex items-center">
              <span className="text-xs text-gray-500">{timestamp}</span>
              {getActionIcon()}
            </div>
          </div>
          {content && (
            <p className="text-sm text-gray-600 mt-1">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const notifications = [
    {
      user: { name: "Peter Simon", isDivine: false },
      action: 'follow',
      timestamp: 'Just now',
      read: false
    },
    {
      user: { name: "Mary Magdalene" },
      action: 'like',
      timestamp: '2h ago',
      read: false
    },
    {
      user: { name: "Thomas Didymus" },
      action: 'comment',
      content: "I won't believe it unless I see it with my own eyes!",
      timestamp: '1d ago',
      read: true
    },
    {
      user: { name: "Judas Iscariot" },
      action: 'miracle',
      timestamp: '2d ago',
      read: true
    },
    {
      user: { name: "John Apostle", isDivine: true },
      action: 'mention',
      content: "Learning from the best @thetruejesus! #Discipleship",
      timestamp: '3d ago',
      read: true
    }
  ] as NotificationProps[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-100/50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-cinzel font-bold text-divine-600 mb-6">
          Notifications
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-divine-200">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
              <TabsTrigger value="follows">Followers</TabsTrigger>
              <TabsTrigger value="miracles">Miracles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="m-0">
              {notifications.map((notification, index) => (
                <Notification key={index} {...notification} />
              ))}
            </TabsContent>
            
            <TabsContent value="mentions" className="m-0">
              {notifications
                .filter(n => n.action === 'mention')
                .map((notification, index) => (
                  <Notification key={index} {...notification} />
                ))}
            </TabsContent>
            
            <TabsContent value="follows" className="m-0">
              {notifications
                .filter(n => n.action === 'follow')
                .map((notification, index) => (
                  <Notification key={index} {...notification} />
                ))}
            </TabsContent>
            
            <TabsContent value="miracles" className="m-0">
              {notifications
                .filter(n => n.action === 'miracle')
                .map((notification, index) => (
                  <Notification key={index} {...notification} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
