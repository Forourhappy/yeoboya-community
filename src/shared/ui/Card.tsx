import { cn } from '../lib/utils.ts';
import {
  Card as BaseCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './shadcn/card.tsx';

import type { ComponentProps } from "react";
const Card = ({ className, ...props }: ComponentProps<typeof BaseCard>) => {
  return <BaseCard className={cn("p-0", className)} {...props} />;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
};
