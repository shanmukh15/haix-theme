import {
  BellIcon,
  CheckIcon,
  Pencil1Icon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';
import { Button } from '@uirack/components/ui/button';
import { cn } from '@uirack/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@uirack/components/ui/card';
import { Switch } from '@uirack/components/ui/switch';
import { Checkbox } from '@uirack/components/ui/checkbox';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@uirack/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@uirack/components/ui/tooltip';

const notifications = [
  {
    title: 'User Account',
    description: 'nestle',
    helpText: 'this is to set so and so parameter in search',
  },
  {
    title: 'User Tag',
    description: 'nestle',
    helpText: 'this is to set so and so parameter in search',
  },
  {
    title: 'HashTag',
    description: 'nestle',
    helpText: 'this is to set so and so parameter in search',
  },
];

export function ChannelChooser({ className, ...props }) {
  return (
    <Card className={cn('w-[280px]', className)} {...props}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>media</AvatarFallback>
              </Avatar>
              <CardDescription>
                <div className="mx-4">Company Name</div>
                <Button variant="link" className="text-xs -my-1 text-muted">
                  View date limits
                </Button>
              </CardDescription>
            </div>
            <div className="flex-end">
              <Switch />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr_25px] items-start justify-between pb-2 last:mb-0 last:pb-0"
            >
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="space-y-1">
                  <p className="flex text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="flex items-center text-sm text-muted-foreground">
                    {notification.description}
                    <Button variant="ghost">
                      <Pencil1Icon />
                    </Button>
                  </p>
                </div>
              </label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <InfoCircledIcon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{notification.helpText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
