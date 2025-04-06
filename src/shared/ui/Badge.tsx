import { cn } from '../lib/utils.ts';
import { Badge as BaseBadge } from './shadcn/badge.tsx';

import type { ComponentProps } from "react";

const Badge = ({ className, ...props }: ComponentProps<typeof BaseBadge>) => {
  return <BaseBadge className={cn(className)} {...props} />;
};

export { Badge };
