import { BellRing, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Clément a mis à jour ses statistiques.",
    description: "il y a 1 heure",
  },
  {
    title: "Mamadus vous a identifié dans une nouvelle vidéo.",
    description: "il y a 1 heure",
  },
  {
    title: "Vassily vous a envoyé une invitation à un nouveau match !",
    description: "il y a 2 heures",
  },
]


export function Notification() {
  return (
    <>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Vous avez 3 notifications non lues.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Notifications Push
            </p>
            <p className="text-sm text-muted-foreground">
              Activer les notifications push.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-secondary-foreground" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Marquer toutes comme lues
        </Button>
      </CardFooter>
    </>
  )
}
