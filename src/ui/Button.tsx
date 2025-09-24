import { cn } from './cn';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'danger' | 'outline' | 'link';
  size?: 'sm' | 'md';
  pill?: boolean;
};

export default function Button({ variant='primary', size='md', pill=true, className, disabled, ...rest }: Props) {
  const base = 'inline-flex items-center justify-center font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none';
  const sizes = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm';
  const radius = pill ? 'rounded-pill' : 'rounded-xl';
  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-blue-500 hover:bg-bluex-600 text-white shadow-card',
    secondary: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-card',
    ghost: 'bg-[#5a2c00]/80 hover:bg-[#5a2c00] border border-white/10 text-white',
    light: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-neutral-300 text-neutral-800 hover:bg-neutral-50',
    link: 'text-blue-700 hover:text-blue-800 px-0 py-0'
  };
  return <button className={cn(base, sizes, radius, variants[variant], className)} disabled={disabled} {...rest} />;
}