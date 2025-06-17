import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentOrders() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Organic Tomatoes</p>
          <p className="text-sm text-muted-foreground">2 kg - $12.50</p>
        </div>
        <div className="ml-auto font-medium">+$12.50</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>FC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fresh Carrots</p>
          <p className="text-sm text-muted-foreground">1.5 kg - $8.00</p>
        </div>
        <div className="ml-auto font-medium">+$8.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>GL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Green Lettuce</p>
          <p className="text-sm text-muted-foreground">3 heads - $6.75</p>
        </div>
        <div className="ml-auto font-medium">+$6.75</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Red Bell Peppers</p>
          <p className="text-sm text-muted-foreground">1 kg - $9.25</p>
        </div>
        <div className="ml-auto font-medium">+$9.25</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sweet Corn</p>
          <p className="text-sm text-muted-foreground">6 ears - $4.50</p>
        </div>
        <div className="ml-auto font-medium">+$4.50</div>
      </div>
    </div>
  )
}
