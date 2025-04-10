
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'divine';
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  src, 
  name, 
  size = 'md', 
  status,
  className
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20'
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase();
  };
  
  const avatarBorderClass = status === 'divine' ? 'ring-4 ring-divine-300 divine-glow' : 
                           status === 'online' ? 'ring-2 ring-green-500' : 
                           status === 'away' ? 'ring-2 ring-yellow-500' : '';

  return (
    <div className={`relative ${className}`}>
      <Avatar className={`${sizeClasses[size]} ${avatarBorderClass}`}>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback className="bg-divine-200 text-divine-700">{getInitials(name)}</AvatarFallback>
      </Avatar>
      {status && status !== 'divine' && (
        <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white 
          ${status === 'online' ? 'bg-green-500' : 
            status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'}`} />
      )}
    </div>
  );
};

export default UserAvatar;
