import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { InfoIcon, CircleAlertIcon, CircleHelpIcon, LightbulbIcon, TriangleAlertIcon, OctagonAlertIcon } from "lucide-react";

import { cn } from '@/lib/utils';

const alertVariants = cva(
	'relative w-full rounded-lg border-l-8 rounded-l-xl px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3 [&>svg]:text-foreground [&>svg~*]:pl-7',
	{
		variants: {
			variant: {
				note: 'bg-border/65 dark:bg-border text-foreground border-gray-300',
                info: 'border-info/50 bg-info/15 text-foreground dark:border-info dark:bg-info/35 [&>svg]:text-foreground',
                question: 'border-question/50 bg-question/15 text-foreground dark:border-question dark:bg-question/35 [&>svg]:text-foreground',
                tip: 'border-tip/50 bg-tip/15 text-foreground dark:border-tip dark:bg-tip/35 [&>svg]:text-foreground',
                warning: 'border-warning/50 bg-warning/15 text-foreground dark:border-warning dark:bg-warning/35 [&>svg]:text-foreground',
				danger: 'border-destructive/50 bg-destructive/15 text-foreground dark:border-destructive dark:bg-destructive/35 [&>svg]:text-foreground',
			},
		},
		defaultVariants: {
			variant: 'note',
		},
	},
);

const Alert = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role="alert"
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn(
			'mb-1 font-medium text-base leading-none tracking-tight',
			className,
		)}
		{...props}
	/>
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('text-base mt-2 [&_p]:leading-relaxed', className)}
		{...props}
	/>
));
AlertDescription.displayName = 'AlertDescription';

const AlertNote = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"note"} className={`group mb-4 alert-note ${className}`}>
            <InfoIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Note"}</AlertTitle>
            {children}
        </Alert>
    )
};

const AlertInfo = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"info"} className={`group mb-4 alert-info ${className}`}>
            <CircleAlertIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Info"}</AlertTitle>
            {children}
        </Alert>
    )
};

const AlertQuestion = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"question"} className={`group mb-4 alert-question ${className}`}>
            <CircleHelpIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Question"}</AlertTitle>
            {children}
        </Alert>
    )
};

const AlertTip = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"tip"} className={`group mb-4 alert-tip ${className}`}>
            <LightbulbIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Tip"}</AlertTitle>
            {children}
        </Alert>
    )
};

const AlertWarning = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"warning"} className={`group mb-4 alert-warning ${className}`}>
            <TriangleAlertIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Warning"}</AlertTitle>
            {children}
        </Alert>
    )
};

const AlertDanger = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => {
    return (
        <Alert variant={"danger"} className={`group mb-4 alert-danger ${className}`}>
            <OctagonAlertIcon className='h-5 w-5' />
            <AlertTitle>{title ?? "Danger"}</AlertTitle>
            {children}
        </Alert>
    )
};

export {
    Alert,
    AlertDescription,
    AlertNote,
    AlertInfo,
    AlertQuestion,
    AlertTip,
    AlertWarning,
    AlertDanger,
};
