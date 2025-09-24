import { cn } from './cn';
export default function IconButton({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className={cn('relative grid place-items-center size-10 rounded-full border border-white/10 text-[#c5c5c5] hover:bg-white/10', className)} {...rest} />
}