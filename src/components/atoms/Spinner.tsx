import { cn } from '@/lib/utils';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Spinner = ({
    size = 'md',
    className,
}: SpinnerProps) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
    };

    return (
        <div className={cn('flex justify-center items-center', className)}>
            <div
                className={cn(
                    'animate-spin rounded-full border-t-transparent border-solid',
                    sizeClasses[size],
                    size === 'sm' ? 'border-2' : 'border-4',
                    'border-current'
                )}
            />
        </div>
    );
}; 