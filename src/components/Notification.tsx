import React, { useEffect } from 'react';

interface NotificationProps {
    message: string;
    type?: 'success' | 'error';
    duration?: number;
    onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
                                                       message,
                                                       type = 'success',
                                                       duration = 2000,
                                                       onClose
                                                   }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) {
                onClose();
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const baseClasses = `
    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[80%] max-w-[400px]
    p-5
    bg-[#f7f7f7] text-[#373737]
    rounded-[10px]
    shadow-[0_5px_15px_rgba(0,0,0,0.3)]
    z-[1000]
    text-center
    animate-[fadeIn_0.5s_ease-out,fadeOut_0.5s_ease-out_2.5s]
    notification-container ${type}
  `;

    return (
        <div className={baseClasses}>
            <div className="font-['MontserratVariableFontWght',sans-serif] text-[1.2rem] relative">
                {message}
            </div>
        </div>
    );
};

export default Notification;